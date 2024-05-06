import { SocialItem } from "./SocialItem"; 

export function ContentSection() {
  return (
    <div className="mt-4 sm:mt-0 sm:ml-4">
      <h1 className="text-4xl font-bold mb-4">Nate Vella</h1>
      <p className="text-lg" style={{ maxWidth: '250px' }}>Just trying to build stuff </p>
      <div className="mt-4 flex justify-start">
        <SocialItem
          href="https://www.linkedin.com/in/vellanathan/"
          icon="/linkedin-icon.svg"
          text="/vellanathan"
        />
      </div>
      <div className="mt-4 flex justify-start">
        <SocialItem
          href="https://github.com/nathanvella"
          icon="/github-icon.svg"
          text="/nathanvella"
        />
      </div>
      <div className="mt-4 flex justify-start">
        <SocialItem
          href="mailto:nathangvella@gmail.com"
          icon="/email-icon.png"
          text="nathangvella@gmail.com"
        />
      </div>
    </div>
  );
}
