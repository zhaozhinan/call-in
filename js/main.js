/*
 *
 *
*/

;(function($){
	//左侧主导航下拉菜单功能插
	$.fn.LeftMenu = function(e){
		this.on(e, function(){
			var $this = $(this);
				$this.parent().find('li').removeClass('active');
				$this.addClass('active');
				$this.find('.menu').slideToggle();
				$this.find('.menu-arrow').toggleClass('menu-arrow-bottom');
		})
		$('.menu li').on('click',function(event){
			var $this = $(this);
				$('.menu li').removeClass('on');
				$this.addClass('on');
				event.stopPropagation();
		});
	}

	//美化多选按钮
	$.fn.checkBoxClass = function(){
		return this.on("click", function(){
			if($(this).is(":checked")){
				$(this).attr('checked', true);
				$(this).next("label").addClass("LabelSelected");
			}else{
				$(this).attr('checked', false);
				$(this).next("label").removeClass("LabelSelected");
			}
		});
	}

	//选项卡
	$.fn.tabs = function(e){
		return this.on(e,function(){
			var $this = $(this);
			$this.siblings().removeClass("active").end().addClass("active");
			var oIndex = $this.index(),
				$thisPar = $this.parent().parent();
			$thisPar.parent().find(".tab_cons:first() > .tab_con").eq(oIndex).siblings(".tab_con").hide();
			$thisPar.find(".tab_cons:first() > .tab_con").eq(oIndex).siblings(".tab_con").hide();
			$this.parent().find(".tab_cons:first() > .tab_con").eq(oIndex).fadeIn(200);
			$thisPar.find(".tab_cons:first() > .tab_con").eq(oIndex).fadeIn(200);
		});
	}

	//美化单选按钮
	$.fn.radioBoxClass = function(){
		return this.on("click", function(){
			if($(this).is(":checked")){
				var input_name = $(this).prop('name');
				$("input[name='"+input_name+"']").next(".RadioSelected:not(:checked)").removeClass("RadioSelected");
				$(this).next("label").addClass("RadioSelected");
			}
		});
	}

	//美化文件上传
	$("input[type=file]").on("click", function(){$(this).parents(".uploader").find(".filename").val($(this).val());});
		$("input[type=file]").each(function(){
		if($(this).val()==""){$(this).parents(".uploader").find(".filename").val("");}
	});

	//模拟下拉菜单
	$(document).on("click",".e-sele",function(event){
		if($(this).parents(".bea-sele").find(".bea-opt").css("display") === "none" || $(this).parents(".bea-sele").find(".chose-week").css("display") === "none" ){
			$(".bea-opt,.chose-week").slideUp();
			$(".on-sele,.bea-sele").css({"border-color":"#DCDCDC"});
			var $this = $(this);
			$this.siblings(".bea-opt").slideToggle();
			$this.siblings(".chose-week").slideToggle();
			$this.find(".on-sele").css({"border-right-color":"#0194FC","color":"#333"});
			$this.parent(".bea-sele").css({"border-color":"#0194FC"});
			event.stopPropagation();
			$(document).on("click",function(){
				$(".bea-opt,.chose-week").slideUp();
				$(".on-sele,.bea-sele").css({"border-color":"#DCDCDC"});
				$(".bea-sele").each(function() {
					var onTxt = $(this).find(".on-sele"),
					onLiTxt = $(this).find(".bea-opt").find(".on");
					if(onLiTxt.length>0){
						onTxt.css("color","#333");
					}else{
						onTxt.css("color","#999");
					}
				});
			});
			$(this).siblings(".bea-opt").find("li").on("click",  function(event){
				var $this = $(this);
				$this.parent().parent().find(".on-sele").html($this.text());
				if($this.hasClass("on") == true){
					return
				}else{
					//alert($this.index());
				}
				$this.parent().find("li").removeClass("on");
				$this.addClass("on");
				$this.parent().parent().css({"border-color":"#DCDCDC"}).find(".on-sele").css({"color":"#333","border-color":"#DCDCDC"});
				$(".bea-opt").slideUp();

				event.stopPropagation();
			});
		}else{
			return
		}
	});
	/*$(document).on("click",".e-sele",function(event){
		if($(this).next(".bea-opt, .chose-week").css("display") === "none"){
			$(".bea-opt,.chose-week").slideUp();
			$(".on-sele,.bea-sele").css({"border-color":"#DCDCDC"});
			var $this = $(this);
			$this.siblings(".bea-opt").slideToggle();
			$this.siblings(".chose-week").slideToggle();
			$this.find(".on-sele").css({"border-right-color":"#0194FC","color":"#333"});
			$this.parent(".bea-sele").css({"border-color":"#0194FC"});
			event.stopPropagation();
			$(document).on("click",function(){
				$(".bea-opt,.chose-week").slideUp();
				$(".on-sele,.bea-sele").css({"border-color":"#DCDCDC"});
			});
			$(this).siblings(".bea-opt").find("li").on("click",  function(event){
				var $this = $(this);
				$this.parent().parent().find(".on-sele").html($this.text());
				if($this.hasClass("on") == true){
					return
				}else{
					//alert($this.index());
				}
				$this.parent().find("li").removeClass("on");
				$this.addClass("on");
				$this.parent().parent().css({"border-color":"#DCDCDC"}).find(".on-sele").css({"color":"#333","border-color":"#DCDCDC"});
				$(".bea-opt").slideUp();

				event.stopPropagation();
			});
		}
	});*/
	/*i=0,i<=a.length,i++
	if((i+1)%3==0){
		a[i]=a[i]+"、";
	}*/
	var choseWeekTxt = $(".chose-week .on").text();
	var choseWeekTxt = choseWeekTxt.substring(0,choseWeekTxt.length-1);
	$(".js-week-on em").html(choseWeekTxt);
	$(document).on("click",".chose-week li",function(event){
		$(this).toggleClass("on");
		var choseWeekTxt = $(this).parent().find(".on").text();
		var choseWeekTxt = choseWeekTxt.substring(0,choseWeekTxt.length-1);
		$(this).parent().parent().siblings(".js-week-on").find("em").html("");
		$(this).parent().parent().siblings(".js-week-on").find("em").html(choseWeekTxt);
		if($(this).hasClass("js-all")){
			if($(this).parent().find(".js-all").hasClass("on")){
				$(this).nextAll("li").addClass("on");
			}else{
				$(this).nextAll("li").removeClass("on");
			}
		}else{
			return false;
		}
		event.stopPropagation();
	});

	//全选反选
	$(".CheckBox-all").on("click", function(){
		if($(this).hasClass("LabelSelected")){
			$(this).parent().find(".CheckBoxLabelClass").removeClass("LabelSelected");
			$(this).parent().parent('tr').nextAll('tr').find("td:eq(0) .CheckBoxLabelClass").removeClass("LabelSelected");
		}else{
			$(this).parent().find(".CheckBoxLabelClass").addClass("LabelSelected");
			$(this).parent().parent('tr').nextAll('tr').find("td:eq(0) .CheckBoxLabelClass").addClass("LabelSelected");
		}
	});

	//隐藏类弹出层

	$(document).on("click", ".icon-panel", function(){
		$(this).toggleClass("icon_toggle");
		$(this).parent(".panel-title").siblings(".panel-body").slideToggle();
	});

	//可关闭的信息浮框
	$.fn.Alert = function(){
		return this.on("click",function(){
			$(this).parent(".alert").fadeOut();
		})
	};

	//自定义弹窗
	$.fn.myWindow = function(closeDom){
		this.click(function(){
			$(".my-loyer, .my-window").fadeIn();
			//$("body").css("overflow-y","scroll");
		});
		if(closeDom){
			closeDom.on("click",function(){
				$(this).parent().parent().fadeOut();
				$(".my-loyer").fadeOut();
			//	$("body").css("overflow-y","scroll");
			});
		}
	};
	$(".my-loyer").on("click",function(){
		$(".my-loyer, .my-window").fadeOut();
	//	$("body").css("overflow-y","scroll");
	});
	$(".my-window .close").on("click", function(){
		$(this).parent().parent().fadeOut();
		$(".my-loyer").fadeOut();
	});
	//绑定点击页面全局的事件

	//设置按钮下的下拉菜单
	$(document).on("click", ".menu-set", function(e){
		$(this).parent().find(".bea-opt").slideToggle();
		e.stopPropagation();
	});
	$(document).on("click","body", function(){
		$(".bea-opt").slideUp();
	});

	//点击可编辑
	$.fn.canEdit = function($width){
		return this.on("click",function(){
			var editBox = $(this);
			if ((editBox.children("input").length > 0)) {
				return;
			}
			var input = $("<input class='input editInp' style='width:" + $width + "';height:26px" + " type='text'>");
			var text = editBox.html();
			editBox.html("");
			input.val(text).appendTo(editBox);
			input.trigger("focus").trigger("select");
			var argName = "";
			switch (editBox.index()) {
				case 0:
					argName = "musicName";
					break;
				case 1:
					argName = "singer";
					break;
				case 2:
					argName = "sort";
			}
			if ((editBox.children("input").length > 0)) {
				$(document).on("blur",".editInp",function(){
					var $val = $(this).val();
					if($val != ""){
						$(this).parent().text($val);
					}
				});
			}
		});

        input.keyup(function(event){
            var keycode = event.which;
            if (keycode == 27) {
                editBox.html(text);
            }
            if (keycode == 13) {
                var newValue = $(this).val();
                if (editBox.index() == 2) {
                    if (!isInteger(newValue)) {
                        alert("排序必须是整数");
                        $(this).val(text);
                        return false;
                    }
                }
                editBox.html(newValue);
            }
        });
    };

	$.fn.nextCanEdit = function($width){
		return this.on("click",function(){

			var editBox = $(this).prev(".can-edit");
			if (editBox.children("input").length > 0) {
				return;
			}
			var input = $("<input class='input editInp' style='width:" + $width + "';height:26px" + " type='text'>");
			var text = editBox.html();
			editBox.html("");
			input.val(text).appendTo(editBox);
			input.trigger("focus").trigger("select");
			var argName = "";
			switch (editBox.index()) {
				case 0:
					argName = "musicName";
					break;
				case 1:
					argName = "singer";
					break;
				case 2:
					argName = "sort";
			}
			/*if ((editBox.children("input").length > 0)) {
				$(document).on("blur",".editInp",function(){
					var $val = $(this).val();
					if($val != ""){
						$(this).parent().text($val);
						alert('保存成功')
					}
				});
			}*/
		});
        input.keyup(function(event){
            var keycode = event.which;
            if (keycode == 27) {
                editBox.html(text);
            }
            if (keycode == 13) {
                var newValue = $(this).val();
                if (editBox.index() == 2) {
                    if (!isInteger(newValue)) {
                        alert("排序必须是整数");
                        $(this).val(text);
                        return false;
                    }
                }
                editBox.html(newValue);
            }
        });
    };

	function isInteger(str){
	 //判断是否为整数
		var regu = /^[-]{0,1}[0-9]{1,}$/;
		return regu.test(str);
	}

	//表格内隐藏类展开收起
	$(".toggle-more").on("click",function(e){
		$(this).parent("td").parent("tr").next(".table-toggle").slideToggle();
		$(this).toggleClass("toggle-more-down");
		e.stopPropagation();
	});

	function res(){
		var h_init = $(window).height(),
		h_header = $("header").outerHeight(),
		h_crumbs = $(".crumbs").outerHeight(),
		h_nav = $(".mainNav").outerHeight(),
		h_notice = $(".notice").outerHeight()+5,
		h_footer = $("footer").outerHeight();
		h_main = h_init - h_header - h_crumbs - h_nav - h_footer/* - 50 - 50 - 79*/-35-h_notice;
		$(".container").css("min-height",h_main-12);
		$(".container-r").css("min-height", h_main - 60);
	}
	res();
	$(window).resize(res);

	//$("tr").on("mouseover",function(){$(this).css("background","#F9F9FB")}).on("mouseout",function(){$(this).css("background","")})



	$(".toggle-inst .icon-panel").on("click",function(){
		$(this).next(".inst-info").find("p").slideToggle();
	});

	$("#hideNav").on("click",function(e){
		$(this).find("menu").slideToggle();
		e.stopPropagation();
	}).find("a").on("click",function(e){
		e.stopPropagation();
	});
	$("html").on("click",function(){
		$(this).find("menu").slideUp();
	});


})(jQuery);

