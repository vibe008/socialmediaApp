import { io } from "socket.io-client";


const socket = io.connect('http://13.234.43.25:3000');

export default socket;