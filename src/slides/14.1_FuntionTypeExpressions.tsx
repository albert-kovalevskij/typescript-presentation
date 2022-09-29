import { Slide, Heading, Text, CodePane } from "spectacle";

const FunctionTypeExpressions = () => (
  <Slide backgroundColor="white">
    <Heading color="black">Function Type Expressions</Heading>
    <Text fontSize="30px">
      The simplest way to describe a function is with a{" "}
      <em>function type expression</em>. These types are syntactically similar
      to arrow functions:
    </Text>
    <CodePane language="typescript">{`
    function greeter(fn: (a: string) => void) {
      fn("Hello, World");
    }
     
    function printToConsole(s: string) {
      console.log(s);
    }
     
    greeter(printToConsole);
    `}</CodePane>
    <a href="https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABAcwE4FN1XagFMMALkVwENiBnKVGMZASkQF4A+RANzhgBNGBvALAAoRIgK4ARAAl0AG1lwANIgDqcVLO4T6AbmEBfYcNCRYCRAAcaYKABU4AYQQU4s9LgqVqtBokEjECGdXdAA6BWQPXQMjITRMbDwrWjtHYLddIA">Try it</a>w
  </Slide>
);

export default FunctionTypeExpressions;
