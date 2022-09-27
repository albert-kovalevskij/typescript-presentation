import { Slide, Heading, Text } from "spectacle";

const TypeAliases = () => (
  <Slide backgroundColor="white">
    <Heading color="black">Type Aliases</Heading>
    <Text fontSize="30px">
      We’ve been using object types and union types by writing them directly in
      type annotations. This is convenient, but it’s common to want to use the
      same type more than once and refer to it by a single name.
    </Text>
  </Slide>
);

export default TypeAliases;
