import { useState } from 'react';
import { Play } from 'lucide-react';

const YOUTUBE_ID = 'GYg-gksF2dc';
const THUMBNAIL_URL = `https://img.youtube.com/vi/${YOUTUBE_ID}/hqdefault.jpg`;

export function TutorialCard() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className="rounded-lg p-4 px-5 flex-1 min-w-0 h-[166px] flex flex-col"
      style={{ backgroundColor: 'var(--color-bg-card-blue)' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium" style={{ color: 'var(--color-blue-accent)' }}>
          Latest from Bitscale
        </span>
        <div className="flex items-center gap-1">
          <span className="w-6 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-blue-accent)' }} />
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-blue-secondary)' }} />
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-blue-secondary)' }} />
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-blue-secondary)' }} />
        </div>
      </div>

      {/* Content */}
      <div className="flex gap-4 flex-1 min-h-0">
        {/* Video */}
        <div className="w-[143px] h-[97px] rounded-lg overflow-hidden relative flex-shrink-0 shadow-md">
          {isPlaying ? (
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1`}
              title="How to Integrate 2 Way HubSpot"
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : (
            <>
              <img
                src={THUMBNAIL_URL}
                alt="HubSpot integration tutorial"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)',
                }}
              />
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform"
                style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}
                aria-label="Play video"
              >
                <Play size={12} fill="#0A0A0A" stroke="#0A0A0A" />
              </button>
              <div className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] px-1.5 py-0.5 rounded">
                12:34
              </div>
            </>
          )}
        </div>

        {/* Text */}
        <div className="flex flex-col gap-1.5 flex-1 min-w-0">
          <h4
            className="text-[13px] font-medium leading-[16px]"
            style={{ color: 'var(--color-text-heading)' }}
          >
            How to Integrate 2 Way HubSpot
          </h4>
          <p
            className="text-xs leading-4 line-clamp-3"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Prerequisites for this integration is that you have a HubSpot account and Copy the API key. We
            will simply add API key through the integrations pa...
          </p>
          <span
            className="text-[10px] mt-auto"
            style={{ color: 'var(--color-text-tertiary)' }}
          >
            Posted today
          </span>
        </div>
      </div>
    </div>
  );
}
