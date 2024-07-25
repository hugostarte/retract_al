import { useState } from 'react';
import './Form.css';

export default function Form() {
    const [login, setLogin] = useState({email:"",password:""});

    const udpateLogin = (name, value) => {
        let tempLogin = login;
        tempLogin[name] = value;
        setLogin(tempLogin);
    }
    
    return (
        <>
            <div>
                <label>Email</label>
                <input type='text' defaultValue={login.email} onKeyUp={(e) => udpateLogin("email",e.target.value)} />
            </div>
            <div>
                <label>Password</label>
                <input type='password' defaultValue={login.password} onKeyUp={(e) => udpateLogin("password",e.target.value)} />
            </div>

        </>
    )
}