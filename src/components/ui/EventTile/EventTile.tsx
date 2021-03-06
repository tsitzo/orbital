import { StyleSheet, View } from "react-native";
import React, { FC, useContext } from "react";
import { SpaceEvent } from "../../../types/apiResponse";
import Typography from "../../text/Typography";
import Spacer from "../../layout/Spacer";
import moment from "moment-timezone";
import EventTileVideoPlayer from "./EventTileVideoPlayer";
import { SettingsContext } from "../../../context/SettingsContext";

interface IEventTileProps {
  event: SpaceEvent;
}

const EventTile: FC<IEventTileProps> = ({ event }) => {
  const { timezone } = useContext(SettingsContext);
  return (
    <View>
      {event.video_url && (
        <>
          <EventTileVideoPlayer
            image={event.feature_image}
            video={event.video_url!}
          />
          <Spacer y={20} />
        </>
      )}
      <View>
        <View style={styles.row}>
          <Typography variant="bold">{event.name}</Typography>
        </View>
      </View>

      <Spacer y={10} />

      <Typography color="subtext" size={14}>
        {event.description}
      </Typography>
      <Spacer y={10} />

      <View style={styles.row}>
        <Typography color="subtext" size={14}>
          {moment.utc(event.date).tz(timezone).format("LLL z")}
        </Typography>
        <Typography variant="bold" color="primary" size={14}>
          {event.type.name}
        </Typography>
      </View>
    </View>
  );
};

export default EventTile;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
