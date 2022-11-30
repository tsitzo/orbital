export interface LaunchDetailed {
  id: string;
  url: string;
  slug: string;
  flightclub_url: null | string;
  r_spacex_api_id: null;
  name: string;
  status: OrbitClass;
  last_updated: Date;
  updates: Update[];
  net: Date;
  window_end: Date;
  window_start: Date;
  probability: number | null;
  holdreason: null | string;
  failreason: null | string;
  hashtag: null | string;
  launch_service_provider: LaunchServiceProvider;
  rocket: Rocket;
  mission: Mission | null;
  pad: Pad;
  infoURLs: URL[];
  vidURLs: URL[];
  webcast_live: boolean;
  image: null | string;
  infographic: null | string;
  program: Program[];
  orbital_launch_attempt_count: number | null;
  location_launch_attempt_count: number;
  pad_launch_attempt_count: number;
  agency_launch_attempt_count: number;
  orbital_launch_attempt_count_year: number;
  location_launch_attempt_count_year: number;
  pad_launch_attempt_count_year: number;
  agency_launch_attempt_count_year: number;
  mission_patches: MissionPatch[];
}

export interface URL {
  priority: number;
  title: null | string;
  description: null | string;
  feature_image: null | string;
  url: string;
}

export interface LaunchServiceProvider {
  id: number;
  url: string;
  name: string;
  featured: boolean;
  type: LaunchServiceProviderType | null;
  country_code: string;
  abbrev: string;
  description: null | string;
  administrator: Administrator | null;
  founding_year: null | string;
  launchers: string;
  spacecraft: SpacecraftEnum;
  launch_library_url: string;
  total_launch_count: number;
  consecutive_successful_launches: number;
  successful_launches: number;
  failed_launches: number;
  pending_launches: number;
  consecutive_successful_landings: number;
  successful_landings: number;
  failed_landings: number;
  attempted_landings: number;
  info_url: null | string;
  wiki_url: null | string;
  logo_url: null | string;
  image_url: null | string;
  nation_url: null | string;
}

export enum Administrator {
  AdministratorBillNelson = "Administrator: Bill Nelson",
  AdministratorHiroshiYamakawa = "Administrator: Hiroshi Yamakawa",
  AdministratorTangDengjie = "Administrator: Tang Dengjie",
  AdministratorYuriBorisov = "Administrator: Yuri Borisov",
  CEOElonMusk = "CEO: Elon Musk",
  CEOHarryOHanley = "CEO: Harry O'Hanley",
  CEOJeffBezos = "CEO: Jeff Bezos",
  CEOKathyWarden = "CEO: Kathy Warden",
  CEOPeterBeck = "CEO: Peter Beck",
  CEOStéphaneIsraël = "CEO: Stéphane Israël",
  CEOTimEllis = "CEO: Tim Ellis",
  CEOToryBruno = "CEO: Tory Bruno",
  CEOZhangDi = "CEO: Zhang Di",
  ChairmanPresidentLeiFanpei = "Chairman & President: Lei Fanpei",
  ChairmanRMadhavan = "Chairman: R. Madhavan",
  ChairmanSSomanath = "Chairman: S. Somanath",
  CommanderAleksandrGolovko = "Commander: Aleksandr Golovko",
  DirectorAlexanderDegtyarev = "Director: Alexander Degtyarev",
  DirectorAndreyVladimirovichKalinovskiy = "Director: Andrey Vladimirovich Kalinovskiy",
  DmitryBaranov = "Dmitry Baranov",
  FounderRichardBranson = "Founder: Richard Branson",
  JohannDietrichWörner = "Johann-Dietrich Wörner",
  KirkPysher = "Kirk Pysher",
  LeanneCaret = "Leanne Caret",
  MortezaBarari = "Morteza Barari",
  PresidentDanHart = "President: Dan Hart",
  PresidentDavidMitchell = "President: David Mitchell",
  PresidentDavidWThompson = "President: David W. Thompson",
  PresidentSeijiIzumisawa = "President: Seiji Izumisawa",
  PresidentTakahiroInagawa = "President: Takahiro Inagawa",
  TomMarkusic = "Tom Markusic",
}

