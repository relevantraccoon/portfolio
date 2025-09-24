import React from "react";
import styled from "styled-components";
import { mediaQuery } from "@/styles/theme/mediaQueries";

export type CardVariant = 'mobile' | 'mobileWide' | 'tablet' | 'desktop' | 'responsive';

export type CardProps = {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  badges?: string[];
  hoverable?: boolean;
  maxWidth?: string;
  className?: string;
  backgroundImage?: string;
  backgroundBlendMode?: 'multiply' | 'overlay' | 'soft-light' | 'hard-light' | 'normal';
  variant?: CardVariant;
  href?: string;
  onClick?: () => void;
};

const getCardDimensions = (variant: CardVariant) => {
  switch (variant) {
    case 'mobile':
      return {
        width: '320px',
        height: '280px', // Even taller for better text space
        padding: '0.75rem',
        fontSize: '0.8rem',
        titleSize: '1.1rem',
        subtitleSize: '0.9rem',
        imageHeight: '140px' // 16:9 portion in the middle
      };
    case 'mobileWide':
      return {
        width: '400px',
        height: '280px', // Taller for better text space
        padding: '1.25rem',
        fontSize: '0.925rem',
        titleSize: '1.375rem',
        subtitleSize: '1.1rem',
        imageHeight: '180px' // 16:9 portion
      };
    case 'tablet':
      return {
        width: '480px',
        height: '270px', // 16:9 aspect ratio
        padding: '1.5rem',
        fontSize: '1rem',
        titleSize: '1.5rem',
        subtitleSize: '1.2rem',
        imageHeight: '270px' // Full height on tablet+
      };
    case 'desktop':
      return {
        width: '560px',
        height: '315px', // 16:9 aspect ratio (widescreen monitor feel)
        padding: '2rem',
        fontSize: '1rem',
        titleSize: '2rem',
        subtitleSize: '1.2rem',
        imageHeight: '315px' // Full height on desktop
      };
    case 'responsive':
    default:
      return {
        width: '100%',
        height: '100%',
        padding: '2rem',
        fontSize: '1rem',
        titleSize: '2rem',
        subtitleSize: '1.2rem',
        imageHeight: '100%'
      };
  }
};

const StyledCard = styled.div<{ 
  $hoverable: boolean; 
  $maxWidth?: string; 
  $backgroundImage?: string;
  $backgroundBlendMode?: string;
  $variant: CardVariant;
}>`
  background: ${({ theme }) => theme.colors.palette.surface};
  border: 2px solid ${({ theme }) => theme.colors.palette.outline};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.card.default};
  cursor: ${({ $hoverable }) => ($hoverable ? "pointer" : "default")};
  transition: ${({ theme }) => theme.transitions.transform}, ${({ theme }) => theme.transitions.boxShadow};
  position: relative;
  overflow: hidden;
  margin: 0 auto;

  ${({ $variant }) => {
    const dimensions = getCardDimensions($variant);
    
    if ($variant === 'responsive') {
      return `
        width: 100%;
        height: 280px;
        max-width: 320px;
        padding: 0.75rem;
        
        ${mediaQuery.from("mobileWide")} {
          height: 280px;
          max-width: 400px;
          padding: 1.25rem;
        }
        
        ${mediaQuery.from("tablet")} {
          height: 270px;
          max-width: 480px;
          padding: 1.5rem;
        }
        
        ${mediaQuery.from("desktop")} {
          height: 315px;
          max-width: 560px;
          padding: 2rem;
        }
      `;
    }
    
    return `
      width: ${dimensions.width};
      height: ${dimensions.height};
      padding: ${dimensions.padding};
      flex-shrink: 0;
    `;
  }}

  ${({ $backgroundImage, $variant, theme }) => $backgroundImage && `
    background: #000;
    
    &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      background: url(${$backgroundImage});
      background-position: center;
      background-repeat: no-repeat;
      z-index: 0;
      
      ${(() => {
        
        if ($variant === 'mobile' || $variant === 'mobileWide') {
          return `
            top: 0;
            bottom: 0;
            background-size: contain;
          `;
        }
        
        if ($variant === 'responsive') {
          return `
            top: 0;
            bottom: 0;
            background-size: contain;
            
            ${mediaQuery.from("tablet")} {
              background-size: cover;
            }
            
            ${mediaQuery.from("desktop")} {
              background-size: cover;
            }
          `;
        }
        
        return `
          top: 0;
          bottom: 0;
          background-size: cover;
        `;
      })()}
    }
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      bottom: 0;
      background: ${theme.colors.palette.surface};
      border-right: 15px solid rgba(217, 176, 167, 0.2);
      z-index: 1;
      transition: ${theme.transitions.width};
    }
  `}

  ${({ $hoverable }) =>
    $hoverable &&
    `
    &:hover {
      transform: scale(1.02);
      
      &::after {
        width: 100%;
      }
    }
  `}
`;

