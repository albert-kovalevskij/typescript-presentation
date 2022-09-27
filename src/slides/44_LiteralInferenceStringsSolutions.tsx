import { Slide, Text, CodePane, Notes } from "spectacle";

const LiteralInferenceStringsSolutions = () => (
  <Slide backgroundColor="white">
    <Text fontSize="20px">There are two ways to work around this.</Text>
    <ol>
      <li>
        <Text fontSize="20px">
          You can change the inference by adding a type assertion in either
          location:
        </Text>
        <CodePane language="typescript">{`
        // Change 1:
        const req = { url: "https://example.com", method: "GET" as "GET" };
        // Change 2
        handleRequest(req.url, req.method as "GET");
        `}</CodePane>
        <a href="https://www.typescriptlang.org/play/#code/CYUwxgNghgTiAEAzArgOzAFwJYHtXwAspVgIQAlEAR2RAGcMAKZGCALngZi1QHMAaeAFsQGAjmAcARAHEAogBUp8AD7wpABQDyAZSUBKDgDccWYAG4AsACgA9LfgBaZ2GQZnjm-fgBhInwQARjYbMDwGeDgqeABeeABveBZ2dQIMDAAHOjZ7EAAPKCEMsgA6MKEpQRExCWl5JXgoOnV65QBfKzsHP2JeBAAmG39SCmpaBkYokuTBKerxYEbm2UUpfXMgA">
          Try it
        </a>
        <Notes>
          <Text fontSize="20px">
            Change 1 means “I intend for req.method to always have the literal
            type "GET"”, preventing the possible assignment of "GUESS" to that
            field after. Change 2 means “I know for other reasons that
            req.method has the value "GET"“.
          </Text>
        </Notes>
      </li>
      <li>
        <Text fontSize="20px">
          You can use <code>as const</code> to convert the entire object to be
          type literals:
        </Text>
        <CodePane language="typescript">{`
        const req = { url: "https://example.com", method: "GET" } as const;
        handleRequest(req.url, req.method);
        `}</CodePane>
        <a href="https://www.typescriptlang.org/play/#code/CYUwxgNghgTiAEAzArgOzAFwJYHtXwAspVgIQAlEAR2RAGcMAKZGCALngZi1QHMAaeAFsQGAjmAcARAHEAogBUp8AD7wpABQDyAZSUBKDgDccWYAG4AsACgA9LfgBaZ2GQZnjm2DwN4cKvAAvPAA3vAs7OoEGBgADnRs9iAAHlBCsWQAdN5CUoIiYhLS8krwAL7wUHTw3qgMVtZEJGSUNPRM-pkRgp0F4sD65kA">
          Try it
        </a>
      </li>
    </ol>
    <Text fontSize="20px">
      The <code>as const</code> suffix acts like <code>const</code> but for the type system, ensuring that
      all properties are assigned the literal type instead of a more general
      version like <code>string</code> or <code>number</code>.
    </Text>
  </Slide>
);

export default LiteralInferenceStringsSolutions;
