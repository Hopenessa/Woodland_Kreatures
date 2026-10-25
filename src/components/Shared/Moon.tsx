export default function Moon({ size = 26 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M26.8 21.4A12.6 12.6 0 0 1 11.1 5a12.7 12.7 0 1 0 15.7 16.4Z"
        fill="currentColor"
      />
    </svg>
  );
}
