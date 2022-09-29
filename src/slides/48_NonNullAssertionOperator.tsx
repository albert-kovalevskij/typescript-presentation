import { Slide, Text, Heading, CodePane } from "spectacle";

const NonNullAssertionOperator = () => (
  <Slide backgroundColor="white">
    <Heading fontSize="46px" color="black">
      Non-null Assertion Operator (Postfix <code>!</code> )
    </Heading>
    <Text fontSize="26px">
      TypeScript also has a special syntax for removing <code>null</code> and{" "}
      <code>undefined</code> from a type without doing any explicit checking.
      Writing <code>!</code> after any expression is effectively a type
      assertion that the value isn’t <code>null</code> or <code>undefined</code>
      :
    </Text>
    <CodePane language="typescript">{`
    function liveDangerously(x?: number | null) {
      // No error
      console.log(x!.toFixed());
    }
    `}</CodePane>
    <a href="https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABAGxgNwKYBECGYDmGATnCAM7ICeAFAB4D8AXImCALYBGxiAPiyMmQBKRAG8AsAChEiAPSzEAOTiJiJIlJkQEZOMgwA6ZHHx0AhAahwAYjFoYAJtSFCA3FIC+QA">
      Try it
    </a>
    <Text fontSize="26px">
      Just like other type assertions, this doesn’t change the runtime behavior
      of your code, so it’s important to only use <code>!</code> when you know that the value
      can’t be <code>null</code> or <code>undefined</code>.
    </Text>
    <a href="https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions">Example</a>
  </Slide>
);

export default NonNullAssertionOperator;
