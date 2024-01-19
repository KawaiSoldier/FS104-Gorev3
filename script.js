
function imgModal(url) {
    const myModal = new bootstrap.Modal('#modal');
    const img = document.querySelector('#modal img');
    img.src = url;
    myModal.show();
}