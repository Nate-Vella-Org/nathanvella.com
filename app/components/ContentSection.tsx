import { Name } from "./Name";
import { Bio } from "./Bio";
import { SocialItem } from "./SocialItem";

export function ContentSection() {
  return (
    <div className="mt-4 sm:mt-0 sm:ml-4 p-4">
      <Name />
      <Bio />
    </div>
  );
}
