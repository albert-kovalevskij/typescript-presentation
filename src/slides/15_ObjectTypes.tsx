import { Slide, Heading, Text } from "spectacle";

const ObjectTypes = () => (
  <Slide backgroundColor="white">
    <Heading color="black">Object Types</Heading>
    <Text fontSize="30px">
      Apart from primitives, the most common sort of type you’ll encounter is an{" "}
      <em>object type</em>. This refers to any JavaScript value with properties,
      which is almost all of them! To define an object type, we simply list its
      properties and their types.
    </Text>
  </Slide>
);

export default ObjectTypes;
