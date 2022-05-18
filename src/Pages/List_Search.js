import React, {useEffect, useState, createContext} from "react";
// import { NavLink } from "react-router-dom";
import Axios from "axios"
import i1 from "../resources/dog.jpg"
import i2 from "../resources/cat.jfif"
import i3 from "../resources/rabbit.jfif"
import Navigation from "../Components/Navigation";
import { NavLink } from "react-router-dom";

export const infoContext = createContext(null);

function List_Search(){

    const [contents, setContents] = useState([]);

    const fetchDogData = ()=>{
        Axios.get(`https://62738cee345e1821b21d2805.mockapi.io/pets?filter=dog`)
        .then((response)=>{
            setContents(response.data);
        }, handleToggle());
    }

    const fetchCatData = () =>{
        Axios.get("https://62738cee345e1821b21d2805.mockapi.io/pets?filter=cat")
        .then((response)=>{
            setContents(response.data);
            handleToggle1()
        },
        handleToggle());
    }
    const fetchRabbitData = () =>{
        Axios.get("https://62738cee345e1821b21d2805.mockapi.io/pets?filter=rabbit")
        .then((response)=>{
            setContents(response.data);
        },handleToggle2());
    }
    useEffect(()=>{
        fetchDogData();
        setActive(true);
    },[])

    // searching pets
    const [res, setRes] = useState("")
    const search = (e) =>{
        setRes(e.target.value)
        console.log(res)
        Axios.get(`https://62738cee345e1821b21d2805.mockapi.io/pets?search=${res}`)
        .then((response)=>{
            setContents(response.data);
        });
    }

    // toggling functionalities
    const [isActive, setActive] = useState(true);
    const [isActive1, setActive1] = useState(false);
    const [isActive2, setActive2] = useState(false);
    const handleToggle = () => {setActive(!isActive);setActive1(false);setActive2(false)};
    const handleToggle1 = () =>{setActive1(!isActive1); setActive(false); setActive2(false);};
    const handleToggle2 = () =>{setActive2(!isActive2); setActive1(false); setActive(false);};
   
    return(
        <>
               <div className="row mt-2 mx-1">
                    <div className=" head-sec sticky-top">
                        <div className="col-12 mt-1 ">
                            <h2 className="fw-bold ms-2">AdoptPet</h2> 
                        </div>
                        <div className="col mt-2">
                            <input className="form-control rounded-pill" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{search(e)}}/>
                        </div>
                        <div className="col-12">
                            <div className="row d-flex justify-content-evenly mt-2">
                                <div className= {`${isActive ? "nav-active" : "" } col-3 rounded-pill d-flex justify-content-between p-0 bg-white`} onClick={fetchDogData}>
                                    <img src={i1} className="rounded-circle" height="35" width="35" alt="dog-icon"/>
                                    <h6 className="mt-2 me-1 fw-light inner-text">Dogs</h6>
                                </div>
                                <div className={`${isActive1 ? "nav-active" : "" } col-3 rounded-pill d-flex justify-content-between p-0 bg-white`} onClick={fetchCatData}>
                                    <img src={i2} className="rounded-circle" height="35" width="35" alt="cat-icon"/>
                                    <h6 className="mt-2 me-1 fw-light inner-text">Cats</h6>
                                </div>
                                <div className={`${isActive2 ? "nav-active" : "" } col-4 rounded-pill d-flex justify-content-between p-0 bg-white`} onClick={fetchRabbitData}>
                                    <img src={i3} className="rounded-circle" height="35" width="35" alt="rabbit-icon"/>
                                    <h6 className="mt-2 me-1 fw-light inner-text">Rabbits</h6>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-12 ps-1 mt-2">
                        {contents.map((info)=>{
                            return(
                                <NavLink to={`/Demo/${info.petid}`}>
                                <div className="img-desc mt-3 position-relative text-white ms-2">
                                    <p className="fw-bold mb-0  position-absolute  bottom-0 start-0 mb-5 ms-2">{info.name}</p>
                                    <p className="lh-2 position-absolute bottom-0 start-0 mb-4 ms-2">{info.age}</p>
                                    <img className="w-100 dogo-img rounded-5" src={info.imgSrc} alt="img"></img>
                                </div> </NavLink>)    
                    })}
                    </div>
               </div>
                <Navigation/>
        </>
    )
}

export default List_Search;