var $j = jQuery.noConflict();

$j(function(){

    $j('#reply-title').click(function () {
		$j('#commentform').toggle(1000);
		$j('#reply-title').toggleClass('active');
	});
	$j('#comments-title').click(function() {
		$j('.commentlist').toggle(1000);
	});
	
	   

});