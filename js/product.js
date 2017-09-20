$(function(){
$catList=$('#product_catList_class');
	var list=new Array(
        "中国当代小说（13880）","中国近现代小...（640）","中国古典小说（1547）",
        "四大名著（696）","港澳台小说（838）","外国小说（5119）",
        "侦探/悬疑/推...（2519）","惊悚/恐怖（798）","魔幻（369）","科幻 （513）",
        "武侠（574）","军事（726）","情感 （6700）",
        "社会（4855）","都市（949）","乡土（99）","职场（176）",
        "财经（292）","官场（438）","历史（1329）","影视小说（501）",
        "作品集（2019）","世界名著（3273）"
    );
	// var $ul='<ul id="ul"></ul>';
	// $catList.append($ul);
	for(var i=0;i<list.length;i++){
		// var index=list.indexOf();
		// alert(1)
		$('#product_catList_class').append('<li style="list-style:disc"><a href="">'+list[i]+'</a></li>');
	}




	// $(this).addClass('click').siblings().removeClass('click');
	// if($(this).index()==0){
		// catalog[0] = ['product_list_01.jpg','私募（首部披露资本博弈秘密的金融小说）',4,'郭现杰','花山文艺出版社', '2009年08月','数年前，在一次股市的多、空之战中，以赵云狄、林康为首的私募基金—金鼎投资，和以王雨龙为首的私募基金，达成锁仓协议分食利益。殊料，以王雨龙为首的私募基金—鑫利投资背信弃义，导致金鼎投资惨败。以至...','13.10','59折','￥18.90','￥32.00'];

		// catalog[1] = ['product_list_02.jpg','圈子圈套.1.战局篇',4,'王强','清华大学出版社', '2006年01月',
		//     '虽然没有硝烟，却比战场更血腥；虽然并未战死，却比死亡更痛苦。 洪钧从一个底层的销售人员，成为一家著名的跨国公司的中国区代理首席代表，在即将被扶正，事业情感都志得意满的时候，掉入俞威设计的圈套，...',
		//     '￥8.90','68折','￥19.10','￥28.00'];
	// 	for(var i=0;i<8;i++){
	// 		$('#storyBooksssss').append('<div></div>');
	// 		$('#storyBooksssss div').addClass('big_img_list');
	// 	}
	// }else{
	// 	$('#storyBooksssss').removeClass('big_img_list');
	// }
	// function productList() {
	//                 //创建图书分类数组
 //            var $list = new Array('中国当代小说(13880)', '中国近现代小...(640)', '中国古典小说(1547)', '四大名著(696)', '港澳台小说(838)', '外国小说(5119)', '侦探/悬疑/推...(2519)', '惊悚/恐怖(798)', '魔幻(369)', '科幻(513)', '武侠(574)', '军事(726)', '情感(6700)', '社会(4855)', '都市(949)', '乡土(99)', '职场(176)', '财经(292)', '官场(438)', '历史(1329)', '影视小说(501)', '作品集(2019)', '世界名著(3273)');
 //            var html = [];
 //            //each遍历$list数组
 //            $.each($list, function(i, e) {
 //                //push方法为数组添加元素<li><a href='#e'></a><>
 //                html.push("<li><a href='#'>" + e + "</a><>");
 //            })
 //            //定位到动态添加图书分类的div   join()方法 把数组中所有元素放入一个字符串
 //            $("#product_catList_class").html(html.join(""));
 //        };
 //        productList();

var $getBookList = $('#product_storyList_content').html();
	            //大图模式(从列表的DOM中获取信息)
        function getBigBookList() {
            var $listBookImg = $('#product_storyList_content .product_storyList_content_left');
            var $contents = "";
            $(".product_storyList_content_right").find("ul").each(function(i, e){
                var $content = ["<div class='big_img_list'><ul><li class='bookImg'>" + $listBookImg.eq(i).html() + "<>"];
                var $print = $(e).children("li").eq(6).find('span');
                $content.push("<li><dl><dd>" + $print.eq(1).text() + "</dd><dd  class='product_content_delete'>" + $print.eq(2).text() + "</dd><dd>" + $print.eq(0).text() + "</dd><><>")
                $content.push("<li class='detail'>" + $(e).children("li").eq(5).text() + "<>")
                $content.push("<li class='detail'>" + $(e).children("li").eq(2).text() + "<>")
                $content.push("<li class='detail'>" + $(e).children("li").eq(1).text() + "<>")
                $content.push("<li class='detail'>" + $(e).children("li").eq(3).text() + "<>")
                $content.push("<li class='detail'>" + $(e).children("li").eq(4).text() + "<></ul></div>")
                $contents += $content.join("");
            })
            return $contents;
        }
        var $bigBookList = getBigBookList();
        //单击列表模式和大图模式进行切换
        $('#product_array').children().click(function() {
            $(this).addClass("click").siblings().removeClass("click");
            //使用attr判断this是列表还是大图
            if($(this).attr("name") == "array") {
                $('#product_storyList_content').html($getBookList);
            } else if($(this).attr("name") == "bigImg") {
                $('#product_storyList_content').html($bigBookList);
                //鼠标悬浮到大图模式图片上的时候 显示隐藏的信息               
                $("#product_storyList_content").children().find("ul").hover(function() {
                    $(this).addClass("over");
                    $(this).parent().addClass("over");
                }, function() {
                    $(this).removeClass("over");
                    $(this).parent().removeClass("over");
                })
            }
        });
})