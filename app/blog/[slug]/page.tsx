import { getPostBySlug, getPosts, urlFor } from "@/lib/sanity/client";
import { notFound } from "next/navigation";
import { Calendar, User, ArrowLeft, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ShareButtons from "@/components/sections/share-buttons";
import PortableText from "@/components/shared/portable-text";
import TableOfContents from "@/components/shared/table-of-contents";
import ArticleJsonLd from "@/components/seo/article-json-ld";
import { Card, CardContent } from "@/components/ui/card";
import { extractHeadings, readingTimeMinutes } from "@/lib/portable-text-utils";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/shared/breadcrumbs";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80";

interface Props {
  params: Promise<{ slug: string }>;
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const ogImage = post.seo?.ogImage
    ? urlFor(post.seo.ogImage).url()
    : post.mainImage
      ? urlFor(post.mainImage).url()
      : "/logo.png";

  return {
    title: `${post.seo?.metaTitle ?? post.title} | Blog`,
    description: post.seo?.metaDescription ?? post.excerpt,
    keywords: post.tags,
    alternates: { canonical: `/blog/${slug}` },
    robots: post.seo?.noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "article",
      title: post.seo?.metaTitle ?? post.title,
      description: post.seo?.metaDescription ?? post.excerpt,
      publishedTime: post.publishedAt,
      authors: ["Maction Consulting"],
      images: [{ url: ogImage }],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const allPosts = await getPosts();
  const post = allPosts.find((p) => p.slug === slug) ?? (await getPostBySlug(slug));

  if (!post) {
    notFound();
  }

  // Related posts (same category, different slug) — reuse the already-fetched list.
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug && p.categories?.some((cat) => post.categories?.includes(cat)))
    .slice(0, 3);

  const mainImageUrl = post.mainImage ? urlFor(post.mainImage).url() : FALLBACK_IMAGE;
  const headings = extractHeadings(post.body);
  const readingTime = readingTimeMinutes(post.body);

  return (
    <article className="min-h-screen bg-slate-50 pb-24 pt-28 md:pt-32">
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        slug={post.slug}
        publishedAt={post.publishedAt}
        authorName="Maction Consulting"
        imageUrl={mainImageUrl}
        section="blog"
        breadcrumbLabel="Blog"
      />

      <div className="mx-auto max-w-7xl px-6">
        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
        {/* Breadcrumb / back */}
        <div className="mb-10">
          <Link href="/blog" className="group inline-flex">
            <Button variant="ghost" size="sm" className="gap-2 text-slate-500 hover:text-slate-900">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Header */}
        <header className="mx-auto max-w-4xl text-center">
          {post.categories && post.categories.length > 0 && (
            <div className="mb-6 flex flex-wrap justify-center gap-2">
              {post.categories.map((cat) => (
                <span
                  key={cat}
                  className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold tracking-wider text-brand uppercase"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-4xl leading-[1.08] font-black tracking-tight text-slate-950 md:text-6xl">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">{post.excerpt}</p>
          )}

          {/* Meta row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-y border-slate-200 py-4 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-brand" />
              {formatDate(post.publishedAt)}
            </span>
            {post.author?.name && (
              <span className="flex items-center gap-2">
                <User className="h-4 w-4 text-brand" />
                Maction Consulting
              </span>
            )}
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-brand" />
              {readingTime} min read
            </span>
          </div>
        </header>

        {/* Featured image */}
        <div className="relative mx-auto my-12 aspect-[16/8] max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl">
          <Image
            src={mainImageUrl}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1152px) 100vw, 1152px"
            className="object-cover"
          />
        </div>

        {/* Body + table of contents */}
        <div className="mx-auto max-w-5xl lg:grid lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-12">
          <div className="min-w-0 rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-12">
            <PortableText value={post.body} />
            <ShareButtons title={post.title} slug={post.slug} />
          </div>

          {headings.length >= 2 && (
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <TableOfContents headings={headings} />
              </div>
            </aside>
          )}
        </div>

        {/* Author bio */}
        {post.author && (post.author.bio || post.author.image) && (
          <div className="mt-16 flex max-w-3xl flex-col items-center gap-6 rounded-3xl border border-slate-100 bg-slate-50 p-8 md:flex-row">
            {post.author.image && (
              <Image
                src={urlFor(post.author.image).url()}
                alt={post.author.name}
                width={64}
                height={64}
                className="h-16 w-16 shrink-0 rounded-full border border-slate-200 object-cover shadow-sm"
              />
            )}
            <div className="space-y-2 text-center md:text-left">
              <h4 className="text-lg font-bold text-slate-900">Written by Maction Consulting</h4>
              {post.author.bio && (
                <p className="text-sm leading-relaxed text-slate-600">{post.author.bio}</p>
              )}
            </div>
          </div>
        )}

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-24 border-t border-slate-100 pt-16">
            <h2 className="mb-8 text-2xl font-black text-slate-900">Related Articles</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((related) => {
                const relImg = related.mainImage ? urlFor(related.mainImage).url() : FALLBACK_IMAGE;
                return (
                  <Card
                    key={related.slug}
                    className="group flex h-full flex-col gap-0 overflow-hidden rounded-2xl border border-slate-100 bg-white py-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <Link href={`/blog/${related.slug}`} className="flex h-full flex-col">
                      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                        <Image
                          src={relImg}
                          alt={related.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <CardContent className="flex flex-1 flex-col p-5">
                        <p className="mb-2 text-xs text-slate-400">{formatDate(related.publishedAt)}</p>
                        <h3 className="flex-1 leading-snug font-bold text-slate-900 transition-colors group-hover:text-brand line-clamp-2">
                          {related.title}
                        </h3>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                          Read article
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </CardContent>
                    </Link>
                  </Card>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
