import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from "prop-types";

const size = 40;

export default class Album extends React.Component {
  constructor() {
    super();
    this.min = size / 4;
    this.max = size / 2;
    this.heightCenter = new Animated.Value(this.min);
    this.heightLateral = new Animated.Value(size / 2);
  }

  animateBar = (el, value) => {
    var newValue = value == this.max ? this.min : this.max;
    Animated.timing(el, {
      toValue: value,
    }).start(() => this.animateBar(el, newValue));
  };

  onPress = e => {
    return this.props.onPress(e);
  };

  componentDidMount() {
    console.log('componentDidMount');
    this.animateBar(this.heightCenter, this.min);
    this.animateBar(this.heightLateral, this.max);
    let { preview_url } = this.props;
    this.playSound(preview_url);
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  playSound = async preview_url => {
    console.log('playSound');
  };

  stopSound = async () => {
    console.log('stopSound');
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.preview_url !== this.props.preview_url) {
      console.log('componentWillReceiveProps');
      this.playSound(nextProps.preview_url);
    }
  }

  coverBig = el => {
    let { cover, barWidthCenter, barWidthLateral, title, artist } = el;
    return (
      <TouchableWithoutFeedback onPress={() => this.onPress()}>
        <View
          style={[
            {
              alignItems: 'center',
              justifyContent: 'center',
            },
          ]}>
          <ImageBackground
            source={{
              uri: cover,
            }}
            imageStyle={{ borderRadius: 4 }}
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
              height: 200,
              width: 200,
            }}>
            <View
              style={{
                borderRadius: 4,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0,0,0,0.3)',
                padding: 5,
                height: 40,
                width: 40,
                margin: 5,
              }}>
              <Animated.View
                style={[
                  {
                    backgroundColor: 'rgb(255,255,255)',
                    width: 5,
                    borderRadius: 5 / 2,
                    margin: 2,
                  },
                  barWidthLateral,
                ]}
              />
              <Animated.View
                style={[
                  {
                    backgroundColor: 'rgb(255,255,255)',
                    width: 5,
                    borderRadius: 5 / 2,
                    margin: 2,
                  },
                  barWidthCenter,
                ]}
              />
              <Animated.View
                style={[
                  {
                    backgroundColor: 'rgb(255,255,255)',
                    width: 5,
                    borderRadius: 5 / 2,
                    margin: 2,
                  },
                  barWidthLateral,
                ]}
              />
            </View>
          </ImageBackground>
          <View style={{ paddingLeft: 12, paddingRight: 12 }}>
            <Text style={{ fontWeight: 'bold', color: '#fff' }}>{title}</Text>
            <Text style={{ color: '#fff' }}>{artist}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  coverRed = el => {
    let {
      cover,
      barWidthCenter,
      barWidthLateral,
      title,
      artist,
      backgroundColor,
      color,
    } = el;
    return (
      <TouchableWithoutFeedback onPress={() => this.onPress()}>
        <Animated.View
          style={[
            {
              backgroundColor: backgroundColor,
              flexDirection: 'row',
              borderRadius: 4,
              padding: 4,
            },
          ]}>
          <ImageBackground
            source={{
              uri: cover,
            }}
            imageStyle={{ borderRadius: 4 }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              height: size,
              width: size,
            }}>
            <Animated.View
              style={[
                {
                  backgroundColor: 'rgb(255,255,255)',
                  width: 5,
                  borderRadius: 5 / 2,
                  margin: 2,
                },
                barWidthLateral,
              ]}
            />
            <Animated.View
              style={[
                {
                  backgroundColor: 'rgb(255,255,255)',
                  width: 5,
                  borderRadius: 5 / 2,
                  margin: 2,
                },
                barWidthCenter,
              ]}
            />
            <Animated.View
              style={[
                {
                  backgroundColor: 'rgb(255,255,255)',
                  width: 5,
                  borderRadius: 5 / 2,
                  margin: 2,
                },
                barWidthLateral,
              ]}
            />
          </ImageBackground>
          <View style={{ paddingLeft: 12, paddingRight: 12 }}>
            <Text style={{ fontWeight: 'bold', color }}>{title}</Text>
            <Text style={{ color }}>{artist}</Text>
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  };

  render() {
    let { type, title, artist, cover } = this.props;
    if (type != 'normal' && type != 'transparent' && type != 'big')
      type = 'transparent';
    let barWidthCenter = {
      height: this.heightCenter,
    };
    let barWidthLateral = {
      height: this.heightLateral,
    };
    let backgroundColor =
      type == 'normal' ? 'rgb(255,255,255)' : 'rgba(255,255,255,0.5)';
    let color = type == 'normal' ? '#000' : '#fff';
    var el = {
      cover,
      barWidthCenter,
      barWidthLateral,
      title,
      artist,
      backgroundColor,
      color,
    };
    if (type == 'big') return this.coverBig(el);
    return this.coverRed(el);
  }
}

Album.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  artist: PropTypes.string,
  cover: PropTypes.string,
  preview_url: PropTypes.string,
};

Album.defaultProps = {
  type: "transparent",
  title: "Title",
  artist: "Artist",
  cover: "https://gdsit.cdn-immedia.net/2015/12/Vinile-Disco.jpg"
};
