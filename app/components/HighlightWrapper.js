"use client";

import { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';

export default function HighlightWrapper({ children }) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return <div className="post-content">{children}</div>;
}
