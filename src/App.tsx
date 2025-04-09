import React, { useState } from 'react';
import './index.css';
import { Calculator } from 'lucide-react'; // ícone opcional usando lucide-react

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = () => {
    const alturaMetros = parseFloat(altura) / 100;
    const pesoFloat = parseFloat(peso);

    if (!alturaMetros || !pesoFloat) {
      setResultado('Preencha os dois campos corretamente.');
      return;
    }

    const imc = pesoFloat / (alturaMetros * alturaMetros);
    const imcFormatado = imc.toFixed(2);

    let mensagem = '';

    if (imc < 18.5) mensagem = 'Abaixo do peso';
    else if (imc < 24.9) mensagem = 'Peso normal';
    else if (imc < 29.9) mensagem = 'Sobrepeso';
    else if (imc < 34.9) mensagem = 'Obesidade grau 1';
    else if (imc < 39.9) mensagem = 'Obesidade grau 2';
    else mensagem = 'Obesidade grau 3';

    setResultado(`IMC: ${imcFormatado} — ${mensagem}`);
  };

  return (
    <div className="card-container">
      <div className="card">
        <h2>
          <Calculator size={24} /> Calculadora de IMC
        </h2>
        <div className="inputs">
          <input
            type="number"
            placeholder="Peso (kg)"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
          <input
            type="number"
            placeholder="Altura (cm)"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </div>
        <button onClick={calcularIMC}>Calcular</button>
        <div className="resultado">{resultado}</div>
      </div>
    </div>
  );
}

export default App;
