import { store } from "react-notifications-component";

export const handleAddToCart = (addToCart, setAddToCart, item) => {
  console.log(item);
  let newItem = [...addToCart, item];
  item.price = parseInt(item.price);
  item.quantity = 1;
  item.totalPrice = item.campaignPrice
    ? item.campaignPrice
    : item.offerPrice
    ? item.offerPrice
    : item.price;
  item.totalQuantity = item.quantity;
  setAddToCart(newItem);
  store.addNotification({
    title: "Product Added to Cart",
    message: item.name,
    type: "success",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 1500,
      onScreen: true,
    },
  });
};

export const handleRemoveItemFromCart = (addToCart, setAddToCart, id) => {
  const remainingProduct = addToCart.filter((item) => item.id !== id);
  setAddToCart(remainingProduct);
};

export const handleQuantityIncrement = (addToCart, setAddToCart, id) => {
  if (addToCart.find((product) => product.id === id)) {
    const product = addToCart.find((product) => product.id === id);
    product.totalQuantity = product.totalQuantity + 1;
    product.totalPrice = product.campaignPrice
      ? product.campaignPrice * product.totalQuantity
      : product.offerPrice
      ? product.offerPrice * product.totalQuantity
      : product.price * product.totalQuantity;

    if (addToCart.find((item) => item.id === product.id)) {
      var objectIndex = addToCart.findIndex((obj) => obj.id === product.id);
      var newItems = [...addToCart];
      newItems[objectIndex] = product;
      setAddToCart(newItems);
    }
  }
};

export const handleQuantityDecrement = (addToCart, setAddToCart, id) => {
  if (addToCart.find((item) => item.id === id)) {
    const product = addToCart.find((product) => product.id === id);
    if (product.totalQuantity > 1) {
      product.totalQuantity = product.totalQuantity - 1;
      product.totalPrice = product.campaignPrice
        ? product.campaignPrice * product.totalQuantity
        : product.offerPrice
        ? product.offerPrice * product.totalQuantity
        : product.price * product.totalQuantity;
      var objectIndex = addToCart.findIndex((obj) => obj.id === product.id);
      var newItems = [...addToCart];
      newItems[objectIndex] = product;
      setAddToCart(newItems);
    }
  }
};

export const handleProductPrice = (product) => {
  if (product.campaign) {
    let campaign = product.campaign;
    let currentDateTime = Date.parse(new Date());
    let currentTime = new Date()
      .toLocaleTimeString("en-US", {
        hour12: false,
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      })
      .split(":")
      .reduce((acc, time) => 60 * acc + +time);
    let campaignStartTime = Date.parse(campaign.start_date_time);
    let campaignEndTime = Date.parse(campaign.end_date_time);
    let campaignSpecificStartTime = campaign.specific_time_start;
    let campaignSpecificEndTime = campaign.specific_time_end;
    if (campaign.status === "1") {
      if (
        currentDateTime >= campaignStartTime &&
        currentDateTime <= campaignEndTime
      ) {
        if (campaignSpecificStartTime && campaignSpecificEndTime) {
          let specificStarTime = campaignSpecificStartTime
            .split(":")
            .reduce((acc, time) => 60 * acc + +time);
          let specificEndTime = campaignSpecificEndTime
            .split(":")
            .reduce((acc, time) => 60 * acc + +time);

          if (
            currentTime >= specificStarTime &&
            currentTime <= specificEndTime
          ) {
            return CampaignPriceCalc(product);
          } else {
            return product.price;
          }
        } else {
          //normal calculation based on campaing time range
          return CampaignPriceCalc(product);
        }
      } else {
        return product.price;
      }
    } else {
      return product.price;
    }
  } else {
    return product.price;
  }
};

export const CampaignPriceCalc = (product) => {
  let percentageCalc =
    (parseInt(product.campaign.offer) / 100) * parseInt(product.price);
  let offerPrice = parseInt(product.price) - percentageCalc;
  product.campaignPrice = offerPrice;
  return offerPrice;
};
