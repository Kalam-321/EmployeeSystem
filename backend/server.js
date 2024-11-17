import express from 'express';
import { getEmployees,addEmployee } from './database.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/employees',async (req,res)=>{
    const employees = await getEmployees();
    res.send(employees);
});

app.post('/addEmployee',async (req,res)=>{
    const {name,email,salary,deptId} = req.body;
    const employee = await addEmployee(name,email,salary,deptId);
    res.send(employee);
});

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('Something went wrong');
});

app.listen(8000,()=>{
    console.log('Server is running on port 8000');
})