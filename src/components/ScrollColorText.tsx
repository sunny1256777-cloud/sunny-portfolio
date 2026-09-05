import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface ScrollColorTextProps {
  children: string;
  className?: string;
  from?: string;
  to?: string;
}

interface WordSpanProps {
  children: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
  accent?: boolean;
}

const WordSpan: React.FC<WordSpanProps> = ({
  children,
  progress,
  start,
  end,
  accent = false,
}) => {
  const color = useTransform(
    progress,
    [start, start + (end - start) * 0.5, end],
    accent
      ? [
          'oklch(0.55 0.02 260 / 0.55)',
          'oklch(0.78 0.14 235 / 0.95)',
          'oklch(0.78 0.14 235)',
        ]
      : [
          'oklch(0.45 0.01 260 / 0.65)',
          'var(--foreground)',
          'var(--foreground)',
        ]
  );

  return (
    <motion.span style={{ color }} className="inline-block transition-colors">
      {children}
    </motion.span>
  );
};

export const ScrollColorText: React.FC<ScrollColorTextProps> = ({
  children,
  className = '',
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'end 40%'],
  });

  // Parse markdown-style **accent** text
  const parts = children.split(/(\*\*[^*]+\*\*)/g);
  const wordsList: { text: string; accent: boolean }[] = [];

  for (const part of parts) {
    if (!part) continue;
    const isAccent = part.startsWith('**') && part.endsWith('**');
    const cleanText = isAccent ? part.slice(2, -2) : part;
    const tokens = cleanText.split(/(\s+)/);

    for (const token of tokens) {
      if (token !== '') {
        wordsList.push({ text: token, accent: isAccent });
      }
    }
  }

  // Count non-whitespace words
  const nonWhitespaceIndices: number[] = [];
  wordsList.forEach((item, idx) => {
    if (item.text.trim() !== '') {
      nonWhitespaceIndices.push(idx);
    }
  });

  const totalWords = nonWhitespaceIndices.length;

  return (
    <p ref={containerRef} className={className}>
      {wordsList.map((item, idx) => {
        if (item.text.trim() === '') {
          return <span key={idx}>{item.text}</span>;
        }

        const wordOrder = nonWhitespaceIndices.indexOf(idx);
        const start = wordOrder / totalWords;
        const end = (wordOrder + 1) / totalWords;

        return (
          <WordSpan
            key={idx}
            progress={scrollYProgress}
            start={start}
            end={end}
            accent={item.accent}
          >
            {item.text}
          </WordSpan>
        );
      })}
    </p>
  );
};
