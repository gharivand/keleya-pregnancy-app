import React from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {images} from '../theme';

const Header = () => {
  const navigation = useNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onPressBack}
          style={styles.backButton}>
          <Image source={images.back} style={styles.backIcon} />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    zIndex: 2,
  },
  backButton: {
    marginTop: Platform.select({android: 12}),
    marginHorizontal: 20,
    padding: 8,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
});

export default Header;
