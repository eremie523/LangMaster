import Navbar from "@/components/Navbar";
import Conversation from '@/components/Conversation';
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Conversations | Lang Master',
  description: 'Practice freely with your AI tutor',
};

export default function LessonsPage() {
  return (
    <main>
          <Navbar />
      <Conversation />
       <Footer />
    </main>
  );
}
