const ws = new require('ws');
const wss = new ws.Server({noServer: true});

const clients = new Set();

http.createServer((req, res) => {
  // here we only handle websocket connections
  // in real project we'd have some other code here to handle non-websocket requests
  wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onSocketConnect);
});

function onSocketConnect(ws) {
  clients.add(ws);

  ws.on('message', function(message) {
    message = message.slice(0, 50); // max message length will be 50

    for(let client of clients) {
      client.send(message);
    }
  });

  ws.on('close', function() {
    clients.delete(ws);
  });
}

var wsPing=new webSocket.Server({port:8080})
wsPing.on('connection',(socket)=>{
socket.on('message',(message)=>{
console.log('received:',message)
setTimeout(()=>socket.send('ping'),1000)
})
socket.send('ping') //loop start
})

var wsPong=new webSocket('ws://localhost:8080')
wsPong.on('message',(message)=>{
console.log('received:',message)
setTimeout(()=>wsPong.send('pong'),1000)
})

