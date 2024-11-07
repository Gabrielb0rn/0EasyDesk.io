$(document).ready(function() {
    
    $('body').on('focus', '.Telefone', function() {
        var maskBehavior = function(val) {
            return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
        };
        var options = {
            onKeyPress: function(val, e, field, options) {
                field.mask(maskBehavior.apply({}, arguments), options);
                if (field[0].value.length >= 14) {
                    var val = field[0].value.replace(/\D/g, '');
                    if (/\d\d(\d)\1{7,8}/.test(val)) {
                        field[0].value = '';
                        alert('Telefone Inválido');
                    }
                }
            }
        };
        $(this).mask(maskBehavior, options);
    });

    $('.Telefone').each(function() {
        $(this).mask(function(val) {
            return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
        });
    });
});