import Swiper from "swiper";
import 'swiper/css'
import {getData} from './modules/helpers'
import {products} from './modules/ui'

let my_swiper = new Swiper('.banner', {
  spaceBetween: 30,
  mousewheel: true,
  autoplay: {
    delay: 3000,
  },
})

//////////////////// REQUEST ////////////////////

let sale_box = document.querySelector('.sale_box')
let kitchen = document.querySelector('.kitchen')

getData('/goods?isBlackFriday=true')
  .then(res => {
    products(res.data, sale_box);
  })

getData('/goods?type=kitchen')
  .then(res => {
    products(res.data, kitchen);
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

function city_reload(arr, place) {
  place.innerHTML = ''
  for(let item of arr) {
    let city_box = document.createElement('div')
    let city_name = document.createElement('p')

    city_box.classList.add('city_box')
  
    place.append(city_box)
    city_box.append(city_name)
  
    city_name.innerHTML = item
  }
}

//////////////////// BTN ////////////////////
let login = document.querySelector('.login')
let login_modal = document.querySelector('.login_modal')

let city_btn = document.querySelector('.city')
let city_modal = document.querySelector('.city_modal')

let close_btn = document.querySelectorAll('.close')

console.log(close_btn);

login.onclick = () => {
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

let class_name = ['headphones', 'appliances', 'clothes', 'shoes', 'accessories', 'beauty', 'health', 'household', 'construction', 'auto', 'children', 'hobbies', 'sport', 'food', 'chemistry', 'note', 'pet', 'book', 'garden']

let img_arr = {
  headphones: 'https://www.svgrepo.com/show/485063/headphone-part-2.svg',
  appliances: 'https://www.svgrepo.com/show/252117/kitchen-pack-restaurant.svg',
  clothes: 'https://www.svgrepo.com/show/234613/clothes-shirt.svg',
  shoes: 'https://www.svgrepo.com/show/407365/running-shoe.svg',
  accessories: 'https://www.svgrepo.com/show/427671/accessories-eyeglasses-fashion.svg',
  beauty: 'https://www.svgrepo.com/show/257806/beauty-woman.svg',
  health: 'https://www.svgrepo.com/show/421919/health-insurance-medical-medical.svg',
  household: 'https://www.svgrepo.com/show/381967/home-furniture-property-real-households-belongings.svg',
  construction: 'https://www.svgrepo.com/show/315984/paint-roller.svg',
  auto: 'https://www.svgrepo.com/show/452176/car.svg',
  children: 'https://www.svgrepo.com/show/493600/baby.svg',
  hobbies: 'https://www.svgrepo.com/show/428731/creative-knowledge-lightbulb.svg',
  sport: 'https://www.svgrepo.com/show/475629/basketball.svg',
  food: 'https://www.svgrepo.com/show/454320/food-fruit-fruits-10.svg',
  chemistry: 'https://www.svgrepo.com/show/231578/flask-chemistry.svg',
  note: 'https://www.svgrepo.com/show/281422/note-notepad.svg',
  pet: 'https://www.svgrepo.com/show/295859/pet-food-pet.svg',
  book: 'https://www.svgrepo.com/show/444880/book.svg',
  garden: 'https://www.svgrepo.com/show/165760/garden.svg',
}