fetch('https://fakestoreapi.com/products')
.then(res => {
    return res.json()
})
.then (data => {
    var productList = document.querySelector('.product-list')
    
    data.forEach(item => {
        var productItem = document.createElement('div')
        productItem.classList.add('product-item')
    
        productItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="product-info">
                <div class="product-name">${item.title}</div>
                <div class="product-price">$${item.price}</div>
            </div>
        `
        productList.appendChild(productItem)
    })
})

var inputElement = document.querySelector('.search input')

inputElement.addEventListener('input', (e) => {
    var inputValue = e.target.value.trim().toLowerCase()

    var productDOM = document.querySelectorAll('.product-item')
    productDOM.forEach(item => {
        if (item.innerText.toLowerCase().includes(inputValue)) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
    
})