var selMenu = 0;

function cargarMenu(menu)
{
    if (menu != selMenu)
    {
        $('.menuitem').attr('class', 'menuitem');
        $('#menuitem' + menu).attr('class', 'menuitem active');
        selMenu = menu;
        if (menu == 1)
            $('#contenido').load('ajax/inicio.html');
        else if (menu == 2)
            $('#contenido').load('ajax/datos.html');
        else if (menu == 3)
        {
            $('#contenido').load('ajax/viaje.html', {}, function(datos)
            {
                $('#dias').accordion({header: 'h3', heightStyle: 'content' });        
            });
        }
    }
}

$(document).ready(function()
{
    cargarMenu(1);

    $('.menuitem').click(function()
    {
        var num = $(this).attr('id').substring(8, 9);
        cargarMenu(num);
    });

});
