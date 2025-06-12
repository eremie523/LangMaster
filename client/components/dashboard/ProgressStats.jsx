const ProgressStats = () => {
  const stats = [
    { title: 'Lesson Completed', value: '2 lessons' },
    { title: 'Vocabulary Mastered', value: '15 words' },
    { title: 'Day Streak', value: '3 days' },
    { title: 'Experience Points', value: '120 XP' },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-[#1a6651] mb-6">Your Progress</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="bg-white p-5 rounded-lg shadow-sm border border-gray-100"
          >
            <h3 className="text-gray-600 text-sm font-medium">{stat.title}</h3>
            <p className="text-xl font-bold text-[#1a6651] mt-1">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressStats;