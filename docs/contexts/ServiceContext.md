# `ServiceContext` Documentation

## Overview

The `ServiceContext` provides a context for managing service-related information within the application. It holds the version information of the service.

## Context

### `service`

- Type: `{ version: string }`
- Description: An object containing information about the service, including its version.

## Usage

### Importing

```javascript
import {ServiceContext} from './path/to/ServiceContext';
```

### Example

```javascript
import React, {useContext} from 'react';
import {Text} from 'react-native';
import {ServiceContext} from './path/to/ServiceContext';

const ServiceInfo = () => {
  const {service} = useContext(ServiceContext);

  return <Text>Service Version: {service.version}</Text>;
};

export default ServiceInfo;
```

## Explanation

- The `ServiceContext` allows components to access service-related information, such as the version of the service.
- Components can consume this context using the `useContext` hook to access the `service` object containing the service version.
