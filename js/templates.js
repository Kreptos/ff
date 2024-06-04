class MyHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <div class="info">
                <div class="left-block">
                    <a href="#" class="info__location"><img src="img/icon/balloon.svg"><span>Екатеринбург</span></a>
                    <div class="info__socials">
                        <a href="#" class="info__social"><img src="img/icon/youtube.svg" alt="YouTube"></a>
                        <a href="#" class="info__social"><img src="img/icon/vk.svg" alt="VK"></a>
                    </div>
                </div>
    
                <div class="right-block">
                    <div class="info__phone">
                        <img src="img/icon/arrow_down.svg" class="info__arrow-btn">
                        <a href="#">8 800 222 71 39</a>
                        <div class="info__another-phones">
                            <a href="#">8 800 222 71 39</a>
                            <a href="#">8 800 222 71 39</a>
                        </div>
                    </div>
                    <div class="info__phone">
                        <img src="img/icon/arrow_down.svg" class="info__arrow-btn">
                        <a href="#">8 343 363 45 05</a>
                        <div class="info__another-phones">
                            <a href="#">8 343 363 45 03</a>
                            <a href="#">8 343 363 45 02</a>
                        </div>
                    </div>
                    <div href="#" class="info__email">foodface.ru@gmail.com</div>
                    <button class="info__get-call get-call" id="get-call">Заказать звонок</button>
                </div>
            </div>
            <div class="main">
                <div class="left-block">
                    <a href="index.html" class="main__logo">
                        <img src="img/icon/logo.svg" alt="FoodFace">
                        <div class="main__label">Бережем природу<br/> - мать свою!</div>
                    </a>
                </div>
                <div class="right-block">
                    <div class="main__search">
                        <form action="">
                            <input type="text">
                            <button type="submit"><img src="img/icon/search.svg"></button>
                        </form>
                    </div>
                    <div class="main__matching main__tools">
                        <span class="product-count">2</span>
                        <button class="matching-btn tools-btn">
                            <svg class="icon"><use href="#icon-matching"></use></svg>
                            <div class="main__text">Сравнение</div>
                        </button>
                    </div>
                    <div class="main__favorites main__tools">
                        <span class="product-count">2</span>
                        <button class="favorites-btn tools-btn">
                            <svg class="icon"><use href="#icon-heart"></use></svg>
                            <div class="main__text">Избранное</div>
                        </button>
                    </div>
                    <div class="main__shop main__tools" data-value="2">
                        <span class="product-count">2</span>
                        <button class="shop-btn tools-btn">
                            <svg class="icon"><use href="#icon-shop"></use></svg>
                            <div class="main__text">Корзина</div>
                        </button>
                        <div class="shop-modal modal">
                            <div class="shop-modal__title">
                                <div class="title">Ваша корзина</div>
                                <div class="subtitle">2 товара</div>
                            </div>
                            <div class="shop-modal__items">
                                <div class="shop-modal__item">
                                    <div class="info">
                                        <img class="item__img" src="img/products/cup_1.png">
                                        <div class="name">Однослойный бумажный стакан 100 мл</div>
                                        <img src="img/icon/trash.svg" class="delete__item">
                                    </div>
                                    <div class="amount">
                                        <div class="label">Количество</div>
                                        <div class="amount__control">
                                            <button><svg class="icon"><use href="#icon-minus"></use></svg></button>
                                            <div class="count">1000</div>
                                            <button><svg class="icon"><use href="#icon-plus"></use></svg></button>
                                        </div>
                                    </div>
                                    <div class="price">
                                        <div class="label">Цена</div>
                                        <div class="price__count">9000 р.</div>
                                    </div>
                                    <div class="additionally">В стоимость заказа не включена доставка</div>
                                </div>
                                <div class="shop-modal__item">
                                    <div class="info">
                                        <img class="item__img" src="img/products/cup_1.png">
                                        <div class="name">Однослойный бумажный стакан 100 мл</div>
                                        <img src="img/icon/trash.svg" class="delete__item">
                                    </div>
                                    <div class="amount">
                                        <div class="label">Количество</div>
                                        <div class="amount__control">
                                            <button><svg class="icon"><use href="#icon-minus"></use></svg></button>
                                            <div class="count">1000</div>
                                            <button><svg class="icon"><use href="#icon-plus"></use></svg></button>
                                        </div>
                                    </div>
                                    <div class="price">
                                        <div class="label">Цена</div>
                                        <div class="price__count">9000 р.</div>
                                    </div>
                                    <div class="additionally">В стоимость заказа не включена доставка</div>
                                </div>
                            </div>
                            <div class="shop-modal__total">
                                <div class="shop-modal__total-price">
                                    <div class="label">Итого:</div>
                                    <div class="total-price">18 000 р.</div>
                                </div>
                                <div class="shop-modal__btns">
                                    <button class="secondary-btn">Очистить все</button>
                                    <button class="btn">Оформить заказ</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="nav">
                <div class="left-block">
                    <div class="nav__menu">
                        <a href="catalog-product.html"><svg class="icon icon-menu" style="height:12px;"><use href="#icon-menu"></use></svg><span>Каталог</span></a>
                        <a href="#"><svg class="icon icon-check"><use href="#icon-check"></use></svg><span>Акции</span></a>
                    </div>
                </div>
                <div class="right-block">
                    <div class="nav__main-nav">
                        <a href="#">О компании</a>
                        <a href="#">Контакты</a>
                        <a href="#">Доставка и оплата</a>
                        <a href="#">Вопрос-ответ</a>
                        <a href="#">Услуги</a>
                        <a href="#">Отзывы</a>
                        <a href="#">Новости</a>
                    </div>
                </div>
            </nav>
        `
    }
}
customElements.define('my-header', MyHeader)

class MyHeaderMobile extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <div class="info wrapper">
            <a href="#" class="info__location"><img src="img/icon/balloon.svg"><span>Екатеринбург</span></a>
            <div class="info__phone">
                <img src="img/icon/arrow_down.svg" class="info__arrow-btn">
                <a href="#">8 800 222 71 39</a>
                <div class="info__another-phones">
                    <a href="#">8 800 222 71 39</a>
                    <a href="#">8 800 222 71 39</a>
                </div>
            </div>
    </div>
    <div class="wrapper">
        <div class="toolbar">
            <div class="toolbar__burger" id="burger">
                <button class="burger-menu"><img src="img/icon/burger.svg"></button>
                <span>МЕНЮ</span>
            </div>
            <div class="toolbar__logo">
                <img src="img/icon/logo_mobile.svg">
            </div>
            <div class="toolbar__tools">
                <button id="lens"><img src="img/icon/search.svg"></button>
                <button><img src="img/icon/phone.svg"></button>
                <button><svg class="icon icon-shop"><use href="#icon-shop"></use></svg></button>
            </div>
        </div>
    </div>
    <div class="menu wrapper" id="menu">
        <button class="menu__close" id="close-burger"><img src="img/icon/close.svg"></button>
        <div class="menu__toolbar">
            <a href="#"><svg class="icon icon-check"><use href="#icon-check"></use></svg><span>Акции</span></a>
            <a href="#"><svg class="icon icon-heart"><use href="#icon-heart"></use></svg><span>Избранное</span></a>
        </div>
        <div class="menu__catalog">
            <div class="catalog__item">
                <svg id="coffee" class="catalog__svg" viewBox="0 0 45 44" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <mask id="coffee_mask" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="45" height="44">
                    <rect width="45" height="44" fill="url(#coffee_pattern)"/>
                    </mask>
                    <g mask="url(#coffee_mask)">
                    <rect class="catalog__icon" width="45" height="44" fill="#80542F"/>
                    </g>
                    <defs>
                    <pattern id="coffee_pattern" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use href="#coffee_img" transform="translate(0 -0.0113636) scale(0.00195312 0.00199751)"/>
                    </pattern>
                    <image id="coffee_img" width="512" height="512" href="img/catalog/coffee.png"/>
                    </defs>
                </svg>
                <span>Стаканы</span>
            </div>
            <div class="catalog__item">
                <svg id="dish" class="catalog__svg" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <mask id="dish_mask" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="45" height="44">
                    <rect width="45" height="44" fill="url(#dish_pattern)"/>
                    </mask>
                    <g mask="url(#dish_mask)">
                    <rect class="catalog__icon" width="45" height="44" fill="#80542F"/>
                    </g>
                    <defs>
                    <pattern id="dish_pattern" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use href="#dish_img" transform="translate(0 -0.0113636) scale(0.00195312 0.00199751)"/>
                    </pattern>
                    <image id="dish_img" width="512" height="512" href="img/catalog/dish.png"/>
                    </defs>
                    </svg>
                    
                <span>Тарелки</span>
            </div>
            <div class="catalog__item">
                <svg id="wok" class="catalog__svg" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <mask id="wok_mask" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="45" height="44">
                    <rect width="45" height="44" fill="url(#wok_pattern)"/>
                    </mask>
                    <g mask="url(#wok_mask)">
                    <rect class="catalog__icon" width="45" height="44" fill="#80542F"/>
                    </g>
                    <defs>
                    <pattern id="wok_pattern" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use href="#wok_img" transform="translate(0 -0.0113636) scale(0.00195312 0.00199751)"/>
                    </pattern>
                    <image id="wok_img" width="512" height="512" href="img/catalog/wok.png"/>
                    </defs>
                </svg>
                <span>Коробки WOK</span>
            </div>
            <div class="catalog__item">
                <svg id="rolls" class="catalog__svg" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <mask id="rolls_mask" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="45" height="44">
                    <rect width="45" height="44" fill="url(#rolls_pattern)"/>
                    </mask>
                    <g mask="url(#rolls_mask)">
                    <rect class="catalog__icon" width="45" height="44" fill="#80542F"/>
                    </g>
                    <defs>
                    <pattern id="rolls_pattern" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use href="#rolls_img" transform="translate(0 -0.0113636) scale(0.00195312 0.00199751)"/>
                    </pattern>
                    <image id="rolls_img" width="512" height="512" href="img/catalog/rolls.png"/>
                    </defs>
                    </svg>
                    
                <span>Коробки для роллов</span>
            </div>
            <div class="catalog__item">
                <svg id="ice-cream" class="catalog__svg" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <mask id="ice-cream_mask" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="45" height="44">
                    <rect width="45" height="44" fill="url(#ice-cream_pattern)"/>
                    </mask>
                    <g mask="url(#ice-cream_mask)">
                    <rect class="catalog__icon" width="45" height="44" fill="#80542F"/>
                    </g>
                    <defs>
                    <pattern id="ice-cream_pattern" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use href="#ice-cream_img" transform="translate(0 -0.0113636) scale(0.00195312 0.00199751)"/>
                    </pattern>
                    <image id="ice-cream_img" width="512" height="512" href="img/catalog/ice-cream.png"/>
                    </defs>
                </svg>
                <span>Упаковка для мороженного</span>
            </div>
            <div class="catalog__item">
                <svg id="kebab" class="catalog__svg" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <mask id="kebab_mask" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="45" height="44">
                    <rect width="45" height="44" fill="url(#kebab_pattern)"/>
                    </mask>
                    <g mask="url(#kebab_mask)">
                    <rect class="catalog__icon" width="45" height="44" />
                    </g>
                    <defs>
                    <pattern id="kebab_pattern" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use href="#kebab_img" transform="translate(0 -0.0113636) scale(0.00195312 0.00199751)"/>
                    </pattern>
                    <image id="kebab_img" width="512" height="512" href="img/catalog/kebab.png"/>
                    </defs>
                </svg>
                    
                <span>Упаковка для фастфуда</span>
            </div>
            <div class="catalog__item">
                <svg id="box-window" class="catalog__svg" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <mask id="box-window_mask" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="45" height="44">
                    <rect width="45" height="44" fill="url(#box-window_pattern)"/>
                    </mask>
                    <g mask="url(#box-window_mask)">
                    <rect class="catalog__icon" width="45" height="44" fill="#80542F"/>
                    </g>
                    <defs>
                    <pattern id="box-window_pattern" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use href="#box-window_img" transform="translate(0 -0.0113636) scale(0.00195312 0.00199751)"/>
                    </pattern>
                    <image id="box-window_img" width="512" height="512" href="img/catalog/box-window.png"/>
                    </defs>
                </svg>
                    
                <span>Коробки с окошком</span>
            </div>
            <div class="catalog__item">
                <svg id="pizza" class="catalog__svg" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <mask id="pizza_mask" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="45" height="44">
                    <rect width="45" height="44" fill="url(#pizza_pattern)"/>
                    </mask>
                    <g mask="url(#pizza_mask)">
                    <rect class="catalog__icon" width="45" height="44" fill="#80542F"/>
                    </g>
                    <defs>
                    <pattern id="pizza_pattern" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use href="#pizza_img" transform="translate(0 -0.0113636) scale(0.00195312 0.00199751)"/>
                    </pattern>
                    <image id="pizza_img" width="512" height="512" href="img/catalog/pizza.png"/>
                    </defs>
                    </svg>
                    
                <span>Коробки для пиццы и пирогов</span>
            </div>
            <div class="catalog__item">
                <svg id="sugar" class="catalog__svg" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <mask id="sugar_mask" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="45" height="44">
                    <rect width="45" height="44" fill="url(#sugar_pattern)"/>
                    </mask>
                    <g mask="url(#sugar_mask)">
                    <rect class="catalog__icon" width="45" height="44" fill="#80542F"/>
                    </g>
                    <defs>
                    <pattern id="sugar_pattern" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use href="#sugar_img" transform="translate(0 -0.0113636) scale(0.00195312 0.00199751)"/>
                    </pattern>
                    <image id="sugar_img" width="512" height="512" href="img/catalog/sugar.png"/>
                    </defs>
                </svg>
                    
                <span>Порционные стики (сахар, соль, перец)</span>
            </div>
            <div class="catalog__item">
                <svg id="lens-cap" class="catalog__svg" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <mask id="lens-cap_mask" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="45" height="44">
                    <rect width="45" height="44" fill="url(#lens-cap_pattern)"/>
                    </mask>
                    <g mask="url(#lens-cap_mask)">
                    <rect class="catalog__icon" width="45" height="44" fill="#80542F"/>
                    </g>
                    <defs>
                    <pattern id="lens-cap_pattern" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use href="#lens-cap_img" transform="translate(0 -0.0113636) scale(0.00195312 0.00199751)"/>
                    </pattern>
                    <image id="lens-cap_img" width="512" height="512" href="img/catalog/lens-cap.png"/>
                    </defs>
                    </svg>
                    
                <span>Аксессуары для стаканов</span>
            </div>
            <div class="catalog__item">
                <svg id="package" class="catalog__svg" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <mask id="package_mask" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="45" height="44">
                    <rect width="45" height="44" fill="url(#package_pattern)"/>
                    </mask>
                    <g mask="url(#package_mask)">
                    <rect class="catalog__icon" width="45" height="44" fill="#80542F"/>
                    </g>
                    <defs>
                    <pattern id="package_pattern" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use href="#package_img" transform="translate(0 -0.0113636) scale(0.00195312 0.00199751)"/>
                    </pattern>
                    <image id="package_img" width="512" height="512" href="img/catalog/food-package.png"/>
                    </defs>
                    </svg>
                    
                <span>Нестандартные решения</span>
            </div>
            <button class="catalog__item samples-btn get-call" id="get-call">Заказать бесплатные образцы</button>
        </div>
        <div class="menu__nav">
            <a href="#">О компании</a>
            <a href="#">Контакты</a>
            <a href="#">Доставка и оплата</a>
            <a href="#">Вопрос-ответ</a>
            <a href="#">Услуги</a>
            <a href="#">Отзывы</a>
            <a href="#">Новости</a>
        </div>
        <div class="menu__info">
            <span>8 800 222 71 39</span>
            <span>foodface.ru@gmail.com</span>
        </div>
        <div class="menu__social">
            <a href="#"><img src="img/icon/youtube.svg" alt="YouTube"></a>
            <a href="#"><img src="img/icon/vk.svg" alt="VK"></a>
        </div>
        <div class="menu__get-call">
            <button class="get-call__btn get-call" id="get-call">Заказать обратный звонок</button>
        </div>
    </div>
    <div class="search wrapper" id="search"> 
        <button class="search__close" id="close-search"><img src="img/icon/close.svg"></button>

        <div class="heading">Поиск по сайту</div>

        <form class="search__form">
            <label class="title">Введите запрос</label>
            <input type="text" placeholder="Однослойный стакан">
        </form>
        <div class="popular-queries">
            <div class="title">Популярные запросы</div>
            <div class="popular-queries__container">
                <div class="popular-queries__query">Бумажные стаканы однослойные</div>
                <div class="popular-queries__query">Упаковка для роллов</div>
                <div class="popular-queries__query">Упаковка WOK</div>
                <div class="popular-queries__query">Упаковка для фаст-фуда</div>
            </div>
        </div>
    </div>
        `
    }
}
customElements.define('my-header-mobile', MyHeaderMobile)

class MyFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <div class="get-request">
            <div class="heading-container">
                <div class="heading">Остались вопросы?</div>
            </div>
            <div class="get-request__text">
                Оставьте заявку, специалист нашей компании свяжется<br/>
                с вами и проконсультирует по любым вопросам
            </div>
            <button class="secondary-btn get-questin get-call">Задать вопрос</button>
        </div>
        <div class="get-request_background"></div>
        <div class="footer__container">
            <div class="left-block">
                <div class="logo">
                    <img src="img/icon/logo.svg" alt="FoodFace">
                    <div class="label">Дескриптор<br/> магазина</div>
                </div>
                <div class="privacy-policy">
                    <a href="#">Пользовательское соглашение</a>
                    <a href="#">Политика конфиденциальности</a>
                </div>
            </div>
            <div class="right-block">
                <div class="catalog">
                    <div class="catalog__title title">Каталог продукции</div>
                    <div class="catalog__products">
                        <div class="catalog__block">
                            <div class="catalog__item link"><a href="#">Стаканы</a></div>
                            <div class="catalog__item link"><a href="#">Тарелки</a></div>
                            <div class="catalog__item link"><a href="#">Коробки WOK</a></div>
                            <div class="catalog__item link"><a href="#">Коробки для роллов</a></div>
                            <div class="catalog__item link"><a href="#">Упаковка для мороженого</a></div>
                            <div class="catalog__item link"><a href="#">Упаковка для фаст-фуда</div>
                        </div>
                        <div class="catalog__block">
                            <div class="catalog__item link"><a href="#">Коробки для пиццы</a></div>
                            <div class="catalog__item link"><a href="#">Коробки для пирогов</a></div>
                            <div class="catalog__item link"><a href="#">Порционные стики</a></div>
                            <div class="catalog__item link"><a href="#">Коробки с окошком</a></div>
                            <div class="catalog__item link"><a href="#">Нестандартные решения</a></div>
                            <div class="catalog__item link"><a href="#">Аксессуары для стаканов</a></div>
                        </div>
                    </div>
                </div>
                <div class="info-wrapper">
                    <div class="info">
                        <div class="info__title title">Информация</div>
                        <div class="info__container">
                            <div class="info__item link"><a href="#">О компании</a></div>
                            <div class="info__item link"><a href="#">Услуги</a></div>
                            <div class="info__item link"><a href="#">Отзывы</a></div>
                            <div class="info__item link"><a href="#">Вопрос-ответ</a></div>
                            <div class="info__item link"><a href="#">Новости</a></div>
                            <div class="info__item link"><a href="#">Доставка и оплата</a></div>
                            <div class="info__item link"><a href="#">Контакты</a></div>
                        </div>
                    </div>
                    <div class="contacts">
                        <div class="address">Екатеринбург, <br/>ул. 8 марта, 267/3</div>
                        <div class="email">foodface.ru@gmail.com</div>
                        <button class="secondary-btn get-call">Обратный звонок</button>
                        <div class="phone">8 343 363 45 05</div>
                        <div class="phone">8 800 222 71 39</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="get-call__modal modal" id="get-call__modal">
            <button class="get-call__close" id="close-get-call"><img src="img/icon/close.svg"></button>
            <div class="heading">Заказать звонок</div>
            <div class="get-call__form">
                <form action="#" class="form">
                    <label for="name">ФИО*</label>
                    <input type="text" id="name" placeholder="Иванов Иван Иванович">
                    <label for="number">Ваш телефон*</label>
                    <input type="text" id="number" name="phone" placeholder="+7">
                    <label class="your-question">Ваш вопрос</label>
                    <textarea class="your-question"></textarea>
                    <button class="btn" type="button" id="get-call-submit">Задать вопрос</button>
                    <div class="agreement">
                        <input type="checkbox" id="agree">
                        <span class="checkmark"></span>
                        <label for="agree">Я согласен(-а) на <a href="#">обработку персональных данных</a></label>
                    </div>
                </form>
            </div>
        </div>
        <div class="get-call__success modal" id="get-call__success">
            <button class="get-call__close" id="close-get-call-success"><img src="img/icon/close.svg"></button>
            <div class="get-call__message">
                Благодарим за заявку! 
                В ближайшее время наш менеджер свяжется с вами
            </div>
        </div>
        `
    }
}
customElements.define('my-footer', MyFooter)

class MyIcons extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <div class="icons" style="display: none;">
        <svg id="icon-matching" viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 16H15V6H18V16ZM13 16H10V3H13V16ZM8 16H5V0H8V16ZM3 16H0V8H3V16Z"/>
        </svg>
        <svg id="icon-heart" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 18C9.35502 17.428 8.62602 16.833 7.85502 16.2H7.84502C5.13002 13.98 2.05302 11.468 0.694023 8.45803C0.24754 7.49975 0.0109268 6.45715 1.1406e-05 5.40003C-0.00297039 3.94951 0.578794 2.55901 1.61383 1.54279C2.64887 0.526575 4.04981 -0.0295798 5.50002 2.56451e-05C6.68065 0.00189045 7.83586 0.343107 8.82802 0.983026C9.26399 1.26599 9.65844 1.60828 10 2.00003C10.3435 1.60982 10.7381 1.26773 11.173 0.983026C12.1648 0.34298 13.3197 0.0017442 14.5 2.56451e-05C15.9502 -0.0295798 17.3512 0.526575 18.3862 1.54279C19.4213 2.55901 20.003 3.94951 20 5.40003C19.9898 6.45884 19.7532 7.50322 19.306 8.46303C17.947 11.473 14.871 13.984 12.156 16.2L12.146 16.208C11.374 16.837 10.646 17.432 10.001 18.008L10 18ZM5.50002 2.00003C4.56853 1.98837 3.67009 2.34487 3.00002 2.99203C2.35441 3.62619 1.99358 4.49507 1.99994 5.40003C2.01135 6.17053 2.18585 6.92988 2.51202 7.62803C3.15353 8.92673 4.01913 10.1021 5.06902 11.1C6.06002 12.1 7.20002 13.068 8.18602 13.882C8.45902 14.107 8.73702 14.334 9.01502 14.561L9.19002 14.704C9.45702 14.922 9.73302 15.148 10 15.37L10.013 15.358L10.019 15.353H10.025L10.034 15.346H10.039H10.044L10.062 15.331L10.103 15.298L10.11 15.292L10.121 15.284H10.127L10.136 15.276L10.8 14.731L10.974 14.588C11.255 14.359 11.533 14.132 11.806 13.907C12.792 13.093 13.933 12.126 14.924 11.121C15.9741 10.1236 16.8397 8.94854 17.481 7.65003C17.8131 6.94583 17.9901 6.17853 18.0001 5.40003C18.0042 4.49786 17.6435 3.63232 17 3.00003C16.3312 2.34995 15.4326 1.99051 14.5 2.00003C13.3619 1.99035 12.274 2.46739 11.51 3.31103L10 5.05103L8.49002 3.31103C7.72609 2.46739 6.6381 1.99035 5.50002 2.00003Z"/>
        </svg>
        <svg id="icon-shop" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 18"
        preserveAspectRatio="xMidYMid meet">
            <g
            stroke="none">
            <path d="M190 5111 c-45 -14 -84 -39 -116 -73 -52 -55 -68 -95 -69 -173 0 -80
            19 -128 72 -181 65 -65 79 -69 289 -72 l191 -3 222 -1111 223 -1111 -275 -276
            c-251 -252 -279 -282 -310 -349 -99 -206 -60 -432 102 -591 l67 -66 -28 -80
            c-104 -287 -24 -609 204 -820 341 -316 879 -257 1148 128 124 176 169 417 115
            617 -8 30 -15 58 -15 63 0 4 248 7 550 7 303 0 550 -3 550 -7 0 -5 -7 -33 -15
            -63 -54 -199 -9 -442 114 -617 310 -441 952 -441 1261 0 65 91 106 195 127
            314 38 228 -36 473 -199 649 -85 93 -230 178 -367 217 l-76 22 -1540 3 -1539
            3 254 254 255 255 1255 0 1255 0 50 24 c28 12 65 40 83 60 20 23 245 462 560
            1092 l527 1055 0 72 c-1 104 -47 180 -140 230 l-40 22 -1927 3 -1928 2 -5 23
            c-3 12 -19 89 -35 171 -33 162 -57 217 -113 260 -69 53 -95 56 -416 55 -163 0
            -307 -4 -321 -8z m4250 -1021 c0 -6 -171 -352 -380 -770 l-380 -760 -1095 0
            -1095 0 -5 23 c-26 107 -301 1508 -297 1512 10 10 3252 5 3252 -5z m-3055
            -3089 c133 -62 188 -228 118 -353 -102 -181 -348 -180 -447 2 -52 96 -36 212
            42 294 52 54 104 76 182 76 42 0 79 -7 105 -19z m2560 0 c133 -62 188 -228
            118 -353 -102 -181 -348 -180 -447 2 -52 96 -36 212 42 294 52 54 104 76 182
            76 42 0 79 -7 105 -19z"/>
            </g>
        </svg>
        <svg id="icon-menu" viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12H0V10H12V12ZM18 7H0V5H18V7ZM12 2H0V0H12V2Z"/>
        </svg>
        <svg id="icon-check" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C19.9939 15.5203 15.5203 19.9939 10 20ZM9.984 18H10C14.4167 17.9956 17.9942 14.4127 17.992 9.996C17.9898 5.57929 14.4087 2 9.992 2C5.57528 2 1.99421 5.57929 1.992 9.996C1.98979 14.4127 5.56729 17.9956 9.984 18ZM8 15L4 11L5.41 9.59L8 12.17L14.59 5.58L16 7L8 15Z"/>
        </svg>        
        <svg id="icon-slider_arrow" viewBox="0 0 30 52" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.39498 51.455L29.85 26L4.39498 0.544952L0.149977 4.78695L21.366 26L0.149977 47.213L4.39498 51.455Z"/>
        </svg>
        <svg id="icon-minus" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 18H2C0.89543 18 0 17.1046 0 16V2C0 0.89543 0.89543 0 2 0H16C17.1046 0 18 0.89543 18 2V16C18 17.1046 17.1046 18 16 18ZM2 2V16H16V2H2ZM14 10H4V8H14V10Z" />
        </svg>
        <svg id="icon-plus" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 18H2C0.89543 18 0 17.1046 0 16V2C0 0.89543 0.89543 0 2 0H16C17.1046 0 18 0.89543 18 2V16C18 17.1046 17.1046 18 16 18ZM2 2V16H16V2H2ZM10 14H8V10H4V8H8V4H10V8H14V10H10V14Z"/>
        </svg>
        <svg id="icon-display_1" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 14H8V8H14V14ZM6 14H0V8H6V14ZM14 6H8V0H14V6ZM6 6H0V0H6V6Z"/>
        </svg>
        <svg id="icon-display_2" viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 0H18V2H8V0ZM8 4H14V6H8V4ZM8 10H18V12H8V10ZM8 14H14V16H8V14ZM0 0H6V6H0V0ZM2 2V4H4V2H2ZM0 10H6V16H0V10ZM2 12V14H4V12H2Z"/>
        </svg>
        <svg id="icon-filter" viewBox="0 0 14 12" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.33333 11.3333C3.11684 11.3339 2.05412 10.5112 1.75 9.33333H0.333333V8H1.75067C2.09709 6.6583 3.41341 5.8055 4.77952 6.03771C6.14563 6.26992 7.10625 7.50974 6.98991 8.89055C6.87357 10.2714 5.71904 11.333 4.33333 11.3333ZM4.33333 7.33333C3.60493 7.33407 3.01193 7.91923 3.00149 8.64756C2.99105 9.37589 3.56704 9.9778 4.29513 9.99941C5.02321 10.021 5.63389 9.45433 5.66667 8.72667V8.99333V8.66666C5.66667 7.93029 5.06971 7.33333 4.33333 7.33333ZM13.6667 9.33333H7.66667V8H13.6667V9.33333ZM7.66667 6C6.45042 6.00031 5.38806 5.17763 5.084 4H0.333333V2.66666H5.084C5.43043 1.32496 6.74674 0.472164 8.11285 0.704373C9.47896 0.936582 10.4396 2.17641 10.3232 3.55722C10.2069 4.93803 9.05237 5.99965 7.66667 6ZM7.66667 2C6.93826 2.00074 6.34526 2.5859 6.33482 3.31422C6.32438 4.04255 6.90038 4.64447 7.62846 4.66608C8.35654 4.68769 8.96722 4.121 9 3.39333V3.66V3.33333C9 2.59695 8.40305 2 7.66667 2ZM13.6667 4H11V2.66666H13.6667V4Z"/>
        </svg>
        <svg id="icon-share" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.4998 21.0001C14.4178 21.0126 13.3922 20.5182 12.7281 19.6638C12.064 18.8095 11.8378 17.6936 12.1168 16.6481L5.85685 13.0701C4.77513 14.0611 3.18953 14.2709 1.88733 13.5952C0.585139 12.9195 -0.156279 11.5023 0.0312147 10.0473C0.218708 8.59226 1.29518 7.40932 2.72612 7.08583C4.15707 6.76234 5.6377 7.3672 6.43285 8.60008L12.1158 5.35108C12.0423 5.07327 12.0034 4.78744 11.9998 4.50008C11.9855 2.8268 13.1476 1.37322 14.7831 1.0189C16.4185 0.664584 18.078 1.50683 18.7575 3.036C19.437 4.56517 18.9498 6.36131 17.5908 7.33759C16.2318 8.31387 14.3741 8.20217 13.1418 7.07008L6.99085 10.5851C6.98476 10.8444 6.94851 11.1021 6.88285 11.3531L13.1418 14.9301C14.2941 13.8726 16.0086 13.7094 17.3397 14.5304C18.6708 15.3514 19.2945 16.9568 18.8667 18.4611C18.4389 19.9654 17.0638 21.0024 15.4998 21.0001ZM15.4998 16.0001C14.6714 16.0001 13.9998 16.6717 13.9998 17.5001C13.9998 18.3285 14.6714 19.0001 15.4998 19.0001C16.3283 19.0001 16.9998 18.3285 16.9998 17.5001C16.9998 16.6717 16.3283 16.0001 15.4998 16.0001ZM3.49985 9.00008C2.67142 9.00008 1.99985 9.67165 1.99985 10.5001C1.99985 11.3285 2.67142 12.0001 3.49985 12.0001C4.32827 12.0001 4.99985 11.3285 4.99985 10.5001C4.99985 9.67165 4.32827 9.00008 3.49985 9.00008ZM15.4998 3.00008C14.6714 3.00008 13.9998 3.67165 13.9998 4.50008C13.9998 5.32851 14.6714 6.00008 15.4998 6.00008C16.3283 6.00008 16.9998 5.32851 16.9998 4.50008C16.9998 3.67165 16.3283 3.00008 15.4998 3.00008Z"/>
        </svg>
        <svg id="icon-circle-plus" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C19.9939 15.5203 15.5203 19.9939 10 20ZM2 10.172C2.04732 14.5732 5.64111 18.1095 10.0425 18.086C14.444 18.0622 17.9995 14.4875 17.9995 10.086C17.9995 5.68451 14.444 2.10977 10.0425 2.086C5.64111 2.06246 2.04732 5.59876 2 10V10.172ZM11 15H9V11H5V9H9V5H11V9H15V11H11V15Z"/>
        </svg>
        <svg id="icon-trash" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 20H4C2.89543 20 2 19.1046 2 18V5H0V3H4V2C4 0.89543 4.89543 0 6 0H12C13.1046 0 14 0.89543 14 2V3H18V5H16V18C16 19.1046 15.1046 20 14 20ZM4 5V18H14V5H4ZM6 2V3H12V2H6ZM12 16H10V7H12V16ZM8 16H6V7H8V16Z"/>
        </svg>
        <svg id="icon-star" viewBox="0 0 23 21" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.5 0L14.0819 7.9463H22.4371L15.6776 12.8574L18.2595 20.8037L11.5 15.8926L4.74047 20.8037L7.32238 12.8574L0.56285 7.9463H8.91809L11.5 0Z"/>
        </svg>
        
            
    </div>
        `
    }
}

customElements.define('my-icons', MyIcons)