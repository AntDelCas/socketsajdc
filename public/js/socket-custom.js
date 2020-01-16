var socket = io();

//escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//escuchar
socket.on('disconnect', function() {
    console.log('Conexión perdida');
});



//Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Antonio',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server', resp);
});


//Recibir mensajes
socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});