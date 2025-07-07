import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { merriweather } from "@/lib/merriweather-font";

const reviews = [
  {
    verse: "1 Thessalonians 5:16-18",
  },
  {
    verse: "Philippians 4:6-7",
  },
  {
    verse: "Luke 19:11–27",
  },
  {
    verse: "Psalm 23",
  },
  {
    verse: "Proverbs 3:5–6",
  },
  {
    verse: "Colossians 3:23–24",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);

const ReviewCard = ({ verse }: { verse: string }) => {
  return (
    <figure className={cn("relative overflow-hidden rounded-xl p-6")}>
      <blockquote
        className={cn(
          merriweather.className,
          "mt-2 text-xl font-bold italic text-primary"
        )}
      >
        {verse}
      </blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.verse} {...review} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
