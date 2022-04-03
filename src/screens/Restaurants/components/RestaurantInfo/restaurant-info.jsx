import React from "react";
import { Card, Title, Subheading } from "react-native-paper";
import { styles } from "./restaurant-info.styles";
import { SvgXml } from "react-native-svg";
import star from "../../../../../assets/star";
import open from "../../../../../assets/open";
import { Image, Text, View } from "react-native";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <Card style={styles.cardWrapper}>
      <Card.Cover source={{ uri: photos[0] }} />
      <Title style={styles.title}>{name}</Title>
      <View style={styles.iconsWrapper}>
        <View style={styles.ratingWrapper}>
          {ratingArray.map((value, index) => (
            <SvgXml key={index} xml={star} width={20} height={20} />
          ))}
        </View>
        <View style={styles.ratingWrapper}>
          {isClosedTemporarily && (
            <Text style={styles.closedText}>CLOSED TEMPORALITY</Text>
          )}
          {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          <Image source={{ uri: icon }} style={styles.image} />
        </View>
      </View>
      <Subheading>{address}</Subheading>
    </Card>
  );
};
