import React, { useState, useRef, useEffect } from 'react';
import { Markmap } from 'markmap-view';
import { Transformer } from 'markmap-lib';
import 'markmap-toolbar/dist/style.css';

// Comandos para testes:
// Para rodar todos os testes: npm test ou yarn test
// Para rodar apenas os testes deste componente: npm test -- --testPathPattern=tests/MarkMap.test.js
// ou yarn test --testPathPattern=tests/MarkMap.test.js

const defaultMarkMap = `# markmap

- beautiful
- useful
- easy
- interactive
`;

const transformer = new Transformer();

export default function MarkMap({ markMap = defaultMarkMap }) {
  const [value, setValue] = useState(markMap);
  const refSvg = useRef();
  const refMm = useRef();

  useEffect(() => {
    if (refMm.current) return;
    const mm = Markmap.create(refSvg.current);
    refMm.current = mm;
  }, [refSvg.current]);

  useEffect(() => {
    const mm = refMm.current;
    if (!mm) return;
    const { root } = transformer.transform(value);
    mm.setData(root).then(() => {
      mm.fit();
    });
  }, [refMm.current, value]);

  return (
    <div className="markmap-container">
      <svg className="markmap-svg" ref={refSvg} />
    </div>
  );
}