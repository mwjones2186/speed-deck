import { Container, Row, Col } from "react-bootstrap";
import '../css/login-signup.css';

export const Login = () => {
    return (
        <Container className="pageWrap">
            <Row>
                <Col lg={6} className="login">
                    <h1>Login to Your Account</h1>
                    <form className="form">
                        <input type='text' placeholder="Email" id="email" />
                        <input type='text' placeholder="Password" id="password" />
                        <button className="signInBtn" type="submit">Sign In</button>
                    </form>
                </Col>
                <Col lg={6} className="signup">
                    <h1>New Here?</h1>
                    <p>Sign up and have fun playing all of our math related games!</p>
                    <button>Sign up</button>
                </Col>
            </Row>
        </Container>
    )
}