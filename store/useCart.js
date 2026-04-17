import { create } from 'zustand';

export const useCart = create((set) => ({
  cart: [],
  addToCart: (item) => set((state) => {
    const isItemInCart = state.cart.find((i) => i.id === item.id);
    if (isItemInCart) {
      return {
        cart: state.cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      };
    }
    return { cart: [...state.cart, { ...item, quantity: 1 }] };
  }),
  // Tambahkan fungsi remove dan clear di sini
})); 
