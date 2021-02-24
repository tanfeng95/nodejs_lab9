const express = require('express');
require('dotenv').config();
const userRouter = require("./routers/routerUser");


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/',(req,resp)=>{
    resp.send('hello jwt')
})

app.use("/", userRouter);
require("./models/db.js");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});