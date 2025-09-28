import { FaLinkedin, FaGithub, FaFilePdf, FaCopy } from "react-icons/fa";

import { SiStrava } from "react-icons/si";

import { TbArrowBigLeftFilled, TbArrowBigRightFilled } from "react-icons/tb";

export type IconName =
  | "FaLinkedin"
  | "FaGithub"
  | "FaFilePdf"
  | "FaCopy"
  | "SiStrava"
  | "TbArrowBigLeftFilled"
  | "TbArrowBigRightFilled";

export const iconRegistry = {
  FaLinkedin,
  FaGithub,
  FaFilePdf,
  FaCopy,
  SiStrava,
  TbArrowBigLeftFilled,
  TbArrowBigRightFilled,
} as const;
