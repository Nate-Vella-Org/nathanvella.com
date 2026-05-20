import Image from "next/image";

const links = [
  {
    href: "https://www.linkedin.com/in/vellanathan/",
    label: "LinkedIn",
    icon: "/linkedin-icon.svg",
  },
  {
    href: "https://github.com/nathanvella",
    label: "GitHub",
    icon: "/github-icon.svg",
  },
  {
    href: "mailto:nathangvella@gmail.com",
    label: "Email",
    icon: "/email-icon.png",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-zinc-50">
      <a
        href="#main-content"
        className="sr-only absolute left-2 top-2 rounded bg-zinc-50 px-3 py-1 text-sm text-zinc-950 focus:not-sr-only"
      >
        Skip to main content
      </a>

      <section
        id="main-content"
        className="mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-sm flex-col items-center justify-center text-center"
      >
        <Image
          src="/me.jpg"
          alt="Nate Vella"
          width={180}
          height={180}
          priority
          className="h-44 w-44 rounded-full object-cover ring-1 ring-zinc-700"
        />

        <h1 className="mt-8 text-4xl font-semibold tracking-normal">Nate Vella</h1>
        <p className="mt-2 text-base text-zinc-400">Denver Metro Area</p>

        <div className="mt-6 flex items-center justify-center gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              aria-label={link.label}
              title={link.label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 transition hover:border-zinc-500 hover:bg-zinc-800"
            >
              <Image src={link.icon} alt="" width={22} height={22} className="h-5 w-5 object-contain" />
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
