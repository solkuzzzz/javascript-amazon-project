const cart = [];

function addToCart(productId, quantity) {
   let matchingItem;

   cart.forEach((item) => {
      if (item.productId === productId) {
         matchingItem = item;
      }
   });

   if (matchingItem) {
      matchingItem.quantity += quantity;
   } else {
      cart.push({
         productId,
         quantity
      })
   };
}

export {cart, addToCart};