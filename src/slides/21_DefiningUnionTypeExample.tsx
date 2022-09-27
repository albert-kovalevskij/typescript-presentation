import { Slide, Text, CodePane } from "spectacle";

const TypeAnnotationsOnVariables = () => (
  <Slide backgroundColor="white">
    <Text fontSize="30px">Let’s write a function that can operate on strings or numbers:</Text>
    <CodePane language="typescript">
      {`
    function printId(id: number | string) {
      console.log("Your ID is: " + id);
    }
    // OK
    printId(101);
    // OK
    printId("202");
    // Error
    printId({ myID: 22342 });
    Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.    
    `}
    </CodePane>
    <a href="https://www.typescriptlang.org/play?#code/PTAEAEFMCdoe2gZwFygEwGYAsBWAsAFABmArgHYDGALgJZxmgAO0NZVAkgCYAUNnqZEgFsARjFAAfUIiosyAcwCUoAN6FQoCvURwANpAB0uuPO4AiAJpwS0UOwAioGilBnQAaiedFAbkIBfQhBQAHkAaUJmVg4eAEYABljfILBwyLkY8zR4tDNkgmCAUVgEdOiubhVQIQBPB1Q0TCw0UH9fIA">Try it</a>
  </Slide>
);

export default TypeAnnotationsOnVariables;