/**
 * 左侧主导航下拉菜单功能插件调用
 * @author chenjian
 * @date 20151106 add
 */
$(".leftMenu li").LeftMenu('click');

$(".cssoptgroup").off("click");
$(".cssoptgroup").on("click", function(e){
	return false;
	//$(this).removeClass("on");
	e.stopPropagation();
})

/* 分组 */
$(".opt-select-mode .bea-sele").on("click", function(e){
	$(this).parents(".opt-select-mode").find(".panel-mode").show();
	$(".opt-select-mode").find(".panel-mode").on("click",function(e){
		e.stopPropagation();
	});
	e.stopPropagation();
});
$("body").click(function(){
	$(".panel-mode").hide();
});
$(".list-grouping").on("click", "li", function(){
	var txt = $(this).text(),
		optMode = $(this).parents(".opt-select-mode");
	optMode.find(".list-grouping").find("li").removeClass("on");
	optMode.find(".on-sele").text(txt);
	$(this).addClass("on").parents(".opt-select-mode").find(".panel-mode").hide();
	$(this).parents(".opt-select-mode").attr("data-type",$.trim($(this).text()));
});
$(".panel-mode").find(".J-create").on("click",function(){
	var _this  = $(this),
		inpVal = _this.prev(".input").val(),
		inpVal = $.trim(inpVal),
		optMode= _this.parents(".opt-select-mode");
	if(inpVal != ""){
		var onTxt = $(this).text();
		optMode.find(".list-grouping").find("li").removeClass("on");
		_this.parents(".panel-mode").find(".list-grouping").find("ul").append('<li class="on">' + inpVal + '</li>');
		optMode.find(".on-sele").text(inpVal);
		optMode.find(".panel-mode").hide();
		$(this).parents(".opt-select-mode").attr("data-type",inpVal);
	}
});
$(".list-grouping").on("click","h3",function(){
	$(this).next("ul").slideToggle(200);
});

