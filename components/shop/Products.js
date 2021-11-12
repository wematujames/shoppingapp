import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Product from "./Product";

const Products = ({ products, addToCart }) => {
  return (
    <ScrollView>
      <View style={{ padding: 10, flex: 1 }}>
        <View style={styles.row}>
          {products.map((product) => {
            return (
              <Product
                key={product.id}
                addToCart={addToCart}
                product={product}
              />
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

Products.defaultProps = {
  products: [{ id: 1, image: "img1", name: "name", price: "1000" }],
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default Products;
