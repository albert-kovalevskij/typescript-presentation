import { Slide, Text, Heading } from "spectacle";

const Enums = () => (
  <Slide backgroundColor="white">
    <Heading color="black">Enums</Heading>
    <Text fontSize="30px">
      Enums are one of the few features TypeScript has which is not a type-level
      extension of JavaScript.
    </Text>
    <Text fontSize="30px">
      Enums allow a developer to define a set of named constants. Using enums
      can make it easier to document intent, or create a set of distinct cases.
      TypeScript provides both numeric and string-based enums.
    </Text>
  </Slide>
);

export default Enums;
