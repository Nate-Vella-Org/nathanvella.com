import Image from "next/image";

export function ImageSection() {
  return (
    <Image
      src="/me.jpg"
      alt="Nate Vella"
      width={250}
      height={250} />
  );
}
