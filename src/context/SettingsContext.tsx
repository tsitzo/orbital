import React, { FC, createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Themes } from "../types/settings";

interface Props {
  children: React.ReactNode;
}

interface SettingsContextState {
  theme: Themes;
  hoursFormat: string;
  selectTheme: (theme: Themes) => void;
  selectHoursFormat: (format: string) => void;
}

const contextDefaultValue: SettingsContextState = {
  theme: "dark",
  hoursFormat: "HH",
  selectTheme: () => {},
  selectHoursFormat: () => {},
};

export const SettingsContext =
  createContext<SettingsContextState>(contextDefaultValue);

export const SettingsContextProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Themes>(contextDefaultValue.theme);

  const [hoursFormat, setHoursFormat] = useState<string>(
    contextDefaultValue.hoursFormat
  );

  const selectTheme = (theme: Themes) => {
    setTheme(theme);
  };

  const selectHoursFormat = (format: string) => {
    setHoursFormat(format);
  };

  const saveTheme = async (value: Themes) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@ORBITAL/theme", jsonValue);
    } catch (error) {
      console.log(error);
    }
  };

  const saveHoursFormat = async (value: string) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@ORBITAL/hoursFormat", jsonValue);
    } catch (error) {
      console.log(error);
    }
  };

  const loadTheme = async () => {
    try {
      const value = await AsyncStorage.getItem("@ORBITAL/theme");
      if (value !== null) {
        setTheme(JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loadHoursFormat = async () => {
    try {
      const value = await AsyncStorage.getItem("@ORBITAL/hoursFormat");
      if (value !== null) {
        setHoursFormat(JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadTheme();
  }, []);

  useEffect(() => {
    loadHoursFormat();
  }, []);

  useEffect(() => {
    saveTheme(theme);
  }, [theme]);

  useEffect(() => {
    saveHoursFormat(hoursFormat);
  }, [hoursFormat]);

  return (
    <SettingsContext.Provider
      value={{
        theme,
        hoursFormat,
        selectTheme,
        selectHoursFormat,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
