import { Link } from 'react-router-dom';
import { FileText, Shield, Cpu, BookOpen, ArrowRight } from 'lucide-react';
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
                        Transforming PDF course materials into accessible, semantic markup for the University of Illinois Chicago.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/docs/architecture"
                            className="inline-flex items-center gap-2 bg-uic-red hover:bg-uic-red/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                            <BookOpen className="w-5 h-5" />
                            Read the Docs
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

            {/* Features */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-uic-blue text-center mb-12">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard
                            icon={<FileText className="w-8 h-8" />}
                            title="PDF Ingestion"
                            description="Upload PDFs through the REST API. Documents are stored in S3 and queued for processing."
                        />
                        <FeatureCard
                            icon={<Shield className="w-8 h-8" />}
                            title="PII Scanning"
                            description="Microsoft Presidio scans every document for personally identifiable information before processing."
                        />
                        <FeatureCard
                            icon={<Cpu className="w-8 h-8" />}
                            title="AI Processing"
                            description="A multi-agent pipeline powered by PydanticAI and Claude converts content to semantic markup."
                        />
                        <FeatureCard
                            icon={<BookOpen className="w-8 h-8" />}
                            title="Accessible Output"
                            description="Produces semantic HTML with proper headings, alt text, accessible tables, and structured lists."
                        />
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-uic-blue text-center mb-12">Documentation</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <DocLink
                            to="/docs/architecture"
                            title="Architecture"
                            description="System design, data flow, and service layer overview."
                        />
                        <DocLink
                            to="/docs/environment-setup"
                            title="Environment Setup"
                            description="Get the development environment running locally."
                        />
                        <DocLink
                            to="/docs/development"
                            title="Development Guide"
                            description="Adding features, debugging, and common patterns."
                        />
                        <DocLink
                            to="/docs/testing"
                            title="Testing"
                            description="Three-tier testing strategy with fixtures and markers."
                        />
                        <DocLink
                            to="/docs/authentication"
                            title="Authentication"
                            description="API key auth, docs auth, and middleware stack."
                        />
                        <DocLink
                            to="/docs/aws-guide"
                            title="AWS Guide"
                            description="Deployment and operations on AWS ECS."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
    <div className="text-center p-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-uic-blue/10 text-uic-blue rounded-full mb-4">
            {icon}
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
    </div>
);

const DocLink = ({ to, title, description }: { to: string; title: string; description: string }) => (
    <Link
        to={to}
        className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-uic-red/30 hover:shadow-md transition-all group"
    >
        <h3 className="font-bold text-gray-900 group-hover:text-uic-red mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
    </Link>
);
