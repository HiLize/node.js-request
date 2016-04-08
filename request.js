

// 失败一直返回200，但是评论不上，就是因为method写错了，就默认为get方式了，就不会执行write事件写入了。
// 所以返回200，是连接成功，但是没有写入这一步。
// 慕课网评论
var http=require('http');
var querystring=require('querystring');

var postData=querystring.stringify({
	'content':'再试一条！！',
	'mid':8837
})
var option={
	hostname: 'www.imooc.com',
	port: 80,
	path: '/course/docomment',
	method: 'POST',
	headers:{
		'Accept':'application/json,text/javascript,*/*;q=0.01',
		'Accept-Encoding':'gzip,deflate',
		'Accept-Language':'zh-CN,zh;q=0.8',
		'Connection':'keep-alive',
		'Content-Length':postData.length,
		'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8',
		'Cookie':'imooc_uuid=692d8369-2502-42ed-a29c-105b2517b58c;imooc_isnew=1;imooc_isnew_ct=1460028966;loginstate=1;apsid=RhMWJkMDFiNWQ4ZGRlMjU2NTY5NDZkNjAzOGIzNDEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTM0NDU1NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyNTMxMzg0Mzk3QHFxLmNvbQAAAAAAAAAAAAAAAAAAADdlMGFhOWUwNjc3N2Q1Yjk5NTUyOTE1MjkwODUzYThickYGV3JGBlc%3DZT;last_login_username=2531384397%40qq.com;PHPSESSID=rh5pcmqfsau43d7ej301t5dsk2;IMCDNS=0;Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1460028967,1460033503;Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1460035005;cvde=570657de0f967-42',
		'Host':'www.imooc.com',
		'Origin':'http://www.imooc.com',
		'Referer':'http://www.imooc.com/video/8837',
		'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.108 Safari/537.36',
		'X-Requested-With':'XMLHttpRequest'
	}
}
var req=http.request(option,function(res){
	console.log('status: '+res.statusCode);
	console.log('header: '+JSON.stringify(res.headers));
	res.on('data',function(chunk){
		console.log(Buffer.isBuffer(chunk));
		console.log(typeof chunk);
	})
	res.on('end',function(){
		console.log('评论完毕');
	})
});
 req.on('error',function(e){
 	console.log('Error:'+e.message);
 });
 req.write(postData);
 req.end();