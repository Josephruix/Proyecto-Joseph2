import { addEventListener } from "events";
import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "proyecto",
});
/*
addEventListener("DOMContentLoaded", function () {
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    let $CORREO = document.getElementById("Correo").value;
    let $NOMBRE = document.getElementById("Nombre").value;
    let $CONTRASEÑA = document.getElementById("Contraseña").value;
    let $ROL = document.getElementById("Rol").value;

    connection.query(
      `INSERT INTO usuarios (Nombre,Correo,Contraseña,Rol) VALUES (${$NOMBRE},${$CORREO},${$CONTRASEÑA},${$ROL})`,
      function (error, results, fields) {
        if (error) throw error;

        // Imprime los nombres de los campos
        console.log("Los campos de la tabla son:");
        for (let i = 0; i < fields.length; i++) {
          console.log(fields[i].name);
        }

        // Imprime los resultados en la consola
        console.log("Los resultados de la consulta son: ", results);
      }
    );

    
  });
});
// Cierra la conexión
connection.end();
*/

connection.query('SELECT * FROM usuarios', function (error, results, fields) {
    if (error) throw error;
    
    // Imprime los nombres de los campos
    console.log('Los campos de la tabla son:');
    for (let i = 0; i < fields.length; i++) {
      console.log(fields[i].name);
    }
    
    // Imprime los resultados en la consola
    console.log('Los resultados de la consulta son: ', results);
  });
  
  // Cierra la conexión
  connection.end();

