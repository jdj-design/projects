import express from 'express';
const app=express();
const port = 8080;
app.use(express.json());

app.get('/', (request, response)=>{
    response.send('working')
});

app.listen(port, ()=>{
    console.log('app is working')
});