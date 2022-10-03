$(document).ready(() => {
    $("td").click(function (event) {
        alert("kolom berisi " + $(this).html() + " !");
    });
    $("th").click(function (event) {
        alert("kolom berisi " + $(this).html() +" !");
    });
});
