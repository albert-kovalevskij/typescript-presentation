import { Slide, Heading, CodePane, Text } from "spectacle";

const TypeAnnotationsOnVariables = () => (
  <Slide backgroundColor="white">
    <Heading color="black">Type Annotations on Variables</Heading>
    <Text fontSize="30px">
      When you declare a variable using <code>const</code>, <code>var</code>, or{" "}
      <code>let</code>, you can optionally add a type annotation to explicitly
      specify the type of the variable:
    </Text>
    <CodePane language="typescript">{`
        let myName: string = "Alice";

        // No type annotation needed -- 'myName' inferred as type 'string'
        let myName = "Alice";
        `}</CodePane>
    <Text fontSize="30px">
      For the most part you don’t need to explicitly learn the rules of
      inference. If you’re starting out, try using fewer type annotations than
      you think - you might be surprised how few you need for TypeScript to
      fully understand what’s going on.
    </Text>
  </Slide>
);

export default TypeAnnotationsOnVariables;
