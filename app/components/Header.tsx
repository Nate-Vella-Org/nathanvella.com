import { SocialItem } from "./SocialItem";
import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/16/solid";

export function Header() {
    return (
        <div className="container max-w-xs flex flex-col">
            <div className="p-4">
                <Image src="/me.jpg" alt="Nate Vella" width={250} height={250} />
            </div>
            <h1 className="text-4xl font-bold p-4 pb-0">Nate Vella</h1>
            <div className="flex items-center p-4 pt-0">
                <MapPinIcon className="h-4 w-4" />
                <p className="text-sm pl-2">Denver, CO</p>
            </div>
            {/* <div className="flex flex-col p-4">
                <a href="/about" className="text-sm">About</a>
                <a href="/projects" className="text-sm">Projects</a>
                <a href="/contact" className="text-sm">Contact</a>
            </div> */}
            <div className="pl-4">
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
            <hr className="mt-4 border-gray-300 border-solid border-t-2 md:hidden" />
        </div>
    );
}