const CardTitle = styled.h2<{ $variant: CardVariant }>`
  color: ${({ theme }) => theme.colors.palette.onSurface};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  transition: ${({ theme }) => theme.transitions.opacity};
  
  ${({ $variant }) => {
    const dimensions = getCardDimensions($variant);
    
    if ($variant === 'mobile') {
      return `
        margin: 0;
        font-size: ${dimensions.titleSize};
      `;
    }
    
    if ($variant === 'responsive') {
      return `
        margin: 0;
        font-size: 1.1rem;
        
        ${mediaQuery.from("mobileWide")} {
          font-size: 1.375rem;
        }
        
        ${mediaQuery.from("tablet")} {
          font-size: 1.5rem;
        }
        
        ${mediaQuery.from("desktop")} {
          font-size: 2rem;
        }
      `;
    }
    
    return `
      margin: 0;
      font-size: ${dimensions.titleSize};
    `;
  }}
`;

const CardSubtitle = styled.h3<{ $variant: CardVariant }>`
  color: ${({ theme }) => theme.colors.palette.onSurfaceSubdued};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  transition: ${({ theme }) => theme.transitions.opacity};
  
  ${({ $variant }) => {
    const dimensions = getCardDimensions($variant);
    
    if ($variant === 'mobile') {
      return `
        margin: 0;
        font-size: ${dimensions.subtitleSize};
      `;
    }
    
    if ($variant === 'responsive') {
      return `
        margin: 0;
        font-size: 0.9rem;
        
        ${mediaQuery.from("mobileWide")} {
          font-size: 1.1rem;
        }
        
        ${mediaQuery.from("tablet")} {
          font-size: 1.2rem;
        }
        
        ${mediaQuery.from("desktop")} {
          font-size: 1.2rem;
        }
      `;
    }
    
    return `
      margin: 0;
      font-size: ${dimensions.subtitleSize};
    `;
  }}
`;

const BadgeContainer = styled.div<{ $variant: CardVariant }>`
  display: flex;
  flex-wrap: wrap;
  transition: ${({ theme }) => theme.transitions.opacity};
  
  ${({ $variant, theme }) => {
    if ($variant === 'mobile') {
      return `
        gap: ${theme.spacing.xs};
      `;
    }
    if ($variant === 'responsive') {
      return `
        gap: ${theme.spacing.xs};
        
        ${mediaQuery.from("mobileWide")} {
          gap: ${theme.spacing.sm};
        }
        
        ${mediaQuery.from("tablet")} {
          gap: ${theme.spacing.sm};
        }
      `;
    }
    return `gap: ${theme.spacing.sm};`;
  }}
`;

const Badge = styled.span<{ $variant: CardVariant }>`
  background: ${({ theme }) => theme.colors.palette.primary};
  color: ${({ theme }) => theme.colors.palette.onPrimary};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  
  ${({ $variant }) => {
    if ($variant === 'responsive') {
      return `
        padding: 0.2rem 0.6rem;
        font-size: 0.75rem;
        
        ${mediaQuery.from("mobileWide")} {
          padding: 0.225rem 0.675rem;
          font-size: 0.8rem;
        }
        
        ${mediaQuery.from("tablet")} {
          padding: 0.25rem 0.75rem;
          font-size: 0.875rem;
        }
        
        ${mediaQuery.from("desktop")} {
          padding: 0.25rem 0.75rem;
          font-size: 0.875rem;
        }
      `;
    }
    
    if ($variant === 'mobile') {
      return `
        padding: 0.2rem 0.6rem;
        font-size: 0.75rem;
      `;
    }
    
    return `
      padding: 0.25rem 0.75rem;
      font-size: 0.875rem;
    `;
  }}
`;

