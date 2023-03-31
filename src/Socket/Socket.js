import { io } from "socket.io-client";
import apiUrl from './../Service/env'

const socket = io.connect('http://13.234.43.25:3000');

export default socket;