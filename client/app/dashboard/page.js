import Navbar from "@/components/Navbar";
import ProgressCard from "@/components/ProgressCard";
import LessonCard from "@/components/LessonCard";
import Footer from "@/components/Footer";
import PracticeSection from '@/components/PracticeSection';



export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#faf6f1] text-gray-800">
      <Navbar />
      

      
        <main className="px-10 md:-mx-[-50px] py-10 md:px-0">
        <h1 className="text-3xl font-bold mb-1">Welcome back, <span className="text-green-800">Guest User!</span></h1>
        <p className="text-gray-600 mb-8">Continue your yoruba learning journey</p>

        <h2 className="text-xl font-semibold mb-4">Your Progress</h2>
        <div className="flex flex-wrap gap-6">
          <ProgressCard title="Lessons Completed" value={2} unit="lessons" color="#116849" progress={40} />
          <ProgressCard title="Vocabulary Mastered" value={15} unit="words" color="#FAB60F" progress={70} />
          <ProgressCard title="Day Streak" value={3} unit="days" color="#9C2B3A" progress={60} />
          <ProgressCard title="Experience Points" value={120} unit="XP" color="#4B3B2D" progress={80} />
        </div>
        

{/* RECOMMENDED LESSONS SECTION */}
<section className="mt-12 px-1">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-xl font-semibold">Recommended Lessons</h2>
    <a href="#" className="text-sm text-green-800 font-medium hover:underline flex items-center gap-1">
      View All <span>&rarr;</span>
    </a>
  </div>

  <div className="flex flex-wrap gap-6">
    <LessonCard
      category="Conversation"
      color="#9C2B3A"
      title="Greetings and Introductions"
      description="Learn basic Yoruba greetings and how to introduce yourself."
      duration={15}
      image="/nig.jpg"
    />

    <LessonCard
      category="Vocabulary"
      color="#FAB60F"
      title="Numbers and Counting"
      description="Learn to count from 1-20 in Yoruba and use numbers in conversation."
      duration={20}
      image="/nig.jpg"
    />
  </div>
</section>
<PracticeSection />
      </main>
      <Footer />
    </div>
    
  );
}
