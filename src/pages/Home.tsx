import {
    ArrowRight,
    BookOpen,
    Building2,
    Eye,
    Github,
    Globe,
    Handshake,
    Heading,
    Layout,
    Scan,
    Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import reflowIconPng from '../assets/equalify-reflow-icon.png';

export const Home = () => {
    return (
        <div>
            {/* Hero */}
            <section className="bg-gradient-to-br from-uic-blue to-uic-blue/90 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <img src={reflowIconPng} alt="" className="h-24 mx-auto mb-6 drop-shadow-lg" />
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Equalify Reflow
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
                        Escaping static files into semantic freedom. An open-source pipeline that converts PDFs into accessible, reflowable content.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/docs/how-it-works"
                            className="inline-flex items-center gap-2 bg-uic-red hover:bg-uic-red/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                            <BookOpen className="w-5 h-5" />
                            How It Works
                        </Link>
                        <a
                            href="https://github.com/EqualifyEverything/equalify-pdf-converter"
                            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-colors border border-white/20"
                        >
                            View on GitHub
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </section>

            {/* The Problem */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-uic-blue text-center mb-4">The Problem</h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        PDFs are visual-first documents designed for print fidelity. Accessibility is bolted on after the fact, the spec is controlled by a private company, and every document update means redoing its tagging.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                        <StatCard value="200,000+" label="PDFs uploaded at UIC in 2023 alone" />
                        <StatCard value="$5–35" label="per page for manual remediation" accent />
                        <StatCard value="$1M+" label="annual cost at even the cheapest rate" />
                    </div>
                </div>
            </section>

            {/* The Escape */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-uic-blue text-center mb-4">The Escape</h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Stop fixing the container. Extract the content and rebuild it in a format that is natively accessible.
                    </p>

                    {/* PDF → Markdown → HTML flow */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-12">
                        <FormatCard
                            title="PDF"
                            subtitle="Visual-first"
                            detail="Print fidelity"
                            className="bg-uic-blue text-white"
                        />
                        <ArrowRight className="w-6 h-6 text-uic-red rotate-90 md:rotate-0 shrink-0" />
                        <FormatCard
                            title="Markdown"
                            subtitle="Semantic"
                            detail="Human-readable, open"
                            className="bg-white text-gray-900 border-2 border-amber-400"
                        />
                        <ArrowRight className="w-6 h-6 text-uic-red rotate-90 md:rotate-0 shrink-0" />
                        <FormatCard
                            title="HTML"
                            subtitle="Accessible by"
                            detail="construction"
                            className="bg-uic-blue text-white"
                        />
                    </div>

                    <div className="bg-white rounded-lg p-8 border border-gray-200 max-w-2xl mx-auto">
                        <p className="text-gray-700 text-center">
                            <strong className="text-uic-blue">AI acting as a semantic translator.</strong> Multimodal AI models can process both images and text, giving them an understanding of visual language and the coding knowledge to express it as semantic structure. This means translating from a visual layout to accessible HTML is a natural fit for what these models already do.
                        </p>
                    </div>
                </div>
            </section>

            {/* The Pipeline */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-uic-blue text-center mb-4">The Pipeline</h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Five stages, from raw PDF to reflowable, accessible content.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                        <PipelineCard
                            icon={<Scan className="w-7 h-7" />}
                            stage="1"
                            title="Docling Extraction"
                            description="IBM Docling handles the first pass using smaller, efficient models. Produces a first-pass markdown covering text blocks, tables, images, and reading order — roughly 70% of the way there."
                        />
                        <PipelineCard
                            icon={<Eye className="w-7 h-7" />}
                            stage="2"
                            title="Structure Analysis"
                            description="Classifies the document type — poster, paper, syllabus — and flags key elements like columns, tables, and images. This context dynamically tunes how later stages process each page."
                        />
                        <PipelineCard
                            icon={<Heading className="w-7 h-7" />}
                            stage="3"
                            title="Headings First"
                            description="Heading hierarchy is the backbone of document accessibility. A dedicated pass infers heading levels from visual signals: size, weight, position, spacing."
                        />
                        <PipelineCard
                            icon={<Users className="w-7 h-7" />}
                            stage="4"
                            title="The Translator"
                            description="A multimodal LLM compares each visual page to its markdown and makes tool-call edits with reasoning. Alt text and table tasks spawn specialist sub-agents."
                        />
                        <PipelineCard
                            icon={<Layout className="w-7 h-7" />}
                            stage="5"
                            title="Escape the Page"
                            description="Merges all pages into one document. AI fixes boundary artifacts — split words, broken tables and lists — producing reflowable, responsive content."
                        />
                    </div>
                    <div className="text-center mt-8">
                        <Link
                            to="/docs/how-it-works"
                            className="inline-flex items-center gap-2 text-uic-red hover:text-uic-red/80 font-medium transition-colors"
                        >
                            Read the full technical overview
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* The Economics */}
            <section className="py-16 bg-gradient-to-br from-uic-blue to-uic-blue/90 text-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-12">The Economics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-white rounded-lg p-8 text-center">
                            <p className="text-sm text-gray-500 mb-2">Manual Remediation</p>
                            <p className="text-4xl font-bold text-uic-red mb-2">$5–10 / page</p>
                            <p className="text-gray-600">= $1,000,000+ annually</p>
                            <p className="text-sm text-gray-400 mt-2 italic">Recurring cost. Resets with every update.</p>
                        </div>
                        <div className="bg-white rounded-lg p-8 text-center">
                            <p className="text-sm text-gray-500 mb-2">Equalify Reflow</p>
                            <p className="text-4xl font-bold text-uic-blue mb-2">~$0.20 / page</p>
                            <p className="text-gray-600">= ~$40,000 annually</p>
                            <p className="text-sm text-gray-400 mt-2 italic">Improves as models improve. Compounds.</p>
                        </div>
                    </div>
                    <p className="text-center text-3xl font-bold text-cyan-300 mb-6">25x cost reduction</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        <div className="bg-white/10 rounded-lg p-6">
                            <h3 className="font-bold mb-2">Pipeline Improves</h3>
                            <p className="text-sm text-blue-100">
                                Unlike manual remediation, the system improves as models improve. You're building infrastructure and accumulating semantic assets — not paying a cost that resets with every update.
                            </p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-6">
                            <h3 className="font-bold mb-2">Enhance, Not Replace</h3>
                            <p className="text-sm text-blue-100">
                                Give your accessibility team superpowers. AI handles the 80% that's mechanical translation. Humans focus on quality assurance, edge cases, and the nuanced judgment that AI can't replace.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Source & Partnership */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-uic-blue text-center mb-4">Open Source</h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Built in the open. Shaped by the community. Licensed under AGPL.<br />
                        Supported by the UIC Technology Solutions Open Source Fund.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <PhaseCard
                            icon={<Building2 className="w-7 h-7" />}
                            title="Phase 1: UIC"
                            description="Tight feedback loops, real document collections, iterative improvement."
                        />
                        <PhaseCard
                            icon={<Handshake className="w-7 h-7" />}
                            title="Phase 2: Partners"
                            description="Early access, roadmap influence, pressure-testing across document types."
                        />
                        <PhaseCard
                            icon={<Globe className="w-7 h-7" />}
                            title="Phase 3: Public"
                            description="AGPL license — adopt, run, improve, contribute back."
                        />
                    </div>
                    <div className="bg-uic-blue rounded-lg p-8 text-white text-center">
                        <p className="font-bold text-lg mb-2">Partners get: Early access + Roadmap commenting</p>
                        <p className="text-blue-100 text-sm mb-4">
                            We need accessibility experts, institutions with real document collections, and practitioners who understand day-to-day remediation.
                        </p>
                        <a
                            href="https://it.uic.edu/profiles/blake-bertuccelli-booth/"
                            className="inline-flex items-center gap-2 bg-uic-red hover:bg-uic-red/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                            Get in Touch
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Project Ecosystem */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-uic-blue text-center mb-12">Project Ecosystem</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <RepoCard
                            name="equalify-pdf-converter"
                            description="Main backend — FastAPI pipeline that converts PDFs to semantic markdown. 1,100+ tests."
                            href="https://github.com/EqualifyEverything/equalify-pdf-converter"
                        />
                        <RepoCard
                            name="equalify-reflow-wp"
                            description="WordPress plugin — serves converted documents with built-in viewer, TOC, and search."
                            href="https://github.com/EqualifyEverything/equalify-reflow-wp"
                        />
                        <RepoCard
                            name="equalify-reflow-feedback"
                            description="Feedback service — collects user edits and issue reports with PDF document archival."
                            href="https://github.com/EqualifyEverything/equalify-reflow-feedback"
                        />
                        <RepoCard
                            name="equalify-reflow-docs"
                            description="This documentation site — project overview and getting started guide."
                            href="https://github.com/EqualifyEverything/equalify-reflow-docs"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

const StatCard = ({ value, label, accent }: { value: string; label: string; accent?: boolean }) => (
    <div className="text-center">
        <p className={`text-4xl font-bold mb-2 ${accent ? 'text-uic-red' : 'text-uic-blue'}`}>{value}</p>
        <p className="text-sm text-gray-600">{label}</p>
    </div>
);

const FormatCard = ({ title, subtitle, detail, className }: { title: string; subtitle: string; detail: string; className: string }) => (
    <div className={`rounded-lg p-6 text-center min-w-[160px] ${className}`}>
        <p className="text-2xl font-bold mb-1">{title}</p>
        <p className="text-sm opacity-80">{subtitle}</p>
        <p className="text-sm opacity-80">{detail}</p>
    </div>
);

const PipelineCard = ({ icon, stage, title, description }: { icon: React.ReactNode; stage: string; title: string; description: string }) => (
    <div className="text-center p-5 bg-gray-50 rounded-lg border border-gray-200">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-uic-blue/10 text-uic-blue rounded-full mb-3">
            {icon}
        </div>
        <p className="text-xs font-semibold text-uic-red uppercase tracking-wide mb-1">Stage {stage}</p>
        <h3 className="text-sm font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
    </div>
);

const PhaseCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
    <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-uic-blue/10 text-uic-blue rounded-full mb-3">
            {icon}
        </div>
        <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
    </div>
);

const RepoCard = ({ name, description, href }: { name: string; description: string; href: string }) => (
    <a
        href={href}
        className="flex items-start gap-4 p-6 bg-white rounded-lg border border-gray-200 hover:border-uic-red/30 hover:shadow-md transition-all group"
    >
        <Github className="w-6 h-6 text-gray-400 group-hover:text-uic-red shrink-0 mt-0.5" />
        <div>
            <h3 className="font-bold text-gray-900 group-hover:text-uic-red mb-1">{name}</h3>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    </a>
);
