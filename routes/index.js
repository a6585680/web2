const express = require('express');
//引入连接池模块
const pool = require('../pool.js');
//console.log(pool);
//创建路由器对象
const r = express.Router();

//获取站点城市名
r.get('/city', (req, res) => {
  let id = req.query.id;
  let sql = 'select city_name,level_name from tab_level tl left join tab_city tc on tl.level_id=tc.level_id where tc.level_id=?';
  pool.query(sql, [id], (err, results) => {
    if (err) throw err;
    res.send({ code: 200, message: '查询成功', results: results });
  })
});

//获取路线价格，图片，时长，简称
r.get('/route',(req,res)=>{
  let tid = req.query.tid;
  let sql = 'select price,rimage,days,sname from tab_time tb inner join tab_route tr on tb.tid=tr.tid where tb.tid=?';
  pool.query(sql,[tid],(err,results)=>{
    if (err) throw err;
    res.send({ code: 200, message: '查询成功', results: results });
  })
})

r.get('/getTid',(req,res)=>{
  let tname = req.query.tname;
  let sql ="select tid from tab_time where tname=?";
  pool.query(sql,[tname],(err,result)=>{
    if (err) throw err;
    res.send({ code: 200, message: '查询成功', result: result });
  })
})
module.exports = r;