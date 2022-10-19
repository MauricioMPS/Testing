const express = require('express')
//const pg = require('pg');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Express Server dataxbase!')

  var pg = require('pg');
  var conString = "postgres://postgres:mauricio@localhost:5432";
  //var sql = require("mssql");

  var client = new pg.Client(conString);

 
    client.connect();
    client.query('SELECT * FROM loto').then(dataset => {

            const data = dataset.rows;
          
            console.log('all data');
            data.forEach(row => {
                      //  res.send(toString(row));
                        console.log(`Id: ${row.cid} Name: ${row.cnumbers} `);
                        })

            

    }).finally(() => {
           
            client.end()
            //return data;
    });
 
  res.end();
})

app.listen(port, () => {
  console.log(`Express listening on port ${port}`)
})