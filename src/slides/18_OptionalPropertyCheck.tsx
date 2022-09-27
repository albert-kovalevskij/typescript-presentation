import { Slide, Text, CodePane } from "spectacle";

const OptionalPropertyCheck = () => (
  <Slide backgroundColor="white">
    <Text fontSize="30px">
      In JavaScript, if you access a property that doesn’t exist, you’ll get the
      value undefined rather than a runtime error. Because of this, when you
      read from an optional property, you’ll have to check for undefined before
      using it.
    </Text>
    <CodePane language="typescript">{`
        function printName(obj: { first: string; last?: string }) {
          // Error - might crash if 'obj.last' wasn't provided!
          console.log(obj.last.toUpperCase());
          Object is possibly 'undefined'.
          if (obj.last !== undefined) {
            // OK
            console.log(obj.last.toUpperCase());
          }
         
          // A safe alternative using modern JavaScript syntax:
          console.log(obj.last?.toUpperCase());
        }
        `}</CodePane>
        <a href="https://www.typescriptlang.org/play?#code/PTAEAEFMCdoe2gZwFygEwFYDMaCwAoAMwFcA7AYwBcBLOU0AB2mtMoDkBDAW0gAo4ARgCtUAb1CFqSSqkSVmpAOYBuUABsOcgPyz5LRaAC+ASlCiCoUCFABRWAlABaUF2qKAFpVDlom96GpCUAByQSEAOg05YNAAd01SYK8mOAA3agATSAyAQgtvOkQ4NUhIuEV+YUjNSnDKOABVBgYYAGFNPmNjZXzA0EqIqK8cgF4R0DIsyVJs03N8S0trAHkAaXzLckLi0rVygeq5Osbmto7eLp6FowJ86wBBUEQOQkhQDjVKGFIOGlS34iIfQuOBZaD0ABSHFSHAAyj5qAwvIgAJ6sDgAD2Q+S2pCKJTKFTCh0oWmOTRa0HaiE63QIhiAA">Try it</a>
  </Slide>
);

export default OptionalPropertyCheck;
