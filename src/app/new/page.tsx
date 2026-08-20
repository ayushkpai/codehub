import { redirect } from "next/navigation";
import { createRepo } from "@/lib/repos";

export default function NewRepo() {
  async function handleCreate(formData: FormData) {
    "use server";
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const visibility = formData.get("visibility") as "public" | "private";

    if (!name.trim()) return;

    createRepo({ name: name.trim(), description: description?.trim() || "", visibility: visibility || "public" });
    redirect("/");
  }

  return (
    <div className="max-w-[768px] mx-auto px-4 py-8">
      <h1 className="text-2xl font-normal mb-1 text-foreground">Create a new repository</h1>
      <p className="text-sm text-muted mb-6">
        A repository contains all project files, including the revision history.
      </p>

      <hr className="border-border mb-6" />

      <form action={handleCreate}>
        <div className="mb-4">
          <label htmlFor="owner" className="block text-sm font-medium mb-2 text-foreground">Owner <span className="text-red-500">*</span></label>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 bg-btn-bg border border-btn-border rounded-md px-3 py-[5px] text-sm text-foreground">
              <div className="w-5 h-5 rounded-full bg-[#6e7681] flex items-center justify-center text-white text-[10px]">U</div>
              user
              <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="text-muted">
                <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z" />
              </svg>
            </div>
            <span className="text-lg text-muted">/</span>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="flex-1 bg-input-bg border border-border rounded-md px-3 py-[5px] text-sm text-foreground placeholder-muted focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
              placeholder="repository-name"
            />
          </div>
          <p className="text-xs text-muted mt-2">
            Great repository names are short and memorable.
          </p>
        </div>

        <div className="mb-6">
          <label htmlFor="description" className="block text-sm font-medium mb-2 text-foreground">
            Description <span className="text-muted font-normal">(optional)</span>
          </label>
          <input
            id="description"
            name="description"
            type="text"
            className="w-full bg-input-bg border border-border rounded-md px-3 py-[5px] text-sm text-foreground placeholder-muted focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
          />
        </div>

        <hr className="border-border mb-6" />

        <fieldset className="mb-6 space-y-3">
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="radio" name="visibility" value="public" defaultChecked className="mt-1 accent-success" />
            <div className="flex items-start gap-2">
              <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor" className="text-muted mt-0.5">
                <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
              </svg>
              <div>
                <p className="font-medium text-sm text-foreground">Public</p>
                <p className="text-xs text-muted">Anyone on the internet can see this repository.</p>
              </div>
            </div>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input type="radio" name="visibility" value="private" className="mt-1 accent-success" />
            <div className="flex items-start gap-2">
              <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor" className="text-muted mt-0.5">
                <path d="M4 4a4 4 0 0 1 8 0v2h.25c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 12.25 15h-8.5A1.75 1.75 0 0 1 2 13.25v-5.5C2 6.784 2.784 6 3.75 6H4Zm8.25 3.5h-8.5a.25.25 0 0 0-.25.25v5.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25ZM10.5 6V4a2.5 2.5 0 1 0-5 0v2Z" />
              </svg>
              <div>
                <p className="font-medium text-sm text-foreground">Private</p>
                <p className="text-xs text-muted">You choose who can see and commit to this repository.</p>
              </div>
            </div>
          </label>
        </fieldset>

        <hr className="border-border mb-6" />

        <button
          type="submit"
          className="bg-success-bg text-white px-4 py-[5px] rounded-md text-sm font-medium hover:bg-success-hover"
        >
          Create repository
        </button>
      </form>
    </div>
  );
}
