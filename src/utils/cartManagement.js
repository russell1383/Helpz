export const handleAddToCart = (addToCart, setAddToCart, item) => {
  console.log(item);
  let newItem = [...addToCart, item];
  item.price = parseInt(item.price);
  item.quantity = 1;
  item.totalPrice = item.price;
  item.totalQuantity = item.quantity;
  setAddToCart(newItem);
};

export const handleQuantity = (addToCart,setAddToCart,id) => {
  if (addToCart.find((product) => product.id === id)) {
    const product = addToCart.find((product) => product.id === id);
    product.totalQuantity = product.totalQuantity + 1;
    product.totalPrice = product.price * product.totalQuantity;

    if (addToCart.find((item) => item.id === product.id)) {
      var objectIndex = addToCart.findIndex((obj) => obj.id === product.id);
      var newItems = [...addToCart];
      newItems[objectIndex] = product;
      setAddToCart(newItems);
    }
  }
};
