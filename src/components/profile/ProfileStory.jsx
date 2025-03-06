import {ScrollView, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { COLORS } from '../../theme/color';


const ProfileStory = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.stories}>

      <View style={styles.storyText}>
        <View style={styles.storyAround}>
          <Image
            source={{
              uri: 'https://picsum.photos/1080/607?random=1'}}
            style={styles.story}
          />
        </View>
        <Text>Friends</Text>
      </View>

      <View style={styles.storyText}>
        <View style={styles.storyAround}>
          <Image
            source={{uri: 'https://picsum.photos/1080/607?random=2'}}
            style={styles.story}
          />
        </View>
        <Text>Hobbies</Text>
      </View>

      <View style={styles.storyText}>
        <View style={styles.storyAround}>
          <Image
            source={{uri: 'https://picsum.photos/1080/607?random=3'}}
            style={styles.story}
          />
        </View>
        <Text>Travel🌏</Text>
      </View>

      <View style={styles.storyText}>
        <View style={styles.storyAround}>
          <Image
            source={{uri: 'https://picsum.photos/1080/607?random=4'}}
            style={styles.story}
          />
        </View>
        <Text>Work💻</Text>
      </View>

      <View style={styles.storyText}>
        <View style={styles.storyAround}>
          <TouchableOpacity style={styles.newStoryButton}>
              <Text style={styles.plusSign}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </ScrollView>
  );
};

export default ProfileStory;

const styles = StyleSheet.create({
  stories: {
    paddingHorizontal: 15,
  },
  storyText: {
    marginRight: 10,
    alignItems: 'center',
  },
  storyAround: {
    borderColor: COLORS.GRAY2,
    borderWidth: 1,
    width: 70,
    height: 70,
    borderRadius: 35,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  story: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  newStoryButton: {
   justifyContent: 'center',
   alignItems:'center',
  },
  plusSign: {
    fontSize: 20,
    
  },
});
