import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import ContactForm from "./contact-form";

const ContactPage = () => {
  return (
    <div className="min-h-screen px-4 md:px-0 bg-secondary flex flex-col gap-10 items-center justify-center">
      <h1 className="text-5xl font-bold text-primary">Contact</h1>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
