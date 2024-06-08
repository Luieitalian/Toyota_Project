# `ProductsScreen` Component Documentation

## Overview

The `ProductsScreen` component is a screen in the HızlıPos React Native application responsible for displaying products. It provides functionalities for searching and filtering products based on text and category. It includes a `SearchBar` component for entering search queries, a `FilteringBar` component for selecting product categories, a list of products displayed using the `Products` component, and a footer component (`Footer`).

## Dependencies

- `react`
- `react-native`
- `react-native-safe-area-context`
- `./styles/useProductsScreenStyle`
- `../components/SearchBar`
- `../components/FilteringBar`
- `../components/Products`
- `../components/Footer`

## Component Definition

```javascript
import {
  View,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import useProductsScreenStyle from './styles/useProductsScreenStyle';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchBar from '../components/SearchBar';
import FilteringBar from '../components/FilteringBar';
import Products from '../components/Products';
import Footer from '../components/Footer';

const ProductsScreen = ({route, navigation}: any) => {
  const {styles, theme} = useProductsScreenStyle();
  const [text, setText] = useState<string>('');
  const [category, setCategory] = useState<string | undefined>('favorites');
  const [submittedText, setSubmittedText] = useState<string | undefined>(
    undefined
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
    if (text !== undefined) {
      setSubmittedText(text);
    }
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
```

## Usage

### Props

- `route`: Route object containing the route's information.
- `navigation`: Navigation object providing functions to navigate to different screens.
