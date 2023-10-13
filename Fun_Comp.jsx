import React,{useState} from "react";
function Fun_Comp(){
    const[a,seta]=useState(0)
    const[c,setc]=useState(0)

    const counters=()=>{
        setc(c+1)
    }

    const plus=()=>{
        seta(a+1)
        counters()
    }
    const minus=()=>{
        seta(a-1)
        counters()
    }
    const zero=()=>{
        seta(0)
        counters()
    }
    return(
        <>
        <h3>This is a function component!</h3>
        <center>
        <br/><br />
       <div> 
        <div style={{color:"red"}}>Clicks<span>&nbsp;&nbsp;{c}</span></div>
        <div id="ret" style={{color:"green",fontWeight:"bold",fontSize:"200px",backgroundColor:"black",width:"400px",borderRadius:"10px"}}>{a}</div><br />
        <button class="btn btn-dark" onClick={()=>minus()} style={{width:"60px",height:"60px"}}>-</button>
        <span> <button class="btn btn-dark" onClick={()=>zero(0)} style={{width:"60px",height:"60px"}}>0</button></span>
        <span> <button class="btn btn-dark" onClick={()=>plus(a+1)} style={{width:"60px",height:"60px"}}>+</button></span>
        </div>
        <br/><br /><br /><br /><br />
        </center>
        </>
    )
}
export default Fun_Comp;