/* main.js */


window.onload = function(){     //DOM과 img등이 모두 로드된 후 실행
    console.log("로드완료")
    // 엘리먼트 가져오는 곳
    var section = document.querySelectorAll('#container section');
    var content1Li = document.querySelectorAll('.content1 > ul > li');
    var mainVideo = document.querySelector('.main_visual video');
    var wrap = document.querySelector('#wrap');
    var bodclientHeight = document.querySelector('body').clientHeight;
    var bodyScrollHeight = document.querySelector('body').scrollHeight;
    var pages = document.querySelectorAll('section');

    
    //화면값 관리 (계산해서 적용하는 화면값 보관)
    function getSize(){
        var tabletLimit = 1023;
        var mobileLimit = 767;
        var winWidth = window.innerWidth; 
        var winHeight = window.innerHeight;
        var scrollY = window.pageYOffset;
        var endOfScroll = bodyScrollHeight - winHeight;
        

        render(tabletLimit,mobileLimit,winWidth,winHeight,scrollY,endOfScroll);
        effectOfScrollingDown(scrollY,winHeight)
        
    };



    //화면사이즈 적용 (화면값을 가져와서 적용한다.)
    function render(tabletLimit,mobileLimit,winWidth,winHeight,scrollY,endOfScroll){

        //공통

        for(var i = 0; i < section.length; i++){
            if(scrollY >= winHeight * i && scrollY <= winHeight * (i + 1)){
            
                // 스크롤바를 내릴때 페이지에 도착하면 서서히 나타나는 효과
                section.forEach(function(el){
                    el.classList.remove('on');
                })
                section[i].classList.add('on');
                
                //스크롤바를 올릴때 페이지에 도착하면 서서히 나타나는 효과

                //페이지의 배경이 흰색이면 header와 aside 검정색으로 바꾸기
                if(section[i].getAttribute('data-backcolor') === 'white'){
                    wrap.classList.add('black');
                    // $("#wrap").removeClass('black');
                }else{
                    wrap.classList.remove('black');
                }
            }
        }

        /*

        function effectOfScrollingDown(){
            for(var i = 0; i < section.length; i++){
                if(scrollY >= winHeight * i && scrollY <= winHeight * (i + 1)){
                
                    // 스크롤바를 내릴때 페이지에 도착하면 서서히 나타나는 효과
                    section.forEach(function(el){
                        el.classList.remove('on');
                    })
                    section[i].classList.add('on');
                    
                    //스크롤바를 올릴때 페이지에 도착하면 서서히 나타나는 효과

                    //페이지의 배경이 흰색이면 header와 aside 검정색으로 바꾸기
                    if(section[i].getAttribute('data-backcolor') === 'white'){
                        wrap.classList.add('black');
                        // $("#wrap").removeClass('black');
                    }else{
                        wrap.classList.remove('black');
                    }
                }
            }
        }

        */









        if(winWidth <= mobileLimit){   //모바일버전


        }
        if(winWidth <= tabletLimit && winWidth > mobileLimit){    //태블릿버전
            

        }

        if(winWidth > tabletLimit){    //pc버전
        //윈도우 높이에 맞게 section 높이 설정하기 
        section.forEach(function(el){
            el.style.height = winHeight+"px";       //너비, 높이를 지정할 땐 'px'을 붙여야 한다.
        })
        content1Li.forEach(function(el){
            el.style.height = winHeight+"px"; 
        })
        mainVideo.style.height = winHeight+"px";


                
        pages.forEach(function(el){

            el.addEventListener('mousewheel',function(delta){
                if(delta.wheelDelta < 0){        //한페이지 아래로 스크롤

                    



                    var thisPage = this.getAttribute('data-pageName')
                    
                    switch (thisPage) {
                        case 'main':
                            window.scrollTo({
                                top: winHeight * 1 + 1,
                                behavior: 'smooth'
                            }); 
                            break;
                        case 'content1':
                            window.scrollTo({
                                top: winHeight * 2 + 1,
                                behavior: 'smooth'
                            }); 
                            break;
                        case 'content2':
                            window.scrollTo({
                                top: winHeight * 3 + 1,
                                behavior: 'smooth'
                            }); 
                            break;
                        case 'content3':
                            window.scrollTo({
                                top: winHeight * 4 + 1,
                                behavior: 'smooth'
                            }); 
                            break;
                        case 'content4':
                            window.scrollTo({
                                top: winHeight * 5 + 1,
                                behavior: 'smooth'
                            }); 
                            break;
                        default:
                            break;
                    }
                }else{      //한페이지 위로 스크롤
                    var thisPage = this.getAttribute('data-pageName')
                    switch (thisPage) {
                        case 'main':
                            window.scrollTo({
                                top: winHeight * 0,
                                behavior: 'smooth'
                            }); 
                            break;
                        case 'content1':
                            window.scrollTo({
                                top: winHeight * 0,
                                behavior: 'smooth'
                            }); 
                            break;
                        case 'content2':
                            window.scrollTo({
                                top: winHeight * 1 + 1,
                                behavior: 'smooth'
                            }); 
                            break;
                        case 'content3':
                            window.scrollTo({
                                top: winHeight * 2 + 1,
                                behavior: 'smooth'
                            }); 
                            break;
                        case 'content4':
                            window.scrollTo({
                                top: winHeight * 3 + 1,
                                behavior: 'smooth'
                            }); 
                            break;
                        case 'footer':
                            window.scrollTo({
                                top: winHeight * 4 + 1,
                                behavior: 'smooth'
                            }); 
                            break;
                        default:
                            break;
                    }
                }
            });
        })



        } // if pc버전



    };




/*    
    function mousemove(winHeight,scrollY){
        window.addEventListener('mousewheel',function(delta){

            if(delta.wheelDelta < 0){  //마우스 다운
                console.log("마우스 다운",this.Sibling)
                for(var i = 0; i < section.length; i++){
                    console.log(scrollY,winHeight)
                    if(scrollY >= winHeight * i && scrollY <= winHeight * (i + 1)){
                        
                        // 스크롤바를 내릴때 페이지에 도착하면 서서히 나타나는 효과
                        section.forEach(function(el){
                        el.classList.remove('on');
                        })
                        section[i].classList.add('on');
                    }
                }
    
            }else{      //마우스 업
                console.log("마우스 업")
                for(var i = 0; i < section.length; i++){
                    console.log(scrollY,winHeight)
                    if(scrollY >= winHeight * i && scrollY <= winHeight * (i + 1)){
                        
                        // 스크롤바를 내릴때 페이지에 도착하면 서서히 나타나는 효과
                        section.forEach(function(el){
                        el.classList.add('on');
                        })
                    }
                }

            }
        });
    }


*/




    function init(){    //시작
        getSize();

    };

    window.addEventListener('scroll',function(e){
        getSize();
    },false);

    window.addEventListener('resize',function(){
        getSize();

    },false);

    init(); //초기화
}


