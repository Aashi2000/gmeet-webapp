// import React,{ useRef, useEffect } from 'react';

// export default function AutoselectingInput() {
//   const inputRef = useRef(null);

//   useEffect(() => {
//     const input = inputRef.current;
//     input.select();
//   }, []);

//   return <input ref={inputRef} defaultValue="Hello" />
// }

import { useRef, useEffect } from 'react';

export default function AutoselectingInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    const input = inputRef.current;
    if (input) {
      input.focus();
      input.select();
    }
  }, []);

  //return <input ref={inputRef}  />;
}
