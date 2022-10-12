import { Container, Row, Col } from "react-bootstrap";
import "../css/login-signup.css";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER, LOGIN } from "../utils/mutations";

export default function Login(props) {
    const [formState, setFormState] = useState({
        email: "",
        password: "",
        username: "",
    });
    const [addUser] = useMutation(ADD_USER);
    const [login] = useMutation(LOGIN);

    const handleFormSubmitSignup = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        }

        try {
            console.log(formState);
            const { data } = await addUser({
                variables: {
                    ...formState,
                },
            });

            Auth.login(data.addUser.token);
        } catch (err) {
            console.error(err);
        }

        setFormState({
            email: "",
            password: "",
            username: "",
        })
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmitLogin = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        }

        try {

            const { data } = await login({
                variables: {
                    ...formState,
                },
            });

            Auth.login(data.login.token);
        } catch (err) {
            console.error(err);
        }

        setFormState({
            email: "",
            password: "",
        })
    };

    return (
        <Container className="pageWrap">
      <Row>
        <Col  className="login">
          <h1>Login to Your Account</h1>
          <form onSubmit={handleFormSubmitLogin} className="form">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formState.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              value={formState.password}
              onChange={handleChange}
              placeholder="Password"
            />
            <button className="signInBtn" type="submit">
              Sign In
            </button>
          </form>
        </Col>
        <Col  className="signup">
          <h1>New Here?</h1>
          <p>Sign up and have fun playing all of our math related games!</p>
          <form onSubmit={handleFormSubmitSignup}>
            <input
              type="text"
              placeholder="Username"
              value={formState.username}
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formState.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              value={formState.password}
              onChange={handleChange}
              placeholder="Password"
            />
          <button type="submit">Sign up</button>
          </form>
        </Col>
      </Row>
    </Container>
    )
}