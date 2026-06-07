import { useState, useEffect } from 'react';
import { AppLayout } from './components/layout/AppLayout';
import { WelcomeSection } from './components/dashboard/WelcomeSection';
import { ContentCards } from './components/dashboard/ContentCards';
import { TabBar } from './components/dashboard/TabBar';
import { GridTable } from './components/dashboard/GridTable';
import { NewGridModal } from './components/dashboard/NewGridModal';
import { FindPeopleModal } from './components/find-people/FindPeopleModal';
import { Toast } from './components/common/Toast';
import { CommandPalette } from './components/common/CommandPalette';
import { Skeleton } from './components/common/Skeleton';

export function App() {
  const [isFindPeopleOpen, setIsFindPeopleOpen] = useState(false);
  const [isNewGridOpen, setIsNewGridOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AppLayout>
        <div className="flex flex-col gap-6 p-5 max-w-[1440px] w-full mx-auto">
          {isLoading ? (
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Skeleton variant="line" className="h-6 w-48" />
                <Skeleton variant="line" className="h-4 w-72" />
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <Skeleton variant="card" className="flex-1" />
                <Skeleton variant="card" className="flex-1" />
              </div>
              <div
                className="rounded-lg p-5 border"
                style={{ borderColor: 'var(--color-border-primary)' }}
              >
                <Skeleton variant="line" className="h-9 w-72 mb-4" />
                {Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton key={i} variant="table-row" className="mb-1" />
                ))}
              </div>
            </div>
          ) : (
            <>
              <WelcomeSection
                onFindPeople={() => setIsFindPeopleOpen(true)}
                onNewGrid={() => setIsNewGridOpen(true)}
              />
              <ContentCards />
              <div
                className="rounded-lg overflow-hidden p-5 pt-1 border"
                style={{
                  backgroundColor: 'var(--color-bg-white)',
                  borderColor: 'var(--color-border-primary)',
                }}
              >
                <TabBar />
                <GridTable />
              </div>
            </>
          )}
        </div>
      </AppLayout>

      {/* Modals */}
      <FindPeopleModal
        isOpen={isFindPeopleOpen}
        onClose={() => setIsFindPeopleOpen(false)}
      />
      <NewGridModal
        isOpen={isNewGridOpen}
        onClose={() => setIsNewGridOpen(false)}
      />

      {/* Global overlays */}
      <Toast />
      <CommandPalette />
    </>
  );
}
