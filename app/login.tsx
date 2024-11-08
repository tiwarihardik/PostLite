import React, { Component} from "react";
import { Text, Linking, StyleSheet} from "react-native";
import Markdown, { MarkdownIt, tokensToAST, stringToTokens } from "react-native-markdown-display";
import styled from 'styled-components/native';
import 'nativewind';
import Accordion from "../props/accordion";
import Button from "../props/button";
import { useRouter } from 'expo-router';
const router = useRouter();


const markdownItInstance = MarkdownIt({ typographer: true });

// Styles of components
const Container = styled.View`
  flex: 1;
  background-color: #f0f0f0;
`;
const Header = styled.View`
  margin: 10px;
  margin-top: 10px;
  padding: 20px;
  background-color: #6200EE;
  align-items: center;
  border-radius: 20px;
`;

const HeaderText = styled.Text`
  font-size: 24px;
  color: #fff;
  font-weight: bold;
`;

const Content = styled.ScrollView`
  padding: 20px;
  background-color: #fff;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Footer = styled.View`
  padding: 10px;
  background-color: #6200EE;
  align-items: center;
`;

const FooterText = styled.Text`
  font-size: 16px;
  color: #fff;
`;

const markdownStyles:any = {
    body: {
        color: '#333',
        fontSize: 16,
        lineHeight: 24,
    },
    heading1: {
        color: '#6200EE',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    link: {
        color: '#1E90FF',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginVertical: 10,
    },
    code_block: {
        backgroundColor: '#282c34',
        color: '#abb2bf',
        padding: 10,
        borderRadius: 5,
        fontFamily: 'monospace',
        marginVertical: 10,
    },
    table: {
        borderWidth: 1,
        borderColor: '#ddd',
        marginVertical: 10,
    },
    th: {
        backgroundColor: '#f5f5f5',
        padding: 5,
    },
    td: {
        padding: 5,
    },
};
export default class Home extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <HeaderText>PostLite Blog</HeaderText>
                </Header>
                <Content contentInsetAdjustmentBehavior="automatic">

                </Content>
                <Button title = "Start your blog" style = {styles.button} onPress={() => {router.push('/login')}}></Button>
                <Footer>
                    <FooterText>© 2024 PostLite Blog</FooterText>
                </Footer>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    button:{
        margin: 10
    }
})