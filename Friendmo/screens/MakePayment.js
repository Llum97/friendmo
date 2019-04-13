
import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Textarea, Form, Button, Text} from 'native-base';
import {Keyboard, TextInput} from 'react-native';
export default class RoundedTextboxExample extends Component {
  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow() {
  }

  _keyboardDidHide() {
  }

  render() {
    return (
      <Container>
        <Content>
          <Item>
          <Input placeholder='Name'/>
          </Item>
          <Item>
            <Input placeholder="Amount" />
          </Item>
          <Item>
            <Input placeholder="What was it for?" />
          </Item>
          <Button><Text> Request </Text></Button>
        </Content>
        <TextInput onSubmitEditing={Keyboard.dismiss}>;
        </TextInput>
      </Container>
    );
  }
}
