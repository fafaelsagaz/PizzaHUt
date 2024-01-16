import React, { useState } from 'react';
import { MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBBtn, MDBInput } from 'mdb-react-ui-kit';

const PopUpForm = ({ isOpen, onClose, addPizza }) => {
  const [formData, setFormData] = useState({
    nome: '',
    valor: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione aqui a lógica para adicionar a pizza
    addPizza(formData);
    // Limpe o formulário após a adição da pizza
    setFormData({
      nome: '',
      valor: '',
    });
    // Fechar o pop-up após o envio do formulário
    onClose();
  };

  return (
    <MDBModal isOpen={isOpen} centered>
      <MDBModalHeader toggle={onClose}>Adicionar Pizza</MDBModalHeader>
      <MDBModalBody>
        <form onSubmit={handleSubmit}>
          <MDBInput
            label='Nome da Pizza'
            type='text'
            name='nome'
            value={formData.nome}
            onChange={handleChange}
          />
          <MDBInput
            label='Valor'
            type='text'
            name='valor'
            value={formData.valor}
            onChange={handleChange}
          />
          <MDBBtn type='submit'>Adicionar Pizza</MDBBtn>
        </form>
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color='secondary' onClick={onClose}>
          Fechar
        </MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  );
};

export default PopUpForm;
