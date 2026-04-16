import React from "react";
import styled from "styled-components";
import { Badge } from "@/components/ui-library/Badge/Badge";
import { Icon } from "@/components/ui-library/Icon/Icon";

type MobileCardProps = {
  title: string;
  status: string;
  description: string;
  projectType: string;
  techStack: string[];
  thumbnail?: string;
  thumbnailWide?: string;
  href?: string;
};

const WIDE_TOUCH =
  "@media (hover: none) and (pointer: coarse) and (min-width: 600px)";

const Wrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.palette.surface};
  border: 1px solid ${({ theme }) => theme.colors.palette.outline};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  width: 100%;
  max-width: 320px;
  margin: 0 auto;

  ${WIDE_TOUCH} {
    max-width: 720px;
    max-height: calc(100svh - 60px);
  }
`;

const Portrait = styled.div`
  display: block;

  ${WIDE_TOUCH} {
    display: none;
  }
`;

const Landscape = styled.div`
  display: none;

  ${WIDE_TOUCH} {
    display: flex;
    align-items: stretch;
  }
`;

const PortraitImage = styled.div<{ $src?: string }>`
  width: 100%;
  height: 140px;
  background: ${({ $src }) => ($src ? `url(${$src})` : "#000")};
  background-size: cover;
  background-position: center;
`;

const PortraitContent = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const PortraitTitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const LeftColumn = styled.div`
  flex: 0 0 35%;
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

const LandscapeImage = styled.div<{ $src?: string }>`
  width: 100%;
  flex: 1;
  min-height: 120px;
  background: ${({ $src }) => ($src ? `url(${$src})` : "#000")};
  background-size: cover;
  background-position: center;
`;

const LandscapeTitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const RightColumn = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  min-width: 0;
`;

const TitleLink = styled.a`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.palette.onSurface};
  text-decoration: none;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
  }
`;

const TitlePlain = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.palette.onSurface};
`;

const Status = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.palette.onSurfaceSubdued};
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.palette.outlineVariant};
  margin: ${({ theme }) => theme.spacing.xs} 0;
`;

const Description = styled.p`
  margin: 0;
  margin-top: ${({ theme }) => theme.spacing.xs};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.palette.onSurface};
  opacity: 0.9;
  line-height: ${({ theme }) => theme.lineHeight.normal};
`;

const IconWrap = styled.div`
  color: ${({ theme }) => theme.colors.palette.onSurfaceSubdued};
  flex-shrink: 0;
`;

const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const MobileCard: React.FC<MobileCardProps> = ({
  title,
  status,
  description,
  projectType,
  techStack,
  thumbnail,
  thumbnailWide,
  href,
}) => {
  const badges = [projectType, ...techStack];

  const titleNode = href ? (
    <TitleLink href={href} target="_blank" rel="noopener noreferrer">
      {title}
    </TitleLink>
  ) : (
    <TitlePlain>{title}</TitlePlain>
  );

  const iconNode = href ? (
    <IconWrap>
      <Icon name="TbExternalLink" variant="iconLarge" />
    </IconWrap>
  ) : null;

  const badgeRow = (
    <BadgeRow>
      {badges.map((b, i) => (
        <Badge key={i} size="small" variant="primary">
          {b}
        </Badge>
      ))}
    </BadgeRow>
  );

  return (
    <Wrapper>
      <Portrait>
        <PortraitImage $src={thumbnail} />
        <PortraitContent>
          <PortraitTitleRow>
            {titleNode}
            {iconNode}
          </PortraitTitleRow>
          <Status>{status}</Status>
          <Divider />
          {badgeRow}
          <Description>{description}</Description>
        </PortraitContent>
      </Portrait>

      <Landscape>
        <LeftColumn>
          <LandscapeImage $src={thumbnailWide ?? thumbnail} />
        </LeftColumn>
        <RightColumn>
          <LandscapeTitleRow>
            {titleNode}
            {iconNode}
          </LandscapeTitleRow>
          <Status>{status}</Status>
          <Divider />
          {badgeRow}
          <Description>{description}</Description>
        </RightColumn>
      </Landscape>
    </Wrapper>
  );
};
