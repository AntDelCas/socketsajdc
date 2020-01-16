const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario conectado');

    // Enviar
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a la aplicación'

    });


    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.emit('enviarMensaje', data);
        client.broadcast.emit('enviarMensaje', data);

        /* client.emit('enviarMensaje', {
            usuario: data.usuario,
            mensaje: data.mensaje
        }); */


        /* if (mensaje.usuario) {
            callback({
                resp: 'Todo salió bien'
            });
        } else {
            callback({
                resp: 'Todo salió mal !!!!'
            });
        } */

    });


});