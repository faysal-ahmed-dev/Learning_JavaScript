
export class Cart {

    cartItems= undefined;

    localStorageKey = undefined;

    constructor(localStorageKey){

        this.localStorageKey = localStorageKey;
        this.loadFromStorage();
    }

    loadFromStorage(){
        this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey));

        if(!this.cartItems){
            this.cartItems = [
            {
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 2,
                deliveryOptionsId: '1'
            },

            {
                productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                quantity: 1,
                deliveryOptionsId: '2'
            }
            ];

            this.saveToStorage();
        }
    }

    saveToStorage() {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
    }

    addToCart(productId, selectQuantity) {
        
        let matchingItem;

        this.cartItems.forEach((item) =>{
            if(productId === item.productId){
            matchingItem = item;
            }
        });

        if(matchingItem){
            matchingItem.quantity += selectQuantity;

        }else{
            this.cartItems.push({
            productId,
            quantity: selectQuantity,
            deliveryOptionsId: '1'
            });
        }

        this.saveToStorage();
    }

    deleteCart(productId) {
        const newCart = [];

        this.cartItems.forEach((cartItem) =>{

            if(cartItem.productId !== productId){
            newCart.push(cartItem);
            }
            
        });
        
        this.cartItems = newCart;

        this.saveToStorage();
    }

    updateDeliveryOptions(productId, deliveryOptionsId) {
        let matchingItem;

        this.cartItems.forEach((cartItem)=>{
        if(cartItem.productId === productId){
            matchingItem = cartItem;
        }
        }); 

        matchingItem.deliveryOptionsId = deliveryOptionsId;

        this.saveToStorage();
    }

};

const cart = new Cart('cart-oop');
const cartBusiness = new Cart('cart-business');

console.log(cart);
console.log(cartBusiness);
