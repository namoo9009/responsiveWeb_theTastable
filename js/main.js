/* main.js */


window.onload = function(){     //DOM과 img등이 모두 로드된 후 실행
    // 엘리먼트 가져오는 곳
    var body = document.body;
    var wrap = document.querySelector('#wrap');
    var headerWrap = document.querySelector('.header_wrap');
    var gnb = document.querySelector('nav.gnb')
    var gnbLi = document.querySelectorAll('nav.gnb > ul > li');
    var gnbBg = document.querySelector('.header_wrap .gnb_bg');
    var hamBtn = document.querySelector('.ham_box');
    var allmenuWrap = document.querySelector('.allmenu_wrap');
    var section = document.querySelectorAll('section');
    var containerSection = document.querySelectorAll('#container section');
    var mainVideo = document.querySelector('.main_visual video');
    var content1Li = document.querySelectorAll('.content1 > ul > li');
    var slidingA = document.querySelectorAll('.sliding .pages a');
    var slidingList = document.querySelectorAll('.sliding_name');
    var topBtn = document.querySelector('#footer .top');
    var gnbEffect;  //주메뉴 애니메이션 효과
    var tabletLimit = 1023;
    var mobileLimit = 767;

    var winWidth;
    var winHeight;
    var scrollY;
    var footerTopScroll;
    var documentEndScroll;

    
    //화면값 관리 (페이지 리사이징이나 스크롤할 때 업데이트가 필요한 데이터)
    function getSize(){
        winWidth = body.offsetWidth; 
        winHeight = body.offsetHeight;
        scrollY = window.pageYOffset;
        footerTopScroll = body.scrollHeight - body.offsetHeight - 230;
        documentEndScroll = body.scrollHeight - body.offsetHeight;


        // renderDisplay(winWidth,winHeight,scrollY,footerTopScroll,documentEndScroll);
        // renderScrollUpAndDown(winWidth,winHeight,scrollY,footerTopScroll,documentEndScroll);
        
        
        // movePage(winHeight);
        // content1Mouseover();
        // mouseoverGnb();
        // sectionMousemove();

    };


    function display(){
        getSize()
        /*화면 너비에 맞게 시작*/
        if(winWidth <= tabletLimit){
            console.log('태블릿시작')
            tabletDisplay()/*scrollY*/
        }else if(winWidth > tabletLimit){
            pcDisplay();/*scrollY,winHeight,footerTopScroll,documentEndScroll*/
            movePage();
            renderScrollUpAndDown();
            mouseoverGnb();
        }
    }


/*------------------------------------------------------------------------------------*/
/*태블릿버전*/

    //검색영역 mouseover시 버튼색상 변경
    document.querySelector('.srch_box').addEventListener('mouseover',function(){
        document.querySelector('.srch_box button').classList.add('on');
    });



/*------------------------------------------------------------------------------------*/
/*공통*/

//  var renderDisplay = function(winWidth,winHeight,scrollY,footerTopScroll,documentEndScroll){

// }


    var tabletDisplay = function (){
        var mainHt = section[0].offsetHeight,
            cont1Ht = section[1].offsetHeight,
            cont2Ht = section[2].offsetHeight,
            cont3Ht = section[3].offsetHeight,
            cont4Ht = section[4].offsetHeight,
            footerHt = section[5].offsetHeight
            console.log(scrollY,mainHt,cont1Ht,cont2Ht,cont3Ht,cont4Ht,footerHt)

        if(scrollY >= 0 && scrollY < mainHt - 300){
            section[0].classList.add('on');
            if(section[0].getAttribute('data-backcolor') === 'white'){
                wrap.classList.add('black');
            }else{
                wrap.classList.remove('black');
            }
        }
        if(scrollY >= mainHt - 300 && scrollY < mainHt + cont1Ht - 300){
            section[1].classList.add('on');
            if(section[1].getAttribute('data-backcolor') === 'white'){
                wrap.classList.add('black');
            }else{
                wrap.classList.remove('black');
            }
        }
        if(scrollY >=  mainHt + cont1Ht - 300 && scrollY <  mainHt + cont1Ht + cont2Ht - 300){
            section[2].classList.add('on');
            if(section[2].getAttribute('data-backcolor') === 'white'){
                wrap.classList.add('black');
            }else{
                wrap.classList.remove('black');
            }
        }
        if(scrollY >=  mainHt + cont1Ht + cont2Ht - 300 && scrollY < mainHt + cont1Ht + cont2Ht + cont3Ht - 500){
            section[3].classList.add('on');
            if(section[3].getAttribute('data-backcolor') === 'white'){
                wrap.classList.add('black');
            }else{
                wrap.classList.remove('black');
            }
        }
        if(scrollY >= mainHt + cont1Ht + cont2Ht + cont3Ht - 300 && scrollY <= mainHt + cont1Ht + cont2Ht + cont3Ht + cont4Ht){
            section[4].classList.add('on');
            if(section[4].getAttribute('data-backcolor') === 'white'){
                wrap.classList.add('black');
            }else{
                wrap.classList.remove('black');
            }
        }

    }



    //마우스휠을 다운할때 보여지는 화면 효과
    function pcDisplay(){
        console.log('피씨 디스클레이 ')
        headerWrap.classList.remove('onfooter');
        topBtn.classList.remove('on');
        slidingList.forEach(function(el){
            el.classList.remove('on');
        });
        document.querySelector('.scroll').style.display = "block";

        if(scrollY >= winHeight * 0 && scrollY < winHeight * 1){
            slidingA.forEach(function(el){
                el.classList.remove('on');
            });
            section[0].classList.add('on');
            slidingList[0].classList.add('on');

            slidingA[0].classList.add('on')
            if(section[0].getAttribute('data-backcolor') === 'white'){
                wrap.classList.add('black');
            }else{
                wrap.classList.remove('black');
            }
        }
        if(scrollY >= winHeight * 1 && scrollY < winHeight * 2){
            slidingA.forEach(function(el){
                el.classList.remove('on');
            });
            section[1].classList.add('on');
            slidingList[1].classList.add('on');
            slidingA[1].classList.add('on')
            if(section[1].getAttribute('data-backcolor') === 'white'){
                wrap.classList.add('black');
            }else{
                wrap.classList.remove('black');
            }
        }
        if(scrollY >= winHeight * 2 && scrollY < winHeight * 3){
            slidingA.forEach(function(el){
                el.classList.remove('on');
            });
            section[2].classList.add('on');
            slidingList[2].classList.add('on');
            slidingA[2].classList.add('on')
            if(section[2].getAttribute('data-backcolor') === 'white'){
                wrap.classList.add('black');
            }else{
                wrap.classList.remove('black');
            }
        }
        if(scrollY >= winHeight * 3 && scrollY < winHeight * 4){
            slidingA.forEach(function(el){
                el.classList.remove('on');
            });
            section[3].classList.add('on');
            slidingList[3].classList.add('on');
            slidingA[3].classList.add('on')
            if(section[3].getAttribute('data-backcolor') === 'white'){
                wrap.classList.add('black');
            }else{
                wrap.classList.remove('black');
            }
        }
        if(scrollY >= winHeight * 4 && scrollY <= winHeight * 5 || scrollY === footerTopScroll){
            slidingA.forEach(function(el){
                el.classList.remove('on');
            });
            section[4].classList.add('on');
            slidingList[4].classList.add('on');
            slidingA[4].classList.add('on')
            topBtn.classList.add('on');
            if(section[4].getAttribute('data-backcolor') === 'white'){
                wrap.classList.add('black');
            }else{
                wrap.classList.remove('black');
            }
            document.querySelector('.scroll').style.display = "none";
        }
        if(scrollY >= documentEndScroll){
            slidingList.forEach(function(el){
                el.classList.remove('on');
            });
            section[5].classList.add('on') 
            slidingA.forEach(function(el){
                el.classList.remove('on');
            });
            headerWrap.classList.add('onfooter');
            topBtn.classList.add('on');
            if(section[5].getAttribute('data-backcolor') === 'white'){
                wrap.classList.add('black');
            }else{
                wrap.classList.remove('black');
            }
            document.querySelector('.scroll').style.display = "none";
        }
    }

/*------------------------------------------------------------------------------------*/
/*pc버전*/

        // 마우스휠을 다운할 때 다음페이지로 이동
        // 마우스휠 다운할때 scrollY 값이 다운하는 시점으로 체크된다. 
        function moveScrollToDown(thisUpPage){
            if(thisUpPage === 'main'){
                window.scrollTo({
                    top: winHeight * 1 + 1,
                    behavior: 'smooth'
                }); 
            }
            if(thisUpPage === 'content1'){
                window.scrollTo({
                    top: winHeight * 2 + 1,
                    behavior: 'smooth'
                }); 
            }
            if(thisUpPage === 'content2'){
                window.scrollTo({
                    top: winHeight * 3 + 1,
                    behavior: 'smooth'
                }); section[2].classList.add('on');
            }
            if(thisUpPage === 'content3'){
                window.scrollTo({
                    top: winHeight * 4 + 1,
                    behavior: 'smooth'
                }); 
            }
            if(thisUpPage === 'content4'){
                window.scrollTo({
                    top: documentEndScroll,
                    behavior: 'smooth'
                }); 
                if(scrollY === documentEndScroll){
                    window.scrollTo({
                        top: footerTopScroll,
                        behavior: 'smooth'
                    }); 
                }
            }
        }
    

        //마우스휠을 업할 때 이전페이지로 이동
        function moveScrollToUp(thisUpPage){
            if(thisUpPage === 'main'){
                window.scrollTo({
                    top: winHeight * 0,
                    behavior: 'smooth'
                }); 
            }
            if(thisUpPage === 'content1'){
                window.scrollTo({
                    top: winHeight * 0,
                    behavior: 'smooth'
                }); 
            }
            if(thisUpPage === 'content2'){
                window.scrollTo({
                    top: winHeight * 1 + 1,
                    behavior: 'smooth'
                });
            }
            if(thisUpPage === 'content3'){
                window.scrollTo({
                    top: winHeight * 2 + 1,
                    behavior: 'smooth'
                }); 
            }
            if(thisUpPage === 'content4'){
                if(scrollY === documentEndScroll){    //content4인데 스크롤탑이 푸터에 있으면 content4로 이동
                    window.scrollTo({
                        top: footerTopScroll,
                        behavior: 'smooth'
                    }); 
                }else{
                    window.scrollTo({
                        top:winHeight * 3 + 1,
                        behavior: 'smooth'
                    }); 
                }
            }
            if(thisUpPage === 'footer'){   //footer
                window.scrollTo({
                    top: winHeight * 4 + 1,
                    behavior: 'smooth'
                }); 
            }
        }

        
    // 마우스휠 업/다운
    function renderScrollUpAndDown(){
        section.forEach(function(el){
            el.addEventListener('mousewheel',function(delta){
                if(delta.wheelDelta < 0){        //아래로 스크롤
                    var thisDownPage = this.getAttribute('data-pageName');
                    if(winWidth <= tabletLimit)return false;
                    moveScrollToDown(thisDownPage)
                }else{      //위로 스크롤
                    var thisUpPage = this.getAttribute('data-pageName')
                    if(winWidth <= tabletLimit)return false;
                    moveScrollToUp(thisUpPage);
                }
            });
        })
    }


/*------------------------------------------------------------------------------------*/
/* pc버전 */

    //주메뉴 마우스오버
    function mouseoverGnb(){
        gnbLi.forEach(function(el){
            el.addEventListener('mouseover',function(){
                headerWrap.classList.add('on');
                gnbEffect = setTimeout(() => {
                    gnbLi.forEach(function(li){
                        li.children[1].style.visibility = 'visible';
                        li.children[1].style.opacity = '1';
                        li.children[1].style.transform = 'translateY(0)';
                    })
                }, 300)
            });
            el.addEventListener('mouseout',function(){
                headerWrap.classList.remove('on');
                clearTimeout(gnbEffect);
            });
        })
        if(gnbBg.offsetHeight === 0){
            gnbLi.forEach(function(li){
                li.children[1].style.visibility = 'hidden';
                li.children[1].style.opacity = '0';
                li.children[1].style.transform = 'translateY(30px)';
            });
        }
    
    
        //gnb백그라운드에서 마우스 움직이면 헤더 on되기
        gnbBg.addEventListener('mousemove',function(){
            headerWrap.classList.add('on')
        })
    
    
        //섹션에서 마우스 움직이면 header와 주메뉴 효과/on 없애기
        // function sectionMousemove(){
    
        // }
        section.forEach(function(el){
            el.addEventListener('mousemove',function(){
                
                gnbLi.forEach(function(li){
                    li.children[1].style.visibility = 'hidden';
                    li.children[1].style.opacity = '0';
                    li.children[1].style.transform = 'translateY(30px)';
                });
                clearTimeout(gnbEffect);
                headerWrap.classList.remove('on');
                
            })
        });
    
    
        //바디를 벗어나면 주메뉴와 헤더 효과/on 없애기. 
        //mouseleave를 이용하여 넓은 범위인 본인과 하위요소를 벗어나면 이벤트가 발생한다.
        document.body.addEventListener('mouseleave',function(){
            gnbLi.forEach(function(li){
                li.children[1].style.visibility = 'hidden';
                li.children[1].style.opacity = '0';
                li.children[1].style.transform = 'translateY(30px)';
            });
            headerWrap.classList.remove('on');
            clearTimeout(gnbEffect);
        })
    }


    
/*------------------------------------------------------------------------------------*/
/*공통*/

    //햄거버 버튼 클릭시
    hamBtn.addEventListener('click',function(e){
        allmenuWrap.classList.toggle('on');
        // gnb, aside글씨 안보이게
        gnb.classList.toggle('on');
        wrap.classList.toggle('hamBlack');
        hamBtn.children[0].classList.toggle('on')
        // includes : javascript에서 특정 문자열이 존재하면 true, 존재하지 않으면 false를 반환
        // indexOf는 존재하면 가장 처음에 위치하는 index를 반환한다. 존재하지 않으면 -1, 
        if(wrap.getAttribute('class').includes('hamBlack')){
            gnbLi.forEach(function(li){
                li.children[1].style.visibility = 'hidden';
                li.children[1].style.opacity = '0';
                li.children[1].style.transform = 'translateY(30px)';
            });
            headerWrap.classList.remove('on');
            clearTimeout(gnbEffect);
        }
    }); 


/*------------------------------------------------------------------------------------*/
/*공통*/

    // content1 마우스오버 효과
    // function content1Mouseover(){

    // }
    content1Li.forEach(function(el){
        var txtEffect;
        el.addEventListener('mouseover',function(){
            this.classList.add('on');
            //마우스오버되면 0.6초 뒤에 글씨 나타나기
            txtEffect = setTimeout(() => {
                this.children[1].style.opacity = '1';
                this.children[1].style.top = '25%';
            }, 600);
        });
        el.addEventListener('mouseout',function(){
            this.classList.remove('on')
            clearTimeout(txtEffect);
            this.children[1].style.opacity = '0';
            this.children[1].style.top = '25%';
        });
    });

/*------------------------------------------------------------------------------------*/
/*pc버전*/

    //슬라이딩 버튼 클릭시 해당페이지로 이동 
    function movePage(){
        slidingA.forEach(function(el){
            el.addEventListener('click',function(e){
                e.preventDefault();
                // 클릭한 버튼 인덱스 알아내기
                currentBtn = e.currentTarget;    //클릭 이벤트가 전달된 엘리먼트. this와 동일
                parentBox = currentBtn.parentElement;  //연결된 엘리먼트의 부모
                childBtn = parentBox.children;  //부모 엘리멘트의 자식 엘리민트들
                currentIdx = Array.from(childBtn).indexOf(currentBtn);  //Array.from : 유사 배열 객체나 반복 가능한 객체를 얕게 복사해 새로운 Array 객체를 만든다.
                if(currentIdx === 0){
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })
                }
                if(currentIdx === 1){
                    window.scrollTo({
                        top: winHeight * 1 + 1,
                        behavior: 'smooth'
                    })
                }
                if(currentIdx === 2){
                    window.scrollTo({
                        top: winHeight * 2 + 1,
                        behavior: 'smooth'
                    })
                }
                if(currentIdx === 3){
                    window.scrollTo({
                        top: winHeight * 3 + 1,
                        behavior: 'smooth'
                    })
                }
                if(currentIdx === 4){
                    window.scrollTo({
                        top: winHeight * 4 + 1,
                        behavior: 'smooth'
                    })
                }
            });
        });
    }

/*------------------------------------------------------------------------------------*/
/*공통*/

    // 탑버튼 클릭시 맨 위로 이동하기
    topBtn.addEventListener('click',function(e){
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

/*------------------------------------------------------------------------------------*/

    function init(){    //시작
        getSize();
        display()
    };

    window.addEventListener('scroll',function(event){
        getSize();
        display()

    },false);

    window.addEventListener('resize',function(){
        getSize();


    },false);

    init(); //초기화
}

