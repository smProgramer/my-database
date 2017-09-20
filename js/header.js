$(function(){
	var $menu=$('#menu');
	$menu.mouseover(function(){
		var $menuDown=$('#dd_menu_top_down');
		$menuDown.css('display','block');
	});
	$menu.mouseout(function(){
		var $menuDown=$('#dd_menu_top_down');
		$menuDown.css('display','none');
	});
})