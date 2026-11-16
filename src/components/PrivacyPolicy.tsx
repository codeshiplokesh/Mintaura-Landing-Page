import React, { useEffect } from 'react';
import { Logo } from './Logo';
import { 
  ArrowLeft, ShieldCheck, Mail, Lock, Smartphone, Database, 
  Trash2, Eye, FileText, CheckCircle2, Printer
} from 'lucide-react';

interface PrivacyPolicyProps {
  onBackToHome: () => void;
  onNavigateToDeleteAccount?: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ 
  onBackToHome, 
  onNavigateToDeleteAccount 
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const sections = [
    { id: 'introduction', title: '1. Introduction & Overview' },
    { id: 'data-collected', title: '2. Information We Collect' },
    { id: 'how-we-use', title: '3. Purpose of Processing' },
    { id: 'app-permissions', title: '4. Android App Permissions' },
    { id: 'third-parties', title: '5. Third-Party Services' },
    { id: 'data-sharing', title: '6. Information Sharing & Disclosure' },
    { id: 'retention-deletion', title: '7. Data Retention & Account Deletion' },
    { id: 'security', title: '8. Data Security Measures' },
    { id: 'children', title: '9. Children\'s Privacy' },
    { id: 'compliance-grievance', title: '10. Legal Compliance & Grievance Redressal' },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#E5E7EB] font-sans selection:bg-[#E8B24C]/30 selection:text-white">
      
      {/* Top Sticky Header */}
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
            <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-400">
              <Smartphone size={12} className="text-[#E8B24C]" />
              com.bulliongold.bullion
            </span>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 text-xs text-neutral-400 hover:text-white transition-all cursor-pointer"
              title="Print Policy"
            >
              <Printer size={13} />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full border-b border-neutral-900 bg-gradient-to-b from-[#0a0a0a] to-[#050505] px-4 sm:px-6 lg:px-12 py-14 select-none overflow-hidden">
        {/* Ambient Gold Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(232,178,76,0.12)_0%,rgba(0,0,0,0)_70%)] blur-[80px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8B24C]/10 border border-[#E8B24C]/30 mb-6">
            <ShieldCheck size={14} className="text-[#E8B24C]" />
            <span className="text-xs font-semibold text-[#E8B24C] tracking-wide uppercase">
              Official Privacy Policy & Data Safety
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Privacy Policy
          </h1>

          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-3xl mb-6">
            This Privacy Policy describes how <strong className="text-white">Mintaura Bullion</strong> ("we", "our", or "us") collects, stores, protects, and handles personal and business data for the mobile application <strong className="text-[#E8B24C] font-mono">com.bulliongold.bullion</strong> and associated online platforms.
          </p>

          {/* Quick Meta Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-neutral-800/60 text-xs">
            <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800/80">
              <span className="text-neutral-500 uppercase tracking-wider block text-[10px] font-bold mb-0.5">Application ID</span>
              <span className="font-mono text-neutral-200">com.bulliongold.bullion</span>
            </div>
            <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800/80">
              <span className="text-neutral-500 uppercase tracking-wider block text-[10px] font-bold mb-0.5">Official Support</span>
              <a href="mailto:mintaurabullion@gmail.com" className="text-[#E8B24C] hover:underline font-mono">
                mintaurabullion@gmail.com
              </a>
            </div>
            <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800/80">
              <span className="text-neutral-500 uppercase tracking-wider block text-[10px] font-bold mb-0.5">Last Updated</span>
              <span className="text-neutral-300">November 2026 (Effective)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Table of Contents Sidebar (Desktop) */}
          <aside className="hidden lg:block lg:col-span-4 select-none">
            <div className="sticky top-24 p-5 rounded-xl bg-neutral-950/80 border border-neutral-800/80 text-left">
              <div className="flex items-center gap-2 mb-4 text-[#E8B24C] text-xs font-bold uppercase tracking-wider">
                <FileText size={15} />
                <span>Contents</span>
              </div>
              <nav className="space-y-1.5 text-xs text-neutral-400">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block py-1.5 px-2 rounded hover:bg-neutral-900 hover:text-[#E8B24C] transition-colors"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>

              <div className="mt-6 pt-5 border-t border-neutral-900">
                <div className="p-3 rounded-lg bg-[#E8B24C]/10 border border-[#E8B24C]/20 text-[11px] text-neutral-300">
                  <div className="flex items-center gap-1.5 font-bold text-[#E8B24C] mb-1">
                    <Trash2 size={13} />
                    <span>Need Data Deletion?</span>
                  </div>
                  <p className="text-neutral-400 leading-snug">
                    You can request complete deletion of your account and personal records anytime via our support desk.
                  </p>
                  <a 
                    href="/delete-account" 
                    onClick={(e) => {
                      if (onNavigateToDeleteAccount) {
                        e.preventDefault();
                        onNavigateToDeleteAccount();
                      }
                    }}
                    className="inline-block mt-2 font-semibold text-[#E8B24C] hover:underline"
                  >
                    Open Account Deletion Page →
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Policy Body */}
          <article className="lg:col-span-8 text-left space-y-12 leading-relaxed text-neutral-300">
            
            {/* Section 1: Introduction */}
            <section id="introduction" className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5 pb-2 border-b border-neutral-800">
                <span className="text-[#E8B24C]">1.</span> Introduction & Scope
              </h2>
              <p>
                Welcome to <strong>Mintaura</strong>. We provide a premium B2B bullion networking and market intelligence platform engineered for verified bullion dealers, jewellers, refiners, mints, raw material suppliers, and institutional participants across India.
              </p>
              <p>
                This Privacy Policy applies to all users of our Android mobile application (Package Name: <code className="px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[#E8B24C] font-mono text-xs">com.bulliongold.bullion</code>), our websites, APIs, and connected services (collectively, the "Platform").
              </p>
              <p>
                By downloading, accessing, or using the Platform, you acknowledge that you have read, understood, and agreed to the practices outlined in this policy. If you do not agree with this policy, please refrain from using our app and services.
              </p>
            </section>

            {/* Section 2: Information We Collect */}
            <section id="data-collected" className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5 pb-2 border-b border-neutral-800">
                <span className="text-[#E8B24C]">2.</span> Information We Collect
              </h2>
              <p>
                We only collect information necessary to deliver authentic B2B networking, ensure counterparty trust, and facilitate business operations within the bullion trading ecosystem:
              </p>

              <div className="space-y-3 mt-4">
                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2 mb-1.5">
                    <CheckCircle2 size={16} className="text-[#E8B24C]" />
                    A. Personal & Contact Information
                  </h3>
                  <p className="text-sm text-neutral-400">
                    When registering or requesting early access, we collect your full name, business email address (e.g. <span className="font-mono text-neutral-300">name@company.com</span>), mobile phone number, operating city, and contact preferences.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2 mb-1.5">
                    <CheckCircle2 size={16} className="text-[#E8B24C]" />
                    B. Business Profile & KYC Verification Data
                  </h3>
                  <p className="text-sm text-neutral-400">
                    To maintain our verified B2B network standard, we may collect your registered business name, operating classification (Bullion Dealer, Refiner/Mint, Trader/Wholesaler, Jeweller/Retailer, Supplier), monthly turnover range, and business credentials (such as GSTIN registration numbers or business PAN) provided voluntarily for network verification.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2 mb-1.5">
                    <CheckCircle2 size={16} className="text-[#E8B24C]" />
                    C. Technical, Device & Diagnostic Information
                  </h3>
                  <p className="text-sm text-neutral-400">
                    When using the Android application (<code className="text-xs font-mono text-[#E8B24C]">com.bulliongold.bullion</code>), we automatically receive device technical data including hardware model, operating system version, unique device identifier (Android ID), network operator, IP address, and crash/diagnostic logs to diagnose bugs and maintain performance.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2 mb-1.5">
                    <CheckCircle2 size={16} className="text-[#E8B24C]" />
                    D. Communications & Trading Inquiries
                  </h3>
                  <p className="text-sm text-neutral-400">
                    Information contained in trade inquiries, RFQs, price quote submissions, support requests, and messages exchanged through the platform between verified business counterparties.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: How We Use Your Data */}
            <section id="how-we-use" className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5 pb-2 border-b border-neutral-800">
                <span className="text-[#E8B24C]">3.</span> Purpose of Data Processing
              </h2>
              <p>We process collected data exclusively for the following legitimate business purposes:</p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mt-3">
                <li className="p-3 rounded-lg bg-neutral-950 border border-neutral-800/80 flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8B24C] mt-2 shrink-0" />
                  <span><strong>Account Authentication:</strong> Verifying identities and maintaining secure user accounts.</span>
                </li>
                <li className="p-3 rounded-lg bg-neutral-950 border border-neutral-800/80 flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8B24C] mt-2 shrink-0" />
                  <span><strong>B2B Networking:</strong> Connecting verified bullion buyers, refiners, and sellers across India.</span>
                </li>
                <li className="p-3 rounded-lg bg-neutral-950 border border-neutral-800/80 flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8B24C] mt-2 shrink-0" />
                  <span><strong>Market Updates:</strong> Delivering real-time gold and silver bullion rates, spot alerts, and deal opportunities.</span>
                </li>
                <li className="p-3 rounded-lg bg-neutral-950 border border-neutral-800/80 flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8B24C] mt-2 shrink-0" />
                  <span><strong>Fraud Prevention:</strong> Detecting fraudulent bids, duplicate entities, spam, and unauthorized activities.</span>
                </li>
                <li className="p-3 rounded-lg bg-neutral-950 border border-neutral-800/80 flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8B24C] mt-2 shrink-0" />
                  <span><strong>Customer Support:</strong> Responding to user feedback, inquiries, and technical issues.</span>
                </li>
                <li className="p-3 rounded-lg bg-neutral-950 border border-neutral-800/80 flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8B24C] mt-2 shrink-0" />
                  <span><strong>Regulatory Compliance:</strong> Complying with Indian financial and information technology regulations.</span>
                </li>
              </ul>
            </section>

            {/* Section 4: Android App Permissions */}
            <section id="app-permissions" className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5 pb-2 border-b border-neutral-800">
                <span className="text-[#E8B24C]">4.</span> Android Application Permissions
              </h2>
              <p>
                In compliance with the <strong>Google Play Developer Distribution Agreement and Policy Guidelines</strong>, below is an explicit disclosure of system permissions requested by the application <code className="px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[#E8B24C] font-mono text-xs">com.bulliongold.bullion</code>:
              </p>

              <div className="overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-950/70 mt-4">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-neutral-900/80 text-neutral-300 uppercase tracking-wider font-semibold border-b border-neutral-800">
                    <tr>
                      <th className="py-3 px-4">Permission Name</th>
                      <th className="py-3 px-4">Purpose & Functional Justification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-900 text-neutral-400">
                    <tr>
                      <td className="py-3 px-4 font-mono text-[#E8B24C] text-xs">INTERNET</td>
                      <td className="py-3 px-4">Required to communicate with secure backend servers, retrieve live bullion prices, synchronize verified deal postings, and send secure trade inquiries.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-[#E8B24C] text-xs">ACCESS_NETWORK_STATE</td>
                      <td className="py-3 px-4">Used to detect current connectivity status, prevent unnecessary failed network requests, and manage offline data caching gracefully.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-[#E8B24C] text-xs">POST_NOTIFICATIONS</td>
                      <td className="py-3 px-4">Used on Android 13+ devices to deliver opt-in critical market rate changes, deal status updates, and trade counterparty inquiries. Users may toggle notifications off anytime in device settings.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-[#E8B24C] text-xs">READ_MEDIA_IMAGES / STORAGE</td>
                      <td className="py-3 px-4">Optional. Requested only when the user voluntarily chooses to upload a business logo, verification document, or product image. We do not access unrelated media.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: Third-Party Services */}
            <section id="third-parties" className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5 pb-2 border-b border-neutral-800">
                <span className="text-[#E8B24C]">5.</span> Third-Party Service Providers
              </h2>
              <p>
                We may utilize reputable third-party infrastructure providers to operate the application safely and reliably. These providers are bound by strict confidentiality and data protection terms:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 text-xs">
                <div className="p-3.5 rounded-lg bg-neutral-900/50 border border-neutral-800">
                  <h4 className="font-bold text-white mb-1">Google Play Services</h4>
                  <p className="text-neutral-400 mb-2">Provides core Android app functionality, licensing, authentication, and in-app updates.</p>
                  <a 
                    href="https://policies.google.com/privacy" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-[#E8B24C] hover:underline"
                  >
                    Google Privacy Policy ↗
                  </a>
                </div>

                <div className="p-3.5 rounded-lg bg-neutral-900/50 border border-neutral-800">
                  <h4 className="font-bold text-white mb-1">Cloud Infrastructure & Security</h4>
                  <p className="text-neutral-400 mb-2">Hosted on Tier-3/4 ISO-certified cloud data centers with TLS 1.3 encryption and DDoS mitigation.</p>
                  <span className="text-neutral-500">Industry-Standard Encryption</span>
                </div>
              </div>
            </section>

            {/* Section 6: Information Sharing & Disclosure */}
            <section id="data-sharing" className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5 pb-2 border-b border-neutral-800">
                <span className="text-[#E8B24C]">6.</span> Information Sharing & Disclosure
              </h2>
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-sm">
                <strong>Our Strict Promise:</strong> Mintaura Bullion <u>does not sell, rent, monetize, or trade</u> your personal or business data to data brokers, third-party advertising companies, or unrelated commercial organizations.
              </div>
              <p className="mt-3">
                Your data is only disclosed under the following controlled circumstances:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-300">
                <li>
                  <strong>User-Initiated B2B Connections:</strong> When you express interest in a bullion listing, respond to an offer, or message a counterparty, relevant business details (such as your business name and city) are visible to that participant to facilitate direct trade conversations.
                </li>
                <li>
                  <strong>Legal & Law Enforcement Obligations:</strong> We may disclose data if legally required by valid judicial court orders, governmental requests, law enforcement bodies in India, or to enforce our platform terms and protect the safety of users.
                </li>
                <li>
                  <strong>Corporate Transactions:</strong> In the event of a merger, acquisition, or sale of company assets, user data may be transferred subject to the same privacy commitments outlined here.
                </li>
              </ul>
            </section>

            {/* Section 7: Data Retention & Account/Data Deletion (CRUCIAL FOR GOOGLE PLAY) */}
            <section id="retention-deletion" className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5 pb-2 border-b border-neutral-800">
                <span className="text-[#E8B24C]">7.</span> Data Retention & User Data Deletion Request Protocol
              </h2>
              <p>
                In accordance with <strong>Google Play User Data Policies</strong> and data protection regulations, users have full autonomy over their personal information, including the right to request the permanent deletion of their account and all associated records.
              </p>

              <div className="p-5 rounded-xl bg-neutral-900 border border-[#E8B24C]/40 relative overflow-hidden">
                <div className="flex items-center gap-2.5 text-[#E8B24C] font-bold text-base mb-3">
                  <Trash2 size={18} />
                  <span>How to Request Account & Data Deletion</span>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    You do not need to keep the app installed to delete your account. You can use our dedicated web request form or follow the manual email instructions below:
                  </p>
                  <a
                    href="/delete-account"
                    onClick={(e) => {
                      if (onNavigateToDeleteAccount) {
                        e.preventDefault();
                        onNavigateToDeleteAccount();
                      }
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600/20 border border-red-500/40 text-red-300 hover:text-white hover:bg-red-600/30 text-xs font-semibold shrink-0 transition-all"
                  >
                    <Trash2 size={13} />
                    <span>Dedicated Deletion Page →</span>
                  </a>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-neutral-950 border border-neutral-800">
                    <span className="w-5 h-5 rounded-full bg-[#E8B24C]/20 text-[#E8B24C] font-bold flex items-center justify-center shrink-0 text-xs">
                      1
                    </span>
                    <div>
                      <strong className="text-white block mb-0.5">Send an Email Request</strong>
                      <span>From your registered email address, send an email to:</span>
                      <a 
                        href="mailto:mintaurabullion@gmail.com?subject=Account%20and%20Data%20Deletion%20Request%20-%20com.bulliongold.bullion&body=Hello%20Mintaura%20Team%2C%0A%0APlease%20permanently%20delete%20my%20account%20and%20all%20associated%20personal%20data%20from%20com.bulliongold.bullion.%0A%0ARegistered%20Phone%20Number%3A%20%0ARegistered%20Business%20Name%3A%20%0A%0AThank%20you."
                        className="block mt-1 font-mono text-[#E8B24C] font-bold hover:underline"
                      >
                        mintaurabullion@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-neutral-950 border border-neutral-800">
                    <span className="w-5 h-5 rounded-full bg-[#E8B24C]/20 text-[#E8B24C] font-bold flex items-center justify-center shrink-0 text-xs">
                      2
                    </span>
                    <div>
                      <strong className="text-white block mb-0.5">Specify Application Details</strong>
                      <span>Include the Subject Line: <code className="text-[#E8B24C] font-mono">Account Deletion Request - com.bulliongold.bullion</code> and mention your registered phone number or business name.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-neutral-950 border border-neutral-800">
                    <span className="w-5 h-5 rounded-full bg-[#E8B24C]/20 text-[#E8B24C] font-bold flex items-center justify-center shrink-0 text-xs">
                      3
                    </span>
                    <div>
                      <strong className="text-white block mb-0.5">Turnaround & Confirmation</strong>
                      <span>Upon verifying your request, your account credentials, profile details, trade history, and KYC uploads will be permanently and irreversibly purged from our active databases within <strong>30 calendar days</strong>. A written confirmation email will be issued once the deletion is finalized.</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-800 text-[11px] text-neutral-400">
                  <em>Note: Financial transaction logs or taxation records may be archived solely where mandated by statutory tax and accounting laws of India, after which they are destroyed.</em>
                </div>
              </div>
            </section>

            {/* Section 8: Security Measures */}
            <section id="security" className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5 pb-2 border-b border-neutral-800">
                <span className="text-[#E8B24C]">8.</span> Data Security Safeguards
              </h2>
              <p>
                We employ institutional-grade physical, technical, and administrative controls to protect your data against unauthorized access, loss, or alteration:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3 text-xs">
                <div className="p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800">
                  <Lock size={16} className="text-[#E8B24C] mb-2" />
                  <strong className="text-white block mb-1">Encrypted in Transit</strong>
                  <span className="text-neutral-400">All data transmitted between the Android app and servers is encrypted via TLS 1.3 / HTTPS.</span>
                </div>
                <div className="p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800">
                  <Database size={16} className="text-[#E8B24C] mb-2" />
                  <strong className="text-white block mb-1">Encrypted at Rest</strong>
                  <span className="text-neutral-400">Sensitive credentials and database partitions use AES-256 standard encryption algorithms.</span>
                </div>
                <div className="p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800">
                  <Eye size={16} className="text-[#E8B24C] mb-2" />
                  <strong className="text-white block mb-1">Restricted Access</strong>
                  <span className="text-neutral-400">Strict role-based least-privilege access rules ensure only authorized staff can manage infrastructure.</span>
                </div>
              </div>
            </section>

            {/* Section 9: Children's Privacy */}
            <section id="children" className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5 pb-2 border-b border-neutral-800">
                <span className="text-[#E8B24C]">9.</span> Children's Privacy
              </h2>
              <p>
                Mintaura is strictly an enterprise B2B platform intended solely for adult commercial bullion traders, businesses, and institutional professionals. We do not knowingly market to or solicit data from persons under the age of 18. If we discover that a minor has provided us with personal information, we immediately purge the data from our servers.
              </p>
            </section>

            {/* Section 10: Legal Compliance & Grievance */}
            <section id="compliance-grievance" className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5 pb-2 border-b border-neutral-800">
                <span className="text-[#E8B24C]">10.</span> Legal Compliance & Grievance Redressal
              </h2>
              <p>
                This policy is drafted in accordance with the <strong>Information Technology Act, 2000</strong>, the <strong>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</strong>, and the <strong>Digital Personal Data Protection Act, 2023</strong> (India).
              </p>
              
              <div className="p-5 rounded-xl bg-neutral-900/80 border border-neutral-800 mt-4 text-sm">
                <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                  <Mail size={16} className="text-[#E8B24C]" />
                  Grievance Officer & Official Contact
                </h3>
                <p className="text-neutral-400 mb-4">
                  For privacy queries, complaints, correction of personal data, or exercising your rights under Indian privacy laws, please address correspondence to our Grievance Officer:
                </p>
                <div className="space-y-1 text-xs text-neutral-300">
                  <p><strong className="text-white">Organization:</strong> Mintaura Bullion</p>
                  <p><strong className="text-white">Application Package:</strong> <span className="font-mono text-[#E8B24C]">com.bulliongold.bullion</span></p>
                  <p>
                    <strong className="text-white">Email Address:</strong>{' '}
                    <a href="mailto:mintaurabullion@gmail.com" className="text-[#E8B24C] hover:underline font-mono">
                      mintaurabullion@gmail.com
                    </a>
                  </p>
                  <p><strong className="text-white">Response Turnaround:</strong> Within 48 hours for acknowledgment; final resolution within 30 days.</p>
                  <p><strong className="text-white">Jurisdiction:</strong> India</p>
                </div>
              </div>
            </section>

            {/* Final Notification on Policy Revisions */}
            <section className="pt-6 border-t border-neutral-900 text-xs text-neutral-500">
              <p>
                We may periodically update this Privacy Policy to reflect platform improvements or statutory changes. Any modifications will be posted here with an updated "Last Updated" timestamp. We encourage users to review this page periodically.
              </p>
            </section>

          </article>

        </div>
      </main>

    </div>
  );
};
