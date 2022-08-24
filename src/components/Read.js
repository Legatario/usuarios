import React, { useEffect, useState} from 'react';
import { Button, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';



export default function Read(){

    const setData = (data) => {
        let {id, username, email, password} = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
     }

    const [call, setUsers] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/users",{
            method: "GET",
            headers:{ 'Content-Type':'application/json'
            }  
        })
        .then((res)=> res.json())
        .then((data)=>{setUsers(data)})
        .catch((err)=> console.log(err))
    },[])


    const onDelete = (id) =>{
        fetch(`http://localhost:5000/users/${id}`,{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    }
    return(
        <div className="create-table">
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Username</Table.HeaderCell>
                        <Table.HeaderCell>E-mail</Table.HeaderCell>
                        <Table.HeaderCell>Password</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                        {call.map((data)=>{
                            return(
                                <Table.Row>
                                    <Table.Cell>{data.id}</Table.Cell>
                                    <Table.Cell>{data.username}</Table.Cell>
                                    <Table.Cell>{data.email}</Table.Cell>
                                    <Table.Cell>{data.password}</Table.Cell>
                                    <Table.Cell><Link to={"/update"}><Button onClick={()=> setData(data)}>Update</Button></Link></Table.Cell>
                                    <Table.Cell><Button onClick={()=> onDelete(data.id)}>Delete</Button></Table.Cell>   
                                </Table.Row>
                            )
                        })}
                </Table.Body>
            </Table>
        </div>
    )
}