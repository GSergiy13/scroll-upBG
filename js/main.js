$(function(){


	window.addEventListener("scroll", function(){
		let header = document.querySelector("header");
		header.classList.toggle("bg-menu", window.scrollY > 0);
	})

});