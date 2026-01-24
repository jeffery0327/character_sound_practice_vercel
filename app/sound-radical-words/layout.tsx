'use cache';

import React from 'react';
import { Boundary } from '@/ui/boundary';
import { type Metadata } from 'next';
import { Mdx } from '@/ui/codehike';
import readme from './readme.mdx';
import { data, Skill } from '@/app/_internal/data'

export async function generateMetadata(): Promise<Metadata> {
  const skill = data.learning_types.find(r => r.slug === 'character_practice')?.items.find(r => r.slug === 'sound-radical-words') as Skill;
  return {
    title: skill.name,
    openGraph: { title: skill.name, images: [`/api/og?title=${skill.name}`] },
  };
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) { 
  const skill = data.learning_types.find(r => r.slug === 'character_practice')?.items.find(r => r.slug === 'sound-radical-words') as Skill;
  return (
    <>
      <Boundary label='' kind="solid" animateRerendering={false}>
        <Mdx source={readme} collapsed={true} />
      </Boundary>
      <Boundary
        label={skill.name}
        kind="solid"
        animateRerendering={false}
        className="flex flex-col gap-5"
      >
        {children}
      </Boundary>
    </>
  );
}
