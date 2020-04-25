import React, {useState} from 'react';

 const Form = ({datosConsulta}) => {
    const [busqueda, guardarBusqeda]= useState({
        nombre: "",
        apellido:'',
        cedula:'',
        fecheNacimiento: '',
        email: '',
        github: '',

    })

    
   


   const  handleChange= (e) =>{
        guardarBusqeda({
            ...busqueda,
            [e.target.name] : e.target.value,
             
        })
        
        
    }

    const consultarRepos = e => {
        e.preventDefault();
       
        datosConsulta(busqueda);
       
    }


    
        return(
            <div >
                
                <form onSubmit={consultarRepos} className="form-column col-12 d-flex justify-content-center">
                   <div className="form-colum col-6 ">
                
                   <div class="form-group col-12">
                   <label for="inputName4">Nombre</label>
                       
                        <input
                         type="text"
                        className="form-control" 
                        name="nombre"
                        id="nombre" 
                        // value={nombre}
                        onChange={handleChange}
                        />
                    </div>

                    <div class="form-group col-12">
                         <label for="inputLastName4">Apellido</label>
                       
                        <input
                        type="text"
                        className="form-control" 
                        name="nombre"
                        id="inputApellido" 
                        onChange={handleChange}
                        />
                    </div>

                    <div class="form-group col-12">
                         <label for="inputLastName4">Cedula</label>
                       
                        <input
                        type="number"
                        className="form-control" 
                        name="cedula"
                        id="inputcedula"
                        onChange={handleChange}
                        />
                    </div>

                    <div class="form-group col-12">
                         <label for="inputLastName4">Fecha de nacimiento</label>
                       
                        <input
                        type="date"
                        className="form-control" 
                        name="fechaNacimiento"
                        id="inputNacimiento"
                        onChange={handleChange}
                        />
                    </div>

                    
                    <div class="form-group col-12">
                         <label for="inputLastName4">Email</label>
                       
                        <input
                        type="email"
                        className="form-control" 
                        name="email"
                        id="inputEmail"
                        onChange={handleChange}/>
                        
                    </div>

                      
                    <div class="form-group col-12">
                         <label for="inputLastName4">Usuario de Github</label>
                       
                        <input
                        type="text"
                        className="form-control" 
                        name="github"
                        id="InputGithub"
                        onChange={handleChange}
                        />
                    </div>
                    <button
                     type="submit"
                     
                     className="btn btn-primary col-12">Submit</button>
                    
                   </div>
                    
                </form>
      
      
            </div>
        )
                        
        
    }


export default Form;