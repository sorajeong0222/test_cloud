(() => {


    const openBottomNav = document.querySelector('.bottom-nav');
    const tabList = document.querySelectorAll('.bottom-nav nav li');
    const contList = document.querySelectorAll('.tab-content');
    const navBack = document.querySelector('.bottom-nav-wrap'); 


    function tabHandler(e) {
        let _this = e.currentTarget;

        for (let i = 0; i < tabList.length; i++) {
            tabList[i].classList.remove('on');
            contList[i].classList.remove('on')
        }

        for (let i = 0; i < contList.length; i++) {
            if (contList[i].getAttribute('data-cont') == _this.getAttribute('data-title')) {
                tabList[i].classList.add('on');
                contList[i].classList.add('on');
            }
        }
    }

    for (let i = 0; i < tabList.length; i++) {
        tabList[i].addEventListener("click", tabHandler);
    }


    openBottomNav.addEventListener('click', (e) => {
        e.preventDefault()
        if (!openBottomNav.classList.contains('open')) {
            openBottomNav.style.height = `63%`;
            navBack.classList.add('open')
        }
    });

    window.onclick = function (e) {

        //bottom content close 
        if (e.target == navBack) {
            openBottomNav.style.height = "13%";
            navBack.classList.remove('open')
        }
    }
})();
