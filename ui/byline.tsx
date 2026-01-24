import { Boundary } from '@/ui/boundary';

export default function Byline() {
  return (
    <Boundary kind="solid" animateRerendering={false}>
      <div className="flex gap-4 text-sm font-medium text-secondary">
        POWER BY DADA
      </div>
    </Boundary>
  );
}
