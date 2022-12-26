import React , { useState, useEffect } from 'react';
import { Button, Card,Form,Table} from "react-bootstrap";
//import { useNavigate } from 'react-router-dom';
import Navbar from "./navbar";
import axios from 'axios';
function Loanlist(){
    
    const divcss = {
        padding:"40px 10rem"
    }
    const cardheader = {
        backgroundColor:"#F9F9F9",
        height:"70px",
        marginBottom:"20px"
    }
    
    return(
        <div>
<Navbar name="Loan Status"/> 
        <div style={divcss}>
            <Card style={cardheader}>
                <Card.Body>
                    <Form.Control style={{float:"left",width:"150px"}} placeholder="search"/>
                    <Form.Select style={{float:"right",width:"150px"}}>
                        <option>Filter</option>
                        <option value="ACCEPTED">accepted</option>
                        <option value="PENDING">pending</option>
                        <option value="REJECTED">rejected</option>
                    </Form.Select>
                </Card.Body>
            </Card>
            <Table style={{backgroundColor:"white", opacity:"0.8"}}>
            <thead>
                <tr>
                <th>Loan Amount</th>
                <th>Loan Duration</th>
                <th>status</th>
                
                </tr>
            </thead>
            <tbody>
           
            </tbody>
            </Table>
        </div>
        </div>
    );
}
export default Loanlist;
/* {data?.map((row) => (
               <tr key={row.id}>
                <td>{row.amount}</td>
                  <td>{row.emimonths}</td>
                  <td>{row.status}</td>
               </tr>
             ))}*/