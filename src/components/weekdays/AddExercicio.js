import React, { useState } from 'react';
import './AddExercicio.css';

const AddExercicio = ({ isOpen, onClose, onSave }) => {
  const [exercicio, setExercicio] = useState('');
  const [repeticoes, setRepeticoes] = useState('');
  const [series, setSeries] = useState('');
  const [descanso, setDescanso] = useState('');

  const handleSave = () => {
    const novoExercicio = {
      Exercicio: exercicio,
      'Repetições': repeticoes,
      'Séries': series,
      Descanso: descanso
    };

    onSave(novoExercicio);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Adicionar Novo Exercício</h2>
        <label>
          Exercício:
          <input
            type="text"
            value={exercicio}
            onChange={(e) => setExercicio(e.target.value)}
          />
        </label>
        <label>
          Repetições:
          <input
            type="text"
            value={repeticoes}
            onChange={(e) => setRepeticoes(e.target.value)}
          />
        </label>
        <label>
          Séries:
          <input
            type="text"
            value={series}
            onChange={(e) => setSeries(e.target.value)}
          />
        </label>
        <label>
          Descanso:
          <input
            type="text"
            value={descanso}
            onChange={(e) => setDescanso(e.target.value)}
          />
        </label>
        <button onClick={handleSave}>Salvar</button>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default AddExercicio;
