import React from "react";
import Navigation from "../Components/Navigation";
import l1 from "../resources/golden_ret.jfif"
function Adopt(){
    return(
        <>
            <div class="row mt-2">
                <div class="col-12 mt-1">
                    <h2 class="fw-bold ms-4">AdoptPet</h2> 
                </div>
                <div class="col">
                    <div class="img-desc mt-3 position-relative text-white mx-4">
                        <p class="fw-bold mb-0  position-absolute  bottom-0 start-0 mb-5 ms-2">Golden Retreiver</p>
                        <p class="lh-2 position-absolute bottom-0 start-0 mb-4 ms-2">3 months old</p>
                        <img class="w-100 dogo-img rounded-5"  src={l1}/>             
                    </div>
                </div>

                <div class="col-12 ms-4 mt-2">
                    <div class="me-5">
                        <label  class="form-label inp_name">Your Name</label>
                        <input type="text" class="form-control form-control-sm rounded-pill"/>
                    </div>
                    <div class="me-5">
                        <label  class="form-label inp_name">Email</label>
                        <input type="email" class="form-control form-control-sm rounded-pill"/>
                    </div>
                    <div class="me-5">
                        <label  class="form-label inp_name">Phone/ Mobile Number</label>
                        <input type="text" class="form-control form-control-sm rounded-pill"/>
                    </div>
                </div>

                <div class="col mx-4 mt-3">
                    <button class="btn btn-primary w-100 mt-1 rounded-pill">Submit</button>
                </div>
            </div>
            <Navigation/>
        </>
    )
}

export default Adopt;