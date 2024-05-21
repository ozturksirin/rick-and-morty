import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "@/Navigation";

export type HomeProps = {
  navigation: NativeStackScreenProps<RootStackParamList, "Home">;
};

export type RootStackParamList = {
  Home: undefined;
  Detail:
    | { id: number; name: string; episode: string; airDate: string }
    | undefined;
};
