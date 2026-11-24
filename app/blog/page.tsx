import { getPosts } from "@/lib/sanity/client";
import BlogList from "@/components/sections/blog-list";
import SectionHeading from "@/components/ui/section-heading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description: "Stay informed with the latest insights, research findings, market trends, and technological shifts in data analytics and artificial intelligence.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog & Insights | Maction Consulting",
    description: "Practical perspectives on market research, analytics, strategy, and modern business.",
    url: "/blog",
  },
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <section className="min-h-screen bg-slate-50 py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          as="h1"
          width="wide"
          eyebrow="Maction insights"
          title="Ideas that move decisions forward"
          description="Practical perspectives on market research, analytics, strategy, and the forces shaping modern business."
        />

        <BlogList posts={posts} />
      </div>
    </section>
  );
}