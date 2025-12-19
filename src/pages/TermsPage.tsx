import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const TermsPage = () => {
  const { language } = useLanguage();

  return (
    <>
      <Helmet>
        <title>Terms and Conditions | PetCare Malaysia</title>
        <meta name="description" content="Terms and Conditions for using PetCare Malaysia services and website." />
        <link rel="canonical" href="https://petcaremalaysia.com/terms" />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-background">
        <div className="container py-12 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms and Conditions</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-foreground font-medium">Last updated: December 19, 2025</p>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
              <p>
                By accessing and using PetCare Malaysia (petcaremalaysia.com), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">2. Use of Services</h2>
              <p>
                PetCare Malaysia provides information about veterinary clinics, pet services, and pet care resources in Malaysia. Our services are provided for informational purposes only.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You must be at least 18 years old to use our services</li>
                <li>You agree to use the website only for lawful purposes</li>
                <li>You shall not misuse or attempt to gain unauthorized access to our systems</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">3. Information Accuracy</h2>
              <p>
                While we strive to provide accurate and up-to-date information about veterinary services and pet care providers, we cannot guarantee the accuracy, completeness, or reliability of all information displayed on our website.
              </p>
              <p>
                Users are advised to verify service details, operating hours, and contact information directly with the service providers before visiting.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">4. Third-Party Services</h2>
              <p>
                PetCare Malaysia lists third-party veterinary clinics and pet service providers. We are not responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The quality of services provided by listed businesses</li>
                <li>Any disputes between users and service providers</li>
                <li>The accuracy of information provided by third parties</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">5. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and images, is the property of PetCare Malaysia or its content suppliers and is protected by Malaysian and international copyright laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">6. Limitation of Liability</h2>
              <p>
                PetCare Malaysia shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of our website or services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">7. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on this page.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">8. Governing Law</h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of Malaysia.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">9. Contact Us</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <p className="text-foreground">
                Email: legal@petcaremalaysia.com
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default TermsPage;
