import { Slide, Heading, Text } from "spectacle";

const Any = () => (
  <Slide backgroundColor="white">
    <Heading color="black">
      <code>any</code>
    </Heading>
    <Text>
      TypeScript also has a special type, <code>any</code>, that you can use
      whenever you don’t want a particular value to cause typechecking errors.
    </Text>
  </Slide>
);

export default Any;
