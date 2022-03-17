import React from "react";
import { View, Text, ScrollView } from "react-native";
import '../../App.css'
export default function SearchBar({ cityHandler }) {
  const [delhi] = React.useState(304551);
  const [mumbai] = React.useState(304554);
  const [kolkata] = React.useState(304558);
  const [chennai] = React.useState(304556);
  return (
    <>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: 'row' }}>

          <View style={{ marginTop: 15, flexDirection: "row" }}>
            <span id="1" onClick={() => { cityHandler(delhi); }}
              style={{ width: '100%', padding: '15px', borderRadius: '5px' }}>Delhi</span>
          </View >

          <View style={{ marginTop: 15, flexDirection: "row" }}>
            <span id="2" onClick={() => { cityHandler(mumbai); }}
              style={{ width: '100%', padding: '15px', borderRadius: '5px' }}>Mumbai</span>
          </View>

          <View style={{ marginTop: 15, flexDirection: "row" }}>
            <span onClick={() => { cityHandler(kolkata); }}
              style={{ width: '100%', padding: '15px', borderRadius: '5px' }}>Kolkata</span>
          </View>

          <View style={{ marginTop: 15, flexDirection: "row" }}>
            <span onClick={() => { cityHandler(chennai); }}
              style={{ width: '100%', padding: '15px', borderRadius: '5px' }}>Chennai</span>
          </View>
          {/* //For more locations */}
          {/* <View style={{ marginTop: 15, flexDirection: "row" }}> 
            <div
              onClick={() => {

                cityHandler(chennai);
              }}
              style={{ width: '100%', padding: '15px', borderRadius: '5px' }}>Chennai</div>
          </View>
          */}

        </View>
      </ScrollView>
    </>


  );

}

