import React, { useState } from 'react';
import './ProblemStatement.css';

const statements = [
  {
    id: 1,
    title: 'AI for Social Good',
    summary: 'Build solutions that leverage AI to address social challenges.',
    details: 'Full info: Use AI to solve problems in healthcare, education, environment, etc. Consider ethical implications and scalability.'
  },
  {
    id: 2,
    title: 'Smart City Solutions',
    summary: 'Innovate for smarter, safer, and more sustainable cities.',
    details: 'Full info: Develop IoT, data analytics, or automation for urban management, traffic, waste, or safety.'
  },
  // Add more statements as needed
];

function ProblemStatement() {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="problem-section px-4 py-8 md:py-16" id="problem-statements">
      <h2 className="font-brotherhoops text-3xl md:text-5xl text-center mb-8">Problem Statements</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {statements.map((s) => (
          <div
            key={s.id}
            className="problem-card bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setOpenId(s.id)}
          >
            <h3 className="font-bold text-xl mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.summary}</p>
          </div>
        ))}
      </div>
      {openId && (
        <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="modal-content bg-white rounded-lg p-8 max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
              onClick={() => setOpenId(null)}
            >&#10005;</button>
            <h3 className="font-bold text-2xl mb-4">{statements.find(s => s.id === openId).title}</h3>
            <p>{statements.find(s => s.id === openId).details}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProblemStatement;