const CardContent = styled.div<{ $variant: CardVariant }>`
  color: ${({ theme }) => theme.colors.palette.onSurface};
  opacity: 0.9;
  position: relative;
  z-index: 2;
  transition: ${({ theme }) => theme.transitions.opacity};

  & > * {
    margin: 0;
  }

  & > * + * {
    margin-top: ${({ theme }) => theme.spacing.md};
  }

  ${({ $variant, theme }) => {
    const dimensions = getCardDimensions($variant);

    if ($variant === 'mobile') {
      return `
        font-size: ${dimensions.fontSize};
        line-height: 1.4;

        & > * + * {
          margin-top: ${theme.spacing.sm};
        }
      `;
    }

    if ($variant === 'responsive') {
      return `
        font-size: 0.8rem;
        line-height: 1.4;

        & > * + * {
          margin-top: ${theme.spacing.sm};
        }

        ${mediaQuery.from("mobileWide")} {
          font-size: 0.925rem;
          line-height: 1.5;

          & > * + * {
            margin-top: 0.75rem; // Could use theme.spacing but 0.75rem is between sm and md
          }
        }

        ${mediaQuery.from("tablet")} {
          font-size: 1rem;
          line-height: 1.6;

          & > * + * {
            margin-top: ${theme.spacing.md};
          }
        }

        ${mediaQuery.from("desktop")} {
          font-size: 1rem;
          line-height: 1.6;

          & > * + * {
            margin-top: ${theme.spacing.md};
          }
        }
      `;
    }

    return `
      font-size: ${dimensions.fontSize};
      line-height: 1.6;
    `;
  }}
`;


const ContentWrapper = styled.div<{ $hasBackgroundImage?: boolean; $variant: CardVariant }>`
  position: relative;
  z-index: 2;
  transition: ${({ theme }) => theme.transitions.quick};
  display: flex;
  flex-direction: column;
  
  ${({ $variant }) => {
    if ($variant === 'mobile') {
      return `
        padding: 0.5rem 0.5rem;
        gap: 0.75rem;
      `;
    }
    
    if ($variant === 'responsive') {
      return `
        padding: 0.5rem 0.5rem;
        gap: 0.75rem;
        
        ${mediaQuery.from("mobileWide")} {
          padding: 0.25rem 0.25rem;
          gap: 0.875rem;
        }
        
        ${mediaQuery.from("tablet")} {
          padding: 0;
          gap: 1rem;
        }
        
        ${mediaQuery.from("desktop")} {
          padding: 0;
          gap: 1rem;
        }
      `;
    }
    
    return '';
  }}
  
  ${({ $hasBackgroundImage }) => $hasBackgroundImage && `
    opacity: 0;
    
    .card-hoverable:hover & {
      opacity: 1;
    }
  `}
`;

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  badges = [],
  hoverable = false,
  maxWidth,
  className,
  backgroundImage,
  backgroundBlendMode = 'multiply',
  variant = 'responsive',
  href,
  onClick,
}) => {

  const handleClick = () => {
    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else if (onClick) {
      onClick();
    }
  };


  const isClickable = !!(href || onClick);

  return (
    <StyledCard 
      $hoverable={hoverable || isClickable} 
      $maxWidth={maxWidth}
      $backgroundImage={backgroundImage}
      $backgroundBlendMode={backgroundBlendMode}
      $variant={variant}
      className={`${className || ''} ${(hoverable || isClickable) ? 'card-hoverable' : ''}`}
      onClick={isClickable ? handleClick : undefined}
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={isClickable ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      } : undefined}
    >
      <ContentWrapper $hasBackgroundImage={!!backgroundImage} $variant={variant}>
        {title && <CardTitle $variant={variant}>{title}</CardTitle>}
        {subtitle && <CardSubtitle $variant={variant}>{subtitle}</CardSubtitle>}
        {badges.length > 0 && (
          <BadgeContainer $variant={variant}>
            {badges.map((badge, index) => (
              <Badge key={index} $variant={variant}>{badge}</Badge>
            ))}
          </BadgeContainer>
        )}
        {children && (
          <CardContent $variant={variant}>
            {children}
          </CardContent>
        )}
      </ContentWrapper>
    </StyledCard>
  );
};