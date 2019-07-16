$(document).ready(function() {
    $('#submit').on('click', function() {
        var st = '';
        $('#kborderinfo input[type=text],input[type=text],input[type=email],input[type=number],select,select').each(function() {
            st = st + '<td>' + $(this).val() + '</td>';
            $(this).val('');
        });
        $('#details').append('<tr>' + st + '</tr>');
        return false;
    });
});