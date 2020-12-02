var express = require('express');
var router = express.Router();
var pool=require('../pool');

router.get('/', (req, res)=> {
  var sql ='SELECT * FROM tab_category';
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send({result});
  })
});

module.exports = router;