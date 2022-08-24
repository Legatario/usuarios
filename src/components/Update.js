import React, { useState, useEffect } from 'react';
import { Button, Form} from 'semantic-ui-react';





export default function Update() {
    
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [id, setID] = useState('');

    useEffect(()=>{
        setID(localStorage.getItem('ID'));
        setUserName(localStorage.getItem('username'));
        setEmail(localStorage.getItem('email'));
        setPassword(localStorage.getItem('password')); 
    },[])
    
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
    return (
        <div className="container">
            <Form className="create-form">
                <Form.Field>
                    <label>User Name: </label>
                    <input placeholder='User Name' value={username} onChange={(e) => setUserName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>E-mail: </label>
                    <input placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Password: </label>
                    <input placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Field>
                <Button onClick={updateData} type='submit' className='submit'>Update</Button>
            </Form>
        </div>
       
    )
}