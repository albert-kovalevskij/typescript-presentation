import { Slide, Heading, Text, CodePane } from "spectacle";

const ParameterTypeAnnotations = () => (
  <Slide backgroundColor="white">
    <Heading color="black">Parameter Type Annotations</Heading>
    <Text fontSize="30px">
      When you declare a function, you can add type annotations after each
      parameter to declare what types of parameters the function accepts.
      Parameter type annotations go after the parameter name:
    </Text>
    <CodePane language="typescript">{`
        // Parameter type annotation
        function greet(name: string) {
          console.log("Hello, " + name.toUpperCase() + "!!");
        }
        `}</CodePane>
  </Slide>
);

export default ParameterTypeAnnotations;
