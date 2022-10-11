import { Container, Row, Col } from "react-bootstrap";
import '../css/login-signup.css';

var signUpUsernameValid, signUpPasswordValid, signUpEmailValid;
export default function Login() {
    return (
        <Container className="pageWrap">
            <Row>
                <Col lg={6} className="login">
                    <h1>Login to Your Account</h1>
                    <form className="form">
                        <input type='text' placeholder="Email" id="loginEmail" />
                        <input type='text' placeholder="Password" id="loginPassword" />
                        <button className="signInBtn" type="submit">Sign In</button>
                    </form>
                </Col>
                <Col lg={6} className="signup">
                    <h1>New Here?</h1>
                    <p>Sign up and have fun playing all of our math related games!</p>
                    <form name='signUp' onSubmit={handleSubmit}>
                        <input type='text' placeholder="Username" id="username" />
                        <input type='text' placeholder="Email" id="email" name='email' />
                        <input type='password' placeholder="Password" id="password" />
                        <input type='password' placeholder="Re-EnterPassword" id="rePassword" />
                        <button className="signUpBtn" type="submit">Sign up</button>
                    </form>
                </Col>

            </Row>
        </Container>
    )
}
const handleSubmit = event => {
    event.preventDefault();
    console.log('form submitted')
    let form = document.getElementsByName("signUp")[0];
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    let maxChar = 20
    let minChar = 3
    sendUserData(username, password, email);

    if (username.length >= minChar && username.length <= maxChar) {
        console.log('username correct length')
        signUpUsernameValid = true;
    } else {
        signUpUsernameValid = false;
        console.log('username is not correct length')

    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById('email').value)) {
        console.log('email validation worked')
        signUpEmailValid = true;
        //      return (true)
    } else {
        signUpEmailValid = false;

        console.log("You have entered an invalid email address!")
        //        return (false)
    }

    // password is invalid, email is invalid
    // email is not valid
    confirmPassword();

    let successMsg = document.getElementById("successMsg");
    let newMsg = "";

    if (successMsg == null || successMsg == undefined) {
        successMsg = document.createElement("span");
        successMsg.id = "successMsg";
        if (!signUpUsernameValid) {
            successMsg.innerHTML += "Username is invalid";
        }
        if (!signUpEmailValid) {
            if (successMsg.innerHTML.length > 0) successMsg.innerHTML += ", ";
            successMsg.innerHTML += "Email is invalid";
        }
        if (!signUpPasswordValid) {
            if (successMsg.innerHTML.length > 0) successMsg.innerHTML += ", ";
            successMsg.innerHTML += "Password must be 6-20 characters long";
        }
        form.before(successMsg);
        if (successMsg.innerHTML.length <= 0) {
            sendUserData(username, password, email);
        }

    }
    else {
        successMsg.innerHTML = "";
        if (!signUpUsernameValid) {
            successMsg.innerHTML += "Username is invalid";
        }
        if (!signUpEmailValid) {
            if (successMsg.innerHTML.length > 0) successMsg.innerHTML += ", ";
            successMsg.innerHTML += "Email is invalid";
        }
        if (!signUpPasswordValid) {
            if (successMsg.innerHTML.length > 0) successMsg.innerHTML += ", ";
            successMsg.innerHTML += "Password must be 6-20 characters long";
        }
        if (successMsg.innerHTML.length <= 0) {
            sendUserData(username, password, email);
        }
    }

}

function confirmPassword() {
    let password1 = document.getElementById('password').value;
    let password2 = document.getElementById('rePassword').value;
    let minChar = 6;
    let maxChar = 20;
    console.log(password1 + " " + password2 + " " + password1.length + "  " + password2.length);
    if (password1 === password2 && (password1.length >= minChar && password1.length <= maxChar)) {
        console.log('success');
        signUpPasswordValid = true;
    } else {
        console.log('error');
        signUpPasswordValid = false;
    }
}

// addUser: async (parent, args) => {
//     const user = await User.create(args);
//     const token = signToken(user);

//     return { token, user };
//   },
function sendUserData(username, password, email) {


    const dataSend = {
        //"query": "mutation addUser($username:String!, $email:String!, $password:String!) { addUser(username:$username, email:$email, password:$password) {user {username, email, password}}}"
        //"query": "query User{users{username}}"
    }

    fetch('http://localhost:3001/graphql', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
          mutation AddUser {
            addUser(username: "${username}",email: "${email}",password: "${password}") {
              username
              email
              password
            }
          }`,
        }),

    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}