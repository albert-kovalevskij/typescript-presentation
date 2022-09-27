import { CodePane, Slide, Text } from "spectacle";

const LiteralTypes2 = () => (
  <Slide backgroundColor="white">
    <Text fontSize="30px">
      One way to think about this is to consider how JavaScript comes with
      different ways to declare a variable. Both <code>var</code> and{" "}
      <code>let</code> allow for changing what is held inside the variable, and{" "}
      <code>const</code> does not. This is reflected in how TypeScript creates types for
      literals.
    </Text>
    <CodePane language="typescript">{`
    let changingString = "Hello World";
    changingString = "Olá Mundo";
    // Because \`changingString\` can represent any possible string, that
    // is how TypeScript describes it in the type system
    changingString;
          
    let changingString: string
     
    const constantString = "Hello World";
    // Because \`constantString\` can only represent 1 possible string, it
    // has a literal type representation
    constantString;
          
    const constantString: "Hello World"
    `}
    </CodePane>
    <a href="https://www.typescriptlang.org/play?#code/DYUwLgBAxgFghgOwOYEtkGUwCc1IgXggCIAJEYYAewgHVKtgATIgbgFgAoWRVDbXAsQDywAIcQAsgFcEjSq04B6RRABCIKHCkBnEBAAG3ZLkw5k+6IghYQABxu6EkRAE8Itytu0oARqAja-MgANBBg8GBKKijaEDCUAO4QACoutiDoUDi2kIwg2lm++RAokGhhMHpgaXraLoEgALacRrxIprjsHMoQAHoA-JwtlAiB0COBiGAdyIKk5FS09EwK3Srqmjp6hhNgUzNIFpoIECPAbjb2+SBOEACM7p7efrVBSKGlUXFwsXAQwKUQFg4MAwjVrHYHDc9mAUCNhqM9k4Dl0egMgA">Try it</a>
  </Slide>
);

export default LiteralTypes2;
