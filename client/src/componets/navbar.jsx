import React from "react";
import { NavLink } from "react-router-dom";

const Links = [{path:"/",title:"Home"},{path:"/signup",title:"SignUP"},{path:"/login",title:"Login"},{path:"/notes",title:"Notes"}];

function stylefn({isActive}){
    return isActive ? {textDecoretion:"none",color:"red"}:{textDecoretion:"none",color:"blue"};
}

function Navbar(){
    return (<div style={{backgroundColor:"lightblue",color:"blue",display:"flex",justifyContent:"space-around"}}>
        {Links.map((el,i)=>{
            return (<NavLink style={stylefn} to={el.path} key={i}>{el.title}</NavLink>)
        })}
    </div>)
}

export default Navbar;