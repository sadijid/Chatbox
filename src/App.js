import React from 'react'
import './App.css'
import {ChatEngine} from 'react-chat-engine';
import  ChatFeed  from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {
    if (!localStorage.getItem ('username')) return <LoginForm />
  return (

    <ChatEngine 
        height="100vh"
        projectID = "21794cb8-bb86-46bc-a23c-9c1f1df6bd9b"
        userName = {localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed ={(chatProps) => <ChatFeed {...chatProps} />}
   >
 </ChatEngine>
)}

export default App;
