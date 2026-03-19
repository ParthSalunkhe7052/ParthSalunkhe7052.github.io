import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-lg bg-[#0c0c0c] border border-border p-6 md:p-8 rounded-2xl shadow-2xl z-10"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 text-muted hover:text-text transition-colors rounded-full hover:bg-white/5"
                        >
                            <X size={20} />
                        </button>

                        <h3 className="text-2xl font-bold mb-2">Let's Connect</h3>
                        <p className="text-muted mb-6">Send me a message and I'll get back to you soon.</p>

                        <form 
                            action="https://formsubmit.co/parth.ajit7052@gmail.com" 
                            method="POST"
                            className="flex flex-col gap-4"
                        >
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
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
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
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors resize-none"
                                    placeholder="How can we work together?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-black font-medium py-3 rounded-lg hover:bg-primary/90 transition-colors mt-2"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
