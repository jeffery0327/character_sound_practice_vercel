// 'use cache';

import React from 'react';
import { Boundary } from '@/ui/boundary';
import { type Metadata } from 'next';
import { Mdx } from '@/ui/codehike';
import readme from './readme.mdx';
import db from '@/lib/db';

export async function generateMetadata(): Promise<Metadata> {
  const skill = db.skill.find({where: { slug: 'sentences'}});
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
  const skill = db.skill.find({where: { slug: 'sentences'}});
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
