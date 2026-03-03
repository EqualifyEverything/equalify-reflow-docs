import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';

interface MarkdownPageProps {
    filePath: string;
}

export const MarkdownPage = ({ filePath }: MarkdownPageProps) => {
    const [content, setContent] = useState<string>('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        const modules = import.meta.glob('../content/*.md', { query: '?raw', import: 'default' });
        const key = `../content/${filePath}.md`;

        if (modules[key]) {
            (modules[key]() as Promise<string>)
                .then(text => {
                    setContent(text);
                    setLoading(false);
                })
                .catch(() => {
                    setError('Failed to load document.');
                    setLoading(false);
                });
        } else {
            setError(`Document "${filePath}" not found.`);
            setLoading(false);
        }
    }, [filePath]);

    if (loading) {
        return (
            <div className="animate-pulse space-y-4">
                <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-12">
                <p className="text-gray-500 text-lg">{error}</p>
            </div>
        );
    }

    return (
        <article className="prose prose-lg max-w-none prose-headings:text-uic-blue prose-a:text-uic-red prose-a:no-underline hover:prose-a:underline prose-code:text-sm prose-table:border-collapse prose-th:bg-gray-100 prose-th:border prose-th:border-gray-300 prose-th:px-3 prose-th:py-2 prose-td:border prose-td:border-gray-300 prose-td:px-3 prose-td:py-2">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, rehypeHighlight]}
            >
                {content}
            </ReactMarkdown>
        </article>
    );
};
