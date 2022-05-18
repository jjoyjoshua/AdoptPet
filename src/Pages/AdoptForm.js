import React, {useEffect, useState, useRef} from "react";
import {useParams,NavLink} from "react-router-dom";
import {Form} from "react-bootstrap"
import Axios from "axios";
import Navigation from "../Components/Navigation";
import emailjs from '@emailjs/browser';

function AdoptForm(){
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_3z922yv', 'template_hr7uyqf', e.target, 'Ks23ZyjCRkks73Kvy')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    let {userAdopt} = useParams();
    const [details, setDetails] = useState([])

    const vanish = useRef(null);

    useEffect(()=>{
        Axios.get(`https://62738cee345e1821b21d2805.mockapi.io/pets?filter=${userAdopt}`)
        .then((response)=>{
            setDetails(response.data)
        },[])
    },[])

    // fetching and validating data from users

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");

    // hook for validation
    const[error,setError] = useState("");
    const [success, setSuccess] = useState("");
    const postData = (e) =>{
        e.preventDefault();
        if(name.trim()==="" && email === "" && contact === ""){
            setError("Please fill in all the required fields.")
            return false;
        }
        if(name.trim()===""){
            setError("Please fill in the Name field.");
            return false;
        }
        if(email===""){
            setError("Please fill in the Email field. ")
            return false;
        }
        if(contact===""){
            setError("Please fill in the Contact field. ")
            return false;
        }
        else{
            Axios.post("https://62738cee345e1821b21d2805.mockapi.io/guardians",{
                name,
                email,
                contact,
                userAdopt
            })
        setError("");
        details.map((info)=>{setSuccess(`Process success! ${info.name} is part of your family now.`)})
        vanish.current.style.visibility= "hidden";
        return true;
    }}
   
    return(
        <>
            {details.map((info)=>{
                return(
                    <div className="row mt-2 mx-2">
                <div className="col-12 mt-1 ">
                    <h2 className="fw-bold ms-2">AdoptPet</h2> 
                </div>
                <div className="col-12 p-0">
                    <div className="img-desc mt-3 position-relative text-white mx-4">
                        <p className="fw-bold mb-0  position-absolute  bottom-0 start-0 mb-5 ms-2">{info.name}</p>
                        <p className="lh-2 position-absolute bottom-0 start-0 mb-4 ms-2">{info.age}</p>
                        <img className="w-100 dogo-img"  src={info.imgSrc}/>             
                    </div>
                </div>
                {<p className="text-success fw-bold ms-3 mt-3">{success}</p>}
                <div ref={vanish} class="col-12 ms-2 mt-3">
                <Form onSubmit={sendEmail}>
                    <div class="me-4 mb-2">
                        <label  class="form-label inp_name m-0 p-0">Your Name</label>
                        <input type="text" name="name" class="form-control form-control-sm  rounded-pill" onChange={(e)=>{setName(e.target.value); console.log(name)}} required/>
                    </div>
                    <div class="me-4 mb-2">
                        <label  class="form-label inp_name m-0 p-0">Email</label>
                        <input type="email" name="email" class="form-control form-control-sm rounded-pill" onChange={(e)=>{setEmail(e.target.value); console.log(email)}} required/>
                    </div>
                    <div class="me-4">
                        <label  class="form-label inp_name m-0 p-0">Phone/ Mobile Number</label>
                        <input type="tel" name="phone" class="form-control form-control-sm rounded-pill" onChange={(e)=>{setContact(e.target.value); console.log(contact)}} required/>
                    </div>
                    {<p className="text-danger fw-bold ms-3 mt-3">{error}</p>} 
                    <div class="col me-4">
                    <button class="btn btn-primary w-100 my-2 rounded-pill" onClick={postData}>Submit</button>
                </div>
                </Form>
                </div>  
                </div>
                )
            })}

            <Navigation/>
        </>    
    )
}

export default AdoptForm;