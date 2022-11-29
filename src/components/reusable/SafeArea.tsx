import React, { FC } from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";

interface Props {
  children: React.ReactNode;
}

const SafeArea: FC<Props> = ({ children }) => {
  return <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>;
};

export default SafeArea;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight && StatusBar.currentHeight,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight! + 30 : 0,
  },
});
