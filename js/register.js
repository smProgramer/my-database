$(function(){	
	$('#email').focus(function(){
		if($('#email').val()==''){
			$('#email_prompt').html('请输入正确的邮箱地址')
			;
        	$('#email_prompt').addClass('register_prompt');
		}				            
        $('#email').addClass('register_input_Focus')     
	}).blur(function(){
	var str=$('#email').val();
	var ret = /^\w+@(qq|163)\.com$/;
	$('#email').addClass('register_input_Blur')		
      if(ret.test(str)){
        $('#email_prompt').attr({'class':'register_prompt_ok'}).html('');
      }else{
        $('#email_prompt').html('请输入正确的邮箱地址');
        $('#email_prompt').attr({'class':'register_prompt_error'})
      }
	})


	$('#nickName').focus(function(){
		if($('#nickName').val()==''){
			$('#nickName_prompt').addClass('register_prompt');
			$('#nickName_prompt').html('昵称可由大小写英文字母，数字组成，长度为4-20个字符');
		}		
		$('#nickName').addClass('register_input_Focus')	
	}).blur(function(){
	var str=$('#nickName').val();
	var ret = /^[a-zA-Z0-9]{4,20}$/;
	$('#nickName').addClass('register_input_Blur')		
      if(ret.test(str)){
        $('#nickName_prompt').attr({'class':'register_prompt_ok'}).html('');
      }else{
        $('#nickName_prompt').html('请输入正确的昵称，昵称可由大小写英文字母，数字组成，长度为4-20个字符');
        $('#nickName_prompt').attr({'class':'register_prompt_error'})
      }
	})


	$('#pwd').focus(function(){
		if($('#pwd').val()==''){
			$('#pwd_prompt').html('请输入密码，越复杂，安全系数越高，密码由字母，数字，或者下划线组成')
			;
        	$('#pwd_prompt').addClass('register_prompt');
		}				            
        $('#pwd').addClass('register_input_Focus')     
	}).blur(function(){
	var str=$('#pwd').val();
	var ret = /^\w{6,16}$/;
	$('#pwd').addClass('register_input_Blur')		
      if(ret.test(str)){
        $('#pwd_prompt').attr({'class':'register_prompt_ok'}).html('');
      }else{
        $('#pwd_prompt').html('请输入正确密码');
        $('#pwd_prompt').attr({'class':'register_prompt_error'})
      }
	})


	$('#repwd').focus(function(){
		if($('#repwd').val()==''){
			$('#repwd_prompt').html('请再次输入密码')
			;
        	$('#repwd_prompt').addClass('register_prompt');
		}				            
        $('#repwd').addClass('register_input_Focus')     
	}).blur(function(){
	var str=$('#repwd').val();
	var str1=$('#pwd').val();
	$('#repwd').addClass('register_input_Blur')		
      if(str==str1){
        $('#repwd_prompt').attr({'class':'register_prompt_ok'}).html('');
      }else{
        $('#repwd_prompt').html('请输入相同的密码');
        $('#repwd_prompt').attr({'class':'register_prompt_error'})
      }
	})

	$('#province option').eq(0).attr({'disabled':'true'})
	$('#city option').eq(0).attr({'disabled':'true'});
	var arr=['浙江','北京','江西'];
	for(var i=0;i<arr.length;i++){
		$('#province').append('<option>'+arr[i]+'</option>');
	}

	// var arr1=['上饶','鹰潭','南昌','九江']
	// for(var i=0;i<arr1.length;i++){
	// 	$('#city').append('<option class="jx" style="display:none;">'+arr1[i]+'</option>');
	// }
	var arr2=['金华','永康','婺源'];
		$('#city').append('<option class="bj" style="display:none;">北京</option>');
	for(var i=0;i<arr2.length;i++){
		$('#city').append('<option class="zj" style="display:none;">'+arr2[i]+'</option>');
	}

	if($('#province:contains("上饶")').attr({'checked':'true'})){
		$('.jx').show();
		$('.jx').eq(0).attr({'checked':'true'})
	}else if($('#province:contains("浙江")').attr({'checked':'true'})){
		$('.zj').show();
	}else{
		$('.bj').show();
	}

	



















})