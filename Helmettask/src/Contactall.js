import {Formik,Form,Field} from "formik"
import { useState } from "react";


export const Contactall=()=>{
    const [todos,setTodos] = useState([])

    return(
        <div>
            <h3>Contact All</h3>


            <Formik
            initialValues={{
                Name:"",
                Lastname:"",
                Email:"",
                About:"",
                PhoneNumber:null
            }
        }
        onSubmit={values=>{
            console.log(values)   
            setTodos(...todos,values)
            console.log(todos);  
        }}
            >
                {
                    
                        <>
                            <Form>
                                <Field type="text" name="Name"/><br/><br/>
                                <Field type="text" name="Lastname"/><br/><br/>
                                <Field type="email" name="Email"/><br/><br/>
                                <Field type="text" name="About"/><br/><br/>
                                <Field type="tel" name="PhoneNumber"/><br/><br/>  

                                <button type="Submit">Send</button>
                            </Form>

                            <span style={{paddingRight:'50px'}}>Name:</span>
                            <span style={{paddingRight:'50px'}}>lastName:</span>
                            <span style={{paddingRight:'50px'}}>Email:</span>
                            <span style={{paddingRight:'50px'}}>About:</span>
                            <span style={{paddingRight:'50px'}}>PhoneNumber:</span>

                            
                            <ul style={{display:'flex',gap:'50px'}}>
                                {todos.map((values)=>(
                                        <>
                                            <li>{values.Name}</li>
                                            <li>{values.Lastname}</li>
                                            <li>{values.Email}</li>
                                            <li>{values.About}</li>
                                            <li>{values.PhoneNumber}</li>
                                        </>
                                ))}
                            </ul>
            
                        </>
                    
                }

                
                    
                
            </Formik>

        </div>
    );
}