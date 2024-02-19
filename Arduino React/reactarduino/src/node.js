import {SerialPort} from "serialport";

// Crea una instancia del objeto SerialPort y especifica el puerto y la velocidad de transmisión
const port = new SerialPort({
    path: "COM3",
    baudRate: 9600,
    dataBits:8,
    stopBits:1,
    parity: "none",
})

// Escucha los datos recibidos desde el puerto serial
port.on('data', (data) => {
  // Convierte los datos recibidos en una cadena de texto
  const message = data.toString('utf-8');
  console.log(`Mensaje recibido: ${message}`);
});