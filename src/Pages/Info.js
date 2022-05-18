import React,{useEffect, useState} from "react";
import Navigation from "../Components/Navigation";
import { NavLink} from "react-router-dom";
import l1 from "../resources/golden_ret.jfif";
import Axios from "axios"
function Info(){

    const [details, setDetails] = useState();
    useEffect(()=>{
        let name = "Zach";
        console.log('use effect in place');
        Axios.get(`https://62738cee345e1821b21d2805.mockapi.io/pets?name=${name}`)
        .then((response)=>{
            setDetails(response.data);
            console.log(details)
        });
    },[])
    return(
        <>
            <div className="row mt-2 mx-2">
                <div className="col-12 mt-1 ">
                    <h2 className="fw-bold ms-2">AdoptPet</h2> 
                </div>
                <div className="col-12 p-0">
                    <div className="img-desc mt-3 position-relative text-white mx-4">
                        <p className="fw-bold mb-0  position-absolute  bottom-0 start-0 mb-5 ms-2">Golden Retreiver</p>
                        <p className="lh-2 position-absolute bottom-0 start-0 mb-4 ms-2">3 months old</p>
                        <img className="w-100 dogo-img"  src={l1}/>             
                    </div>
                </div>
                <div className="col-12 m-3 info">
                    <div className="row">
                        <div className="col-3">Breed </div>
                        <div className="col fw-bold">Golden Retreiver</div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-3">Gender </div>
                        <div className="col fw-bold">Male</div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-3">Age </div>
                        <div className="col fw-bold">3 Months Old</div>
                    </div>
                    <div className="row me-3 mt-3">
                        <p className="dog-info lh-1">The Golden Retriever is a British breed of retriever medium size. It is characterised by a gentle and affectionate nature and a striking golden coat. It is commonly kept as a pet and is among the most frequently registered breeds in several Western countries.</p>
                    </div>
                </div>
                <div className="col mx-2">
                    <NavLink to="/Adopt"><button className="btn btn-primary w-100  mt-1 rounded-pill">Adopt Now</button></NavLink>
                </div>
            </div>

            <Navigation/>
        </>
    )
}

export default Info;