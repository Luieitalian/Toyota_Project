import {
  View,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';
import React, {useState} from 'react';
import useProductsScreenStyle from './styles/useProductsScreenStyle';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTranslation} from 'react-i18next';
import SearchBar from '../components/SearchBar';
import FilteringBar from '../components/FilteringBar';
import Products from '../components/Products';

const ProductsScreen = ({route, navigation}: any) => {
  const {styles, theme} = useProductsScreenStyle();
  const [text, setText] = useState<string>('');
  const [category, setCategory] = useState<string | undefined>('favorites');
  const [submittedText, setSubmittedText] = useState<string | undefined>(
    undefined
  );

  const {t} = useTranslation();

  const onSubmitEditing = (
    event: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => {
    setSubmittedText(event.nativeEvent.text);
  };

  const onChangeText = (text: string) => {
    setText(text);
  };

  const onChangeCategory = (category: string) => {
    if (text !== undefined) {
      setSubmittedText(text);
    }
    setCategory(category);
  };

  return (
    <SafeAreaView style={styles.screenView}>
      <View style={styles.listHeader}>
        <SearchBar
          t={t}
          theme={theme}
          text={text}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
        />
        <FilteringBar
          category={category}
          onChangeCategory={onChangeCategory}
          t={t}
          theme={theme}
        />
      </View>
      <Products
        submittedText={submittedText}
        category={category}
        t={t}
        theme={theme}
      />
    </SafeAreaView>
  );
};
export default ProductsScreen;
