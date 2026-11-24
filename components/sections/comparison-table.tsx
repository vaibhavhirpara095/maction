import { Check, X } from "lucide-react";

export interface ComparisonRow {
  traditional: string;
  maction: string;
}

interface ComparisonTableProps {
  rows: ComparisonRow[];
  leftLabel?: string;
  rightLabel?: string;
}

/**
 * Two-column "traditional approach vs Maction" comparison. Left column muted,
 * right column emphasised. Stacks to readable pairs on mobile.
 */
export default function ComparisonTable({
  rows,
  leftLabel = "Traditional Approach",
  rightLabel = "Maction Consulting",
}: ComparisonTableProps) {
  return (
    <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
      {/* Header */}
      <div className="grid grid-cols-1 border-b border-slate-100 md:grid-cols-2">
        <div className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-slate-400 md:px-8">
          {leftLabel}
        </div>
        <div className="border-t border-slate-100 bg-blue-50/40 px-6 py-5 text-xs font-bold uppercase tracking-widest text-brand md:border-t-0 md:border-l md:px-8">
          {rightLabel}
        </div>
      </div>

      {/* Rows */}
      {rows.map((row, i) => (
        <div
          key={i}
          className="grid grid-cols-1 border-b border-slate-100 last:border-b-0 md:grid-cols-2"
        >
          <div className="flex items-start gap-3 px-6 py-5 text-slate-500 md:px-8">
            <X className="mt-0.5 h-4 w-4 shrink-0 text-slate-300" />
            <span>{row.traditional}</span>
          </div>
          <div className="flex items-start gap-3 border-t border-slate-100 bg-blue-50/20 px-6 py-5 font-semibold text-slate-900 md:border-t-0 md:border-l md:px-8">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
            <span>{row.maction}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
