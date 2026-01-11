import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { useLanguage } from '@/contexts/LanguageContext';

const DisclaimerPage = () => {
  const { language } = useLanguage();

  return (
    <>
      <SEOHead
        title="Disclaimer | PetCare Malaysia"
        description="Disclaimer for PetCare Malaysia - Important information about our website content and services."
        path="/disclaimer"
        language={language}
      />
      
      <Header />
      
      <main className="min-h-screen bg-background">
        <div className="container py-12 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Disclaimer</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-foreground font-medium">Last updated: December 19, 2025</p>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">General Information Disclaimer</h2>
              <p>
                The information provided on PetCare Malaysia (petcaremalaysia.com) is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Not Veterinary Advice</h2>
              <p>
                <strong className="text-destructive">IMPORTANT:</strong> The content on this website is not intended to be a substitute for professional veterinary advice, diagnosis, or treatment. Always seek the advice of a qualified veterinarian with any questions you may have regarding your pet's health condition.
              </p>
              <p>
                Never disregard professional veterinary advice or delay seeking it because of something you have read on this website. If you think your pet may have a medical emergency, call your veterinarian or emergency animal hospital immediately.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Third-Party Listings</h2>
              <p>
                PetCare Malaysia provides listings and information about veterinary clinics, pet shops, groomers, and other pet service providers. These listings are provided as a convenience to our users.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We do not endorse, recommend, or guarantee any specific service provider listed on our website</li>
                <li>We are not responsible for the quality, safety, or legality of services provided by third parties</li>
                <li>Business information (hours, prices, services) may change without notice</li>
                <li>Users should independently verify all information before using any service</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">External Links Disclaimer</h2>
              <p>
                Our website may contain links to external websites that are not operated by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Emergency Situations</h2>
              <p className="text-destructive font-medium">
                In case of a pet emergency, please contact your nearest emergency veterinary clinic immediately or call the emergency hotline. Do not rely solely on information from this website in emergency situations.
              </p>
              <p>
                While we provide emergency clinic listings and hotline numbers, response times and availability may vary. Always have your regular veterinarian's emergency contact information readily available.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Limitation of Liability</h2>
              <p>
                Under no circumstances shall PetCare Malaysia be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Loss of profits, goodwill, use, data, or other intangible losses</li>
                <li>Injury or harm to pets or persons</li>
                <li>Damages resulting from the use or inability to use our services</li>
                <li>Damages resulting from any goods or services obtained through our website</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Accuracy of Information</h2>
              <p>
                We strive to keep information on our website accurate and up-to-date. However:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Operating hours and contact details may change</li>
                <li>Service availability may vary</li>
                <li>Prices and fees are subject to change</li>
                <li>Reviews and ratings reflect individual opinions</li>
              </ul>
              <p>
                We recommend contacting service providers directly to confirm current information before visiting.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">User Responsibility</h2>
              <p>
                By using this website, you acknowledge that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You are responsible for evaluating the suitability of any service provider</li>
                <li>You assume all risks associated with using information from this website</li>
                <li>You will verify all critical information independently</li>
                <li>Your use of the website is at your own risk</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Contact Us</h2>
              <p>
                If you have any questions about this Disclaimer, please contact us at:
              </p>
              <p className="text-foreground">
                Email: info@petcaremalaysia.com
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default DisclaimerPage;