/* 公告组件 */
(function($){
	$.fn.extend({
		Scroll:function(opt,callback){
			//参数初始化
			if(!opt) var opt={};
			var _btnUp = $("#"+ opt.up);//Shawphy:向上按钮
			var _btnDown = $("#"+ opt.down);//Shawphy:向下按钮
			var timerID;
			var _this=this.eq(0).find("ul:first");
			var lineH=_this.find("li:first").height(), //获取行高
				line=opt.line?parseInt(opt.line,10):parseInt(this.height()/lineH,10),
				speed=opt.speed?parseInt(opt.speed,10):500; //卷动速度，数值越大，速度越慢（毫秒）
				timer=opt.timer //?parseInt(opt.timer,10):3000; //滚动的时间间隔（毫秒）
			if(line==0) line=1;
			var upHeight=0-line*lineH;
			//滚动函数
			var scrollUp=function(){
				_btnUp.unbind("click",scrollUp); //Shawphy:取消向上按钮的函数绑定
				_this.animate({
					marginTop:upHeight
				},speed,function(){
				for(i=1;i<=line;i++){
					_this.find("li:first").appendTo(_this);
				}
				_this.css({marginTop:0});
				_btnUp.bind("click",scrollUp); //Shawphy:绑定向上按钮的点击事件
				});
			}
			//Shawphy:向下翻页函数
			var scrollDown=function(){
				_btnDown.unbind("click",scrollDown);
				for(i=1;i<=line;i++){
					_this.find("li:last").show().prependTo(_this);
				}
				_this.css({marginTop:upHeight});
				_this.animate({
					marginTop:0
				},speed,function(){
					_btnDown.bind("click",scrollDown);
				});
			}
			//Shawphy:自动播放
			var autoPlay = function(){
				if(timer)timerID = window.setInterval(scrollUp,timer);
			};
			var autoStop = function(){
				if(timer)window.clearInterval(timerID);
			};
			//鼠标事件绑定
			_this.hover(autoStop,autoPlay).mouseout();
			_btnUp.css("cursor","pointer").click( scrollUp ).hover(autoStop,autoPlay);//Shawphy:向上向下鼠标事件绑定
			_btnDown.css("cursor","pointer").click( scrollDown ).hover(autoStop,autoPlay);
		}
	});


})(jQuery);

