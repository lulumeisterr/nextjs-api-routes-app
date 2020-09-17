import '../styles.module.css'

/**
 * Stateless component (Funcao), Podemos criar componentes no react utilizando funcoes
 * -> Deixa o codigo menos verboso , mais clean
 * 
 * -> Mais rapido pois nao possui varias implementacoes
 * 
 * -> Stateles functional - funcao pura onde so depende das entradas nas assinaturas do metodo , 
 * onde fica mais facil de testar .
 * 
 * 
 * Quando usamos esse component?
 * R : Quando necessitamos renderizar(exibir,fixar,) a tela , acoes simples
 * pois o react somente atualiza o necessário ompara o elemento 
 * novo e seus filhos com os anteriores
 * 
 */

 //extricter assign -> Extrair somente oque eu quero de um objeto
 

const Header = () => {
    return (
        <header id="main">
          <h1>Listagem</h1>
          <style jsx>{`

           *{margin:0;
            padding:0;
            outline: 0;
            box-sizing: border-box;
           }

            #main{
                width: 100%;
                height: 60px;
                display: flex;
                justify-content: center;
                background-color: red;
                align-items: center;
            }
                    `}</style>
                    <style global jsx>{`
                    body{
            font-family: sans-serif;
            background-color: #fafafa;
            color:#333;
            }
          `}</style>
        </header>
      ) 
};

export default Header;

/**
 * Seria a mesma coisa do exemplo a cima
 * 
 */

// class Header extends Component {
//     render(){
//         return <h1>Teste</h1>
//     }
// }