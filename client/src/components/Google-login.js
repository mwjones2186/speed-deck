import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import('dotenv').config

const clientId = process.env.GOOGLE_CLIENT_ID;

export const GoogleSignin = () => {

    const [loading, setLoading] = useState('Loading...');
    const [user, setUser] = useState(null);

    // ...
    const responseGoogle = (response) => {
        console.log(response);
    }
    // ...

    return (
        //if the user is logged in, be able to logout
        //if logged out, be able to log in

        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={logout}
            >
            </GoogleLogout>

            <GoogleLogin
                clientId={clientId}
                render={renderProps => (
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />,

            
        </div>
    );
    // document.getElementById('googleButton')
}