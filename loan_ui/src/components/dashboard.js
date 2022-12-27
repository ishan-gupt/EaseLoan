import React  from 'react';
//import Button from 'react-bootstrap/Button';
import {useNavigate } from 'react-router-dom';
import Navbar from "./navbar"
import {Card} from "react-bootstrap";
import './dashboard.css';
function Dashboard() {
  
  const navigate = useNavigate();
 
  const applybutton = (e) =>{
    navigate("/loanform");
  }
  const statusbutton = () => {
    navigate("/loanstatus");
  }
  
  return (
    <div className="App">
      <Navbar name="DashBoard"/>
    <div className="duv md-flex flex-row mb-3 align-self-center" style={{margin: "auto", display:"flex", alignItems:"center", justifyContent:"center"}}>
    <Card onClick={applybutton} className="cardm">
      <Card.Body>
        <Card.Title style={{fontSize:"3.5vw",textAlign: "center",
  alignSelf: "center"}}>ApplyLoan</Card.Title>
        <Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card onClick={statusbutton} className="cardm" style={{}}>
      <Card.Body>
        <Card.Title style={{fontSize:"3.5vw",opacity:"0.9",textAlign: "center",
  alignSelf: "center"}}>Loan Status</Card.Title>
        <Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
</div>
  );
}

export default Dashboard;