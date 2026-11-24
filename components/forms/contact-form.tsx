"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { CircleHelp, Contact, MapPin, ShieldCheck } from "lucide-react";
import { useAnalytics } from "@/hooks/use-analytics";
import { contactSchema, type ContactFormData } from "@/lib/validation/contact";
import MotionReveal from "@/components/shared/motion-reveal";
import { useState } from "react";

type FormData = ContactFormData;

interface Field {
  name: keyof FormData;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}

const FIELDS: Field[] = [
  { name: "firstName", label: "First Name", placeholder: "e.g. abc", required: true },
  { name: "lastName", label: "Last Name", placeholder: "e.g. xyz", required: true },
  { name: "email", label: "Work email address", placeholder: "name@company.com", type: "email", required: true },
  { name: "phone", label: "Phone number", placeholder: "Full Number (incl. prefix)", type: "tel", required: true },
  { name: "company", label: "Company", placeholder: "Your company name" },
];

const INQUIRY_OPTIONS = [
  "General Information Request",
  "Partner Relations",
  "Careers",
  "I need help",
] as const;

export default function ContactForm() {
  const router = useRouter();
  const { trackFormSubmit } = useAnalytics();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        trackFormSubmit("contact_form", "success");
        reset();
        router.push("/thank-you");
      } else {
        const result = (await response.json().catch(() => null)) as { error?: string } | null;
        const message = result?.error ?? "Failed to send message. Please try again.";
        setSubmitError(message);
        toast.error(message);
        trackFormSubmit("contact_form", "failure");
      }
    } catch (error) {
      console.error(error);
      const message = "Something went wrong. Please check your connection and try again.";
      setSubmitError(message);
      toast.error(message);
      trackFormSubmit("contact_form", "failure");
    }
  };

  return (
    <section className="bg-slate-50 py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <MotionReveal className="mb-10 text-center md:mb-12" y={18}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Contact Us</h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Let&apos;s discuss your business challenges and opportunities.
          </p>
        </MotionReveal>

        <MotionReveal y={24} delay={0.1}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="mx-auto max-w-3xl space-y-5 rounded-3xl bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl sm:p-8 md:p-10"
          >
          {/* Honeypot: hidden from real users, bots tend to fill it */}
          <input
            {...register("website")}
            type="text"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          {FIELDS.map((field) => {
            const error = errors[field.name];
            const errorId = `${field.name}-error`;
            const shared = {
              id: field.name,
              "aria-invalid": error ? true : undefined,
              "aria-describedby": error ? errorId : undefined,
              placeholder: field.placeholder,
              ...register(field.name),
            };

            return (
              <div key={field.name} className="space-y-1">
                <label htmlFor={field.name} className="block text-sm font-medium text-slate-900">
                  {field.label}
                  {field.required ? " (required)" : ""}
                </label>
                <Input {...shared} type={field.type} className="transition-shadow duration-200 focus-visible:shadow-md" />
                {error && (
                  <p id={errorId} role="alert" className="text-sm font-medium text-red-500">
                    {error.message}
                  </p>
                )}
              </div>
            );
          })}

          <div className="space-y-1">
            <label htmlFor="inquiry" className="block text-sm font-medium text-slate-900">
              What is your inquiry about?
            </label>
            <Controller
              name="inquiry"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    id="inquiry"
                    aria-invalid={errors.inquiry ? true : undefined}
                    aria-describedby={errors.inquiry ? "inquiry-error" : undefined}
                    className="data-[size=default]:h-14 w-full rounded-xl border-slate-200 bg-white px-4 text-[15px] font-medium text-slate-700 shadow-sm transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-px hover:border-slate-300 hover:shadow-md focus-visible:-translate-y-px focus-visible:shadow-lg data-[state=open]:border-brand data-[state=open]:ring-4 data-[state=open]:ring-blue-100 [&>svg]:text-brand"
                  >
                    <SelectValue placeholder="Please Select" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-slate-200 bg-white p-2 shadow-2xl data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95">
                    {INQUIRY_OPTIONS.map((option) => (
                      <SelectItem
                        key={option}
                        value={option}
                        className="rounded-lg px-3 py-3 text-[15px] font-medium text-slate-700 transition-[background-color,color] duration-150 data-[highlighted]:bg-blue-50 data-[highlighted]:text-brand data-[state=checked]:font-semibold"
                      >
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.inquiry && (
              <p id="inquiry-error" role="alert" className="text-sm font-medium text-red-500">
                {errors.inquiry.message}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <label htmlFor="message" className="block text-sm font-medium text-slate-900">
              Tell us about your requirement
            </label>
            <textarea
              id="message"
              {...register("message")}
              rows={5}
              placeholder="Share your research question, target market, timeline, or any useful context."
              aria-invalid={errors.message ? true : undefined}
              aria-describedby={errors.message ? "message-error" : undefined}
              className="flex w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[15px] text-slate-700 shadow-sm outline-none transition-shadow placeholder:text-slate-400 focus-visible:border-brand focus-visible:ring-4 focus-visible:ring-blue-100"
            />
            {errors.message && (
              <p id="message-error" role="alert" className="text-sm font-medium text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>

          <Button type="submit" variant="brand" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
          {submitError && (
            <p role="alert" aria-live="polite" className="text-center text-sm font-medium text-red-600">
              {submitError}
            </p>
          )}

          <p className="flex items-center justify-center gap-1.5 text-center text-xs text-slate-500">
            <ShieldCheck className="h-3.5 w-3.5 text-brand" />
            Your details are confidential. We typically respond within 2 business days.
          </p>
          </form>
        </MotionReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          <MotionReveal delay={0.05} className="h-full">
            <article className="group flex h-full flex-col items-center rounded-2xl border border-slate-100 bg-white px-6 py-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg sm:px-8">
            <CircleHelp className="h-14 w-14 text-brand transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" strokeWidth={1.75} aria-hidden="true" />
            <h3 className="mt-7 text-2xl font-bold text-slate-900">FAQs</h3>
            <p className="mt-8 max-w-sm text-base leading-7 text-slate-500">
              For quick answers to your common questions, try our FAQs!!
            </p>
            </article>
          </MotionReveal>

          <MotionReveal delay={0.15} className="h-full">
            <article className="group flex h-full flex-col items-center rounded-2xl border border-slate-100 bg-white px-6 py-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg sm:px-8">
            <MapPin className="h-14 w-14 text-brand transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1" strokeWidth={1.75} aria-hidden="true" />
            <h3 className="mt-7 text-2xl font-bold text-slate-900">Headquarters</h3>
            <address className="mt-8 max-w-sm text-base not-italic leading-7 text-slate-500">
              <span className="block">Maction Consulting Pvt. Ltd.</span>
              <a
                href="https://maps.app.goo.gl/AUb6uocrR5YZw3Ef7"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-sky-500 transition-colors hover:text-sky-600 hover:underline"
              >
                A/1/D, Chinubhai Tower, Near HK College, Ashram Road, Ahmedabad - 380009, India
              </a>
            </address>
            </article>
          </MotionReveal>

          <MotionReveal delay={0.25} className="h-full">
            <article className="group flex h-full flex-col items-center rounded-2xl border border-slate-100 bg-white px-6 py-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg sm:px-8">
            <Contact className="h-14 w-14 text-brand transition-transform duration-300 group-hover:scale-110" strokeWidth={1.75} aria-hidden="true" />
            <h3 className="mt-7 text-2xl font-bold text-slate-900">Contact Details</h3>
            <div className="mt-8 space-y-2 text-base leading-7 text-slate-500">
              <p>
                Email:{" "}
                <a href="mailto:info@maction.com" className="text-sky-500 underline decoration-slate-300 underline-offset-2 hover:text-sky-600">
                  info@maction.com
                </a>
              </p>
              <p>Open: Monday to Saturday</p>
            </div>
            </article>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
