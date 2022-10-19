

let http = require('http');

let handleRequest = (request, response) => {
    response.writeHead(200, {
                            'Content-Type': 'text/plain'
                            });

    response.write('Hi There!');

    var pg = require('pg');
    var conString = "postgres://postgres:mauricio@localhost:5432";

    var client = new pg.Client(conString);
    client.connect();
    client.query('SELECT * FROM loto').then(res => {

            const data = res.rows;

            console.log('all data');
            data.forEach(row => {
                        response.write(toString(row));
                        console.log(`Id: ${row.cid} Name: ${row.cnumbers} `);
                        })

            

    }).finally(() => {
            
            client.end()
            //return data;
    });

    
    response.end();
};

http.createServer(handleRequest).listen(8080);
