import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, Button } from "react-native";
export default function About({ navigation, ...props }) {
    const { name, image, price, reviews, rating } =
        props.route.params;


    const description = ` ${price ? " • " + price : ""
        } • 🎫 • ${rating} ⭐ (${reviews}+)`;
    return (
        <View style={{ backgroundColor: '#fff' }}>
            <Text onPress={() => navigation.navigate("Home")} style={{ color: 'black', fontSize: '25px' }}>Back</Text>
            <RestaurantImage image={image} />
            <RestaurantName name={name} />
            <RestaurantDescription description={description} />
        </View>
    );
}

const RestaurantImage = (props) => {

    return (
        <View>

            <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
        </View>
    )
};

const RestaurantName = (props) => (
    <Text
        style={{
            fontSize: 29,
            fontWeight: "600",
            marginTop: 10,
            marginHorizontal: 15,
        }}
    >
        {props.name}
    </Text>
);

const RestaurantDescription = (props) => (
    <Text
        style={{
            marginTop: 10,
            marginHorizontal: 15,
            fontWeight: "400",
            fontSize: 15.5,
        }}
    >
        {props.description}
    </Text>
);