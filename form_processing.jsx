import React, { useState } from "react";
function Form_pro() {
    const [data, setData] = useState([])
    const take = (e) => {
        const name = e.target.name
        const val = e.target.value
        console.log(val)
        setData({ ...data, [name]: val })
    }
    const dataSubmit = (a) => {
        a.preventDefault()
    }
    return (
        <>
            <br /><br />
            <div class="container">

                {/* form_start */}
                <form action="" >
                    <div class="row">

                        <div class="col-md-6" id="formdiv">
                            <br />
                            <h2 class="lb">Create New Account</h2><hr />
                            <br />
                            <div class="row">
                                <div class="col-md-6">
                                    <label class="mb-2 lb">First Name</label>

                                    <div><input type="text" class="form-control" name="fname" onChange={(e) => { take(e) }} /></div>

                                </div>
                                <div class="col-md-6">
                                    <label class="mb-2 lb">Last Name</label>

                                    <div><input type="text" class="form-control" name="lname" onChange={(e) => { take(e) }} /></div>

                                </div>

                            </div>
                            <div class="row mt-3">
                                <div class="col-md-6">
                                    <label class="mb-2 lb">Date of Birth</label>
                                    <input type="date" class="form-control" name="dob" onChange={(e) => { take(e) }}></input>
                                </div>
                                <div class="col-md-6">
                                    <label class="mb-2 lb">Gender</label><br />
                                    <input type="radio" name="gender" value="Male" onChange={(e) => { take(e) }} /> <label style={{ color: "black" }}>Male</label>&nbsp;&nbsp;&nbsp;
                                    <input type="radio" name="gender" value="Female" onChange={(e) => { take(e) }} />&nbsp;<label class="lb">Female</label>

                                </div>
                            </div>
                            <div class="row mt-3 mb-2">
                                <div class="col-md-6">
                                    <div >
                                        <label class="lb mb-2">Address</label>
                                        <textarea class="form-control" placeholder="Enter Address Here..." name="address" onChange={(e) => { take(e) }}></textarea>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div>
                                        <label class="lb mb-2">Language</label>
                                        <select class="form-select" name="lngg" onChange={(e) => { take(e) }}>
                                            <option>-Select language-</option>
                                            <option>English</option>
                                            <option>Malayalam</option>
                                            <option>Hindi</option>
                                            <option>Tamil</option>

                                        </select>
                                    </div>
                                </div>
                                <center>
                                    <div class="mt-4"><button type="submit" class="btn btn-success" onClick={(e) => dataSubmit(e)}>Create Account</button></div>
                                </center>
                            </div>


                        </div>
                        {/*Form_End */}

                        <div class="col-md-6">
                        <table class="table table-dark table-hover">

                                <tr><td><label>First Name</label></td><td>{data.fname}</td></tr>
                                <tr><td><label>Last Name</label></td><td>{data.lname}</td></tr>
                                <tr><td><label>Date of Birth</label></td><td>{data.dob}</td></tr>
                                <tr><td><label>Gender</label></td><td>{data.gender}</td></tr>
                                <tr><td><label>Address</label></td><td>{data.address}</td></tr>
                                <tr><td><label>Language</label></td><td>{data.lngg}</td></tr>

                            </table>


                        </div>
                    </div>
                </form>
            </div>
            <br /><br /><br /><br />
        </>
    )
}
export default Form_pro;