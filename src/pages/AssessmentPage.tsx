import { Helmet } from 'react-helmet-async';
import { AssessmentContainer } from '@/components/assessment/AssessmentContainer';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function AssessmentPage() {
  return (
    <>
      <Helmet>
        <title>Free Pet Emergency Assessment | Pet Care Malaysia</title>
        <meta
          name="description"
          content="Get instant triage recommendations for your pet's emergency. Our free assessment tool uses certified vet protocols to help you determine the urgency of your pet's condition."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://petcaremalaysia.lovable.app/assessment" />
      </Helmet>
      <Header />
      <main className="min-h-screen">
        <AssessmentContainer />
      </main>
      <Footer />
    </>
  );
}
