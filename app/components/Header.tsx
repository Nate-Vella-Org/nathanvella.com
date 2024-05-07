import { ContentSection } from "./ContentSection";
import { ImageSection } from "./ImageSection";

export function Header() {
    return (
        <div>
            <ImageSection />
            <ContentSection />
        </div>
    );
}