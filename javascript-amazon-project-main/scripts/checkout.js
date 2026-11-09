import { renderOrderSummary } from './checkout-js/orderSummary.js';
import { renderPaymentSummary } from './checkout-js/paymentSummary.js';
import { loadProducts } from '../data/products.js';
// import '../data/cart-oop.js';
// import '../data/cart-class.js';
//import '../data/backend-practice.js';

new Promise((resolve)=>{
    loadProducts(()=>{
        resolve();
    });
}).then(() =>{
    renderOrderSummary();
    renderPaymentSummary();
});

//callback
// loadProducts(() => {

//     renderOrderSummary();
//     renderPaymentSummary();
// });

