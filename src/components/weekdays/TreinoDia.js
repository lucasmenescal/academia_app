import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import jsonData from './data/list.json';
import CountdownModal from './CountdownModal';
import AddExercicio from './AddExercicio';

import { FiClock, FiPlus } from 'react-icons/fi';
import './style.css';




const TreinoDia = () => {
  const [data, setData] = useState(null);
  
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAddExercicioOpen, setModalAddExercicioOpen] = useState(false);
  const [exercicios, setExercicios] = useState([]);

  const { dia } = useParams();

  const fecharModalAddExercicio = () => {
    setModalAddExercicioOpen(false);
  };
  
  const abrirModalAddExercicio = () => {
    setModalAddExercicioOpen(true);
  };
 
  const abrirModal = () => {
    setModalOpen(true);
  };

  const adicionarExercicio = (novoExercicio) => {
    setExercicios([...exercicios, novoExercicio]);

    const newData = { ...data };
    newData['Dias-da-Semana'][dia]['Treino'].push(novoExercicio);
    setData(newData);

    // Atualizar o arquivo JSON
    // NOTA: Isso não atualiza o arquivo original, apenas a representação em memória do JSON
    // Você precisará implementar a lógica para salvar o arquivo JSON no sistema de arquivos
    const jsonContent = JSON.stringify(newData);
    console.log('Arquivo JSON atualizado:', jsonContent);
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
  let titulo = data["Dias-da-Semana"][dia]["DayofWeek"]
  let musculo = data["Dias-da-Semana"][dia]["Musculo"]
  let treino = data["Dias-da-Semana"][dia]["Treino"]
  return (
    <div>
      <h1>{titulo}</h1>
      <h2>{musculo}</h2>
      <h2>Treino:</h2>
      <button onClick={abrirModalAddExercicio}><FiPlus /></button>
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
              <button onClick={abrirModal}><FiClock  /></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <CountdownModal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)} />
    <AddExercicio isOpen={modalAddExercicioOpen} onClose={fecharModalAddExercicio} onSave={adicionarExercicio} />
    </div>
  );
};

export default TreinoDia;
