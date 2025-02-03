$(function () {

    $(window).scroll(function(){

        if($('.menupopup').css("display","block")){
            $('.menupopup').css('display','none');
        }
        if($('.menupopup2').css("display","block")){
            $('.menupopup2').css('display','none');
        }


    })



   





    

    $('.menulistcontent a').click(function (e) {
        e.preventDefault();
        // 모든 메뉴 항목에서 'on' 클래스 제거
        $('.menulistcontent a').removeClass('on');
        // 클릭된 메뉴 항목에 'on' 클래스 추가
        $(this).addClass('on');
        // 모든 팝업 숨기기
        $('.mmenupopupwork').hide();
    });

    $('.clicktoprofile').click(function () {
        $('.profile').show();
    })







    $('.menu').click(function () {
        let index = $(this).index();
        $('.menupopup').eq(index).show(); // index에 해당하는 팝업 표시

        // 해당 메뉴팝업창안에 있는 메뉴리스트를 클릭하면
        $('.menupopup').eq(index).find('.menulistcontent a').click(function () {
            
            // 클릭된 항목의 부모 요소의 인덱스를 가져오기
            let idx = $(this).closest('.menulistcontent').index();
            console.log(idx)

            // 해당 인덱스의 팝업을 표시
            $('.menupopup').eq(index).find('.mmenupopupwork').eq(idx).show();
        })

        // 해당 메뉴팝업창안에 있는 첫번째 메뉴 항목 클릭 트리거
        $('.menupopup').eq(index).find('.menulistcontent a').eq(0).trigger('click');
    })

    $('.menu2').click(function () {
        let index = $(this).index();
        $('.menupopup2').eq(index).show(); // index에 해당하는 팝업 표시
        // 해당 메뉴팝업창안에 있는 메뉴리스트를 클릭하면
        $('.menupopup2').eq(index).find('.menulistcontent a').click(function () {
            // 클릭된 항목의 부모 요소의 인덱스를 가져오기
            let idx = $(this).closest('.menulistcontent').index();
            console.log(idx)
            // 해당 인덱스의 팝업을 표시
            $('.menupopup2').eq(index).find('.mmenupopupwork').eq(idx).show();
        })
        // 해당 메뉴팝업창안에 있는 첫번째 메뉴 항목 클릭 트리거
        $('.menupopup2').eq(index).find('.menulistcontent a').eq(0).trigger('click');
    })

    $('.menupopupxbutton').click(function () {
        $('.menupopup').hide();
        $('.menupopup2').hide();
    })

    $('.profilexbutton').click(function () {
        $('.profile').hide();
    })

    $('.thxxbutton').click(function () {
        $(this).parents('.thx').hide();
    })

    $('.thxcontent button').click(function () {
        $(this).parents('.thx').hide();
    })


});




(function () {
    const spanEl = document.querySelector('.section2 .stitle span');
    const spanEl2 = document.querySelector('.section4 .stitle span');
    const txt = '...'; // 점 애니메이션
    let currentTxt = ''; // 현재 표시 중인 텍스트
    let isAdding = true; // 점을 추가하는 중인지 여부

    function animateTxt() {
        if (isAdding) {
            // 점을 하나씩 추가
            if (currentTxt.length < txt.length) {
                currentTxt += txt[currentTxt.length]; // 다음 점 추가
                spanEl.textContent = currentTxt;
                spanEl2.textContent = currentTxt;
                setTimeout(animateTxt, 700); // 추가 속도
            } else {
                isAdding = false; // 모두 추가 완료 후 삭제 단계로 전환
                setTimeout(animateTxt, 0); // 유지 시간
            }
        } else {
            // 점을 한꺼번에 삭제
            currentTxt = ''; // 모든 점 삭제
            spanEl.textContent = currentTxt;
            spanEl2.textContent = currentTxt;
            isAdding = true; // 추가 단계로 전환
            setTimeout(animateTxt, 700); // 대기 시간
        }
    }

    animateTxt(); // 애니메이션 시작

    

})();


function handleScroll(scrollElement, transformFactor) {
    let transformX = -1 / 10 * window.scrollY + transformFactor * window.innerHeight / 10;

    if (transformX < -100) {
        scrollElement.style.transform = `translateX(-100vw)`;
    } else if (transformX < 0) {
        scrollElement.style.transform = `translateX(${transformX}vw)`;
    }
}

window.addEventListener('scroll', function() {
    handleScroll(document.querySelector('.scroll-box'), 3);   // 첫 번째 요소
    handleScroll(document.querySelector('.scroll-box2'), 6);  // 두 번째 요소
});
