import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";

import { useColorScheme } from "react-native";
import { SettingsContext } from "../context/SettingsContext";
import { CustomDarkTheme, CustomLightTheme } from "../theme";
import { AppStack } from "./AppStack";

export const Routes = () => {
  const scheme = useColorScheme();
  const { theme } = useContext(SettingsContext);

  let THEME;
  let STATUS_BAR_STYLE;

  if (theme === "automatic") {
    if (scheme === "dark") {
      THEME = CustomDarkTheme;
      STATUS_BAR_STYLE = "light-content";
    } else {
      THEME = CustomLightTheme;
      STATUS_BAR_STYLE = "dark-content";
    }
  } else if (theme === "light") {
    THEME = CustomLightTheme;
    STATUS_BAR_STYLE = "dark-content";
  } else if (theme === "dark") {
    THEME = CustomDarkTheme;
    STATUS_BAR_STYLE = "light-content";
  }
  return (
    <NavigationContainer theme={THEME}>
      <AppStack />
      {/** @ts-ignore **/}
      <StatusBar barStyle={STATUS_BAR_STYLE} />
    </NavigationContainer>
  );
};
