import React from "react";
import { FaArrowRight } from "react-icons/fa";
import logo from "../resources/logo.jfif"; 
import {NavLink} from "react-router-dom";
function Home(){ 
    return(
        <>
             <div class="row">
                <div class="col-12">
                    <h2 class="fw-bold logo ms-4">AdoptPet</h2>
                    <img class="logo-img w-100" src={logo}/> 
                </div>
                <div class="col text-center mt-3 mx-1">
                    <h3 class="display-4 fw-normal lh-1 mb-2">Find your dream <br/> Pet here</h3>
                    <p class="justify-content-center lh-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo accusantium quasi nulla, adipisci enim dignissimos quaerat?</p>
                    <NavLink to="/Dashboard"><button class="btn-login btn btn-primary" href="#details.html"><FaArrowRight/></button></NavLink>
                </div>         
        </div>
        </>
    )
}

export default Home;
