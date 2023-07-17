import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Selecione o dia da semana:</h1>
      <ul>
        <li><Link to="/treino/Segunda-feira">Segunda-feira</Link></li>
        <li><Link to="/treino/Terca-feira">Terça-feira</Link></li>
        <li><Link to="/treino/Quarta-feira">Quarta-feira</Link></li>
        <li><Link to="/treino/Quinta-feira">Quinta-feira</Link></li>
        <li><Link to="/treino/Sexta-feira">Sexta-feira</Link></li>
        <li><Link to="/treino/Sabado">Sábado</Link></li>
        <li><Link to="/treino/Domingo">Domingo</Link></li>
      </ul>
    </div>
  );
}

export default Home;
