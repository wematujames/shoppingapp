import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function CartItem({
  product: { id, img, color, price, size, name },
  removeFromCart,
  calcTotal,
}) {
  // useEffect(() => {
  //   calcTotal(price);
  // });

  const [qnt, setQnt] = useState(1);
  return (
    //Container

    <View style={styles.cartItem}>
      {/* Seleted Item */}
      <View style={{ flexDirection: "row" }}>
        <Image style={styles.prodImg} source={img} />
        <View style={styles.itemDetail}>
          <Text>Name: {name}</Text>
          <Text>Color: {color}</Text>
          <Text>Size: Size</Text>
          <Text>Price: {price} </Text>
        </View>
      </View>
      {/*    Option to increase Quantity */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pressable
          onPress={() => {
            if (!(qnt <= 1)) {
              setQnt(qnt - 1);
              calcTotal(0 - price);
            }
          }}
          style={{ margin: 10 }}
        >
          <Icon name="minus" size={20} color="orange" />
        </Pressable>
        <Text> {qnt}</Text>
        <Pressable
          style={{ margin: 10 }}
          onPress={() => {
            setQnt(qnt + 1);
            calcTotal(price);
          }}
        >
          <Icon name="plus" size={20} color="orange" />
        </Pressable>
      </View>

      <View style={{}}>
        <Text>Item Total</Text>
        <Text> {`Ghc ${qnt * price}`}</Text>
      </View>

      {/* Option to increase remove item from Cart */}
      <Pressable
        onPress={() => {
          removeFromCart(id);
          calcTotal(0 - qnt * price);
        }}
      >
        <Icon name="remove" size={20} color="firebrick" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  cartItem: {
    backgroundColor: "#F7F7F2",
    margin: 3,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5,
    alignItems: "center",
  },
  prodImg: {
    width: 50,
    height: 50,
    marginRight: 3,
    borderRadius: 20 / 2,
  },
});
