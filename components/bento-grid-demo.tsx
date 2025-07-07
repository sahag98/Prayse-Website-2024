"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
} from "@tabler/icons-react";
import { useStaggerAnimation } from "@/hooks/use-gsap";

export default function BentoGridDemo() {
  const gridRef = useStaggerAnimation(".bento-grid-item", {
    from: { opacity: 0, y: 0, scale: 0.9 },
    to: { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power2.out" },
  });

  return (
    <div ref={gridRef}>
      <BentoGrid className="pb-20 px-4 md:px-0">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            image={item.image}
            className={`bento-grid-item ${
              i === 2 || i === 6 ? "md:col-span-2 col-span-1" : ""
            }`}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const items = [
  {
    title: "Stay Consistent, Not Confused",
    description:
      "Build a steady prayer life with simple reminders and easy organization. No guesswork. No guilt.",
    image: "/bento/stay-consistent.png",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Pray with Purpose",
    description:
      "Focus your prayer time with guided prompts, and space for reflection, designed to help you dive deeper.",
    image: "/bento/pray-with-purpose.png",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Faith That Grows With You",
    description:
      "Whether you're just starting or finding your rhythm again, Prayse supports your journey every step of the way.",
    image: "/bento/faith-that-grows.png",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
];
