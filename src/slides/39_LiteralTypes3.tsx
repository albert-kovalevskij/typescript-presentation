import { CodePane, Slide, Text } from "spectacle";

const LiteralTypes3 = () => (
  <Slide backgroundColor="white">
    <Text fontSize="30px">
      By themselves, literal types aren’t very valuable:
    </Text>
    <CodePane language="typescript">
      {`
    let x: "hello" = "hello";
    // OK
    x = "hello";
    // ...
    x = "howdy";
    Type '"howdy"' is not assignable to type '"hello"'.
    `}
    </CodePane>
    <a href="https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGY1oLACgAbSAF1AA9UAiAC0gILktAF5Qa6HKBufEUAeQDS+Miza16jHnj4A6eSLE04AdwAmAT25A">
      Try it
    </a>
    <Text fontSize="30px">
      It’s not much use to have a variable that can only have one value!
    </Text>
  </Slide>
);

export default LiteralTypes3;
