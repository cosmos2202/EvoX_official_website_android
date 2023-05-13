import React from 'react';
import { WebView } from 'react-native-webview';

const MyWebComponent = () => {
  return <WebView source={{ uri: 'https://evolution-network.org/' }} style={{ flex: 1 }} />;
}

export default MyWebComponent;