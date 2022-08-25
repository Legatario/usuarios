import React, { useState, useEffect } from 'react';
import { Button, Form} from 'semantic-ui-react';



export default function Update() {

    //chamada de variaveis
    
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [id, setID] = useState('');

    //resgatar informação do localStorage de qual usuario foi chamado para fazer as alterações, tbm set nos campos correspondente essas informações usando o value

    useEffect(()=>{
        setID(localStorage.getItem('ID'));
        setUserName(localStorage.getItem('username'));
        setEmail(localStorage.getItem('email'));
        setPassword(localStorage.getItem('password')); 
    },[])
    

    //chamada com o metrod PUT para alterações no backend 
    const updateData = () => {

        fetch(`http://localhost:5000/users/${id}`,{
            method:"PUT",
            headers:{ 'Content-Type':'application/json'
            }, 
            body:JSON.stringify(
                {
                    email: email,
                    username: username,
                    password: password
                }    
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))      
                
        }
        // criação de painel para a interação com o usuario
    return (
        <div className="container">
            <Form className="create-form">
                 <Form.Field>
                    <label for="username">User Name: </label>
                    <input id="username" placeholder='username' value={username} required onChange={(e) => setUserName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label for="email">E-mail: </label>
                    <input id="email" placeholder='Email'required value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label for="password">Password: </label>
                    <input id="password" placeholder='Password' value={password} required onChange={(e) => setPassword(e.target.value)}/>
                </Form.Field>
                <Button onClick={updateData} type='submit' className='update'>Update</Button>
            </Form>
        </div>
       
    )
}