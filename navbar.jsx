 
 import React from 'react';
 import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
 import Home from './home';
 import Form from './form';
 import Propz from './propz';
import Cls_Comp from './Cls_Comp'; 
import Fun_Comp from './Fun_Comp';
import Form_pro from './form_processing';
import FormProCls from './formpro_cls'; 
import FormValid from './form_validation';
import Lyfcycle from './lyfcyclehooks';
import Api from './api';
import Post from './post';
 {/*Navbar start*/}

 function Navbar()
 {
    return(

  

 <>
 <BrowserRouter>
 <nav class="navbar navbar-expand-lg bg-body-tertiary">
   <div class="container-fluid">
     <a class="navbar-brand" href="#">Navbar</a>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <li class="nav-item">
           <Link class="nav-link active" aria-current="page" to="/">Home</Link>
         </li>
         <li class="nav-item">
           <Link class="nav-link" to="Form">Form</Link>
         </li>
         <li class="nav-item">
           <Link class="nav-link" to="admin">Admin</Link>
         </li>
         <li class="nav-item">
           <Link class="nav-link" to="user">user</Link>
         </li>
         
         <li class="nav-item">
           <Link class="nav-link" to="cls_comp">Cls_Comp</Link>
         </li>
         <li class="nav-item">
           <Link class="nav-link" to="fun_comp">Fun_Comp</Link>
         </li>
         <li class="nav-item">
           <Link class="nav-link" to="form_pro">Form_Pro_Fun</Link>
         </li> 
         <li class="nav-item">
           <Link class="nav-link" to="formprocls">Form_Pro_Cls</Link>
         </li>
         <li class="nav-item">
           <Link class="nav-link" to="formvalid">Form_Validation</Link>
         </li>
         <li class="nav-item">
           <Link class="nav-link" to="lyfcycle">LyfCycle</Link>
         </li>
         <li class="nav-item">
           <Link class="nav-link" to="api">API</Link>
         </li>
         <li class="nav-item">
           <Link class="nav-link" to="post">Post</Link>
         </li>
         
         {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Form_Processing
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="form_pro">Form_Pro</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
       </ul>
     

       <form class="d-flex" role="search">
         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
         <button class="btn btn-outline-success" type="submit">Search</button>
       </form>
     </div>
   </div>
 </nav>
 <Routes>
    <Route path="" element={<Home/>}/>
    <Route path="/form" element={<Form/>}/>
    
    <Route path="/admin" element={<Propz title="Admin Login"/>}/>
    <Route path="/user" element={<Propz title="user Login"/>}/>


    <Route path="/cls_comp" element={<Cls_Comp/>}/>
    <Route path="/fun_comp" element={<Fun_Comp/>}/>

    <Route path="/form_pro" element={<Form_pro/>}/>
    <Route path="/formprocls" element={<FormProCls/>}/>

    <Route path="/formvalid" element={<FormValid/>}/>
    <Route path="/lyfcycle" element={<Lyfcycle/>}/>

    <Route path="/api" element={<Api/>}/>
    <Route path="/post" element={<Post/>}/>












 </Routes>
 </BrowserRouter>
</>

)
}

export default Navbar

{/* Navbar end */}