/*

$(window).ready(function(){
    var divWidth = document.querySelector('body').offsetWidth;
    var tabletsize = 1023;
    //로딩화면
    var ht = $(window).height();
    // $(".loading_inner").height(ht);
    $(".sliding .pages a").eq(0).addClass("on");
    // container 사이즈
    $("#container > section").height(ht);
    $(".main_visual video").height(ht);
    $(".content1 > ul > li").height(ht);

    
    $(window).resize(function(){
        divWidth = document.querySelector('body').offsetWidth;
        if(divWidth <= tabletsize) return false; // 태블릿사이즈 이하면 더이상 진행안함.
        ht = $(window).height();
        $(".loading_inner").height(ht);
        $("#container > section").height(ht);
        $(".main_visual video").height(ht);
        $(".content1 > ul > li").height(ht);
    });
    // $(".loading_inner").delay(1000).animate({"display":"none","opacity":"0"},1000,"linear");

    //로딩 완료되면
    $(".main_visual").addClass('on');
    $(".pages > li").eq(0).addClass("on");

    // 주메뉴
    var headerAni;
    var gnbUl = document.querySelector('.gnb>ul')
    var gnbLi = document.querySelectorAll('.gnb>ul>li');
    var headerWrap = document.querySelector('.header_wrap');
    var overSuvGnbLi = document.querySelectorAll('.gnb>ul>li>ul>li')
    var inter;
    var heaerBg = document.querySelector('.gnb_bg').offsetHeight;
    
    gnbLi.forEach(function(el){
        var gnbBg;
        // 마우스 오버하면 헤더에 on 붙이기
        el.addEventListener('mouseover',function(){
            this.classList.add("on");
            headerWrap.classList.add("on");

            headerAni = setTimeout(function(){
                overSuvGnbLi.forEach(function(item){
                    item.style.visibility = "visible";
                    item.style.opacity = "1";
                })
            }, 300)

        });

        //마우스 아웃하면 헤더에 on 지우기
        el.addEventListener('mouseout',function(){
            this.classList.remove("on");
            headerWrap.classList.remove("on");
        });
    });

    //햄버거 버튼 클릭
    $(".allmenu_btn").click(function(){

    });


    $(window).scroll(function(){
        var scroll = $(window).scrollTop()+1;
        ht = $(window).height();
        if(scroll >= 0 * ht && scroll < 1 * ht){
            $("#container > section").removeClass("on");
            $("#container > section").eq(0).addClass("on");
            $("#wrap").removeClass('black');
            $(".sliding .pages a").removeClass("on");
            $(".sliding .pages a").eq(0).addClass("on");
        }
        if(scroll >= 1 * ht && scroll < 2 * ht){
            $("#container > section").removeClass("on");
            $("#container > section").eq(1).addClass("on");
            $("#wrap").removeClass('black');
            $(".sliding .pages a").removeClass("on");
            $(".sliding .pages a").eq(1).addClass("on");
        }
        if(scroll >= 2 * ht && scroll < 3 * ht){
            $("#container > section").removeClass("on");
            $("#container > section").eq(2).addClass("on");
            $("#wrap").addClass('black');
            $(".sliding .pages a").removeClass("on");
            $(".sliding .pages a").eq(2).addClass("on");
        }
        if(scroll >= 3 * ht && scroll < 4 * ht){
            $("#container > section").removeClass("on");
            $("#container > section").eq(3).addClass("on");
            $("#wrap").addClass('black');
            $(".sliding .pages a").removeClass("on");
            $(".sliding .pages a").eq(3).addClass("on");
        }
        if(scroll >= 4 * ht){
            $("#container > section").removeClass("on");
            $("#container > section").eq(4).addClass("on");
            $("#wrap").addClass('black');
            $(".sliding .pages a").removeClass("on");
            $(".sliding .pages a").eq(4).addClass("on");
        }
    });


    //바로가기 버튼 클릭
    $(".sliding .pages a").click(function(){
        var thisIdx = $(this).index();
        $(".sliding .pages a").removeClass('on');
        $(this).addClass('on');
        $("html,body").stop().animate({"scrollTop":thisIdx * ht},500,"swing");
    });

    

    if(divWidth > tabletsize){
        $("section").mousewheel(function(e,delta){

            if(delta > 0) { //마우스 휠을 올렸을 때
                var prev = $(this).prev().offset().top;
                $("html,body").stop().animate({"scrollTop":prev},700,"swing");
            }else if(delta < 0) { //마우스 휠을 내렸을 때
                if($(this == $(".content4"))){
                    $("html,body").stop().animate({"scrollTop":$(document).height()},700,"linear"); //스클로 맨 아래로 내리기
                }
                var next = $(this).next().offset().top;
                $("html,body").stop().animate({"scrollTop":next},700,"swing");
            }
        });
    }
    //한페이지씩 이동



    // 사업소개 li 호버시 글자 서서히 나타나게
    var contentLi = document.querySelectorAll('.content1 ul li');
    var set;
    
    contentLi.forEach(function(el){
        el.addEventListener('mouseover',function(){
            this.classList.add('on');
            set = setTimeout(() => {
                // this.children[1].style.display = 'block'; // 지속시간만큼 서서히 이동하는건 가능하나 서서히 보여지는건 불가. 바로 보여진다.
                // this.children[1].style.visibility = 'visible';
                this.children[1].style.opacity = '1';
                this.children[1].style.top = '35%';
            }, 1200);
        });
        el.addEventListener('mouseout',function(){
            this.classList.remove('on');
            // this.children[1].style.visibility = 'hidden';
            this.children[1].style.opacity = '0';
            this.children[1].style.top = '45%'
            clearTimeout(set);
        });
    });




}); //$(window).ready

*/

