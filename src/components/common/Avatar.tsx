interface AvatarProps {
  name: string;
  color: string;
  size?: 'sm' | 'md';
  className?: string;
}

const sizes = {
  sm: { wh: 21, text: '9px' },
  md: { wh: 28, text: '11px' },
};

export function Avatar({ name, color, size = 'md', className = '' }: AvatarProps) {
  const s = sizes[size];
  const initial = name.charAt(0).toUpperCase();

  return (
    <div
      className={`rounded-full flex items-center justify-center font-semibold text-white flex-shrink-0 ${className}`}
      style={{
        width: s.wh,
        height: s.wh,
        fontSize: s.text,
        backgroundColor: color,
      }}
      aria-label={name}
      role="img"
    >
      {initial}
    </div>
  );
}
