import { View, Text, Button, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useFocusEffect } from "expo-router";
import { Avatar, List } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "@/services/auth/context";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Setting = () => {
  const { onLogout, user } = useContext(AuthContext);
  const [photo, setPhoto] = useState(null);
  const route = useRouter();

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(() => {
    getProfilePicture(user);
  });

  return (
    <SafeAreaView>
      <List.Section>
        <View className="items-center mb-10">
          <TouchableOpacity onPress={() => route.push("/camera")}>
            {!photo && (
              <Avatar.Icon
                size={150}
                icon="human"
                className="bg-sky-500 mb-2"
              />
            )}
            {photo && (
              <Avatar.Image
                size={150}
                source={{ uri: photo }}
                className="bg-sky-500 mb-2"
              />
            )}
          </TouchableOpacity>
          <Text className="font-oswald">{user?.email}</Text>
        </View>
        <List.Item
          title="Favorites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="red" icon="heart" />}
          style={{ padding: 16 }}
          onPress={() => route.push("/favorite")}
        />
        <List.Item
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          style={{ padding: 16 }}
          onPress={() => onLogout()}
        />
      </List.Section>
    </SafeAreaView>
  );
};

export default Setting;
