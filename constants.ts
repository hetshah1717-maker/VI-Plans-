import { Category, Tactic, ScriptScenario, SprintDay } from './types';

export const TACTICS: Tactic[] = [
  {
    id: 't1',
    title: 'The "Control Paradox" Method',
    category: Category.PSYCHOLOGY,
    description: "Don't sell plans, sell freedom. Prepaid users hate commitment but love control. Reframe Postpaid as the ultimate control tool.",
    actionPoints: [
      "Phrase: 'No more running to recharge shops at midnight.'",
      "Show them how to set a 'Hard Credit Limit' in the Vi App (Control).",
      "Use the 'Student vs. Professional' status framing."
    ],
    icon: 'brain'
  },
  {
    id: 't2',
    title: 'The "Invisible Cost" Revelation',
    category: Category.PSYCHOLOGY,
    description: "The 28-Day Scam. Prepaid users pay for 13 months a year. Postpaid users pay for 12.",
    actionPoints: [
      "Do a 60-second Spend Audit: Check their last 3 recharge SMS.",
      "Calculate their daily cost vs. Postpaid daily cost.",
      "Show them the '13th Month Tax' they are paying unknowingly."
    ],
    icon: 'calculator'
  },
  {
    id: 't3',
    title: 'Google Maps Weaponization',
    category: Category.DIGITAL,
    description: "Rename your listing to dominate local search. Ahmedabadis search for trust and status.",
    actionPoints: [
      "Rename listing: 'Vi Store & VIP Number Shop [Area Name]'.",
      "Post weekly photos of 'VIP Numbers' (ending in 786, 999).",
      "Post 'Before/After' bill comparisons (anonymized)."
    ],
    icon: 'map'
  },
  {
    id: 't4',
    title: 'WhatsApp Business Engine',
    category: Category.DIGITAL,
    description: "Low cost, high control. Don't spam, provide value.",
    actionPoints: [
      "Catalog: Only 3 plans (Good/Better/Best).",
      "Status Sniping: Post one VIP number image a day.",
      "QR Codes everywhere: 'Scan to check your credit limit eligibility'."
    ],
    icon: 'message-circle'
  },
  {
    id: 't5',
    title: 'Corporate & SME Raids',
    category: Category.TRADITIONAL,
    description: "Target the 'Vepari' (Trader) mindset. Sell tax benefits.",
    actionPoints: [
      "Ask: 'Are you claiming 18% GST input credit on staff bills?'",
      "Pitch: One consolidated bill = One GST invoice.",
      "Target: IT parks, textile units, diamond polishers."
    ],
    icon: 'briefcase'
  },
  {
    id: 't6',
    title: 'The "Family Trap"',
    category: Category.TRADITIONAL,
    description: "Consolidate the household under one 'Patriarch' bill.",
    actionPoints: [
      "Find the person paying for everyone's recharges.",
      "Pitch: '4 recharges = 4 headaches. Switch to 1 bill.'",
      "Offer accessory credit for every additional family member added."
    ],
    icon: 'users'
  },
  {
    id: 't7',
    title: 'The "Bill Shock" Therapy',
    category: Category.GUERRILLA,
    description: "Aggressive visual comparison of value.",
    actionPoints: [
      "Collect last 6 months of prepaid history.",
      "Create a 'Postpaid vs Prepaid' chart.",
      "Show lost data (Prepaid data dies, Postpaid rolls over)."
    ],
    icon: 'zap'
  },
  {
    id: 't8',
    title: 'Priority Escalation Bluff',
    category: Category.GUERRILLA,
    description: "Ethically grey, highly effective status play for complainers.",
    actionPoints: [
      "When a prepaid user complains about network: 'Prepaid is general queue.'",
      "Say: 'Postpaid accounts are Red Priority. I can only escalate billing accounts.'",
      "Create a physical 'Priority Counter' in the store."
    ],
    icon: 'shield-alert'
  },
  {
    id: 't9',
    title: 'The Address Proof Play',
    category: Category.SEGMENTS,
    description: "For migrants, students, and new workers in Ahmedabad.",
    actionPoints: [
      "Problem: No valid address proof for banks/loans.",
      "Solution: Postpaid bill becomes valid Govt proof after 2 months.",
      "Pitch: 'Build your paper trail.'"
    ],
    icon: 'file-text'
  },
  {
    id: 't10',
    title: 'Night Owl & Data Hoarder',
    category: Category.SEGMENTS,
    description: "Targeting the heavy data user/youth.",
    actionPoints: [
      "Pitch: 'Jio cuts you off. Vi gives unlimited 12AM-6AM.'",
      "Rollover: 'Why let the company eat the data you paid for?'",
      "Show the 'Data Bank' concept."
    ],
    icon: 'moon'
  }
];

