import React from "react";
import { Component } from "react";

class FormProCls extends Component {
    constructor(props) {
        super(props)
        this.state = {user:{ fname:"",lname:""}}
    }
    changeData=(e)=>{
        const nm=e.target.name;
        const vl=e.target.value;
        console.log(vl)
        this.setState({user:{...this.state.user,[nm]:vl}})
    }
    render() {
        return (
            <>
                <br />
                <h3>Form processing using class</h3><hr />

                <div class="container">
                    <div class="row">
                        <div class="col-md-6">

                            <h2 class="lb">Create New Account</h2><hr />
                            <br />
                            <div class="row">
                                <div class="col-md-6">
                                    <label class="mb-2 lb">First Name</label>

                                    <div><input type="text" class="form-control" name="fname" onChange={(e)=>this.changeData(e)} /></div>

                                </div>
                                <div class="col-md-6">
                                    <label class="mb-2 lb">Last Name</label>

                                    <div><input type="text" class="form-control" name="lname" onChange={(e)=>this.changeData(e)} /></div>

                                </div>

                            </div>
                            <div class="row mt-3">
                                <div class="col-md-6">
                                    <label class="mb-2 lb">Date of Birth</label>
                                    <input type="date" class="form-control" name="dob" onChange={(e)=>this.changeData(e)}></input>
                                </div>
                                <div class="col-md-6">
                                    <label class="mb-2 lb">Gender</label><br />
                                    <input type="radio" name="gender" value="Male" onChange={(e)=>this.changeData(e)} /> <label style={{ color: "black" }}>Male</label>&nbsp;&nbsp;&nbsp;
                                    <input type="radio" name="gender" value="Female" onChange={(e)=>this.changeData(e)} />&nbsp;<label class="lb">Female</label>

                                </div>
                            </div>
                            <div class="row mt-3 mb-2">
                                <div class="col-md-6">
                                    <div >
                                        <label class="lb mb-2">Address</label>
                                        <textarea class="form-control" placeholder="Enter Address Here..." name="address" onChange={(e)=>this.changeData(e)} ></textarea>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div>
                                        <label class="lb mb-2">Language</label>
                                        <select class="form-select" name="lngg" onChange={(e)=>this.changeData(e)}>
                                            <option>-Select language-</option>
                                            <option>English</option>
                                            <option>Malayalam</option>
                                            <option>Hindi</option>
                                            <option>Tamil</option>

                                        </select>
                                    </div>
                                </div>
                                <center>
                                    <div class="mt-4"><button type="submit" class="btn btn-success" >Create Account</button></div>
                                </center>
                            </div>

                        </div>
                        <div class="col-md-6" style={{ padding: "80px 10px 10px 80px" }}>
                            <h2>Profile</h2><hr />
                            <table id="tbl">

                                <tr><td><label>First Name</label></td><td> &nbsp;&nbsp;&nbsp;&nbsp;  {this.state.user.fname}      </td></tr>
                                <tr><td><label>Last Name</label></td><td>   &nbsp;&nbsp;&nbsp;&nbsp;    {this.state.user.lname}  </td></tr>
                                <tr><td><label>Date of Birth</label></td><td>&nbsp;&nbsp;&nbsp;&nbsp;   {this.state.user.dob}   </td></tr>
                                <tr><td><label>Gender</label></td><td>  &nbsp;&nbsp;&nbsp;&nbsp;    {this.state.user.gender}       </td></tr>
                                <tr><td><label>Address</label></td><td>   &nbsp;&nbsp;&nbsp;&nbsp;     {this.state.user.address}    </td></tr>
                                <tr><td><label>Language</label></td><td>    &nbsp;&nbsp;&nbsp;&nbsp;    {this.state.user.lngg}   </td></tr>

                            </table>

                        </div>
                    </div>
                </div>

            </>
        )
    }
}
export default FormProCls