import AssessmentCardDown from './AssessmentCardDown';

const AssessmentCardDown = [
  {
    title: 'Quizzes',
    items: [
      { label: 'Practice', buttonText: 'Practice', icon: null }, // Add appropriate icon if needed
    ],
  },
  {
    title: 'Coding',
    items: [
      { label: 'Coding Problems', buttonText: 'Start Now', icon: null },
      { label: '100 Days DSA Sprint', buttonText: 'Start Now', icon: null },
      { label: 'Coding Assessments', buttonText: 'Start Now', icon: null },
      { label: 'Coding Trivia', buttonText: 'Start Now', icon: null },
    ],
  },
  {
    title: 'Case Study',
    items: [
      { label: 'Practice', buttonText: 'Practice', icon: null },
    ],
  },
  {
    title: 'Product teardown',
    items: [
      { label: 'Practice', buttonText: 'Practice', icon: null },
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">All Assessments</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AssessmentCardDown.map((AssessmentCardDown, index) => (
            <AssessmentCardDown key={index} title={AssessmentCardDown.title} items={AssessmentCardDown.items} />
          ))}
        </div>
      </div>
    </div>
  );
}
