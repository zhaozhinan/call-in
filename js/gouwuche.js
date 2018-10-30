$(function(){
// 加减js
$('.number .add').click(function(){
		var num = $(this).siblings('.num1').val();
		// alert(num)
		num++;
		$(this).siblings('.num1').attr('value',num);
	});
	$('.number .del').click(function(){
		var num = $(this).siblings('.num1').val();
		num--;
		if( num <=0 ){
			num = 0;
			$(this).siblings('.num1').attr('value',num);
		}else{
			$(this).siblings('.num1').attr('value',num);
		}
	});

	// 浮框
	$('.cur-price').mousemove(function(){
		$(this).siblings('.price-fukuang').stop().fadeIn();
	}).mouseout(function(){
		$(this).siblings('.price-fukuang').stop().fadeOut();
	});

	// 删除订单
	$(document).on("click",'.dingdan_del',function(){
		var _this = $(this);
		var dingdan_this=$(this).parent().parent().parent();
		var dingdan_1=$(this).parent().parent().parent().parent();
		var dingdan=dingdan_1.parent();
		$('.my-loyer, .my-window-confirm-deletion').show();
		// 确认删除
		$(document).on('click', '.my-window-submit', function(){
			$('.my-loyer, .my-window').hide();
			// 删除当前订单
			dingdan_this.slideUp(300, function(){
				dingdan_this.remove();
			});
			var dingdan_num=dingdan.children('.table-box').children('.tabel-order').length;
			if(dingdan_num==1){
				// 删除当前订单所属的模块
				dingdan.slideUp(300, function(){
					dingdan.remove();
				});
			}
			giftInfo()
		})
		// 取消删除
		$(document).on('click', '.my-window-cancel', function(){
			$('.my-loyer, .my-window').hide();
		});

		// 查找全部
		var aLabel_doc=$('.CheckBox-child-element.LabelSelected');
		var aInput_doc=$(document).find("input[name='is_check']");
		var num_label=aLabel_doc.length;
		var num_input=aInput_doc.length;
		if( num_label==num_input ){
			$('.CheckBox-quanxuan').addClass('LabelSelected');
		}
		else {
			$('.CheckBox-quanxuan').removeClass('LabelSelected');
		}
	});

//全选反选
	$(document).on("click",".CheckBox-quanxuan", function(){
		var quanxuan_table = $(this).parent().parent().parent().parent('.tabel-order');
		if($(this).hasClass("LabelSelected")){
			$(this).parent().find(".CheckBoxLabelClass").removeClass("LabelSelected");
			$(this).siblings('input').attr('checked',false);
			$(this).parents('.tabel-order').css('background','');
			quanxuan_table.parent().parent().find(".CheckBoxLabelClass").removeClass("LabelSelected");
			quanxuan_table.parent().parent().find(".CheckBoxLabelClass").siblings('input').attr('checked',false);
			quanxuan_table.parent().parent().find(".CheckBoxLabelClass").parents('.tabel-order').css('background','');
			quanxuan_table.parent().parent().find(".tabel-order-gift").css('background','');
			$(document).find('.CheckBox-quanxuan').parents('.tabel-order').css('background','');
		}else{
			$(this).parent().find(".CheckBoxLabelClass").addClass("LabelSelected");
			$(this).siblings('input').attr('checked',true);
			quanxuan_table.parent().parent().find(".CheckBoxLabelClass").addClass("LabelSelected");
			quanxuan_table.parent().parent().find(".CheckBoxLabelClass").siblings('input').attr('checked',true);
			quanxuan_table.parent().parent().find(".CheckBoxLabelClass").parents('.tabel-order').css('background','#fff3eb');
			quanxuan_table.parent().parent().find(".tabel-order-gift").css('background','#fff3eb');
			$(document).find('.CheckBox-quanxuan').parents('.tabel-order').css('background','');
		}
		giftInfo()
	});

	$('.CheckBox-child-element').click(function(){
		$(this).toggleClass('LabelSelected');
		if( $(this).hasClass('LabelSelected') ){
			$(this).siblings('input').attr('checked',true);
			$(this).parents('.tabel-order').css('background','#fff3eb');
			$(this).parents('.tabel-order').siblings('.tabel-order-gift').css('background','#fff3eb');
		}else {
			$(this).siblings('input').attr('checked',false);
			$(this).parents('.tabel-order').css('background','');
			$(this).parents('.tabel-order').siblings('.tabel-order-gift').css('background','');
		}
		// 查找全部
		var aLabel_doc=$('.CheckBox-child-element.LabelSelected');
		var aInput_doc=$(document).find("input[name='is_check']");
		var num_label=aLabel_doc.length;
		var num_input=aInput_doc.length;
		if( num_label==num_input ){
			$('.CheckBox-quanxuan').addClass('LabelSelected');
		}
		else {
			$('.CheckBox-quanxuan').removeClass('LabelSelected');
		}
		giftInfo();
	});

	// 遍历初始化页面 input 是否选中
	$('.CheckBox-child-element').each(function(){
		var aLabel_doc=$('.CheckBox-child-element.LabelSelected');
		var aInput_doc=$(document).find("input[name='is_check']");
		var num_label=aLabel_doc.length;
		var num_input=aInput_doc.length;
		if ($(this).hasClass('LabelSelected')) {
			$(this).siblings('input').attr('checked',true);
			$(this).parents('.tabel-order').css('background','#fff3eb');
			$(this).parents('.tabel-order').siblings('.tabel-order-gift').css('background','#fff3eb');
		}else {
			$(this).siblings('input').attr('checked',false);
			$(this).parents('.tabel-order').css('background','');
			$(this).parents('.tabel-order').siblings('.tabel-order-gift').css('background','');
		}
		if( num_label==num_input ){
			$('.CheckBox-quanxuan').addClass('LabelSelected');
			$('.CheckBox-quanxuan').siblings('input').attr('checked',true);
		}
		else {
			$('.CheckBox-quanxuan').removeClass('LabelSelected');
			$('.CheckBox-quanxuan').siblings('input').attr('checked',true);
		}
		giftInfo();
	});

	// 是否显示  赠品信息
	function giftInfo(){
		$('.CheckBox-child-element').each(function(){
			var aLabel_doc=$('.CheckBox-child-element.LabelSelected');
			if (aLabel_doc.length > 0) {
				$('.tabel-order-gift-box').css('display','block');
				$('.tabel-order-gift-box').children('.tabel-order-gift').css('background','#fff3eb');
			} else {
				$('.tabel-order-gift-box').css('display','none');
				$('.tabel-order-gift-box').children('.tabel-order-gift').css('background','');
			}
		})
	}

// 弹窗关闭
$(document).on('click', '.my-loyer, .my-window-close', function(){
	$('.my-loyer, .my-window').fadeOut(200);
})

$(document).find('.piao-xinxi-description-box').each(function(e){
	var tex = '';
	var text = $(this).find('.piao-xinxi-description').text();
	var text_leng = text.length;
	console.log(text_leng, 'text_leng');
	if(text_leng >= 44) {
			console.log(123);
			tex = text.substring(0, 44) + "…";
			$(this).find('.piao-xinxi-description').text(tex);
			$(this).find('.piao-xinxi-description-box-info').show();
	} else {
		console.log(456);
		$(this).find('.piao-xinxi-description-box-info').hide();
	}
})
$('.piao-xinxi-description-box-info').mouseenter(function(){
	$(this).parent('.piao-xinxi-description-box').find('.piao-xinxi-description-box-fukuang').show();
})
$('.piao-xinxi-description-box').mouseleave(function(){
	$(this).find('.piao-xinxi-description-box-fukuang').hide();
});

// 是否参与促销
$(document).on('click', '.CheckBox-promotion', function(){
	$(this).toggleClass('LabelSelected');
	if( $(this).hasClass('LabelSelected') ){
		$(this).siblings('input').attr('checked',true);
	}else {
		$(this).siblings('input').attr('checked',false);
	}
});

// loading  刷新
function loading(){
	var h_win = $(window).height(),
	h_header = $("header").outerHeight(),
	h_footer = $("footer").outerHeight();
	h_main = h_win - h_header - h_footer - 40;
	$(".loading").css({"height":h_win,"line-height":h_win+"px"});
};
function shuaxin(){
	loading();
	$('.loading').show();
	//数据加载完之后需执行的部分
	setTimeout(function() {
		$('.loading').hide();
	}, 3000);
};
shuaxin();
});
