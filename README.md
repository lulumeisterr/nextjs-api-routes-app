
# Descricao
    
    Criado 3 componentes
        1 - Criamos um header
        
        2 - recuperamos a listagem do endpoint localhost:3000/api/people e 
        utilizamos a getInitialProps como um construtor ja setado para carregar os dados
        da lista. usamos o axios para realizar essa acao
        
            2.1 - Criamos uma metodo "PaginaInicial" que recebe um extricter assign (objeto) que compoem todos os componentes desta pagina.
            2.3 - Criamos um componente chamado "Listagem" que recebe um objeto ja inicializado pelo getInitialProps e esse componente é responsavel
                  por listar todas as informacoes que é retornada da api people. usamos expressao lambda para ir iterando os items na tabela e uma estilizacao
                  de componente -> https://bit.dev/semantic-org/semantic-ui-react/table?example=5e9c2ef1c772c5001968ba26.
                  
        3 - Adicionamos um footer(Ja criado) apartir https://mdbootstrap.com/docs/react/navigation/footer/
        
# Install
    npm install na raiz do projeto
 
# Pagina adicionada
    http://localhost:3000/HelloWorldComponents/newPage
   
