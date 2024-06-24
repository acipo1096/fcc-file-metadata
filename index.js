var express = require('express');
const multer = require('multer');
const upload = multer().single('upfile');
var cors = require('cors');
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', (req, res) => {
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      // Error on upload!
    }
    else if (err) {
      // Unknown error
    }

    res.json({
      name:  req.file.originalname,
      type: req.file.mimetype,
      size: req.file.size
    })
  })
})

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
