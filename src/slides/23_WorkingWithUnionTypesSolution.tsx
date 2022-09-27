import { Slide, Text, CodePane } from "spectacle";

const WorkingWithUnionTypesSolution = () => (
  <Slide backgroundColor="white">
    <Text fontSize="30px">
      The solution is to narrow the union with code, the same as you would in
      JavaScript without type annotations. Narrowing occurs when TypeScript can
      deduce a more specific type for a value based on the structure of the
      code.
    </Text>
    <Text fontSize="30px">
      For example, TypeScript knows that only a string value will have a typeof
      value "string":
    </Text>
    <CodePane language="typescript">{`
    function printId(id: number | string) {
      if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
      } else {
        // Here, id is of type 'number'
        console.log(id);
      }
    }
    `}</CodePane>
  </Slide>
);

export default WorkingWithUnionTypesSolution;
