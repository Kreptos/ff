// Хэдер, список номеров 
let arrowBtn = document.getElementsByClassName('info__arrow-btn')
for(let i = 0; i < arrowBtn.length; i++){
    let element = arrowBtn[i]
    element.addEventListener('click', function(e){
        let classList = element.parentElement.classList

        if(classList.value.includes('active'))
            classList.remove('active')
        else 
            classList.add('active')
    })
}

// Бургур меню
let burger = document.getElementById('burger')
let menu = document.getElementById('menu')
let closeBurger = document.getElementById('close-burger')

if(menu){
    burger.addEventListener('click', function(){
        if(!menu.classList.value.includes('active')){
            menu.classList.add('active')
        }
    })
    
    closeBurger.addEventListener('click', function(){
        menu.classList.remove('active')
    })


// Поиск по сайту
    let lens = document.getElementById('lens')
    let search = document.getElementById('search')
    let closeSearch = document.getElementById('close-search')

    lens.addEventListener('click',function(){
        if(!search.classList.value.includes('active')){
            search.classList.add('active')
        }
    })

    closeSearch.addEventListener('click',function(){
        search.classList.remove('active')
    })
}

//Сравнение, избранное
let matching = document.getElementsByClassName('matching')
let itemsModal = document.getElementById('items-modal')
let favorite = document.getElementsByClassName('favorites')

function findAncestor (el, cls) {
    while (!el.classList.contains(cls) && (el = el.parentElement));
    return el;
}

for(let i = 0; i < matching.length; i++){
    findAncestor(matching[i], 'items-parent').innerHTML += `
        <div class="popular-items__modal modal" id="items-modal">
            <div class="popular-items__modal-item">
                <img src="img/products/cup_1.png">
                <div class="name">Однослойный бумажный стакан 100 мл</div>
            </div>
            <div class="popular-items__modal-item">
                <img src="img/products/cup_1.png">
                <div class="name">Однослойный бумажный стакан 100 мл</div>
            </div>
            <div class="popular-items__modal-btns">
                <button class="secondary-btn">Очистить список</button>
                <button class="btn">Сравнить</button>
            </div>
        </div>`

    findAncestor(matching[i], 'items-parent').innerHTML += `
        <div class="favorites__modal modal">
            <div class="heading">Добавленно в избранное</div>
            <div class="favorite__item popular-items__modal-item">
                <img src="img/products/cup_1.png">
                <div class="name">Однослойный бумажный стакан 100 мл</div>
            </div>
        </div>
    `
}
for(let i = 0; i < matching.length; i++){
    let el = matching[i]
    
    
    el.addEventListener('click', function(){
        if(el.classList.value.includes('active')){
            el.classList.remove('active')
        }
        else{
            el.classList.add('active')
        }
    })

    let matchingModal = el.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.popular-items__modal')

    el.addEventListener('click', function(e){
            matchingModal.classList?.add('active')
            if(findAncestor(matchingModal, 'items-parent').offsetLeft > 200)
                matchingModal.style.left = (e.pageX - findAncestor(matchingModal, 'items-parent').offsetLeft - 500) + 'px'
            else if(e.pageX < 400)
                matchingModal.style.left = (e.pageX - 50) + 'px'
            else
                matchingModal.style.left = (e.pageX - findAncestor(matchingModal, 'items-parent').offsetLeft - 500) + 'px'
            matchingModal.style.top = (e.pageY - findAncestor(matchingModal, 'items-parent').offsetTop - 250) + 'px'
            setTimeout(()=>{
                matchingModal.classList?.remove('active')
            }, 3000)
    })

    // el.addEventListener('mouseout',function(){
    //     matchingModal.classList?.remove('active')
    // })
}
for(let i = 0; i < favorite.length; i++){
    let el = favorite[i]
    let favoriteModal = el.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.favorites__modal');

    el.addEventListener('click', function(e){
        if(el.classList.value.includes('active')){
            el.classList.remove('active')
        }
            
        else{
            el.classList.add('active')
            favoriteModal.classList?.add('active')
            favoriteModal.style.left = (e.pageX - findAncestor(favoriteModal, 'items-parent').offsetLeft - 400) + 'px'
            favoriteModal.style.top = (e.pageY - findAncestor(favoriteModal, 'items-parent').offsetTop - 150) + 'px'
            setTimeout(()=>{
                favoriteModal.classList?.remove('active')
            }, 3000)
        }
        
    })
}

