import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { BlurView } from "expo-blur";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { getAppIcon, setAppIcon } from "expo-dynamic-app-icon";

const ICONS = [
  {
    name: "Default",
    id: "main",
    icon: require("@/assets/images/icon.png"),
  },
  {
    name: "Dark",
    id: "dark",
    icon: require("@/assets/images/icon-dark.png"),
  },
  {
    name: "Vivid",
    id: "vivid",
    icon: require("@/assets/images/icon-vivid.png"),
  },
];
const AccountPage = () => {
  const { user } = useUser();
  const { signOut } = useAuth();

  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [edit, setEdit] = useState(false);

  const [activeIcon, setActiveIcon] = useState("main");

  useEffect(() => {
    (async () => {
      const icon = await getAppIcon();
      setActiveIcon(icon);
    })();
  }, []);

  const onSaveUser = async () => {
    try {
      await user?.update({
        firstName: firstName!,
        lastName: lastName!,
      });
      // setEdit(false)
    } catch (error) {
      console.log({ error });
    } finally {
      setEdit(false);
    }
  };

  const onCaptureImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.75,
      base64: true,
    });

    if (!result.canceled) {
      const base64 = `data:image/png;base64,${result.assets[0].base64}`;
      user?.setProfileImage({
        file: base64,
      });
    }
  };

  const onChangeAppIcon = async (icon: string) => {
    await setAppIcon(icon.toLowerCase());
    setActiveIcon(icon);
  };

  return (
    <BlurView
      intensity={80}
      tint="dark"
      style={{ flex: 1, backgroundColor: "rgba(0,0,0,0)", paddingTop: 100 }}
    >
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity onPress={onCaptureImage} style={styles.captureBtn}>
          {user?.imageUrl && (
            <Image source={{ uri: user?.imageUrl }} style={styles.avatar} />
          )}
        </TouchableOpacity>

        {user && (
          <View style={{ flexDirection: "row", gap: 6 }}>
            {!edit && (
              <View style={styles.editRow}>
                <Text style={{ fontSize: 26, color: "white" }}>
                  {firstName} {lastName}
                </Text>
                <TouchableOpacity onPress={() => setEdit(true)}>
                  <Ionicons
                    name="ellipsis-horizontal"
                    size={24}
                    color={"#ffffff"}
                  />
                </TouchableOpacity>
              </View>
            )}
            {edit && (
              <View style={styles.editRow}>
                <TextInput
                  placeholder="First Name"
                  value={firstName || ""}
                  onChangeText={setFirstName}
                  style={[styles.inputField]}
                />
                <TextInput
                  placeholder="Last Name"
                  value={lastName || ""}
                  onChangeText={setLastName}
                  style={[styles.inputField]}
                />
                <TouchableOpacity onPress={onSaveUser}>
                  <Ionicons
                    name="checkmark-outline"
                    size={24}
                    color={"#ffffff"}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
      </View>
      <View style={styles.actions}>
        {ICONS.map((icon) => (
          <TouchableOpacity
            key={icon.id}
            onPress={() => onChangeAppIcon(icon.id)}
            style={styles.btn}
          >
            <Image source={icon.icon} style={{ width: 24, height: 24 }} />
            <Text style={{ color: "#fff", fontSize: 18 }}>{icon.name}</Text>
            {activeIcon?.toLowerCase() === icon.id.toLowerCase() && (
              <Ionicons name="checkmark-outline" size={24} color={"#ffffff"} />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  editRow: {
    marginTop: 20,
    flex: 1,
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.gray,
  },
  captureBtn: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.gray,
    justifyContent: "center",
  },
  inputField: {
    width: 140,
    height: 44,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#ffffff",
  },
  actions: {
    backgroundColor: "rgba(256, 256, 256, 0.1)",
    borderRadius: 16,
    gap: 0,
    margin: 20,
  },
  btn: {
    padding: 14,
    flexDirection: "row",
    gap: 20,
  },
});
export default AccountPage;
