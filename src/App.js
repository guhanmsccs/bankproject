import './app.css'; 
import MyContext from './Mycontext';
import Navbar from './navbar';
import Deposite1 from './deposite';
import Footer from './footer';
import Withdraw from './withdraw';
import { Route,Routes, HashRouter } from "react-router-dom";
import SignUpForm from './home';
import AllData from './alldata';
import Login from './login';
import CreateAccount from './createaccount';
//import App1 from './sk';
 

export default function banking(){

  return(
    <>
    <HashRouter>
      <Navbar/>
    <MyContext.Provider value={{
      users:[{
        name:"guhan",
        email:"guhanjagadeesan@25@gmail.com",
        password:"12345",
        balance:2000
      },{
       
       
        name :"user2",
        email :"user3@gmail.com",
        password:"12345",
        balance:3000
      }],
      currentUser:[]
    }

    }>
      <Routes> 
      {/* <Route  path='/' exact element={<SignUpForm/>}/> */}
      <Route path='/createaccount' element={<CreateAccount/>}/>
      <Route  path='/deposit' element={<Deposite1 />}/>
      <Route  path='/withdraw'element={<Withdraw />}/>
      <Route path ='/alldata' element={<AllData/>}/>
      <Route path ='/login' element={<Login/>}/>
      </Routes>
    </MyContext.Provider>
    <Footer/>
    </HashRouter>
    </>
  )
}