



import "./cardapio.css"
import PopUpForm from './PopUpForm';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBCardOverlay,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBFooter,
  MDBModal,

 
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { MDBIcon } from 'mdb-react-ui-kit';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import foto from "/public/img/Ruth1.png";
import axios from "axios";



export default function Cardapio() {
  const [pizzaria, setPizzaria] = useState([]);
  const [basicModal, setBasicModal] = useState(false);
  const [nome, setNome] = useState([]);
  const [valor, setValor] = useState([]);
  const [img, setImg] = useState([]);
  const [erroGeral, setErroGeral] = useState('');
  const navigate = useNavigate();
  const [staticModal, setStaticModal] = useState(false);
  const [sucessoMsg, setSucessoMsg] = useState('');



  
  const handleSubmit = async (e) => {
    e.preventDefault();

  

    // Restaurar a mensagem de erro geral
    setErroGeral('');
    setSucessoMsg('');

    const pizzas = {
   nome,
   valor,img
    };

    try {
      
      const response = await axios.post('http://localhost/api2/add2', pizzas, {
        headers : {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    });

      console.log('Pizza adicionada com sucesso', response.data);

      setSucessoMsg('Bedida adcionada com sucesso');
      
    } catch (error) {
      console.error('Erro ao adicionar', error);

      
      setErroGeral('Erro ao adicionar pizza. Por favor, preencha todos os campos.');
    }
  };


  const handleSubmit1 = async (e) => {
    e.preventDefault();

  

    // Restaurar a mensagem de erro geral
    setErroGeral('');
    setSucessoMsg('');

    const bebidas = {
   nome,
   valor,img
    };

    try {
      
      const response = await axios.post('http://localhost/api2/add', bebidas, {
        headers : {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    });

      console.log('Bebida adicionada com sucesso', response.data);

      setSucessoMsg('Pizza Adicionada com sucesso');
    } catch (error) {
      console.error('Erro ao adicionar', error);

      
      setErroGeral('Erro ao adicionar Bebida. Por favor, preencha todos os campos.');
    }
  };




  function data() {
    fetch('http://localhost/api2/pizzaria').then((response) => response.json()).then((json) => setPizzaria(json));
  }

  const [bebidas, setBebidas] = useState([]);
  function beb() {
    fetch('http://localhost/api2/bebidas').then((response) => response.json()).then((json) => setBebidas(json));
  }
  useEffect(() => {
    data();
    beb();
  }, []);





  const handleRemoveBebida = async (id) => {
    try {
      await axios.delete(`http://localhost/api2/remover/${id}`);
      setBebidas(bebidas.filter((bebidas) => bebidas.id !== id));
    } catch (error) {
      console.error('Error removing bebida:', error);
    }
  };



  const handleRemovePizza = async (id) => {
    try {
      await axios.delete(`http://localhost/api2/removerpizza/${id}`);
      setBebidas(bebidas.filter((pizzas) => pizzas.id !== id));
    } catch (error) {
      console.error('Error removing bebida:', error);
    }
  };

  const toggleOpen = () => setBasicModal(!basicModal);
  const toggleOpen1 = () => setStaticModal(!staticModal);
  return (
    <>

      <MDBNavbar light bgColor='white  ' id="nav">
        <MDBContainer fluid>
          <div className="img">
            <img src={foto} alt="" id="hut" />
          </div>
          <MDBBtn color='light' rippleColor='dark' id="bot" href="/">
            <div className="">
              <svg id="but" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ea1d2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </div>
            Inicio
          </MDBBtn>
          <MDBBtn color='light' rippleColor='dark' id="bot" href="/">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="24" viewBox="0 0 24 24" fill="none" stroke="#ea1d2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
            </div>
            Cardápio
          </MDBBtn>
          <MDBBtn color='light' rippleColor='dark' id="bot" href="/">

            <img id="pizz" src="https://cdn-icons-png.flaticon.com/512/7183/7183811.png" alt="" />
            Pizzas
          </MDBBtn>
          <MDBBtn color='light' rippleColor='dark' id="loc" href="/">
            <img className="imagi" src="../img/23.jpg" alt="" />

            Av.Capitão Moraes-244
          </MDBBtn>
          <MDBBtn color='light' rippleColor='dark' id="profile" href="/">
            <div className="dropdown">

              <div className="dropdown">
                <a
                  className="dropdown-toggle d-flex align-items-center hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    id="ney"
                    src="data:image/jpeg;base64,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"
                    className="rounded-circle"
                    height="30"
                    width={30}
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
            Meu Perfil
          </MDBBtn>
        </MDBContainer>

      </MDBNavbar>
      <MDBNavbar light bgColor='white ' id="nav">
        <MDBContainer fluid>
          <div className="store">
            <h5 className="loja">
              <svg id="loja" xmlns="http://www.w3.org/2000/svg" width="17" height="24" viewBox="0 0 24 24" fill="none" stroke="#ea1d2c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
              loja:
            </h5>
            <p className="des">PH FCD LITORAL PLAZA - SP</p>
          </div>

          <div className="check">
            <h5 className="deli">Delivery</h5>
            <div className="toggle-switcher">

              <input type="checkbox" id="toggle-switch" class="toggle-input" />
              <label for="toggle-switch" class="toggle-label"></label>

            </div>

            <h5 className="ret">Retirada</h5>
          </div>
          
          <MDBBtn className='me-1' color='warning' onClick={toggleOpen1}>Adicionar Pizza</MDBBtn>
      <MDBModal staticBackdrop tabIndex='-1' open={staticModal} setOpen={setStaticModal}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Cadastrar Pizza</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen1}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            <form onSubmit={handleSubmit1}>

            {sucessoMsg && <p id='sucessoMensagem'>{sucessoMsg}</p>}

            {erroGeral && <p id='erroMensagem'>{erroGeral}</p>}
                <div className="mb-3">
                  <label htmlFor="nome" className="form-label">Nome da Pizza</label>
                  <input
                    type='text'
                    className='form-control'
                    id='nome'
                    name='nome'
                    placeholder="Nome da pizza"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="valor" className="form-label">Valor</label>
                  <input
                    type='text'
                    className='form-control'
                    id='valor'
                    name='valor'
                    placeholder="Valor da pizza"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="img" className="form-label">Imagem</label>
                  <input
                    type='text'
                    className='form-control'
                    id='img'
                    name='img'
                    value={img}
                    placeholder="Endereço da imagem desejada"
                    onChange={(e) => setImg(e.target.value)}
                  />
                </div>
                <MDBBtn type='submit' color='success'>Adicionar Pizza</MDBBtn>
              </form>
              </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleOpen1}>
                Fechar
              </MDBBtn>
             
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
          

      <MDBBtn className='me-1' color='danger' onClick={toggleOpen}>Adicionar Bebida</MDBBtn>
      <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex='-2'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Cadastrar Bebida</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            <form onSubmit={handleSubmit}>

            {sucessoMsg && <p id='sucessoMensagem'>{sucessoMsg}</p>}
            {erroGeral && <p id='erroMensagem'>{erroGeral}</p>}
                <div className="mb-3">
                  <label htmlFor="nome" className="form-label">Nome da Bebida</label>
                  <input
                    type='text'
                    className='form-control'
                    id='nome'
                    name='nome'
                    placeholder="Nome da bebida"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="valor" className="form-label">Valor</label>
                  <input
                    type='text'
                    className='form-control'
                    id='valor'
                    name='valor'
                    placeholder="Valor da bebida"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="img" className="form-label">Imagem</label>
                  <input
                    type='text'
                    className='form-control'
                    id='img'
                    name='img'
                    value={img}
                    placeholder="Endereço da imagem desejada"
                    onChange={(e) => setImg(e.target.value)}
                  />
                </div>
                <MDBBtn type='submit' color='success'>Adicionar Bebida</MDBBtn>
              </form>
              </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleOpen}>
                Fechar
              </MDBBtn>
             
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
        </MDBContainer>
      </MDBNavbar>
      <section className="banner">
        <div className="começo">
          <h5 id="of">Para ofertas exclusivas</h5>
          <MDBBtn className="cont">Criar conta</MDBBtn>
        </div>
        <div className="fim">
          <h5 className="et">Já tem uma conta <a id="link" href="">Entrar</a></h5>
        </div>
      </section>
      <MDBContainer>
        <img id="tartu" src="../img/tartabanner.png" alt="" />
        <h2>Nosso cárdapio de gostosuras</h2>
        <img id="cardspz" src="https://cdn-icons-png.flaticon.com/512/7183/7183811.png" alt="" />
        <div class="cardapios">
          <MDBRow>
            {pizzaria.map((pizzas) => (
              <MDBCol key={pizzas.id} className="col-md-4 mt-5">
                <div style={{ margin: ' ', borderRadius: '15px' }}>
                  <div class="card2">
                    <img src={pizzas.img} alt="" className="card-img2"></img>
                    <div class="card-title2">{pizzas.nome}</div>
                    <div class="card-subtitle2"></div>
                    <hr class="card-divider2" />
                    <div class="card-footer2">
                      <div class="card-price2"><span>$</span> {pizzas.valor}</div>
                      <MDBBtn
                  className="me-2"
                  color="danger"
                  onClick={() => handleRemovePizza(pizzas.id)}
                >
                  Remover
                </MDBBtn>
                      <button class="card-btn2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </MDBCol>
            ))}
          </MDBRow>
          <div className="">
            <h2 id="textbebida">Com sede? vai um refrigerante ai</h2>
            <h4 id="textbebida">🍻 Bebidas</h4>
          </div>
          <MDBRow>
            {bebidas.map((bebidas) => (
              <MDBCol key={bebidas.id} className="col-md-4 mt-5">
                <div style={{ margin: ' ', borderRadius: '15px' }}>
                  <div class="card3" id="cardbebida">
                    <img src={bebidas.img} alt="" className="card-img3"></img>
                    <div class="card-title3">{bebidas.nome}</div>
                    <div class="card-subtitle3"></div>
                    <hr class="card-divider3" />
                    <div class="card-footer3">
                      <div class="card-price3"><span >$</span> {bebidas.valor}</div>
                      <MDBBtn
                  className="me-2"
                  color="danger"
                  onClick={() => handleRemoveBebida(bebidas.id)}
                >
                  Remover
                </MDBBtn>
                      <button class="card-btn3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </MDBCol>
            ))}
          </MDBRow>


        </div>



      </MDBContainer>
      <MDBFooter className='text-center ' color='white' bgColor='dark' id="footer">
        <MDBContainer className='p-4'>

          <section className=''>
            <form action=''>
              <MDBRow className='d-flex justify-content-center'>
                <MDBCol size="auto">
                  <p className='pt-2'>
                    <strong>Envie seu Email para saber novidades</strong>
                  </p>
                </MDBCol>

                <MDBCol md='5' start>
                  <MDBInput contrast type='email' label='Email ' className='mb-4' />
                </MDBCol>

                <MDBCol size="auto">
                  <MDBBtn outline color='light' type='submit' className='mb-4'>
                    Enviar
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
          </section>

          <section className='mb-4'>
            <p>
              Copyright © @2020 PIMENTA VERDE ALIMENTOS LTDA. – CNPJ :09.060.964/0001-08 - AVENIDA DRA RUTH CARDOSO Nº: 4777 – JARDIM UNIVERSIDADE PINHEIROS – SÃO PAULO/SP. Todos os direitos reservados.
            </p>
          </section>

          <section className=''>
            <MDBRow>
              <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Quem somos</h5>

                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='#!' className='text-white'>
                      Rafael Durval
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Mestre do React
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Atendimento ao cliente</h5>

                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='#!' className='text-white'>
                      Fale conosco
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Pesquisa de satisfação
                    </a>
                  </li>

                </ul>
              </MDBCol>

              <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Termos</h5>

                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='#!' className='text-white'>
                      Política de Privacidade
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Adendo à Política de Privacidade
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Política de cookies e anúncios
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Termos de uso
                    </a>
                  </li>
                </ul>
              </MDBCol>

            </MDBRow>
          </section>
        </MDBContainer>

        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2020 Copyright:
          <a className='text-white' href='https://mdbootstrap.com/'>
            Rafael Durval
          </a>
        </div>
      </MDBFooter>

    </>
  )
};