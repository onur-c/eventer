import { MoveLeftIcon, MoveRightIcon } from "lucide-react";
import Link from "next/link";

const pageButtonStyles =
  "flex opacity-80 border-white/25 border hover:border-white hover:opacity-100 transition  gap-1 bg-accent p-3 rounded";

type PageButtonsProps = { previousPath: string; nextPath: string };

const PageButtons = ({ previousPath, nextPath }: PageButtonsProps) => {
  return (
    <div className="w-full flex justify-between px-24">
      {previousPath ? (
        <Link href={previousPath} className={pageButtonStyles} scroll={false}>
          <MoveLeftIcon />
          <p>Prev</p>
        </Link>
      ) : (
        <div></div>
      )}
      {nextPath && (
        <Link href={nextPath} className={pageButtonStyles} scroll={false}>
          <p>Next</p>
          <MoveRightIcon />
        </Link>
      )}
    </div>
  );
};

export default PageButtons;
