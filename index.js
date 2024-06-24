var express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/'})
var cors = require('cors');
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', (req, res) => {
  try {
    res.json({
      name:  req.originalname,
      type: req.mimetype,
      size: req.size
    })
  } catch (error) {
    res.status(404).send("Error!")
  }

})



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