export enum SpacecraftEnum {
  CST100Starliner = "CST-100 Starliner",
  Cygnus = "Cygnus",
  Dragon = "Dragon",
  Empty = "",
  Gaganyaan = "Gaganyaan",
  HubbleJUNOInSight = "Hubble | JUNO | InSight",
  KounotoriHTV = "Kounotori, HTV",
  Orion = "Orion",
  Soyuz = "Soyuz",
  Starliner = "Starliner",
  VSSEnterpriseVSSUnity = "VSS Enterprise, VSS Unity",
}

export enum LaunchServiceProviderType {
  Commercial = "Commercial",
  Government = "Government",
  Multinational = "Multinational",
  Private = "Private",
}

export interface Mission {
  id: number;
  name: string;
  description: string;
  launch_designator: null;
  type: MissionType;
  orbit: OrbitClass | null;
}

export interface OrbitClass {
  id: number;
  name: OrbitEnum;
  abbrev: Abbrev;
  description?: string;
}

export enum Abbrev {
  Asds = "ASDS",
  Asteroid = "Asteroid",
  DirectGEO = "Direct-GEO",
  Elliptical = "Elliptical",
  Failure = "Failure",
  Go = "Go",
  Gso = "GSO",
  Gsto = "GSTO",
  Gto = "GTO",
  HelioNA = "Helio-N/A",
  InFlight = "In Flight",
  L1Point = "L1-point",
  L2 = "L2",
  Leo = "LEO",
  Lo = "LO",
  Mars = "Mars",
  Meo = "MEO",
  NA = "N/A",
  Ocean = "Ocean",
  PartialFailure = "Partial Failure",
  Pl = "PL",
  Po = "PO",
  Rtls = "RTLS",
  SolarEsc = "Solar Esc.",
  Sso = "SSO",
  Sub = "Sub",
  Success = "Success",
  Tbc = "TBC",
  Tbd = "TBD",
  Venus = "Venus",
}

export enum OrbitEnum {
  Asteroid = "Asteroid",
  AutonomousSpaceportDroneShip = "Autonomous Spaceport Drone Ship",
  EllipticalOrbit = "Elliptical Orbit",
  GeostationaryOrbit = "Geostationary Orbit",
  GeostationaryTransferOrbit = "Geostationary Transfer Orbit",
  GeosynchronousOrbit = "Geosynchronous Orbit",
  GeosynchronousTransferOrbit = "Geosynchronous Transfer Orbit",
  GoForLaunch = "Go for Launch",
  HeliocentricL1 = "Heliocentric L1",
  HeliocentricNA = "Heliocentric N/A",
  LaunchFailure = "Launch Failure",
  LaunchInFlight = "Launch in Flight",
  LaunchSuccessful = "Launch Successful",
  LaunchWasAPartialFailure = "Launch was a Partial Failure",
  LowEarthOrbit = "Low Earth Orbit",
  LunarOrbit = "Lunar Orbit",
  MarsOrbit = "Mars Orbit",
  MediumEarthOrbit = "Medium Earth Orbit",
  Ocean = "Ocean",
  ParachuteLanding = "Parachute Landing",
  PolarOrbit = "Polar Orbit",
  ReturnToLaunchSite = "Return to Launch Site",
  SolarEscapeTrajectory = "Solar Escape Trajectory",
  Suborbital = "Suborbital",
  SunEarthL2 = "Sun-Earth L2",
  SunSynchronousOrbit = "Sun-Synchronous Orbit",
  ToBeConfirmed = "To Be Confirmed",
  ToBeDetermined = "To Be Determined",
  Unknown = "Unknown",
  VenusOrbit = "Venus Orbit",
}

