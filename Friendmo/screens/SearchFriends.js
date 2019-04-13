import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Left, Icon, Item, Thumbnail, Input, Button, Body } from 'native-base';
export default class SearchFriends extends Component {
  render() {
    return (
      <Container>
      <Header searchBar rounded>
         <Item>
           <Icon name="ios-search" />
           <Input placeholder="Search" />
           <Icon name="ios-people" />
         </Item>
         <Button transparent>
           <Text>Search</Text>
         </Button>
       </Header>
        <Content>
          <List>
            <ListItem itemHeader first>
              <Text>Top Friends</Text>
            </ListItem>
            <ListItem avatar>
            <Left>
              <Thumbnail source={{ uri: '../assets/images/robot-dev.png' }} />
            </Left>
            <Body>
              <Text>Edgar Zhu</Text>
            </Body>
            </ListItem>
            <ListItem avatar>
            <Left>
              <Thumbnail source={{ uri: '../assets/images/robot-dev.png' }} />
            </Left>
            <Body>
              <Text>Lucian Lum</Text>
              </Body>
            </ListItem>
            <ListItem avatar >
            <Left>
              <Thumbnail source={{ uri: '../assets/images/robot-dev.png' }} />
            </Left>
            <Body>
              <Text>Nick Bartolotta</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
