import { Slide, Text, CodePane } from "spectacle";

const TypeAliasesExample = () => (
  <Slide backgroundColor="white">
    <Text fontSize="30px">
      You can actually use a type alias to give a name to any type at all, not
      just an <code>object</code> type. For example, a type alias can name a
      union type:
    </Text>
    <CodePane language="typescript">{`type ID = number | string;`}</CodePane>
  </Slide>
);

export default TypeAliasesExample;
