import {Image} from 'react-native';

const Logo = ({size}) => {
  return <Image source={require('../assets/logo.png')} />;
};

/* adjusts the size dynamically based on the size prop */
const Home = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/home.png')}
    />
  );
};

const HomeFiled = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/home-field.png')}
    />
  );
};

const Search = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/search.png')}
    />
  );
};

const SearchField = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/search-field.png')}
    />
  );
};

const Reel = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/reel.png')}
    />
  );
};

const ReelField = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/reel-field.png')}
    />
  );
};

const Shop = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/shop.png')}
    />
  );
};

const ShopField = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/shop-field.png')}
    />
  );
};

const Plus = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/plus.png')}
    />
  );
};

const Heart = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/heart.png')}
    />
  );
};

const Messenger = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/messenger.png')}
    />
  );
};



const Dots = () => {
  return (
    <Image
      style={{width: 15, height: 3}}
      source={require('../assets/more.png')}
    />
  );
};
const Bookmark = () => {
  return (
    <Image
      style={{width: 24, height: 24}}
      source={require('../assets/bookmark.png')}
    />
  );
};
const Comment = () => {
  return (
    <Image
      style={{width: 24, height: 24}}
      source={require('../assets/comment.png')}
    />
  );
};
const Share = () => {
  return (
    <Image
      style={{width: 24, height: 24}}
      source={require('../assets/share.png')}
    />
  );
};




export {
  Logo,
  Home,
  HomeFiled,
  Search,
  SearchField,
  Reel,
  ReelField,
  Shop,
  ShopField,
  Plus,
  Heart,
  Messenger,
  Dots,
  Bookmark,
  Comment,
  Share,
};
