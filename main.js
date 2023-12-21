import Swiper from "swiper";
import 'swiper/css'
import {getData} from './modules/helpers'
import {products, list_tegs, city_reload} from './modules/ui'

let my_swiper = new Swiper('.banner', {
  spaceBetween: 30,
  mousewheel: true,
  autoplay: {
    delay: 3000,
  },
})

let city_name_head = document.querySelector('.city_name')
city_name_head.innerHTML = localStorage.getItem('city')

let login_btn = document.querySelector('.login_btn')

if(localStorage.getItem('user') !== null) {
  login_btn.innerHTML = ''
  let img = document.createElement('img')
  login_btn.append(img)
  img.src = '/public/user.svg'
}

//////////////////// REQUEST ////////////////////

let sale_box = document.querySelector('.sale_box')
let kitchen = document.querySelector('.kitchen')

getData('/goods?isBlackFriday=true')
  .then(res => {
    products(res.data, sale_box);
  })

getData('/goods?type=Бытовая техника')
  .then(res => {
    products(res.data, kitchen);
  })

let nav_catalog = document.querySelector('.nav_catalog')

getData('/goods')
  .then(res => {
    list_tegs(res.data, nav_catalog);
})

//////////////////// CITY ////////////////////

let city = ['Аккурган',
  'Алмазар (Чиназский район)',
  'Алмалык',
  'Ангрен',
  'Андижан',
  'Асака',
  'Ахангаран',
  'Байсун',
  'Бекабад',
  'Бешарык',
  'Бухара',
  'Газалкент',
  'Галаасия',
  'Гиждуван',
  'Гузар',
  'Гулистан',
  'Дангара',
  'Денау',
  'Джалакудук',
  'Джизак',
  'Жондор',
  'Зангиота',
  'Зарафшан',
  'Ибрат',
  'Каган',
  'Каракитай',
  'Каракуль',
  'Карасу (Андижанская обл.)',
  'Караулбазар',
  'Карши',
  'Касан',
  'Каттакурган',
  'Келес',
  'Кибрай',
  'Китаб',
  'Коканд',
  'Кувасай',
  'Куксарай',
  'Кунград',
  'Кургантепа',
  'Маргилан',
  'Мубарек',
  'Навои',
  'Назарбек',
  'Наманган',
  'Нукус',
  'Нурафшан',
  'Пскент',
  'Риштан',
  'Самарканд',
  'Выбран',
  'Ташкент',
  'Термез',
  'Туракурган',
  'Ургенч',
  'Учкудук',
  'Учкурган',
  'Фергана',
  'Фуркат',
  'Ханабад',
  'Хива',
  'Ходжаабад',
  'Ходжейли',
  'Чартак',
  'Чирчик',
  'Чуст',
  'Шафиркан',
  'Шахрисабз',
  'Шахрихан',
  'Эшангузар',
  'Яйпан',
  'Янгибазар',
  'Янгиюль']
let city_list = document.querySelector('.city_list')

city_reload(city, city_list)



//////////////////// BTN ////////////////////
let login_modal = document.querySelector('.login_modal')

let city_btn = document.querySelector('.city')
let city_modal = document.querySelector('.city_modal')

let close_btn = document.querySelectorAll('.close')
let login = document.querySelector('.login')

login.onsubmit = (e) => { 
  e.preventDefault();

  let input = document.querySelector('.tel')

  localStorage.setItem('user', input.value)

  if(localStorage.getItem('user') !== null) {
    city_modal.classList.add('hide')
    login_modal.classList.add('hide')
    document.body.style.overflowY = 'visible'
    login_btn.innerHTML = ''
    let img = document.createElement('img')
    login_btn.append(img)
    img.src = '/public/user.svg'
  }
}

login_btn.onclick = () => {
  login_modal.classList.remove('hide')
  document.body.style.overflowY = 'hidden'
}

city_btn.onclick = () => {
  city_modal.classList.remove('hide')
}

close_btn.forEach(btn => {
  btn.onclick = () => {
    city_modal.classList.add('hide')
    login_modal.classList.add('hide')
    document.body.style.overflowY = 'visible'
  }
})

