import React, { useState } from "react";

function Login(){
    const [e,setE] = useState("");
    const [p,setP] = useState("");

    
    function Email(event){
        setE(event.target.value);
    }
    function Password(event){
        setP(event.target.value);
    }
    async function loginfn(){
        let obj={
            Email : e,
            Password : p
        }
        console.log(obj);
        let res = await fetch("http://localhost:3000/user/login",{
            method : "POST",
            body : JSON.stringify(obj),
            headers:{
                "Content-Type" : "application/json"
            }
        })
        res = await res.json();
        alert(res);
        localStorage.setItem("Token",res);
    }
    return (<div>
        <h1>Login Page</h1>
        <input onChange={Email} type="text" placeholder="Enter Your Email" />
        <input onChange={Password} type="text" placeholder="Enter Your Password"/>
        <button onClick={loginfn} disabled={e===""||p===""}>Login</button>
    </div>)
}


export default Login;