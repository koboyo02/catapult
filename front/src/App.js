// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Axios from 'axios'

function App() {
    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setpasswordReg] = useState('');
    const [emailReg, setemailReg] = useState('');
    const [addressdReg, setaddressdReg] = useState('');

    const [username, setUsername] = useState('');
    const [password, setpassword] = useState('');

    const [loginStatus, setloginStatus] = useState('');

    const register = () => {
        Axios.post("http://localhost:5500/user/register", {
            username: usernameReg,
            email: emailReg,
            password: passwordReg,
            address: addressdReg
        }).then((response) => {
            console.log(response)
        });
    };
    const login = () => {
        Axios.post("http://localhost:5500/user/login", {
            username: username,
            password: password
        }).then((response) => {
            console.log(response)
            if (response.data.message) {
                setloginStatus(response.data.message);
            } else {
                setloginStatus(response.data.username);
            }
        });
    };

    return ( <
        div classname = "App" >
        <
        div classname = "register" >
        <
        h1 > Register < /h1>  <
        label > Username < /label>  <
        input type = "text"
        onChange = {
            (e) => {
                setUsernameReg(e.target.value);
            }
        }
        / > <
        label > Password < /label>  <
        input type = "text"
        onChange = {
            (e) => {
                setpasswordReg(e.target.value);
            }
        }
        / > <
        label > email < /label>  <
        input type = "text"
        onChange = {
            (e) => {
                setemailReg(e.target.value);
            }
        }
        / > <
        label > address < /label>  <
        input type = "text"
        onChange = {
            (e) => {
                setaddressdReg(e.target.value);
            }
        }
        / > <
        button onClick = { register } > Register < /button>  < /
        div > <
        div classname = "login" >
        <
        h1 > Login < /h1>  <
        input type = "text"
        placeholder = "Username"
        onChange = {
            (e) => {
                setUsername(e.target.value);
            }
        }
        / > <
        input type = "password"
        placeholder = "Password"
        onChange = {
            (e) => {
                setpassword(e.target.value);
            }
        }
        / > <
        button onClick = { login } > Connexion < /button>  < /
        div > 
        <h1>{ loginStatus }</h1>
        <
        /div>
    );
}

export default App;