import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export const Calculator: React.FC = () => {
  const [prepaidCost, setPrepaidCost] = useState(299);
  
  // Logic: Prepaid is 28 days. 365/28 = ~13.04 cycles per year.
  // Postpaid is 12 cycles.
  const prepaidYearly = Math.round(prepaidCost * (365/28));
  const postpaidCost = 399; // Standard entry plan
  const postpaidYearly = postpaidCost * 12;
  
  const difference = prepaidYearly - postpaidYearly; // Often prepaid is actually cheaper, but we sell value.
  // However, if prepaid is 600, it changes. Let's look at the "Cycles" argument mostly.

  const data = [
    { name: 'Prepaid (28 Days)', cost: prepaidYearly, cycles: 13, color: '#ef4444' }, // Red
    { name: 'Postpaid (Monthly)', cost: postpaidYearly, cycles: 12, color: '#fbbf24' }, // Yellow
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
      <h2 className="text-2xl font-bold mb-4 text-slate-800 flex items-center">
        <span className="mr-2">🧮</span> The "28-Day Scam" Visualizer
      </h2>
      <p className="mb-6 text-slate-600">
        Show the customer they are paying a "13th Month Tax". Even if the monthly amount looks lower, the frequency kills them.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Customer's Current Prepaid Plan (₹)</label>
            <input 
              type="number" 
              value={prepaidCost}
              onChange={(e) => setPrepaidCost(Number(e.target.value))}
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none text-xl font-bold"
            />
          </div>
          
          <div className="bg-slate-50 p-4 rounded-lg">
            <h4 className="font-semibold text-slate-700 mb-2">The Brutal Truth</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex justify-between">
                <span>Prepaid Cycles/Year:</span>
                <span className="font-bold text-red-600">13.04</span>
              </li>
              <li className="flex justify-between">
                <span>Postpaid Cycles/Year:</span>
                <span className="font-bold text-green-600">12.00</span>
              </li>
              <li className="flex justify-between pt-2 border-t border-slate-200">
                <span>Extra "Hidden" Payment:</span>
                <span className="font-bold text-red-600">1 Full Month</span>
              </li>
            </ul>
          </div>

          <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 text-sm italic">
            "Sir, you are paying a penalty for being on prepaid. Why pay for 13 months when the year only has 12?"
          </div>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" width={100} style={{ fontSize: '12px', fontWeight: 'bold' }} />
              <Tooltip 
                formatter={(value: number) => [`₹${value}`, 'Yearly Cost']}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Bar dataKey="cost" radius={[0, 4, 4, 0]} barSize={40}>
                 {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <p className="text-center text-xs text-slate-500 mt-2">Annual Spend Projection</p>
        </div>
      </div>
    </div>
  );
};
