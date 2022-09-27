import { Slide, Heading, Text, CodePane } from "spectacle";

const WorkingWithUnionTypes = () => (
  <Slide backgroundColor="white">
    <Heading color="black">Working With Union Types</Heading>
    <Text fontSize="30px">
      It’s easy to provide a value matching a union type - simply provide a type
      matching any of the union’s members. If you have a value of a union type,
      how do you work with it?
    </Text>
    <Text fontSize="30px">
      TypeScript will only allow an operation if it is valid for every member of
      the union. For example, if you have the union <code>string | number</code>, you can’t
      use methods that are only available on <code>string:</code>
    </Text>
    <CodePane language="typescript">{`
    function printId(id: number | string) {
      console.log(id.toUpperCase());
    Property 'toUpperCase' does not exist on type 'string | number'.
      Property 'toUpperCase' does not exist on type 'number'.
    }
    `}</CodePane>
  </Slide>
);

export default WorkingWithUnionTypes;
