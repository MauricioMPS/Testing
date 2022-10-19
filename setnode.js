var http = require('http');
var data =
http.createServer(function(req,res){
    res.write("NODE.js server created - test database ");


        var pg = require('pg');
        var conString = "postgres://postgres:mauricio@localhost:5432";

        var client = new pg.Client(conString);
         
        client.connect();
        client.query('SELECT * FROM loto').then(res => {

            
            data = res.rows;
            
            console.log('all data');
            data.forEach(row => {
                console.log(`Id: ${row.cid} Numbers: ${row.cnumbers} `);
            })
           
           

        }).finally(() => {
            
            client.end()
           
            //return `${data}`;
        });
    res.write(`${data.data}`)  ;
    res.end();
}).listen(8080); 



