import React, { useState } from 'react'
import style from './login.module.scss'
import { useHistory } from "react-router-dom";

console.log(style)
const Login = () => {
    
    const [input, setInput] = useState({
        name:'',
        password: ''
    })

    const handleChange = (e) =>{
        e.preventDefault()
        setInput({...input, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('logging ...')
    }

    return (
        <form className={style.form}>
            Imie: <input type="text" name="name" onChange={handleChange}  value={input.name}/>
            Hasło: <input type="password" name="password" onChange={handleChange} value={input.password}/>
            <button onClick={handleSubmit}>Zaloguj</button>
        </form>
    )
}

export default Login
