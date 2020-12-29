import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";


const Containter = styled.View`
    flex: 1;
    background-color: black;
    justify-content: center;
`;

const Content = styled.View`
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

const SubTitle = styled.Text`
    margin-left: 20px;
    font-size: 15px;
    font-weight: bold;
    color: white;
    width: 100%;
    height: 18%;
    justify-content: center;
`;

const MyChannelContainer = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
`;

const MyChannelButton = styled.View`
    width: 80%;
    height: 26%;
    background-color: black;
`;

const ButtonImage = styled.Image`
    width: 100%;
    height: 100%;
`;


export default () => {
    const [keyword, setKeyword] = useState("");
    const navigation = useNavigation();
    const onSubmit = () => {
        if(keyword === "") {
            return;
        } else{
            navigation.navigate("SearchList", [keyword]);
        }
        
    }
    const onChange = text => setKeyword(text);
    return (
        <Containter>
            <Content>
                <Title>My Channel</Title>
                <SubTitle>서비스이용을 위해 내 채널명을 입력해 주세요</SubTitle>
                <SearchBar
                    placeholder="채널 이름을 입력해주세요"
                    containerStyle={{backgroundColor: 'black', borderWidth: 1, borderRadius: 5}}
                    searchIcon
                    showLoading={true}
                    onChange={onChange}
                    value= { keyword }
                    onChangeText={ value =>setKeyword( value ) }
                    onSubmitEditing={onSubmit}
                />
            </Content>
            <MyChannelContainer>
                <MyChannelButton>
                    <ButtonImage source={require("../../images/search_my_ch.png")}/>
                </MyChannelButton>
            </MyChannelContainer>
        </Containter>
    );

};

