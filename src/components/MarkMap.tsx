import React, { useState, useRef, useEffect } from 'react';
import { Markmap } from 'markmap-view';
import { Transformer } from 'markmap-lib';
import 'markmap-toolbar/dist/style.css';

interface MarkMapProps {
  markMap?: string;
}

const defaultMarkMap = `# markmap

- beautiful
- useful
- easy
- interactive
`;

const transformer = new Transformer();

export default function MarkMap({ markMap = defaultMarkMap }: MarkMapProps): JSX.Element {
  const [value, setValue] = useState<string>(markMap);
  const refSvg = useRef<SVGSVGElement | null>(null);
  const refMm = useRef<Markmap | null>(null);

  useEffect(() => {
    if (refMm.current) return;
    if (!refSvg.current) return;
    
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
