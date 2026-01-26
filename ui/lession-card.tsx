import { Lession } from "@/lib/db";
import Link from "next/link";
import { LinkStatus } from "./link-status";

export function LessionCard({
  lession,
  baseUrl,
}: {
  lession: Lession;
  baseUrl: string;
}) {
  return (
    <div>
      {lession.active ? (<ActiveLessionCard lession={lession} baseUrl={baseUrl} />) : (<InActiveLessionCard lession={lession}/>) }
    </div>
    
  )
}

function ActiveLessionCard({
  lession,
  baseUrl,
}: {
  lession: Lession;
  baseUrl: string;
}) {
  return (
    <Link
      href={`${baseUrl}/${lession.slug}`}
      key={lession.id}
      className="group flex flex-col gap-1 rounded-lg bg-card px-5 py-3 hover:bg-primary border-2 border-gray-800"
    >
      <div className="flex items-center justify-between font-medium text-text-main group-hover:text-text-muted">
        {lession.name} <LinkStatus />
      </div>

      {lession.description ? (
        <div className="line-clamp-3 text-[13px] text-text-main group-hover:text-text-muted">
          {lession.description}
        </div>
      ) : null}
    </Link>
  )
}

function InActiveLessionCard({
  lession,
}: {
  lession: Lession;
}) {
  return (
    <div
      key={'inactive_'+lession.id}
      className="group flex flex-col gap-1 rounded-lg bg-gray-200 px-5 py-3 border-2 border-gray-300"
    >
      <div className="flex items-center justify-between font-medium text-gray-400">
        {lession.name} <LinkStatus />
      </div>

      {lession.description ? (
        <div className="line-clamp-3 text-[13px] text-gray-400 ">
          {lession.description}
        </div>
      ) : null}
    </div>
  )
}