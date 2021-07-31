const express = require('express');
const app = express();
require('./DB/mongoose')
const userRouter = require('./routers/user');
const tasksRouter = require('./routers/task');
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);
app.use(tasksRouter);

app.listen(port, () =>{
    console.log('listening on port '+port);
})






