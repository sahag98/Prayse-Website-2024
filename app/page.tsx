import Hero from "@/components/hero";
import Section from "@/components/section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Section
        title="Create Prayer Lists"
        className="text-[#2f2d51]"
        description=" Easily organize your prayers in one place. Add, edit, and manage your
          prayer requests effortlessly, ensuring you never forget to pray for
          someone or something important."
        imageUrl="/prayerlist.jpeg"
      />
      <Section
        title="Setup Reminders"
        description="Stay consistent with your prayer life by setting customizable reminders. Get gentle nudges to pray throughout your day, tailored to your schedule."
        className={"bg-blue-50 text-[#2f2d51] md:flex-row-reverse"}
        imageUrl="/reminder.jpeg"
      />
      <Section
        title="Take a Moment and Pray"
        description="Find peace in the moment with a dedicated prayer space. Pause, reflect, and connect spiritually through our guided prayer prompts."
        className={"bg-[#2f2d51] text-white"}
        imageUrl="/takeamoment.jpg"
      />
      <Section
        title="Read the Daily Verse"
        description="Start your day inspired by Scripture. Discover a handpicked Bible verse each day to uplift and encourage your faith journey."
        imageUrl="/verse.jpeg"
        className="md:flex-row-reverse text-[#2f2d51]"
      />
    </div>
  );
}
