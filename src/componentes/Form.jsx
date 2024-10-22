import userEvent from "@testing-library/user-event";
import React, { useState } from "react";

const Form =()=>{

    let TurbidezI=localStorage.setItem('turbidez',1)
    let NitratosI=localStorage.setItem('nitratos',10)
    let FluororusI=localStorage.setItem('fluoruros',1.5)
    let AcernicoI=localStorage.setItem('arsenico',0.01)
    let MercurioI=localStorage.setItem('mercurio',0.006)
    let PlomoI = localStorage.setItem('plomo',0.01)


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
        <nav >
            <div className="col-2 m-5 p-5 justify content-center shadow border"> 
                <form  className='form control col-1 m- justify content-center' onSubmit={valores}>
                  

                    <label htmlFor="turbidez">Turbidez</label>      
                    <input type="number" name="turbidez" onChange={(e)=>setturbidez(e.target.value)} placeholder="ingrese un valor"/>   

                    <label htmlFor="nitratos">Nitratos</label>
                    <input type="number" name="Nitratos" onChange={(e)=>setnitratos(e.target.value)}  placeholder="ingrese un valor"/> 

                    <label htmlFor="fluororus">Flouroros</label>
                    <input type="number" name="fluoruros" onChange={(e)=>setfluoruros(e.target.value)}  placeholder="ingrese un valor"/> 

                    <label htmlFor="arsenico">Arcenico</label>
                    <input type="number" name="Arcenico" onChange={(e)=>setarcenico(e.target.value)}  placeholder="ingrese un valor"/> 
                    
                    <label htmlFor="mercurio">Mercurio</label>
                    <input type="number" name="mercurio" onChange={(e)=>setmercurio(e.target.value)}  placeholder="ingrese un valor"/> 

                    <label htmlFor="Plomo">Plomo</label>
                    <input type="number" name="plomo" onChange={(e)=>setplomo(e.target.value)}  placeholder="ingrese un valor"/> 

                <button className="m-5 btn btn-primary" type="submit">Enviar</button>      
                </form>
            </div>
           
            <div>
                <table>
                    <td>
                        
                        <tr>
                            Turbidez
                        </tr>

                        <tr>
                            Nitratos    
                        </tr>

                        <tr>
                            Fluororus
                        </tr>

                        <tr>
                            Arsenico
                        </tr>
                        
                        <tr>
                            Mercurio
                        </tr>

                        <tr>
                            plomo
                        </tr>
                    </td>
                    <tb>
                        <td>
                            <tr>
                                {Turbidez}
                            </tr>
                            <tr>
                                {Nitratos}
                            </tr>
                            <tr>
                                {Fluororus}
                            </tr>
                            <tr>
                                {Arcenico}
                            </tr>
                            <tr>
                                {Mercurio}
                            </tr>
                            <tr>
                                {Plomo}
                            </tr>
                        </td>
                    </tb>
                </table>
            </div>
        </nav>
    )
}
export default Form;