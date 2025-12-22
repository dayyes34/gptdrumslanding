'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './BpmControlInline.module.css';

interface BpmControlInlineProps {
  bpm: number;
  onBpmChange: (newBpm: number) => void;
  onClose: () => void;
}

const BpmControlInline: React.FC<BpmControlInlineProps> = ({ 
  bpm, 
  onBpmChange, 
  onClose
}) => {
  const controlsRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Функция изменения BPM
  const changeBpm = useCallback((delta: number, isScroll = false) => {
    const newBpm = Math.min(Math.max(20, bpm + delta), 220); // Диапазон BPM 20-220
    if (newBpm !== bpm) {
      onBpmChange(newBpm);
    }
  }, [bpm, onBpmChange]);

  // Обработчик колесика мыши для изменения BPM
  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 1 : -1; // deltaY > 0 = скролл вниз = увеличиваем BPM
    changeBpm(delta, true);
  }, [changeBpm]);

  // Обработчики для сенсорного управления
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [ignoreTouchEnd, setIgnoreTouchEnd] = useState(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartY(e.touches[0].clientY);
    setIgnoreTouchEnd(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartY === null) return;

    // Предотвращаем стандартное поведение скролла
    e.preventDefault();

    const touchY = e.touches[0].clientY;
    const diff = touchStartY - touchY;

    if (Math.abs(diff) > 5) { // Порог для изменения
      changeBpm(diff > 0 ? 1 : -1, true);
      setTouchStartY(touchY);
      setIgnoreTouchEnd(true); 
    }
  };

  useEffect(() => {
    const controls = controlsRef.current;
    if (controls) {
      controls.addEventListener('wheel', handleWheel, { passive: false });
      return () => controls.removeEventListener('wheel', handleWheel);
    }
  }, [handleWheel]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      // Игнорируем клики на кнопку BPM
      if (target && (target.closest('[data-bpm-button="true"]') || target.hasAttribute('data-bpm-button'))) {
        return;
      }
      
      if (wrapperRef.current && !wrapperRef.current.contains(target)) {
        onClose();
      }
    };

    // Используем небольшую задержку, чтобы onClick кнопки успел выполниться первым
    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={styles.bpmControlInline}>
      <div className={styles.bpmControlWrapper} ref={wrapperRef}>
        {/* BPM контрол */}
        <div 
          className={styles.bpmControls}
          ref={controlsRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => !ignoreTouchEnd && setTouchStartY(null)}
        >
          <div className={styles.bpmButtons}>
            <button 
              className={styles.bpmButton}
              onClick={() => changeBpm(1)}
            >
              {bpm >= 220 ? '-' : bpm + 1}
            </button>
            <div className={styles.bpmValue}>
              {bpm}
            </div>
            <button 
              className={styles.bpmButton}
              onClick={() => changeBpm(-1)}
            >
              {bpm <= 20 ? '-' : bpm - 1}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BpmControlInline;

