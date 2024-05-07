import Image from "next/image";

export function ImageSection() {
  return (
    <div className="mt-4 sm:mt-0 sm:ml-4 p-4">
      <Image
        src="/me.jpg"
        alt="Nate Vella"
        width={250}
        height={250}
      />
    </div>
  );
}
