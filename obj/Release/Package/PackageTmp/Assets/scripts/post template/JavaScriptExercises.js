$(document).ready(function () {
    $('#FactorialLink').click(function () {
        var url = $('#Factorial').data('url');
        $.get(url, function (data) {
            $('#Factorial').html(data);
            $('#Factorial').modal();
        });
    });
});

