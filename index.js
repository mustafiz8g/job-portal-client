
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4900;

app.use(cors());
app.use(express.json())


app.get('/', (req, res) => {
    res.send('job protal server is running')
})

app.listen( port , () => {
    console.log(`job portal is running on port ${port}`)
})