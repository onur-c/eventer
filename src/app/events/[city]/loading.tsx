import Heading1 from "@/components/Heading1";
import Skeleton from "@/components/Skeleton";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-wrap p-12 items-center justify-center gap-16">
      <Skeleton className="h-[380px] w-[320px]" />
      <Skeleton className="h-[380px] w-[320px]" />
      <Skeleton className="h-[380px] w-[320px]" />
      <Skeleton className="h-[380px] w-[320px]" />
    </div>
  );
};

export default Loading;
