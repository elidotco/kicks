import { Category, Footer, Hero, Review } from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  ">
      <h1 className="text-[50px] text-center font-bold uppercase lg:text-[194px]  w-[auto] ">
        DO it <span className="text-[#4A69E2] "> Right</span>
      </h1>
      <Hero />
      <Category />
      <Review />
      <Footer />
    </main>
  );
}
