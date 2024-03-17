// script.js

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function openZoomModal(imageSrc) {
    // Verifique se não é um dispositivo móvel antes de abrir o modal de zoom
    if (!isMobile()) {
        var zoomModal = document.getElementById('zoomModal');
        var zoomImage = document.getElementById('zoomImage');
        zoomImage.src = imageSrc;
        zoomImage.style.width = '30%'
        zoomImage.style.height = '50%'
        zoomModal.style.display = 'block';
    }
}

function closeZoomModal() {
    var zoomModal = document.getElementById('zoomModal');
    zoomModal.style.display = 'none';
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeZoomModal();
    }
});
