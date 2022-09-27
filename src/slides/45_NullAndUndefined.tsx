import { Slide, Text, Heading } from "spectacle";

const NullAndUndefined = () => (
  <Slide backgroundColor="white">
    <Heading color="black">
      <code>null</code> and <code>undefined</code>
    </Heading>
    <Text fontSize="30px">
      JavaScript has two primitive values used to signal absent or uninitialized
      value: <code>null</code> and <code>undefined</code>.
    </Text>
    <Text fontSize="30px">
      TypeScript has two corresponding <em>types</em> by the same names. How
      these types behave depends on whether you have the{" "}
      <a href="https://www.typescriptlang.org/tsconfig#strictNullChecks">
        strictNullChecks
      </a>{" "}
      option on.
    </Text>
  </Slide>
);

export default NullAndUndefined;
