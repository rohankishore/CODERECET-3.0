import React, { useState, useEffect, useRef } from 'react';
import '../components/ProblemStatement.css';

const statements = [
  {
    id: 1,
    title: 'Real-Time YOLO11 Ops-Safety Challenge',
    summary: 'Create a safety monitoring solution that performs reliable detection and alerting from video streams without relying on GPU acceleration.',
    details: 'Create a safety monitoring solution that performs reliable detection and alerting from video streams without relying on GPU acceleration.',
  },
  {
    id: 2,
    title: 'Low-Latency Video Monitoring',
    summary: 'Design a system that delivers live camera feeds to users in real time with minimal delay, even under unstable network conditions.',
    details: 'Design a system that delivers live camera feeds to users in real time with minimal delay, even under unstable network conditions.',
  },
  {
    id: 3,
    title: 'Autonomous Drone based Damage mapping',
    summary: 'Build a system that analyzes aerial imagery and generates a prioritized damage heatmap to support emergency response decisions.',
    details: 'Build a system that analyzes aerial imagery and generates a prioritized damage heatmap to support emergency response decisions.',
  },
  {
    id: 4,
    title: 'Fair-Queue GPU Load Balancer',
    summary: 'Build an inference pipeline that processes multiple video streams on a single GPU while staying fast, stable, and fair across streams.',
    details: 'Build an inference pipeline that processes multiple video streams on a single GPU while staying fast, stable, and fair across streams.',
  },
  {
    id: 5,
    title: 'Proximity-based hazard detection',
    summary: 'Use computer vision to monitor proximity around heavy equipment and flag hazardous zones in real time.',
    details: 'Use computer vision to monitor proximity around heavy equipment and flag hazardous zones in real time.',
  },
  {
    id: 6,
    title: 'Visual UI Navigation Agent for Operational Platforms',
    summary: 'Build an agent that acts as an intelligent layer over the platform, understanding screens, guiding users through workflows, and improving accessibility by design.',
    details: 'Build an agent that acts as an intelligent layer over the platform, understanding screens, guiding users through workflows, and improving accessibility by design.',
  },
  {
    id: 7,
    title: 'Build the Brain of a Space Data Center',
    summary: 'A satellite collects data for hours but can only contact Earth briefly. In this disconnected environment, build an autonomous system that securely stores data, survives failures, and intelligently prioritizes what must be transmitted when the communication window opens.',
    details: 'A satellite collects data for hours but can only contact Earth briefly. In this disconnected environment, build an autonomous system that securely stores data, survives failures, and intelligently prioritizes what must be transmitted when the communication window opens.',
  },
  {
    id: 8,
    title: 'Energy-Adaptive Edge Compute Controller',
    summary: 'Design a scheduler that predicts power availability, prevents battery depletion, and aligns compute tasks with optimal energy windows.',
    details: 'Design a scheduler that predicts power availability, prevents battery depletion, and aligns compute tasks with optimal energy windows.',
  },
  {
    id: 9,
    title: 'Space Mesh Networking',
    summary: 'Build a system that reliably transfers data across multiple nodes despite frequent connection drops, prioritizing critical information first.',
    details: 'Build a system that reliably transfers data across multiple nodes despite frequent connection drops, prioritizing critical information first.',
  },
  {
    id: 10,
    title: 'Offline Voice Assistant with domain knowledge for helping Field Technicians',
    summary: 'Design an end-to-end speech → retrieval → response pipeline that runs entirely offline and works with complex manuals and noisy environments.',
    details: 'Design an end-to-end speech → retrieval → response pipeline that runs entirely offline and works with complex manuals and noisy environments.',
  },
  {
    id: 11,
    title: 'Federated Learning for Edge Anomaly Detection',
    summary: 'Train an anomaly detection model across multiple edge sites without sharing raw data—only model updates.',
    details: 'Train an anomaly detection model across multiple edge sites without sharing raw data—only model updates.',
  },
  {
    id: 12,
    title: 'AI Field Troubleshooting Copilot — Remote Site Diagnostic Assistant',
    summary: 'Design a multimodal AI system that interprets user descriptions and photos, provides step-by-step troubleshooting, and escalates with structured diagnostic reports when needed.',
    details: 'Design a multimodal AI system that interprets user descriptions and photos, provides step-by-step troubleshooting, and escalates with structured diagnostic reports when needed.',
  },
  {
    id: 13,
    title: 'AI-Generated Daily Operations Briefing — "What Happened, What Matters, What To Do"',
    summary: 'Design an AI system that detects patterns across alerts, device health, usage, and tickets — and converts them into a role-based daily briefing.',
    details: 'Design an AI system that detects patterns across alerts, device health, usage, and tickets — and converts them into a role-based daily briefing.',
  },
  {
    id: 14,
    title: 'Satellite Network Anomaly Detection',
    summary: 'Create an intelligent monitor that identifies real connectivity problems and suppresses false alarms in dynamic satellite networks. The system must automatically distinguish real faults from normal behavior, prioritize actionable alerts, and provide clear explanations instead of raw metrics.',
    details: 'Create an intelligent monitor that identifies real connectivity problems and suppresses false alarms in dynamic satellite networks. The system must automatically distinguish real faults from normal behavior, prioritize actionable alerts, and provide clear explanations instead of raw metrics.',
  },
  {
    id: 15,
    title: 'Intelligent Multi-WAN Routing',
    summary: 'Build a system that selects the optimal network link in real time based on cost, performance, and location context.',
    details: 'Build a system that selects the optimal network link in real time based on cost, performance, and location context.',
  },
];

