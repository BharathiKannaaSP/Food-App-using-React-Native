import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import BottomTabs from "../components/home/BottomTabs";
import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import RestaurantItems, {
  localRestaurants,
} from "../components/home/RestaurantItems";
import SearchBar from "../components/home/SearchBar";
import { Divider } from "react-native-elements";

export default function Home({ navigation }) {
  const [restaurantData, setrestaurantData] = useState(localRestaurants);
  const [activeTab, setActiveTab] = useState("Delivery");
  const [city, setCity] = useState(304551);
  const [mumbai, setMumbai] = useState(304554);
  const [kolkata, setKolkata] = useState(304558);
  const [chennai, setChennai] = useState(304556);

  const getRestaurantsFromRapidAPI = async () => {

    return await fetch(`https://travel-advisor.p.rapidapi.com/restaurants/list?location_id=${city, mumbai, kolkata, chennai}&restaurant_tagcategory=10591&restaurant_tagcategory_standalone=10591&currency=USD&lunit=km&limit=30&open_now=false&lang=en_US`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": "7ae8c6d9fcmshcabd3e090f65d44p153b32jsndc9d100e0a4c"
      }
    })

      .then(response => response.json())
      // .then(res => console.log(res.data))
      .then(res => setrestaurantData(res.data));
  }


  useEffect(() => {
    getRestaurantsFromRapidAPI();
  }, [city, mumbai, kolkata, chennai]);


  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity, setMumbai, setKolkata, setChennai} activeTab={activeTab} setActiveTab={setActiveTab} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData} navigation={navigation}
        />
      </ScrollView>
      <Divider />
      <BottomTabs />
    </SafeAreaView>
  );
}
