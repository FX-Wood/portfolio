const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.json('root')
})



port = process.env.PORT || 3001
app.listen(port, () => console.log(`portfolio is listening on port ${port}`));