import React from "react";

function Noteslist({Notes, Loading, Error, Deletefn, Updatefn}){
    function deletefn(id){
        Deletefn(id);
    }
    function updatefn(id){
        Updatefn(id);
    }
   
    return Loading ? (<h1>Loading....</h1>)
                   : Error ? (<h1>Error in fetching the data.....</h1>)
                   : (<div>
                         {Notes.map((el)=>{
                            return <div key={el._id}>
                                <h1>{el.Author}</h1>
                                <h3>{el.Name}</h3>
                                <p>{el.Note}</p>
                                <button onClick={()=>deletefn(el._id)}>Delete</button>
                                <button onClick={()=>updatefn(el._id)}>Update</button>
                            </div>
                         })}
                   </div>)
}

export default Noteslist;