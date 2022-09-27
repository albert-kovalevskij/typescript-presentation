import { Slide, Heading, Text, CodePane } from "spectacle";

const ReturnTypeAnnotations = () => (
  <Slide backgroundColor="white">
    <Heading color="black">Return Type Annotations</Heading>
    <Text fontSize="30px">
      You can also add return type annotations. Return type annotations appear
      after the parameter list:
    </Text>
    <CodePane language="typescript">{`
        function getFavoriteNumber(): number {
          return 26;
        }
        `}</CodePane>
    <Text fontSize="30px">
      Much like variable type annotations, you usually don’t need a return type
      annotation because TypeScript will infer the function’s return type based
      on its <code>return</code> statements. The type annotation in the above
      example doesn’t change anything. Some codebases will explicitly specify a
      return type for documentation purposes, to prevent accidental changes, or
      just for personal preference.
    </Text>
  </Slide>
);

export default ReturnTypeAnnotations;
