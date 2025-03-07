import React, { useEffect, useState } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { evaluate } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';

const RemoteMarkdown = ({ url }) => {
  const [content, setContent] = useState<React.ReactNode>(null);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch markdown content: ${response.statusText}`);
        }
        const text = await response.text();
        const mdxContent = await evaluate(text, {
          ...runtime,
          Fragment: React.Fragment,
        });
        setContent(mdxContent.default());
      } catch (error) {
        console.error(error);
        setContent(<p>Failed to load content.</p>);
      }
    };

    fetchMarkdown();
  }, [url]);

  return (
    <MDXProvider>
      {content}
      <hr />
      <p>
        Este conteúdo foi gerado a partir de um YAML externo. Veja a{' '}
        <a href={url} target="_blank" rel="noopener noreferrer">
          fonte
        </a>
        .
      </p>
    </MDXProvider>
  );
};

export default RemoteMarkdown;