import React, { useState} from 'react';
import { Button, Form} from 'semantic-ui-react';






export default function Create() {

    //variaveis do painel
    
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    
    // chamada para novo usuario  method POST
    const postData = () => {

        fetch("http://localhost:5000/users",{
            method:"POST",
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
                    <input id="username" placeholder='username' required onChange={(e) => setUserName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label for="email">E-mail: </label>
                    <input id="email" placeholder='Email'required onChange={(e) => setEmail(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label for="password">Password: </label>
                    <input id="password" placeholder='Password' required onChange={(e) => setPassword(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData} type='submit' className='submit'>Submit</Button>
            </Form>
        </div>
       
    )
}

