$(document).ready(function(){
	$('#fakebutton').on('click',function(){
		$('#realbutton').click();
	});

	$('#fakebutton2').on('click',function(){
		$('#realbutton2').click();
	});
});