import React, {useContext, useState} from 'react';
import {
  View,
  StatusBar,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';
import Footer from '@/components/common/Footer';
import usePastSalesScreenStyle from './styles/usePastSalesScreenStyle';
import {PastSalesContext} from '@/contexts/PastSalesContext/PastSalesContext';
import PastSalesDataTable from '@/components/pastSalesScreen/PastSalesDataTable';
import CustomSearchBar from '@/components/common/CustomSearchBar';

const PastSalesScreen = ({route, navigation}: any) => {
  const {t} = useTranslation();
  const {styles, theme} = usePastSalesScreenStyle();

  const [text, setText] = useState<string | undefined>();
  const [submittedText, setSubmittedText] = useState<string | undefined>(
    undefined
  );
  const {pastSales} = useContext(PastSalesContext);

  const onSubmitEditing = (
    event: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => {
    if (event.nativeEvent.text.length === 0) {
      setSubmittedText(undefined);
    } else {
      setSubmittedText(event.nativeEvent.text);
    }
  };

  const onChangeText = (text: string) => {
    if (text.length === 0) {
      setText('');
    } else {
      setText(text);
    }
  };

  return (
    <SafeAreaView style={styles.screenView}>
      <StatusBar
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />
      <CustomSearchBar
        onSubmitEditing={onSubmitEditing}
        onChangeText={onChangeText}
        text={text}
        placeholder={t('please_enter_an_orderID')}
        overridingSearchBarStyles={styles}
      />
      <View style={styles.contentContainer}>
        <PastSalesDataTable filter={submittedText} pastSales={pastSales} />
      </View>

      <Footer />
    </SafeAreaView>
  );
};

export default PastSalesScreen;
