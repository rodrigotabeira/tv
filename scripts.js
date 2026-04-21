let images = [
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