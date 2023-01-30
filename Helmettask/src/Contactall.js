import {Formik,Form,Field} from "formik";
import { useState } from 'react';

function Contactall() {
   const [todos,settodos] = useState([])
   
   return (
    <div className='App'>
        <Formik
            initialValues={
            {
                name:"",
                lastName:"",
                email:"",
                about:"",
                phoneNumber:""
            }
            
            }
            onSubmit={(values,{resetForm})=>{
                if(values.name!=='' && values.lastName!=='' && values.email!=='' && values.about!=='' && values.phoneNumber!==''){
                    settodos ([...todos,values])
                }
                else{
                    alert("inputlari doldur")
                }
                resetForm({values:''})
            }}
            >
            {
                ({values}) =>(
                <Form>
                    <h4>Name</h4>
                        <Field name ="name" className="field"/>
                        <br/>
                        <h4>LastName</h4>
                        
                        <Field name ="lastName"className="field"/>
                        <br/>
                        <h4>Email</h4>
                    
                        <Field name ="email"className="field"/>
                        <br/>
                        <h4>About</h4>
                        
                        <Field  name="about"className="field"
                        />
                        <br/>
                        <h4> Phone number</h4>
                        
                        <Field name ="phoneNumber"className="field"
                        />
                        <br/><br/>
                        <button className='btn bt-danger'  type='Submit'>Add</button>
            
                </Form>
                )
            }
        </Formik>
 
        <div className='tab'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>About</th>
                        <th>Phone number</th>
                    </tr>
                </thead>
                {
                todos.map((user)=>
                    <tbody key={user.phoneNumber}>
                    <tr key={user.phoneNumber}>
                        <td>{user.name}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.about}</td>
                        <td>{user.phoneNumber}</td>
                    </tr>
                    </tbody>
                )}  
            </table>
        </div>
    </div>
   );
}

export default Contactall;
