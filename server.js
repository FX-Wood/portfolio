const express = require('express');
const app = express();

app.use(express.static(__dirname + '/client/build'))

app.get('*', (req, res) => {
    res.send(__dirname + '/client/build/index.html')
})

port = process.env.PORT || 3001
app.listen(port, () => console.log(`portfolio is listening on port ${port}`));