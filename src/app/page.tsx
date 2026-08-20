import Link from "next/link";
import { getRepos } from "@/lib/repos";

export const dynamic = "force-dynamic";

export default function Home() {
  const repos = getRepos();

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-6 flex gap-8">
      {/* Sidebar */}
      <aside className="w-[296px] shrink-0">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-[#6e7681] flex items-center justify-center text-white text-lg font-medium">
            U
          </div>
          <div>
            <p className="font-semibold text-foreground">user</p>
            <p className="text-sm text-muted">user</p>
          </div>
        </div>
        <p className="text-sm text-muted mb-4">Welcome to CodeHub</p>
        <Link
          href="/new"
          className="block w-full text-center bg-btn-bg border border-btn-border rounded-md px-3 py-1 text-sm font-medium text-foreground hover:bg-btn-hover hover:border-[#8b949e]"
        >
          New repository
        </Link>
      </aside>

      {/* Main content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Find a repository..."
              className="border border-border bg-input-bg rounded-md px-3 py-[5px] text-sm w-[272px] text-foreground placeholder-muted focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
            />
          </div>
          <Link
            href="/new"
            className="bg-success-bg text-white px-3 py-[5px] rounded-md text-sm font-medium hover:bg-success-hover flex items-center gap-1"
          >
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
              <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
            </svg>
            New
          </Link>
        </div>

        {repos.length === 0 ? (
          <div className="text-center py-12 text-muted">
            <svg viewBox="0 0 16 16" width="24" height="24" fill="currentColor" className="mx-auto mb-3">
              <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
            </svg>
            <p className="text-base mb-1">No repositories yet</p>
            <p className="text-sm">Create your first repository to get started.</p>
          </div>
        ) : (
          <ul>
            {repos.map((repo) => (
              <li key={repo.id} className="py-6 border-b border-border">
                <div className="flex items-start justify-between">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Link href={`/repo/${repo.id}`} className="text-accent font-semibold text-xl hover:underline">
                        {repo.name}
                      </Link>
                      <span className="text-xs border border-border rounded-full px-[7px] py-[1px] text-muted font-medium">
                        {repo.visibility === "public" ? "Public" : "Private"}
                      </span>
                    </div>
                    {repo.description && (
                      <p className="text-sm text-muted mt-1 mb-2">{repo.description}</p>
                    )}
                    <div className="flex items-center gap-4 text-xs text-muted mt-2">
                      <span className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-full bg-[#3178c6] inline-block"></span>
                        TypeScript
                      </span>
                      <span className="flex items-center gap-1">
                        <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                          <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
                        </svg>
                        0
                      </span>
                    </div>
                  </div>
                  <div className="shrink-0 ml-4">
                    <button className="flex items-center gap-1 bg-btn-bg border border-btn-border rounded-md px-3 py-[3px] text-xs font-medium text-foreground hover:bg-btn-hover hover:border-[#8b949e]">
                      <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                        <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
                      </svg>
                      Star
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
