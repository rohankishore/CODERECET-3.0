import React, { useState } from 'react';
import './ProblemStatement.css';

const statements = [
  {
    id: 1,
    title: 'Real-Time YOLO11 Ops-Safety Challenge',
    summary: 'Create a safety monitoring solution that performs reliable detection and alerting from video streams without relying on GPU acceleration.',
    details: 'Create a safety monitoring solution that performs reliable detection and alerting from video streams without relying on GPU acceleration.'
  },
  {
    id: 2,
    title: 'Low-Latency Video Monitoring',
    summary: 'Design a system that delivers live camera feeds to users in real time with minimal delay, even under unstable network conditions.',
    details: 'Design a system that delivers live camera feeds to users in real time with minimal delay, even under unstable network conditions.'
  },
  {
    id: 3,
    title: 'Autonomous Drone based Damage mapping',
    summary: 'Build a system that analyzes aerial imagery and generates a prioritized damage heatmap to support emergency response decisions.',
    details: 'Build a system that analyzes aerial imagery and generates a prioritized damage heatmap to support emergency response decisions.'
  },
  {
    id: 4,
    title: 'Fair-Queue GPU Load Balancer',
    summary: 'Build an inference pipeline that processes multiple video streams on a single GPU while staying fast, stable, and fair across streams.',
    details: 'Build an inference pipeline that processes multiple video streams on a single GPU while staying fast, stable, and fair across streams.'
  },
  {
    id: 5,
    title: 'Proximity-based hazard detection',
    summary: 'Use computer vision to monitor proximity around heavy equipment and flag hazardous zones in real time.',
    details: 'Use computer vision to monitor proximity around heavy equipment and flag hazardous zones in real time.'
  },
  {
    id: 6,
    title: 'Visual UI Navigation Agent for Operational Platforms',
    summary: 'Build an agent that acts as an intelligent layer over the platform, understanding screens, guiding users through workflows, and improving accessibility by design.',
    details: 'Build an agent that acts as an intelligent layer over the platform, understanding screens, guiding users through workflows, and improving accessibility by design.'
  },
  {
    id: 7,
    title: 'Build the Brain of a Space Data Center',
    summary: 'A satellite collects data for hours but can only contact Earth briefly. In this disconnected environment, build an autonomous system that securely stores data, survives failures, and intelligently prioritizes what must be transmitted when the communication window opens.',
    details: 'A satellite collects data for hours but can only contact Earth briefly. In this disconnected environment, build an autonomous system that securely stores data, survives failures, and intelligently prioritizes what must be transmitted when the communication window opens.'
  },
  {
    id: 8,
    title: 'Energy-Adaptive Edge Compute Controller',
    summary: 'Design a scheduler that predicts power availability, prevents battery depletion, and aligns compute tasks with optimal energy windows.',
    details: 'Design a scheduler that predicts power availability, prevents battery depletion, and aligns compute tasks with optimal energy windows.'
  },
  {
    id: 9,
    title: 'Space Mesh Networking',
    summary: 'Build a system that reliably transfers data across multiple nodes despite frequent connection drops, prioritizing critical information first.',
    details: 'Build a system that reliably transfers data across multiple nodes despite frequent connection drops, prioritizing critical information first.'
  },
  {
    id: 10,
    title: 'Offline Voice Assistant with domain knowledge for helping Field Technicians',
    summary: 'Design an end-to-end speech → retrieval → response pipeline that runs entirely offline and works with complex manuals and noisy environments.',
    details: 'Design an end-to-end speech → retrieval → response pipeline that runs entirely offline and works with complex manuals and noisy environments.'
  },
  {
    id: 11,
    title: 'Federated Learning for Edge Anomaly Detection',
    summary: 'Train an anomaly detection model across multiple edge sites without sharing raw data—only model updates.',
    details: 'Train an anomaly detection model across multiple edge sites without sharing raw data—only model updates.'
  },
  {
    id: 12,
    title: 'AI Field Troubleshooting Copilot — Remote Site Diagnostic Assistant',
    summary: 'Design a multimodal AI system that interprets user descriptions and photos, provides step-by-step troubleshooting, and escalates with structured diagnostic reports when needed.',
    details: 'Design a multimodal AI system that interprets user descriptions and photos, provides step-by-step troubleshooting, and escalates with structured diagnostic reports when needed.'
  },
  {
    id: 13,
    title: 'AI-Generated Daily Operations Briefing — "What Happened, What Matters, What To Do"',
    summary: 'Design an AI system that detects patterns across alerts, device health, usage, and tickets — and converts them into a role-based daily briefing.',
    details: 'Design an AI system that detects patterns across alerts, device health, usage, and tickets — and converts them into a role-based daily briefing.'
  },
  {
    id: 14,
    title: 'Satellite Network Anomaly Detection',
    summary: 'Create an intelligent monitor that identifies real connectivity problems and suppresses false alarms in dynamic satellite networks. The system must automatically distinguish real faults from normal behavior, prioritize actionable alerts, and provide clear explanations instead of raw metrics.',
    details: 'Create an intelligent monitor that identifies real connectivity problems and suppresses false alarms in dynamic satellite networks. The system must automatically distinguish real faults from normal behavior, prioritize actionable alerts, and provide clear explanations instead of raw metrics.'
  },
  {
    id: 15,
    title: 'Intelligent Multi-WAN Routing',
    summary: 'Build a system that selects the optimal network link in real time based on cost, performance, and location context.',
    details: 'Build a system that selects the optimal network link in real time based on cost, performance, and location context.'
  }
];

function ProblemStatement() {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="problem-section px-6 py-12 md:py-20 bg-[#f8fafc]" id="problem-statements">
      <h2 className="font-brotherhoops text-[48px] md:text-[64px] text-left mb-12 uppercase">
        <span className="text-custom-secondary">PROBLEM</span><br />
        <span className="font-thomeo text-white block text-[44px] md:text-[60px] mt-2">STATEMENTS</span>
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-[1440px] mx-auto">
        {statements.map((s) => (
          <div
            key={s.id}
            className="problem-card bg-white rounded-xl shadow-lg p-8 md:p-10 cursor-pointer hover:scale-105 transition-transform min-h-[120px] flex flex-col justify-center"
            onClick={() => setOpenId(s.id)}
          >
            <h3 className="font-bold text-[22px] md:text-[26px] mb-2 text-custom-black">{s.title}</h3>
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

export default ProblemStatement;
