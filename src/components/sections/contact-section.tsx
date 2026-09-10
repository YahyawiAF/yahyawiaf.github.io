"use client";

import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { contact, emailjsConfig } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "sending" | "ok" | "error";

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        emailjsConfig.publicKey,
      );
      setStatus("ok");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-[#e8f4fc] py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-sky-mid">
            Continue?
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold sm:text-4xl">
            Start a quest with us
          </h2>
          <p className="mt-3 text-muted-foreground">
            Tell us about your product, legacy codebase, or mobile idea. We
            usually reply within a business day.
          </p>
          <ul className="mt-8 space-y-3 text-sm font-semibold">
            <li>
              <a
                href={contact.emailHref}
                className="text-primary hover:underline"
              >
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={contact.phoneHref}
                className="text-primary hover:underline"
              >
                {contact.phone}
              </a>
            </li>
            <li className="flex flex-wrap gap-4 pt-2">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-sky-mid hover:underline"
              >
                LinkedIn
              </a>
              <a
                href={contact.upwork}
                target="_blank"
                rel="noreferrer"
                className="text-[#14A800] hover:underline"
              >
                Upwork
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="text-sky-mid hover:underline"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-sm"
        >
          <div className="space-y-2">
            <Label htmlFor="user_name">Name</Label>
            <Input id="user_name" name="user_name" required placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="user_email">Email</Label>
            <Input
              id="user_email"
              name="user_email"
              type="email"
              required
              placeholder="you@company.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="What should we build or modernize?"
            />
          </div>
          <Button
            type="submit"
            disabled={status === "sending"}
            className="bg-accent text-accent-foreground hover:bg-accent/90 w-full transition hover:-translate-y-0.5 sm:w-auto"
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </Button>
          {status === "ok" && (
            <p className="text-sm font-medium text-hill">
              Message sent — talk soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm font-medium text-destructive">
              Something went wrong. Email us directly at {contact.email}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
