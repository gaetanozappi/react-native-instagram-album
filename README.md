# React Native: react-native-instagram-album

[![GitHub package version](https://img.shields.io/github/package-json/v/gaetanozappi/react-native-instagram-album.svg?style=flat&colorB=2b7cff)](https://github.com/gaetanozappi/react-native-instagram-album)
[![github home](http://img.shields.io/npm/v/react-native-instagram-album.svg?style=flat)](https://www.npmjs.com/package/react-native-instagram-album)
![platforms](https://img.shields.io/badge/platforms-Android-brightgreen.svg?style=flat&colorB=191A17)
[![github home](https://img.shields.io/badge/gaetanozappi-react--native--instagram--album-blue.svg?style=flat)](https://github.com/gaetanozappi/react-native-instagram-album)
[![npm](https://img.shields.io/npm/dm/react-native-instagram-album.svg?style=flat&colorB=007ec6)](https://www.npmjs.com/package/react-native-instagram-album)

[![github issues](https://img.shields.io/github/issues/gaetanozappi/react-native-instagram-album.svg?style=flat)](https://github.com/gaetanozappi/react-native-instagram-album/issues)
[![github closed issues](https://img.shields.io/github/issues-closed/gaetanozappi/react-native-instagram-album.svg?style=flat&colorB=44cc11)](https://github.com/gaetanozappi/react-native-instagram-album/issues?q=is%3Aissue+is%3Aclosed)
[![Issue Stats](https://img.shields.io/issuestats/i/github/gaetanozappi/react-native-instagram-album.svg?style=flat&colorB=44cc11)](http://github.com/gaetanozappi/react-native-instagram-album/issues)
[![github license](https://img.shields.io/github/license/gaetanozappi/react-native-instagram-album.svg)]()

![GIF](screenshot/react-native-instagram-album.gif)

-   [Usage](#-usage)
-   [License](#-license)

## 📖 Getting started

`$ npm install react-native-instagram-album --save`

## 💻 Usage

```javascript
module.exports = {
  album: {
    artists: [
      {
        name: 'Adele',
        type: 'artist',
      },
    ],
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/c018e59487df998eb8587d312b0b3233fdeff0fc',
        width: 640,
      },
      {
        height: 300,
        url: 'https://i.scdn.co/image/5fcea2eb9b4735d28ca058d65bf1ded516eb46c8',
        width: 300,
      },
      {
        height: 64,
        url: 'https://i.scdn.co/image/ed960c43f1681e40bef38a03cde02a36bd6af791',
        width: 64,
      },
    ],
  },
  artists: [
    {
      name: 'Adele',
      type: 'artist',
    },
  ],
  duration_ms: 295502,
  name: 'Hello',
  preview_url:
    'https://p.scdn.co/mp3-preview/4ab65f9b193ccc37f2059344322462ae5e9dac90',
};
```

```javascript
import * as React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

import Album from 'react-native-instagram-album';
import Track from './Track';
const State = ['normal', 'transparent', 'big'];

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      track: Track,
      type: 1,
    };
  }

  setPlay = track => {
    this.setState({ track });
  };

  render() {
    let { type, track } = this.state;

    return (
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri:
              'https://i.pinimg.com/originals/62/6f/84/626f84c40696c1308a77fd8331e12b3e.jpg',
          }}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 250,
            width: 400,
            marginBottom: 15,
          }}>
          {track != null && (
            <Album
              type={State[type]} //normal,transparent,big
              title={track.name}
              artist={track.artists[0].name}
              cover={track.album.images[0].url}
              preview_url={track.preview_url}
              onPress={() => {
                type = ++type % 3;
                this.setState({ type });
              }}
            />
          )}
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
```

## 💡 Props

| Prop              | Type       | Default | Note                                                                                                       |
| ----------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `type`       | `string`   |  `transparent`  | Type album.
| `title`      | `string`   | `Title` | Title album.
| `artist`      | `string`   | `Artist` | Artist album.
| `cover`      | `string`   |  `https://gdsit.cdn-immedia.net/2015/12/Vinile-Disco.jpg` | Cover album.
| `preview_url`      | `string`   |  |
| `onPress`      | `function`   |  |

## 📜 License
This library is provided under the Apache License.
