export type AppTabParams = {
  HomeScreen: undefined;
  LaunchesScreen: undefined;
  SettingsScreen: undefined;
};

export type AppStackParams = {
  AppTabs: undefined;
  AboutScreen: undefined;
  AgencyDetailsScreen: { id: string };
  AstronautDetailsScreen: { id: string };
  LaunchDetailsScreen: { id: string };
  PadDetailsScreen: { id: string };
  ProgramDetailsScreen: { id: string };
  RocketDetailsScreen: { id: string };
  SettingsThemeScreen: undefined;
};
