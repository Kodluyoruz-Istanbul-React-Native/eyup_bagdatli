
import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Container, Header, Body, Title } from 'native-base';
import { StatusBar } from 'react-native';




class App extends Component {

  constructor(props) {
    super(props);
    setTimeout(
      () => {
        StatusBar.setBackgroundColor('#128C7E');
      }, 100);
  }



  componentDidMount() {
    console.log("componentDidMount")
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate")
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {

    console.log('render');
    return (
      <Container>
        <Header>
          <Body>
            <Title>
              WhatsApp
            </Title>
          </Body>
        </Header>
      </Container>

    );
  }
}





export { App }