// Купить в 1 клик
let buyModal = document.getElementsByClassName('quick-buy-modal')
let buyBtn = document.getElementsByClassName('popular-items__quick-buy')
for(let i = 0; i < buyBtn.length; i++){
    let el = buyBtn[i]
    let modal = findAncestor(el, 'items-parent').querySelector('.quick-buy-modal')
    let closeModal = modal.querySelector('.close-quick-buy-modal')
    closeModal.addEventListener('click', function(e){
        modal.classList.remove('active')
    })

    el.addEventListener('click', function(e){
        
        if(!modal.classList.value.includes('active')){
            modal.classList.add('active')
            // if(window.innerWidth <= 768 && !modal.classList.value.includes('modal-set-top'))
            //     modal.style.top = (e.pageY - findAncestor(modal, 'items-parent').offsetTop - 300) + 'px'
        }
    })
}

//Заказать звонок
let getCallModal = document.getElementById('get-call__modal')
let getCalls = document.getElementsByClassName('get-call')

    for(let i = 0; i < getCalls.length; i++){
        let getCall = getCalls[i]
        let el = getCallModal
        let getCallClose = el.querySelector('#close-get-call')
        let getCallSubmit = el.querySelector('#get-call-submit')
        let getCallSuccess = el.nextElementSibling
        let getCallSuccessClose = getCallSuccess.querySelector('#close-get-call-success')
        let heading = el.querySelector('.heading')
        if(getCall)
        getCall.addEventListener('click', function(){
            if(!el.classList.value.includes('active')){

                for(let j = 0; j < getCallModal.length; j++){
                    getCallModal[j].classList.remove('active')
                }
                if(getCall.classList.value.includes('get-questin')){
                    el.classList.add('question')
                    heading.innerHTML = 'Задать вопрос'
                }
                    
                el.classList.add('active')
            }
        })

        if(getCallClose)
        getCallClose.addEventListener('click', function(){
            if(el.classList.value.includes('active')){
                el.classList.remove('active')
                el.classList.remove('question')
                heading.innerHTML = 'Заказать звонок'
            }
            
        })

        if(getCallSubmit)
        getCallSubmit.addEventListener('click', function(){
            if(el.classList.value.includes('active')){
                el.classList.remove('active')
                el.classList.remove('question')
                heading.innerHTML = 'Заказать звонок'
            }
            getCallSuccess.classList.add('active')
        })

        if(getCallSuccessClose)
        getCallSuccessClose.addEventListener('click', function(){
            if(getCallSuccess.classList.value.includes('active')){
                getCallSuccess.classList.remove('active')
            }
        })
    }


// Сайд, все категории

let showAll = document.getElementById('show-all-categories')
let menuCatalog = document.getElementById('menu-categories')

if(showAll)
    showAll.addEventListener('click', function(){
        if(!menuCatalog.classList.value.includes('active'))
            menuCatalog.classList.add('active')
        else
            menuCatalog.classList.remove('active')
    })

// Фильтр

// let filterShowMore = document.getElementsByClassName('filter-show-more')
let filters = document.getElementsByClassName('filter')

if(filters)
    for(let i = 0; i < filters.length; i++){
        let filter = filters[i]
        let filterShowMore = filter.querySelector('.show-more')
        if(filterShowMore)
        filterShowMore.addEventListener('click', function(){
            if(filter.classList.value.includes('active')){
                filter.classList.remove('active')
                filterShowMore.innerHTML = 'Показать еще'
            }
            else{
                filter.classList.add('active')
                filterShowMore.innerHTML = 'Скрыть'
            }  
        })
    }

let sortModal = document.getElementsByClassName('sort__modal')
let sortModalBtn = document.getElementsByClassName('sort__modal-btn')
for(let i = 0; i < sortModalBtn.length; i++){
    let btn = sortModalBtn[i]
    let modal = btn.nextElementSibling

    btn.addEventListener('click', function(){
        
        if(modal.classList.value.includes('active'))
            modal.classList.remove('active')
        else
            modal.classList.add('active')
    })
}

let productFeature = document.querySelectorAll('.product-feature')

let productCharacteristics = document.querySelectorAll('.product-one__characteristics')
let productSpecification = document.querySelectorAll('.product-one__specification')
let productReview = document.querySelectorAll('.product-one__reviews')

if(productFeature && productCharacteristics[0]){
    productCharacteristics[0].addEventListener('click', function(){
        
        [].forEach.call(productFeature, function(el){
            el.classList.remove('active')
        });

        [].forEach.call(productCharacteristics, function(el){
            el.classList.add('active')
        });
        
    })
}

if(productSpecification[0]){
    productSpecification[0].addEventListener('click', function(){
        [].forEach.call(productFeature, function(el){
            el.classList.remove('active')
        });

        [].forEach.call(productSpecification, function(el){
            el.classList.add('active')
        });
    })
}

