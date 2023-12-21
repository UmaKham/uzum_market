import {getData} from '../modules/helpers'
import {header, list_tegs} from '../modules/ui'

header()

let nav_catalog = document.querySelector('.nav_catalog')
getData('/goods')
  .then(res => {
    list_tegs(res.data, nav_catalog);
})

let product_id = location.search.split('=').at('-1')

getData(`/goods?id=${product_id}`)
  .then(res => {
    product(res.data[0]);
    console.log(res.data[0]);
  })

  function product (product) {
    document.querySelector('.product_img').style.background = `url(${product.media[0]}) no-repeat center / cover`
    
    document.querySelector('.rating_score').innerHTML = product.rating
    
    document.querySelector('.product_name').innerHTML = product.title
    
    let btn_box = document.querySelector('.buttons')
    if(product.type === 'Телевизоры') {
      document.querySelector('.size').innerHTML = product.dioganal[0]
      document.querySelector('.screen_size').innerHTML = 'Размер экрана:'
      for(let btn of product.dioganal) {
        let button = document.createElement('button')
        button.classList.add('dioganal')
        btn_box.append(button)
        button.innerHTML = btn
        button.onclick = () => {
          let buttons = document.querySelectorAll('.dioganal')
          document.querySelector('.size').innerHTML = button.innerHTML
          for(let active of buttons) {
            active.classList.remove('active')
          }
          button.classList.add('active')
        }
      }
      document.querySelector('.buttons button').classList.add('active')
    }

    let count = document.querySelector('.count')

    document.querySelector('.plus').onclick = () => {
      document.querySelector('.minus').disabled = false;
      count.innerHTML++
      document.querySelector('.price').innerHTML = `${(product.price * +count.innerHTML).toLocaleString('ru-RU')} сум`
    }
    document.querySelector('.minus').onclick = () => {
      if(count.innerHTML == '1') {
        document.querySelector('.minus').disabled = true;
      } else {
        count.innerHTML--
        document.querySelector('.price').innerHTML = `${(product.price * +count.innerHTML).toLocaleString('ru-RU')} сум`
      }
    }

    document.querySelector('.price').innerHTML = `${product.price.toLocaleString('ru-RU')} сум`

    document.querySelector('.description').innerHTML = product.description
  }