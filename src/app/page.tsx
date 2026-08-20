import Link from "next/link";
import { getRepos } from "@/lib/repos";

export const dynamic = "force-dynamic";

export default function Home() {
  const repos = getRepos();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Repositories</h1>
        <Link
          href="/new"
          className="bg-accent text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90"
        >
          New repository
        </Link>
      </div>

      {repos.length === 0 ? (
        <div className="text-center py-16 text-muted">
          <p className="text-lg mb-2">No repositories yet</p>
          <p className="text-sm">Create your first repository to get started.</p>
        </div>
      ) : (
        <ul className="divide-y divide-border border border-border rounded-md">
          {repos.map((repo) => (
            <li key={repo.id} className="p-4 hover:bg-surface">
              <div className="flex items-center gap-2 mb-1">
                <Link href={`/repo/${repo.id}`} className="text-accent font-semibold hover:underline">
                  {repo.name}
                </Link>
                <span className="text-xs border border-border rounded-full px-2 py-0.5 text-muted">
                  {repo.visibility}
                </span>
              </div>
              {repo.description && (
                <p className="text-sm text-muted">{repo.description}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
