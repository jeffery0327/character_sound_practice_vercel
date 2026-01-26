// 'use cache';

import { notFound } from 'next/navigation';
import { Boundary } from '@/ui/boundary';
import db from '@/lib/db';

export default async function Layout({
  params,
  children,
}: {
  children: React.ReactNode;
  params: Promise<{ lession: string }>;
}) {
  const { lession: lessionSlug } = await params;
  const lession = db.lession.find({where: {slug: lessionSlug}});

  if (!lession) {
    notFound();
  }

  return (
    <Boundary label={lession.name} className="flex flex-col gap-9">
      <div>{children}</div>
    </Boundary>
  );
}
