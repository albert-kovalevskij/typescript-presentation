import { Slide, Heading, Text } from "spectacle";

const TypeAnnotationsOnVariables = () => (
  <Slide backgroundColor="white">
    <Heading color="black">Defining a Union Type</Heading>
    <Text fontSize="30px">
      The first way to combine types you might see is a union type. A union type
      is a type formed from two or more other types, representing values that
      may be any one of those types. We refer to each of these types as the
      union’s members.
    </Text>
  </Slide>
);

export default TypeAnnotationsOnVariables;
