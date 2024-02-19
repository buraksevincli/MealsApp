import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ icon, color, onPres }) => {
  return (
    <Pressable
      onPress={onPres}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={20} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
