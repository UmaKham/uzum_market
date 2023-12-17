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
    
    console.log();
  }
}

export function list_tegs(arr, place) {
  place.innerHTML = ''
  for(let item of arr) {
    let teg = document.createElement('div')
    let title = document.createElement('div')
    let img = document.createElement('img')
    let p = document.createElement('p')
    let img_arrow = document.createElement('img')
  
    teg.classList.add('teg')
    title.classList.add('title')
  
    place.append(teg)
    teg.append(title, img_arrow)
    title.append(img, p)

    p.innerHTML = item.name_ru
    img.src = item.img_src
    img_arrow.src = 'https://www.svgrepo.com/show/497722/arrow-right-1.svg'
  }
}