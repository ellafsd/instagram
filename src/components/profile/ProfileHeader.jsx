import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BurgerMenu, Plus, Dropdown } from '../../utils/icons';

const profileUser = {
  name: 'Ella Girin',
};

const ProfileHeader = () => {
  return (
    <View style={styles.header}>
      {/* Left Section - Name and Dropdown */}
      <View style={styles.leftSection}>
        <Text style={styles.username}>{profileUser.name}</Text>
        <Dropdown />
      </View>

      {/* Right Section - Plus and Burger Menu */}
      <View style={styles.rightSection}>
        <TouchableOpacity activeOpacity={0.7}>
          <Plus size={30} />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7}>
          <BurgerMenu />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5, // Ensures a little space between name and dropdown
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
