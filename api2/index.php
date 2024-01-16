<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require './vendor/autoload.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With"); 


$app = new \Slim\App;





$app->get('/', function (Request $request, Response $response, array $args) {

    $response->getBody()->write("API");

    return $response;
});

$app->get('/hello/{name}', function (Request $request, Response $response, array $args) {
    $name = $args['name'];
    $response->getBody()->write("Hello, $name");

    return $response;
});

$app->get('/pizzaria', 'getPizzaria');
$app->get('/pizzas/{id}', 'getPizzas');

function getConn()
{
    return new PDO('mysql:host=localhost:3306;dbname=pizzaria',
    'root',
    '',
    array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8")
    );
}

function getPizzaria(Request $request, Response $response, array $args)
{
    $sql = "SELECT * FROM Pizzas";
    $stmt = getConn()->query($sql);
    $pizzas = $stmt->fetchAll(PDO::FETCH_OBJ);
    $response->getBody()->write(json_encode($pizzas));
    return $response;
}

function getPizzas(Request $request, Response $response, array $args)
{
    $id = $args['id'];
    $conn = getConn();
    $sql = "SELECT * FROM pizzas WHERE ID=:id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam("id", $id);
    $stmt->execute();
    $pizzas = $stmt->fetchObject();

    $response->getBody()->write(json_encode($pizzas));
    return $response;
}


$app->get('/bebidas', 'getBebida');
$app->get('/bebida/{id}', 'getBebidas');


function getBebida(Request $request, Response $response, array $args)
{
    $sql = "SELECT * FROM Bebidas";
    $stmt = getConn()->query($sql);
    $bebidas = $stmt->fetchAll(PDO::FETCH_OBJ);
    $response->getBody()->write(json_encode($bebidas));
    return $response;
}

function getBebidas(Request $request, Response $response, array $args)
{
    $id = $args['id'];
    $conn = getConn();
    $sql = "SELECT * FROM bebidas WHERE ID=:id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam("id", $id);
    $stmt->execute();
    $bebidas = $stmt->fetchObject();

    $response->getBody()->write(json_encode($bebidas));
    return $response;
}


$app->post('/cadastro', 'postUsuario');

function postUsuario(Request $request, Response $response)
{
    $data = $request->getParsedBody();

    $conn = getConn();

    $sql = "INSERT INTO users (nome, email, senha, cep, telefone, confirmarSenha, bairro, cidade, estado, logradouro) VALUES (:nome, :email, :senha, :cep, :telefone, :confirmarSenha, :bairro, :cidade, :estado, :logradouro)";
    
    $stmt = $conn->prepare($sql);
    $stmt->bindParam("nome", $data['nome']);
    $stmt->bindParam("email", $data['email']);
    $stmt->bindParam("senha", $data['senha']);
    $stmt->bindParam("cep", $data['cep']);
    $stmt->bindParam("telefone", $data['telefone']);
    $stmt->bindParam("confirmarSenha", $data['confirmaSenha']);
    $stmt->bindParam("bairro", $data['bairro']);
    $stmt->bindParam("cidade", $data['cidade']);
    $stmt->bindParam("estado", $data['estado']);
    $stmt->bindParam("logradouro", $data['logradouro']);

    try {
        $stmt->execute();
        $response->getBody()->write(json_encode(['message' => 'Usuário cadastrado com sucesso']));
        $response = $response->withHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
        return $response->withStatus(201); 
    } catch (\PDOException $e) {
        $response->getBody()->write(json_encode(['error' => 'Erro ao cadastrar usuário']));
        $response = $response->withHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); 
        return $response->withStatus(500);
    }
}


$app->get('/getAddress/{cep}', function (Request $request, Response $response, array $args) {
    $cep = $args['cep'];


    $viaCepUrl = "https://viacep.com.br/ws/{$cep}/json/";
    $viaCepResponse = file_get_contents($viaCepUrl);

   
    $response->getBody()->write($viaCepResponse);
    return $response->withHeader('Content-Type', 'application/json');
});





