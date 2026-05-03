'use client';

import { useState } from 'react';

type TeamRow = {
  pos: number; team: string;
  p: number; w: number; d: number; l: number;
  gf: number; ga: number; gd: number; pts: number;
  form: ('W' | 'D' | 'L')[];
  trend: 'up' | 'same' | 'down';
};

const premierDivision: TeamRow[] = [
  { pos: 1, team: 'Shamrock Rovers',      p:15, w:11, d:3, l:1,  gf:34, ga:12, gd:22,  pts:36, form:['W','W','D','W','W'], trend:'up' },
  { pos: 2, team: 'Derry City',           p:15, w:10, d:3, l:2,  gf:29, ga:14, gd:15,  pts:33, form:['W','W','W','L','W'], trend:'up' },
  { pos: 3, team: 'Dundalk',              p:15, w:9,  d:4, l:2,  gf:27, ga:13, gd:14,  pts:31, form:['D','W','W','D','W'], trend:'up' },
  { pos: 4, team: "St Patrick's Athletic",p:15, w:8,  d:5, l:2,  gf:24, ga:15, gd:9,   pts:29, form:['D','W','D','W','W'], trend:'same' },
  { pos: 5, team: 'Bohemian FC',          p:15, w:7,  d:4, l:4,  gf:22, ga:18, gd:4,   pts:25, form:['L','W','W','D','W'], trend:'same' },
  { pos: 6, team: 'Shelbourne',           p:15, w:6,  d:5, l:4,  gf:20, ga:17, gd:3,   pts:23, form:['W','D','L','W','D'], trend:'down' },
  { pos: 7, team: 'Sligo Rovers',         p:15, w:5,  d:5, l:5,  gf:19, ga:21, gd:-2,  pts:20, form:['D','L','W','D','L'], trend:'down' },
  { pos: 8, team: 'Cork City',            p:15, w:5,  d:3, l:7,  gf:18, ga:24, gd:-6,  pts:18, form:['L','L','W','L','W'], trend:'down' },
  { pos: 9, team: 'Drogheda United',      p:15, w:3,  d:4, l:8,  gf:14, ga:25, gd:-11, pts:13, form:['L','D','L','L','W'], trend:'down' },
  { pos:10, team: 'Finn Harps',           p:15, w:1,  d:2, l:12, gf:10, ga:32, gd:-22, pts:5,  form:['L','L','L','D','L'], trend:'down' },
];

const firstDivision: TeamRow[] = [
  { pos: 1, team: 'Waterford FC',   p:14, w:10, d:2, l:2,  gf:28, ga:10, gd:18,  pts:32, form:['W','W','W','D','W'], trend:'up' },
  { pos: 2, team: 'Treaty United',  p:14, w:9,  d:2, l:3,  gf:25, ga:12, gd:13,  pts:29, form:['W','W','D','W','L'], trend:'up' },
  { pos: 3, team: 'Galway United',  p:14, w:7,  d:4, l:3,  gf:22, ga:14, gd:8,   pts:25, form:['D','W','W','D','W'], trend:'same' },
  { pos: 4, team: 'Longford Town',  p:14, w:6,  d:4, l:4,  gf:18, ga:15, gd:3,   pts:22, form:['W','D','L','W','D'], trend:'same' },
  { pos: 5, team: 'Bray Wanderers', p:14, w:5,  d:3, l:6,  gf:16, ga:20, gd:-4,  pts:18, form:['L','W','D','L','W'], trend:'down' },
  { pos: 6, team: 'Cobh Ramblers',  p:14, w:4,  d:2, l:8,  gf:14, ga:22, gd:-8,  pts:14, form:['L','L','W','L','D'], trend:'down' },
  { pos: 7, team: 'Athlone Town',   p:14, w:2,  d:3, l:9,  gf:11, ga:26, gd:-15, pts:9,  form:['L','D','L','L','W'], trend:'down' },
  { pos: 8, team: 'UCD AFC',        p:14, w:1,  d:2, l:11, gf:8,  ga:30, gd:-22, pts:5,  form:['L','L','L','L','D'], trend:'down' },
];

