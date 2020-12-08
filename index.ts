import express from "express";
import * as bodyparser from 'body-parser';
import cors from 'cors';
const v1 = require('./apis/v1')
const v2 = require('./apis/v2')

const app = express()

app.use(bodyparser.json())

app.use(cors())

app.use('/api/v1', v1)
app.use('/api/v2', v2)

app.get('/', (req, res) => {
    res.send('Hello world\n');
});


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on PORT ${port}`));