"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Search as SearchIcon, Tag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import MotionReveal from "@/components/shared/motion-reveal";
import { Post, urlFor } from "@/lib/sanity/client";

interface BlogListProps {
  posts: Post[];
}

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

function PostMeta({ post }: { post: Post }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-slate-500">
      <span className="inline-flex items-center gap-1.5">
        <Calendar className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
        {formatDate(post.publishedAt)}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <User className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
        Maction Consulting
      </span>
    </div>
  );
}

function CategoryPills({ categories }: { categories?: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories?.slice(0, 2).map((category) => (
        <span
          key={category}
          className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand"
        >
          {category}
        </span>
      ))}
    </div>
  );
}

export default function BlogList({ posts }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const sortedPosts = useMemo(
    () => [...posts].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()),
    [posts]
  );
  const featuredPost = sortedPosts[0];
  const categories = ["All", ...Array.from(new Set(sortedPosts.flatMap((post) => post.categories || [])))];
  const query = searchQuery.trim().toLowerCase();
  const filteredPosts = sortedPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.categories?.includes(selectedCategory);
    const matchesSearch =
      !query || post.title.toLowerCase().includes(query) || post.excerpt.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });
  const gridPosts = filteredPosts.filter((post) => post.slug !== featuredPost?.slug);
  const totalPages = Math.ceil(gridPosts.length / postsPerPage);
  const paginatedPosts = gridPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  const resetFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
    setCurrentPage(1);
  };

  return (
    <div className="mt-14 space-y-16 sm:mt-16">
      {featuredPost && selectedCategory === "All" && !query && (
        <MotionReveal y={28}>
          <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="relative block min-h-72 overflow-hidden bg-slate-100 lg:min-h-[390px]"
              >
                <Image
                  src={featuredPost.mainImage ? urlFor(featuredPost.mainImage).url() : FALLBACK_IMAGE}
                  alt={featuredPost.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-brand shadow-sm">
                  Latest insight
                </span>
              </Link>
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <CategoryPills categories={featuredPost.categories} />
                <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
                  {featuredPost.title}
                </h2>
                <p className="mt-5 line-clamp-4 text-base leading-7 text-slate-600">{featuredPost.excerpt}</p>
                <div className="mt-7">
                  <PostMeta post={featuredPost} />
                </div>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  Read featured article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>
        </MotionReveal>
      )}

      <section aria-label="Find articles" className="space-y-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Explore the library</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">Latest insights</h2>
          </div>
          <label className="relative block w-full lg:max-w-sm">
            <span className="sr-only">Search articles</span>
            <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            <input
              type="search"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(event) => {
                setSearchQuery(event.target.value);
                setCurrentPage(1);
              }}
              className="h-11 w-full rounded-full border border-slate-200 bg-white pl-11 pr-5 text-sm text-slate-800 shadow-sm outline-none transition focus:border-brand focus:ring-4 focus:ring-blue-100"
            />
          </label>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Filter by category">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1);
              }}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                selectedCategory === category
                  ? "border-brand bg-brand text-white shadow-sm"
                  : "border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-blue-50 hover:text-brand"
              }`}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {paginatedPosts.length > 0 ? (
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {paginatedPosts.map((post, index) => (
            <MotionReveal key={post.slug} delay={Math.min(index * 0.06, 0.3)} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg">
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative block aspect-[16/10] overflow-hidden bg-slate-100"
                  aria-label={`Read ${post.title}`}
                >
                  <Image
                    src={post.mainImage ? urlFor(post.mainImage).url() : FALLBACK_IMAGE}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-7">
                  <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-brand">
                    <span className="rounded-md bg-blue-50 p-1.5">
                      <Tag className="h-4 w-4" aria-hidden="true" />
                    </span>
                    Blog
                  </p>
                  <h3 className="mt-4 line-clamp-2 text-2xl font-bold leading-tight text-brand transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <div className="mt-5">
                    <PostMeta post={post} />
                  </div>
                  <p className="mt-5 line-clamp-3 flex-1 text-base leading-7 text-slate-600">{post.excerpt}</p>
                  {post.tags && post.tags.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 rounded-xl border border-slate-100 bg-slate-50 px-3 py-1.5 text-sm text-slate-600"
                        >
                          <Tag className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="mt-7 border-t border-slate-100 pt-5">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-3 text-lg font-bold text-brand transition-colors hover:text-blue-700"
                    >
                      Read Article
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
          <h3 className="text-lg font-bold text-slate-900">No articles found</h3>
          <p className="mt-2 text-sm text-slate-500">Try another search term or category.</p>
          <Button variant="outline" className="mt-5 rounded-full" onClick={resetFilters}>
            Clear filters
          </Button>
        </div>
      )}

      {totalPages > 1 && (
        <nav className="flex items-center justify-center gap-4" aria-label="Blog pagination">
          <Button
            variant="outline"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
            className="rounded-full"
          >
            Previous
          </Button>
          <span className="text-sm font-semibold text-slate-600">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((page) => Math.min(page + 1, totalPages))}
            className="rounded-full"
          >
            Next
          </Button>
        </nav>
      )}
    </div>
  );
}
