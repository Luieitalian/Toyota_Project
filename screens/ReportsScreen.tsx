import React from 'react';
import {View, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Status from '@/components/common/Status';
import Footer from '@/components/common/Footer';
import useReportsScreenStyle from './styles/useReportsScreenStyle';
import GoToPastSales from '@/components/reportsScreen/GoToPastSales';
import SynchronizeUnsentCarts from '@/components/reportsScreen/SynchronizeUnsentCarts';
import ShowUsers from '@/components/reportsScreen/ShowUsers';
import ShowSpecialOffers from '@/components/reportsScreen/ShowSpecialOffers';

const ReportsScreen = ({route, navigation}: any) => {
  const {styles, theme} = useReportsScreenStyle();

  return (
    <SafeAreaView style={styles.screenView}>
      <StatusBar
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />
      <View style={styles.group}>
        <View style={styles.flexRow}>
          <GoToPastSales />
          <ShowSpecialOffers />
        </View>
        <View style={styles.flexRow}>
          <SynchronizeUnsentCarts />
          <ShowUsers />
        </View>
        <Status />
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default ReportsScreen;
