import { CartItem } from "../redux/slices/cart/types";


export const calcTotalPrice = (items: CartItem[]) => {
    // let priceMultiplier = 1;
    // if (obj.size === 30) priceMultiplier = 1.05
    // if (obj.size === 40) priceMultiplier = 1.15
    return items.reduce((sum, obj) => (obj.price * obj.count) + sum, 0);
}