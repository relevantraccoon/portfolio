import React from "react";
import styled from "styled-components";
import { Badge } from "@/components/ui-library/Badge/Badge";

type MobileCardProps = {
  title: string;
  status: string;
  description: string;
  projectType: string;
  techStack: string[];
  thumbnail?: string;
  href?: string;
};

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.palette.surface};
  border: 1px solid ${({ theme }) => theme.colors.palette.outline};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
`;

const Image = styled.div<{ $src?: string }>`
  width: 100%;
  height: 140px;
  background: ${({ $src }) => ($src ? `url(${$src})` : "#000")};
  background-size: cover;
  background-position: center;
`;

const Content = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Title = styled.h3`
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
}) => {
  const badges = [projectType, ...techStack];

  return (
    <Wrapper>
      <Image $src={thumbnail} />
      <Content>
        <Title>{title}</Title>
        <Status>{status}</Status>
        <Divider />
        <BadgeRow>
          {badges.map((b, i) => (
            <Badge key={i} size="small" variant="primary">
              {b}
            </Badge>
          ))}
        </BadgeRow>
        <Description>{description}</Description>
      </Content>
    </Wrapper>
  );
};
