import {
  useEffect,
  forwardRef,
  ForwardedRef,
  useRef,
  ChangeEvent,
} from "react";

interface InputFieldProps {
  id: string;
  label: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  error?: { message?: string } | null | undefined;
  inputProps?: Record<string, unknown>;
  register?: (name: string) => Record<string, unknown>;
  ref: ForwardedRef<HTMLInputElement>;
}

const InputField = forwardRef(
  ({ id, label, name, onChange, type, error }: InputFieldProps, ref) => {
    const inputRef = useRef(null);

    useEffect(() => {
      if (ref) {
        if (typeof ref === "function") {
          ref(inputRef.current);
        } else {
          ref.current = inputRef.current;
        }
      }
    }, [ref]);

    return (
      <div className="mb-6 w-full">
        <label className="block mb-1 md:mb-2 text-sm font-medium text-gray-900">
          {label}
        </label>
        <input
          ref={inputRef}
          type={type}
          name={name}
          id={id}
          onChange={onChange} // Add onChange handler
          className={`block w-full p-2 md:p-4 text-gray-900 border ${
            error ? "border-red-500" : "border-gray-300"
          } rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 ${
            error ? "focus:border-red-500" : "focus:border-blue-500"
          } `}
          placeholder={label}
        />

        {error && (
          <span className="text-red-800 block mt-2">{error.message}</span>
        )}
      </div>
    );
  }
);

export default InputField;
