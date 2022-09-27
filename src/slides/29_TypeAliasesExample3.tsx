import { Slide, Text, CodePane } from "spectacle";

const TypeAliasesExample = () => (
  <Slide backgroundColor="white">
    <Text fontSize="30px">
      Note that aliases are only aliases - you cannot use type aliases to create
      different/distinct “versions” of the same type. When you use the alias,
      it’s exactly as if you had written the aliased type. In other words, this
      code might look illegal, but is OK according to TypeScript because both
      types are aliases for the same type:
    </Text>
    <CodePane language="typescript">
      {`
    type UserInputSanitizedString = string;
 
    function sanitizeInput(str: string): UserInputSanitizedString {
      return sanitize(str);
    }
     
    // Create a sanitized input
    let userInput = sanitizeInput(getInput());
     
    // Can still be re-assigned with a string though
    userInput = "new input";
    `}
    </CodePane>
  </Slide>
);

export default TypeAliasesExample;
