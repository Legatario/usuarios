import React, { useEffect, useState} from 'react';
import { Button, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';



export default function Read(){

    // criando consts

    const setData = (data) => {
        let {id, username, email, password} = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
     }

     //chamada GET para ao backend, caso não tem retorno ele faz a chamada para a api

    const [call, setUsers] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/users",{
            method: "GET",
            headers:{ 'Content-Type':'application/json'
            }  
        })
        .then((res)=> res.json())
        .then((data)=>{setUsers(data)})
        .catch(error => console.error(error)
        (fetch("https://fakestoreapi.com/users",{
            method: "GET",
            headers:{ 'Content-Type':'application/json'
            }  
        })
        .then((res)=> res.json())
        .then((data)=>{setUsers(data)}))
        )
    },[])

    // fim do method GET

    // methodo DELET caso não tem acesso ao backend, faz a chamada ao API, a api retorna no console apenas o id que foi removida, não remove de fato
    const onDelete = (id) =>{
        fetch(`http://localhost:5000/users/${id}`,{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
            .catch(fetch(`https://fakestoreapi.com/users/${id}`,{
                method:"DELETE"
            })
                .then(res=>res.json())
                .then(json=>console.log(json)))
    }

    // fim do methodo DELET
    return(

        //CRIA  tabela
        <div className="create-table">
            <Table singleLine>
                <Table.Header>
                    <Table.Row className='header-table'>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Username</Table.HeaderCell>
                        <Table.HeaderCell>E-mail</Table.HeaderCell>
                        <Table.HeaderCell>Password</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                {/* cria o corpo da tabela, usando o map para cada chamada do api */}
                <Table.Body>
                        {call.map((data)=>{
                            return(
                                <Table.Row>
                                    <Table.Cell>{data.id}</Table.Cell>
                                    <Table.Cell>{data.username}</Table.Cell>
                                    <Table.Cell>{data.email}</Table.Cell>
                                    <Table.Cell>{data.password}</Table.Cell>
                                    <Table.Cell><Link to={"/update"}><Button onClick={()=> setData(data)} className='btn-update'>Update</Button></Link></Table.Cell>
                                    <Table.Cell><Button onClick={()=> onDelete(data.id)} className='btn-delete'>Delete</Button></Table.Cell>   
                                </Table.Row>
                            )
                        })}
                </Table.Body>
            </Table>
            {/* fim da tabela */}
        </div>
    )
}