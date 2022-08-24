import React, { useState} from 'react';
import { Button, Form} from 'semantic-ui-react';




export default function Create() {
    
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    
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
    return (
        <div className="container">
            <Form className="create-form">
                <Form.Field>
                    <label>User Name: </label>
                    <input placeholder='User Name' onChange={(e) => setUserName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>E-mail: </label>
                    <input placeholder='E-mail' onChange={(e) => setEmail(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Password: </label>
                    <input placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData} type='submit' className='submit'>Submit</Button>
            </Form>
        </div>
       
    )
}