//  获得 今日 昨日  近7日 近30日 方法
function getDateStr(num) {
  var dates = new Date();
  dates.setDate(dates.getDate() + num); //获取AddDayCount天后的日期
  var y = dates.getFullYear();
  var m = dates.getMonth() + 1; //获取当前月份的日期
  var d = dates.getDate();
  var mm;
  var dd;
  if (Number(m) >= 10) {
    mm = `${m}`;
  } else {
    mm = `0${m}`;
  }
  if (Number(d) >= 10) {
    dd = `${d}`;
  } else {
    dd = `0${d}`;
  }
  return `${y}-${mm}-${dd}`;
}

$(function(){
	$(".bea-sele").each(function() {
		var onTxt = $(this).find(".on-sele"),
		onLiTxt = $(this).find(".bea-opt").find(".on");
		if(onLiTxt.length>0){
			onTxt.css("color","#333");
		}

		if($(this).hasClass('disabled')) {
			$(this).append('<div class="disable-sele"></div>');
			$(this).find('.bea-opt').remove();
		}
	});

	$('body').off('click', '.disable-sele');
});



/*!
 * Evente公共方法集合
 *
 * @Author: jingwentian
 * @Date:   2015-11-05 16:43:35
 * @Last Modified by:   jingwentian
 * @Last Modified time: 2016-01-12 13:59:36
 */

