import { Suspense } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row">
      <Suspense>
        <Header />
      </Suspense>
      <main className="w-full p-4">
        <h1 className="text-3xl font-bold px-4">Projects</h1>
        <Main />
      </main>
    </div>
  );
}
