import { Experience, Social, PageInfo, Project, Skills } from "../typings";
import { getGithubContributions } from "github-contributions-counter";

export const fetchGithub = async () => {
  const res = await getGithubContributions({
    username: process.env.NEXT_PUBLIC_GITHUB_USER_ID!,
    token: process.env.NEXT_PUBLIC_GITHUB_TOKEN!, // secret
  });
  const contributionsList =
    res.data.data.user.contributionsCollection.contributionCalendar.weeks;

  return contributionsList;
};

export const fetchGitlab = async () => {
  const oneYear = 60 * 60 * 24 * 1000 * 365;
  const fromDate = new Date(new Date().getTime() - oneYear)
    .toISOString()
    .split("T")[0];

  let result = [];
  let totalPages = 1;

  const initialEvents = await fetch(
    `https://gitlab.com/api/v4/users/${process.env.NEXT_PUBLIC_GITLAB_USER_ID}/events?private_token=${process.env.NEXT_PUBLIC_GITLAB_TOKEN}&per_page=100&after=${fromDate}`
  );
  result = await initialEvents.json();

  const headers = [...initialEvents.headers];
  for (let i = 0; i < headers.length; i++) {
    if (headers[i][0] === "x-total-pages") {
      totalPages = Number(headers[i][1]);
    }
  }
  if (totalPages && totalPages !== 1) {
    for (let i = 2; i < totalPages + 1; i++) {
      const response = await fetch(
        `https://gitlab.com/api/v4/users/${process.env.NEXT_PUBLIC_GITLAB_USER_ID}/events?private_token=${process.env.NEXT_PUBLIC_GITLAB_TOKEN}&per_page=100&after=${fromDate}&page=${i}`
      );
      const events = await response.json();
      result.push(...events);
    }

    return result;
  }
};

export const fetchExperiences = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`
  );
  const data = await res.json();
  const experiences: Experience[] = data.experiences;

  return experiences;
};

export const fetchPageInfo = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
  );
  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  return pageInfo;
};

export const fetchProjects = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
  );
  const data = await res.json();
  const projects: Project[] = data.projects;

  return projects;
};

export const fetchSkills = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);
  const data = await res.json();
  const skills: Skills = data.skills;

  return skills;
};

export const fetchSocials = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
  const data = await res.json();
  const socials: Social[] = data.socials;

  return socials;
};
