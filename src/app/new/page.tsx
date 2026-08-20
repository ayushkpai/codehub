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
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-2">Create a new repository</h1>
      <p className="text-sm text-muted mb-6">
        A repository contains all project files, including the revision history.
      </p>

      <form action={handleCreate} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Repository name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="my-awesome-project"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-1">
            Description <span className="text-muted">(optional)</span>
          </label>
          <input
            id="description"
            name="description"
            type="text"
            className="w-full border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <fieldset className="space-y-2">
          <legend className="text-sm font-medium mb-1">Visibility</legend>
          <label className="flex items-center gap-2 text-sm">
            <input type="radio" name="visibility" value="public" defaultChecked />
            Public
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="radio" name="visibility" value="private" />
            Private
          </label>
        </fieldset>

        <hr className="border-border" />

        <button
          type="submit"
          className="bg-accent text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90"
        >
          Create repository
        </button>
      </form>
    </div>
  );
}
