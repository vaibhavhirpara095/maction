import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  /** Render the title as an h1 (page hero) or h2 (in-page section). Default h2. */
  as?: "h1" | "h2";
  className?: string;
  /** Constrain the text column width. Default narrow (max-w-2xl). */
  width?: "narrow" | "wide";
}

/**
 * The eyebrow + heading + description block repeated across every marketing
 * section and list page. Centralised so spacing, sizes and brand color stay
 * consistent.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as = "h2",
  className,
  width = "narrow",
}: SectionHeadingProps) {
  const Title = as;
  const isH1 = as === "h1";

  return (
    <div
      className={cn(
        "mb-10 sm:mb-12 md:mb-16",
        align === "center" ? "mx-auto text-center" : "text-left",
        width === "narrow" ? "max-w-2xl" : "max-w-3xl",
        className,
      )}
    >
      {eyebrow && (
        <span className="text-sm font-bold uppercase tracking-wider text-brand">
          {eyebrow}
        </span>
      )}
      <Title
        className={cn(
          "mt-2 font-extrabold leading-tight text-slate-900",
          isH1
            ? "text-4xl font-black sm:text-5xl md:text-6xl"
            : "text-3xl sm:text-4xl md:text-5xl",
        )}
      >
        {title}
      </Title>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{description}</p>
      )}
    </div>
  );
}
