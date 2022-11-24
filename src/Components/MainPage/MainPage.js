import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { MainContainer, Form, Input } from './styles'


function MainPage() {
  const [form, onChangeForm] = useForm({ nome: "", idade: "", email: "" })

  const handleClick = (event) => {
    event.preventDefault()
    console.log(form)
    console.log(`nome: ${form.nome}, idade: ${form.idade}, email: ${form.email} `)}


    return (
      <MainContainer>
        <h2>Formulário de inscrição</h2>

        <Form onSubmit={handleClick}>
          <label htmlFor="nome">Nome:</label>
          <Input
            id="nome"
            name="nome"
            value={form.nome}
            onChange={onChangeForm}
          />

          <label htmlFor="idade">Idade:</label>
          <Input
            type="number"
            id="idade"
            name="idade"
            value={form.idade}
            onChange={onChangeForm}
          />

          <label htmlFor="email">E-mail:</label>
          <Input
            id="email"
            name="email"
            value={form.email}
            onChange={onChangeForm}
          />

          <label htmlFor="profissao">Profissão:</label>
          <Input
            id="profissao"
            name="profissao"
            value={form.profissao}
            onChange={onChangeForm}
          />


          <button type="submit">Enviar dados</button>
        </Form>
      </MainContainer>
    )
  }



export default MainPage