export enum MissionType {
  Astrophysics = "Astrophysics",
  Communications = "Communications",
  DedicatedRideshare = "Dedicated Rideshare",
  EarthScience = "Earth Science",
  GovernmentTopSecret = "Government/Top Secret",
  Heliophysics = "Heliophysics",
  HumanExploration = "Human Exploration",
  LunarExploration = "Lunar Exploration",
  Navigation = "Navigation",
  PlanetaryScience = "Planetary Science",
  Resupply = "Resupply",
  RoboticExploration = "Robotic Exploration",
  Suborbital = "Suborbital",
  Technology = "Technology",
  TestFlight = "Test Flight",
  Tourism = "Tourism",
  Unknown = "Unknown",
}

export interface MissionPatch {
  id: number;
  name: string;
  priority: number;
  image_url: string;
  agency: AgencyElement;
}

export interface AgencyElement {
  id: number;
  url: string;
  name: AgencyName;
  type?: LaunchServiceProviderType;
}

export enum AgencyName {
  Arianespace = "Arianespace",
  AxiomSpace = "Axiom Space",
  BlueOrigin = "Blue Origin",
  Boeing = "Boeing",
  BrazilianSpaceAgency = "Brazilian Space Agency",
  CanadianSpaceAgency = "Canadian Space Agency",
  ChinaAerospaceScienceAndTechnologyCorporation = "China Aerospace Science and Technology Corporation",
  ChinaNationalSpaceAdministration = "China National Space Administration",
  EuropeanSpaceAgency = "European Space Agency",
  HindustanAeronauticsLimited = "Hindustan Aeronautics Limited",
  IndianSpaceResearchOrganization = "Indian Space Research Organization",
  InternationalSpaceStation = "International Space Station",
  JapanAerospaceExplorationAgency = "Japan Aerospace Exploration Agency",
  MohammedBinRashidSpaceCentre = "Mohammed bin Rashid Space Centre",
  NationalAeronauticsAndSpaceAdministration = "National Aeronautics and Space Administration",
  NationalOceanicAndAtmosphericAdministration = "National Oceanic and Atmospheric Administration",
  NationalReconnaissanceOffice = "National Reconnaissance Office",
  NorthropGrummanSpaceSystems = "Northrop Grumman Space Systems",
  OrbitalATK = "Orbital ATK",
  RocketLabLtd = "Rocket Lab Ltd",
  RussianFederalSpaceAgencyROSCOSMOS = "Russian Federal Space Agency (ROSCOSMOS)",
  RussianSpaceForces = "Russian Space Forces",
  SierraNevadaCorporation = "Sierra Nevada Corporation",
  SovietSpaceProgram = "Soviet Space Program",
  SpaceX = "SpaceX",
  Tiangong1 = "Tiangong 1",
  Tiangong2 = "Tiangong 2",
  UnitedStatesAirForce = "United States Air Force",
  UnitedStatesDepartementOfDefense = "United States Departement of Defense",
  UnitedStatesSpaceForce = "United States Space Force",
  VirginGalactic = "Virgin Galactic",
}

export interface Pad {
  id: number;
  url: string;
  agency_id: number | null;
  name: string;
  info_url: null | string;
  wiki_url: null | string;
  map_url: null | string;
  latitude: null | string;
  longitude: null | string;
  location: PadLocation;
  map_image: string;
  total_launch_count: number;
  orbital_launch_attempt_count: number;
}

export interface PadLocation {
  id: number;
  url: string;
  name: string;
  country_code: CountryCode;
  map_image: string;
  total_launch_count: number;
  total_landing_count: number;
}

export enum CountryCode {
  Chn = "CHN",
  Empty = "",
  Fra = "FRA",
  Guf = "GUF",
  ISR = "ISR",
  Ind = "IND",
  Irn = "IRN",
  Jpn = "JPN",
  Kaz = "KAZ",
  Nzl = "NZL",
  Prk = "PRK",
  Rus = "RUS",
  Usa = "USA",
}

