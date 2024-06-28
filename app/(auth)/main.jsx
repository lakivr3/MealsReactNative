import {
  View,
  Text,
  ImageBackground,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import image from "@/assets/image.jpg";
import { useRouter } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
const Index = () => {
  const route = useRouter();
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      className="flex-1 justify-center items-center opacity-80 "
    >
      <Text className="mb-8 font-lato text-2xl">MealsToGo</Text>

      <View className="bg-white opacity-90   w-52 h-48 items-center justify-evenly  ">
        <TouchableOpacity
          onPress={() => route.push("/loginscreen")}
          className="justify-center bg-sky-500 w-28 h-14 flex-row items-center  "
        >
          <Entypo
            name="lock-open"
            size={14}
            color="white"
            style={{ marginTop: 2 }}
          />
          <Text className="text-center font-oswald text-white ml-2  ">
            LOGIN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => route.push("/registerscreen")}
          className="justify-center bg-sky-500 w-28 h-14  flex-row items-center"
        >
          <FontAwesome
            name="envelope"
            size={14}
            color="white"
            style={{ marginTop: 2 }}
          />
          <Text className="text-center  font-oswald text-white  ml-2">
            REGISTER
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Index;
