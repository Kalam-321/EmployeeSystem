import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password:process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
}).promise();



export async function getEmployees(){
    const [rows] = await pool.query('SELECT * FROM employee');
    return rows;
}

export async function addEmployee(name,email,salary,deptId){
    try {
        const [rows] = await pool.query('INSERT INTO employee (name,email,salary,deptId) VALUES (?,?,?,?)',[name,email,salary,deptId]);
        return {
            id: rows.insertId,
            name,
            email,
            salary,
            deptId
        }
    } catch (error) {
        console.error('Error while adding employee',error);
    }
    
}






// const employees = await getEmployees();
// console.log(employees);

// const addedEmployee = await addEmployee('John','johndoe@email.com',`50000`,1);
// console.log(addedEmployee);