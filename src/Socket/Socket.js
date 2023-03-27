import { io } from "socket.io-client";
import apiUrl from './../Service/env'

const socket = io.connect(apiUrl.slice(0,23));
export default socket;