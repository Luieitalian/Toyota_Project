import {
  View,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import useProductsScreenStyle from './styles/useProductsScreenStyle';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchBar from '@/components/common/SearchBar';
import FilteringBar from '@/components/productsScreen/FilteringBar';
import Products from '@/components/productsScreen/Products';
import Footer from '@/components/common/Footer';

const ProductsScreen = ({route, navigation}: any) => {
  const {styles, theme} = useProductsScreenStyle();
  const [text, setText] = useState<string | undefined>();
  const [category, setCategory] = useState<string>('favorites');
  const [submittedText, setSubmittedText] = useState<string | undefined>(
    undefined
  );

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
      setText(undefined);
    } else if (text.length >= 1) {
      setText(text);
    }
  };

  const onChangeCategory = (category: string) => {
    setSubmittedText(text);
    setCategory(category);
  };

  return (
    <SafeAreaView style={styles.screenView}>
      <StatusBar
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />
      <View style={styles.listHeader}>
        <SearchBar
          text={text}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
        />
        <FilteringBar category={category} onChangeCategory={onChangeCategory} />
      </View>
      <View style={styles.productsContainer}>
        <Products submittedText={submittedText} category={category} />
      </View>
      <Footer />
    </SafeAreaView>
  );
};
export default ProductsScreen;
