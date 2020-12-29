import React, { useState } from "react";
import styled from "styled-components";
import { SearchBar } from 'react-native-elements';

const Container = styled.View`
    flex: 1;
    background-color: black;
`;

const SearchContainer = styled.View`
    margin-top: 20px;
`;

const Title = styled.Text`
    margin-top: 20px;
    font-weight: bold;
    margin-left: 20px;
    font-size: 20px;
    color: white;
`;

export default () => {
    const [keyword, setKeyword] = useState("");
    return (
        <Container>
            <SearchContainer>
                <SearchBar
                    placeholder="검색어를 입력해주세요"
                    containerStyle={{backgroundColor: 'black', borderWidth: 1, borderRadius: 5}}
                    searchIcon
                    showLoading={true}
                    value={ keyword }
                    onChangeText={ value =>setKeyword( value ) }
                />
            </SearchContainer>
            <Title>Channel List</Title>
        </Container>
    );
};