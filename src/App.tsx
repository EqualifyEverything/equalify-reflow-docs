import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { Layout } from './components/Layout';
import { DocsLayout } from './components/DocsLayout';
import { Home } from './pages/Home';
import { PartnerSignup } from './pages/PartnerSignup';
import { MarkdownPage } from './components/MarkdownPage';
import { RouteAnnouncer } from './components/RouteAnnouncer';
import { docsNav } from './docs-nav';

function App() {
  // Flatten all doc entries for route generation
  const allDocs = docsNav.flatMap(section =>
    section.items.map(item => item)
  );

  return (
    <Layout>
      <RouteAnnouncer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partner" element={<PartnerSignup />} />
        <Route path="/docs" element={<DocsLayout />}>
          <Route index element={<Navigate to={allDocs[0]?.path ?? '/docs/how-it-works'} replace />} />
          {allDocs.map(doc => (
            <Route
              key={doc.path}
              path={doc.path.replace('/docs/', '')}
              element={<MarkdownPage filePath={doc.file} />}
            />
          ))}
        </Route>
        <Route path="*" element={<div className="container mx-auto px-4 py-20 text-center"><h1 className="text-3xl font-bold text-uic-blue mb-4">Page Not Found</h1><p className="text-gray-600">The page you're looking for doesn't exist.</p><Link to="/" className="inline-flex items-center gap-2 text-uic-red hover:text-uic-red/80 font-medium mt-4">Back to Home</Link></div>} />
      </Routes>
    </Layout>
  );
}

export default App;
