import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const SupportPage = () => {
  return (
    <div className="min-h-screen my-24 lg:px-44 flex flex-col items-center md:px-36 sm:px-7 px-4">
      <h1 className="text-5xl font-bold mb-3">Take Part</h1>
      <div className="md:w-2/3 mt-5 flex flex-col gap-5">
        <p className="text-lg">
          Praying is a privelege we as Christians have, but sometimes it&apos;s
          taken for granted. Prayse&apos;s main mission is to re-elevate the
          importance of praying and praising God despite the distractions in our
          lives, and Prayse needs your help to achieve that.
        </p>
        <p className="text-lg">
          As a team of one, I&apos;m blessed to work on Prayse and help people
          develop a consistent prayer life with God. Lord willing, my prayer is
          to get to a point where I can fully focus on Prayse as it&apos;s
          something I absolutely love working on and feel led by the Lord to
          focus on.
        </p>

        <section className="space-x-5 my-10 w-full flex items-center justify-center">
          <Link
            href={"https://buymeacoffee.com/prayse"}
            className="w-1/2"
            target="_blank"
          >
            <Button className="text-lg font-bold w-full py-7" size={"lg"}>
              One Time Donation
            </Button>
          </Link>

          <Link
            href={"https://buymeacoffee.com/prayse/membership"}
            className="w-1/2"
            target="_blank"
          >
            <Button className="text-lg font-bold w-full py-7" size={"lg"}>
              Monthly Donation
            </Button>
          </Link>
        </section>
        <h2 className="text-4xl font-semibold">How will the funds be used?</h2>
        <h3 className="text-lg">
          The funds received through your contributions will be used to support
          the following:
        </h3>
        <ul className="">
          <li>- Development and maintenance of our app.</li>
          <li>- Apple fees to keep Prayse on the App Store.</li>
          <li>
            - Effort to bring in more people that can help with the app, social
            media, and merchandise.
          </li>
        </ul>
        <p className="text-lg">
          Thank you so much for your support and we pray that you would see the
          fruits of your support through Prayse and through God&apos;s
          blessings. If you are unable to support Prayse financially, you can
          always support Prayse by just using our app, interacting with us on
          our socials, and giving ideas to improve Prayse!
        </p>
      </div>

      {/* <p>Hey there, my name is Sahag and I&apos;m the founder of Prayse.</p>
      <div className="md:w-2/3 mt-5 space-y-3">
        <p>
          During the summer of 2022, I was attending a bible study at my church,{" "}
          <a
            target="_blank"
            className="font-medium text-blue-600"
            href="https://www.findnewlife.church/"
          >
            New Life Church
          </a>
          . The study reached a point where the teacher began taking prayer
          requests. As everyone shared their requests, we struggled to find pens
          and papers to write them down, so some resorted to using their phones.
        </p>
        <section className="flex md:flex-row flex-col items-center justify-between gap-5">
          <div className="space-y-4">
            <p>
              As I started typing everyone&apos;s requests into my phone, I
              heard this simple voice in my head say,{" "}
              <span className="italic">
                &quot;What if you build an app for this purpose?&quot;
              </span>{" "}
              At this point in my life, I was pursuing a Bachelor&apos;s degree
              in Computer Science. I prayed on that voice and soon began to
              develop the idea.
            </p>
            <p>
              A couple of weeks later, the first version of Prayse (Prayer &
              Praise) was published on both the Google Play Store and the App
              Store. I shared it with my friends and they found it useful. To my
              surprise, even people from the internet started downloading and
              using it. Honestly, I was shocked, because for me, Prayse was just
              meant to be a personal app to manage my prayer requests. As I
              continued praying about Prayse, the need to keep developing it
              grew and I became 100% certain that this was something the Lord
              wanted me to do. Hadn&apos;t fully thought about the long-term
              journey of Prayse or its ultimate goal, but through the
              Lord&apos;s guidance, was at least able to figure out the very
              next step.
            </p>
          </div>
          <Image
            src={"/praysev1.png"}
            width={378}
            height={800}
            className="rounded-lg border"
            alt="Prayse version 1"
          />
        </section>
        <section className="flex md:flex-row flex-col-reverse items-center justify-between gap-5">
          <Image
            src={"/prayse-hero.jpeg"}
            width={378}
            height={800}
            className="rounded-lg border md:w-1/4 w-full"
            alt="Prayse version 1"
          />
          <div className="space-y-4">
            <p>
              Fast forward two years later: Prayse has reached thousands of
              people, and what God has done and is continuing to do is honestly
              amazing. I can&apos;t find the words to describe how Prayse has
              been a blessing to others and also to me. Beyond the numbers and
              statistics, the thing that sticks with me the most is the little
              comments I receive about Prayse. If you&apos;ve interacted with me
              regarding Prayse or left a comment on our online platforms, know
              that you&apos;ve made a significant impact. The current and future
              accomplishments of Prayse are not only fruit unto my account, but
              also yours.
            </p>
            <p className="font-medium">
              Following God&apos;s direction isn&apos;t always easy, but it is
              simple.
            </p>
          </div>
        </section>
        <p>
          If you&apos;re someone who spends alot of time thinking about your
          future, your career, or anything else, I encourage you to pause and
          reflect on this simple question:
        </p>

        <p className="font-medium mt-3">What does God want me to do next?</p>

        <p>
          Pray, read God&apos;s word, seek counsel, and by faith, take that very
          next step. No matter how big or small that step might be, FULLY
          surrender it to the Lord and marvel at the amazing things He will do
          to guide and provide for you.
        </p>
        <p>
          Most importantly, and before anything else, if you do not have a
          personal relationship with Jesus, may I advise you to accept Him as
          your Lord and Saviour. Close your eyes, and say this:{" "}
          <span className="italic">
            &quot;Dear Lord, I&apos;m here. Please forgive me from my sins, and
            help me to abide in You, as You abide in me. From this point on, my
            life is Yours. Help me to live a life that glorifies You, and
            reflects Your love and grace to others. In Jesus&apos; name,
            Amen.&quot;
          </span>
        </p>
        <p className="font-medium">
          Here are a list of bible verses that have been a huge help throughout
          the past couple of years:
        </p>
        <ul>
          <li className="italic list-disc">Philippians 4:6-7</li>
          <li className="italic list-disc">1 Thessalonians 5:16-18</li>
          <li className="italic list-disc">Luke 19:11–27</li>
          <li className="italic list-disc">Psalm 23</li>
          <li className="italic list-disc">Proverbs 3:5–6</li>
          <li className="italic list-disc">Colossians 3:23–24</li>
          <li className="italic list-disc">Romans 11:36</li>
          <li className="italic list-disc">Proverbs 27:17</li>
        </ul>
        <p>
          Praying for you, and am so glad that you are a part of this amazing
          journey! - Sahag
        </p>
      </div> */}
    </div>
  );
};

export default SupportPage;
