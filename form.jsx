import React from "react"
function Form()
{
    return(



<div class="row mt-5" style={{ height: "300px", color: "white" }}>
    <div class="col-md-6" style={{ backgroundImage: 'url(bg1.jpg)' }}>
        <div style={{ marginTop: "120px", marginLeft: "70px" }}><h1 style={{ color: "green", fontWeight: "bold", fontFamily: "monospace" }} >Create Your Account Now</h1></div>
    </div>
    <div class="col-md-6">
        <div style={{ marginLeft: "40px" }}>
            <form>
                <div><input type="text" placeholder="Email" class="form-control" style={{ width: "65%" }} ></input></div>
                <br />
                <div><input type="text" placeholder="Password" class="form-control" style={{ width: "65%" }} ></input></div>
                <br></br>
                <div><button type="button" class="btn btn-primary" >Sign In</button></div>
            </form>
        </div>
    </div>
</div>

)
}
export default Form;