export interface Program {
  id: number;
  url: string;
  name: ProgramName;
  description: string;
  agencies: AgencyElement[];
  image_url: string;
  start_date: Date;
  end_date: Date | null;
  info_url: null | string;
  wiki_url: string;
  mission_patches: any[];
}

export enum ProgramName {
  Artemis = "Artemis",
  ChineseLunarExplorationProgram = "Chinese Lunar Exploration Program",
  CommercialCrewProgram = "Commercial Crew Program",
  CommercialResupplyServices = "Commercial Resupply Services",
  Gaganyaan = "Gaganyaan",
  InternationalSpaceStation = "International Space Station",
  Shenzhou = "Shenzhou",
  Soyuz = "Soyuz",
  SpaceShuttle = "Space Shuttle",
  SpaceXStarship = "SpaceX Starship",
  TiangongSpaceStation = "Tiangong space station",
}

export interface Rocket {
  id: number;
  configuration: Configuration;
  launcher_stage: LauncherStage[];
  spacecraft_stage: SpacecraftStage | null;
}

export interface Configuration {
  id: number;
  url: string;
  name: string;
  active: boolean;
  reusable: boolean;
  description: string;
  family: string;
  full_name: string;
  manufacturer: LaunchServiceProvider;
  program: Program[];
  variant: string;
  alias: Alias;
  min_stage: number | null;
  max_stage: number | null;
  length: number | null;
  diameter: number | null;
  maiden_flight: Date | null;
  launch_cost: null | string;
  launch_mass: number | null;
  leo_capacity: number | null;
  gto_capacity: number | null;
  to_thrust: number | null;
  apogee: number | null;
  vehicle_range: number | null;
  image_url: null | string;
  info_url: null | string;
  wiki_url: null | string;
  total_launch_count: number;
  consecutive_successful_launches: number;
  successful_launches: number;
  failed_launches: number;
  pending_launches: number;
}

export enum Alias {
  Cz3BE = "CZ-3B/E",
  Discovery = "Discovery",
  Empty = "",
  MinotaurOSPSLV = "Minotaur OSP-SLV",
  PeacekeeperSLV = "Peacekeeper SLV",
}

export interface LauncherStage {
  id: number;
  type: LauncherStageType;
  reused: boolean | null;
  launcher_flight_number: number;
  launcher: Launcher;
  landing: Landing | null;
  previous_flight_date: Date | null;
  turn_around_time_days: number;
  previous_flight: PreviousFlight | null;
}

export interface Landing {
  id: number;
  attempt: boolean;
  success: boolean | null;
  description: string;
  location: LandingLocation | null;
  type: OrbitClass | null;
}

export interface LandingLocation {
  id: number;
  name: string;
  abbrev: string;
  description: null | string;
  location: PadLocation | null;
  successful_landings: number;
}

export interface Launcher {
  id: number;
  url: string;
  details: string;
  flight_proven: boolean;
  serial_number: string;
  status: string;
  image_url: null | string;
  successful_landings: number;
  attempted_landings: number;
  flights: number;
  last_launch_date: Date | null;
  first_launch_date: Date | null;
}

export interface PreviousFlight {
  id: string;
  name: string;
}

export enum LauncherStageType {
  Core = "Core",
  StrapOnBooster = "Strap-On Booster",
}

export interface SpacecraftStage {
  id: number;
  url: string;
  mission_end: Date | null;
  destination: Destination;
  launch_crew: Crew[];
  onboard_crew: Crew[];
  landing_crew: Crew[];
  spacecraft: SpacecraftClass;
  docking_events: DockingEvent[];
}

export enum Destination {
  InternationalSpaceStation = "International Space Station",
  LowEarthOrbit = "Low Earth Orbit",
  Suborbital = "Suborbital",
  Tiangong1 = "Tiangong-1",
  Tiangong2 = "Tiangong-2",
  TiangongSpaceStation = "Tiangong space station",
}

export interface DockingEvent {
  spacestation: Spacestation;
  docking: Date;
  departure: Date;
  docking_location: DockingLocation;
}

