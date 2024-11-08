import React, { Component} from "react";
import { Text, Linking, StyleSheet} from "react-native";
import Markdown, { MarkdownIt, tokensToAST, stringToTokens } from "react-native-markdown-display";
import styled from 'styled-components/native';
import 'nativewind';
import Accordion from "../props/accordion";
import Button from "../props/button";
import { useEffect } from 'react';
import { useRouter } from 'expo-router';
const router = useRouter();
function nav() {
   // Correct: Hook at the top level

  useEffect(() => {
    router.navigate('/login');
  }, [router]);

}

const markdownItInstance = MarkdownIt({ typographer: true });

const content = `
# PostLite
Postlite is a lightweight blogging platform created by __Hardik Tiwari__ as a part of his internship at __Nexware Solutions__

## Features of PostLite
- **Markdown Support**: Write blogs using Markdown for quick, structured content.
- **Mobile & Web Compatibility**: Seamlessly create and read blogs on any device.
- **Customizable Elements**: Personalize your blog with customizable themes and styles.
- **Lightweight**: PostLite is optimized for speed and simplicity.
- **Open Source**: No hidden trackers, ship your blog with full transparency.


### Why You Need PostLite
- **Easy Content Creation**: No complicated editors or tools. Write effortlessly using Markdown.
- **Improved SEO**: Clean, fast, and accessible pages improve SEO ranking.
- **Developer-Friendly**: Built with modern web technology; extensible and maintainable.


## Markdown Overview
PostLite Supports **MarkDown** format to write blogs here is a sample:

`;
const st:any = stringToTokens(content, markdownItInstance);
const ast:any = tokensToAST(st);

// Accordion contents
const accordionContent = `
 Headings

  # h1 Heading 8-)
  ## h2 Heading
  ### h3 Heading
  #### h4 Heading
  ##### h5 Heading
  ###### h6 Heading


Horizontal Rules

  Some text above
  ___

  Some text in the middle

  ---

  Some text below


Emphasis

  **This is bold text**

  __This is bold text__

  *This is italic text*

  _This is italic text_

  ~~Strikethrough~~


Blockquotes

  > Blockquotes can also be nested...
  >> ...by using additional greater-than signs right next to each other...
  > > > ...or with spaces between arrows.


Lists

  Unordered

  + Create a list by starting a line with +, -, or *
  + Sub-lists are made by indenting 2 spaces:
    - Marker character change forces new list start:
      * Ac tristique libero volutpat at
      + Facilisis in pretium nisl aliquet. This is a very long list item that will surely wrap onto the next line.
      - Nulla volutpat aliquam velit
  + Very easy!

  Ordered

  1. Lorem ipsum dolor sit amet
  2. Consectetur adipiscing elit. This is a very long list item that will surely wrap onto the next line.
  3. Integer molestie lorem at massa

  Start numbering with offset:

  57. foo
  58. bar


Code

  Inline \`code\`

  Indented code

      // Some comments
      line 1 of code
      line 2 of code
      line 3 of code


  Block code "fences"

  \`\`\`
  Sample text here...
  \`\`\`

  Syntax highlighting

  \`\`\` js
  var foo = function (bar) {
    return bar++;
  };

  console.log(foo(5));
  \`\`\`


Tables

  | Option | Description |
  | ------ | ----------- |
  | data   | path to data files to supply the data that will be passed into templates. |
  | engine | engine to be used for processing templates. Handlebars is the default. |
  | ext    | extension to be used for dest files. |

  Right aligned columns

  | Option | Description |
  | ------:| -----------:|
  | data   | path to data files to supply the data that will be passed into templates. |
  | engine | engine to be used for processing templates. Handlebars is the default. |
  | ext    | extension to be used for dest files. |


Links

  [link text](https://www.google.com)

  [link with title](https://www.google.com "title text!")



Images

  ![Minion](https://octodex.github.com/images/minion.png)
  ![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")



Typographic Replacements

  Enable typographer option to see result.

  (c) (C) (r) (R) (tm) (TM) (p) (P) +-

  test.. test... test..... test?..... test!....

  !!!!!! ???? ,,  -- ---

  "Smartypants, double quotes" and 'single quotes'

`;

const accordionSt:any = stringToTokens(accordionContent, markdownItInstance);
const accordionAst:any = tokensToAST(accordionSt);

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
          <Markdown
            style={markdownStyles}
            markdownit={markdownItInstance}
            onLinkPress={(url):any => Linking.openURL(url)}
          >
            {ast}
          </Markdown>
          <Accordion title="Sample ProLite Input (MD)" content={<Text>{accordionContent}</Text>} />
          <Accordion title="ProLite Output" content={<Markdown
            style={markdownStyles}
            markdownit={markdownItInstance}
            onLinkPress={(url):any => Linking.openURL(url)}
          >
            {accordionAst}
          </Markdown>} />
        </Content>
        <Button title = "Start your blog" style = {styles.button} onPress={nav()}></Button>
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