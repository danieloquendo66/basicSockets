require("dotenv").config();

const Server = require("./models/server");

const server = new Server();

server.execute();

// io.on("connection", (socket) => {
//   console.log("Un usuario se ha conectado");

//   socket.emit("mensaje-vienvenida", {
//     id: socket.id,
//     message: "Bienvenido al chat",
//   });

//   socket.on("mensaje-cliente", (data) => {
//     console.log(data);
//     io.emit("mensaje-servidor", data);
//   });

//   socket.on("mensaje-to-server", (data) => {
//     console.log(data);
//     socket.broadcast.emit("mensaje-from-server", data);
//   });
// });
