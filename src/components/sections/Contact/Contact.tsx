import React, { useState } from "react";
import {
  ContactWrapper,
  ContactContainer,
  ContactGrid,
  ContactContent,
  ContactTitle,
  ContactTextContainer,
  ContactButtonContainer,
  ContactInfo,
  ContactLinks,
  VideoPlaceholder,
  ContactTitleTypography,
  ContactEmailWrapper,
  ContactEmailLink,
  ContactCopyIcon,
  ContactVideo,
} from "@/components/sections/Contact/styles";
import { Content } from "@/components/layout/Content";
import { Typography } from "@/components/ui-library/Typography";
import { Button } from "@/components/ui-library/Button";
import { Link } from "@/components/ui-library/Link";
import {
  FaLinkedin,
  FaGithub,
  FaFilePdf,
  FaCopy,
  FaCheck,
} from "react-icons/fa";
import { SiStrava } from "react-icons/si";

type ContactProps = {
  email?: string;
  phone?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  stravaUrl?: string;
  cvUrl?: string;
  shouldShowCVButton?: boolean;
};

export const Contact: React.FC<ContactProps> = ({
  email = "hello@joakimkarlsson.com",
  linkedinUrl = "https://linkedin.com/in/yourprofile",
  githubUrl = "https://github.com/yourusername",
  stravaUrl = "https://strava.com/athletes/yourprofile",
  cvUrl = "/cv/placeholder.pdf",
  shouldShowCVButton = false,
}) => {
  const [copied, setCopied] = useState(false);


  const handleCVDownload = () => {
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Joakim_Karlsson_CV.pdf";
    link.click();
  };

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ContactWrapper>
      <Content type="grid">
        <ContactContainer>
          <ContactGrid>
            <VideoPlaceholder>
              <ContactVideo autoPlay muted loop>
                <source
                  src="/finalvideo/bounce_loop_premult_alpha.webm"
                  type="video/webm"
                />
                Your browser does not support the video tag.
              </ContactVideo>
            </VideoPlaceholder>

            <ContactContent>
              <ContactTitle>
                <ContactTitleTypography>
                  Building something cool?{" "}
                </ContactTitleTypography>
              </ContactTitle>

              <ContactTextContainer>
                <ContactInfo>
                  <Typography variant="body" color="secondary">
                    Drop me an email at
                    <ContactEmailWrapper>
                      <Link href={`mailto:${email}`} variant="default">
                        <ContactEmailLink>
                          {email}
                          <ContactCopyIcon
                            as={copied ? FaCheck : FaCopy}
                            onClick={handleCopyEmail}
                          />
                        </ContactEmailLink>
                      </Link>
                    </ContactEmailWrapper>
                  </Typography>
                  <Typography variant="body" color="secondary">
                    ...or reach out on social media{" "}
                  </Typography>

                  <ContactLinks>
                    <Link href={githubUrl} variant="default" external>
                      <Button
                        variant="secondary"
                        shape="round"
                      >
                        <FaGithub />
                      </Button>
                    </Link>
                    <Link href={linkedinUrl} variant="default" external>
                      <Button
                        variant="secondary"
                        shape="round"
                      >
                        <FaLinkedin />
                      </Button>
                    </Link>
                    <Link href={stravaUrl} variant="default" external>
                      <Button
                        variant="secondary"
                        shape="round"
                      >
                        <SiStrava />
                      </Button>
                    </Link>
                  </ContactLinks>
                </ContactInfo>
              </ContactTextContainer>

              {shouldShowCVButton && (
                <ContactButtonContainer>
                  <Button variant="outlinePrimary" onClick={handleCVDownload}>
                    Download my CV
                    <FaFilePdf />
                  </Button>
                </ContactButtonContainer>
              )}
            </ContactContent>
          </ContactGrid>
        </ContactContainer>
      </Content>
    </ContactWrapper>
  );
};
