import { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle, Loader2, AlertCircle, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzhijUpTwXcSkm-WhSRMYktAQ-IC9t9SM-PPvbph3D3i3vkuO7uqXpqbPspF82_gnyx/exec';

interface FormData {
    name: string;
    email: string;
    organization: string;
    role: string;
    message: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export const PartnerSignup = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        organization: '',
        role: '',
        message: '',
    });
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const successRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (status === 'success') {
            successRef.current?.focus();
        }
    }, [status]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            setStatus('success');
        } catch {
            setStatus('error');
            setErrorMessage(
                'Something went wrong. Please try again or contact b3b@uic.edu directly.'
            );
        }
    };

    if (status === 'success') {
        return (
            <div className="py-20">
                <div ref={successRef} tabIndex={-1} className="container mx-auto px-4 max-w-2xl text-center outline-none" role="status">
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" aria-hidden="true" />
                    <h1 className="text-3xl font-bold text-uic-blue mb-4">
                        Thank You!
                    </h1>
                    <p className="text-gray-600 text-lg mb-8">
                        We've received your information and will be in touch soon.
                    </p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-uic-blue hover:text-uic-red font-medium transition-colors"
                    >
                        <ArrowRight className="w-4 h-4 rotate-180" aria-hidden="true" />
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    const inputClassName =
        'w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-uic-blue focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed';

    return (
        <div>
            <section className="bg-gradient-to-br from-uic-blue to-uic-blue/90 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <Handshake className="w-12 h-12 mx-auto mb-4 opacity-80" aria-hidden="true" />
                    <h1 className="text-4xl font-bold mb-4">Partner With Us</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Get early access to Equalify Reflow and help shape the future
                        of accessible document conversion.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-xl">
                    <form onSubmit={handleSubmit} aria-label="Partner signup form" className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Name <span className="text-uic-red" aria-hidden="true">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                disabled={status === 'submitting'}
                                className={inputClassName}
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email <span className="text-uic-red" aria-hidden="true">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                disabled={status === 'submitting'}
                                className={inputClassName}
                            />
                        </div>

                        <div>
                            <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                                Organization <span className="text-uic-red" aria-hidden="true">*</span>
                            </label>
                            <input
                                type="text"
                                id="organization"
                                name="organization"
                                required
                                value={formData.organization}
                                onChange={handleChange}
                                disabled={status === 'submitting'}
                                className={inputClassName}
                            />
                        </div>

                        <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                                Role / Title
                            </label>
                            <input
                                type="text"
                                id="role"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                disabled={status === 'submitting'}
                                className={inputClassName}
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                How are you interested in partnering?
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                disabled={status === 'submitting'}
                                className={`${inputClassName} resize-y`}
                            />
                        </div>

                        {status === 'error' && (
                            <div className="flex items-center gap-2 text-uic-red text-sm" role="alert">
                                <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                                {errorMessage}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="w-full inline-flex items-center justify-center gap-2 bg-uic-red hover:bg-uic-red/90 text-white px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {status === 'submitting' ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                                    Submitting...
                                </>
                            ) : (
                                <>
                                    Sign Up
                                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};
