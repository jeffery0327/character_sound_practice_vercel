import React from 'react';
import { Suspense } from 'react';
import { Boundary } from '@/ui/boundary';
import { type Metadata } from 'next';
import { Mdx } from '@/ui/codehike';
import readme from './readme.mdx';
import db from '@/lib/db';

export async function generateMetadata(): Promise<Metadata> {
  const skill = db.skill.find({where: { slug: 'similar-words'}});
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
  const skill = db.skill.find({where: { slug: 'similar-words'}});
  return (
    <>
      <Boundary label='' kind="solid" animateRerendering={false}>
        <Suspense fallback={<div>Loading runtime data...</div>}>
          <Mdx source={readme} collapsed={true} />
        </Suspense>
        
      </Boundary>
      <Boundary
        label={skill.name}
        kind="solid"
        animateRerendering={false}
        className="flex flex-col gap-9"
      >
        <Suspense fallback={<div>Loading runtime data...</div>}>
          {children}
        </Suspense>
      </Boundary>
    </>
  );
}
