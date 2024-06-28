import { View, Text, Button, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { Avatar, List } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "@/services/auth/context";
import { useRouter } from "expo-router";

const Setting = () => {
  const { onLogout, user } = useContext(AuthContext);
  const route = useRouter();
  return (
    <SafeAreaView>
      <List.Section>
        <View className="items-center mb-10">
          <TouchableOpacity onPress={() => route.push("/camera")}>
            <Avatar.Icon size={150} icon="human" className="bg-sky-500 mb-2" />
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
