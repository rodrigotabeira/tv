let images = [
    'imagenes/imagen1.png',
    'imagenes/imagen33.png',
    'imagenes/imagen32.png',
    'imagenes/imagen31.png',
    'imagenes/imagen30.png',
    'imagenes/imagen29.png',
    'imagenes/imagen28.png',
    'imagenes/imagen27.png',
    'imagenes/imagen26.png',
    'imagenes/imagen25.png',
    'imagenes/imagen24.png',
    'imagenes/imagen23.png',
    'imagenes/imagen22.png',
    'imagenes/imagen20.png',
    'imagenes/imagen13.png',
    'imagenes/imagen11.png',
    'imagenes/imagen10.png',
    'imagenes/imagen8.png',
    'imagenes/imagen7.png',
    'imagenes/imagen5.png',
    'imagenes/imagen4.png'
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