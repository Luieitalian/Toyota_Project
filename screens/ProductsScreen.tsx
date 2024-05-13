import {
  View,
  FlatList,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
  ListRenderItemInfo,
} from 'react-native';
import React, {useState} from 'react';
import useProductsScreenStyle from './styles/useProductsScreenStyle';
import useProducts from '../hooks/useProducts';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTranslation} from 'react-i18next';
import {ActivityIndicator} from 'react-native-paper';
import SearchBar from '../components/SearchBar';
import FilteringBar from '../components/FilteringBar';
import Header from '../components/Header';
import Products from '../components/Products';

const ProductsScreen = ({route, navigation}: any) => {
  const {styles, theme} = useProductsScreenStyle();
  const [text, setText] = useState<string>('');
  const [category, setCategory] = useState<string | undefined>(undefined);
  const [submittedText, setSubmittedText] = useState<string | undefined>(
    undefined
  );
  const {t, i18n} = useTranslation();

  const {products, loadingProducts} = useProducts(
    false,
    submittedText?.trim().toLocaleLowerCase('tr'),
    category
  );

  const onSubmitEditing = (
    event: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => {
    setSubmittedText(event.nativeEvent.text);
  };

  const onChangeText = (text: string) => {
    setText(text);
  };

  const onChangeCategory = (category: string) => {
    setSubmittedText(text);
    setCategory(category);
  };

  return (
    <SafeAreaView style={styles.screenView}>
      <View style={styles.listHeader}>
        <Header t={t} theme={theme} />
        <SearchBar
          t={t}
          theme={theme}
          text={text}
          disabled={loadingProducts}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
        />
        <FilteringBar
          disabled={loadingProducts}
          onChangeCategory={onChangeCategory}
          t={t}
          theme={theme}
        />
      </View>
      {loadingProducts ? (
        <ActivityIndicator theme={theme} />
      ) : (
        <Products t={t} theme={theme} products={products} />
      )}
    </SafeAreaView>
  );
};
export default ProductsScreen;