export interface DockingLocation {
  id: number;
  name: string;
  spacestation: AgencyElement;
}

export interface Spacestation {
  id: number;
  url: string;
  name: AgencyName;
  status: SpacestationStatus;
  founded: Date;
  description: string;
  orbit: OrbitEnum;
  image_url: string;
}

export interface SpacestationStatus {
  id: number;
  name: PurpleName;
}

export enum PurpleName {
  Active = "Active",
  DeOrbited = "De-Orbited",
  Destroyed = "Destroyed",
  Government = "Government",
  InTraining = "In-Training",
  LostInFlight = "Lost In Flight",
  NonAstronautPassenger = "Non-Astronaut Passenger",
  NonHuman = "Non-Human",
  Private = "Private",
  Retired = "Retired",
  SingleUse = "Single Use",
  Unknown = "Unknown",
}

export interface Crew {
  id: number;
  role: RoleClass;
  astronaut: Astronaut;
}

export interface Astronaut {
  id: number;
  url: string;
  name: string;
  type: SpacestationStatus;
  status: SpacestationStatus;
  agency: AgencyElement | null;
  date_of_birth: Date | null;
  date_of_death: Date | null;
  nationality: Nationality;
  twitter: null | string;
  instagram: null | string;
  bio: string;
  profile_image: null | string;
  wiki: null | string;
  last_flight: Date | null;
  first_flight: Date | null;
}

export enum Nationality {
  American = "American",
  Brazilian = "Brazilian",
  British = "British",
  Canadian = "Canadian",
  Chinese = "Chinese",
  Dutch = "Dutch",
  Earthling = "Earthling",
  Emirati = "Emirati",
  Italian = "Italian",
  Japanese = "Japanese",
  Kyrgyzstan = "Kyrgyzstan",
  Russian = "Russian",
}

export interface RoleClass {
  id: number;
  role: RoleEnum;
  priority: number;
}

export enum RoleEnum {
  AnthropomorphicTestDevice = "Anthropomorphic Test Device",
  Commander = "Commander",
  FlightEngineer = "Flight Engineer",
  MissionSpecialist = "Mission Specialist",
  Operator = "Operator",
  Passenger = "Passenger",
  Pilot = "Pilot",
  SpacecraftCommander = "Spacecraft Commander",
  SpaceflightParticipant = "Spaceflight Participant",
  Tourist = "Tourist",
  ZeroGIndicator = "Zero-G Indicator",
}

export interface SpacecraftClass {
  id: number;
  url: string;
  name: string;
  serial_number: null | string;
  status: SpacestationStatus;
  description: string;
  spacecraft_config: SpacecraftConfig;
}

export interface SpacecraftConfig {
  id: number;
  url: string;
  name: string;
  type: SpacestationStatus;
  agency: SpacecraftConfigAgency;
  in_use: boolean;
  capability: string;
  history: string;
  details: string;
  maiden_flight: Date | null;
  height: number | null;
  diameter: number | null;
  human_rated: boolean;
  crew_capacity: number | null;
  payload_capacity: number | null;
  flight_life: string;
  image_url: null | string;
  nation_url: null | string;
  wiki_link: string;
  info_link: string;
}

export interface SpacecraftConfigAgency {
  id: number;
  url: string;
  name: AgencyName;
  featured: boolean;
  type: LaunchServiceProviderType;
  country_code: CountryCode;
  abbrev: string;
  description: string;
  administrator: Administrator;
  founding_year: string;
  launchers: string;
  spacecraft: string;
  parent: null;
  image_url: null | string;
  logo_url: string;
}

export interface Update {
  id: number;
  profile_image: string;
  comment: string;
  info_url: null | string;
  created_by: CreatedBy;
  created_on: Date;
}

export enum CreatedBy {
  CosmicPenguin = "Cosmic_Penguin",
  JRascagneres = "JRascagneres",
  Jay = "Jay",
  Nosu = "Nosu",
  Spacevogel = "spacevogel",
  SwGustav = "SwGustav",
}
