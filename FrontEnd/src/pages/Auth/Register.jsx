import "./Auth.css"

// Components
import { Link } from "react-router-dom"

// Hooks
import { useState, useEffect } from "react"

const Register = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div id="register">
      <h2>Zebragram</h2>
      <p className="subtitle">Cadastre-se para ver as fotos dos seus amigos!</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirmar a senha"/>
        <input type="submit" value="Cadastrar"/>
        <p>Já tem conta? <Link to="/login">Clique aqui</Link></p>
      </form>
    </div>
  )
}

export default Register