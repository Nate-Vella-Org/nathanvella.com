import { ImageSection } from "./components/ImageSection";
import { ContentSection } from "./components/ContentSection";

// Home component
export default function Home() {
  return (
    <main className="flex flex-col sm:flex-row items-start justify-start p-24">
      <ImageSection />
      <ContentSection />
    </main>
  );
}