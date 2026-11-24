import type { StructureResolver } from "sanity/structure";
import { DocumentTextIcon, CaseIcon, UsersIcon, TagIcon } from "@sanity/icons";

/**
 * Custom Studio sidebar. Surfaces the two content types editors use daily
 * (Blog Posts, Case Studies) at the top — newest first — and tucks the
 * supporting taxonomy (Authors, Categories) below a divider, so the admin
 * portal reads like a simple content dashboard rather than a flat type list.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Blog Posts")
        .icon(DocumentTextIcon)
        .child(
          S.documentTypeList("post")
            .title("Blog Posts")
            .defaultOrdering([{ field: "publishedAt", direction: "desc" }]),
        ),
      S.listItem()
        .title("Case Studies")
        .icon(CaseIcon)
        .child(
          S.documentTypeList("caseStudy")
            .title("Case Studies")
            .defaultOrdering([{ field: "publishedAt", direction: "desc" }]),
        ),
      S.divider(),
      S.listItem()
        .title("Authors")
        .icon(UsersIcon)
        .child(S.documentTypeList("author").title("Authors")),
      S.listItem()
        .title("Categories")
        .icon(TagIcon)
        .child(S.documentTypeList("category").title("Categories")),
    ]);
