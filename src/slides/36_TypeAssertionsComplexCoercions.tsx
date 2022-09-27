import { Slide, Text, CodePane } from "spectacle";

const TypeAssertionsComplexCoercions = () => (
  <Slide backgroundColor="white">
    <Text fontSize="30px">
      TypeScript only allows type assertions which convert to a{" "}
      <em>more specific</em> or
      <em>less specific</em> version of a type. This rule prevents “impossible”
      coercions like:
    </Text>
    <CodePane language="typescript">
      {`
    const x = "hello" as number;
    Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently
    overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
    `}
    </CodePane>
    <Text fontSize="30px">
      Sometimes this rule can be too conservative and will disallow more complex
      coercions that might be valid. If this happens, you can use two
      assertions, first to <code>any</code> (or <code>unknown</code>, which
      we’ll introduce later), then to the desired type:
    </Text>
    <CodePane language="typescript">
    {`
    const a = (expr as any) as T;
    `}
    </CodePane>
  </Slide>
);

export default TypeAssertionsComplexCoercions;
