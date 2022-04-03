import React from "react";
import { StatusBar } from "react-native";
import { Restaurants } from "./src/screens/Restaurants/restaurants";

export default function App() {
  return (
    <>
      <Restaurants />
      <StatusBar barStyle="default" />
    </>
  );
}
