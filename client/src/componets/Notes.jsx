import React, { useEffect, useState } from "react";
import Noteslist from "./noteslist";

function Notes(){
    const [a,setA] = useState("");
    const [n,setN] = useState("");
    const [no, setNO] = useState("");
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(false);
    const [add, setAdd] = useState(true);
    const [id,setID] = useState("");
    useEffect(()=>{
        getNotes();
    },[]);
    function Author(ev){
         setA(ev.target.value);
    }
    function Name(ev){
         setN(ev.target.value);
    }
    function Note(ev){
         setNO(ev.target.value);
    }
    async function AddNote(){
        setLoading(true);
        try {
            let obj ={
                Author : a,
                Name : n,
                Note : no
            }
            console.log(obj);
            let res = await fetch("http://localhost:3000/notes",{
                method:"POST",
                body : JSON.stringify(obj),
                headers : {
                    "Content-Type" : "application/json",
                    "Authorization" : `${localStorage.getItem("Token")}`
                }
            })
            res = await res.json();
            alert(res);
            getNotes();
            setLoading(false)
        } catch (error) {
            setError(true);
            setLoading(false);
        }
        
    }
    async function getNotes(){
                setLoading(true);
      try {
        let res = await fetch("http://localhost:3000/notes",{
            method:"GET",
            headers : {
                "Content-Type" : "application/json",
                "Authorization" : `${localStorage.getItem("Token")}`
            }
        })
        res = await res.json();
        setNotes(res);
        setLoading(false);
        console.log(res);
      } catch (error) {
         setError(true);
         setLoading(false);
        
      }

        
    }
    async function deletefn(id){
        let res = await fetch(`http://localhost:3000/notes/${id}`,{
            method : "DELETE",
            headers : {
                "Content-Type" : "application/json",
                "Authorization" : `${localStorage.getItem("Token")}` 
            }
        })
        res = await res.json();
        alert(res);
        getNotes();
    }

    function updatefn(id){
          setID(id);
          setAdd(false);
    }

    async function updateNote(){
        setLoading(true);
        try {
            let obj ={
                Author : a,
                Name : n,
                Note : no
            }
            console.log(obj);
            let res = await fetch(`http://localhost:3000/notes/${id}`,{
                method:"PATCH",
                body : JSON.stringify(obj),
                headers : {
                    "Content-Type" : "application/json",
                    "Authorization" : `${localStorage.getItem("Token")}`
                }
            })
            res = await res.json();
            alert(res);
            getNotes();
            setLoading(false)
            setAdd(true);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    }

    return add ? (<div>
        <h1>Notes Page</h1>
        <input onChange={Author} type="text" placeholder="Enter An Author Name"/>
        <input onChange={Name} type="text" placeholder="Enter An Note Name"/>
        <input onChange={Note} type="text" placeholder="Enter Your Note"/>
        <button onClick={AddNote}>Add Note</button>
        <h1>Notes List</h1>
        < Noteslist Notes = {notes} Loading = {loading} Error = {error} Deletefn={deletefn} Updatefn = {updatefn}/>
    </div>) : (<div>
        <h1>Update Your Note</h1>
        <input onChange={Author} type="text" placeholder="Enter An Updated Author Name"/>
        <input onChange={Name} type="text" placeholder="Enter An Updated Note Name"/>
        <input onChange={Note} type="text" placeholder="Enter Your Updated Note Note"/>
        <button onClick={updateNote}>Update Note</button>
    </div>) 
}


export default Notes;