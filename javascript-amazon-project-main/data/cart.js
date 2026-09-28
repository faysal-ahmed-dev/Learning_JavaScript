
export const cart = [];

export function addToCart(productId, selectQuantity) {
      
    let matchingItem;

      cart.forEach((item) =>{
        if(productId === item.productId){
          matchingItem = item;
        }
      });

      if(matchingItem){
        matchingItem.quantity += selectQuantity;

      }else{
        cart.push({
          productId,
          quantity: selectQuantity
        });
      }

}


