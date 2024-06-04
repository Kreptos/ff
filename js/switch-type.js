let switchBiz = document.getElementById('switch-business-type')
let switchProduct = document.getElementById('switch-product-type')
let switcher = document.getElementById('switch-type')
let bizType = document.getElementById('business-type')
let productType = document.getElementById('product-type')

switchBiz.addEventListener('click', function(){
    switchBiz.classList?.add('active')
    switchProduct.classList?.remove('active')

    bizType.classList?.add('active')
    productType.classList?.remove('active')
})

switchProduct.addEventListener('click', function(){
    switchProduct.classList?.add('active')
    switchBiz.classList?.remove('active')

    productType.classList?.add('active')
    bizType.classList?.remove('active')
})
