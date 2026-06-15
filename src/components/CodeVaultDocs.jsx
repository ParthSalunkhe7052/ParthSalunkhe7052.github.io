import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Cpu, Lock, Cloud, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const CodeVaultDocs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 w-full max-w-4xl mx-auto flex flex-col relative z-20">
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="space-y-12"
            >
                {/* Header */}
                <div className="space-y-6">
                    <Link to="/" className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-4 group">
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Portfolio
                    </Link>
                    
                    <motion.div variants={itemVariants} className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest">
                                Architecture Breakdown
                            </span>
                            <span className="text-muted text-sm font-mono">v1.0.0</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-text">
                            CodeVault: Secure Builds & Hardware-Bound Licensing
                        </h1>
                        <p className="text-xl text-muted leading-relaxed">
                            How I engineered secure deployment and licensing infrastructure for Python and Node.js projects.
                        </p>
                    </motion.div>
                </div>

                <motion.div variants={itemVariants} className="prose prose-invert prose-p:text-muted prose-headings:text-text max-w-none">
                    
                    <div className="my-10 p-6 bg-surface border border-border rounded-2xl">
                        <h3 className="text-lg font-bold flex items-center gap-2 mb-4 !mt-0 text-text">
                            <Shield className="text-primary" size={20} />
                            The Problem Statement
                        </h3>
                        <p className="text-sm text-muted leading-relaxed !mb-0">
                            Distributing software written in interpreted languages exposes proprietary logic and API keys to theft. Tying a license to a user is ineffective if the user can share the source files. <strong>The delivery pipeline needs artifact packaging, hardware-bound licensing, and controlled access checks.</strong>
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold mt-12 mb-6">1. The Cloud Build Pipeline (Isolated Workers)</h2>
                    <p>
                        CodeVault protects Python and Node.js projects through cloud builds, artifact packaging, and hardware-bound licensing. The platform uses an automated Cloud Build pipeline built on Docker and GCP.
                    </p>
                    <ul className="space-y-4 list-none pl-0">
                        <li className="flex items-start gap-3">
                            <Cloud className="text-primary mt-1 shrink-0" size={18} />
                            <span><strong>Ephemeral Build Containers:</strong> When a developer uploads their source code via the React frontend (multipart/form-data payload), the FastAPI backend provisions an isolated, ephemeral Docker container.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Cpu className="text-primary mt-1 shrink-0" size={18} />
                            <span><strong>Artifact Packaging:</strong> Inside the container, CodeVault packages project artifacts and applies the license checks needed for controlled delivery. Python and Node.js applications follow language-specific build paths while keeping the developer workflow consistent.</span>
                        </li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-12 mb-6">2. Cryptographic HWID Binding</h2>
                    <p>
                        To prevent unauthorized distribution, protected artifacts include a secure access-check layer before the main application logic runs.
                    </p>
                    <ul className="space-y-4 list-none pl-0">
                        <li className="flex items-start gap-3">
                            <Lock className="text-primary mt-1 shrink-0" size={18} />
                            <span><strong>Hardware Fingerprinting:</strong> Upon execution, the binary generates a unique Hardware ID (HWID) by hashing a combination of the motherboard serial, CPU ID, and MAC address.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Shield className="text-primary mt-1 shrink-0" size={18} />
                            <span><strong>Zero-Trust Verification:</strong> The HWID is sent to the CodeVault backend. If the HWID matches the active license in the PostgreSQL database, the server returns a signed access response for the protected artifact.</span>
                        </li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-12 mb-6">3. Offline Air-Gapped Leases</h2>
                    <p>
                        Some licensing tools require a constant internet connection, which creates friction for teams that need controlled offline access.
                    </p>
                    <div className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg p-5 font-mono text-xs text-muted my-6 overflow-x-auto">
                        <div className="flex gap-2 mb-3 border-b border-[#1f1f1f] pb-3">
                            <Terminal size={14} className="text-primary" />
                            <span className="text-[#888]">offline_lease_verification.c</span>
                        </div>
                        <pre className="!bg-transparent !p-0 !m-0">
<span className="text-pink-400">bool</span> <span className="text-blue-400">verify_offline_lease</span>(<span className="text-pink-400">const char*</span> jwt_token, <span className="text-pink-400">const char*</span> hwid) {'{'}
  <span className="text-gray-500">// 1. Decode JWT Header & Payload</span>
  <span className="text-gray-500">// 2. Verify RS256 Signature using embedded Public Key</span>
  <span className="text-pink-400">if</span> (!verify_rs256_signature(jwt_token, PUBLIC_KEY)) {'{'}
      <span className="text-pink-400">return</span> false;
  {'}'}
  
  <span className="text-gray-500">// 3. Ensure token HWID matches actual machine HWID</span>
  <span className="text-pink-400">if</span> (strcmp(extracted_hwid, hwid) != 0) {'{'}
      <span className="text-pink-400">return</span> false;
  {'}'}

  <span className="text-gray-500">// 4. Verify Expiry (exp claim)</span>
  <span className="text-pink-400">return</span> check_timestamp_validity(extracted_exp);
{'}'}
                        </pre>
                    </div>
                    <p>
                        CodeVault implements <strong>Signed JWT Offline Leases</strong>. The server signs a license token using an RS256 private key. This token embeds the machine's HWID and an expiration timestamp. The protected artifact contains the corresponding public key to mathematically verify the signature without contacting the server.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-6">4. CI/CD & E2E Testing Automation</h2>
                    <p>
                        To ensure stability across the build pipeline, I engineered a custom End-to-End (E2E) testing harness (`run_e2e.py`). This harness automates the Cloud Build submission loop, mocks the React frontend's multipart/form-data payload, intercepts webhook callbacks, and verifies the integrity of the delivered artifact.
                    </p>

                </motion.div>
                
                <div className="pt-12 mt-12 border-t border-border flex items-center justify-between">
                    <div className="flex gap-4">
                        <span className="text-xs font-mono text-muted px-3 py-1 rounded-full border border-border">FastAPI</span>
                        <span className="text-xs font-mono text-muted px-3 py-1 rounded-full border border-border">React</span>
                        <span className="text-xs font-mono text-muted px-3 py-1 rounded-full border border-border">Docker Build Workers</span>
                    </div>
                </div>
            </motion.div>
        </main>
    );
};

export default CodeVaultDocs;
