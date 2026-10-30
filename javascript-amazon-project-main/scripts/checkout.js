import { renderOrderSummary } from './checkout-js/orderSummary.js';
import { renderPaymentSummary } from './checkout-js/paymentSummary.js';
import { formatCurrency } from './utils/money.js';
import '../data/cart-oop.js';
import '../data/cart-class.js';

renderOrderSummary();

renderPaymentSummary();

