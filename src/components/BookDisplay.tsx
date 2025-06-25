import React from 'react';
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
            <div className={styles.bookSummary}>
              <h3>Resumo</h3>
              <p>{summary}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}