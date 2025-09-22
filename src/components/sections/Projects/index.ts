export {
  Projects,
  type ProjectsProps,
} from "@/components/sections/Projects/Projects";

export type ProjectData = {
  id: string;
  title: string;
  logo?: string;
  thumbnail: string;
  description: string;
  moodImage?: string;
  techStack: string[];
  role: string;
  projectType: string;
  backgroundColor?: string;
  href?: string;
};
