let images = [
    'imagenes/imagen43.png',
    'imagenes/imagen1.png',
    'imagenes/imagen2.png',
    'imagenes/imagen3.png',
    'imagenes/imagen4.png',
    'imagenes/imagen5.png',
    'imagenes/imagen6.png',
    'imagenes/imagen7.png',
    'imagenes/imagen8.png',
    'imagenes/imagen9.png',
    'imagenes/imagen10.png',
    'imagenes/imagen11.png',
    'imagenes/imagen12.png',
    'imagenes/imagen13.png',
    'imagenes/imagen14.png',
    'imagenes/imagen15.png',
    'imagenes/imagen16.png',
    'imagenes/imagen17.png',
    'imagenes/imagen18.png',
    'imagenes/imagen19.png',  
    'imagenes/imagen20.png',
    'imagenes/imagen21.png',
    'imagenes/imagen22.png',
    'imagenes/imagen23.png',
    'imagenes/imagen24.png',
    'imagenes/imagen25.png',
    'imagenes/imagen26.png',
    'imagenes/imagen27.png',
    'imagenes/imagen28.png',
    'imagenes/imagen29.png',
    'imagenes/imagen30.png',
];

let currentIndex = 0;

function showImage(index) {
    let imgElement = document.getElementById('currentImage');
    imgElement.src = images[index];
}

// Cambiar la imagen automáticamente cada 10 segundos (10000 ms)
setInterval(function() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}, 10000);