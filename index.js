import express from 'express';
import './config/dotenv.js';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('*', (req, res)=>{
    res.status(404).send({msg: "Route Not Found"})
})

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})