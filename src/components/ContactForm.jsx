import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Since we don't have a backend configured right now, this will mock a submission
        // or redirect to mailto. For a real site, connect this to Formspree or EmailJS.
        const form = e.target;
        const data = new FormData(form);
        const email = data.get('email');
        const message = data.get('message');
        const name = data.get('name');

        window.location.href = `mailto:contact@parth7.me?subject=Portfolio Inquiry from ${name}&body=${message} (%0A%0AFrom: ${email})`;
        setStatus('Opening email client...');

        setTimeout(() => {
            setStatus('');
            form.reset();
        }, 3000);
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="w-full max-w-md mx-auto mt-8 flex flex-col gap-4 text-left glass-panel p-6 rounded-2xl"
        >
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted mb-1">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="John Doe"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted mb-1">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="john@example.com"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted mb-1">Message</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    placeholder="How can we work together?"
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full primary-button py-3 mt-2"
            >
                Send Message
            </button>
            {status && <p className="text-center text-sm text-primary mt-2">{status}</p>}
        </motion.form>
    );
};

export default ContactForm;
