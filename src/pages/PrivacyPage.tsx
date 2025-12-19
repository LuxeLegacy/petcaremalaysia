import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const PrivacyPage = () => {
  const { language } = useLanguage();

  return (
    <>
      <Helmet>
        <title>Privacy Policy | PetCare Malaysia</title>
        <meta name="description" content="Privacy Policy for PetCare Malaysia - Learn how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://petcaremalaysia.com/privacy" />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-background">
        <div className="container py-12 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-foreground font-medium">Last updated: December 19, 2025</p>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">1. Introduction</h2>
              <p>
                PetCare Malaysia ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website petcaremalaysia.com.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <h3 className="text-lg font-medium text-foreground">Personal Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and email address (if you contact us)</li>
                <li>Location data (to show relevant services near you)</li>
                <li>Device and browser information</li>
              </ul>
              <h3 className="text-lg font-medium text-foreground">Automatically Collected Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address and approximate location</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on site</li>
                <li>Referring website addresses</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">3. How We Use Your Information</h2>
              <p>We use collected information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and maintain our services</li>
                <li>Show you relevant pet care services in your area</li>
                <li>Improve our website and user experience</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Analyze website traffic and usage patterns</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">4. Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings.
              </p>
              <p>Types of cookies we use:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Preference cookies:</strong> Remember your language and location preferences</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">5. Data Sharing</h2>
              <p>We do not sell your personal information. We may share data with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service providers who assist in website operations</li>
                <li>Analytics partners to understand usage patterns</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">6. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">7. Your Rights</h2>
              <p>Under the Personal Data Protection Act 2010 (PDPA), you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate personal data</li>
                <li>Withdraw consent for data processing</li>
                <li>Request deletion of your data</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">8. Children's Privacy</h2>
              <p>
                Our website is not intended for children under 13. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">10. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or wish to exercise your data rights, contact us at:
              </p>
              <p className="text-foreground">
                Email: privacy@petcaremalaysia.com
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default PrivacyPage;