$.extend({
	/**
	 * 全局配置
	 */
	options: function(opt) {
		this.debug_mode = true;
		return this[opt];
	},
	/**
	 * 输出调试信息
	 */
	debug: function(msg) {
		$.options('debug_mode') && console.log(JSON.stringify(msg));
	},

	/**
	 * 延迟操作
	 * @usage $.delay(function() {}, 2000);
	 */
	delay: (function(){
        var timer = 0;
        return function(callback, ms){
            clearTimeout (timer);
            timer = setTimeout(callback, ms);
        };
    })(),

    /**
     * 跳转
     */
    redirect: function(url) {
	    location.href = url;
	},

	/**
     * 获取当前页面链接
     */
	getCurrentUrl: function() {
		return location.href;
	},

	/**
     * 获取当前页面链接参数
     */
	getUrlParams: function() {
		return location.search;
	},

	/**
     * 获取当前页面链接某个参数的值
     */
	getQueryString: function( name ) {
	    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	    var r = location.search.substr(1).match(reg);
	    if (r != null) return unescape(decodeURI(r[2])); return null;
	},

	/**
     * 检测字符串中是否包含某字符串
     */
	strstr: function( string, delimiter ) {
		return (string.indexOf(delimiter) >= 0) ? true : false;
	},

	/**
     * 字符串替换
     */
	str_replace: function( substr, replacement, string ) {
		return string.replace(substr, replacement, string);
	},

	/**
	 * 将字符串切割成数组
	 * var arr = $.splitstr('1,2,3', ',');
	 * console.log(arr[0]); //1
	 */
	splitstr: function(string, delimiter) {
		return string.split(delimiter);
	},

	substr: function(string, length, placeholder) {
		var placeholder = placeholder || '...';
		return string.substr(0, length) + placeholder;
	},

	/**
     * 将数组转为字符串
     * var arr = [1,2,3];
     * console.log($.joinstr(arr, ',')); //1,2,3
     */
	joinstr: function(array, delimiter) {
		return array.join(delimiter);
	},

	/**
	 * 删除数组中的某个值
	 * var arr = [1,2,3];
	 * console.log($.unset(arr, '3')); //[1,2]
	 */
	unset: function(array, item) {
		var index = array.indexOf(item);
		if (index > -1) {
			array.splice(index, 1);
		}
		return array;
	},

	/**
	 * 判断数组中是否包含某项
	 * 可替换为 $.inArray( value, array [, fromIndex ] )
	 */
	in_array: function(search, array) {
        for (var i in array) {
            if (array[i] == search) {
                return true;
            }
        }
        return false;
    },
    /**
     * 数组去重
     */
    unique: function( array ) {
    	var n = [];
		for(var i = 0; i < array.length; i++)
		{
			if (n.indexOf(array[i]) == -1) n.push(array[i]);
		}
		return n;
    },

    /**
     * 判断Json对象中是否包含某个值
     * @return {[type]}        [description]
     */
    inJson: function (search, json) {
    	return $.in_array(search, json);
    },

    /**
     * 字符串转换为int
     */
    intval: function( num ) {
    	var num = num || 0;
    	return parseInt(num);
    },

    /**
     * 字符串转换为float
     */
    floatval: function( num ) {
    	var num = num || 0;
    	return parseFloat(num).toFixed(2);
    },

    strlen: function ( str ) {
		var len = 0;
		for (var i = 0; i < str.length; i ++) {
		var c = str.charCodeAt(i);
			//单字节加1
			if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
				len ++;
			} else {
				len += 2;
			}
		}
		return len;
    },

    /**
     * 获取Object Key的长度
     */
    length: function( obj ) {
    	return Object.keys(obj).length;
    },

	/**
     * 检测手机号是否合法
     */
	validateMobile: function(mobile) {
		var _mobile = mobile.replace(/[^0-9]/g, '');
		if (_mobile.length != 11) {
			return false;
		}
		return true;
	},

	/**
	 * 验证邮箱格式
	 */
    validateEmail: function(email) {
		if( (email == "" || email != "" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(email) ) ) {
        	return false;
    	}
    	return true;
	},

	/**
	 * 验证数字
	 */
	validateNumber: function( num ){
        var number = /^\d+$/;
        if(number.test(num)){
            return true;
        }
        return false;
    },

    /**
     * 判断输入的参数是否为空
     */
    validateEmpty: function(str) {
    	return str == null || typeof str == "undefined" || str.trim() == "" ? true : false;
    },

    /**
     * 验证身份证号有效性
	 * @return : true是合格的身份证   false为不合法的身份证
	 */
	validateIdcard: function (num) {
	    num = num.toUpperCase();
	    var cityCode = {11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江 ", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北 ", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏 ", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外 "};

	    if(!cityCode[num.substr(0,2)]){
	        return false;
	    }
	    if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num))) {
	        return false;
	    }
	    var len, re;
	    len = num.length;
	    if (len == 15) {
	        re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
	        var arrSplit = num.match(re);
	        var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);
	        var bGoodDay;
	        bGoodDay = (dtmBirth.getYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
	        if (!bGoodDay) {
	            return false;
	        }
	        else {
	            var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
	            var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
	            var nTemp = 0, k;
	            num = num.substr(0, 6) + '19' + num.substr(6, num.length - 6);
	            for (k = 0; k < 17; k++) {
	                nTemp += num.substr(k, 1) * arrInt[k];
	            }
	            num += arrCh[nTemp % 11];
	            return true;
	        }
	    }
	    if (len == 18) {
	        re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
	        var arrSplit = num.match(re);
	        var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
	        var bGoodDay;
	        bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
	        if (!bGoodDay) {
	            return false;
	        }
	        else {
	            var valnum;
	            var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
	            var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
	            var nTemp = 0, k;
	            for (k = 0; k < 17; k++) {
	                nTemp += num.substr(k, 1) * arrInt[k];
	            }
	            valnum = arrCh[nTemp % 11];
	            if (valnum != num.substr(17, 1)) {
	                return false;
	            }
	            return true;
	        }
	    }
	    return false;
	},

	/**
	 * 判断http或者https
	 */
	validateHttps: function(url) {
		return http = 'https:' == document.location.protocol ? false : true;
	},

	/**
	 * 验证IP
	 */
	validateIpAddress: function(str) {
		var pattern = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  		return pattern.test(str);
	},

	/**
	 * 验证URL是否合法
	 */
	validateUrl: function(str) {
		var strRegex = "^((https|http|ftp|rtsp|mms)?://)"
            + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" //ftp的user@
            + "(([0-9]{1,3}.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184
            + "|" // 允许IP和DOMAIN（域名）
            + "([0-9a-z_!~*'()-]+.)*" // 域名- www.
            + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]." // 二级域名
            + "[a-z]{2,6})" // first level domain- .com or .museum
            + "(:[0-9]{1,4})?" // 端口- :80
            + "((/?)|"
            + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
	    var re = new RegExp(strRegex);
	    return re.test(str);
	},

	/**
	 * 验证参数长度是否在范围内
	 */
	validateAvaiableLength: function(minL,maxL,str) {
		return (str.length >= minL && str.length <= maxL) ? true : false;
	},

	/**
	 * 参数是否全部为中文字符
	 */
	validateChinese: function (str) {
	    var pattern = /^[\u0391-\uFFE5]+$/g;
	    return pattern.test(str);
	},

    reject: function(resp) {
		var defer;
		defer = $.Deferred();
		defer.reject(resp);
		return defer.promise();
	},

	/**
	 * $.ajax请求的封装
	 *
	 * @usage return $.request("post", url, {}).done(function(responce) {}).fail(function() {});
	 * @usage return $.request("post", url, null).then(function(responce) {});
	 *
	 * @param {[type]} method   [POST/GET]
	 * @param {[type]} url      [请求URL]
	 * @param {[type]} data     [传递的数据]
	 * @param {[type]} userOpts [自定义参数: {headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}}]
	 *
	 * @return {[type]} [description]
	 */
	request: function(method, url, data, userOpts) {
		var defer, options;
		defer = $.Deferred();
		options = $.extend({
			method: method,
			url: url,
			dataType: "json",
			async: false,
			data: data,
			timeout: 3000,
			cache: false,
			beforeSend: function(msg) {
                $.debug('request loading...');
            }
		}, userOpts);
		$.ajax(options).done(function(data, textStatus, jqXHR) {
			$.debug('response success...');
			return defer[(data.error ? "reject" : "resolve")](data);
		}).fail(function(jqXHR) {
			$.debug('response failed...');
			return defer.reject();
		});
		return defer.promise();
	},
	/**
	 * JSONP请求的封装
	 */
	jsonp: function(url, data, doneCallback, failCallback) {
		$.request("GET", url, data, {
			jsonpCallback: 'jsonCallback',
			contentType: "application/json",
			dataType: 'jsonp'
    	}).done(function(response) {
			doneCallback(response);
		}).fail(function() {
			failCallback();
		});
	},

	/**
	 * 获取服务器时间
	 */
	getSevertime: function() {
		var xmlHttp = new XMLHttpRequest();
		if( !xmlHttp ){
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlHttp.open("HEAD",location.href,false);
		xmlHttp.send();
		var severtime=new Date(xmlHttp.getResponseHeader("Date"));
		return severtime;
	},

	/**
	 * 设置cookie
	 */
	setCookie: function(name,value) {
	    var Days = 3000; //此 cookie 将被保存 300 天
	    var exp  = new Date();    //new Date("December 31, 9998");
	    exp.setTime(exp.getTime() + Days*24*60*60*1000);
	    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
	},

	/**
	 * 取cookies函数
	 */
	getCookie: function(name) {
	    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
	    if(arr != null) return (arr[2]); return null;
	},

	/**
	 * 删除cookie
	 */
	delCookie: function(name) {
	    var exp = new Date();
	    exp.setTime(exp.getTime() - 1);
	    var cval=$.getCookie(name);
	    if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
	},


    /**
     * 生成html
     */
    create: function(htmlStr) {
	    var frag = document.createDocumentFragment(),
	        temp = document.createElement('div');
	    temp.innerHTML = htmlStr;
	    while (temp.firstChild) {
	        frag.appendChild(temp.firstChild);
	    }
	    return frag;
	},

	/**
     * 移动端提示框
     * 注: 依赖css样式
     */
	showTips: function( msg, autoClose ) {
		var msg 		= msg 		|| '';
		var autoClose   = autoClose || true;
		var html = $.create('<div id="popup"><p>'+msg+'</p></div>');
		document.body.insertBefore(html, document.body.childNodes[0]);
		if (autoClose) {
			setTimeout(function () {
			    $('#popup').remove();
			}, 2000);
		}
	},

	/**
     * 生成唯一码
	 */
	getOnlyCode: function() {
		var code = (new Date()).valueOf();
		code = code + "_" + $.generateMixed(5);
		return code;
	},
	generateMixed: function(n) {
		var res = "";
		var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
		for (var i = 0; i < n; i++) {
			var id = Math.ceil(Math.random() * 35);
			res += chars[id];
		}
		return res;
	},

	/**
     * 刷新二维码
	 */
	refreshVerify: function(el) {
		var src = el.attr('src');
		el.attr('src', src + '?' + Math.random());
	},

	/**
	 * 首字母大写
	 */
	fistLetterUpper: function(str) {
		 return str.charAt(0).toUpperCase()+str.slice(1);
	},

	/**
	 * 对字符串进行截取，包括普通字符和中文字符
	 * $.cutstr('hello',2)->he...  $.cutstr("您好呀",4)->您好...
	 */
	cutstr: function(str, len, placeholder) {
	    var temp,
	        icount = 0,
	        patrn = /[^\x00-\xff]/g,    //中文字符匹配
	        strre = "",
	        placeholder = placeholder || '...';

	    for (var k = 0; k < str.length; k++) {
	        if (icount < len ) {
	            temp = str.substr(k, 1);
	            if (temp.match(patrn) == null) {
	                icount = icount + 1;
	            } else {
	                icount = icount + 2;
	            }
	            strre += temp;
	        } else {
	            break
	        }
	    }
	    return strre + placeholder;
	},

	/**
	 * js 加法计算
	 * 调用：$.accAdd(arg1,arg2)
	 * 返回值：arg1加arg2的精确结果
	 */
	accAdd: function(arg1,arg2) {
	  var r1,r2,m;
	  try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
	  try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
	  m=Math.pow(10,Math.max(r1,r2))
	  return ((arg1*m+arg2*m)/m).toFixed(2);
	},

	/**
	 * js 减法计算
	 * 调用：$.Subtr(arg1,arg2)
	 * 返回值：arg1减arg2的精确结果
	 */
	Subtr: function(arg1,arg2) {
	     var r1,r2,m,n;
	     try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
	     try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
	     m=Math.pow(10,Math.max(r1,r2));
	     //last modify by deeka
	     //动态控制精度长度
	     n=(r1>=r2)?r1:r2;
	     return ((arg1*m-arg2*m)/m).toFixed(2);
	},

	/**
	 * js 除法函数
	 * 调用：$.accDiv(arg1,arg2)
	 * 返回值：arg1除以arg2的精确结果
	 */
	accDiv: function(arg1,arg2) {
	  var t1=0,t2=0,r1,r2;
	  try{t1=arg1.toString().split(".")[1].length}catch(e){}
	  try{t2=arg2.toString().split(".")[1].length}catch(e){}
	  with(Math){
	    r1=Number(arg1.toString().replace(".",""))
	    r2=Number(arg2.toString().replace(".",""))
	    return (r1/r2)*pow(10,t2-t1);
	  }
	},

	/**
	 * js 乘法函数
	 * 调用：$.accMul(arg1,arg2)
	 * 返回值：arg1乘以arg2的精确结果
	 */
	accMul: function(arg1,arg2) {
	  var m=0,s1=arg1.toString(),s2=arg2.toString();
	  try{m+=s1.split(".")[1].length}catch(e){}
	  try{m+=s2.split(".")[1].length}catch(e){}
	  return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)
	},

	/**
     * 显示提示弹窗
     *
     * 注意: 依赖artDialog插件
     *
     * 以下参数都可以为空, 大多数时候只需要传入一个标题和内容
     *
     * @param {[type]}  title     [标题]
     * @param {[type]}  msg       [内容,为空则显示loadding]
     * @param {[type]}  autoClose [是否自动关闭(2秒)]
     * @param {Boolean} isModal   [是否模式弹窗(有背景颜色)]
     * @param {[type]}  ele       [给弹窗一个虚拟的id, 用于在关闭时定位这个弹窗]
     *
     * @return {[type]}  [description]
     */
	showDialog: function( title, msg, autoClose, isModal, ele ){
		var title 		= title 	|| '';
		var msg   		= msg 		|| '';
		var autoClose 	= autoClose || false;
		var isModal 	= isModal   || false;
		var ele  		= ele 		|| 'dialog-pop-window'
		var d = dialog( {
			id: ele,
			fixed: true,
			quickClose: false,
			cancel: false,
			width: 320,
		} );
		if ( title.length > 0 ) {
			d.title( title );
		}
		if ( msg.length > 0 ) {
			d.content( msg );
		}
		if ( isModal ) {
			d.showModal();
		} else {
			d.show();
		}
		if ( autoClose ) {
			setTimeout(function () {
			    d.close().remove();
			}, 2000);
		}
	},

	/**
     * 关闭提示弹窗
     *
     * 注意: 依赖artDialog插件
     *
     * @param {[type]} ele [description]
     *
     * @return {[type]} [description]
     */
	closeDialog: function ( ele ) {
		var ele = ele || 'dialog-pop-window';
		dialog.get('dialog-pop-window').close().remove();
	},

    /**
     * 显示小提示tip
     *
     * 注意: 依赖artDialog插件
     *
     * @param {[type]} ele       [DOM id]
     * @param {[type]} msg       [提示文字]
     * @param {[type]} align     [方向, 包括以下]
     *	      "top","top left","top right"
     *	 	  "right top", "right", "right bottom"
     *	 	  "bottom right", "bottom", "bottom left"
     *	 	  "left bottom", "left", "left top"
     * @param {[type]} autoClose [是否自动消失]
     *
     * @return {[type]} [description]
     */
	showTips: function ( ele, msg, align, autoClose ) {
		var msg 		= msg 		|| '';
		var align		= align 	|| 'right';
		var autoClose	= autoClose || true;
		var d = dialog({
		    align: align,
		    content: msg,
		    quickClose: true
		});
		d.show(document.getElementById(ele));
		if (autoClose) {
			setTimeout(function () {
			    d.close().remove();
			}, 2000);
		}
	},

	/**
	 * [copy 复制插件]
	 * @param  {[type]} id 按钮id selector
	 * @example
	 * <a class="f12 blue copy" data-clipboard-text='ABCEFG' id="copy" href="javascript:;">复制</a>
	 * 需要属性data-clipboard-text，最终copy的text是data-clipboard-text的值
	 * @return {[type]}    [description]
	 */
	copy: function (id) {
		try {
			var client = new ZeroClipboard( $("#" + id) );
			client.on( "ready", function( readyEvent ) {
				client.on("copy", function (event) {
					alert('success');
				});
			});
			client.on( 'error', function(event) {
		        ZeroClipboard.destroy();
				var txt = $("#yq-cold").text();
				alert('您的浏览器不支持复制功能，请手动copy');
		    });
		} catch (e) {
			console.log(e);
			alert('您的浏览器不支持复制功能');
		}
	}

});
