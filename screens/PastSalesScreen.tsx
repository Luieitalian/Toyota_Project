import React, {useContext} from 'react';
import {View, StatusBar, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';
import Footer from '../components/Footer';
import usePastSalesScreenStyle from './styles/usePastSalesScreenStyle';
import {PastSalesContext} from '../contexts/PastSalesContext/PastSalesContext';
import PastSalesDataTable from '../components/PastSalesDataTable';

const PastSalesScreen = ({route, navigation}: any) => {
  const {t} = useTranslation();
  const {styles, theme} = usePastSalesScreenStyle();

  const {pastSales} = useContext(PastSalesContext);

  return (
    <SafeAreaView style={styles.screenView}>
      <StatusBar
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />
      <View style={styles.contentContainer}>
        <PastSalesDataTable pastSales={pastSales} />
      </View>

      <Footer />
    </SafeAreaView>
  );
};

export default PastSalesScreen;
