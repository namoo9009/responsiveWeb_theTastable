/* main.js */

// 엘리먼트 가져오는 곳
const body = document.body;
const wrap = document.querySelector('#wrap');
const header = document.querySelector('#header');
const headerWrap = document.querySelector('.header_wrap');
const gnb = document.querySelector('nav.gnb')
const gnbLi = document.querySelectorAll('nav.gnb > ul > li');
const hamBtn = document.querySelector('.ham_box');
const allmenuWrap = document.querySelector('.allmenu_wrap');
const section = document.querySelectorAll('section');
const topBtn = document.querySelector('#footer .top');
const slideBtn = document.querySelectorAll('.sliding .pages a');
const slideBtnName = document.querySelectorAll('.sliding_name');

// 디바이스 사이즈
const tabletLimit = 1023;

// global로 사용하는 데이터 값
let gnbEffect;
let winWidth;
let winHeight;
let scrollY;

//golobal로 사용하는 화면이동에 사용할 section별 top, bottom값
let mainScrollTop,
    con1ScrollTop,
    con2ScrollTop,
    con3ScrollTop,
    con4ScrollTop,
    footerScrollTop,
    footerScrollBottom;


//데이터 변수 관리 (페이지 리사이징이나 스크롤할 때 업데이트가 필요한 데이터)
function getSize(){
    winWidth = body.offsetWidth; 
    winHeight = body.offsetHeight;
    scrollY = window.pageYOffset;

    mainScrollTop = section[0].getBoundingClientRect().top + scrollY;
    con1ScrollTop = section[1].getBoundingClientRect().top + scrollY;
    con2ScrollTop = section[2].getBoundingClientRect().top + scrollY;
    con3ScrollTop = section[3].getBoundingClientRect().top + scrollY;
    con4ScrollTop = section[4].getBoundingClientRect().top + scrollY;
    footerScrollTop = section[5].getBoundingClientRect().top + scrollY;
    footerScrollBottom = section[5].getBoundingClientRect().top + scrollY + section[5].offsetHeight - window.innerHeight ;
};
/*------------------------------------------------------------------------------------*/
/*header*/

//햄거버 버튼 클릭시
hamBtn.addEventListener('click',function(e){
    allmenuWrap.classList.toggle('on');
    // gnb, aside글씨 안보이게
    gnb.classList.toggle('on');
    wrap.classList.toggle('hamBtnOn');
}); 

//주메뉴 마우스오버
function mouseoverGnb(){
    gnbLi.forEach(function(el){
        el.addEventListener('mouseover',function(){
            headerWrap.classList.add('on');
        });
        el.addEventListener('mouseout',function(){
            headerWrap.classList.remove('on');
        });
    })
}

/*------------------------------------------------------------------------------------*/
/*페이지 바로가기 버튼*/

//클릭시 해당페이지로 이동 
function movePage(){
    slideBtn.forEach(function(el){
        el.addEventListener('click',function(e){
            e.preventDefault();
            currentBtn = e.currentTarget;  //클릭 이벤트가 전달된 엘리먼트. this와 동일
            parentBox = currentBtn.parentElement;  //연결된 엘리먼트의 부모
            childBtn = parentBox.children;  //부모 엘리멘트의 자식 엘리민트들
            currentIdx = Array.from(childBtn).indexOf(currentBtn); 
            for(var k = 0; k <  slideBtn.length; k++) {
                if(currentIdx === k) {
                    window.scrollTo({
                        top: winHeight * k + 1,
                        behavior: 'smooth'
                    })
                }
            }
        });
    });
}

/*------------------------------------------------------------------------------------*/
/*Top 버튼*/

