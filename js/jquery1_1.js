$(function(){

	//先全部隐藏，动态slideUp
	//在把点击某个模块下的模块显示出来
	//考虑点击第一个模块时，其他两个模块隐藏
		$('.baseUI>li>ul').slideUp(1000);
			// 通过高度变化（向下增大）来动态地隐藏所有匹配的元素，在显示完成后可选地触发一个回调函数。
			$(".baseUI>li>a").off("click");

		$(".baseUI>li>a").bind("click",function(){
		$('.baseUI>li>ul').slideUp(1000);
		//可以先清除样式
		$(this).next().slideDown(1000);
			// $(this).children("ul").slideDown(1000, function() {
			// // 通过高度变化（向下增大）来动态地显示所有匹配的元素，在显示完成后可选地触发一个回调函数。

	
			// });


			
		});
		});
//模拟点击
$('.baseUI>li>a').eq(0).trigger("click")

$(".baseUI>li>ul").off("click");
	$('.baseUI>li>ul>li').on("click",function(){
			// $('.baseUI>li>ul>li').removeClass("current");
			// $(this).addClass("current")
			$('.baseUI>li>ul>li').removeAttr("class");
			$(this).attr("class","current");
			
		})









/*$(function(){
	$(".baseUI>li>ul").hide(1000);
	$(".baseUI>li>a").click(function() {
		if($(this).childer("ul").di)
		$(this).children('ul').show(1000);
	});
})*/




