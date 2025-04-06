import { useState } from 'react';
import './App.css';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = () => {
    const p = parseFloat(peso);
    const aCm = parseFloat(altura);
    if (!p || !aCm) {
      setResultado('Preencha os campos corretamente.');
      return;
    }

    const a = aCm / 100;
    const imc = p / (a * a);
    let classificacao = '';

    if (imc < 18.5) classificacao = 'Abaixo do peso';
    else if (imc < 24.9) classificacao = 'Peso normal';
    else if (imc < 29.9) classificacao = 'Sobrepeso';
    else if (imc < 34.9) classificacao = 'Obesidade grau 1';
    else if (imc < 39.9) classificacao = 'Obesidade grau 2';
    else classificacao = 'Obesidade grau 3';

    setResultado(`IMC: ${imc.toFixed(2)}\nClassificação: ${classificacao}`);
  };

  return (
    <div className="app-container">
      <div className="phone-mockup">
        <div className="phone-header"></div>
        <h1 className="title">Calculadora de IMC</h1>
        <div className="form">
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
          <button onClick={calcularIMC}>Calcular IMC</button>
          {resultado && <pre className="resultado">{resultado}</pre>}
        </div>
      </div>
    </div>
  );
}

export default App;