// 탑버튼 클릭시 맨 위로 이동하기
topBtn.addEventListener('click',function(e){
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/*------------------------------------------------------------------------------------*/
/*해당 섹션 도착시 글씨 서서히 나타나는 효과*/

function display(){
    getSize()
    /*화면 너비에 맞게 시작*/
    if(winWidth <= tabletLimit){
        tabletRender()
    }else if(winWidth > tabletLimit){
        pcRender();
        movePage();
        moveScrollWhelel();
    }
}

function slideBtnOnClick(idx) {
    slideBtn.forEach(function(el){
        el.classList.remove('on');
    });
    slideBtn[idx].classList.add('on');

    slideBtnName[idx].classList.add('on');
    }

    function bgColorEffectsOfSection(idx) {
    section[idx].classList.add('on');
    if(section[idx].getAttribute('data-backcolor') === 'white'){
        wrap.classList.add('black');
    }else{
        wrap.classList.remove('black');
    }
}

//태블릿 화면일때, 스크롤이 도착하면 글씨가 서서히 나타난다.
function tabletRender(){
    getSize()
        
    if(scrollY >= mainScrollTop && scrollY < con1ScrollTop){
        bgColorEffectsOfSection(0);
    }
    if(scrollY >= con1ScrollTop*0.6 && scrollY < con2ScrollTop){
        bgColorEffectsOfSection(1);
    }
    if(scrollY >=  con2ScrollTop*0.8 && scrollY <  con3ScrollTop){
        bgColorEffectsOfSection(2);
    }
    if(scrollY >= con3ScrollTop*0.85 && scrollY < con4ScrollTop){
        bgColorEffectsOfSection(3);
    }
    if(scrollY >= con4ScrollTop*0.85 && scrollY < footerScrollBottom){
        bgColorEffectsOfSection(4);
    }
    if(scrollY >= footerScrollBottom) {
    }
}

//PC 화면일때, 스크롤이 도착하면 글씨가 서서히 나타난다.
function pcRender(){
    getSize();
    headerWrap.classList.remove('onfooter');
    topBtn.classList.remove('on');
    slideBtnName.forEach(function(el){
        el.classList.remove('on');
    });
    document.querySelector('.scroll').style.display = "block";

    if(scrollY >= mainScrollTop && scrollY < con1ScrollTop){
        console.log("메인");
        bgColorEffectsOfSection(0);
        slideBtnOnClick(0);
    }
    if(scrollY >= con1ScrollTop + 1 && scrollY < con2ScrollTop){
        bgColorEffectsOfSection(1);
        slideBtnOnClick(1);
    }
    if(scrollY >= con2ScrollTop && scrollY < con3ScrollTop){
        bgColorEffectsOfSection(2);
        slideBtnOnClick(2);
    }
    if(scrollY >= con3ScrollTop && scrollY < con4ScrollTop){
        bgColorEffectsOfSection(3);
        slideBtnOnClick(3);
    }
    if(scrollY >= con4ScrollTop && scrollY < footerScrollBottom){
        bgColorEffectsOfSection(4);
        slideBtnOnClick(4);

        header.style.display = "block";
        topBtn.classList.add('on');
        document.querySelector('.scroll').style.display = "none";
    }
    if(scrollY >= footerScrollBottom){
        bgColorEffectsOfSection(5);

        slideBtn.forEach(function(el){
            el.classList.remove('on');
        });

        slideBtnName.forEach(function(el){
            el.classList.remove('on');
        });

        headerWrap.classList.add('onfooter');
        header.style.display = "none";
        topBtn.classList.add('on');

        document.querySelector('.scroll').style.display = "none";
    }
}



/*------------------------------------------------------------------------------------*/
/* 마우스 휠 방향에 따라 이전/이후 페이지로 이동하기*/

// 마우스휠 업/다운
function moveScrollWhelel(){
    section.forEach(function(el){
        el.addEventListener('mousewheel',function(delta){
            if(delta.wheelDelta < 0){        //아래로 스크롤
                var thisPage = this.getAttribute('data-pageName');
                if(winWidth <= tabletLimit)return false;
                moveScrollWhelelToDown(thisPage)
            }else{      //위로 스크롤
                var thisPage = this.getAttribute('data-pageName')
                if(winWidth <= tabletLimit)return false;
                moveScrollWhelelToUp(thisPage);
            }
        });
    })
}

// 마우스휠을 다운할 때 다음페이지로 이동
// 마우스휠 다운할때 scrollY 값이 다운하는 시점으로 체크된다. 
function moveScrollWhelelToDown(thisPage){
    getSize();
    if(thisPage === 'main'){
        window.scrollTo({
            top: con1ScrollTop + 1,
            behavior: 'smooth'
        }); 
    }
    if(thisPage === 'content1'){
        window.scrollTo({
            top: con2ScrollTop + 1,
            behavior: 'smooth'
        }); 
    }
    if(thisPage === 'content2'){
        window.scrollTo({
            top: con3ScrollTop + 1,
            behavior: 'smooth'
        }); 
        section[2].classList.add('on');
    }
    if(thisPage === 'content3'){
        window.scrollTo({
            top: con4ScrollTop + 1,
            behavior: 'smooth'
        }); 
    }
    if(thisPage === 'content4'){
        window.scrollTo({
            top: footerScrollBottom,
            behavior: 'smooth'
        }); 
        if(scrollY === footerScrollBottom){
            window.scrollTo({
                top: con4ScrollTop,
                behavior: 'smooth'
            }); 
        }
    }
}


//마우스휠을 업할 때 이전페이지로 이동
function moveScrollWhelelToUp(thisPage){
    if(thisPage === 'main'){
        window.scrollTo({
            top: mainScrollTop,
            behavior: 'smooth'
        }); 
    }
    if(thisPage === 'content1'){
        window.scrollTo({
            top: mainScrollTop,
            behavior: 'smooth'
        }); 
    }
    if(thisPage === 'content2'){
        window.scrollTo({
            top: con1ScrollTop + 1,
            behavior: 'smooth'
        });
    }
    if(thisPage === 'content3'){
        window.scrollTo({
            top: con2ScrollTop + 1,
            behavior: 'smooth'
        }); 
    }
    if(thisPage === 'content4'){
        if(scrollY === footerScrollBottom){    
            //content4인데 스크롤탑이 푸터에 있으면 content4로 이동
            window.scrollTo({
                top: con4ScrollTop,
                behavior: 'smooth'
            }); 
        }else{
            window.scrollTo({
                top:con3ScrollTop + 1,
                behavior: 'smooth'
            }); 
        }
    }
    if(thisPage === 'footer'){   //footer
        window.scrollTo({
            top: con4ScrollTop + 1,
            behavior: 'smooth'
        }); 
    }
}

/*------------------------------------------------------------------------------------*/
//html load 완료후 함수 초기화, 공통 이벤트리스트 관리

function init(){    //시작
    getSize();
    mouseoverGnb();
    display();
};

window.addEventListener('scroll',function(){
    getSize();
    display();
},false);

window.addEventListener('resize',function(){
    getSize();
    display();
},false);

window.addEventListener('road', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});

init(); //초기화


