import Link from "next/link";
import { notFound } from "next/navigation";
import { getRepo } from "@/lib/repos";

export const dynamic = "force-dynamic";

export default async function RepoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const repo = getRepo(id);

  if (!repo) notFound();

  return (
    <div>
      {/* Repo header */}
      <div className="border-b border-border bg-surface">
        <div className="max-w-[1280px] mx-auto px-4 pt-4">
          <div className="flex items-center gap-2 mb-3">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" className="text-muted">
              <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
            </svg>
            <Link href="/" className="text-accent hover:underline text-sm">user</Link>
            <span className="text-muted">/</span>
            <Link href={`/repo/${repo.id}`} className="text-accent font-semibold hover:underline text-sm">{repo.name}</Link>
            <span className="text-xs border border-border rounded-full px-[7px] py-[1px] text-muted font-medium ml-1">
              {repo.visibility === "public" ? "Public" : "Private"}
            </span>
          </div>

          {/* Tabs */}
          <nav className="flex gap-0 text-sm -mb-px">
            <span className="flex items-center gap-1.5 px-3 py-2 border-b-2 border-nav-active font-semibold text-foreground">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25V5Zm-13 1.5v6.75c0 .138.112.25.25.25H5v-7Z" />
              </svg>
              Code
            </span>
            <span className="flex items-center gap-1.5 px-3 py-2 text-muted hover:text-foreground cursor-pointer">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z" />
              </svg>
              Issues
            </span>
            <span className="flex items-center gap-1.5 px-3 py-2 text-muted hover:text-foreground cursor-pointer">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z" />
              </svg>
              Pull requests
            </span>
            <span className="flex items-center gap-1.5 px-3 py-2 text-muted hover:text-foreground cursor-pointer">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM1.5 6.5v7.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V6.5Zm14-4.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25V5h14Z" />
              </svg>
              Settings
            </span>
          </nav>
        </div>
      </div>

      {/* Repo content */}
      <div className="max-w-[1280px] mx-auto px-4 py-5">
        {/* Branch selector + actions */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 bg-btn-bg border border-btn-border rounded-md px-3 py-[5px] text-sm font-medium text-foreground hover:bg-btn-hover hover:border-[#8b949e]">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" className="text-muted">
                <path d="M9.5 3.25a2.25 2.25 0 1 1-3 2.122V6A2.5 2.5 0 0 0 9 8.5h1.25a3.25 3.25 0 0 1 3.25 3.25v.878a2.251 2.251 0 1 1-1.5 0v-.878a1.75 1.75 0 0 0-1.75-1.75H9A4 4 0 0 1 5 6v-.628A2.25 2.25 0 0 1 9.5 3.25ZM8 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm4.75 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z" />
              </svg>
              main
              <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="text-muted">
                <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z" />
              </svg>
            </button>
            <span className="text-sm text-muted flex items-center gap-1">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                <path d="M9.5 3.25a2.25 2.25 0 1 1-3 2.122V6A2.5 2.5 0 0 0 9 8.5h1.25a3.25 3.25 0 0 1 3.25 3.25v.878a2.251 2.251 0 1 1-1.5 0v-.878a1.75 1.75 0 0 0-1.75-1.75H9A4 4 0 0 1 5 6v-.628A2.25 2.25 0 0 1 9.5 3.25ZM8 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm4.75 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z" />
              </svg>
              1 branch
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 bg-btn-bg border border-btn-border rounded-md px-3 py-[5px] text-sm font-medium text-foreground hover:bg-btn-hover hover:border-[#8b949e]">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
              </svg>
              Star
            </button>
            <button className="flex items-center gap-1 bg-btn-bg border border-btn-border rounded-md px-3 py-[5px] text-sm font-medium text-foreground hover:bg-btn-hover hover:border-[#8b949e]">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.372h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
              </svg>
              Fork
            </button>
          </div>
        </div>

        {/* File tree */}
        <div className="border border-border rounded-md mb-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-surface text-sm border-b border-border rounded-t-md">
            <div className="w-6 h-6 rounded-full bg-[#6e7681] flex items-center justify-center text-white text-[10px]">U</div>
            <span className="font-semibold text-sm text-foreground">user</span>
            <span className="text-muted">Initial commit</span>
            <span className="text-muted ml-auto text-xs">1 commit</span>
          </div>
          <div className="divide-y divide-border">
            <div className="flex items-center gap-3 px-4 py-[6px] text-sm hover:bg-hover-bg cursor-pointer">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" className="text-muted">
                <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z" />
              </svg>
              <span className="text-foreground">README.md</span>
              <span className="text-muted ml-auto text-xs">Initial commit</span>
            </div>
          </div>
        </div>

        {/* README */}
        <div className="border border-border rounded-md">
          <div className="flex items-center gap-2 px-4 py-2 bg-surface text-sm font-semibold border-b border-border rounded-t-md text-foreground">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" className="text-muted">
              <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Z" />
            </svg>
            README.md
          </div>
          <div className="px-8 py-6">
            <h1 className="text-[2em] font-semibold pb-[.3em] border-b border-border mb-4 text-foreground">{repo.name}</h1>
            {repo.description && <p className="text-base text-foreground">{repo.description}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
