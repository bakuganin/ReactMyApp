import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [time, setTime] = useState()

  const update = () => { 
    setInterval(() => {
      setTime(new Date().toLocaleString())
    }, 1000);
    
  }
  useEffect(() => {
   update()
  }, [time])

  return (
    <div>
    <h1>Hello, world!</h1>
    <h2>It is {time}.</h2>
  </div>
  );
}

export default App;
