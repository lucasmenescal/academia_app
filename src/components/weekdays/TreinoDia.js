import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import jsonData from './data/list.json';
import CountdownModal from './CountdownModal';
import './style.css';




const TreinoDia = () => {
  const [data, setData] = useState(null);
  
  const [modalOpen, setModalOpen] = useState(false);

  const [contador, setContador] = useState(0);
  const { dia } = useParams();
  
  const abrirModal = () => {
    setModalOpen(true);
    setContador(60); // Defina o valor inicial do contador aqui
  };

 

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(jsonData);
      } catch (error) {
        console.error('Erro ao ler o arquivo JSON:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Carregando...</div>;
  }
  // const dataTeste = data["Dias-da-Semana"]
  let titulo = data["Dias-da-Semana"][dia]["DayofWeek"]
  let musculo = data["Dias-da-Semana"][dia]["Musculo"]
  let treino = data["Dias-da-Semana"][dia]["Treino"]
  // let alongamento = data["Exercicios-de-Alongamento"]
  return (
    <div>
      <h1>{titulo}</h1>
      <h2>{musculo}</h2>
      <h2>Alongamento:</h2>
      <table>
      <thead>
        <tr>
          <th>Exercício</th>
          <th>Tempo</th>
        </tr>
      </thead>
      <tbody>
      {treino.map((exercicio, index) => (
          <tr key={index}>
            <td>{exercicio.Exercicio}</td>
            <td>{exercicio["Repetições"]}</td>
          </tr>
        ))}
      </tbody>
    </table>
      <h2>Treino:</h2>
    <table>
      <thead>
        <tr>
          <th>Exercício</th>
          <th>Repetições</th>
          <th>Séries</th>
          <th>Descanso</th>
          <th>Play</th>
        </tr>
      </thead>
      <tbody>
        {treino.map((exercicio, index) => (
          <tr key={index}>
            <td>{exercicio.Exercicio}</td>
            <td>{exercicio["Repetições"]}</td>
            <td>{exercicio["Séries"]}</td>
            <td>{exercicio.Descanso}</td>
            <td>
              <button onClick={abrirModal}>Play</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <CountdownModal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)} countdown={contador} />
    </div>
  );
};

export default TreinoDia;
