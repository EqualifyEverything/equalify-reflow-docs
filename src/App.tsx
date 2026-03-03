import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { DocsLayout } from './components/DocsLayout';
import { Home } from './pages/Home';
import { MarkdownPage } from './components/MarkdownPage';
import { docsNav } from './docs-nav';

function App() {
  // Flatten all doc entries for route generation
  const allDocs = docsNav.flatMap(section =>
    section.items.map(item => item)
  );

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<DocsLayout />}>
          <Route index element={<Navigate to={allDocs[0]?.path ?? '/docs/architecture'} replace />} />
          {allDocs.map(doc => (
            <Route
              key={doc.path}
              path={doc.path.replace('/docs/', '')}
              element={<MarkdownPage filePath={doc.file} />}
            />
          ))}
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
