import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "FMCG Image Direction Preview",
  robots: { index: false, follow: false },
};

const imageOptions = [
  {
    number: "01",
    title: "Product & packaging",
    description: "Clean product-focused imagery for innovation, packaging, and concept research.",
    src: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=85",
    alt: "Personal care product packaging arranged on a surface",
  },
  {
    number: "02",
    title: "Consumer lifestyle",
    description: "Human, premium imagery for understanding everyday consumer choices and habits.",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=85",
    alt: "Consumer lifestyle portrait",
  },
  {
    number: "03",
    title: "Beverage & consumption",
    description: "A focused category visual for food, beverage, and consumption moments.",
    src: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1200&q=85",
    alt: "Beverage products arranged for consumption",
  },
  {
    number: "04",
    title: "Retail context",
    description: "A considered retail image showing where products compete for attention and choice.",
    src: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1200&q=85",
    alt: "Retail store aisle with consumer products",
  },
];

export default function FmcgImagesPreviewPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] px-6 py-14 text-[#172033] md:px-12 md:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a45d49]">
          Image direction preview
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
          Which FMCG image feels right for the page?
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
          These are only visual directions. Nothing will be added to the FMCG page until you choose
          one.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {imageOptions.map((option) => (
            <article key={option.number} className="overflow-hidden border border-slate-200 bg-white">
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-200">
                <Image
                  src={option.src}
                  alt={option.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8">
                <span className="font-mono text-xs font-bold tracking-[0.16em] text-[#a45d49]">
                  {option.number}
                </span>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.025em]">{option.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{option.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
