import Header from '../../components/Header'
import Listagem from '../../components/Listagem'
import Footer from '../../components/Footer'
import axios from 'axios';

//{dados.map(p => <Listagem name={p.name}/>)}
const PaginaInicial = ({dados}) => (
  <div>
      <Header/>
      <Listagem name={dados}/>
      <Footer/>
  </div>
);


/**
 * Usamos o metodo statico getInitialProps para 
 * Carregar dados quando a pagina eh 
 * inicializada
 */
PaginaInicial.getInitialProps = async () => {
  const response = await axios.get(
    'http://localhost:3000/api/people'
  )
  return {dados : response.data}
}

export default PaginaInicial