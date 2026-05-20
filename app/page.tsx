import Image from "next/image";

const links = [
  {
    href: "https://www.linkedin.com/in/vellanathan/",
    label: "LinkedIn",
    detail: "/vellanathan",
  },
  {
    href: "https://github.com/nathanvella",
    label: "GitHub",
    detail: "/nathanvella",
  },
  {
    href: "mailto:nathangvella@gmail.com",
    label: "Email",
    detail: "nathangvella@gmail.com",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-12 text-zinc-950">
      <a
        href="#main-content"
        className="sr-only absolute left-2 top-2 rounded bg-white px-3 py-1 text-sm text-zinc-900 focus:not-sr-only"
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
          className="h-44 w-44 rounded-full object-cover ring-1 ring-zinc-200"
        />

        <h1 className="mt-8 text-4xl font-semibold tracking-normal">Nate Vella</h1>
        <p className="mt-2 text-base text-zinc-600">Denver, CO</p>

        <div className="mt-8 flex w-full flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="flex items-center justify-between rounded border border-zinc-200 bg-white px-4 py-3 text-left text-sm transition hover:border-zinc-300 hover:bg-zinc-100"
            >
              <span className="font-medium">{link.label}</span>
              <span className="text-zinc-500">{link.detail}</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
