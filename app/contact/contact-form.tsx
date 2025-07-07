"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import React, { useEffect, useRef } from "react";
import { createMessage } from "./contact-action";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (!cardRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate card header
    const header = cardRef.current.querySelector(".card-header");
    if (header) {
      tl.fromTo(
        header,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }

    // Animate form elements with stagger
    const formElements = cardRef.current.querySelectorAll(
      "label, input, textarea, button"
    );
    tl.fromTo(
      formElements,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
      "-=0.3"
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Card ref={cardRef} className="flex-1">
      <CardHeader className="card-header font-medium text-lg">
        At Prayse, community matters. If there&apos;s something on your
        heart—big or small—we&apos;re here to listen. Use the form below to get
        in touch, and we&apos;ll get back to you as soon as we can. 🙏 Our usual
        response time is within 2–3 business days.
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <form
          ref={formRef}
          action={async (formData) => {
            await createMessage(formData);
            formRef.current?.reset(); // Reset all form fields
            toast({
              className: "border border-secondary",
              title: "Message sent successfully.",
              description:
                "Thank you for reaching out. I'll be in contact with you shortly!",
            });
          }}
          className="space-y-4"
        >
          <div>
            <Label>Name</Label>
            <Input
              name="name"
              className="hover:scale-[1.02] transition-transform duration-200"
            />
          </div>
          <div>
            <Label>Email</Label>
            <Input
              name="email"
              type="email"
              className="hover:scale-[1.02] transition-transform duration-200"
            />
          </div>
          <div>
            <Label>Message</Label>
            <Textarea
              className="resize-none hover:scale-[1.02] transition-transform duration-200"
              name="message"
            />
          </div>
          <Button
            type="submit"
            className="font-semibold w-full text-base py-5 hover:scale-105 transition-transform duration-200"
          >
            Send
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
