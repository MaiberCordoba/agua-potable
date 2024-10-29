import userEvent from "@testing-library/user-event";
import React, { useState } from "react";

const Form =()=>{

    localStorage.setItem('turbidez',1)
    localStorage.setItem('nitratos',10)
    localStorage.setItem('fluoruros',1.5)
    localStorage.setItem('arsenico',0.01)
    localStorage.setItem('mercurio',0.006)
    localStorage.setItem('plomo',0.01)


    const [Elemento,setelemento]=useState('')
    const [Turbidez,setturbidez]=useState('')
    const [Nitratos,setnitratos]=useState('')
    const [Fluororus,setfluoruros]=useState('')
    const [Arcenico,setarcenico]=useState('')
    const [Mercurio,setmercurio]=useState('')
    const [Plomo,setplomo]=useState('')

    const valores=(e)=>{
        e.preventDefault()
        if (Turbidez>=localStorage.getItem('turbidez')){
            alert ('la turbidez esta mal')
        }
        if (Nitratos>=localStorage.getItem('nitratos')){
            alert ('el nivel nitratos estan mal')
        }
        if (Fluororus>=localStorage.getItem('fluoruros')){
            alert ('el nivel de flourorus esta mal')
        }
        if (Arcenico>=localStorage.getItem('arcenico')){
            alert ('el arsenico esta mal')
        }
        if (Mercurio>=localStorage.getItem('mercurio')){
            alert ('el mercurio esta mal')
        }
    }

     
    
    
    return(
        <nav>
        <div className="container d-flex flex-column align-items-center mt-5">
        <div className="col-md-6 m-5 p-5 shadow border rounded">
            <form className="form-group" onSubmit={valores}>
                <div className="mb-3">
                    <label htmlFor="turbidez" className="form-label">Turbidez</label>      
                    <input type="number" className="form-control" name="turbidez" onChange={(e)=>setturbidez(e.target.value)} placeholder="Ingrese un valor"/>   
                </div>
                <div className="mb-3">
                    <label htmlFor="nitratos" className="form-label">Nitratos</label>
                    <input type="number" className="form-control" name="Nitratos" onChange={(e)=>setnitratos(e.target.value)} placeholder="Ingrese un valor"/> 
                </div>
                <div className="mb-3">
                    <label htmlFor="fluororus" className="form-label">Fluororos</label>
                    <input type="number" className="form-control" name="fluoruros" onChange={(e)=>setfluoruros(e.target.value)} placeholder="Ingrese un valor"/> 
                </div>
                <div className="mb-3">
                    <label htmlFor="arsenico" className="form-label">Arsenico</label>
                    <input type="number" className="form-control" name="Arcenico" onChange={(e)=>setarcenico(e.target.value)} placeholder="Ingrese un valor"/> 
                </div>
                <div className="mb-3">
                    <label htmlFor="mercurio" className="form-label">Mercurio</label>
                    <input type="number" className="form-control" name="mercurio" onChange={(e)=>setmercurio(e.target.value)} placeholder="Ingrese un valor"/> 
                </div>
                <div className="mb-3">
                    <label htmlFor="plomo" className="form-label">Plomo</label>
                    <input type="number" className="form-control" name="plomo" onChange={(e)=>setplomo(e.target.value)} placeholder="Ingrese un valor"/> 
                </div>
                <button className="btn btn-primary w-100" type="submit">Enviar</button> 
                <button className="btn btn-danger w-100" type="submit">aplicar filtro</button> 
                     
            </form>
        </div>
        </div>
       
        <div className="col-md-6 m-5">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Elemento</th>
                        <th>Valor</th>
                        <th>Valor luego filtro</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Turbidez</td>
                        <td>{Turbidez}</td>
                    </tr>
                    <tr>
                        <td>Nitratos</td>
                        <td>{Nitratos}</td>
                    </tr>
                    <tr>
                        <td>Fluororus</td>
                        <td>{Fluororus}</td>
                    </tr>
                    <tr>
                        <td>Arsenico</td>
                        <td>{Arcenico}</td>
                    </tr>
                    <tr>
                        <td>Mercurio</td>
                        <td>{Mercurio}</td>
                    </tr>
                    <tr>
                        <td>Plomo</td>
                        <td>{Plomo}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </nav>

    )
}
  
export default Form;