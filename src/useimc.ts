import { useState, useEffect } from 'react'

export function useIMC() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [imc, setIMC] = useState<number | null>(null)
  const [classificacao, setClassificacao] = useState('')
  const [erro, setErro] = useState('')

  useEffect(() => {
    const dadosSalvos = localStorage.getItem('ultimoIMC')
    if (dadosSalvos) {
      const { peso, altura, imc, classificacao } = JSON.parse(dadosSalvos)
      setPeso(peso)
      setAltura(altura)
      setIMC(imc)
      setClassificacao(classificacao)
    }
  }, [])

  const calcularIMC = () => {
    setErro('')

    const pesoNum = parseFloat(peso)
    const alturaNum = parseFloat(altura)

    if (!peso || !altura) {
      setErro('Preencha todos os campos.')
      return
    }

    if (isNaN(pesoNum) || isNaN(alturaNum)) {
      setErro('Digite apenas números válidos.')
      return
    }

    if (pesoNum <= 0 || alturaNum <= 0) {
      setErro('Peso e altura devem ser maiores que zero.')
      return
    }

    const imcCalculado = pesoNum / (alturaNum * alturaNum)
    const imcFinal = parseFloat(imcCalculado.toFixed(2))
    setIMC(imcFinal)

    let classificacaoFinal = ''
    if (imcFinal < 18.5) {
      classificacaoFinal = 'Baixo peso'
    } else if (imcFinal < 25) {
      classificacaoFinal = 'Peso normal'
    } else if (imcFinal < 30) {
      classificacaoFinal = 'Sobrepeso'
    } else if (imcFinal < 35) {
      classificacaoFinal = 'Obesidade grau I'
    } else if (imcFinal < 40) {
      classificacaoFinal = 'Obesidade grau II'
    } else {
      classificacaoFinal = 'Obesidade grau III'
    }

    setClassificacao(classificacaoFinal)

    localStorage.setItem('ultimoIMC', JSON.stringify({
      peso,
      altura,
      imc: imcFinal,
      classificacao: classificacaoFinal
    }))
  }

  return {
    peso,
    setPeso,
    altura,
    setAltura,
    imc,
    classificacao,
    erro,
    calcularIMC,
  }
}