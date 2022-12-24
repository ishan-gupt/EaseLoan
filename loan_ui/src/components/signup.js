import { useState, useEffect } from "react";
import React from 'react';
import { Form,Card, Button } from "react-bootstrap";
import axios from "axios";

const cardcss = {
    height:"720px",
    padding:"70px",
    width:"600px",
    margin:"80px auto",
    opacity: .9
  }

function Signup()
{
    const [user, setUser] = useState({
        email: "",
        firstname: "",
        lastname: "",
        password: "",
    });
    const { email, firstname, lastname, password } = user;
    const onInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const FormHandle = (e) => {
        e.preventDefault();
        addDataToServer(user);
        console.log(user);
    };
    const addDataToServer = (data) => {
        axios.post("http://localhost:8080/auth/signup", data).then(
                (response) => {
                    console.log(response);
                    alert("User Added Successfully");
                    },
                (error) => {
                    console.log(error);
                    alert("Operation failed");
                }
                );
    };
    const initialValues = {
         email: "",
        firstname: "",
        lastname: "",
        password: "",
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    /*const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };*/

    /*const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };*/

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.firstname) {
            errors.username = "Firstname is required!";
        } if (!values.lastname) {
            errors.username = "Lastname is required!";
        }

        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        if (!values.confirmpassword) {
            errors.confirmpassword = "Confirmpassword is required";
        } else if (values.confirmpassword != values.password) {
            errors.confirmpassword = "ConfirmPassword is not matched";
        }
        return errors;
    };
  
  return (

    <Card style={cardcss}>
     
      <Form>
      <h1 style={{marginBottom:"25px"}}>Signup</h1>
      <Form.Group>
        <Form.Label>First Name</Form.Label>
            <Form.Control style={{marginBottom:"10px"}} id="firstname" name="firstname" type="text" value={formValues.firstname} onChange={(e) => onInputChange(e)} required />
      </Form.Group>
      <Form.Group>
      <Form.Label>Last Name</Form.Label>
          <Form.Control style={{marginBottom:"10px"}} id="lastname" type="text" name="lastname" value={formValues.lastname} onChange={(e) => onInputChange(e)} required/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
             <Form.Control style={{marginBottom:"10px"}} id="email" name="email" type="email" value={formValues.email} onChange={(e) => onInputChange(e)} required/>
      </Form.Group>
      <Form.Group>
      <Form.Label>Password</Form.Label>
          <Form.Control style={{marginBottom:"10px"}} id="password" type="password" name="password"  value={formValues.password}  onChange={(e) => onInputChange(e)} required/>
      </Form.Group>
      <Form.Group>
      <Form.Label>Confirm Password</Form.Label>
          <Form.Control style={{marginBottom:"10px"}} id="confirmPassword" name="confirmPassword" type="password" value={formValues.confirmpassword}  onChange={(e) => onInputChange(e)} required/>
      </Form.Group>
         <Button style={{marginBottom:"10px"}} variant="primary" className="mt-3" onClick={FormHandle} disabled={!firstname || !email || !password || !lastname}>Submit</Button>
        </Form>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <div style={{flex: 1, height: '1px', backgroundColor: 'grey'}} />
                <p style={{width: '70px', textAlign: 'center'}}>or</p>
            <div style={{flex: 1, height: '1px', backgroundColor: 'grey'}} />
          </div>
          <Card.Text>Already have a account <a href="signin">click me</a></Card.Text>
    </Card>
   
  
  );
}



export default Signup;