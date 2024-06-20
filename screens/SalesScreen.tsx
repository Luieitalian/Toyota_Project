import {StatusBar, View} from 'react-native';
import React, {useCallback, useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useSalesScreenStyle from './styles/useSalesScreenStyle';
import CartProducts from '@/components/salesScreen/CartProducts';
import SalesScreenOptions from '@/components/salesScreen/SalesScreenOptions';
import Footer from '@/components/common/Footer';
import {FavoritesContext} from '@/contexts/FavoritesContext/FavoritesContext';
import {useFocusEffect} from '@react-navigation/native';
import setFavoritesToLocalDB from '@/utils/setFavoritesToLocalDB';

const SalesScreen = ({route, navigation}: any) => {
  const {styles, theme} = useSalesScreenStyle();

  const {favorites} = useContext(FavoritesContext);

  useFocusEffect(
    useCallback(() => {
      setFavoritesToLocalDB(favorites);
    }, [favorites])
  );

  return (
    <SafeAreaView style={styles.screenView}>
      <StatusBar
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />
      <View style={styles.container}>
        <CartProducts />
        <SalesScreenOptions />
      </View>
      <Footer />
    </SafeAreaView>
  );
};
export default SalesScreen;
