import React, { useState } from "react";

function Signup(){
    const [un, setUN] = useState("");
    const [e,setE] = useState("");
    const [p,setP] = useState("");

    function Username(event){
        setUN(event.target.value);
    }
    function Email(event){
        setE(event.target.value);
    }
    function Password(event){
        setP(event.target.value);
    }
    async function Signupfn(){
        let obj={
            UserName:un,
            Email : e,
            Password : p
        }
        console.log(obj);
        let res = await fetch("http://localhost:3000/user/signup",{
            method : "POST",
            body : JSON.stringify(obj),
            headers:{
                "Content-Type" : "application/json"
            }
        })
        res = await res.json();
        alert(res);
    }
    return (<div>
        <h1>Signup Page</h1>
        <input onChange={Username} type="text" placeholder="Enter Your Username"/>
        <input onChange={Email} type="text" placeholder="Enter Your Email" />
        <input onChange={Password} type="text" placeholder="Enter Your Password"/>
        <button onClick={Signupfn} disabled={un===""||e===""||p===""}>Signup</button>
    </div>)
}


export default Signup;