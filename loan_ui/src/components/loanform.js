import React, { Component }  from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col,Container,Row,Card} from "react-bootstrap";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "./navbar"
function Loanform() {
  const navigate = useNavigate();
  /*
  useEffect(() => {
    if(!localStorage.getItem("token") || !localStorage.getItem("user")){
      navigate("/signin");  
    }
  },[])
  */
  const signout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/signin");
  }
  const cardcss = {
    height:"580px",
    padding:"70px",
    width:"500px",
    margin:"80px auto",
  }
  return (
    <div>
      <Navbar/>
      <Card style={cardcss}>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicAccountNumber">
          <Form.Label>Amount</Form.Label>
          <Form.Control type="Account Number" />
        </Form.Group>
    
        <Form.Group className="mb-3" controlId="formBasicIFSCCode">
          <Form.Label>Purpose</Form.Label>
          <Form.Control type="Account Number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLoanType">
          <Form.Label>Loan Type</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>--Select--</option>
            <option value="1">Home Loan</option>
            <option value="2">Personal Loan</option>
            <option value="3">Student Loan</option>
            <option value="4">Car Loan</option>
          </Form.Select>
        </Form.Group> 

        <Form.Group className="mb-3" controlId="formBasicLoanPeriod">
          <Form.Label>Loan Period</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>--Select--</option>
            <option value="1">1 Year</option>
            <option value="2">2 Years</option>
            <option value="3">3 Years</option>
            <option value="4">4 Years</option>
            <option value="5">5 Years</option>
          </Form.Select>
        </Form.Group> 

        <Form.Group className="mb-3" controlId="formLoanInterest">
          <Form.Label>Loan Interest</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>--Select--</option>
            <option value="1">Home-5%</option>
            <option value="2">personal-10%</option>
            <option value="3">Student-4.5%</option>
            <option value="4">Car-7.5%</option>
          </Form.Select>
        </Form.Group> 

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
    </div>
  );
}

export default Loanform;