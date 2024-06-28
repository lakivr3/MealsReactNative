import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { TextInput, ActivityIndicator } from "react-native-paper";
import image from "@/assets/image.jpg";
import { FontAwesome } from "@expo/vector-icons";

import React, { useContext, useState } from "react";
import { AuthContext } from "@/services/auth/context";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repPassword, setRepPassword] = useState("");
  const { onRegister, isLoading, error } = useContext(AuthContext);
  console.log(error);

  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      className="flex-1 justify-center items-center opacity-80 "
    >
      <Text className="mb-4 text-2xl font-lato">Register</Text>
      <View className="bg-white opacity-90  w-[75%] h-[350px]  items-center justify-evenly  ">
        <TextInput
          mode="outlined"
          value={email}
          label="Email"
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          // right={<TextInput.Affix text="/100" />}
          style={{ width: "85%" }}
          onChangeText={(e) => setEmail(e)}
        />
        <TextInput
          mode="outlined"
          value={password}
          textContentType="password"
          autoCapitalize="none"
          secureTextEntry
          label="Password"
          right={<TextInput.Icon icon="eye" />}
          style={{ width: "85%" }}
          onChangeText={(e) => setPassword(e)}
        />
        <TextInput
          mode="outlined"
          value={repPassword}
          textContentType="password"
          autoCapitalize="none"
          secureTextEntry
          label="Repeat Password"
          right={<TextInput.Icon icon="eye" />}
          style={{ width: "85%" }}
          onChangeText={(e) => setRepPassword(e)}
        />

        {/* <Text className="text-red-600">{error}</Text> */}
        <TouchableOpacity
          className="justify-center bg-sky-500  h-14  flex-row items-center w-[85%]"
          onPress={() => onRegister(email, password, repPassword)}
        >
          {!isLoading ? (
            <FontAwesome
              name="envelope"
              size={14}
              color="white"
              style={{ marginTop: 2 }}
            />
          ) : (
            <ActivityIndicator animating={true} color="blue" />
          )}

          <Text className="text-center  font-oswald text-white   ml-2">
            REGISTER
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
