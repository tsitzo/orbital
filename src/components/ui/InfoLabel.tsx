import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { useTheme } from "@react-navigation/native";
import { Typography, Spacer } from "../reusable";

interface IInfoLabelProps {
  label: string;
  value: string | number | null | undefined;
}

const InfoLabel: FC<IInfoLabelProps> = ({ label, value }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.infoLabel}>
      <View style={[styles.rect, { backgroundColor: colors.primary }]} />
      <View style={styles.labelValueContainer}>
        <Typography color="subtext" size={14}>
          {label}
        </Typography>

        <Spacer y={5} />
        <Typography variant="mid" numberOfLines={2} adjustsFontSizeToFit>
          {!value || value === "" ? "-" : value}
        </Typography>
      </View>
    </View>
  );
};

export default InfoLabel;

const styles = StyleSheet.create({
  infoLabel: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  labelValueContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    maxWidth: Dimensions.get("window").width / 2 - 30,
  },
  rect: { width: 5, marginRight: 10, borderRadius: 10 },
});
