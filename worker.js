var socket = new WebSocket("ws://localhost:9999");

socket.addEventListener('message', function(event) {
    self.postMessage(event.data);
});

socket.onerror = function() {
    throw new Error('Соединение закрыто или не может быть открыто');
};

self.addEventListener('message', function(e) {
    socket.send(e.data);
});
