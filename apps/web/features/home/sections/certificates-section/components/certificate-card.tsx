import React from 'react';
import Image from 'next/image';
import { Award } from 'lucide-react';
import { Card } from '@/components/common';
import { CertificateItem } from '../types/certificate-item';
interface CertificateCardProps {
  certificate: CertificateItem;
  animationDelay?: number;
  onClick?: () => void;
}
// s
export const CertificateCard: React.FC<CertificateCardProps> = ({
  certificate,
  animationDelay,
  onClick,
}) => (
  <Card
    key={certificate.id}
    animationDelay={animationDelay}
    hover="lift"
    padding="none"
    className="overflow-hidden cursor-pointer group"
    onClick={onClick}
  >
    <Card.Content className="p-0">
      <div className="relative h-36 sm:h-56 lg:h-64 bg-linear-to-br from-secondary to-accent overflow-hidden">
        {certificate.imageUrl ? (
          <>
            <Image
              src={certificate.imageUrl}
              alt={certificate.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-[hsl(var(--card)/0.8)] dark:bg-[hsl(var(--card)/0.6)]" />
          </>
        ) : (
          <div className="flex items-center justify-center h-full bg-[hsl(var(--card)/0.8)] dark:bg-[hsl(var(--card)/0.6)]">
            <Award className="w-20 h-20 text-muted-foreground opacity-30" />
          </div>
        )}
        <div className="absolute inset-0 glass-zone opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="font-semibold text-lg text-foreground drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)] flex items-center gap-2">
            <Award size={24} />
            View Certificate
          </span>
        </div>
        <div className="absolute top-4 right-4 w-12 h-12 rounded-full glass-zone flex items-center justify-center">
          <Award className="w-6 h-6 text-foreground" />
        </div>
      </div>
    </Card.Content>
    <Card.Footer className="flex flex-col gap-2 items-start p-3 sm:p-4 md:p-6">
      <Card.Title className="text-base sm:text-lg md:text-xl line-clamp-2 min-h-10 sm:min-h-14 group-hover:text-primary dark:group-hover:text-primary-foreground transition-colors">
        {certificate.title}
      </Card.Title>
      <Card.Description className="text-sm font-medium text-foreground">
        {certificate.issuer}
      </Card.Description>
      <p className="text-xs text-muted-foreground">{certificate.date}</p>
    </Card.Footer>
  </Card>
);
