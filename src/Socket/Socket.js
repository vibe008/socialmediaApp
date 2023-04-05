import { io } from "socket.io-client";


// const socket = io.connect('13.234.43.25/wsapi/?transport=polling',{transports:["polling","websocket"]});
// const socket = io.connect('http://192.168.1.12:3000');
const socket = io.connect('http://13.234.43.25:3000');
// console.log(socket,socket.connected)
socket.on("connect", () => {
    console.log("connected with",socket.id); // x8WIv7-mJelg7on_ALbx
  });

export default socket