import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, CheckCircle2, Loader2 } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const shouldReduceMotion = useReducedMotion();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formsubmit.co/ajax/parth.ajit7052@gmail.com", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                setTimeout(() => {
                    setStatus('idle');
                    onClose();
                    form.reset();
                }, 2500);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />
                    
                    <motion.div
                        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, y: shouldReduceMotion ? 0 : 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, y: shouldReduceMotion ? 0 : 20 }}
                        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                        className="relative w-full max-w-lg bg-[#000000] border border-border p-6 md:p-8 rounded-2xl shadow-2xl z-10"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 text-muted hover:text-text transition-colors rounded-full hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                            aria-label="Close modal"
                        >
                            <X size={20} />
                        </button>

                        <h3 className="text-2xl font-bold mb-2">Let's Connect</h3>
                        <p className="text-muted mb-6">Send me a message and I'll get back to you soon.</p>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            {/* FormSubmit configurations */}
                            <input type="hidden" name="_subject" value="New message from portfolio!" />
                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="_captcha" value="false" />

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-muted mb-1">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 transition-shadow"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-muted mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 transition-shadow resize-none"
                                    placeholder="How can we work together?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading' || status === 'success'}
                                className="relative flex items-center justify-center w-full bg-primary text-black font-bold py-3 rounded-lg hover:bg-primary/90 transition-all duration-200 mt-2 disabled:opacity-80 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                                aria-live="polite"
                            >
                                {status === 'idle' && <span>Send Message</span>}
                                {status === 'loading' && (
                                    <>
                                        <Loader2 size={20} className="animate-spin text-black" />
                                        <span className="sr-only">Sending...</span>
                                    </>
                                )}
                                {status === 'success' && (
                                    <span className="flex items-center gap-2">
                                        <CheckCircle2 size={20} className="text-black" /> Sent!
                                    </span>
                                )}
                                {status === 'error' && <span>Error. Try Again.</span>}
                            </button>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;