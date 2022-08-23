import React from 'react'
import { useState } from 'react'
import S from './Sedex10.module.css'
import CardHistorico from './CardHistorico/CardHistorico'
import CardCepAtual from './CardCepAtual/CardCepAtual'
import gps from './imgSedex/gps.svg'
const Sedex10 = () => {

  //estado que vai armazenar todos os endereços ja pesquisados 
  const [bancoDeCeps, setBancoDeCeps] = useState([])

  //Estado que vai armazenar o ultimo cep pesquisado
  const [cepAtual, setCepAtual] = useState()

  //estado que verifica se a resquisição deu erro
  const [erro, setErro] = useState(false)

  //estado que gerenciar o valor do input
  const [cep, setCep] = useState('')

  //Função que faz a requisição do que foi digitado no input
  async function buscaCep() {
    //Como uma requisição pode dar erro, usamos o try para tratamento de erros
    try {
      //Variavel que armazena a url para pesquisa do cep
      const url = `https://viacep.com.br/ws/${cep}/json/`

      //Em alguns casos a api pode pedir o header da requisição, nesse caso precismos expecificar o formato dos dados que queremos receber
      const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }

      //Primeira parte da requisição, onde passamos a url e os headers como parametro para o fetch
      const response = await fetch(url, { headers })

      //Segunda parte da requisição onde recebemos uma promise e transformamos em json
      const json = await response.json()

      //Quando passamos um cep com 8 digitos mas que não existe esse if retorna um erro ativando o catch 
      if (json.erro) throw new Error('Cep invalido')

      //Caso não seja encontrado um erro entramos nesse else
      else {
        //É criado um objeto apenas com as informações que queremos da resposta de requisição
        const resposta = {
          cep: json.cep,
          logradouro: json.logradouro,
          bairro: json.bairro,
          cidade: json.localidade,
          uf: json.uf,
        }
        //Atualizamos o cep atual com a resposta
        setCepAtual(resposta)

        //Mantemos o que já existe no banco de ceps e adicionamos a resposta
        setBancoDeCeps([...bancoDeCeps, resposta])

        //Limpamos o nosso input
        setCep('')

        //Deixamos o estado de erro como false
        setErro(false)
      }


    }
    //caso seja encontrado algum erro no bloco de código do try, será executado o bloco de código do catch
    catch (err) {
      //Mostramos o erro no console
      console.log(err);

      //Limpamos o estado de cepAtual já que não existe mais um cep atual
      setCepAtual()

      //Alteramos o estado de erro para true
      setErro(true)
    }
  }

  return (
    <div className={S.container} >
      <section className={S.content}>
        <aside className={S.aside}>
          <h3>Histórico</h3>

          {/* Dentro dessa ul será renderizado todo o historico de buscas */}
          <ul>
            {/* Esse map mostra na telas todos os itens que tem dentro do array bancoDeCeps */}
            {bancoDeCeps.map((cep, index) => {
              // Para mostrar na tela retornamos um componente externo passando as props que precisa e uma key
              return (<CardHistorico cepAtual={cep} key={index} />)
            })}
          </ul>
        </aside>
        <main className={S.main}>
          <h1 className={S.titulo}>Busque seu cep</h1>
          <img src={gps} alt='icone gps' className={S.imgGps} />
          <section className={S.busca}>
            <input
              type="text"
              value={cep}
              onChange={({ target }) => setCep(target.value)}
              placeholder='Digite seu cep. EX: 010101011'
            />
            <button onClick={buscaCep}>Buscar</button>
          </section>
          <section className={S.resultado}>
            {/* Validação, se o estado erro estiver como true vai mostrar a tag p com erro
              caso contrario vai verificar se existe algo no estado cepAtual, se existir algo exibe o componente, se não existir não mostra nada
            */}
            {erro ? <p>Cep invalido</p> : !!cepAtual && <CardCepAtual cepAtual={cepAtual} />}
          </section>
        </main>

      </section>
    </div>
  )
}

export default Sedex10