import { ChangeEventHandler } from "react";

type InputProps = (
  | {
      value: string;
      onChange: ChangeEventHandler;
    }
  | {}
) & {
  label: string;
};

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <div>
      <label>
        {label}
        <input {...props} />
      </label>
    </div>
  );
};

export const Test = () => {
  return (
    <div>
      <Input label="Greeting" value="Hello" onChange={() => {}} />
      <Input label="Greeting" />
      {/* @ts-expect-error */}
      {/* // not working! */}
      <Input label="Greeting" value="Hello" />
      {/* @ts-expect-error */}
      {/* // not working! */}
      <Input label="Greeting" onChange={() => {}} />
    </div>
  );
};
