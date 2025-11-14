'use client';

import React from 'react';
import { Code2, Smartphone, Brain, Rocket, Server, Users } from 'lucide-react';
import { services, personalInfo } from '@/lib/data';
import { useReducedMotion } from '@/hooks';
import { 
  Section, 
  SectionHeader, 
  Card, 
  CardContent,
  Text,
  IconBadge 
} from '@/components/common';

const iconMap = {
  Code2,
  Smartphone,
  Brain,
  Rocket,
  Server,
  Users,
};

export function AboutSectionRefactored() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="about">
      <SectionHeader
        title="What I"
        highlightText="Offer"
        subtitle={personalInfo.bio}
        animated={!shouldReduceMotion}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap];

          return (
            <Card
              key={service.id}
              variant="default"
              hover="lift"
              padding="lg"
              animated={!shouldReduceMotion}
              animationDelay={index * 0.2}
            >
              <CardContent className="space-y-4">
                <IconBadge
                  icon={Icon}
                  variant="gradient"
                  size="lg"
                  iconSize={32}
                  hover="scale"
                />
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                
                <Text variant="body" className="leading-relaxed">
                  {service.description}
                </Text>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
