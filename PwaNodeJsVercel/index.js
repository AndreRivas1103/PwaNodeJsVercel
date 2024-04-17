import express from 'express'
import path from 'path';
import {fileURLToPath} from 'url';


const port = process.env.PORT || 5000

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

app.use(express.static('public'))

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
})


app.listen(port, () =>{
    console.log('Server started on port 5000')
})