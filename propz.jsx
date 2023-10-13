import React from "react";
export default function Propz(props) {
    return (
        <>
            <br /><br /><br />

            <center>
                <div style={{ width: "500px", backgroundColor: "teal", borderRadius: "7px" }}>

                    <h2 style={{ color: "sienna" }}>{props.title}</h2><br />

                    <div> <input type="text" placeholder="Name" class="mb-3 form-control border border-3" style={{ width: "80%" }} /></div>
                    <div> <input type="text" placeholder="Email" class="mb-3 form-control border border-3" style={{ width: "80%" }} /></div>

                    <div> <button class="btn btn-link" style={{ textAlign: "left" }}>Forgot password?</button></div>


                    <br />
                    <div class="mb-5"> <button type="button" class="btn btn-info" >Sign In</button></div>
                    <br />
                </div>

            </center>

            <br /><br /><br />

        </>
    )
}