$app->post('/login', function (Request $request, Response $response) {
    $data = $request->getParsedBody();
    $conn = getConn();

    $email = $data['email'];
    $senha = $data['senha'];

    $sql = "SELECT * FROM users WHERE email = :email AND senha = :senha";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam("email", $email);
    $stmt->bindParam("senha", $senha);

    try {
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user) {
            
            $response->getBody()->write(json_encode(['message' => 'Login feito com sucesso']));
            $response = $response->withHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
            return $response->withStatus(200);
        } else {
           
            $response->getBody()->write(json_encode(['error' => 'Email ou senha incorretos']));
            $response = $response->withHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
            return $response->withStatus(401); 
        }
    } catch (\PDOException $e) {
        error_log('Erro ao realizar login: ' . $e->getMessage());
        $response->getBody()->write(json_encode(['error' => 'Erro ao realizar login']));
        $response = $response->withHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
        return $response->withStatus(500); 
    }
});


$app->post('/add', 'postAddPizzas');

function postAddPizzas(Request $request, Response $response)
{
    $data = $request->getParsedBody();

    $conn = getConn();

    $sql = "INSERT INTO pizzas (nome, valor, img) VALUES (:nome, :valor, :img)";
    
    $stmt = $conn->prepare($sql);
    $stmt->bindParam("nome", $data['nome']);
    $stmt->bindParam("valor", $data['valor']);
    $stmt->bindParam("img", $data['img']);
   

    try {
        $stmt->execute();
        $response->getBody()->write(json_encode(['message' => 'Pizza adicionada com sucesso']));
        $response = $response->withHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
        return $response->withStatus(201); 
    } catch (\PDOException $e) {
        $response->getBody()->write(json_encode(['error' => 'Erro ao adicionar pizza']));
        $response = $response->withHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); 
        return $response->withStatus(500);
    }
}


$app->post('/add2', 'postAddBebidas');

function postAddbebidas(Request $request, Response $response)
{
    $data = $request->getParsedBody();

    $conn = getConn();

    $sql = "INSERT INTO bebidas (nome, valor, img) VALUES (:nome, :valor, :img)";
    
    $stmt = $conn->prepare($sql);
    $stmt->bindParam("nome", $data['nome']);
    $stmt->bindParam("valor", $data['valor']);
    $stmt->bindParam("img", $data['img']);
   

    try {
        $stmt->execute();
        $response->getBody()->write(json_encode(['message' => 'Bebida adicionada com sucesso']));
        $response = $response->withHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
        return $response->withStatus(201); 
    } catch (\PDOException $e) {
        $response->getBody()->write(json_encode(['error' => 'Erro ao adicionar bebida']));
        $response = $response->withHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); 
        return $response->withStatus(500);
    }
}

$app->delete('/remover/{id}', 'deleteProduto');

function deleteProduto(Request $request, Response $response, array $args)
{
    $id = $args['id'];
    $conn = getConn();

    $sql = "DELETE FROM bebidas WHERE ID=:id";

    $stmt = $conn->prepare($sql);
    $stmt->bindParam("id", $id);

    try {
        $stmt->execute();
        $response->getBody()->write(json_encode(['message' => 'Produto removido com sucesso']));
        $response = $response->withHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
        return $response->withStatus(200);
    } catch (\PDOException $e) {
        $response->getBody()->write(json_encode(['error' => 'Erro ao remover produto']));
        $response = $response->withHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
        return $response->withStatus(500);
    }
}


$app->delete('/removerpizza/{id}', 'deletePizza');

function deletePizza(Request $request, Response $response, array $args)
{
    $id = $args['id'];
    $conn = getConn();

    $sql = "DELETE FROM pizzas WHERE ID=:id";

    $stmt = $conn->prepare($sql);
    $stmt->bindParam("id", $id);

    try {
        $stmt->execute();
        $response->getBody()->write(json_encode(['message' => 'Produto removido com sucesso']));
        $response = $response->withHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
        return $response->withStatus(200);
    } catch (\PDOException $e) {
        $response->getBody()->write(json_encode(['error' => 'Erro ao remover produto']));
        $response = $response->withHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
        return $response->withStatus(500);
    }
}



$app->run();




?>