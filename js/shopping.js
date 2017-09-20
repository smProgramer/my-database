$(function(){
	var flag=1;
$('.shopping_commend_right').click(function(){
		if(flag==1){
		$('#shopping_commend_sort').hide();
		$('.shopping_commend_right img').attr('src','images/shopping_arrow_down.gif');
		flag=0;
	}else{
		$('#shopping_commend_sort').show();
		$('.shopping_commend_right img').attr('src','images/shopping_arrow_up.gif');
		flag=1;
	}	
})

$('.shopping_product_list_6 a').click(function(){
	var index=$('.shopping_product_list_6 a').index();
	$('.shopping_product_list').eq(index).remove();
});


$('.shopping_product_list').click(function(){
	$(this).css('background','#bbb');	
})


$('.shopping_list_end div a').click(function(){
	$('.shopping_product_list').remove();
	$('#myTableProduct').html('购物车空空如也!').css({"font-size":'20px','text-align':'center','line-height':'250px'});
})




$('.shopping_product_list_5 input').change(function(){
		var sum1=0;
		var sum2=0;
		$('.shopping_product_list').each(function(){
			var amount=parseInt($(this).find('input').attr('value'));
			var list_2=parseInt($(this).find('.shopping_product_list_2 label').html());
			var list_3=parseInt($(this).find('.shopping_product_list_3 label').html());
			var list_4=parseInt($(this).find('.shopping_product_list_4 label').html());
			sum1+=amount*list_2;
			sum2+=amount*(list_3-list_4);
			alert(amount);
		});
		$('.shopping_list_end_4 #p1').html(sum2);
		$('.shopping_list_end_4 #p2').html(sum1);
	})

	

	















})