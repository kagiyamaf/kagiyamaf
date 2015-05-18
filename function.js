/// <reference path="typings/jquery/jquery.d.ts"/> // allows it to become jquery

$(".people .toggle").click(function() {
	var $this = $(this); /* adding $ what is this? */
	
	$this.parents("li").toggleClass("expanded");
	$this.parents(".people").toggleClass("solo");

});