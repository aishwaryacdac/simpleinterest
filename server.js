var http = require('http');
var url = require('url');
var mymodule = require('./add');
var server = http.createServer(function(req,resp)
{
	if(req.url=="/")
	{
	require('fs').readFile("formm.html",function(err,data)
		{
		resp.writeHead(200,{'Content-type':'text/html'});
		resp.write(data);
		resp.end();
		});
    }
		else
		{
		var query=url.parse(req.url,true).query;
		var n1=parseInt(query.num1);
		var n2=parseInt(query.num2);
		var n3=parseInt(query.num3);
		var add= mymodule.add(n1,n2,n3);
		resp.end(" "+add);
		}

});
server.listen(3100);
console.log("server started succesfully");
