/* eslint-disable react/prop-types */
export default function Button({ children, variant = "primary", className }) {
  return (
    <button
      className={`flex items-center justify-center gap-4 rounded-lg border-[1.5px] px-5 py-2 font-semibold ${variant === "primary" && "border-primary bg-primary text-md text-white"} ${variant === "secondary" && "text-md border-primary text-primary bg-white"} ${variant === "white" && "text-md text-primary border-white bg-white"} ${className} `}
    >
      {children}
    </button>
  );
}
