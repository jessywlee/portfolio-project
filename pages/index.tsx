import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import { PageInfo, Experience, Skill, Social, Project } from "../typings";
import { GetStaticProps } from "next";
import {
  fetchPageInfo,
  fetchExperiences,
  fetchProjects,
  fetchSkills,
  fetchSocials,
} from "../utils/Util";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  socials: Social[];
  projects: Project[];
};

export default function Home({
  pageInfo,
  experiences,
  skills,
  socials,
  projects,
}: Props) {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen 
		snap-y snap-mandatory z-0 scrollbar overflow-x-hidden
		scrollbar-track-gray-400/20 scrollbar-thumb-[#e05abd]/40"
    >
      <Head>
        <title>Jessica's Portfolio</title>
      </Head>
      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const projects: Project[] = await fetchProjects();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      projects,
      skills,
      socials,
    },
    revalidate: 30,
  };
};
