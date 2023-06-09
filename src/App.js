import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ChatPage from './components/ChatPage';
import {io} from 'socket.io-client';
import { useEffect } from 'react';

const socket = io('https://rightful-stomach-production.up.railway.app/');
//http://localhost:4000 use this for local development

function App() {
  useEffect(()=>{
    socket.on('connect',()=>{
      console.log("Connected to backend");
    })
  },[]);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home socket={socket} />}></Route>
          <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;