if(productReview[0]){
    productReview[0].addEventListener('click', function(){
        [].forEach.call(productFeature, function(el){
            el.classList.remove('active')
        });

        [].forEach.call(productReview, function(el){
            el.classList.add('active')
        });
    })
}
// FAQ

let faq = document.querySelectorAll('.faq__item')

if(faq){
    [].forEach.call(faq, function(el){
        let question = el.querySelector('.faq__question')
        question.addEventListener('click', function(){
            if(el.classList.value.includes('active'))
                el.classList.remove('active')
            else
                el.classList.add('active')
        })
    });
}

// Review

let review = document.querySelectorAll('.big-review')
let reviewContainer = document.querySelector('#review-container')
if(review){
    [].forEach.call(review, function(el){
        let showMore = el.querySelector('.show-more')
        showMore.addEventListener('click', function(){
            if(el.classList.value.includes('active')){
                el.classList.remove('active')
                el.parentElement.classList.remove('active')
                showMore.innerHTML = 'Читать полностью'
                reviewContainer.classList.remove('active')
            }
            else{
                el.classList.add('active')
                el.parentElement.classList.add('active')
                showMore.innerHTML = 'Скрыть'
                reviewContainer.classList.add('active')
            }
        })
    });
}

// Отображение товара

let displayVer = document.getElementById('display-vertical')
let displayHor = document.getElementById('display-horizontal')

let products = document.getElementById('products')

if(products){
    displayVer.addEventListener('click', function(){
        products.classList.remove('products-horizontal')
        displayVer.classList.add('active')
        displayHor.classList.remove('active')
    })

    displayHor.addEventListener('click', function(){
        products.classList.add('products-horizontal')
        displayHor.classList.add('active')
        displayVer.classList.remove('active')
    })
}

// Способы оплаты и о доставке

let aboutPayment = document.querySelector('#about-payment')
let aboutDelivery = document.querySelector('#about-delivery')

let modalPayment = document.querySelector('#modal-payment')
let modalDelivery = document.querySelector('#modal-delivery')

if(aboutPayment){
    let modalClose = modalPayment.querySelector('.product-modal__close')
    aboutPayment.addEventListener('click', function(){
        modalPayment.classList.add("active")
    })
    modalClose.addEventListener('click', function(){
        modalPayment.classList.remove('active')
    })
}
if(aboutDelivery){
    let modalClose = modalDelivery.querySelector('.product-modal__close')
    aboutDelivery.addEventListener('click', function(){
        modalDelivery.classList.add('active')
    })
    modalClose.addEventListener('click', function(){
        modalDelivery.classList.remove('active')
    })
}
// Rating
let stars = document.querySelectorAll('.star')
let flag = true
for(let i = 0; i < stars.length; i++){
    let el = stars[i]

    el.addEventListener('click', function(){
        flag = false
    })
    el.addEventListener('mouseover', function(){
        for(let j = i; j >= 0; j--){
            if(flag) stars[j].classList.add('active')
        }
    })
    el.addEventListener('mouseout', function(){
        for(let j = i; j >= 0; j--){
            if(flag) stars[j].classList.remove('active')
        }
    })
}

// Сравнение

let matchBtnPrev = document.getElementsByClassName('slider__prev')
let matchBtnNext = document.getElementsByClassName('slider__next')

let feature = document.getElementsByClassName('features__item')

if(feature && matchBtnNext[0] && matchBtnPrev[0]){
    let count = 0
    matchBtnNext[0].addEventListener("click", function(){
        console.log(feature)
        console.log(window.innerWidth)
        if(window.innerWidth <= 768){
            count -= 50
        }
        else if(window.innerWidth <= 500){
            count -= 100
        }
        else
            count -= 25

        for(let i = 0; i < feature.length; i++){
            let el = feature[i]
            el.style.left = count + '%'
            console.log(el)
        }
    })
    matchBtnPrev[0].addEventListener('click', function(){
        if(window.innerWidth <= 768){
            count += 50
        }
        else if(window.innerWidth <= 500){
            count += 100
        }
        else
            count += 25
            
        for(let i = 0; i < feature.length; i++){
            let el = feature[i]
            el.style.left = count + '%'
            console.log(el)
        }
    })
   

}

// История компании

let historyItem = document.querySelectorAll('.history__item');

[].forEach.call(historyItem, function(l){
    let el = l.querySelector('.history__year')

    el.addEventListener('click', function(){
        if(el.classList.value.includes('active')){
            console.log(el.classList)
            el.classList.remove('active')
        }
        else{
            for(let i = 0; i < historyItem.length; i++){
                let historyYear = historyItem[i].querySelector('.history__year')
                historyYear.classList.remove('active')
            }
            el.classList.add('active')
        }
    })
});