import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CartItem from "./CartItem";
import Product from "./Product";

export default function Cart({ products, removeFromCart }) {
  let initialBill = products.map((p) => p.price);
  let value = initialBill.reduce(
    (curr, next) => Number(curr) + Number(next),
    0
  );
  const [total, setTotal] = useState(value);
  const calcTotal = (amount) => {
    setTotal(total + Number(amount));
  };

  return (
    <View style={styles.cartContainer}>
      <ScrollView>
        <View style={styles.cartItem}>
          {products.map((product) => {
            return (
              <CartItem
                calcTotal={calcTotal}
                removeFromCart={removeFromCart}
                key={product.id}
                product={product}
              />
            );
          })}
        </View>
      </ScrollView>
      <View
        style={{
          padding: 10,
          backgroundColor: "orange",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Total</Text>
        <Text style={{ fontWeight: "bold" }}>Ghc {total}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
  },
});
Cart.defaultProps = {
  products: [{ id: 1, image: "img1", name: "name", price: "1000" }],
};
