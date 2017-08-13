var fs = require("fs");
var async = require('async');
var cmd = require('node-cmd');
var mkdirp = require('mkdirp')

exports.save = function (req, res) {
  const video = req.files[0]

  // check file
  // write file
  async.waterfall([
    function (callback) {
      fs.readFile(video.path, (error, result) => {
        if (error) {
          console.log('ReadError:', error)
        } else {
          return callback(null, result)
        }
      })
    },
    function (result, callback) {
      const videoStoragePath = __dirname + '/videos/'
      // create directory if does not exists
      mkdirp(videoStoragePath, function (error) {
        if (error) {
          console.log('MakeDirError:', error)
        }
        fs.writeFile(videoStoragePath + video.originalname, result, (error) => {
          if (error) {
            console.log('WriteError:', error)
          } else {
            return callback(null, 'success')
          }
        })
      })
    }
  ])

  res.send('success')
}
