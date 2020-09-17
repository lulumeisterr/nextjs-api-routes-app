import React from 'react';
import Table from '@bit/semantic-org.semantic-ui-react.table'
const style = <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css'/>

/**
 * 
 * https://bit.dev/semantic-org/semantic-ui-react/table?example=5e9c2ef1c772c5001968ba26
 */
const Listagem = ({name}) => (
    
    <div>       
        {style}
            <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Nome</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            {   name.map(p => (
            <Table.Body>
                <Table.Cell>{p.name}</Table.Cell>
            </Table.Body>
             ))}
           </Table>
         
    
        </div>
    )   
export default Listagem
