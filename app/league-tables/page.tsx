'use client';

import { useState } from 'react';

type TeamRow = {
  pos: number; team: string;
  mp: number; w: number; d: number; l: number;
  gf: number; ga: number; gd: number; pts: number;
  form: ('W' | 'D' | 'L')[];
};

const premierDivision: TeamRow[] = [
  { pos: 1,  team: 'Shamrock Rovers',      mp:14, w:8, d:4, l:2, gf:20, ga:11, gd:9,   pts:28, form:['W','W','W','L','W'] },
  { pos: 2,  team: "St Patrick's Athletic",mp:14, w:8, d:3, l:3, gf:26, ga:13, gd:13,  pts:27, form:['L','L','W','W','D'] },
  { pos: 3,  team: 'Bohemian FC',          mp:14, w:5, d:6, l:3, gf:16, ga:12, gd:4,   pts:21, form:['D','L','L','L','D'] },
  { pos: 4,  team: 'Dundalk',              mp:14, w:5, d:6, l:3, gf:23, ga:20, gd:3,   pts:21, form:['W','D','W','L','L'] },
  { pos: 5,  team: 'Derry City',           mp:14, w:4, d:6, l:4, gf:18, ga:17, gd:1,   pts:18, form:['D','D','W','W','D'] },
  { pos: 6,  team: 'Shelbourne',           mp:13, w:4, d:4, l:5, gf:21, ga:22, gd:-1,  pts:16, form:['L','L','L','L','W'] },
  { pos: 7,  team: 'Galway United',        mp:13, w:4, d:4, l:5, gf:17, ga:19, gd:-2,  pts:16, form:['W','W','L','D','D'] },
  { pos: 8,  team: 'Drogheda United',      mp:13, w:4, d:4, l:5, gf:17, ga:20, gd:-3,  pts:16, form:['D','L','L','W','W'] },
  { pos: 9,  team: 'Sligo Rovers',         mp:14, w:4, d:2, l:8, gf:10, ga:18, gd:-8,  pts:14, form:['D','W','W','W','L'] },
  { pos: 10, team: 'Waterford United',     mp:13, w:0, d:5, l:8, gf:9,  ga:25, gd:-16, pts:5,  form:['D','D','L','D','L'] },
];

// First Division - placeholder data (update when available)
const firstDivision: TeamRow[] = [
  { pos: 1, team: 'Cork City',       mp:12, w:8, d:2, l:2, gf:24, ga:10, gd:14, pts:26, form:['W','W','W','D','W'] },
  { pos: 2, team: 'Treaty United',   mp:12, w:7, d:3, l:2, gf:20, ga:11, gd:9,  pts:24, form:['W','W','D','W','L'] },
  { pos: 3, team: 'Finn Harps',      mp:12, w:6, d:3, l:3, gf:18, ga:13, gd:5,  pts:21, form:['D','W','W','D','W'] },
  { pos: 4, team: 'Longford Town',   mp:12, w:5, d:4, l:3, gf:16, ga:13, gd:3,  pts:19, form:['W','D','L','W','D'] },
  { pos: 5, team: 'Bray Wanderers',  mp:12, w:4, d:3, l:5, gf:14, ga:17, gd:-3, pts:15, form:['L','W','D','L','W'] },
  { pos: 6, team: 'Cobh Ramblers',   mp:12, w:3, d:3, l:6, gf:12, ga:18, gd:-6, pts:12, form:['L','L','W','L','D'] },
  { pos: 7, team: 'Athlone Town',    mp:12, w:2, d:2, l:8, gf:10, ga:22, gd:-12,pts:8,  form:['L','D','L','L','W'] },
  { pos: 8, team: 'UCD AFC',         mp:12, w:1, d:2, l:9, gf:7,  ga:26, gd:-19,pts:5,  form:['L','L','L','L','D'] },
];

const formColor = {
  W: 'bg-[#16a34a]',
  D: 'bg-gray-400',
  L: 'bg-red-500',
};

