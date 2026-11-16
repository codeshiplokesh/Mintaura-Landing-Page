import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { 
  ArrowLeft, Trash2, Mail, Check, 
  Clock, AlertTriangle, FileText, Smartphone, HelpCircle,
  Copy, ExternalLink
} from 'lucide-react';

interface AccountDeletionProps {
  onBackToHome: () => void;
  onNavigateToPrivacy: () => void;
}

export const AccountDeletion: React.FC<AccountDeletionProps> = ({ 
  onBackToHome, 
  onNavigateToPrivacy 
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const [copied, setCopied] = useState(false);

  const emailSubject = 'Account Deletion Request - com.bulliongold.bullion';
  const emailTemplate = 
`To: mintaurabullion@gmail.com
Subject: Account Deletion Request - com.bulliongold.bullion

Dear Mintaura Support Team,

I am writing to formally request the permanent deletion of my Mintaura Bullion account and all associated personal and business data.

Here are my registered account details:
- Application Package: com.bulliongold.bullion
- Registered Full Name: [Enter Your Full Name]
- Registered Mobile Number: [Enter Your Mobile Number used in App]
- Registered Email Address: [Enter Your Email Address]
- Business / Firm Name: [Enter Your Business Name, if any]

I understand that this action is irreversible and will permanently delete my profile, KYC records, active listings, and trade history.

Thank you.`;

  const mailtoUrl = `mailto:mintaurabullion@gmail.com?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(
    `Dear Mintaura Support Team,\n\nI am writing to formally request the permanent deletion of my Mintaura Bullion account and all associated personal and business data.\n\nAccount Details:\n- Application: com.bulliongold.bullion\n- Registered Full Name: \n- Registered Mobile Number: \n- Registered Email: \n- Business / Firm Name: \n\nI understand that this action is permanent and irreversible.\n\nThank you.`
  )}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(emailTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#E5E7EB] font-sans selection:bg-[#E8B24C]/30 selection:text-white">
      
      {/* Top Header */}
      <header className="sticky top-0 z-50 w-full bg-[#050505]/90 backdrop-blur-md border-b border-neutral-800/80 px-4 sm:px-6 lg:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-[#E8B24C]/50 text-neutral-300 hover:text-white text-xs font-medium transition-all cursor-pointer group"
              aria-label="Back to home"
            >
              <ArrowLeft size={14} className="text-[#E8B24C] group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Home</span>
            </button>
            <div className="hidden sm:block">
              <Logo />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateToPrivacy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-xs text-neutral-400 hover:text-white transition-all cursor-pointer"
            >
              <FileText size={13} className="text-[#E8B24C]" />
              <span className="hidden sm:inline">Privacy Policy</span>
            </button>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-400">
              <Smartphone size={12} className="text-[#E8B24C]" />
              com.bulliongold.bullion
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full border-b border-neutral-900 bg-gradient-to-b from-[#0a0a0a] to-[#050505] px-4 sm:px-6 lg:px-12 py-12 select-none overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[550px] h-[250px] bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.1)_0%,rgba(0,0,0,0)_70%)] blur-[80px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 mb-4">
            <Trash2 size={14} className="text-red-400" />
            <span className="text-xs font-semibold text-red-400 tracking-wide uppercase">
              Google Play Account Deletion Request
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
            Request Account Deletion via Email
          </h1>

          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl mb-6">
            In compliance with Google Play Store policies and data privacy standards, you can request the permanent deletion of your account and personal records for <strong className="text-white">Mintaura Bullion</strong> (<code className="text-[#E8B24C] font-mono text-xs">com.bulliongold.bullion</code>) by sending an email to our security desk.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-neutral-800/60 text-xs">
            <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800/80">
              <span className="text-neutral-500 uppercase tracking-wider block text-[10px] font-bold mb-0.5">App Package</span>
              <span className="font-mono text-neutral-200">com.bulliongold.bullion</span>
            </div>
            <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800/80">
              <span className="text-neutral-500 uppercase tracking-wider block text-[10px] font-bold mb-0.5">Processing Time</span>
              <span className="text-neutral-200 flex items-center gap-1.5">
                <Clock size={12} className="text-[#E8B24C]" /> Within 30 Days
              </span>
            </div>
            <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800/80">
              <span className="text-neutral-500 uppercase tracking-wider block text-[10px] font-bold mb-0.5">Dedicated Support</span>
              <a href="mailto:mintaurabullion@gmail.com" className="text-[#E8B24C] hover:underline font-mono">
                mintaurabullion@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Email Redirection & Instructions Layout */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Email Redirection & Instructions (7 cols) */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Primary Action Card: Email Redirection */}
            <div className="bg-[#0b0b0b] rounded-2xl border border-red-500/30 p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-3 pb-4 mb-5 border-b border-neutral-800">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-red-400" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Send Deletion Email</h2>
                  <p className="text-xs text-neutral-400">Click below to open your email client with pre-filled details</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                Please send an email from your registered email address to <strong className="text-[#E8B24C]">mintaurabullion@gmail.com</strong> requesting account deletion. Click the button below to automatically generate and open the email draft.
              </p>

              {/* Redirection Button */}
              <a
                href={mailtoUrl}
                className="w-full h-13 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 shadow-lg shadow-red-900/30 flex items-center justify-center gap-2.5 transition-all cursor-pointer group"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                <span>Open Email Client to Send Request</span>
                <ExternalLink size={15} className="opacity-80" />
              </a>

              <div className="mt-4 pt-4 border-t border-neutral-900 flex items-center justify-between text-xs text-neutral-500">
                <span>Destination: <strong className="text-neutral-300 font-mono">mintaurabullion@gmail.com</strong></span>
                <span>Response in &lt; 48 hrs</span>
              </div>
            </div>

            {/* Email Template & Copy Card */}
            <div className="bg-[#0b0b0b] rounded-2xl border border-neutral-800 p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <div>
                  <h3 className="text-sm font-bold text-white">Manual Email Template</h3>
                  <p className="text-xs text-neutral-400">If your mail app didn't open, copy this text and email us manually</p>
                </div>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-700 hover:border-[#E8B24C] text-xs text-neutral-300 hover:text-white transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} className="text-[#E8B24C]" />
                      <span>Copy Template</span>
                    </>
                  )}
                </button>
              </div>

              <div className="relative">
                <pre className="p-4 rounded-xl bg-black border border-neutral-900 text-xs font-mono text-neutral-300 leading-relaxed overflow-x-auto whitespace-pre-wrap select-all">
                  {emailTemplate}
                </pre>
              </div>

              {/* 3 Step Guide */}
              <div className="pt-2 space-y-2.5 text-xs text-neutral-400">
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 font-bold flex items-center justify-center shrink-0 text-[11px]">
                    1
                  </span>
                  <span>Open your preferred email app (Gmail, Outlook, etc.) from your registered email.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 font-bold flex items-center justify-center shrink-0 text-[11px]">
                    2
                  </span>
                  <span>Paste the template above and fill in your registered phone number & full name.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 font-bold flex items-center justify-center shrink-0 text-[11px]">
                    3
                  </span>
                  <span>Send to <strong className="text-[#E8B24C] font-mono">mintaurabullion@gmail.com</strong>. You will receive an acknowledgment within 48 hours.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Policy Details & Data Impact (5 cols) */}
          <div className="lg:col-span-5 text-left space-y-6">
            
            {/* What Happens Card */}
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <AlertTriangle size={16} className="text-[#E8B24C]" />
                What Gets Permanently Deleted
              </h3>
              <ul className="space-y-2.5 text-xs text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                  <span><strong>Profile Credentials:</strong> Name, phone number, email address, password hashes, and session tokens.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                  <span><strong>Business & KYC Records:</strong> Business verification certificates, GSTIN records, and verified dealer credentials.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                  <span><strong>Listings & Quotes:</strong> All historical and active gold/silver deals, quotes, and market postings.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                  <span><strong>Communications:</strong> Direct chat inquiries and negotiation threads.</span>
                </li>
              </ul>
            </div>

            {/* Retention Notice */}
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle size={16} className="text-[#E8B24C]" />
                Data Retained Under Statutory Law
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                As an enterprise B2B platform operating in India, financial invoices, completed deal receipts, or tax invoices (if generated) are maintained strictly where required by applicable taxation, GST, and accounting statutes for the required statutory retention period. Such records are archived in cold storage and never utilized for marketing.
              </p>
            </div>

            {/* Official Support Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900 to-[#121212] border border-[#E8B24C]/30 space-y-3">
              <h3 className="text-sm font-bold text-[#E8B24C] flex items-center gap-2">
                <Mail size={16} />
                Need Assistance?
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                If you have questions regarding data retention or need help retrieving archived transaction invoices, contact our Grievance Desk:
              </p>
              <a 
                href="mailto:mintaurabullion@gmail.com"
                className="inline-block p-2.5 rounded-lg bg-black/60 border border-neutral-800 font-mono text-xs text-[#E8B24C] hover:underline break-all"
              >
                mintaurabullion@gmail.com
              </a>
              <p className="text-[11px] text-neutral-400">
                Support Hours: Mon-Sat, 9:00 AM - 7:00 PM IST
              </p>
            </div>

          </div>

        </div>
      </main>

    </div>
  );
};
