# `Theme Context`

## Overview

The `ThemeContext` is a React context that manages the theme of the application. It provides access to the current theme (dark or light) and a function to toggle between themes.

## Usage

To use the `ThemeContext`, follow these steps:

1. **Import Context**: Import the `ThemeContext` and its associated types into your component files.

   ```js
   import {createContext} from 'react';
   ```

2. **Access Context**: Access the theme context within your components using the `useContext` hook.

   ```js
   import {useContext} from 'react';
   import {ThemeContext} from '../path/to/ThemeContext';
   ```

3. **Use Context Data**: Once you have access to the context, you can use the theme and toggle function in your components.

   ```js
   const {isDark, toggleTheme} = useContext(ThemeContext);
   ```

## Context Data

The `ThemeContext` provides the following data:

- **isDark**: A boolean indicating whether the current theme is dark (`true`) or light (`false`).
- **toggleTheme**: A function that toggles between dark and light themes.

## Example

Here's an example of how to use the `ThemeContext` within a component:

```js
import {useContext} from 'react';
import {ThemeContext} from '../path/to/ThemeContext';

const ThemeToggleComponent = () => {
  const {isDark, toggleTheme} = useContext(ThemeContext);

  return (
    <div>
      <p>Current Theme: {isDark ? 'Dark' : 'Light'}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeToggleComponent;
```

## Context Provider

The `ThemeContext` should be wrapped by a provider component at the top level of your application. This provider component should be responsible for managing the theme state and updating the context accordingly.
