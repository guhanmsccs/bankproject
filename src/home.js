import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./App.module.css";
import { useContext } from 'react';
import MyContext from './Mycontext';
import Login from './login';
import CreateAccount from './createaccount';

const SignUpForm = () => {  
  const  addData  = useContext(MyContext);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
   });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addData(formData);
    setFormData({
      username: '',
      email: '',
      password: ''
    });
  };
  

  return (
    <>
    <div className={styles.homepage}>
      <div className={styles.marquee}>
      <marquee  behavior="scroll" direction="right"><span>WELCOME</span> TO BANK OF SERBIA</marquee>
      </div>

      <form className={styles.form1}>
          <Link  className={styles.link} to="/createaccount">Create Account</Link>
          <Link  className={styles.link} to="/login">Login</Link>
        </form>
    <div>
    
    </div>
    </div>
    </>
  );
}

export default SignUpForm;
