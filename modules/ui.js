export function city_reload(arr, place) {
  place.innerHTML = ''
  let city_modal = document.querySelector('.city_modal')
  let city_name_head = document.querySelector('.city_name')
  for(let item of arr) {
    let city_box = document.createElement('div')
    let city_name = document.createElement('p')

    city_box.classList.add('city_box')
  
    place.append(city_box)
    city_box.append(city_name)
  
    city_name.innerHTML = item

    city_box.onclick = () => {
      localStorage.setItem('city', item)
      city_modal.classList.add('hide')
      document.body.style.overflowY = 'visible'
      city_name_head.innerHTML = localStorage.getItem('city')
    }
  }
}

export function products(arr, place) {
  place.innerHTML = ''
  for(let products of arr) {
    let item = document.createElement('div')
    
    let img_box = document.createElement('div')
    let img = document.createElement('img')
    
    let name = document.createElement('p')
    
    let rating = document.createElement('div')
    let rating_star = document.createElement('img')
    let rating_text = document.createElement('p')
  
    let price_box = document.createElement('div')
    let price_per_month = document.createElement('span')
    let price_origin = document.createElement('span')
    let price_sale = document.createElement('p')
  
    let favourite = document.createElement('div')
    let favourite_img = document.createElement('img')
  
    let sale = document.createElement('p')
  
    let basket = document.createElement('button')
    let basket_img = document.createElement('img')
  
    place.append(item)
    item.append(img_box, name, rating, price_box, basket)
    img_box.append(img, favourite, sale)
    rating.append(rating_star, rating_text)
    price_box.append(price_per_month, price_origin, price_sale)
    favourite.append(favourite_img)
    basket.append(basket_img)

    item.classList.add('item')
    img_box.classList.add('img_box')
    name.classList.add('name')
    favourite.classList.add('favourite')
    rating.classList.add('rating')
    rating_star.classList.add('rating_star')
    rating_text.classList.add('rating_text')
    price_box.classList.add('price_box')
    price_per_month.classList.add('price_per_month')
    price_origin.classList.add('price_origin')
    price_sale.classList.add('price_sale')
    basket.classList.add('basket')
    
    img.src = products.media[0]
    name.innerHTML = products.title
    rating_text.innerHTML = products.rating
    price_per_month.innerHTML = `${(Math.round( products.price / 12))} сум/мес`
    price_origin.innerHTML = `${products.price} сум`
    price_sale.innerHTML = `${(products.price - (Math.round(products.price / 100) * products.salePercentage))} сум`
    if(products.salePercentage === 0) {
      price_sale.innerHTML = `${products.price} сум`
    }
    if(products.isBlackFriday === true) {
      sale.classList.add('sale')
      sale.innerHTML = 'Распродажа'
    }
    
    item.onclick = () => {
      location.assign(`/product/?id=${products.id}`)
    }
  }
}

export function list_tegs(arr, place) {
  place.innerHTML = ''
  let type_arr = []
  arr.forEach(item => {
    type_arr.push(item.type)
  })
  let filtered = type_arr.filter((value, index) => {
    return type_arr.indexOf(value) === index;
  })

  let isBlackFriday_img = document.createElement('img')
  let isBlackFriday = document.createElement('li')
  isBlackFriday_img.src = '/public/frame_sale.png'
  isBlackFriday_img.style.width = '25px'
  isBlackFriday.innerHTML = 'Рассрочка'
  isBlackFriday.prepend(isBlackFriday_img)
  isBlackFriday.classList.add('active')
  place.append(isBlackFriday)
  for(let item of filtered) {
    let teg = document.createElement('li')
    place.append(teg)
    teg.innerHTML = item
  }
}

export function header() {
  let header = document.querySelector('header')
  document.body.prepend(header)
  header.innerHTML = `
  <div class="container">
    <nav>
      <div class="head">
        <div class="left">
          <ul>
            <li><img src="/public/compass-icon.svg" alt=""><a class="city" href="#">Город: <button class="city_name">Ташкент</button></a></li>
            <li>Пункты выдачи</li>
          </ul>
        </div>
        <div class="title">
          <p>Доставим ваш заказ бесплатно - всего за 1 день!</p>
        </div>
        <div class="right">
          <ul>
            <li>Вопрос-ответ</li>
            <li>Мои заказы</li>
            <li><img src="/public/flag.svg" alt=""></img> Русский</li>
          </ul>
        </div>
      </div>

      <div class="header">
        <div class="left">
          <div class="logo">
            <a href="/"><img src="../public/uzum_market.svg" alt=""></a>
          </div>
          <div class="catalog">
            <p><img src="/public/div.rect.svg" alt="">Каталог</p>
          </div>
        </div>
        <div class="search">
          <input type="search">
          <button><img src="../public/search.svg" alt=""></button>
        </div>
        <div class="right">
          <ul>
            <li class="login_btn"><img src="/public/user.svg" alt="">Войти</li>
            <li><img src="/public/heart.svg" alt="">Избранное</li>
            <li><img src="/public/basket.svg" alt="">Корзина</li>
          </ul>
        </div>
      </div>
      
      <ul class="nav_catalog"></ul>
    
      </nav>
  </div>`
}