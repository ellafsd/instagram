import {StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import {Bookmark, Comment, Heart, Share, Dots} from '../../utils/icons';
import FitImage from './FitImage';
import ReadMore from '@fawazahmed/react-native-read-more';
import { useState } from 'react';

const Post = ({post}) => {
  const [showTranslation, setShowTranslation] = useState(false); 


  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <View style={styles.username}>
          <Image source={{uri: post.user.avatar}} style={styles.avatar} />
          <Text style={styles.title}> {post.user.name} </Text>
        </View>
        <Dots />
      </View>

      <FitImage src={post.image} />

      <View style={styles.content}>``
        {/* Actions: Like, Comment, Share, Bookmark */}
        <View style={styles.actions}>
          <View style={styles.leftActions}>
            
            <TouchableOpacity style={styles.action}>
              <Heart size={24} />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.action, styles.commentContainer]}>
              <Comment />
              {post.comments > 0 && (
                <Text style={styles.commentCount}>{post.comments}</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity style={styles.action}>
              <Share />
            </TouchableOpacity>

          </View>

          <View style={styles.rightActions}>
            <TouchableOpacity>
              <Bookmark />
            </TouchableOpacity>
          </View>
        </View>

        {/* Likes Count */}
        <View>
          <Text style={styles.likes}> {post.likes} likes </Text>
        </View>

        {/* Post Description with ReadMore */}
        <SafeAreaView style={styles.safe}>
          <View style={styles.descriptionRoot}>
            <ReadMore
              numberOfLines={2}
              seeLessStyle={{color: '#999'}}
              seeLessText="less"
              seeMoreText="more"
              seeMoreStyle={{color: '#999'}}
              style={styles.textStyle}>
              <Text style={styles.user}>{post?.user.name}</Text>
              {`  ${post?.description}`}
            </ReadMore>
          </View>
        </SafeAreaView>

        {/* Time + See Translation Button */}
        <View style={styles.dateTranslationContainer}>
          <Text style={styles.date}>{post.date} </Text>
          <TouchableOpacity onPress={() => setShowTranslation(!showTranslation)}>
            <Text style={styles.translation}> •  See Translation</Text>
          </TouchableOpacity>
        </View>

        {/* Show Translated Description if Clicked */}
        {showTranslation && (
          <Text style={styles.translationText}>{post.description_es}</Text>
        )}
      </View>
    </View>
  );
};
export default Post;

const styles = StyleSheet.create({
  post: {
    marginBottom: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  username: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginRight: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
  },
  content: {
    paddingHorizontal: 15,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  leftActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  action: {
    marginRight: 12,
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likes: {
    fontWeight: '600',
    marginVertical: 4,
  },

  commentCount: {
    marginLeft: 5, 
    fontSize: 14,
    fontWeight: '400',
    alignSelf: 'center',  
  },


  user: {
    fontWeight: 'bold', 
    fontSize: 14,
  },


  dateTranslationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',  
    marginTop: 15,
    paddingHorizontal: 0, 
    marginLeft: 0, 
  },

  date: {
    fontSize: 13,
    opacity: 0.5,
  },

  translationText: {
    fontSize: 14,
    marginTop: 5,
    color: '#333',
  },

  translation: {
    fontSize: 13,
    fontWeight: '600',
    color: '#007AFF',
  },

  safe: {
    flex: 0, // Don't take up extra space
  },
  descriptionRoot: {
    padding: 0, // Remove default padding since we handle it in content
  },
  textStyle: {
    fontSize: 14,
    lineHeight: 18,
  },


});
