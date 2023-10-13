import React from "react";
class Cls_Comp extends React.Component {
    constructor(props) {
        super(props)
        this.state={counter:0}
        this.c={cnt:0}
    }

    myFunction=()=>{
        this.setState({counter:this.state.counter+1})
    }
    five=()=>{
        this.setState({counter:this.state.counter+5})
    }
        render(){

            return (
                <>
                    <h3>This is a class component!</h3>
                    <center>
                    <br /><br />
                    <div>Clicks<span>&nbsp;&nbsp;Clicks:{this.c.cnt}</span></div><br />
                    <div style={{color:"blue",fontSize:"70px",fontWright:"bold"}}>{this.state.counter}</div>
                    <br/>
                    <button class="btn btn-danger" onClick={this.myFunction}>+1</button>
                    <span>&nbsp;&nbsp;<button class="btn btn-danger" onClick={this.five}>+5</button>
                    </span>
                    </center>
                    <br /><br /><br />
                </>
            )
        }
    

}
export default Cls_Comp;