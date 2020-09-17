import useSWR from 'swr'
import Person from '../components/Person'

const fetcher = (url) => fetch(url).then((res) => res.json())

/**
 * 
 * Com o SWR, os componentes vão 
 * receber o fluxo de atualizações de dados constante e automaticamente. A interface do usuário será sempre rápida e reativa.
 * 
 * SWR é uma sigla para Stale-While-Revalidate 
 * (traga os dados antigos enquanto avalia 
 *  se tem novos dados)
 * 
 * pega os dados do cache e depois, 
 * por baixo dos panos, é feito uma 
 * requisição ao back end para trazer 
 * os novos dados se possuir, 
 * recarregando a listagem com os novos dados,
 *  de maneira que fique transparente 
 * para o usuário.
 * 
 * https://blog.rocketseat.com.br/react-hook-swr-melhor-ux-no-consumo-de-api-no-front-end-react/
 * 
 */
export default function Index() {
  const { data, error } = useSWR('/api/people', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul>
      {data.map((p, i) => (
        <Person key={i} person={p} />
      ))}
    </ul>
  )
}

