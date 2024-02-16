import React from 'react';

import { range } from '@/utils';
import LibraryGameCard from '@/components/LibraryGameCardSkeleton';

export const dynamic = 'force-dynamic';

async function VaporExercise() {
  return (
    <section className="max-width-wrapper">
      <header className="library-header">
        <h1>My games</h1>
      </header>
      <div className="game-grid">
        {range(15).map(() => (
          <LibraryGameCard />
        ))}
      </div>
    </section>
  );
}

export default VaporExercise;
