//创建连接池对象
const mysql=require('mysql');
const pool=mysql.createPool({
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'1234',
  database:'travel',
  connectionLimit:10 
  //新浪云数据库地址
  // host:'r.rdc.sae.sina.com.cn',
  // port:'3306',
  // user:'zzyz45z1kz',
  // password:'m352z0x541h10ll3mlwx14545y2lxww0l2zy0lyi',
  // database:'app_day2008',
  // connectionLimit:10
});

//导出连接池对象
module.exports=pool;





