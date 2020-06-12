import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { colors } from "../../../constants";
import { ListItem } from "../../../components/ListItem";

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

class SideBar extends Component<Props, {}> {
  render() {
    const { navigation } = this.props;
    const index = navigation.state.index;
    return (
      <View style={styles.container}>
        <ListItem
          title="Home"
          onPress={() =>
            index === 0 ? 
            navigation.closeDrawer() : 
            navigation.navigate("Home")
          }
        />
        <ListItem
          title="Test Page"
          onPress={() =>
            index === 1
              ? navigation.closeDrawer()
              : navigation.navigate("TestStuff")
          }
        />
        <Text style={styles.version}>
          Version 0.0.1
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: colors.containerBg,
  },
  version: {position: "absolute", bottom: 100, marginHorizontal: 20, fontSize: 18, textDecorationLine: 'underline'}
});

export default SideBar;
