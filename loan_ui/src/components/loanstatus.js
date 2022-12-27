import React , { useState, useEffect } from 'react';
import { Button, Card,Form,Table} from "react-bootstrap";
//import { useNavigate } from 'react-router-dom';
import Navbar from "./navbar";
import axios from 'axios';

function Loanlist(){
    var user=localStorage.getItem("user");
        const [data, setData] = useState([]);
        var myHeaders = new Headers();
        myHeaders.append("Access-Control-Allow-Origin", "*");
        myHeaders.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
    useEffect(() => {
        axios.get('http://127.0.0.1:5000/data/'+user)
          .then(res => {
            setData(res.data);
          })
      }, []);
    const divcss = {
        padding:"40px 10rem"
    }
    const cardheader = {
        backgroundColor:"#F9F9F9",
        height:"70px",
        marginBottom:"20px"
    }
    console.log(data)
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
            {data.map((item,index) => (
               <tr key={index}>
                <td>₹ {item[1]}</td>
                  <td>{item[2]} months</td>
                  <td>{item[3]}</td>
               </tr>
             ))}
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