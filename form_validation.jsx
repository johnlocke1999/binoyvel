import React, { useState } from "react";
function FormValid() {
    const clr = { color: '' };

    // const [password, setPassword] = useState("");
    // const [message, setMessage] = useState("");
    const [colors, setColors] = useState(clr);
    const [name, setname] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [result,setResult]=useState("");
    const [num1,setNum1]=useState("");
    const [num2,setNum2]=useState("");




    // const Valid2 = (e) => {

    //     const pass = e.target.value;

    //     setPassword({ pass })
    //     if(pass.length==0)
    //     {
    //         setMessage("Enter Password");
    //     }
    //     else if (pass.length < 5) {
    //         setMessage("weak");
    //         setColors({color:"red"})

    //     }
    //     else if (pass.length < 8) {
    //         setMessage ("medium");
    //         setColors({color:"orange"})

    //     }
    //     else {
    //         setMessage ( "strong");
    //         setColors({color:"green"})
    //     }



    // }
    const AgeFun = (k) => {
        if (k.length == 0) {
            setAge("Please enter your age!");
        }
        else {
            setAge("");
        }
    }

    const NameFun = (r) => {
        if (r.length == 0) {
            setname("Please enter your name!")
            setColors({color:"red"})
        }
        else {
            setname("");
        }
    }

    const EmailFun = (p) => {
        if (p.length == 0) {
            setEmail("Plase enter your email!")
        }
        else {
            setEmail("");
        }
    }

    const PhoneFun = (w) => 
    {
        if (w.length == 0) {
            setPhone("Plase enter your phone number!")

        }
        if (w.length > 10) {
            setPhone("Plase enter a valid phone number!")
        }
        if (w.length < 10) {
            setPhone("Plase enter a valid phone number!")
        }
        if (w.length != 0) {
            setPhone("");
        }
    }



const vlu1=(q)=>
{
   setNum1(q);
// alert(num1);
}

const vlu2=(q)=>
{
setNum2(q);
// alert(num2);
}

const sum=()=>
{
    // alert(7)
    setResult(eval(num1)+eval(num2));
}
    return (
        <>
            <br /><br /><br />

            <div class="container">
                <div class="row">
                    {/* Sum */}
                    <div class="col-md-4">
                <div><input type="text" name="num1" onChange={(q)=>vlu1(q.target.value)} /></div>
                <br />
                <div><input type="text" name="num2" onChange={(q)=>vlu2(q.target.value)} /></div>
                <br />
                <button type="button" onClick={()=>sum()} class="btn btn-dark">Add</button><br /><br />
                <div><input type="text" name="res" value={result} readOnly class="" /></div>


                    </div>

                    <div class="col-md-4">


                        {/* <div><input type="text" name="username" id="uname" placeholder="Username" class="form-control" onChange={(e)=>Valid2(e)} />
        <p name="puname">  &nbsp;&nbsp;{message} </p></div> */}


                        {/* <div><input type="text" name="password" id="pswd" placeholder="Password"  class="form-control" onChange={(e) => Valid2(e)} />
                            <p style={colors}> &nbsp;&nbsp;{message} </p></div> */}

                        <div><input type="text" name="name" style={colors} class="form-control" placeholder="Name" onChange={(r) => NameFun(r.target.value)} />
                            <p>&nbsp;&nbsp; {name}  </p></div>

                        <div><input type="text" name="age" id="ag" placeholder="Age" class="form-control" onChange={(k) => AgeFun(k.target.value)} />
                            <p> &nbsp;&nbsp;{age} </p></div>

                        <div><input type="text" name="email" class="form-control" placeholder="Email" onChange={(p) => EmailFun(p.target.value)} />
                            <p>&nbsp;&nbsp; {email}</p></div>

                        <div><input type="number" name="phone" class="form-control" placeholder="Phone Number" onChange={(w) => PhoneFun(w.target.value)} />
                            <p>&nbsp;&nbsp; {phone}</p></div>

                        <div><button type="submit" class="btn btn-danger text-center">Sign In</button></div>

                    </div>
                    <div class="col-md-4"></div>

                </div>
            </div>
            <br /><br /><br />
        </>
    )
}
export default FormValid;