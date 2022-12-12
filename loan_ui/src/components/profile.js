import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Card} from "react-bootstrap";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "./navbar"
function Profile() {
    const firstname=localStorage.getItem("fname");
    const lastname=localStorage.getItem("lname")
    const email=localStorage.getItem("user")
    const navigate = useNavigate();
    /*
    useEffect(() => {
      if(!localStorage.getItem("token") || !localStorage.getItem("user")){
        navigate("/signin");  
      }
    },[])
    */
    const cardcss = {
      height:"600px",
      padding:"70px",
      width:"500px",
      margin:"80px auto",
    }
    
  return (
    <div>
      <Navbar/>
      <Card style={cardcss}>
          <Form>
      <Form.Group className="mb-3" controlId="formbasicFirstName">
        <Form.Label>FirstName </Form.Label>
        <Form.Control placeholder={firstname} disabled/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>LastName </Form.Label>
        <Form.Control placeholder={lastname} disabled/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control placeholder={email} disabled/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Old Password :  </Form.Label>
        <Form.Control name="oldp" type="Old Password" placeholder=" Enter password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>New Password :  </Form.Label>
        <Form.Control name="newp" type="New Password" placeholder=" Enter password" />
      </Form.Group>
      
      <Button variant="primary" type="Update">
        Update
      </Button>
    </Form>
    </Card>
    </div>
  );
}

export default Profile;