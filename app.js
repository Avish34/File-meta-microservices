var express = require('express')
var router = express.Router()
var multer  = require('multer')
var upload = multer()
router.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
    try{
    var obj={name:req.file.originalname,
        type: req.file.type,
        size: req.file.size}
    res.send(obj)
    }
    catch{
        res.send(400)
    }
  })
  module.exports=router