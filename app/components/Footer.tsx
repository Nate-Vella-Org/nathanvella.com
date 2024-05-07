import { SocialItem } from "./SocialItem";

export function Footer() {
    return (
        <div className="fixed bottom-0 left-0 right-0 p-4">
            <div className="flex justify-start">
                <SocialItem
                    href="https://www.linkedin.com/in/vellanathan/"
                    icon="/linkedin-icon.svg"
                    text="/vellanathan"
                />
            </div>
            <div className="flex justify-start">
                <SocialItem
                    href="https://github.com/nathanvella"
                    icon="/github-icon.svg"
                    text="/nathanvella"
                />
            </div>
            <div className="flex justify-start">
                <SocialItem
                    href="mailto:nathangvella@gmail.com"
                    icon="/email-icon.png"
                    text="nathangvella@gmail.com"
                />
            </div>
        </div>
    );
}