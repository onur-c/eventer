import Skeleton from "@/components/Skeleton";

const Loading = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-24">
      <Skeleton className="h-48" />
      <Skeleton />
      <Skeleton />
    </main>
  );
};

export default Loading;
