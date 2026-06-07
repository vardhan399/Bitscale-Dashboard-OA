import { useEffect, useCallback } from 'react';

export function useKeyboardShortcut(
  keys: string[],
  callback: () => void,
  enabled: boolean = true
): void {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!enabled) return;

      const pressedKeys = new Set<string>();

      if (event.metaKey || event.ctrlKey) pressedKeys.add('mod');
      if (event.shiftKey) pressedKeys.add('Shift');
      if (event.altKey) pressedKeys.add('Alt');

      const key = event.key.toLowerCase();
      if (!['control', 'meta', 'shift', 'alt'].includes(key)) {
        pressedKeys.add(key);
      }

      const normalizedTarget = keys.map((k) => k.toLowerCase());
      const allMatch =
        normalizedTarget.every((k) => pressedKeys.has(k)) &&
        pressedKeys.size === normalizedTarget.length;

      if (allMatch) {
        event.preventDefault();
        event.stopPropagation();
        callback();
      }
    },
    [keys, callback, enabled]
  );

  useEffect(() => {
    if (!enabled) return;
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown, enabled]);
}
