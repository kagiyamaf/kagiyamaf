/// <reference path="typings/jquery/jquery.d.ts"/> // allows it to become jquery

$(".people .toggle").click(function() {
	var $this = $(this); /* adding $ what is this? */
	
	$this.parents("li").toggleClass("expanded"); // li gets expanded and people gets solo
	$this.parents(".people").toggleClass("solo"); // when it's one person

});