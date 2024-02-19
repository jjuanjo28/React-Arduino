import React, { useState, useEffect } from 'react';
import {socket}  from './socket.js';

export default function Arduino() {
    const [connected, setConnected] = useState(false);
    const [temperature, setTemperature] = useState('');
    const [humidity, setHumidity] = useState('');
    // console.log(socket)
    socket.on("temp", function (data) {
      setTemperature(data)
     // console.log(data)
      // let temp = document.getElementById("temperature")
      // let humidity = document.getElementById("humidity") 
    
      // if(data.length == 19){
      //   temp.innerHTML = data + " C°"
      // } else {
      //   humidity.innerHTML = data + "%"
      // }
    })
  return (
    <div>
      <h1> soy arduino </h1>
    </div>
  )
}
