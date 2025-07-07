import { cn } from "@/lib/utils";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[30rem] md:grid-cols-2",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  image,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  image?: string;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input relative row-span-1 flex flex-col justify-end rounded-xl border border-primary bg-white transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none overflow-hidden min-h-[20rem] md:min-h-[30rem]",
        className
      )}
    >
      {image && (
        <Image
          src={image}
          alt="Bento background"
          fill
          className="object-cover w-full h-full absolute inset-0 z-0"
          priority
        />
      )}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-700/50 via-blue-500/30 to-transparent pointer-events-none" />
        <div className="relative p-4">
          <div className="mt-2 mb-2 font-bold md:text-2xl text-xl text-primary dark:text-neutral-200">
            {title}
          </div>
          <div className="text-white md:text-lg text-base font-medium dark:text-neutral-300">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
