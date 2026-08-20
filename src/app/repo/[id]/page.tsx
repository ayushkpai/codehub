import { notFound } from "next/navigation";
import { getRepo } from "@/lib/repos";

export const dynamic = "force-dynamic";

export default async function RepoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const repo = getRepo(id);

  if (!repo) notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-1">
        <h1 className="text-xl font-semibold text-accent">{repo.name}</h1>
        <span className="text-xs border border-border rounded-full px-2 py-0.5 text-muted">
          {repo.visibility}
        </span>
      </div>
      {repo.description && (
        <p className="text-sm text-muted mb-6">{repo.description}</p>
      )}

      <div className="border border-border rounded-md">
        <div className="flex items-center gap-2 px-4 py-3 bg-surface text-sm border-b border-border rounded-t-md">
          <span className="font-semibold">main</span>
          <span className="text-muted ml-auto">1 file</span>
        </div>
        <div className="divide-y divide-border">
          <div className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-surface">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" className="text-muted">
              <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z" />
            </svg>
            <span>README.md</span>
            <span className="text-muted ml-auto">Initial commit</span>
          </div>
        </div>
      </div>

      <div className="border border-border rounded-md mt-4">
        <div className="px-4 py-3 bg-surface text-sm font-semibold border-b border-border rounded-t-md">
          README.md
        </div>
        <div className="px-6 py-4 prose prose-sm max-w-none">
          <h1>{repo.name}</h1>
          {repo.description && <p>{repo.description}</p>}
        </div>
      </div>

      <p className="text-xs text-muted mt-4">
        Created {new Date(repo.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
}
