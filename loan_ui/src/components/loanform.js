import React, { Component }  from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col,Container,Row,Card} from "react-bootstrap";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "./navbar"
import axios from "axios";

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
const FormHandle=(e)=>{
  const loginFormData = new FormData();
  loginFormData.append("ApplicantIncome", document.getElementById('ApplicantIncome').value)
  loginFormData.append("CoaplicantIncome", document.getElementById('CoaplicantIncome').value)
  loginFormData.append("LoanAmount", document.getElementById('LoanAmount').value)
  loginFormData.append("Loan_Amount_Term", document.getElementById('Loan_Amount_Term').value)
  loginFormData.append("Credit_History", document.getElementById('Credit_History').value)
  loginFormData.append("Self_Employed", document.getElementById('Self_Employed').value)
  loginFormData.append("Property_area", document.getElementById('Property_area').value)
  loginFormData.append("Married", document.getElementById('Married').value)
  loginFormData.append("Education", document.getElementById('Education').value)
  loginFormData.append("Gender", document.getElementById("Gender").value)
  var term=0;
  var amt=document.getElementById('LoanAmount').value;
if(document.getElementById('Loan_Amount_Term').value==240){
  term=0.5
}
else if(document.getElementById('Loan_Amount_Term').value==360){
  term=1
}
  sendreq(loginFormData,term,amt)
  console.log(loginFormData)
 
}


var res="";
  const sendreq=(data,term,amt)=> {
    // store the states in the form data
      // make axios post request
      axios({
        method: "post",
        url: "http://127.0.0.1:5000/predict",
        data: data,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
          navigate("/dashboard")
          res = response;
          console.log(response)
          
          })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
  }

  
  return (
    <div>
      <Navbar/>
      <Card style={cardcss}>
        <Form >
        <Form.Group className="mb-3"  controlId='ApplicantIncome'>
          <Form.Label>Amount</Form.Label>
          <Form.Control type="Account Number" name='ApplicantIncome' />
        </Form.Group>
    
        <Form.Group className="mb-3"  controlId="CoaplicantIncome">
          <Form.Label>CoaplicantIncome</Form.Label>
          <Form.Control type="Account Number" name='CoaplicantIncome'/>
        </Form.Group>

        <Form.Group className="mb-3"  controlId='LoanAmount'>
          <Form.Label>LoanAmount</Form.Label>
          <Form.Control type="Loan Amount" name='LoanAmount'/>
        </Form.Group>

        <Form.Group className="mb-3"  controlId='Loan_Amount_Term'>
          <Form.Label>Loan Period</Form.Label>
          <Form.Select aria-label="Default select example" name='Loan_Amount_Term'>
            <option value ="0">--Select--</option>
            <option value="240">6 Months</option>
            <option value="360">1 Years</option>
            </Form.Select>
        </Form.Group> 

        <Form.Group className="mb-3"  controlId='Credit_History'>
          <Form.Label>Credit History</Form.Label>
          <Form.Select aria-label="Default select example" name='Credit_History'>
            <option value="0">--Select--</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3"  controlId='Self_Employed'>
          <Form.Label>Self Employed</Form.Label>
          <Form.Select aria-label="Default select example" name='Self_Employed'>
            <option value="0">--Select--</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </Form.Select>
        </Form.Group>  

        <Form.Group className="mb-3"  controlId='Property_area'>
          <Form.Label>Geographical Area</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>--Select--</option>
            <option value="2">urban</option>
                <option value="1">semiurban</option>
                <option value="0">rural</option>
          </Form.Select>
        </Form.Group> 

        <Form.Group className="mb-3" controlId='Married'>
          <Form.Label>Marrital Status</Form.Label>
          <Form.Select aria-label="Default select example" >
            <option value="0">--Select--</option>
            <option value="1">Married</option>
            <option value="2">Single</option>
          </Form.Select>
        </Form.Group>  

        <Form.Group className="mb-3"  controlId='Education'>
          <Form.Label>Education Status</Form.Label>
          <Form.Select aria-label="Default select example" name='Education'>
            <option>--Select--</option>
            <option value="0">Graduate</option>
                <option value="1">Not Graduate</option>
          </Form.Select>
        </Form.Group>  

        <Form.Group className="mb-3"  controlId='Gender'>
          <Form.Label>Gender</Form.Label>
          <Form.Select aria-label="Default select example" name='Gender'>
            <option>--Select--</option>
            <option value="1">male</option>
                <option value="0">female</option>
          </Form.Select>
        </Form.Group>  

        <Button variant="primary" type="submit" onClick={FormHandle}>
          Submit
        </Button>
      </Form>
    </Card>
    </div>
  );
}

export default Loanform;