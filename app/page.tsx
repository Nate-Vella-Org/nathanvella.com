import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col sm:flex-row items-start justify-start p-24">
      <Image 
        src="/me.jpg" 
        alt="Nate Vella" 
        width={250} 
        height={250} 
      />
      <div className="mt-4 sm:mt-0 sm:ml-4">
        <h1 className="text-4xl font-bold mb-4">Nathan Vella</h1>
        <p className="text-lg">Just trying to build things.</p>
      </div>
    </main>
  );
}