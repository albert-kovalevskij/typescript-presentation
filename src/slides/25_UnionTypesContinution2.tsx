import { CodePane, Notes, Slide, Text } from "spectacle";

const UnionTypesContinuation2 = () => (
  <Slide backgroundColor="white">
    <Text fontSize="30px">
      Sometimes you’ll have a union where all the members have something in
      common. For example, both arrays and strings have a slice method. If every
      member in a union has a property in common, you can use that property
      without narrowing:
    </Text>
    <CodePane language="typescript">{`
    // Return type is inferred as number[] | string
    function getFirstThree(x: number[] | string) {
      return x.slice(0, 3);
    } 
    `}</CodePane>
    <Notes>
      <Text fontSize="36px">
        It might be confusing that a union of types appears to have the
        intersection of those types’ properties. This is not an accident - the
        name union comes from type theory. The union number | string is composed
        by taking the union of the values from each type. Notice that given two
        sets with corresponding facts about each set, only the intersection of
        those facts applies to the union of the sets themselves. For example, if
        we had a room of tall people wearing hats, and another room of Spanish
        speakers wearing hats, after combining those rooms, the only thing we
        know about every person is that they must be wearing a hat.
      </Text>
    </Notes>
  </Slide>
);

export default UnionTypesContinuation2;
