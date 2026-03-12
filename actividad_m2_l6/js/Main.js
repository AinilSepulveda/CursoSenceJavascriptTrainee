$(document).ready(function() {
    // Cambiar el color de texto de los elementos de la lista
    $('#miLista li').css('color', '#007bff');
    
    // Agregar dinámicamente un cuarto elemento
    $('#miLista').append('<li>Elemento 4 Agregado con jQuery</li>');
    
    // Aplicar el mismo color al nuevo elemento
    $('#miLista li:last').css('color', '#007bff');
    
    // Variable para controlar el estado de la lista
    let listaVisible = true;
    
    // Evento del botón toggle
    $('#toggleBtn').click(function() {
        if (listaVisible) {
            // Ocultar la lista
            $('#miLista').hide();
            $(this).text('Mostrar lista');
            listaVisible = false;
        } else {
            // Mostrar la lista
            $('#miLista').show();
            $(this).text('Ocultar lista');
            listaVisible = true;
        }
    });
    
    // Evento del botón cambiar elementos
    $('#changeBtn').click(function() {
        $('#miLista li').each(function(index) {
            $(this).text('Elemento cambiado ' + (index + 1));
            $(this).css('color', '#28a745');
        });
    });
    
    // Evento del botón agregar elemento
    $('#addBtn').click(function() {
        $('#miLista').append('<li>Elemento creado por jquery a través de botón</li>');
        $('#miLista li:last').css('color', '#007bff');
    });
});

