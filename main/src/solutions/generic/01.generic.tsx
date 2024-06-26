import { useState } from "react";
import { Equal, Expect } from "../../helpers/type-utils";

// export const useStateAsObject = <T,>(initial: T) => {
//   const [value, set] = useState(initial);

//   return {
//     value,
//     set,
//   };
// };
// export const useStateAsObject = <T,>(
//   initial: T
// ): {
//   value: T;
//   set: React.Dispatch<React.SetStateAction<T>>;
// } => {
//   const [value, set] = useState(initial);

//   return {
//     value,
//     set,
//   };
// };
// type TStateObject<T> = {
//   value: T;
//   set: React.Dispatch<React.SetStateAction<T>>;
// };
interface TStateObject<T> {
  value: T;
  set: React.Dispatch<React.SetStateAction<T>>;
}
export const useStateAsObject = <T,>(initial: T): TStateObject<T> => {
  const [value, set] = useState(initial);

  return {
    value,
    set,
  };
};

const example = useStateAsObject({ name: "Matt" });

type ExampleTests = [
  Expect<Equal<typeof example.value, { name: string }>>,
  Expect<
    Equal<
      typeof example.set,
      React.Dispatch<React.SetStateAction<{ name: string }>>
    >
  >
];

const num = useStateAsObject(2);

type NumTests = [
  Expect<Equal<typeof num.value, number>>,
  Expect<Equal<typeof num.set, React.Dispatch<React.SetStateAction<number>>>>
];
