export function Button({ className = "", ...props }) {
  return (
    <button
      className={`transition duration-300 hover:opacity-80 ${className}`}
      {...props}
    />
  );
}
