import { Boundary } from '@/ui/boundary';
import Link from 'next/link';
import { LinkStatus } from '@/ui/link-status'
import db from '@/lib/db';
import { Suspense } from 'react';
import { UserGate } from '@/ui/user-gate';

export default async function Page() {

  const learningTypes = db.learningType.findAll();
  return (
    <Boundary
      label="國小自學天地"
      animateRerendering={false}
      kind="solid"
      className="flex flex-col gap-9"
    >
      {learningTypes.map((learning_types) => {
        return (
          <div key={learning_types.name} className="flex flex-col gap-8">
            <div className="font-mono text-3xl font-semibold tracking-wider text-text-main uppercase">
              {learning_types.name}
            </div>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {learning_types.items.map((item) => {
                if (!item.checkUser) {
                  return (
                    <Link
                      href={`/${item.slug}`}
                      key={item.slug}
                      className="group flex flex-col gap-1 rounded-lg bg-card px-5 py-3 hover:bg-primary "
                    >
                      <div className="flex items-center justify-between font-medium text-text-main group-hover:text-text-muted">
                        {item.name} <LinkStatus />
                      </div>

                      {item.description ? (
                        <div className="line-clamp-3 text-[13px] text-text-muted group-hover:text-text-muted">
                          {item.description}
                        </div>
                      ) : null}
                    </Link>
                  );
                }

                return (
                  <Suspense
                    key={item.slug}
                    fallback={
                      <span style={{ color: "#999" }}>載入中...</span>
                    }
                  >
                    <UserGate
                      fallback={
                        <span
                          style={{ color: "#999", cursor: "not-allowed" }}
                        >
                          登入後進入
                        </span>
                      }
                    >
                      <Link
                        href={`/${item.slug}`}
                        key={item.slug}
                        className="group flex flex-col gap-1 rounded-lg bg-card px-5 py-3 hover:bg-primary "
                      >
                        <div className="flex items-center justify-between font-medium text-text-main group-hover:text-text-muted">
                          {item.name} <LinkStatus />
                        </div>

                        {item.description ? (
                          <div className="line-clamp-3 text-[13px] text-text-muted group-hover:text-text-muted">
                            {item.description}
                          </div>
                        ) : null}
                      </Link>
                    </UserGate>
                  </Suspense>

                );
              })}

            </div>
          </div>
        );
      })}
    </Boundary>
  );
}
