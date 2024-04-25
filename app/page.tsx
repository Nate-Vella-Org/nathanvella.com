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
        <h1 className="text-4xl font-bold mb-4">Nate Vella</h1>
        <p className="text-lg" style={{ maxWidth: '250px' }}>Just trying to build stuff </p>
        <div className="mt-4 flex justify-start">
          <a href="https://www.linkedin.com/in/vellanathan/" target="_blank" rel="noopener noreferrer">
            <Image src="/linkedin-icon.svg" alt="LinkedIn" width={24} height={24} />
          </a>
          <a href="https://github.com/nathanvella" target="_blank" rel="noopener noreferrer" className="ml-4">
            <Image src="/github-icon.svg" alt="GitHub" width={24} height={24} />
          </a>
          <a href="mailto:nathangvella@gmail.com" className="ml-4">
            <Image src="/email-icon.png" alt="Email" width={24} height={24} />
          </a>
        </div>
      </div>
    </main>
  );
}