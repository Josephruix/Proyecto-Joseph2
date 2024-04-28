import express from "express";
import path from "path";
import { fileURLToPath } from "url";


const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Crear una aplicación Express
const app = express();

// Configurar el puerto
const PORT = process.env.PORT || 4000;
app.set("port", PORT);

// Iniciar el servidor
app.listen(app.get("port"), () => {
    console.log("Servidor corriendo en el puerto", PORT);
});
//Configuracion
app.use(express.static(__dirname + "/public"))
// Rutas
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "paginas", "login.html"));
});

app.get("/registro", (req, res) => {
    res.sendFile(path.join(__dirname, "paginas", "registro.html"));
});