function ProblemStatementCard({ title, summary }) {
  return (
    <div className="w-full mb-6" style={{
      padding: "1.04px",
      borderRadius: "16.63px",
      background: `linear-gradient(155.8deg, rgba(163,163,163,0.5) 0%, rgba(230,248,90,0.5) 10%, rgba(255,255,255,0.375) 45%, rgba(163,163,163,0.5) 75%, rgba(230,248,90,0.5) 100%)`,
      backgroundClip: "padding-box",
      WebkitBackgroundClip: "padding-box",
    }}>
      <div
        className="h-full w-full flex flex-col justify-center p-4 md:p-6"
        style={{
          borderRadius: "15.6px",
          backgroundColor: "#181818",
          backgroundImage:
            "linear-gradient(156.51deg, rgba(250, 250, 250, 0.25) -151.95%, rgba(8, 8, 8, 0.25) 55.32%, rgba(107, 107, 107, 0.25) 202.54%)",
        }}
      >
        <h3 className="font-bold text-[22px] md:text-[26px] mb-2 text-white">{title}</h3>
        <p className="text-custom-secondary text-[16px] md:text-[18px]">{summary}</p>
      </div>
    </div>
  );
}

function AllStatementsPage() {
  const pdfRef = useRef(null);

  useEffect(() => {
  }, []);

  return (
    <section className="problem-section px-0 md:px-6 py-12 md:py-20 bg-[#1a1a1a] min-h-screen flex flex-col items-center justify-center overflow-x-hidden" id="all-statements">
      <div className="mb-12 leading-none text-center px-4">
        <span className="font-hoops_brother text-custom-secondary text-[36px] md:text-[47px] block">PROBLEM</span>
        <span className="font-thomeo text-white text-[56px] md:text-[76px] block -mt-2">STATEMENTS</span>
      </div>
      <div className="w-full max-w-5xl rounded-none md:rounded-2xl shadow-2xl overflow-hidden bg-[#222] p-0 md:p-8 flex flex-col items-center">
        <div className="w-full overflow-hidden">
          <iframe
            ref={pdfRef}
            src="/data/questions/questions.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
            title="Problem Statements PDF"
            className="w-full rounded-none md:rounded-2xl border-0 md:border-4 border-yellow-300 bg-white"
            style={{
              boxShadow: "0 12px 48px rgba(230,248,90,0.18)",
              minHeight: "60vh",
              height: "80vh",
              maxHeight: "90vh",
              width: "100%",
              maxWidth: "100%"
            }}
            frameBorder="0"
          />
        </div>
        <style>{`
          @media (max-width: 768px) {
            .problem-section iframe {
              min-height: 85vh !important;
              height: 85vh !important;
              width: 100% !important;
              max-width: 100% !important;
            }
            .problem-section {
              overflow-x: hidden !important;
              width: 100% !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}

export default AllStatementsPage;
