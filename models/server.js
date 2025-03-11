// Servidor de express
const express = require("express");
const http = require("http");
// Configuración sockets server
const socketio = require("socket.io");
const path = require("path");
const Sockets = require("./sockets");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // Http server
    this.server = http.createServer(this.app);

    //configuracion de sockets
    // Configuración sockets server
    this.io = socketio(this.server, {
      /**configuraciones */
    });
  }
  middlewares() {
    this.app.use(express.static(path.resolve(__dirname, "../public")));
  }

  // Configurar sockets
  cinfigurarSockets() {
    new Sockets(this.io);
  }

  execute() {
    // iniciar Middlewares
    this.middlewares();

    // Iniciar sockets
    this.cinfigurarSockets();

    // Iniciar el servidor
    this.server.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
