import { useState } from 'react'
import './App.css';

function App() {
  const [message, setMessage] = useState("")
  const [response, setResponse] = useState("")


  async function sendMessage(){
  const result = await fetch('http://127.0.0.1:8000/chat',{
    method: 'POST', 
    headers: { 'Content-Type': 'application/json' }, 
    body: JSON.stringify({userMessage: message})
   }

  )

  const data = await result.json()
  setResponse(data)
  setMessage("")
  }
  return (
    <div>
      <h1>
         MealPlan ChatBot!
      </h1>

      <input value = {message} 
      onChange={(e) => setMessage(e.target.value)} 
      placeHolder = "Type your message here"
      
      />
      <button onClick={sendMessage}>Send</button>

      <p>{response}</p>
    </div>
  );
}

export default App;
