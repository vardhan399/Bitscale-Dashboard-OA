import { useState } from 'react';
import { FileCheck2, Check } from 'lucide-react';
import { ProgressBar } from '../common/ProgressBar';
import { onboardingItems as initialItems } from '../../data/mockData';

export function DemoProgressCard() {
  const [items, setItems] = useState(initialItems);

  const toggleItem = (id: string) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  const completedCount = items.filter((i) => i.isCompleted).length;
  const progressPercentage = items.length > 0 ? Math.round((completedCount / items.length) * 100) : 0;

  return (
    <div
      className="rounded-lg p-4 px-5 flex-1 min-w-0 h-auto sm:h-[166px] flex flex-col border"
      style={{
        background: 'linear-gradient(332.99deg, rgba(255,255,255,0.5) 35.17%, rgba(231,243,248,0.5) 83.22%)',
        borderColor: '#E7F3F8',
      }}
    >
      {/* Header */}
      <div className="flex items-start gap-3">
        <div
          className="w-[33px] h-[33px] rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: 'var(--color-bg-dark-overlay)' }}
        >
          <FileCheck2 size={16} className="text-white" />
        </div>
        <div>
          <p className="text-sm font-medium" style={{ color: 'var(--color-text-card)' }}>
            Complete product demo
          </p>
          <p className="text-xs" style={{ color: 'var(--color-text-card)', letterSpacing: '-0.26px' }}>
            92% of users nailed BitScale after this walkthrough
          </p>
        </div>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-2 mt-3">
        <ProgressBar value={progressPercentage} animated className="flex-1" />
        <span
          className="text-[10px] font-semibold flex-shrink-0 transition-all duration-300"
          style={{ color: 'var(--color-green-primary)', letterSpacing: '-0.26px' }}
        >
          {progressPercentage}%
        </span>
      </div>

      {/* Onboarding items */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 mt-3">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => toggleItem(item.id)}
            className="flex items-center gap-1.5 text-left cursor-pointer group"
          >
            {item.isCompleted ? (
              <div
                className="w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'var(--color-blue-accent)', border: '1.4px solid var(--color-blue-accent)' }}
              >
                <Check size={8} className="text-white" strokeWidth={3} />
              </div>
            ) : (
              <div
                className="w-3.5 h-3.5 rounded-full flex-shrink-0 border"
                style={{ borderColor: 'var(--color-border-card)', backgroundColor: 'var(--color-bg-white)' }}
              />
            )}
            <span
              className="text-xs font-medium group-hover:opacity-80 transition-opacity"
              style={{ color: item.isCompleted ? 'var(--color-text-muted)' : 'var(--color-text-card)', letterSpacing: '-0.15px' }}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}