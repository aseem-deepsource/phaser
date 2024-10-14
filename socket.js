import { Server } from "socket.io";

function test() {
  const server = new Server();
  server.on("connection", () => {
    console.log("connected");
  });
}

test();