function FormDot({ result }: { result: 'W' | 'D' | 'L' }) {
  return (
    <span
      className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-white text-xs font-bold ${formColor[result]}`}
    >
      {result}
    </span>
  );
}

export default function LeagueTablesPage() {
  const [activeTab, setActiveTab] = useState<'premier' | 'first'>('premier');
  const data = activeTab === 'premier' ? premierDivision : firstDivision;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-5xl text-gray-900 mb-2">League Tables</h1>
      <p className="text-gray-500 mb-2 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
        Current standings for the League of Ireland Premier Division and First Division
      </p>
      <p className="text-xs text-[#16a34a] font-semibold mb-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>
        2026 Season · Updated 3 May 2026
      </p>

      {/* Tabs */}
      <div className="flex gap-3 mb-8">
        {(['premier', 'first'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all cursor-pointer ${
              activeTab === tab
                ? 'bg-[#16a34a] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            {tab === 'premier' ? 'Premier Division' : 'First Division'}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
        <table className="w-full text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          <thead>
            <tr className="bg-[#f0fdf4] text-gray-500 text-xs uppercase tracking-wider">
              <th className="px-4 py-3 text-left w-12">Pos</th>
              <th className="px-4 py-3 text-left">Team</th>
              <th className="px-4 py-3 text-center">MP</th>
              <th className="px-4 py-3 text-center">W</th>
              <th className="px-4 py-3 text-center">D</th>
              <th className="px-4 py-3 text-center">L</th>
              <th className="px-4 py-3 text-center">GF</th>
              <th className="px-4 py-3 text-center">GA</th>
              <th className="px-4 py-3 text-center">GD</th>
              <th className="px-4 py-3 text-center font-bold text-gray-700">Pts</th>
              <th className="px-4 py-3 text-center">Last 5</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={row.team}
                className={`border-t border-gray-100 transition-colors ${
                  i === 0
                    ? 'bg-green-50'
                    : i === data.length - 1
                    ? 'bg-red-50/40'
                    : 'hover:bg-gray-50'
                }`}
              >
                {/* Position */}
                <td className="px-4 py-3">
                  <span className="flex items-center gap-1 font-semibold text-gray-700">
                    {row.pos === 1 && <span>🏆</span>}
                    {row.pos}
                  </span>
                </td>

                {/* Team */}
                <td className="px-4 py-3 font-semibold text-gray-900">{row.team}</td>

                {/* Stats */}
                <td className="px-4 py-3 text-center text-gray-600">{row.mp}</td>
                <td className="px-4 py-3 text-center text-gray-600">{row.w}</td>
                <td className="px-4 py-3 text-center text-gray-600">{row.d}</td>
                <td className="px-4 py-3 text-center text-gray-600">{row.l}</td>
                <td className="px-4 py-3 text-center text-gray-600">{row.gf}</td>
                <td className="px-4 py-3 text-center text-gray-600">{row.ga}</td>
                <td className={`px-4 py-3 text-center font-semibold ${
                  row.gd > 0 ? 'text-[#16a34a]' : row.gd < 0 ? 'text-red-500' : 'text-gray-400'
                }`}>
                  {row.gd > 0 ? `+${row.gd}` : row.gd}
                </td>
                <td className="px-4 py-3 text-center font-bold text-base text-gray-900">{row.pts}</td>

                {/* Form */}
                <td className="px-4 py-3">
                  <div className="flex gap-1 justify-center">
                    {row.form.map((result, idx) => (
                      <FormDot key={idx} result={result} />
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-6 mt-4">
        <p className="text-xs text-gray-400" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          🏆 = League leaders &nbsp;·&nbsp; Last row = relegation zone
        </p>
        <div className="flex items-center gap-3 ml-auto">
          {(['W', 'D', 'L'] as const).map((r) => (
            <span key={r} className="flex items-center gap-1 text-xs text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-white text-xs font-bold ${formColor[r]}`}>{r}</span>
              {r === 'W' ? 'Win' : r === 'D' ? 'Draw' : 'Loss'}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}