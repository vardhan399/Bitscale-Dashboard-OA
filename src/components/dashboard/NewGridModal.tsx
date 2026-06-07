import { useState } from 'react';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { useGrid } from '../../context/GridContext';
import { useToast } from '../../context/ToastContext';

interface NewGridModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NewGridModal({ isOpen, onClose }: NewGridModalProps) {
  const [name, setName] = useState('');
  const { addGrid } = useGrid();
  const { addToast } = useToast();

  const handleCreate = () => {
    if (!name.trim()) return;
    addGrid(name.trim());
    addToast(`Grid "${name.trim()}" created successfully!`, 'success');
    setName('');
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleCreate();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm" title="Create New Grid">
      <div className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="grid-name"
            className="block text-sm font-medium mb-1.5"
            style={{ color: 'var(--color-text-heading)' }}
          >
            Grid Name
          </label>
          <input
            id="grid-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter grid name..."
            className="w-full h-10 rounded-lg border px-3 text-sm outline-none transition-shadow"
            style={{
              borderColor: 'var(--color-border-primary)',
              backgroundColor: 'var(--color-bg-white)',
              color: 'var(--color-text-primary)',
            }}
            autoFocus
            aria-required="true"
          />
        </div>

        <div className="flex justify-end gap-3 mt-2">
          <Button variant="ghost" size="sm" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={handleCreate}
            disabled={!name.trim()}
            style={{ opacity: name.trim() ? 1 : 0.5 }}
          >
            Create Grid
          </Button>
        </div>
      </div>
    </Modal>
  );
}
