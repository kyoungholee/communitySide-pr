const express = require('express');
const app = express();
const api = require('./routes/index');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const db = mongoose.connection; 
db.on('error', console.error);
db.once('open', function(){
  console.log('connected mongodb server!');
});

mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/user", require("./routers/userCRUD"));
app.use("/board", require("./routers/boardCRUD"));


app.use(cors());
app.use('/api', api);

const port = 3002;
app.listen(port, ()=>console.log(`Listening on port ${port}`));