const formColor = { W: 'bg-[#16a34a]', D: 'bg-gray-500', L: 'bg-red-500' };

function TrendIcon({ trend }: { trend: string }) {
  if (trend === 'up') return <span className="text-[#16a34a] text-xs ml-1">↑</span>;
  if (trend === 'down') return <span className="text-red-500 text-xs ml-1">↓</span>;
  return <span className="text-gray-400 text-xs ml-1">–</span>;
}

export default function LeagueTablesPage() {
  const [activeTab, setActiveTab] = useState<'premier' | 'first'>('premier');
  const data = activeTab === 'premier' ? premierDivision : firstDivision;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-5xl text-gray-900 mb-2">League Tables</h1>
      <p className="text-gray-500 mb-8 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
        Current standings for the League of Ireland Premier Division and First Division
      </p>

      {/* Tabs */}
      <div className="flex gap-3 mb-8">
        <button
          onClick={() => setActiveTab('premier')}
          className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all cursor-pointer ${
            activeTab === 'premier' ? 'bg-[#16a34a] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          Premier Division
        </button>
        <button
          onClick={() => setActiveTab('first')}
          className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all cursor-pointer ${
            activeTab === 'first' ? 'bg-[#16a34a] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          First Division
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
        <table className="w-full text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          <thead className="bg-[#f0fdf4] text-gray-500 text-xs uppercase tracking-wider">
            <tr>
              <th className="px-4 py-3 text-left">Pos</th>
              <th className="px-4 py-3 text-left">Team</th>
              <th className="px-4 py-3 text-center">P</th>
              <th className="px-4 py-3 text-center">W</th>
              <th className="px-4 py-3 text-center">D</th>
              <th className="px-4 py-3 text-center">L</th>
              <th className="px-4 py-3 text-center">GF</th>
              <th className="px-4 py-3 text-center">GA</th>
              <th className="px-4 py-3 text-center">GD</th>
              <th className="px-4 py-3 text-center">Pts</th>
              <th className="px-4 py-3 text-center">Form</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={row.team}
                className={`border-t border-gray-100 transition-colors ${
                  i === 0 ? 'bg-green-50/50' : 'hover:bg-gray-50'
                }`}
              >
                <td className="px-4 py-3 font-semibold text-gray-700">
                  <span className="flex items-center">
                    {row.pos === 1 && <span className="mr-1">🏆</span>}
                    {row.pos}
                    <TrendIcon trend={row.trend} />
                  </span>
                </td>
                <td className="px-4 py-3 font-semibold text-gray-900">{row.team}</td>
                <td className="px-4 py-3 text-center text-gray-600">{row.p}</td>
                <td className="px-4 py-3 text-center text-gray-600">{row.w}</td>
                <td className="px-4 py-3 text-center text-gray-600">{row.d}</td>
                <td className="px-4 py-3 text-center text-gray-600">{row.l}</td>
                <td className="px-4 py-3 text-center text-gray-600">{row.gf}</td>
                <td className="px-4 py-3 text-center text-gray-600">{row.ga}</td>
                <td className={`px-4 py-3 text-center font-semibold ${row.gd > 0 ? 'text-[#16a34a]' : row.gd < 0 ? 'text-red-500' : 'text-gray-400'}`}>
                  {row.gd > 0 ? `+${row.gd}` : row.gd}
                </td>
                <td className="px-4 py-3 text-center font-bold text-base text-gray-900">{row.pts}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-1 justify-center">
                    {row.form.map((result, idx) => (
                      <span
                        key={idx}
                        className={`w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center ${formColor[result]}`}
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-400 mt-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
        * Table updated after each matchday. Last updated: 3 May 2026
      </p>
    </div>
  );
}