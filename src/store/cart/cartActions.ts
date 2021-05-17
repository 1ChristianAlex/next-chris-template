enum CART_ACTION_TYPES {
  ADD_PRODUCT_CART_ITEM = 'cart/ADD_PRODUCT_CART_ITEM',
}

const cartAction = (
  type: CART_ACTION_TYPES,
  payload?: ICartActionPayloadBody
): ICartActionReturn => ({
  payload: {
    errors: [payload?.errors].flat(),
    productCart: [payload?.productCart].flat(),
  },
  type,
});

const addProductCartItem = (
  payload: ICartActionPayloadBody
): ICartActionReturn =>
  cartAction(CART_ACTION_TYPES.ADD_PRODUCT_CART_ITEM, payload);

export { CART_ACTION_TYPES, addProductCartItem };
