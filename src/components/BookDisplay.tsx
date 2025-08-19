import React, { useEffect, useRef, useState } from 'react';
import styles from './BookDisplay.module.css';

interface BookProps {
  title?: string;
  author?: string;
  coverImage?: string;
  publishDate?: string;
  summary?: string;
}

export default function BookDisplay({
  title,
  author,
  coverImage,
  publishDate,
  summary
}: BookProps): JSX.Element {
  const [expanded, setExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const summaryRef = useRef<HTMLDivElement | null>(null);
  const COLLAPSED_HEIGHT_PX = 96;

  useEffect(() => {
    const el = summaryRef.current;
    if (!el) return;

    const check = () => setIsTruncated(Boolean(el && el.scrollHeight > COLLAPSED_HEIGHT_PX));

    // initial check
    check();

    // observe size/content changes
    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => check());
      ro.observe(el);
    }

    // also recalc on window resize (layout changes)
    window.addEventListener('resize', check);

    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener('resize', check);
    };
  }, [summary]);

  return (
    <div className={styles.bookContainer}>
      <div className={styles.bookInfo}>
        {coverImage && (
          <div className={styles.coverImageContainer}>
            <img 
              src={coverImage} 
              alt={`Capa do livro ${title}`} 
              className={styles.coverImage} 
            />
          </div>
        )}
        <div className={styles.textInfo}>
          {title && <h2 className={styles.bookTitle}>{title}</h2>}
          {author && <div className={styles.bookAuthor}>Autor: {author}</div>}
          {publishDate && <div className={styles.publishDate}>Data de publicação: {publishDate}</div>}
          {summary && (
            <div className={styles.bookSummaryWrapper}>
              <div
                ref={summaryRef}
                className={`${styles.bookSummary} ${expanded ? styles.expanded : styles.collapsed}`}
                aria-expanded={expanded}
              >
                <h3>Resumo</h3>
                <p>{summary}</p>
              </div>
              {isTruncated && (
                <button
                  type="button"
                  className={styles.toggleButton}
                  onClick={() => setExpanded((s) => !s)}
                  aria-label={expanded ? 'Ver menos resumo' : 'Ver mais resumo'}
                  aria-expanded={expanded}
                >
                  {expanded ? 'Ver menos' : 'Ver mais'}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}