import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Button } from "./ui/button";
import Link from "next/link";
export function TimelineDemo() {
  const data = [
    {
      title: "2022",
      content: (
        <div>
          <p className="mb-8 font-normal">
            In the summer of 2022, while attending a Bible study at New Life
            Church, I noticed the struggle to keep track of prayer requests. As
            I typed them into my phone, I felt a prompting:{" "}
            <b>"What if you build an app for this?"</b> As a Computer Science
            student, I <b>prayed about it and began building the idea</b>.
            Within weeks, the first version of Prayse (Prayer & Praise) was
            launched on the App Store and Google Play. Originally meant for
            personal use, it quickly gained traction among friends and even
            strangers online. Surprised but encouraged, I kept developing the
            app, confident that <b>God was guiding each step</b>—even if I
            didn&apos;t yet see the full path ahead.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src="/2022-1.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/2022-2.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/2022-3.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="mb-8">
            In 2023, I <b>continued developing Prayse</b> by releasing new
            features and regular updates to <b>improve</b> the user experience.
            I also began <b>focusing on the marketing</b> side—growing our
            <b>presence</b> on social media, running ads, and even launching a
            merch line to help spread the word and <b>support the mission</b>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src="/2023-1.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/2023-2.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/2023-3.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Present",
      content: (
        <div>
          <p className="mb-4">
            Two years later, Prayse has <b>reached thousands</b>, and it&apos;s
            been incredible to witness what God has done through it. More than
            the numbers, what means the most are the <b>heartfelt messages</b>{" "}
            and comments from users. Every interaction, message, or word of
            encouragement has made a <b>real impact</b>. The growth of Prayse is
            not just my journey—<b>it's one we share together</b>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src="/2025-1.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/2025-2.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/2025-3.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
          <div className="mt-4 flex gap-2 flex-col space-y-2">
            <h3 className="font-bold">
              {" "}
              Want to be part of what God is doing through Prayse?
            </h3>
            <p className="">
              As a small team, we rely on support from our community to keep
              growing. Whether through prayer, feedback, or financial support,
              every bit helps us continue the mission.
            </p>
            <Link href={"/support"} className="">
              <Button className="font-semibold">
                Learn how you can support Prayse →
              </Button>
            </Link>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
