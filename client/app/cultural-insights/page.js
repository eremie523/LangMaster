import Navbar from "@/components/Navbar";
import Culturalinsights from '@/components/Culturalinsights';
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Lessons | Lang Master',
  description: 'Browse and select lessons in Yoruba, Igbo, and Hausa.',
};

export default function LessonsPage() {
  return (
    <main>
          <Navbar />
      <Culturalinsights />
       <Footer />
    </main>
  );
}
