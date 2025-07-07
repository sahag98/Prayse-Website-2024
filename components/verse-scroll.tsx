import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { merriweather } from "@/app/page";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    verse: "1 Thessalonians 5:16-18",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    verse: "Philippians 4:6-7",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    verse: "Luke 19:11–27",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    verse: "Psalm 23",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    verse: "Proverbs 3:5–6",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    verse: "Colossians 3:23–24",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  verse,
}: {
  img: string;
  name: string;
  username: string;
  verse: string;
}) => {
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
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
