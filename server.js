import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res)=>{
  res.send( req.cookies.name ? `Welcome ${req.cookies.name}!`: 'No name found :(');
})

app.listen(port, ()=>{
  console.log(`Server is listening on port: ${port}`);
})