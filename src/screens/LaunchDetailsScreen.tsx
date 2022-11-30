import React, { FC } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Image,
} from "react-native";
import { RouteProp, useTheme } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { AppStackParams } from "../types/navigation";
import { SafeArea, Spacer, Typography } from "../components/reusable";
import { useQuery } from "@tanstack/react-query";
import { LaunchDetailed } from "../types/api";

interface ILaunchDetailsScreenProps {
  navigation: NativeStackNavigationProp<AppStackParams, "LaunchDetailsScreen">;
  route: RouteProp<AppStackParams, "LaunchDetailsScreen">;
}

const LaunchDetailsScreen: FC<ILaunchDetailsScreenProps> = ({
  navigation,
  route,
}) => {
  const { colors } = useTheme();
  const { id } = route.params;
  const LAUNCH_URI = `https://lldev.thespacedevs.com/2.2.0/launch/${id}/?mode=detailed`;

  const { data, error, isLoading } = useQuery<LaunchDetailed, Error>(
    ["launchDetails"],
    async () => {
      const res = await fetch(LAUNCH_URI);
      return res.json();
    }
  );

  if (isLoading)
    return (
      <SafeArea>
        <View style={styles.centeredPage}>
          <ActivityIndicator size={60} color={colors.primary} />
        </View>
      </SafeArea>
    );

  if (error)
    return (
      <SafeArea>
        <View style={styles.centeredPage}>
          <Typography>An error has occured</Typography>
        </View>
      </SafeArea>
    );

  return (
    <SafeArea>
      <ScrollView
        style={styles.scrollviewWrapper}
        contentContainerStyle={styles.scrollviewContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.row, styles.missionPatchContainer]}>
          <View style={styles.missionPatchContainerLeft}>
            <Typography variant="bold" size={24}>
              {data.name}
            </Typography>
            <Spacer y={5} />
            <Typography color="subtext" variant="mid">
              {data.launch_service_provider.name}
            </Typography>
          </View>
          <View style={styles.missionPatchContainerRight}>
            {data.mission_patches.length > 0 ? (
              <Image
                source={{ uri: data.mission_patches[0].image_url }}
                style={styles.missionPatch}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={require("../../assets/logo.png")}
                style={styles.missionPatch}
                resizeMode="contain"
              />
            )}
          </View>
        </View>

        <View style={[styles.row, styles.infoLabelsContainer]}></View>
      </ScrollView>
    </SafeArea>
  );
};

export default LaunchDetailsScreen;

const styles = StyleSheet.create({
  centeredPage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollviewWrapper: {
    padding: 15,
  },
  scrollviewContent: { paddingBottom: 30 },
  row: {
    flexDirection: "row",
  },
  missionPatchContainer: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  missionPatchContainerLeft: {
    flex: 3 / 5,
    alignItems: "flex-start",
  },
  missionPatchContainerRight: {
    flexDirection: "row",
    flex: 1.5 / 5,
    alignItems: "flex-end",
  },
  missionPatch: {
    width: "100%",
    aspectRatio: 1,
  },
  infoLabelsContainer: {},
});
