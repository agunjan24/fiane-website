import Image from "next/image";

export default function Logo({
  size = 44,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src="/images/fiane-logo.png"
      alt="FIANE emblem"
      width={size}
      height={size}
      className={className}
    />
  );
}
