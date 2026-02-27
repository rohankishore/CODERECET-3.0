import React, { useState } from 'react';
import '../components/ProblemStatement.css';

const statements = [
  // ...same statements as ProblemStatement.jsx...
];

function AllStatementsPage() {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="problem-section px-6 py-12 md:py-20 bg-[#1a1a1a] min-h-screen" id="all-statements">
      <div className="mb-12 leading-none">
        <span className="font-hoops_brother text-custom-secondary text-[36px] md:text-[47px] block">OUR</span>
        <span className="font-thomeo text-white text-[56px] md:text-[76px] block -mt-2">STATEMENTS</span>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-[1440px] mx-auto">
        {statements.map((s) => (
          <div
            key={s.id}
            className="problem-card glassy-card bg-gradient-to-br from-[#232323] to-[#1a1a1a] border border-custom-secondary rounded-xl shadow-lg p-8 md:p-10 cursor-pointer hover:scale-105 transition-transform min-h-[120px] flex flex-col justify-center"
            onClick={() => setOpenId(s.id)}
          >
            <h3 className="font-bold text-[22px] md:text-[26px] mb-2 text-white">{s.title}</h3>
            <p className="text-custom-secondary text-[16px] md:text-[18px]">{s.summary}</p>
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
            <h3 className="font-bold text-[22px] md:text-[26px] mb-4 text-custom-black">{statements.find(s => s.id === openId).title}</h3>
            <p className="text-custom-secondary text-[16px] md:text-[18px]">{statements.find(s => s.id === openId).details}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default AllStatementsPage;
