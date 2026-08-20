export interface Repo {
  id: string;
  name: string;
  description: string;
  visibility: "public" | "private";
  createdAt: string;
}

const repos: Repo[] = [];

export function getRepos(): Repo[] {
  return repos;
}

export function getRepo(id: string): Repo | undefined {
  return repos.find((r) => r.id === id);
}

export function createRepo(data: { name: string; description: string; visibility: "public" | "private" }): Repo {
  const repo: Repo = {
    id: crypto.randomUUID(),
    name: data.name,
    description: data.description,
    visibility: data.visibility,
    createdAt: new Date().toISOString(),
  };
  repos.push(repo);
  return repo;
}
