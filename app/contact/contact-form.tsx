"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import React from "react";
import { createMessage } from "./contact-action";

const ContactForm = () => {
  const router = useRouter();
  const formRef = React.useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  return (
    <Card className="md:w-1/2 w-full">
      <CardHeader className="font-medium text-lg">
        Do you have any questions about Prayse, or any feedback/improvements you
        would like to share? Would love to hear from you!
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
            <Input name="name" />
          </div>
          <div>
            <Label>Email</Label>
            <Input name="email" type="email" />
          </div>
          <div>
            <Label>Message</Label>
            <Textarea className="resize-none" name="message" />
          </div>
          <Button type="submit" className="font-semibold w-full text-base py-5">
            Send
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
