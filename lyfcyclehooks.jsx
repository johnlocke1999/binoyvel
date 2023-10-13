import React from "react";
class Lyfcycle extends React.Component {
    constructor(props) {
        super(props)
        this.state={ a: "Hello" }
        console.log("constructor working")
    }
    Fun=()=>
    {
    this.setState({ a: "Halooo Guyzzz.." })
}
undo=()=>
{
this.setState({ a: "Hello" })
}
componentWillMount()
{
    console.log("Willmount working")
}
componentDidMount()
{
    console.log("Didmount working")

}
componentWillUpdate()
{
    console.log("willUpdate working");

}
componentDidUpdate()
{
    console.log("didUpdate working");

}
componentWillUnmount()
{
    console.log("Willunmount working")
}
render(){
    console.log("Render working")
    return (
        <>
        <center>

            <br />
            <h3>Lyf Cycle Hooks!!</h3><hr />
            <br /><br />
            <button type="button" class="btn btn-info" onClick={this.undo}>Undo</button>

            &nbsp;&nbsp;&nbsp;
            <button type="button" class="btn btn-info" onClick={this.Fun}>update</button>

<br />
            <p style={{fontSize:"80px",fontWeight:"bold",fontFamily:"revert",color:"#DB2828"}}>{this.state.a} </p>
            <br /><br />
            </center>
        </>
    )
}
}
export default Lyfcycle;