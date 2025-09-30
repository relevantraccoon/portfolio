import { FaLinkedin, FaGithub, FaFilePdf, FaCopy } from "react-icons/fa";

import { SiStrava, SiTypescript, SiJavascript, SiCss3, SiHtml5, SiStyledcomponents, SiGraphql, SiGit, SiFigma, SiReact, SiStorybook } from "react-icons/si";

import { TbArrowBigLeftFilled, TbArrowBigRightFilled } from "react-icons/tb";

export type IconName =
  | "FaLinkedin"
  | "FaGithub"
  | "FaFilePdf"
  | "FaCopy"
  | "SiStrava"
  | "SiTypescript"
  | "SiJavascript"
  | "SiCss3"
  | "SiHtml5"
  | "SiStyledcomponents"
  | "SiGraphql"
  | "SiGit"
  | "SiFigma"
  | "SiReact"
  | "SiStorybook"
  | "TbArrowBigLeftFilled"
  | "TbArrowBigRightFilled";

export const iconRegistry = {
  FaLinkedin,
  FaGithub,
  FaFilePdf,
  FaCopy,
  SiStrava,
  SiTypescript,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiStyledcomponents,
  SiGraphql,
  SiGit,
  SiFigma,
  SiReact,
  SiStorybook,
  TbArrowBigLeftFilled,
  TbArrowBigRightFilled,
} as const;
