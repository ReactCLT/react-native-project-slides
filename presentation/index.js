// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Image,
  CodePane,
  Link,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

  // Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  guy: require("../assets/guy.jpg"),
  jest: require("../assets/jest.png"),
  confusedMeme: require("../assets/confused_meme.jpg"),
};

const examples = {
  jest: require("../examples/jest.example"),
  jestTest: require("../examples/jest.test.example"),
  enzyme: require("../examples/enzyme.example"),
  enzymeTest: require("../examples/enzyme.test.example"),
  stylesReactNative: require("../examples/styles-rn.example"),
  stylesStyledComponents: require("../examples/styles-sc.example"),
  reactNavigation: require("../examples/react-navigation.example"),
};

preloader(images);

const theme = createTheme({
  primary: "#070709",
  secondary: "#61DAFB",
  tertiary: "#FAFAFA"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React Native
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            and surrounding technolgies
          </Text>
        </Slide>
        
        <Slide transition={["fade"]} bgColor="tertiary" caps>
          <Heading size={2} textColor="primary">
            Buffet Style
          </Heading>
          <Heading size={6} textColor="secondary">
            Have a comment? Speak up!
          </Heading>
        </Slide>
        
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="primary" caps>
            Lets dig in!
          </Heading>
        </Slide>
        
        <Slide 
          transition={["fade"]} 
          bgColor="primary" 
          caps 
          bgImage={images.guy}
        />
        
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={2} textColor="tertiary" caps>
            Testing
          </Heading>
        </Slide>
        
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} textColor="secondary" caps>
            ♥
          </Heading>
        </Slide>
        
        <Slide transition={["fade"]} bgColor="#3B3738">
          <Image src={images.jest} height="350"/>
        </Slide>
        
        <Slide transition={["fade"]} bgColor="primary">
          <Text lineHeight={2} textColor="secondary">Preinstalled with React Native</Text>
          <Text lineHeight={2} textColor="tertiary">Backed by Facebook</Text>
          <Text lineHeight={2} textColor="secondary">All in One Tool</Text>
          <Text lineHeight={2} textColor="tertiary">Ease of Use</Text>
        </Slide>
        
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane lang="jsx" source={examples.jest}/>
        </Slide>
        
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane lang="jsx" source={examples.jestTest}/>
        </Slide>
        
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} caps lineHeight={1} textColor="secondary">
            Enzyme
          </Heading>
        </Slide>
        
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane lang="jsx" source={examples.enzyme}/>
        </Slide>
        
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane lang="jsx" source={examples.enzymeTest}/>
        </Slide>
        
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} lineHeight={1} textColor="primary">
            State Management
          </Heading>
        </Slide>
        
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} caps lineHeight={1} textColor="secondary">
            Redux
          </Heading>
          <Heading size={5} lineHeight={3} textColor="primary">
            Anyone using something else?
          </Heading>
        </Slide>
        
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={3} lineHeight={1} textColor="tertiary">
            Styling
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={4} lineHeight={1} textColor="primary">
            styled-components
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={5} lineHeight={3} textColor="primary">
            React Native
          </Heading>
          <CodePane lang="jsx" source={examples.stylesReactNative}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={5} lineHeight={3} textColor="primary">
            styled-components
          </Heading>
          <CodePane lang="jsx" source={examples.stylesStyledComponents}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="tertiary">
            Navigation
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Text lineHeight={2} textColor="secondary">iOS Navigator</Text>
          <Text lineHeight={2} textColor="tertiary">react-navigation</Text>
          <Text lineHeight={2} textColor="secondary">native-navigation</Text>
          <Text lineHeight={2} textColor="tertiary">react-native-navigation</Text>
          <Text lineHeight={2} textColor="secondary">ex-navigation</Text>
          <Text lineHeight={2} textColor="tertiary">react-native-router-flux</Text>
        </Slide>

        <Slide 
          transition={["fade"]}
          bgColor="primary" 
          bgImage={images.confusedMeme}
        />

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} lineHeight={1} textColor="secondary">
            react-navigation
          </Heading>
          <Link href="https://reactnavigation.org/">
            <Heading size={6} lineHeight={3} textColor="tertiary">
              reactnavigation.org
            </Heading>
          </Link>
        </Slide>
        
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane lang="jsx" source={examples.reactNavigation}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={5} lineHeight={1} textColor="tertiary">
            Redux integration!
          </Heading>
          <Heading size={3} lineHeight={2} textColor="tertiary">
            👍
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="secondary">
            Other's experiences?
          </Heading>
        </Slide>

      </Deck>
    );
  }
}
