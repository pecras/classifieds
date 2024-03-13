const cart_btn= document.querySelector("#cart-btn")
const cart_modal= document.querySelector("#cart-modal") 
const cart_item= document.querySelector("#cart-items") 
const menu=document.querySelector("#menu")
const cart_total=document.querySelector("#cart_total")
const cart_count=document.querySelector("#cart-count")
const close_modal_btn=document.querySelector("#close-modal-btn")
const finalizar_select=document.querySelector("#finalizar-btn")

let cart =[]

cart_btn.addEventListener("click",()=>{
    cart_modal.style.display = "flex" 
})

cart_modal.addEventListener("click",(evt)=>{
if (evt.target===cart_modal) {
    cart_modal.style.display = "none"
    
}
})

close_modal_btn.addEventListener("click",(evt)=>{
    cart_modal.style.display="none"
});

menu.addEventListener("click",(evt)=>{
    let parentButton = evt.target.closest(".add-to-cart-btn")
   
    if (parentButton) {
        const name = parentButton.getAttribute("data-name")
        const price=parentButton.getAttribute("data-price")
        const address=parentButton.getAttribute("data-address")
        Addcart(name,price,address)
    }
})


const Addcart=(name,price,address)=>{
    const existingItem=cart.find(item => item.name ===name )
    if (existingItem) {
        alert("Esse item já foi anexado ")
        return
    }
    else{
        cart.push({name,price, address})
    }
updateCart()
}

const updateCart=()=>{
 
    cart_item.innerHTML="";
 cart_item.classList.add("flex","justify-between","mb-4")
     cart.forEach((item,i)=>{

        const cartItemElement = document.createElement("div");
        cartItemElement.innerHTML=
        `<div class ="flex items-center justify-between">
        <div>
        <p>${item.name}</p>
        <p>${item.price}</p>
        <p>${item.address}</p>
        </div>
        <div>
        <buton class="remove" data-Address=${item.address} data-name=${item.name}>
        Remover
        </button>
        </div>
        </div>`
        
        cart_item.appendChild(cartItemElement)
        cart_count.innerHTML=cart.length

     })
}


cart_item.addEventListener("click",(event)=>{
if (event.target.classList.contains("remove")) {
    const Address = event.target.getAttribute("data-Address")
    const name = event.target.getAttribute("data-name")
    removeItem(name)
}
} )

const removeItem=(name)=>{
        const index = cart.findIndex(item => item.name === name);
        if (index !== -1) {
            const item = cart[index];

            cart.splice(index,1)
            updateCart()
            
        }
}