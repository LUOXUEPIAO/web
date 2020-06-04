//banner
$('.index_banner').slick({
    autoplay: true, 
    arrows: false,
    dots:false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    fade: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true
        }
      }
    ]
});
$('.index_banner').init(function(slick){
    $('.index_banner .item.slick-current').addClass('active').siblings().removeClass('active')
})
$('.index_banner').on('afterChange',function(slick,currentSlide){
    $('.index_banner .item.slick-current').addClass('active').siblings().removeClass('active');
    var _index = $('.index_banner').slick('slickCurrentSlide')
    $('.section1 .number span').eq(_index).addClass('active').siblings().removeClass('active')
})
$('.section1 .number span').click(function(){
    var _index = $(this).index();
    $('.index_banner').slick('slickGoTo',_index);
    $(this).addClass("active").siblings().removeClass("active")
});
$('.section1 .prev').click(function(){
  $('.index_banner').slick('slickPrev')
})
$('.section1 .next').click(function(){
  $('.index_banner').slick('slickNext');
});

//导航
//超过一定高度导航添加类名
var nav=$("header"); //得到导航对象  
var win=$(window); //得到窗口对象  
var sc=$(document);//得到document文档对象。  
win.scroll(function(){  
  if(sc.scrollTop()>=100){  
    nav.addClass("on");   
  }else{  
   nav.removeClass("on");  
  }  
})   

//移动端展开nav
$('#navToggle').on('click',function(){
	$('.m_nav').addClass('open');
})
//关闭nav
$('.m_nav .top .closed').on('click',function(){
	$('.m_nav').removeClass('open');
})

//二级导航  移动端
$(".m_nav .ul li").click(function() {
	$(this).children("div.dropdown_menu").slideToggle('slow')
    $(this).siblings('li').children('.dropdown_menu').slideUp('slow');				
});

//全屏滚动
$('#index_main').fullpage({
	'navigation': true,
  slidesNavigation: true,
  
	controlArrows: false,
	continuousHorizontal:true,
	scrollingSpeed:1000,
	showActiveTooltip :true, 
  anchors: ['one', 'two', 'three', 'four','five','six'],
  sectionsColor:['#fff','#b3b4db','	#b3b4db','#b3b4db','#b3b4db','#778899'],
	loopHorizontal: true,
	afterLoad: function(anchorLink, index){
    
		if(index == 1){
      $('#nav>ul>li a').removeClass('enter')
      $('header').removeClass('on');
      $('#nav>ul>li:first a').addClass('enter')
      
		}
		if(index == 2){
      $('#nav>ul>li a').removeClass('enter')
			$('header').addClass('on');
      $('.section2 h3').addClass('animated fadeInUp').css('animation-delay', '.1s');
      $('#nav>ul>li:nth-child(2) a').addClass('enter')
		}
		if(index == 3){
      $('#nav>ul>li a').removeClass('enter')
			$('header').addClass('on');
      $('.section3 h3').addClass('animated fadeInUp').css('animation-delay', '.1s');
      $('#nav>ul>li:nth-child(3) a').addClass('enter')
		}
		if(index == 4){
      $('#nav>ul>li a').removeClass('enter')
			$('header').addClass('on');
      $('.section4 h3').addClass('animated fadeInUp').css('animation-delay', '.1s');
      
      $('audio').get(0).play()
      $('video').get(0).play();
      $('#nav>ul>li:nth-child(4) a').addClass('enter')
    }
    if(index == 5){
      $('#nav>ul>li a').removeClass('enter')
			$('header').addClass('on');
      $('.section5 h3').addClass('animated fadeInUp').css('animation-delay', '.1s');
      $('#nav>ul>li:nth-child(5) a').addClass('enter')
    }
    if(index == 6){
      $('#nav>ul>li a').removeClass('enter')
      $('header').addClass('on');
      $('#nav>ul>li:nth-child(6) a').addClass('enter')
			$('.section6 h3').addClass('animated fadeInUp').css('animation-delay', '.1s');
    }
    $('.section').removeClass('now')
    setTimeout(function(){
        $('.section').eq(index).addClass('now')
    },200) ;
    
      //  setInterval(function(){
         
      //     $.fn.fullpage.moveSectionDown()
      // },7000); 
   
	},
	onLeave: function(index, direction){
  },
  afterRender: function () {
 
    //playing the video
    $('video').get(0).play();
    $('audio').get(0).play()
},

  
})