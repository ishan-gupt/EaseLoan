import React from 'react';
import { useState } from "react";
import { Form,Card, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Home = () =>{
    const navigate = useNavigate();
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const[user,setUser] = useState([])
  
    const cardcss = {
      height:"560px",
      padding:"70px",
      width:"500px",
      margin:"80px auto",
    }
    const mailchange = (e)=>{
      setEmail(e.target.value);
    }
    const passwordchange = (e)=>{
      setPassword(e.target.value);
    }
    const formsubmit = (e)=>{
      e.preventDefault()
      axios.post(
        "http://localhost:8080/auth/signin",{
          email:email,
          password:password
        }
      )
      .then((res) => {
        if(res.status === 200 || res.status === 201){
          localStorage.setItem("token",res.data.jwt);
          localStorage.setItem("user",email);
          localStorage.setItem("fname",res.data.user.firstname)
          localStorage.setItem("lname",res.data.user.lastname)
          const seconds = 60 * 60 * 1000;
          const expiry = new Date(new Date().getTime() + seconds);
          localStorage.setItem("expiry", expiry.toISOString());
          navigate("/dashboard");
          window.location.reload()
        }
      })
      .catch(function(error){
        document.getElementById("bad").style.display = "block";
      });
    }
    return (
      <div>
        <Card style={cardcss}>
          <Form>
           <Form.Label id="bad" style={{display:"none",backgroundColor:"rgba(255, 53, 71, 0.5)", border:"2px solid red",padding:"0px 20px"}}>Bad credentials</Form.Label>
            <h1 style={{marginBottom:"30px"}}>Login</h1>
            <Form.Group>
              <Form.Label >Email address </Form.Label>
              <Form.Control onChange={mailchange} style={{marginBottom:"30px"}} type="email"/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password </Form.Label>
              <Form.Control onChange={passwordchange} style={{marginBottom:"20px"}} type="password"/>
            </Form.Group>
            <Button style={{marginBottom:"20px"}} variant="primary" type="submit" className="mt-3" onClick={formsubmit} disabled={!email || !password}>Submit</Button>
          </Form>
          <Card.Text>Forgot password? <a href="#">click me</a></Card.Text>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <div style={{flex: 1, height: '1px', backgroundColor: 'grey'}} />
                <p style={{width: '70px', textAlign: 'center'}}>or</p>
            <div style={{flex: 1, height: '1px', backgroundColor: 'grey'}} />
          </div>
          <Card.Text>Create a new account <a href="signup">click me</a></Card.Text>
        </Card>
      </div>
      );
};
export default Home;