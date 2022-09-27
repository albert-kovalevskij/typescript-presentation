import { Slide, Text, Heading, CodePane } from "spectacle";

const SymbolPrimitive = () => (
  <Slide backgroundColor="white">
    <Heading color="black">Symbol</Heading>
    <Text fontSize="30px">
      There is a primitive in JavaScript used to create a globally unique
      reference via the function <code>Symbol()</code>:
    </Text>
    <CodePane language="typescript">{`
    const firstName = Symbol("name");
    const secondName = Symbol("name");
     
    if (firstName === secondName) {
    This condition will always return 'false' since 
    the types 'typeof firstName' and 'typeof secondName' have no overlap.
      // Can't ever happen
    }
    `}</CodePane>
    <a href="https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGYBsB2AsAFADGcAdogC6gBmAlkhQHICGAtpKALygDKAnqwBGcADYAKAESk2kCQEoA3IRLkqiSCoAmLdl14Dh4qTPlKChWtVBi6DHR06PQ6rfbmgA3oVCgQoAMLMpADkVJAAbjCgABbMAA5xkKSEAL5AA">
      Try it
    </a>
  </Slide>
);

export default SymbolPrimitive;
