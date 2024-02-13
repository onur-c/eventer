import Heading1 from "@/components/Heading1";
import SearchForm from "@/components/SearchForm";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-8 flex items-center justify-center">
      <div className="w-[900px] space-y-2 text-center">
        <Heading1>
          Find <span className="text-accent">events</span> all around the world.
        </Heading1>
        <p className="text-white/50 text-xl">
          You can start browsing right now!
        </p>
        <SearchForm />
        <div className="flex gap-4 text-sm text-white/50 justify-center">
          <p>Popular places:</p>
          <div className="flex gap-4 font-bold">
            <Link href={`/events/seattle`}>Seattle</Link>
            <Link href={"/events/istanbul"}>Istanbul</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
