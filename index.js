const express = require('express')
var bodyParser = require('body-parser')
var upload = require('./uploader')
const app = express()

var multer = require('multer');
var multerupload = multer({ dest: 'temp-videos/' })

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

var router = express.Router();
router.get('/', function (req, res) {
  res.send('Woo Tag Video Upload API')
})

// manage video upload
router.post('/video/upload', multerupload.any(), upload.save)

app.use('/', router);

app.listen(3001, function () {
  console.log('video-upload-service listing to 3001')
})