import { Suspense } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export default function Home() {
  return (
    <>
      <div className="flex ">
        <Suspense>
          <Header />
        </Suspense>
        <Main />
      </div>
    </>
  );
}