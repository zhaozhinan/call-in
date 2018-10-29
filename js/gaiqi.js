// 	确认日期
function confirmTime(){
	if ($(this).val()) {
		$(this).parent().find('.bea-sele').show();
	}
}
// 清空日期
function emptyTime(){
	$(this).val('');
	$(this).parent().find('.bea-sele').show();
	$(this).parent().find('.bea-sele').hide();
	$(this).parent().find('.on-sele').text('请选择马戏场次');
	$(this).parent().find('.bea-opt li').removeClass('on');
}


// 修改改期时间
$(document).on('click', '.CheckBoxLabelClass', function(){
	if ($(this).hasClass('LabelSelected')){
		$(this).parents('.rescheduled-box').find('.table-selected').css('display','none');
		$(this).parents('.rescheduled-box').find('.rescheduled-time').addClass('inp-disabled').val('');
		$(this).parents('.rescheduled-box').find('.rescheduled-time').attr('disabled', true);
		$(this).parents('.rescheduled-box').find('.bea-sele').hide();
		$(this).parents('.rescheduled-box').find('.on-sele').text('请选择马戏场次');
		$(this).parents('.rescheduled-box').find('.bea-opt li').removeClass('on');
	} else {
		$(this).parents('.rescheduled-box').find('.table-selected').css('display','block');
		$(this).parents('.rescheduled-box').find('.rescheduled-time').removeClass('inp-disabled');
		$(this).parents('.rescheduled-box').find('.rescheduled-time').attr('disabled', false);
	}
})

// 修改入住日期
$(document).on('click', '.CheckBoxLabelClass', function(){
	if ($(this).hasClass('LabelSelected')){
		$(this).parents('.rescheduled-box').find('.table-selected').css('display','none');
		$(this).parents('.rescheduled-box').find('.check-in-date').addClass('inp-disabled').val('');
		$(this).parents('.rescheduled-box').find('.check-in-date').attr('disabled', true);
	} else {
		$(this).parents('.rescheduled-box').find('.table-selected').css('display','block');
		$(this).parents('.rescheduled-box').find('.check-in-date').removeClass('inp-disabled');
		$(this).parents('.rescheduled-box').find('.check-in-date').attr('disabled', false);
	}
})

// 退款原因
$(".bea-opt").find("li").on("click",  function(event){
	if ($(this).text() === '其他（需写明具体原因）') {
		$(this).parents('.bea-sele').siblings('.grzx-after-sale-description').show();
	} else {
		$(this).parents('.bea-sele').siblings('.grzx-after-sale-description').hide();
	}
});

// 改期须知
$(document).on('click', '.js-rescheduled', function(){
	$(document).find('.my-loyer, .rescheduled-notice').fadeIn();
})

// 改期
$('.btn-submit').on('click', function(){
	$('.my-loyer, .secondary-confirmation').fadeIn(200);
	$('.my-window-submit').on('click', function(){
		$('.secondary-confirmation').fadeOut(200, function(){
			// 判断 改期是否成功
			if (1 > 0) {
				$('.secondary-confirmation-submit').fadeIn(200);
			} else {
				$('.secondary-confirmation-failure').fadeIn(200);
				$('.my-window-reture-choose').on('click', function(){
					$('.my-loyer, .my-window').fadeOut(200);
				});
			}
		})
	})
	$('.my-window-cancel').on('click', function(){
		$('.my-loyer, .my-window').fadeOut(200);
	})
})
