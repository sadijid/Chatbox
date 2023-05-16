import React,{useState} from 'react'
import axios from 'axios'

const LoginForm = () => {
    const [username,setUsername] =useState('');
    const [password,setPassword] =useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();

    const authObject = { "Project-ID": "21794cb8-bb86-46bc-a23c-9c1f1df6bd9b","User-Name":username ,"User-Secret":password };
           try{
               await axios.get("https://api.chatengine.io/chats",{headers:authObject });

                localStorage.setItem('username',username);
                localStorage.setItem('password',password);

                window.location.reload();
           }
           catch(error){
             alert("error");
           }
    }
  return (
    <div className='wrapper'>
        <div className='form'>
            <h1>Chat Application</h1>
            <form onSubmit={handleSubmit}>
             <input style={{width:"400px",height:"500px"}} type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' required></input>
               <input  type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required></input>
                <div align ='center'>
                    <button type='submit' className='button'>
                        <span> START CHATTING</span>
                    </button>
                </div>

            </form>
        </div>
      
    </div>
  )
}

export default LoginForm
