import { EyeOpenIcon } from "@sanity/icons";
import type { DocumentActionComponent, SlugValue } from "sanity";

/** Map each previewable document type to its front-end route segment. */
const PREVIEW_PATHS: Record<string, string> = {
  post: "blog",
  caseStudy: "case-studies",
};

/**
 * Adds an "Open preview" button to the editor action menu for posts and case
 * studies, opening the live page in a new tab so editors can check formatting
 * before (or after) publishing — no need to hand-type URLs. Returns null for
 * other document types so Studio omits the action there.
 */
export const previewAction: DocumentActionComponent = (props) => {
  const base = PREVIEW_PATHS[props.type];
  if (!base) return null;

  const doc = props.draft ?? props.published;
  const slug = (doc?.slug as SlugValue | undefined)?.current;

  return {
    label: "Open preview",
    icon: EyeOpenIcon,
    disabled: !slug,
    title: slug ? "Open this page in a new tab" : "Add a slug first",
    onHandle: () => {
      if (slug) window.open(`/${base}/${slug}`, "_blank", "noopener,noreferrer");
      props.onComplete();
    },
  };
};
