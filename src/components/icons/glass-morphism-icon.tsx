// This icon is a stylized cube representing the 3D aspect with a neubrutalist feel.
export function GlassMorphismIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="64" height="64" rx="8" fill="hsl(var(--primary))" />
      <path
        d="M16 16H48V48H16V16Z"
        stroke="hsl(var(--background))"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M21.3333 21.3333L42.6666 42.6666"
        stroke="hsl(var(--background))"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
