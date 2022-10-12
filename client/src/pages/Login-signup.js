import { Container, Row, Col } from "react-bootstrap";
import '../css/login-signup.css';
import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import Auth from '../utils/auth';
// import {ADD_USER} from '../utils/mutations'

// function Login(props) {
//   const [formState, setFormState] = useState({ email: '', password: '', username: '' });
//   const [addUser] = useMutation(ADD_USER);

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     const mutationResponse = await addUser({
//       variables: {
//         email: formState.email,
//         password: formState.password,
//         username: formState.username,
        
//       },
//     });
//     const token = mutationResponse.data.addUser.token;
//     Auth.login(token);
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

export default function (){
    return (
        <Container className="pageWrap">
            <Row>
                <Col lg={6} className="login">
                    <h1>Login to Your Account</h1>
                    <form onSubmit={''} className="form">
                        <input 
                        type='text' 
                        placeholder="Email" 
                        id="email" 
                        />
                        <input 
                        type='text' 
                        placeholder="Password" 
                        id="password" 
                        />
                        <button 
                        className="signInBtn" 
                        type="submit"
                        >Sign In</button>
                    </form>
                </Col>



                <Col lg={6} className="signup">
                    <h1>New Here?</h1>
                    <p>Sign up and have fun playing all of our math related games!</p>
                    <form onSubmit={''}>
                        <input 
                        type='text' 
                        placeholder="Username" 
                        id="username"
                        name="username"
                        onChange={''} 
                        />
                        <input 
                        type='text' 
                        placeholder="Email" 
                        id="email" 
                        />
                        <input 
                        type='text' 
                        placeholder="Password" 
                        id="password" 
                        />
                        <input 
                        type='text' 
                        placeholder="Re-EnterPassword" 
                        id="password" />
                    </form>
                    <button>Sign up</button>
                </Col>
               
            </Row>
        </Container>
    )
}
