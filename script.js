document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('document-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const documentType = document.getElementById('document-type').value;
        const documentNumber = document.getElementById('document-number').value;

        console.log('Tipo de documento:', documentType);
        console.log('Número de documento:', documentNumber);

    });
});