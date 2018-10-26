// 关联
var diqu = ['长隆集团', '广州', '珠海', '清远'],
    company = ['长隆集团', '广州长隆酒店', '广州熊猫酒店', '广州长隆香江酒店', '长隆横琴湾酒店', '珠海长隆马戏酒店', '珠海长隆企鹅酒店', '珠海长隆迎海酒店公寓'],
    depart = [
        ['400客服中心', '中央预定中心'],
        ['财务部', '房务部'],
        ['财务部', '房务部'],
        ['财务部', '房务部'],
        ['财务部', '房务部'],
        ['财务部', '房务部'],
        ['财务部', '房务部'],
        ['财务部', '房务部'],
    ],
    position = [
        [
            ['直销渠道客服', '直销渠道客服主管', '直销渠道客服经理'],
            ['直销渠道客服', '直销渠道客服主管', '直销渠道客服经理'],
        ],
        [
            ['财务'],
            ['酒店总机客服', '前厅员工', '前厅领班/主管', '前厅经理']
        ],
        [
            ['财务'],
            ['酒店总机客服', '前厅员工', '前厅领班/主管', '前厅经理']
        ],
        [
            ['财务'],
            ['酒店总机客服', '前厅员工', '前厅领班/主管', '前厅经理']
        ],
        [
            ['财务'],
            ['酒店总机客服', '前厅员工', '前厅领班/主管', '前厅经理']
        ],
        [
            ['财务'],
            ['酒店总机客服', '前厅员工', '前厅领班/主管', '前厅经理']
        ],
        [
            ['财务'],
            ['酒店总机客服', '前厅员工', '前厅领班/主管', '前厅经理']
        ],
        [
            ['财务'],
            ['酒店总机客服', '前厅员工', '前厅领班/主管', '前厅经理']
        ],
    ];
for(var c=0; c<company.length; c++) {
    $('#item5').find('.bea-opt').append('<li>'+ company[c] +'</li>');
}
$('#item5').find('.bea-opt').find('li').on('click', function() {
    $('#item6, #item7').find('.bea-opt').html('');
    $('#item6').find('.on-sele').text('请选择所属部门').css('color', '#999');
    $('#item7').find('.on-sele').text('请选择职位').css('color', '#999');
    var index = company.indexOf($(this).text());
    for(var j=0; j<depart[index].length; j++) {
        console.log(depart[index][j]);
        $('#item6').find('.bea-opt').append('<li onClick="btnList('+ index + ',' + j +')">'+ depart[index][j] +'</li>');
    }
});
// 选择所属公司的列表项
function btnList(e, o) {
  console.log(e, o);
  $('#item7').find('.bea-opt').html('');
  $('#item7').find('.on-sele').text('请选择职位').css('color', '#999');
  for(var j=0; j<position[e][o].length; j++) {
      console.log(position[e][o][j]);
      $('#item7').find('.bea-opt').append('<li>'+ position[e][o][j] +'</li>');
  }
  $('.zhgl-tjzh-item').find('.bea-opt').find('li').on('click', function() {
    var inpDom = $(this).parents('.zhgl-tjzh-item');
    inpDom.attr('data-val', $(this).text());
    inpDom.find('.error').show().text('');
  });
}

// 输入信息后取消错误提示
$('.zhgl-tjzh-item').find('.input').on('keyup keydown', function() {
  var inpDom = $(this).parents('.zhgl-tjzh-item');
  inpDom.attr('data-val', $.trim($(this).val()));
  console.log(inpDom.attr('data-val'));
  if($.trim($(this).val()) === '') {
    inputTxt = '请填写' + inpDom.find('.zhgl-tjzh-item-label').text().slice(1, inpDom.find('.zhgl-tjzh-item-label').text().length-1);
    $(this).find('.error').show().text(inputTxt);
  } else {
    inpDom.find('.error').text('').hide();
  }
});

// 选择选择框后取消错误提示
$('.zhgl-tjzh-item').find('.bea-opt').find('li').on('click', function() {
  var inpDom = $(this).parents('.zhgl-tjzh-item');
  inpDom.attr('data-val', $(this).text());
  inpDom.find('.error').show().text('');
  console.log(inpDom.attr('data-val'));
});


// 添加按钮
$('.J-add').on('click', function() {
  var validataAdd = true;
  // 添加禁用按钮
  // $(this).addClass('btn-disabled');
  var reg=/^[\u2E80-\u9FFF]+$/;
  if(!reg.test($('#item2').val())) {
    $('#item2').parents('.zhgl-tjzh-item').find('.error').show().text('姓名格式错误，请输入中文');
    var validataAdd = false;
  }
  var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
  if(!myreg.test($('#item3').val())) {
    $('#item3').parents('.zhgl-tjzh-item').find('.error').show().text('手机号码格式错误');
    var validataAdd = false;
  }
  for(var i=1; i<4; i++) {
    if($.trim($('#item'+i).val()) === '') {
      var input = $('#item'+i).parents('.zhgl-tjzh-item').find('.zhgl-tjzh-item-label'),
      inputTxt = '请填写' + input.text().slice(1, input.text().length-1);
      $('#item'+i).parents('.zhgl-tjzh-item').find('.error').show().text(inputTxt);
      var validataAdd = false;
    }
  }
  for(var i=4; i<9; i++) {
    if(!$('#item'+i).parents('.zhgl-tjzh-item').find('.bea-opt').find('li').hasClass('on')) {
      $('#item'+i).parents('.zhgl-tjzh-item').find('.error').show().text($('#item'+i).find('.on-sele').text());
      var validataAdd = false;
    }
  }
  if(validataAdd === true) {
    console.log('sussuce');
  }
  // 删除禁用按钮
  // $(this).removeClass('btn-disabled');
});

// 修改按钮
$('.J-modify').on('click', function() {
  var validataModify = true;
  // 添加禁用按钮
  // $(this).addClass('btn-disabled');
  var reg=/^[\u2E80-\u9FFF]+$/;
  if(!reg.test($('#item2').val())) {
    $('#item2').parents('.zhgl-tjzh-item').find('.error').show().text('姓名格式错误，请输入中文');
    var validataModify = false;
  }
  var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
  if(!myreg.test($('#item3').val())) {
    $('#item3').parents('.zhgl-tjzh-item').find('.error').show().text('手机号码格式错误');
    var validataModify = false;
  }
  for(var i=1; i<4; i++) {
    if($.trim($('#item'+i).val()) === '') {
      var input = $('#item'+i).parents('.zhgl-tjzh-item').find('.zhgl-tjzh-item-label'),
      inputTxt = '请填写' + input.text().slice(1, input.text().length-1);
      $('#item'+i).parents('.zhgl-tjzh-item').find('.error').show().text(inputTxt);
      var validataModify = false;
    }
  }
  for(var i=4; i<9; i++) {
    if(!$('#item'+i).parents('.zhgl-tjzh-item').find('.bea-opt').find('li').hasClass('on')) {
      $('#item'+i).parents('.zhgl-tjzh-item').find('.error').show().text($('#item'+i).find('.on-sele').text());
      var validataModify = false;
    }
  }
  if(validataModify === true) {
    console.log('sussuce');
  }
  // 删除禁用按钮
  // $(this).removeClass('btn-disabled');
});