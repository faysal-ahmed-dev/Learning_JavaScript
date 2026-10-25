import {cart, deleteCart, updateDeliveryOptions} from '../../data/cart.js';
import { products, getProduct } from '../../data/products.js';
import { formatCurrency } from '../utils/money.js'; 
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js'
import { deliveryOptions, getDeliveryOption } from '../../data/deliveryoptions.js';
import { renderPaymentSummary } from './paymentSummary.js';

export function renderOrderSummary() {
     
    let checkoutsummaryHTML = '';

    cart.forEach((cartItem) => {
        let productId = cartItem.productId;

        let matchingProduct = getProduct(productId);

        const deliveryOptionsId = cartItem.deliveryOptionsId;

        let deliveryOption = getDeliveryOption(deliveryOptionsId);


        
        const today = dayjs();

        const deliveryDate = today.add(
            deliveryOption.deliveryDays,
            'days'
        );

        const dateString = deliveryDate.format('dddd, MMMM D, YYYY');

        checkoutsummaryHTML += `
        <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
            <div class="delivery-date">
                Delivery date: ${dateString};
            </div>

            <div class="cart-item-details-grid">
                <img class="product-image"
                src=${matchingProduct.image}>

                <div class="cart-item-details">
                <div class="product-name">
                    ${matchingProduct.name}
                </div>
                <div class="product-price">
                    $${formatCurrency(matchingProduct.priceCents)}
                </div>
                <div class="product-quantity">
                    <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary js-update">
                    Update
                    </span>
                    <span class="delete-quantity-link link-primary js-delete" data-link-id="${matchingProduct.id}">
                    Delete
                    </span>
                </div>
                </div>

                <div class="delivery-options">
                <div class="delivery-options-title">
                    Choose a delivery option:
                </div>
                ${deliveryOptionsHTML(matchingProduct,cartItem)}
                </div>
            </div>
            </div>

        `
    });

    function deliveryOptionsHTML(matchingProduct, cartItem) {
        let deliveryHTML = '';

        deliveryOptions.forEach((deliveryOptions)=>{

            const today = dayjs();
            const deliveryDate = today.add(deliveryOptions.deliveryDays, 'days');

            const dateString = deliveryDate.format('dddd, MMMM D, YYYY');

            const priceCents = formatCurrency(deliveryOptions.priceCents);

            let priceString = '';
            if(priceCents == 0){
                priceString = 'FREE';
            }else{
                priceString = `${priceCents}`;
            };

            const isChecked = deliveryOptions.id === cartItem.deliveryOptionsId;

            deliveryHTML += `
                <div class="delivery-option js-delivery-option" data-product-id= "${matchingProduct.id}" data-delivery-options-id = "${deliveryOptions.id}">
                    <input type="radio"
                    ${isChecked ? 'checked' : ''}
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                    <div>
                    <div class="delivery-option-date">
                        ${dateString}
                    </div>
                    <div class="delivery-option-price">
                        $${priceString} - Shipping
                    </div>
                    </div>
                </div>
            `
        });

        return deliveryHTML;
    }

    document.querySelector('.js-order-summary')
        .innerHTML= checkoutsummaryHTML;


    document.querySelectorAll('.js-delete')
        .forEach((deleteLink) =>{

            deleteLink.addEventListener('click', ()=>{
            const productId = deleteLink.dataset.linkId;

            deleteCart(productId); 

            const deleteContainer = document.querySelector(`.js-cart-item-container-${productId}`);
            
            deleteContainer.remove();

            renderPaymentSummary();
            
            });
        });

    document.querySelectorAll('.js-delivery-option')
        .forEach((element)=>{
            element.addEventListener('click', ()=>{
                const {productId, deliveryOptionsId} = element.dataset;
            // shorthand of const productId = element.dataset.productId;

                updateDeliveryOptions(productId, deliveryOptionsId);
                renderOrderSummary();

                renderPaymentSummary();
            });
        });
}