export const SCRIPTS: ScriptScenario[] = [
  {
    id: 's1',
    title: 'The Disruption Opener',
    customerSay: "I just want a 299 recharge. Postpaid is too expensive.",
    yourRebuttal: "I can do the 299, but you are effectively paying a penalty on that plan. That plan is 28 days. You recharge 13 times a year. Why pay the '13th Month Tax'?",
    technique: "Disrupt & Agitate"
  },
  {
    id: 's2',
    title: 'The Control Objection',
    customerSay: "I want control. In postpaid, the bill comes as a shock.",
    yourRebuttal: "That's the old way. Look at this (Show App). We set a 'Hard Credit Limit' at ₹400. If you cross it, it stops. You have MORE control here because you set the limit, not the company.",
    technique: "Flip the Narrative"
  },
  {
    id: 's3',
    title: 'The Credit Score Hook',
    customerSay: "I don't need a bill commitment.",
    yourRebuttal: "Are you planning to buy a car or house in the next 2 years? Prepaid does nothing for you. A Postpaid payment history boosts your CIBIL score. Why waste the credit history?",
    technique: "Future Benefit/Logic"
  },
  {
    id: 's4',
    title: 'The Emergency Angle',
    customerSay: "I'll think about it.",
    yourRebuttal: "Sir, when was the last time your net pack ended during a payment failure? Postpaid is your 'Emergency Lifeline'. It works at 11 PM when servers are down. Don't risk disconnection.",
    technique: "Safety & Reliability"
  },
  {
    id: 's5',
    title: 'The Network Doubt',
    customerSay: "Vi network is weak in my area.",
    yourRebuttal: "Test it right now. If it disappoints in 7 days, we help you port back—no hard feelings. But right now, you're missing out on the 12AM-6AM unlimited data that Jio doesn't give.",
    technique: "Risk Reversal"
  }
];

export const SPRINT_PLAN: SprintDay[] = [
  {
    day: "Day 1-2",
    title: "Build The Assets",
    tasks: [
      "Overhaul GMB: Rename to 'Vi Store & VIP Number Shop'.",
      "Print 'No-Surprise Bill' guarantee cards.",
      "Create the 'Prepaid vs Postpaid' comparison one-pager.",
      "Setup WhatsApp Business Catalog (3 Plans only)."
    ]
  },
  {
    day: "Day 3-4",
    title: "Partner Pipeline",
    tasks: [
      "Visit 5 nearby CAs: Pitch GST Input Credit benefit.",
      "Visit 3 Real Estate agents: Bundle SIM with new home keys.",
      "Visit 5 Recharge Shops: Offer commission for postpaid leads they can't convert.",
      "Place 'Emergency Ready' posters at local clinics."
    ]
  },
  {
    day: "Day 5-6",
    title: "Society Activation",
    tasks: [
      "Book 2 weekend lobby slots in nearby societies.",
      "Prepare 'Spend Audit' kits (Calculator + Notepad).",
      "Run 'Family Pack Hour' (5-8 PM) with accessory freebies."
    ]
  },
  {
    day: "Day 7-10",
    title: "No-Deposit Blitz",
    tasks: [
      "Run 'No-Deposit Slots' promo (Limit to 20 slots).",
      "Update Whiteboard daily: '4 Slots Left'.",
      "Focus purely on walk-ins and service calls."
    ]
  },
  {
    day: "Day 11-14",
    title: "Optimization",
    tasks: [
      "Kill channels with high CPA.",
      "Double down on Partners sending leads.",
      "Call Day 1-5 converts: 'Bill cap confirmed? Any issues?' -> Ask for referral."
    ]
  }
];
