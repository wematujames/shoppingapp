import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Products from "./shop/Products";
import Cart from "./shop/Cart";
import Settings from "./Settings";

const products = [
  {
    id: 1,
    img: require("../assets/items1.jpg"),
    name: "Awesome Shoes",
    price: "10",
    color: "Only as in photo",
  },
  {
    id: 2,
    img: require("../assets/item2.jpeg"),
    name: "Nice Shoes",
    price: "10",
    color: "Only as in photo",
  },
  {
    id: 3,
    img: require("../assets/item3.jpeg"),
    name: "Great Footwear",
    price: "10",
    color: "Only as in photo",
  },
  {
    id: 4,
    img: require("../assets/item4.jpeg"),
    name: "Nice foot",
    price: "10",
    color: "Only as in photo",
  },
  {
    id: 5,
    img: require("../assets/item5.jpeg"),
    name: "Cool foot",
    price: "10",
    color: "Only as in photo",
  },
  {
    id: 6,
    img: require("../assets/item6.jpeg"),
    name: "Super foot",
    price: "10",
    color: "Only as in photo",
  },
  {
    id: 7,
    img: require("../assets/item7.jpeg"),
    name: "Clean foot",
    price: "10",
    color: "Only as in photo",
  },
  {
    id: 8,
    img: require("../assets/item8.jpeg"),
    name: "img1",
    price: "10",
    color: "Only as in photo",
  },
];

const Home = () => {
  const [screen, setScreen] = useState("home");
  const [cart, setCart] = useState([]);
  const [totalBill, setTotalBill] = useState(0);
  const whichScreen = (screenName) => {
    setScreen(screenName);
  };
  const addToCart = (id) => {
    const product = products.filter((item) => item.id === id);
    //Check if produc in cart already
    const match = cart.filter((item) => item.id === id);
    if (match.length === 0) {
      setCart((prev) => [...product, ...prev]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart([...newCart]);
  };

  //Calc Bill
  const calcTotal = (amount) => {
    setTotalBill(totalBill + Number(amount));
  };

  if (cart.length > 0) {
    const totalArr = cart.map((p) => Number(p.price));
    const initialBill = totalArr.reduce((ini, next) => ini + next);
    // calcTotal(initialBill);
  }
  return (
    // Hove view container
    <View style={styles.home}>
      <Navbar whichScreen={whichScreen} />
      {screen === "home" && (
        <Products products={products} addToCart={addToCart} />
      )}
      {screen === "cart" && (
        <Cart
          calcTotal={calcTotal}
          totalBill={totalBill}
          products={cart}
          removeFromCart={removeFromCart}
        />
      )}
      {screen === "settings" && <Settings />}
      <Footer whichScreen={whichScreen} cartLength={cart.length} />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: "space-between",
  },
});

export default Home;
