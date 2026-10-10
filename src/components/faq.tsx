'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
const questions = [
  [
    'What services does ZENX offer?',
    'ZENX offers logistics and transport, delivery operations, workforce, security, hub management, warehousing and advisory services. Explore the services directory to find a suitable enquiry path.',
  ],
  [
    'How can I discuss a business requirement?',
    'Contact the ZENX team by email or phone. The enquiry form on this demo shows the proposed experience, but does not send a real message.',
  ],
  [
    'Is service available in my city?',
    'Availability depends on your location and requirement. Please contact the team to discuss current support. The network illustration represents a connected vision, rather than verified active coverage.',
  ],
  [
    'How can I join as a rider or recruiter?',
    'Choose your role on the Work With Us page. The registration screens demonstrate the proposed application flow. Contact ZENX for current eligibility and application requirements.',
  ],
  [
    'Can I request manpower and transport together?',
    'Yes, you can discuss both requirements with the team. Share the locations, roles and operational needs so a suitable approach can be explored.',
  ],
];
export function FAQ() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <div className="faq-list">
      {questions.map(([q, a], i) => (
        <div className={`faq-item ${active === i ? 'expanded' : ''}`} key={q}>
          <h3>
            <button
              aria-expanded={active === i}
              aria-controls={`faq-answer-${i}`}
              onClick={() => setActive(active === i ? null : i)}
            >
              {q}
              {active === i ? <Minus size={19} /> : <Plus size={19} />}
            </button>
          </h3>
          <div id={`faq-answer-${i}`} className="faq-answer" hidden={active !== i}>
            <p>{a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
