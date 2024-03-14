import { useState } from "react";
import { useContext,createContext } from "react";
import MyContext from "./Mycontext";
import "bootstrap/dist/css/bootstrap.min.css";
import './login.css';
function CreateAccount(){
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState();
    const [age,setAge]=useState();
    const [gender,setGender]=useState('');
    const [password,setPassword]=useState('');
    const [show,setShow]=useState(true);
    let ctx =useContext(MyContext);


    function create(e){
        e.preventDefault();
        console.log('Create Account Consoles start');
        console.log("User data before creating account:",ctx);
        console.log("Input's: ","Name ",name,"Age ",age,"Email ",email,"Phone no ",phone,"Age ",age,"Gender ",gender,"Password ",password);
        console.log("Data type of phone number:",typeof(phone));
        console.log("Phone number length:",phone.length);
        if(name==""){
            alert("Please Enter name");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
            return;
        }
        if(!phone){
            alert('please Enter phone number');
            return;
        }else if(phone.length<10){
            alert('Phone should 10 number');
            return;
        }
        else if(phone.length>10){
            alert('Phone should 10 number');
            return;
        }
        if(!age){
            alert('please Enter age');
            return;
        }
        else if(age.length>2){
            alert('Age should be less than 3 numbers');
            return;
        }
        if(!gender){
            alert('please select gender');
            return;
        }
        // const strongPasswordRegex = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[!@#$%^&])(?=.[a-zA-Z]).{8,}$/;
        // if(!password){
        //     alert('please enter password');
        // }
        // else if(!strongPasswordRegex.test(password)){
        //     alert('Password should be strong');
        //     return;
        // }
        ctx.users.push({name,email,phone,age,gender,password,balance:0});
        console.log(" user data After account  created:",ctx);
        setShow(false);
        console.log('Create Account Consoles end');
    }
    function reset(){
        setName('');
        setEmail('');
        setPhone('');
        setAge('');
        setGender('');
        setPassword('');
        setShow(true);
    }



    return(
        <>
        <div className="app">
            <div className="login-form">
                <div className="title">Create Account</div>
                <div className="form">
                    {show ?
                    <form>
                        <div className="input-container">
                            <label>Name: </label>
                            <input type="text" name="uname" required value={name} onChange={e=>setName(e.target.value)} />
                        </div>
                        <div className="input-container">
                            <label>Email: </label>
                            <input type="text" name="uname" required value={email} onChange={e=>setEmail(e.target.value)} />
                        </div>
                        <div className="input-container">
                            <label>Phone: </label>
                            <input type="number" name="uname" required value={phone} onChange={e=>setPhone(e.target.value)} />
                        </div>
                        <div className="input-container">
                            <label>age: </label>
                            <input type="number" name="uname" required value={age} onChange={e=>setAge(e.target.value)} />
                        </div>
                        <div className="input-container">
                            <label>Gender: </label>
                            <select id="Size" name="Size" value={gender} onChange={e=>setGender(e.target.value)}>
                                <option>Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="input-container">
                            <label>Password: </label>
                            <input type="password" name="pass" required    value={password} onChange={e=>setPassword(e.target.value)} />
                        </div>
        
                        <div className="button-container">
                           <button onClick={create}>Submit</button>
                        </div>
                   </form>:
                   <>
                   <h4 id="success">Successfully created</h4>
                   <div className="button-container">
                   <div><button onClick={reset}>Create another Account</button></div>
                   </div></>}
                </div>       
            </div>
        </div>
        </>
    );

}
export default CreateAccount;