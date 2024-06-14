# `useProducts` Hook Documentation

## Overview

The `useProducts` hook is a custom React hook that manages the fetching and state of product data in a React Native application. It retrieves product information either from a remote server or from local storage, depending on the online status of the application and whether the local database has been initialized.

## Dependencies

- `react`
- `@react-native-async-storage/async-storage`
- `axios`
- `@/models/ProductModel`

## Types

```tsx
type useProductsArgs = {
  isOnline: boolean;
  isDatabaseInitialized: boolean;
};
```

- `isOnline`: A boolean that indicates whether the application is online.
- `isDatabaseInitialized`: A boolean that indicates whether the local database has been initialized.

## Hook Definition

```js
const useProducts = ({isOnline, isDatabaseInitialized}: useProductsArgs) => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [loadingProducts, setLoadingProducts] = useState<boolean>(true);

  // Fetch products from the remote server
  const getProductsFromServer = async () => {
    console.log(`Trying to get products from server!`);
    try {
      const res = await axios.get('http://10.0.2.2:3000/products'); // Special alias to the host loopback interface
      console.log('Getting products from server!');
      const _products = res.data as ProductModel[];
      setProducts(_products);
      setLoadingProducts(false);
    } catch (error) {
      console.log(`Can't get products from server!`, error);
    }
  };

  // Fetch products from local storage
  const getProductsFromLocalDB = async () => {
    console.log(`Trying to get products from local database!`);
    try {
      const local_db_string = await AsyncStorage.getItem('database'); // if products exist in local storage then simply get them
      console.log('Getting products from local database!');
      const _products = JSON.parse(local_db_string as string)
        .products as ProductModel[];
      setProducts(_products);
      setLoadingProducts(false);
    } catch (error) {
      console.log(
        'Local database is empty (Forgot to call setDatabase hook?)',
        error
      );
    }
  };

  // Effect to manage product fetching based on online status and database initialization
  useEffect(() => {
    if (!isDatabaseInitialized) {
      return;
    }

    setLoadingProducts(true);
    if (isOnline) {
      getProductsFromServer();
    } else {
      getProductsFromLocalDB();
    }
    return () => console.log('Cleaning up effect');
  }, [isOnline, isDatabaseInitialized]);

  return {products, loadingProducts};
};

export default useProducts;
```

## Usage

### Arguments

- `isOnline`: Determines if the application is online. When `true`, products are fetched from the server. When `false`, products are fetched from local storage.
- `isDatabaseInitialized`: Ensures that the local database is initialized before attempting to fetch products from it.

### Returns

- `products`: An array of `ProductModel` objects representing the products.
- `loadingProducts`: A boolean indicating whether the products are currently being loaded.
