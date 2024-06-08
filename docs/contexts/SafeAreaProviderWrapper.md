# `SafeAreaProviderWrapper` Documentation

## Overview

The `SafeAreaProviderWrapper` component is a wrapper that ensures content renders within the safe area boundaries of the device screen. It also applies styling to match the background color of the app theme.

## Props

### `children`

- Type: `React.ReactNode`
- Description: The child components to be wrapped within the `SafeAreaProvider`.

## Usage

### Importing

```javascript
import SafeAreaProviderWrapper from './path/to/SafeAreaProviderWrapper';
```

### Example

```javascript
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import SafeAreaProviderWrapper from './path/to/SafeAreaProviderWrapper';
import App from './App';

const Main = () => {
  return (
    <PaperProvider>
      <SafeAreaProviderWrapper>
        <App />
      </SafeAreaProviderWrapper>
    </PaperProvider>
  );
};

export default Main;
```

## Explanation

- The `SafeAreaProviderWrapper` ensures that the content inside it renders within the safe area boundaries of the device screen, avoiding any overlap with notches, navigation bars, or other system-provided areas.
- It applies styling to the `SafeAreaProvider` to match the background color of the app theme, ensuring a consistent visual appearance across different screens.
