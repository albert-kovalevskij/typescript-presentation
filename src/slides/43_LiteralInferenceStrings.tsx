import { Slide, Text, CodePane } from "spectacle";

const LiteralInferenceStrings = () => (
  <Slide backgroundColor="white">
    <Text fontSize="30px">The same applies to strings:</Text>
    <CodePane language="typescript">{`
    const req = { url: "https://example.com", method: "GET" };
    handleRequest(req.url, req.method);
    Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.
    `}</CodePane>
    <a href="https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGYAsBWAsAFAAmkAxgDYCG0koAZgK4B2pALgJZxOgAWlTRcpABKkAI4NIiVgAoG0cqmnR2TAOYAaUAFtIrHnCKoARAHEAogBVjoAD6hjABQDyAZWsBKVADc47IgDchCCgALThpAys4aGEpFzSoDRioAC8oADeoPKKDjysrAAOKCCQAB6U2oVCAHTx2sZauvqGJhbWoAC+QQR8AkKiElKyyTU5WqPNBkQeAUA">
      Try it
    </a>
    <Text fontSize="30px">
      In the above example <code>req.method</code> is inferred to be{" "}
      <code>string</code>, not <code>"GET"</code>. Because code can be evaluated
      between the creation of <code>req</code> and the call of
      <code>handleRequest</code> which could assign a new string like{" "}
      <code>"GUESS"</code> to <code>req.method</code>, TypeScript considers this
      code to have an error.
    </Text>
  </Slide>
);

export default LiteralInferenceStrings;
