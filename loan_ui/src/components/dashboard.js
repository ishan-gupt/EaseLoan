import React, { Component }  from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "./navbar"
import { Form,Card} from "react-bootstrap";
import Flexbox from 'flexbox-react';
import './dashboard.css';
import { margin } from '@mui/system';
function Dashboard() {
  
  const navigate = useNavigate();
  /* 
  useEffect(() => {
    if(!localStorage.getItem("token") || !localStorage.getItem("user")){
      navigate("/signin");  
    }
  },[])
  */
 
  const applybutton = (e) =>{
    navigate("/loanform");
  }
  const statusbutton = () => {
    navigate("/loanstatus");
  }
  
  return (
    <div className="App">
      <Navbar/>
    <div className="duv md-flex flex-row mb-3 align-self-center" style={{margin: "auto", display:"flex", alignItems:"center", justifyContent:"center"}}>
    <Card onClick={applybutton} className="cardm">
      <Card.Body>
        <Card.Title style={{fontSize:"3.5vw"}}>ApplyLoan</Card.Title>
        <Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card onClick={statusbutton} className="cardm" style={{}}>
      <Card.Body>
        <Card.Title style={{fontSize:"3.5vw",opacity:"0.9"}}>Loan Status</Card.Title>
        <Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
</div>
  );
}

export default Dashboard;