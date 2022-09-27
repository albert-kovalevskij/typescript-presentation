import { Slide, Text, CodePane, Heading } from "spectacle";

const OptionalProperties = () => (
  <Slide backgroundColor="white">
    <Heading color="black">Optional Properties</Heading>
    <Text fontSize="30px">
      Object types can also specify that some or all of their properties are{" "}
      <em>optional</em>. To do this, add a <code>?</code> after the property
      name:
    </Text>
    <CodePane language="typescript">{`
        function printName(obj: { first: string; last?: string }) {
          // ...
        }
        // Both OK
        printName({ first: "Bob" });
        printName({ first: "Alice", last: "Alisson" });
        `}</CodePane>
  </Slide>
);

export default OptionalProperties;
