// import React, { useState, useEffect } from "react";
// import axios from "axios";
// export default function Api() {
//     const arr = [1, 2, 3, 4, 5];
//     const [data, setData] = useState([])

//     useEffect(() => {
//         fetchData()
//     }, []
//     )
//     const fetchData = async () => {
//         const response = await axios.get("https://jsonplaceholder.typicode.com/users")
//         console.log(response.data)
//         setData(response.data)
//     }
//     return (
//         <>
//             <center><br /><br />
//                 <h3>Fetching data from API </h3>
//             </center>
//             <hr />
//             <br />
//             {/* <ul>
//                     {arr.map(i=><li>{i}</li>)}
//                 </ul> */}
/* <div class="container">
    <table class="table table-hower">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Company</th>
                <th>City</th>
                <th>Zipcode</th>



            </tr>
        </thead>
        <tbody>
            {data.map(i => <tr>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.company.name}</td>
                <td>{i.address.city}</td>
                <td>{i.address.zipcode}</td>

            </tr>)}
        </tbody>
    </table>
</div> */

// <br /><br />
//         </>
//     )
// }

import React,{useState,useEffect} from "react";

export default function Api(){
    const [st,setst]=useState([])
    useEffect(()=>{
        fetchfetch()
    },[])
    const fetchfetch=()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            return res.json()
        })
        .then(res1=>{
            setst(res1) 
        })
    }
    return(
        <>
        <h1>fetch data using fetch</h1>


        <div class="container">
    <table class="table table-hower">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Company</th>
                <th>email</th>
                <th>Zipcode</th>



            </tr>
        </thead>
        <tbody>
            {st.map(i => <tr>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.company.name}</td>
                <td>{i.email}</td>
                <td>{i.address.zipcode}</td>

            </tr>)}
        </tbody>
    </table>
</div>

        </>
    )
}