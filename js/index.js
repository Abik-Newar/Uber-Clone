const CompanyDrop = document.getElementById('CompanyDrop');
const modalDrop = document.getElementById('modalDrop');
const dropChange = document.getElementById('dropChange');

CompanyDrop.onclick = function () {
    modalDrop.classList.toggle('showDrop');

    if (modalDrop.classList.contains('showDrop')) {
        dropChange.className = "fa fa-chevron-up";
    } else {
        dropChange.className = "fa fa-chevron-down";
    }
};


const productBtn =document.getElementById('productBtn');
const productDrop = document.getElementById('productDrop');


productBtn.onclick = function() {

    productDrop.classList.toggle('showDrop');

}


