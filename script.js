

const c = x => document.createElement(x);
c('div');
const body = document.querySelector('body')
const exit = document.querySelector('.formenue .exit');
const forSalatexit  = document.querySelector('.forSalat .exit')
const Contactexit = document.querySelector('.forcontact .contsctexit')
const forcontact = document.querySelector('.forcontact')
const forSalat = document.querySelector('.forSalat')
const salat = document.querySelector('.formenue .salat')
const formenue = document.querySelector('.formenue ');
const product = document.querySelector('.product')
const Addcart = document.querySelectorAll('.forSalat .saladBuy .add')
const saladBuy = document.querySelectorAll('.forSalat .saladBuy')
const reservDiv = document.querySelectorAll('.forSalat .saladBuy .reserved')
const salatimg = document.querySelectorAll('.forSalat .saladBuy > img')
const HTMLprice = document.querySelectorAll('.forSalat .saladBuy .price')
const HTMLtext = document.querySelectorAll('.forSalat .saladBuy .text')
const HTMLquaniti = document.querySelectorAll('.forSalat .saladBuy .quantitiProduct')
const language = document.querySelectorAll('.language')
const shopingDiv = document.querySelector('header .cart-items')
const confirmDiv = document.querySelector('header .confirmDiv')
const remAll = document.querySelector('.confirmDiv .remAll')
const aboutMenu = document.querySelector('.aboutMenu')
const aboute = document.querySelector('.aboute')
const aboutMenuClose = document.querySelector('.aboutMenuClose')






const slider = document.querySelector('.slider')
const next = document.querySelector('.slider .prev')
const prev = document.querySelector('.slider .next')

const image =[
'img/0 (1).jpg',
'img/0 (2).jpg',
'img/0 (4).jpg',
'img/0 (5).jpg',
]


let cur =0

const control = count =>{
  count ? cur += count : '';
  cur < 0 ? cur = image.length-1 : cur == image.length ? cur = 0 : ''
  slider.style.background = `url('${image[cur]}')`;
}
prev.onclick = () => control(1);
next.onclick = () => control(-1);




exit.onclick =() =>{
    formenue.style.right='100%'
}



salat.onclick = () =>{
    forSalat.style.right='0vw'
}


   
forSalatexit.onclick = () =>{
    forSalat.style.right='150vw'
    forSalat.style.right='100vw'
}



let scrollToTopBtn = document.querySelector(".product");
scrollToTopBtn.addEventListener("click", function() {
    scrollToTop();
});

function scrollToTop() {
    if (window.scrollY !== 0) {
        window.scrollTo({
            top: 0,
            right:100,
            behavior: "smooth",
        }); }}


product.onclick = () =>{
  forSalat.style.right='0vw'
}






const boxButton = document.querySelector('.boxButton')

const idCart = document.querySelector('#cart')
const idTotal = document.querySelector('header #total')
const TotalText = document.querySelector('header .total-price')
const IDcheckout = document.querySelector('#checkout')

let Exitbool = true

boxButton.onclick = () =>{
  if(Exitbool){
    shopingDiv.style.display='block'
    TotalText.style.opacity='1'
    body.style.overflow='hidden'
  }else{
    shopingDiv.style.display='none'
    TotalText.style.opacity='0'
    body.style.overflow=null
  }
  Exitbool =! Exitbool
  }

  reservDiv.onclick = () =>{
       reservDiv.style.width='100%'
  }

const addButton = document.querySelectorAll('.forSalat #product button')
const ADD = document.querySelectorAll('.forSalat .saladBuy .product .add-to-cart')
const ADDOne = document.querySelectorAll('.forXalodni .saladBuy .product .add-to-cart')
const ADDtwo = document.querySelectorAll('.fordinner .saladBuy .product .add-to-cart')

ADD.forEach(item =>{
    item.onclick =() =>{
    boxButton.style.transform='rotateY(360deg)'
    setTimeout(()=>{
            boxButton.style.transform=null
    },1e3)
    }

})

ADDOne.forEach(item =>{
    item.onclick =() =>{
    boxButton.style.transform='rotateY(360deg)'
    setTimeout(()=>{
            boxButton.style.transform=null
    },1e3)
    }

})


ADDtwo.forEach(item =>{
    item.onclick =() =>{
    boxButton.style.transform='rotateY(360deg)'
    setTimeout(()=>{
            boxButton.style.transform=null
    },1e3)
    }

})




const cartItemsContainer = document.querySelector('.cart-items');
const totalPriceElement = document.querySelector('.total-price');
let cart = JSON.parse(localStorage.getItem('Pcart')) || [];


function addToCart(product) {
    const productExists = cart.find(item => item.id === product.id);
    if (productExists) {
        productExists.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(product => {
        total += product.price * product.quantity;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <img style="width: 12vw; height: 12vw;" src="${product.img}" alt="${product.name}">
            <span class="text">${product.name}</span>

            <button class="minus" data-id="${product.id}">-</button>

            <span class="N">${product.quantity}</span>

            <button class="plus" data-id="${product.id}">+</button>

            <span class="PQ" >${product.price * product.quantity} $</span>

            <button class="remove" data-id="${product.id}">Remove</button>
            
        `;

        
     cartItemsContainer.appendChild(cartItem);
    });

    totalPriceElement.textContent = `Total   ${total}$`;
    localStorage.setItem('Pcart', JSON.stringify(cart));
}


cartItemsContainer.addEventListener('click', e => {
    if (e.target.classList.contains('plus')) {
        const id = e.target.dataset.id;
        const product = cart.find(item => item.id === id);
        product.quantity += 1;
        updateCart();
    }

    if (e.target.classList.contains('minus')) {
        const id = e.target.dataset.id;
        const product = cart.find(item => item.id === id);
        if (product.quantity > 1) {
            product.quantity -= 1;
        } else {
            cart = cart.filter(item => item.id !== id);
        }
        updateCart();
    }

    if (e.target.classList.contains('remove')) {
        const id = e.target.dataset.id;
        cart = cart.filter(item => item.id !== id);
        updateCart();
    }
});

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = {
            id: button.dataset.id,
            name: button.dataset.name,
            price: parseFloat(button.dataset.price),
            img: button.dataset.img
        };
        addToCart(product);
    });
});

updateCart();


const salatImg = document.querySelectorAll('.forSalat .saladBuy .product')



aboute.onclick = () =>{
aboutMenu.style.left='0vw'
scrollToTop()
}

aboutMenuClose.onclick = () =>{
aboutMenu.style.left='100vw'
}







document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name && email && message) {
      document.getElementById('responseMessage').textContent = "Thank you for contacting us, " + name + ". We'll get back to you soon!";
      document.getElementById('responseMessage').style.color = 'green';
      document.getElementById('contactForm').reset();
    } else {
      document.getElementById('responseMessage').textContent = "Please fill in all fields.";
      document.getElementById('responseMessage').style.color = 'red';
    }
  });
  
const contExit = document.querySelector('.contExit')
const contactM = document.querySelector('.contactM')
const contact = document.querySelector('.contact')

contExit.onclick = () =>{
    contactM.style.left='100vw'
}
contact.onclick = () =>{
    contactM.style.left='0vw'
}