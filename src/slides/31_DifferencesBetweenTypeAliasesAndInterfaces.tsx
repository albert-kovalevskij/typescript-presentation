import { Slide, Heading, Text } from "spectacle";

const DifferencesBetweenTypeAliasesAndInterfaces = () => (
  <Slide backgroundColor="white">
    <Heading color="black">
      Differences Between Type Aliases and Interfaces
    </Heading>
    <Text fontSize="30px">
      Type aliases and interfaces are very similar, and in many cases you can
      choose between them freely. Almost all features of an <code>interface</code> are
      available in <code>type</code>, the key distinction is that a type cannot be re-opened
      to add new properties vs an interface which is always extendable.
    </Text>
  </Slide>
);

export default DifferencesBetweenTypeAliasesAndInterfaces;
