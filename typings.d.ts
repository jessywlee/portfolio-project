interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  socialUrl: string;
}
export interface Skill extends SanityBody {
  _type: "skill";
  title: string;
  skillImageUrl: string;
}

export interface Project extends SanityBody {
  _type: "project";
  title: string;
  image: Image;
  linkToBuild1: string;
  linkToBuild2: string;
  summary: string;
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: Date;
  dateEnded: Date;
  isCurrentlyWorkingHere: Boolean;
  jobTitle: string;
  technologies: Skill[];
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  name: string[];
  backgroundInformation: string;
  heroImage: Image;
  profilePic: Image;
  role: string;
  socials: Social[];
}
