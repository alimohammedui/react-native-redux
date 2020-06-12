import React, { Component, useEffect } from "react";
import { View, Text, ScrollView, Geolocation } from "react-native";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { Header } from "../../../components";
import styles from "./styles";
import ToDoList from "./testFunctionalComponents";

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

export default class TestStuff extends Component<Props, {}> {

  componentDidMount(){
    const headers = {
      "Content-Type": "application/json",
      "Accept": "application/json",
  };
  const endpoint = `http://161.35.125.208`
  
  const latitude = 36.852924;
  const longitude = -75.977982;
  const url =  `${endpoint}/api/v1/client/prayer/time?limit=1&latitude=${latitude}&longitude=${longitude}&radius=100000`
      fetch(url, {method: 'GET', headers})
      .then(resp => resp.json())
      .then(res => {
        console.log(res)
      })
  }
  
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Header title="Test Stuff Here" leftButtonPress={() => navigation.openDrawer()} />
        <ScrollView contentContainerStyle={styles.contentStyle}>
          <Text style={styles.textStyle}>Test Page</Text>
          <ToDoList/>
        </ScrollView>
      </View>
    );
  }
}


