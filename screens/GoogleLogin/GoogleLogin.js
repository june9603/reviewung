import React, { Component } from 'react';
import { ActivityIndicator, Image } from "react-native";
import { GoogleSignin } from '@react-native-community/google-signin';
import Search from "../Search"
import styled from "styled-components";


const Container = styled.View`
    background-color: black;
    flex: 1;
    justify-content: center;
`;

const Title = styled.Text`
    margin-left: 20px;
    font-size: 30px;
    font-weight: bold;
    color: white;
    width: 100%;
    height: 18%;
    justify-content: center;
`;

const Content = styled.Text`
    margin-left: 20px;
    color: white;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    
`
const LoginContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

const LoginButton = styled.View`
    width: 80%;
    height: 26%;
    background-color: black;
`;

const LoginImage = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 8px;
`;

GoogleSignin.configure({
  webClientId: '589976840899-uuk4dmjdtor8v412ppq0nf3t40gg06m8.apps.googleusercontent.com',
  offlineAccess: true, 
});


export default class GoogleLogin extends Component {
  constructor(props){
    super(props);
    this.state={
      userGoogleInfo : {},
      loaded: false
    };
  }
 
  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({
        userGoogleInfo : userInfo,
        loaded : true
      });
      console.log(this.state.userGoogleInfo);
    } catch (error) {
        console.log(error.message);
      }
  };

  singOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({ 
        userGoogleInfo: null, 
        loaded: false 
      });
      alert("로그아웃 되었습니다.")
    } catch (error) {
      console.error(error);
    }
  };
 
  render() {

    if(this.state.loaded === true){
      return <Search/>;
    }
    return (
        <Container>
            <Image source={require('../../images/youtube-iccon.png')} />
            <Title>
                Google ID로{"\n"}
                시작해 보세요.
            </Title>
            <Content>
                저희 App은 Google에서 제공하는{"\n"}
                Youtube 플랫폼에서 채널의 영상 댓글의{"\n"}
                감성 분석을 진행하기 위해 Google ID로{"\n"}
                로그인을 해야 이용할 수 있습니다.
            </Content>
            {this.state.loaded ? <ActivityIndicator color="white" size="large" /> 
              : 
              <LoginContainer  onPress = {this.signIn}>
                  <LoginButton>
                      <LoginImage source= {require("../../images/googlelogin.png")} />
                  </LoginButton>
              </LoginContainer>
            }
        </Container>
    );
  }
};


