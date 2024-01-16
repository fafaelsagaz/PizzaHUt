import "./entrar.css";
import React, { useState } from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";
import { MDBBtn } from "mdb-react-ui-kit";
import { MDBIcon } from "mdb-react-ui-kit";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { MDBInput } from "mdb-react-ui-kit";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Entrar() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();
  const [erroLogin, setErroLogin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email,
      senha,
    };

    try {
      const response = await axios.post('http://localhost/api2/login', user, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
      });

      console.log('Login realizado com sucesso:', response.data);

      
      navigate('/cardapio');
    } catch (error) {
      console.error('Erro ao realizar login:', error);

     
      setErroLogin(true);
    }
  };
   





  
  return (
    <>
      <MDBNavbar light bgColor="white" id="nav">
        <MDBContainer>
          <MDBNavbarBrand href="#">
            <MDBBtn color="light" rippleColor="" className="but" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="seta"
                width="18"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ea1d2c"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-arrow-left"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Voltar para home
            </MDBBtn>

            <img src="../img/Ruth1.png" id="hut" alt="" loading="lazy" />
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      <MDBContainer >
      <form onSubmit={handleSubmit} className="form_main">
          <h1>Seja Bem-vindo</h1>
          <p className="heading">Login</p>
          <div className="inputContainer">
            <input
            placeholder="Email"
              label="Email"
              id="username"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inputContainer">
            <input
            placeholder="Senha"
              label="Senha"
              id="password"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            
          </div>

          <button id="button">Entrar</button>
          <div className="signupContainer">
          
          </div>
          <p>Não tem conta?<a href="/cadastro">Cadastre-se</a>
          
          </p>
          
        </form>
        {erroLogin && <p id="erroMensagem"> Email ou senha incorretos</p>}
      </MDBContainer>
    </>
  );
}
