import React from "react";
import { View, Text, StyleSheet, Image, Pressable, addons } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Product({
  product: { id, img, name, price },
  addToCart,
}) {
  return (
    //Product container
    <View style={styles.prodView}>
      {/* Product information container */}
      <View styles={styles.infoContainer}>
        <Image style={styles.prodImg} source={img} />
        {/* Product name */}
        <Text style={styles.prodName}>{name}</Text>
        {/* Price and add to cart */}
        <View style={styles.prodPriceCart}>
          <Text style={styles.prodPrice}>{price}</Text>
          <Pressable
            onPress={() => {
              addToCart(id);
            }}
          >
            <Icon name="shopping-cart" size={20} color="orange" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

Product.defaultProps = {
  product: {
    image: "image",
    name: "name",
    price: "price",
  },
};

const styles = StyleSheet.create({
  prodView: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "#F7F7F2",
    marginHorizontal: "1%",
    marginBottom: 10,
    minWidth: "48%",
    alignSelf: "flex-start",
    alignItems: "center",
  },
  infoContainer: {
    textAlign: "center",
    alignItems: "center",
  },
  prodImg: {
    width: 120,
    height: 120,
    borderRadius: 20 / 2,
  },
  prodName: {
    textAlign: "center",
  },
  prodPriceCart: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 5,
    alignItems: "center",
  },
});
