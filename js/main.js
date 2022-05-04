/* main.js */


window.onload = function(){     //DOM과 img등이 모두 로드된 후 실행
    // 엘리먼트 가져오는 곳
    const body = document.body;
    const wrap = document.querySelector('#wrap');
    const headerWrap = document.querySelector('.header_wrap');
    const gnb = document.querySelector('nav.gnb')
    const gnbLi = document.querySelectorAll('nav.gnb > ul > li');
    const hamBtn = document.querySelector('.ham_box');
    const allmenuWrap = document.querySelector('.allmenu_wrap');
    const section = document.querySelectorAll('section');
    const topBtn = document.querySelector('#footer .top');

    const tabletLimit = 1023;
    var mobileLimit = 767;
    
    let gnbEffect;
    let winWidth;
    let winHeight;
    let scrollY;
    let footerTopScroll;
    let documentEndScroll;

    //화면이동에 사용할 section top값
    let mainScrollTop,
        con1ScrollTop,
        con2ScrollTop,
        con3ScrollTop,
        con4ScrollTop,
        footerScrollTop

    
    //화면값 관리 (페이지 리사이징이나 스크롤할 때 업데이트가 필요한 데이터)
    function getSize(){
        winWidth = body.offsetWidth; 
        winHeight = body.offsetHeight;
        scrollY = window.pageYOffset;
        footerTopScroll = body.scrollHeight - body.offsetHeight - 230;
        documentEndScroll = body.scrollHeight - body.offsetHeight;

        
        mainScrollTop = section[0].getBoundingClientRect().top + scrollY;
        con1ScrollTop = section[1].getBoundingClientRect().top + scrollY;
        con2ScrollTop = section[2].getBoundingClientRect().top + scrollY;
        con3ScrollTop = section[3].getBoundingClientRect().top + scrollY;
        con4ScrollTop = section[4].getBoundingClientRect().top + scrollY;
        footerScrollTop = section[5].getBoundingClientRect().top + scrollY;

        console.log(footerTopScroll, footerScrollTop)
    };





/*------------------------------------------------------------------------------------*/
/*태블릿버전*/

    //검색영역 mouseover시 버튼색상 변경
    // document.querySelector('.srch_box').addEventListener('mouseover',function(){
    //     document.querySelector('.srch_box button').classList.add('on');
    // });



/*------------------------------------------------------------------------------------*/
/*공통*/
    const slideBtn = document.querySelectorAll('.sliding .pages a');
    const slideBtnName = document.querySelectorAll('.sliding_name');

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

    //태블릿 화면일때, 보여지는 화면 사이즈의 비율을 기준으로 보여주기
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
        if(scrollY >= con4ScrollTop*0.85 && scrollY < footerScrollTop){
            bgColorEffectsOfSection(4);
        }
    }

    //PC 화면일때
    function pcRender(){
        getSize();
        headerWrap.classList.remove('onfooter');
        topBtn.classList.remove('on');
        slideBtnName.forEach(function(el){
            el.classList.remove('on');
        });
        document.querySelector('.scroll').style.display = "block";

        if(scrollY >= mainScrollTop && scrollY < con1ScrollTop){
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
        if(scrollY >= con4ScrollTop && scrollY < footerScrollTop){
            bgColorEffectsOfSection(4);
            slideBtnOnClick(4);

            topBtn.classList.add('on');
            document.querySelector('.scroll').style.display = "none";
        }
        if(scrollY >= footerScrollTop){
            bgColorEffectsOfSection(5);

            slideBtn.forEach(function(el){
                el.classList.remove('on');
            });

            slideBtnName.forEach(function(el){
                el.classList.remove('on');
            });

            headerWrap.classList.add('onfooter');
            topBtn.classList.add('on');

            document.querySelector('.scroll').style.display = "none";
        }
    }

/*------------------------------------------------------------------------------------*/
/* 페이지 이동*/

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
        if(thisPage === 'main'){
            window.scrollTo({
                top: winHeight * 1 + 1,
                behavior: 'smooth'
            }); 
        }
        if(thisPage === 'content1'){
            window.scrollTo({
                top: winHeight * 2 + 1,
                behavior: 'smooth'
            }); 
        }
        if(thisPage === 'content2'){
            window.scrollTo({
                top: winHeight * 3 + 1,
                behavior: 'smooth'
            }); 
            section[2].classList.add('on');
        }
        if(thisPage === 'content3'){
            window.scrollTo({
                top: winHeight * 4 + 1,
                behavior: 'smooth'
            }); 
        }
        if(thisPage === 'content4'){
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
    function moveScrollWhelelToUp(thisPage){
        if(thisPage === 'main'){
            window.scrollTo({
                top: winHeight * 0,
                behavior: 'smooth'
            }); 
        }
        if(thisPage === 'content1'){
            window.scrollTo({
                top: winHeight * 0,
                behavior: 'smooth'
            }); 
        }
        if(thisPage === 'content2'){
            window.scrollTo({
                top: winHeight * 1 + 1,
                behavior: 'smooth'
            });
        }
        if(thisPage === 'content3'){
            window.scrollTo({
                top: winHeight * 2 + 1,
                behavior: 'smooth'
            }); 
        }
        if(thisPage === 'content4'){
            if(scrollY === documentEndScroll){    
                //content4인데 스크롤탑이 푸터에 있으면 content4로 이동
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
        if(thisPage === 'footer'){   //footer
            window.scrollTo({
                top: winHeight * 4 + 1,
                behavior: 'smooth'
            }); 
        }
    }

        



/*------------------------------------------------------------------------------------*/
/* pc버전 */

    //주메뉴 마우스오버
    // function mouseoverGnb(){
    //     gnbLi.forEach(function(el){
    //         el.addEventListener('mouseover',function(){
    //             headerWrap.classList.add('on');
    //             gnbEffect = setTimeout(() => {
    //                 gnbLi.forEach(function(li){
    //                     li.children[1].style.visibility = 'visible';
    //                     li.children[1].style.opacity = '1';
    //                     li.children[1].style.transform = 'translateY(0)';
    //                 })
    //             }, 300)
    //         });
    //         el.addEventListener('mouseout',function(){
    //             headerWrap.classList.remove('on');
    //             clearTimeout(gnbEffect);
    //         });
    //     })
    //     if(gnbBg.offsetHeight === 0){
    //         gnbLi.forEach(function(li){
    //             li.children[1].style.visibility = 'hidden';
    //             li.children[1].style.opacity = '0';
    //             li.children[1].style.transform = 'translateY(30px)';
    //         });
    //     }
    
    
        //gnb백그라운드에서 마우스 움직이면 헤더 on되기
        // gnbBg.addEventListener('mousemove',function(){
        //     headerWrap.classList.add('on')
        // })
    
    
        //섹션에서 마우스 움직이면 header와 주메뉴 효과/on 없애기
        // function sectionMousemove(){
    
        // }
        // section.forEach(function(el){
        //     el.addEventListener('mousemove',function(){
                
        //         gnbLi.forEach(function(li){
        //             li.children[1].style.visibility = 'hidden';
        //             li.children[1].style.opacity = '0';
        //             li.children[1].style.transform = 'translateY(30px)';
        //         });
        //         clearTimeout(gnbEffect);
        //         headerWrap.classList.remove('on');
                
        //     })
        // });
    
    
        //바디를 벗어나면 주메뉴와 헤더 효과/on 없애기. 
        //mouseleave를 이용하여 넓은 범위인 본인과 하위요소를 벗어나면 이벤트가 발생한다.
    //     document.body.addEventListener('mouseleave',function(){
    //         gnbLi.forEach(function(li){
    //             li.children[1].style.visibility = 'hidden';
    //             li.children[1].style.opacity = '0';
    //             li.children[1].style.transform = 'translateY(30px)';
    //         });
    //         headerWrap.classList.remove('on');
    //         clearTimeout(gnbEffect);
    //     })
    // }


    
/*------------------------------------------------------------------------------------*/
/*header*/

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
    // content1Li.forEach(function(el){
    //     var txtEffect;
    //     el.addEventListener('mouseover',function(){
    //         this.classList.add('on');
    //         //마우스오버되면 0.6초 뒤에 글씨 나타나기
    //         txtEffect = setTimeout(() => {
    //             this.children[1].style.opacity = '1';
    //             this.children[1].style.top = '25%';
    //         }, 600);
    //     });
    //     el.addEventListener('mouseout',function(){
    //         this.classList.remove('on')
    //         clearTimeout(txtEffect);
    //         this.children[1].style.opacity = '0';
    //         this.children[1].style.top = '25%';
    //     });
    // });

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

