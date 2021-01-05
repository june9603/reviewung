import React, { useState } from "react";
import styled from "styled-components";
import { SearchBar } from 'react-native-elements';
import ScrollContainer from "../../components/ScrollContainer";
import GET_CHANNELS from "../../graphql";
import { useQuery } from '@apollo/client';



const SearchContainer = styled.View`
    margin-top: 20px;
`;

const KeywordContainer = styled.View`
    margin-top: 20px;
    margin-left: 20px;
    flex-direction: row;
`;

const SearchKeyword = styled.Text`
    font-weight: bold;
    color: greenyellow;
    padding-right: 10px;
`;

const KeywordRight = styled.Text`
    color: white;
`;

const ChannelListTitle = styled.Text`
    margin-top: 20px;
    font-weight: bold;
    margin-left: 20px;
    font-size: 20px;
    color: white;
`;


export default () => {
    const [keyword, setKeyword] = useState("");
    const onChange = text => setKeyword(text);
    const onSubmit = () => {
        if(keyword === "") {
            return;
        } 
    };
    // const {loading, error, data} = useQuery(GET_CHANNELS);
    return (
        <ScrollContainer
            refreshFn={onSubmit}
            loading={false}
            contentContainerStyle={{
                paddingTop: 10
            }}
        >
            <SearchContainer>
                <SearchBar
                    placeholder="검색어를 입력해주세요"
                    containerStyle={{backgroundColor: 'black', borderWidth: 1, borderRadius: 5}}
                    returnKeyType="search"
                    showLoading={true}
                    round={true}
                    onChange={onChange}
                    value={ keyword }
                    onChangeText={ value =>setKeyword( value ) }
                    onSubmitEditing={onSubmit}
                />
            </SearchContainer>
            <KeywordContainer>
                <SearchKeyword>{keyword}</SearchKeyword>
                <KeywordRight>관련 채널 목록입니다.</KeywordRight>
            </KeywordContainer>
            <ChannelListTitle>Channel List</ChannelListTitle>
        </ScrollContainer>
    );
};