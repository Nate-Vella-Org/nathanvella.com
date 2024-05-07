type SocialItemProps = {
    href: string;
    icon: string;
    text: string;
};

export function SocialItem({ href, icon, text }: SocialItemProps) {
    return (
        <a
            className="flex items-center"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src={icon} alt={text} className="w-6 h-6 mr-2" />
            <p className="text-sm">{text}</p>
        </a>
    );
}