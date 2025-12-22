'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './LandingSequencer.module.css';
import BpmControlInline from './BpmControlInline';

interface LandingSequencerProps {
  className?: string;
  isLoopActive?: boolean;
  isMuteActive?: boolean;
  externalBpmMenuOpen?: boolean;
  onBpmMenuOpenChange?: (isOpen: boolean) => void;
  hideBpmControl?: boolean;
}

// Тип для блока
type BlockType = {
  id: number;
  tracks: {
    R: boolean[];
    L: boolean[];
    RF: boolean[];
    LF: boolean[];
  };
};

const LandingSequencer: React.FC<LandingSequencerProps> = ({ 
  className, 
  isLoopActive = false, 
  isMuteActive = false,
  externalBpmMenuOpen,
  onBpmMenuOpenChange,
  hideBpmControl = false
}) => {
  const [currentPosition, setCurrentPosition] = useState({ blockIndex: 0, stepIndex: 0 });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Состояние для вертикального режима - два блока (верхний и нижний)
  const [topBlock, setTopBlock] = useState<BlockType | null>(null);
  const [bottomBlock, setBottomBlock] = useState<BlockType | null>(null);
  const [activePosition, setActivePosition] = useState<'top' | 'bottom'>('top');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Состояния для BPM
  const [bpm, setBpm] = useState(30);
  const [internalBpmMenuOpen, setInternalBpmMenuOpen] = useState(false);
  
  // Используем внешнее состояние, если оно передано, иначе внутреннее
  const isBpmMenuOpen = externalBpmMenuOpen !== undefined ? externalBpmMenuOpen : internalBpmMenuOpen;
  const setIsBpmMenuOpen = (isOpen: boolean) => {
    if (onBpmMenuOpenChange) {
      onBpmMenuOpenChange(isOpen);
    } else {
      setInternalBpmMenuOpen(isOpen);
    }
  };

  // Те же блоки, что в SequencerMarquee
  const blocks: BlockType[] = [
    {
      id: 0,
      tracks: {
        R: [true, false, true, true], // RLRR
        L: [false, true, false, false], // RLRR
        RF: [true, true, false, false],
        LF: [false, false, false, true]
      }
    },
    {
      id: 1,
      tracks: {
        R: [false, true, false, false], // LRLL
        L: [true, false, true, true], // LRLL
        RF: [true, true, false, false],
        LF: [false, false, false, true]
      }
    },
    {
      id: 2,
      tracks: {
        R: [true, false, true, true], // RLRR
        L: [false, true, false, false], // RLRR
        RF: [false, false, false, false],
        LF: [false, false, false, true]
      }
    },
    {
      id: 3,
      tracks: {
        R: [false, true, false, false], // LRLL
        L: [true, false, true, true], // LRLL
        RF: [false, false, false, false],
        LF: [false, false, false, true]
      }
    }
  ];

  // Инициализация блоков для вертикального режима
  useEffect(() => {
    if (blocks.length > 0) {
      setTopBlock(blocks[0]);
      setBottomBlock(blocks.length > 1 ? blocks[1] : blocks[0]);
      setCurrentIndex(0);
      setActivePosition('top');
    }
  }, []);

  // Сохраняем текущую позицию для продолжения при изменении BPM
  const currentStepRef = useRef(0);
  const bpmRef = useRef(bpm);
  const isLoopActiveRef = useRef(isLoopActive);
  const loopBlockIndexRef = useRef(0); // Сохраняем индекс блока для лупа
  const lastStepTimeRef = useRef(Date.now());
  const expectedNextStepTimeRef = useRef(Date.now());

  // Обновляем refs при изменении (без пересоздания интервала)
  useEffect(() => {
    bpmRef.current = bpm;
    const wasLoopActive = isLoopActiveRef.current;
    isLoopActiveRef.current = isLoopActive;
    // Когда включается луп, сохраняем текущий блок и пересчитываем шаг
    if (isLoopActive && !wasLoopActive) {
      loopBlockIndexRef.current = currentPosition.blockIndex;
      // Пересчитываем globalStep для текущего блока (только шаги 0-3)
      currentStepRef.current = currentPosition.stepIndex;
    }
    // Когда выключается луп, пересчитываем globalStep для продолжения с текущей позиции
    if (!isLoopActive && wasLoopActive) {
      // Вычисляем globalStep на основе текущего блока и шага
      currentStepRef.current = loopBlockIndexRef.current * 4 + currentPosition.stepIndex;
    }
  }, [bpm, isLoopActive, currentPosition.blockIndex, currentPosition.stepIndex]);

  // Воспроизведение секвенсора (только визуальная подсветка)
  useEffect(() => {
    const totalSteps = blocks.length * 4; // 16 шагов всего

    const playStep = (globalStep: number) => {
      let blockIndex: number;
      let stepIndex: number;
      
      if (isLoopActiveRef.current) {
        // Если луп активен, зацикливаем текущий проигрываемый блок
        stepIndex = globalStep % 4;
        blockIndex = loopBlockIndexRef.current;
      } else {
        // Обычное воспроизведение всех блоков
        blockIndex = Math.floor(globalStep / 4);
        stepIndex = globalStep % 4;
      }
      
      setCurrentPosition({ blockIndex, stepIndex });
    };

    // Используем сохраненную позицию или начинаем с 0
    let globalStep = currentStepRef.current;
    playStep(globalStep); // Воспроизводим текущий шаг
    const now = Date.now();
    lastStepTimeRef.current = now;
    expectedNextStepTimeRef.current = now;

    // Используем requestAnimationFrame для плавного обновления
    let animationFrameId: number;
    const startTime = Date.now();

    const updateStep = () => {
      const now = Date.now();
      const stepDuration = (60 / bpmRef.current) / 4;
      const elapsed = now - expectedNextStepTimeRef.current;

      if (elapsed >= stepDuration * 1000) {
        // Время для следующего шага
        if (isLoopActiveRef.current) {
          // При активном лупе зацикливаем только 4 шага первого блока
          globalStep = (globalStep + 1) % 4;
        } else {
          // Обычное воспроизведение всех блоков
          globalStep = (globalStep + 1) % totalSteps;
        }
        currentStepRef.current = globalStep; // Сохраняем текущую позицию
        lastStepTimeRef.current = now;
        expectedNextStepTimeRef.current = now;
        playStep(globalStep);
      }

      animationFrameId = requestAnimationFrame(updateStep);
    };

    animationFrameId = requestAnimationFrame(updateStep);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isLoopActive]);

  // Обновляем отображаемые блоки на основе текущей позиции воспроизведения (для вертикального режима)
  useEffect(() => {
    if (!topBlock || !bottomBlock) return;

    const playingBlockIndex = currentPosition.blockIndex;

    // Если индекс текущего блока изменился, обновляем состояние
    if (playingBlockIndex !== currentIndex) {
      // Определяем, какую позицию (верх/низ) должен занимать текущий блок
      const newPosition = (playingBlockIndex % 2 === 0) ? 'top' : 'bottom';
      
      // Обновляем все состояния атомарно для предотвращения мерцания
      setCurrentIndex(playingBlockIndex);
      setActivePosition(newPosition);
      
      // Обновляем пару блоков в зависимости от текущей позиции
      if (newPosition === 'top') {
        setTopBlock(blocks[playingBlockIndex]);
        
        // Следующий блок или циклический возврат к началу
        const nextIndex = (playingBlockIndex + 1) % blocks.length;
        setBottomBlock(blocks[nextIndex]);
      } else {
        setBottomBlock(blocks[playingBlockIndex]);
        
        // Следующий блок или циклический возврат к началу
        const nextIndex = (playingBlockIndex + 1) % blocks.length;
        setTopBlock(blocks[nextIndex]);
      }
    }
  }, [currentPosition, currentIndex, topBlock, bottomBlock]);

  const trackColors = {
    R: '#FF4A50',
    L: '#2DD2D8',
    RF: '#DD0B8C',
    LF: '#FDA20A'
  };

  // Сортировка треков в нужном порядке: LF, L, R, RF
  const sortTracks = (tracks: string[]) => {
    const order: { [key: string]: number } = { 'lf': 0, 'l': 1, 'r': 2, 'rf': 3 };
    return [...tracks].sort((a, b) => {
      const aOrder = order[a.toLowerCase()] !== undefined ? order[a.toLowerCase()] : 999;
      const bOrder = order[b.toLowerCase()] !== undefined ? order[b.toLowerCase()] : 999;
      return aOrder - bOrder;
    });
  };

  const getTrackText = (trackName: string) => {
    switch (trackName) {
      case 'RF': return 'K';
      case 'R': return 'R';
      case 'L': return 'L';
      case 'LF': return 'LF';
      default: return trackName;
    }
  };

  // Функция для вычисления LCM (наименьшее общее кратное)
  const gcd = (a: number, b: number): number => {
    while (b) {
      const t = a % b;
      a = b;
      b = t;
    }
    return Math.abs(a || 0);
  };

  const lcm = (a: number, b: number): number => {
    if (!a) return b || 0;
    if (!b) return a || 0;
    return Math.abs((a / gcd(a, b)) * b);
  };

  // Функция для определения, активен ли блок
  const isBlockActive = (position: 'top' | 'bottom') => {
    return position === activePosition;
  };

  // Вертикальный режим (для всех устройств)
  if (!topBlock || !bottomBlock) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '100%', 
        height: '100%', 
        minHeight: '200px',
        fontSize: '1rem',
        fontFamily: 'inherit',
        color: 'rgba(255, 255, 255, 0.8)'
      }}>
        Loading...
      </div>
    );
  }

  const renderBlock = (block: BlockType, position: 'top' | 'bottom') => {
      // Вычисляем LCM для всех треков блока (для проецирования шагов)
      const allSteps = Object.values(block.tracks).filter(sc => Array.isArray(sc) && sc.length > 0);
      const maxStepsInBlock = allSteps.length > 0 
        ? allSteps.map(arr => arr.length).reduce((acc, steps) => lcm(acc, steps), 0) || 1
        : 1;

      const isActive = isBlockActive(position);
      const isCurrentlyPlayingBlock = currentPosition.blockIndex === block.id;
      const isOutOfLoop = isLoopActive && block.id !== loopBlockIndexRef.current;

      return (
        <div key={`${block.id}-${position}`} className={styles.verticalBlockWrapper}>
          <div className={`${styles.verticalBlock} ${isActive ? styles.activeBlock : styles.inactiveBlock} ${isOutOfLoop ? styles.outOfLoop : ''}`}>
            <div className={styles.verticalGrid}>
              {sortTracks(Object.keys(block.tracks)).map((trackName) => {
                const steps = block.tracks[trackName as keyof typeof block.tracks];
                const stepCount = steps.length;
                const isMuted = isMuteActive && trackName === 'R';
                
                return (
                  <div key={trackName} className={`${styles.verticalTrackColumn} ${isMuted ? styles.mutedTrack : ''}`}>
                    {steps.map((isActive, stepIndex) => {
                      // Определяем, проигрывается ли ячейка сейчас
                      let isCurrentlyPlaying = false;
                      if (isCurrentlyPlayingBlock && !isMuted) {
                        const globalStep = currentPosition.stepIndex;
                        if (typeof globalStep === 'number' && globalStep >= 0 && stepCount > 0) {
                          const projectedLocalStep = Math.floor((globalStep * stepCount) / maxStepsInBlock);
                          isCurrentlyPlaying = projectedLocalStep === stepIndex;
                        }
                      }

                      const playingClass = isCurrentlyPlaying && !isMuted
                        ? (isActive ? styles.playingActive : styles.playingEmpty)
                        : '';

                      // Определяем, является ли ячейка акцентом (только шаг 0 для R и L треков)
                      const isAccent = (trackName === 'R' || trackName === 'L') && isActive && stepIndex === 0;

                      return (
                        <div
                          key={stepIndex}
                          className={`${styles.verticalGridCell} ${isActive ? styles.active : ''} ${styles[`track-${trackName}`]} ${playingClass}`}
                          data-instrument-id={isAccent ? `${trackName.toLowerCase()}_accent` : undefined}
                        >
                          {isActive && (
                            <div className={styles.cellTrackText}>
                              {getTrackText(trackName)}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    };

  const handleBpmChange = (newBpm: number) => {
    setBpm(newBpm);
  };

  const handleBpmControlClose = () => {
    setIsBpmMenuOpen(false);
  };

  return (
    <div className={`${styles.sequencerContainer} ${styles.verticalMode} ${className || ''}`}>
      <div className={styles.verticalBlocksContainer}>
        <div className={styles.verticalBlocksWrapper}>
          {renderBlock(topBlock, 'top')}
          {renderBlock(bottomBlock, 'bottom')}
        </div>
      </div>
      
      {/* BPM контрол внизу */}
      {!hideBpmControl && (
        <div className={styles.bpmControlContainer}>
          <button 
            className={`${styles.bpmToggleButton} ${isBpmMenuOpen ? styles.active : ''}`}
            data-bpm-button="true"
            onClick={(e) => {
              e.stopPropagation();
              setIsBpmMenuOpen(!isBpmMenuOpen);
            }}
          >
            {bpm}
          </button>

          {/* BPM Control Inline */}
          {isBpmMenuOpen && (
            <BpmControlInline 
              bpm={bpm} 
              onBpmChange={handleBpmChange} 
              onClose={handleBpmControlClose}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default LandingSequencer;

