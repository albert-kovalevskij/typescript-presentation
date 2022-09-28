import { Slide, Text, Heading, CodePane } from "spectacle";

const LiteralInference = () => (
  <Slide backgroundColor="white">
    <Heading color="black">Literal Inference</Heading>
    <Text fontSize="30px">
      When you initialize a variable with an object, TypeScript assumes that the
      properties of that object might change values later. For example, if you
      wrote code like this:
    </Text>
    <CodePane language="typescript">{`
    const obj = { counter: 0 };
    if (someCondition) {
      obj.counter = 1;
    }
    `}</CodePane>
    <a href="https://www.typescriptlang.org/play/#code/CYUwxgNghgTiAEYD2A7AzgF3mpBbEAwqsAJYYmoBc8ARkkhCFCgNwCwAUAPRfwC0AsAFcMAvp2TosSGgCt4AXngBvREiEoMIGNQAM8AL7sOJAGbwAFDnxEUpcqgCUKzvHgzZAOmQatMRfAAjMYGQA">
      Try it
    </a>
    <Text fontSize="30px">
      TypeScript doesn’t assume the assignment of <code>1</code> to a field which previously
      had <code>0</code> is an error. Another way of saying this is that <code>obj.counter</code> must
      have the type <code>number</code>, not <code>0</code>, because types are used to determine both{" "}
      <em>reading</em> and <em>writing</em> behavior.
    </Text>
  </Slide>
);

export default LiteralInference;
