import "./cadastro.css";
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import axios from 'axios';

export default function Cadastro() {
  const [nome, setNome] = useState([]);
  const [email, setEmail] = useState([]);
  const [senha, setSenha] = useState([]);
  const [confirmaSenha, setConfirmaSenha] = useState([]);
  const [telefone, setTelefone] = useState([]);
  const [cep, setCep] = useState([]);
  const [logradouro, setLogradouro] =useState([]);
  const [bairro, setBairro] = useState([]);
  const [cidade, setCidade] = useState([]);
  const [estado, setEstado] =useState([]);
  const navigate = useNavigate();
  const [erroGeral, setErroGeral] = useState('');
  const handleZipCode = async (event) => {
    const zipCode = event.target.value;

    try {
      // Requisição para obter os dados do CEP
      const response = await axios.get(`http://localhost/api2/getAddress/${zipCode}`);
      const addressData = response.data;

      // Preencher automaticamente os campos do endereço
      setLogradouro(addressData.logradouro);
      setBairro(addressData.bairro);
      setCidade(addressData.localidade);
      setEstado(addressData.uf);
    } catch (error) {
      console.error('Erro ao obter informações do CEP:', error);
    }

    setCep(zipCode);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

  

    // Restaurar a mensagem de erro geral
    setErroGeral('');

    const user = {
      nome,
      email,
      senha,
      confirmaSenha,
      telefone,
      cep,
      bairro,
      logradouro,
      estado,
      cidade
    };

    try {
      
      const response = await axios.post('http://localhost/api2/cadastro', user, {
        headers : {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    });

      console.log('Cadastro realizado com sucesso:', response.data);

      navigate('/entrar');
    } catch (error) {
      console.error('Erro ao cadastrar:', error);

      
      setErroGeral('Erro ao cadastrar usuário. Por favor, preencha todos os campos.');
    }
  };


  








  
  return (
    <>
      <MDBNavbar light bgColor='white' id="nav">
        <MDBContainer>
          <MDBNavbarBrand href='#'>
          <MDBBtn color='white' rippleColor='dark' className="but" href="/">
          <svg xmlns="http://www.w3.org/2000/svg" id="seta" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="#ea1d2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        Voltar para home
      </MDBBtn>
     

            <img src='../img/Ruth1.png' id="hut"alt=''loading='lazy'
            />
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      <MDBContainer breakpoint='md'>
      <MDBRow>
        <MDBCol size="12 " md="6" sm="12">
          <div className="g-col-6 .g-col-md-4">    <img src="../img/cadastro.png" alt="" id="cas"/></div>
       </MDBCol>
       <MDBCol size="12 mt-5 mb-" md="6" sm="6" >
        <h2 className="mt-5">Criar minha conta</h2>
        <p>Preencha os dados para fazer login</p>
      <form onSubmit={(e) => handleSubmit(e)}>

           
      {erroGeral && <p id='erroMensagem'>{erroGeral}</p>}
        <input
              type="text"
              className="form"
              placeholder="Nome e sobrenome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              type="text"
              className="form"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="form"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <input
              type="password"
              className="form"
              placeholder="Confirmação da Senha"
              value={confirmaSenha}
              onChange={(e) => setConfirmaSenha(e.target.value)}
            />
            <input
              type="text"
              className="form"
              placeholder="Telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
            <input
              type="text"
              maxLength="9"
              onKeyUp={handleZipCode}
              className="form"
              placeholder="CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />
             <input
                type="text"
                className="form"
                placeholder="Logradouro"
                value={logradouro}
                onChange={(e) => setLogradouro(e.target.value)}
              />
              <input
                type="text"
                className="form"
                placeholder="Bairro"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
              />
              <input
                type="text"
                className="form"
                placeholder="Cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
              />
              <input
                type="text"
                className="form"
                placeholder="Estado"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
              />
            <MDBCol size="8 mt-4" md="12" sm="12" className="but">
            <input type="submit" id="but1" value='Cadastrar'/>
              
       </MDBCol>
       </form>
       </MDBCol>
      </MDBRow>
            
        
        
        
      </MDBContainer>
      

    </>
  );
}


