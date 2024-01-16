import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./home.css";
import foto from "/public/img/Ruth1.png";
import banner from "/public/img/banner.png";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

import Footer from "./Footer";

export default function Home() {
  const [pizzaria, setPizzaria] = useState([]);

  function fetchData() {
    fetch('http://localhost/api2/pizzaria')
      .then((response) => response.json())
      .then((json) => setPizzaria(json));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="body">
      <nav className="navbar fixed-top navbar-light">
        <img src={foto} alt="" id="hut" />
        <MDBBtn id="entrar" href="/entrar">Entrar</MDBBtn>
        <MDBBtn id="conta" href="/cadastro">Criar conta</MDBBtn>
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
        </div>
      </nav>
      <div id="c1b1">
        <img src={banner} alt="" id="banner" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div class="card" id="cardprin">
                <img
                  id="cardimg"
                  src="../img/banneredit.png"
                  class="card-img-top"
                  alt="Fissure in Sandstone"
                />
                <div className="card-body">
                  <h5>Peça sua pizza em casa ou retire na loja mais próxima</h5>
                  <p>
                    Informe seu endereço para encontrarmos a Pizza Hut mais
                    próxima de você
                  </p>

                  <div className="input-group mb-3 ms-5 mt-3" id="input">
                    <span id="pesq" class="input-group-text">
                      <img class="imagi" src="../img/23.jpg" alt="" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Endereço que está"
                      id="barra"
                    />
                    <br />
                    <button
                      type="button"
                      className="btn btn-danger btn-m "
                      id="buscar"
                    >
                      Buscar
                    </button>
                  </div>
                </div>
              </div>
              
              <h2 id="nov">Temos novidades saindo do forno!!</h2>
              <p id="desc">
                Aproveite! Peça agora nossas novidades informando seu endereço
                acima e dê um <span id="hut1"><a href="">Ruth</a></span> no seu dia
              </p>
              <br />
              <img id="tart" src="../img/tartabanner.png" alt="Turtle Banner" className="img-fluid mt-5" />
              <MDBContainer>

                <h2>Ta na mão as mais pedidas</h2>
                <img id="cardspz" src="https://cdn-icons-png.flaticon.com/512/7183/7183811.png" alt="" />
                <br />

                <MDBRow className="d-flex justify-content-center align-items-center" id="tudo">

                  {pizzaria.slice(0, 3).map((pizzas) => (
                    <MDBCol key={pizzas.id} className="col-md-4 mt-5">
                      <div style={{ margin: '', borderRadius: '15px' }}>

                        <div class="card2" id="cardhome">
                          <img src={pizzas.img} alt="" className="card-img2"></img>
                          <div class="card-title2">{pizzas.nome}</div>
                          <div class="card-subtitle2"></div>
                          <hr class="card-divider2" />
                          <div class="card-footer2">
                            <div class="card-price2"><span>$</span> {pizzas.valor}</div>
                            <button class="card-btn2">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path></svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </MDBCol>
                  ))}
                </MDBRow>
                <div id="vertodas">
                  <a id="ver" href=""> Para ver todas faça login</a>
                </div>
              </MDBContainer>
           
            </div>
          </div>
        </div>
      </div>

      <MDBFooter className='text-center ' color='white' bgColor='dark'>
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
    </div>


  );
}


