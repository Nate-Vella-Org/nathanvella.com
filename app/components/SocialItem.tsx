import Image from "next/image";

type SocialItemProps = {
  href: string;
  icon: string;
  text: string;
};

export function SocialItem({ href, icon, text }: SocialItemProps) {
  return (
    <a
      className="flex items-center gap-2 text-sm text-zinc-700 hover:text-brand-700 dark:text-zinc-300 dark:hover:text-brand-300"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src={icon} alt={text} width={20} height={20} className="rounded-sm" />
      <p>{text}</p>
    </a>
  );
}
