import { AntDesign, Feather, FontAwesome5, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";

const iconSize = 30;
export const Icons = {
  Home: (props) => <MaterialCommunityIcons name="home-variant-outline" {...props} size={38} />,
  Settings: (props) => <Octicons name="gear" {...props} size={iconSize} />,
  Notification: (props) => <Feather name="bell" {...props} size={iconSize} />,
  Profile: (props) => <FontAwesome5 name="user" {...props} size={iconSize} />,
};