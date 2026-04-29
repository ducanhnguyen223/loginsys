import { Octokit } from "octokit";

export async function syncGitHubProfile(
  accessToken: string,
  username: string
) {
  const octokit = new Octokit({ auth: accessToken });

  const [user, repos] = await Promise.all([
    octokit.rest.users.getByUsername({ username }),
    octokit.rest.repos.listForUser({
      username,
      sort: "updated",
      per_page: 20,
    }),
  ]);

  const languages = new Set<string>();
  repos.data.forEach((repo) => {
    if (repo.language) languages.add(repo.language);
  });

  return {
    username,
    avatar: user.data.avatar_url,
    bio: user.data.bio,
    repos: repos.data.map((r) => ({
      name: r.name,
      description: r.description,
      stars: r.stargazers_count,
      language: r.language,
      url: r.html_url,
    })),
    contributionsCount: user.data.public_repos,
    languages: Array.from(languages),
    lastSyncedAt: new Date(),
  };
}
