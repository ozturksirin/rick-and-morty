import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "@/Navigation";

export type DetailProps = {
  route: RouteProp<RootStackParamList, "Detail">;
  navigation: NativeStackScreenProps<RootStackParamList, "Detail">;
};
