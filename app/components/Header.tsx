import { SocialItem } from "./SocialItem";
import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/16/solid";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <div className="container max-w-xs flex flex-col w-full text-zinc-900 dark:text-zinc-100">
      <div className="flex items-center justify-end p-4 pb-0">
        <ThemeToggle />
      </div>
      <div className="p-4">
        <Image
          src="/me.jpg"
          alt="Nate Vella"
          width={250}
          height={250}
          className="rounded-xl border border-brand-200 dark:border-brand-900"
        />
      </div>
      <h1 className="px-4 pb-0 text-4xl font-bold text-zinc-900 dark:text-zinc-100">Nate Vella</h1>
      <p className="px-4 pt-1 text-sm text-brand-700 dark:text-brand-300">Builder • Operator • Product-minded engineer</p>
      <div className="flex items-center p-4 pt-2 text-zinc-700 dark:text-zinc-300">
        <MapPinIcon className="h-4 w-4 text-brand-600 dark:text-brand-400" />
        <p className="text-sm pl-2">Denver, CO</p>
      </div>

      <div className="pl-4 pb-5 space-y-2">
        <SocialItem href="https://www.linkedin.com/in/vellanathan/" icon="/linkedin-icon.svg" text="/vellanathan" />
        <SocialItem href="https://github.com/nathanvella" icon="/github-icon.svg" text="/nathanvella" />
        <SocialItem href="mailto:nathangvella@gmail.com" icon="/email-icon.png" text="nathangvella@gmail.com" />
      </div>
    </div>
  );
}
