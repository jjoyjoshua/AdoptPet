import React, {useEffect, useState} from "react";
import {useParams,NavLink} from "react-router-dom";
import Axios from "axios";
import Navigation from "../Components/Navigation";
function Demo(){
    let {user} = useParams();
    const [details, setDetails] = useState([])


    useEffect(()=>{
        Axios.get(`https://62738cee345e1821b21d2805.mockapi.io/pets?filter=${user}`)
        .then((response)=>{
            setDetails(response.data)
        },[])
    },[])
   
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
                <div className="col-12 m-3 info">
                    <div className="row">
                        <div className="col-3">Breed </div>
                        <div className="col fw-bold">{info.breed}</div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-3">Gender </div>
                        <div className="col fw-bold">{info.sex}</div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-3">Age </div>
                        <div className="col fw-bold">{info.age}</div>
                    </div>
                    <div className="row me-3 mt-3">
                        <p className="dog-info lh-1">{info.desc}</p>
                    </div>
                </div>
                <div className="col mx-2">
                    <NavLink to={`/AdoptForm/${info.petid}`}><button className="btn btn-primary w-100  mt-1 rounded-pill">Adopt Now</button></NavLink>
                </div>
            </div>
                )
            })}

            <Navigation/>
        </>    
    )
}

export default Demo;