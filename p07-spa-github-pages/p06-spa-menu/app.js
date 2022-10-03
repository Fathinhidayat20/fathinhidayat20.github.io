
$(document).ready(function() {
    $("nav ul li a").click(function(){
        $(".bagan").slideToggle("fast");

	$('nav ul li.paeh').each(function(index, el) {
		var akuID = el.id.split('_')[1];
		$('.bagan#' + akuID).hide();
	});
});

$('nav').delegate('.paeh', 'click', function(event) {
	var pilihIsi = this.id.split('_')[1];
	console.log(pilihIsi);
	document.location.hash = pilihIsi;

	$('.bagan:visible').fadeOut('fast', function() {
		$('.bagan#' + pilihIsi).fadeIn('fast');
	});

	var $this = $(this);
	$this.removeClass('paeh').addClass("nyala");
    $this.siblings().addClass('paeh').removeClass('hidup');

    });
});