import { Slide, CodePane, Notes, Heading, Text } from "spectacle";

const AnyExample = () => (
  <Slide backgroundColor="white">
    <Text>
      When a value is of type <code>any</code>, you can access any properties of
      it (which will in turn be of type any), call it like a function, assign it
      to (or from) a value of any type, or pretty much anything else that’s
      syntactically legal:
    </Text>

    <CodePane language="typescript">{`
    let obj: any = { x: 0 };
    // None of the following lines of code will throw compiler errors.
    // Using 'any' disables all further type checking, and it is assumed 
    // you know the environment better than TypeScript.
    obj.foo();
    obj();
    obj.bar = 100;
    obj = "hello";
    const n: number = obj;
    `}
    </CodePane>
    <a href="https://www.typescriptlang.org/play/#code/DYUwLgBA9gRgVgLggQwHYE8IF4IG8IAeSADBAL4DcAsAFAD0dEAclKiNAGYRgAW7HUYMCgB3AJaoA5hGASQAZ04QAxlAAm7cUO48ATqJVQAtgAcxoXRBC79u+QDpaDCAFV5E6QAM06TxDVi8sgwoIrI2hwArrq81tzoJuzKfMoA1h4ANCioahBikIEo8vKRRiC5TozoUJEQqagGsVaoAG5i+qhlqJAw4GBxvGgQACoJIADKyrpiJmCONLBw9gJQABQAlNQL8Btbi-YwyJY4AIzExHvw2BAARHxCUDdbqqjykKhIqKW9x9DwFEA">Try it</a>
    <Notes>
      <Text color="white">
        The any type is useful when you don’t want to write out a long type just
        to convince TypeScript that a particular line of code is okay.
      </Text>

      <Heading>
        <code>noImplicitAny</code>
      </Heading>
      <Text color="white">
        When you don’t specify a type, and TypeScript can’t infer it from
        context, the compiler will typically default to any. You usually want to
        avoid this, though, because any isn’t type-checked. Use the compiler
        flag noImplicitAny to flag any implicit any as an error.
      </Text>
    </Notes>
  </Slide>
);

export default AnyExample;
