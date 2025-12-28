import React from 'react';
import { Quote, Check } from 'lucide-react';

export default function CaseStudyCard({
  client,
  industry,
  solution,
  result,
  quote,
  logoUrl,
  avatarUrl,
  personName,
  personTitle,
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 h-full flex flex-col">
      {/* Header - Logo, Company Name, Industry */}
      <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
        <div className="flex items-center gap-2.5">
          {logoUrl && (
            <img
              src={logoUrl}
              alt={`${client} logo`}
              className="h-7 max-w-[90px] object-contain rounded"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          )}
          <h3 className="text-base font-bold text-gray-900">{client}</h3>
        </div>
        <span className="inline-flex px-2.5 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
          {industry}
        </span>
      </div>

      {/* Solution */}
      <div className="flex-grow">
        <p className="text-gray-600 text-sm leading-relaxed">{solution}</p>
      </div>

      {/* Result Highlight */}
      <div className="mt-5 p-4 bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 rounded-xl">
        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2.5">
          Result
        </h4>
        <ul className="space-y-1.5">
          {result.split(',').map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
              <span className="text-sm font-medium text-gray-800">
                {item.trim()}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Testimonial with Avatar and Person Info */}
      {quote && (
        <div className="mt-5 pt-4 border-t border-gray-100">
          <p className="text-gray-500 italic text-sm leading-relaxed mb-3">
            "{quote}"
          </p>
          <div className="flex items-center gap-2.5">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt={personName || 'Testimonial'}
                className="w-9 h-9 rounded-full object-cover object-top flex-shrink-0 border border-gray-100"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face';
                }}
              />
            ) : (
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex-shrink-0 flex items-center justify-center">
                <Quote className="w-3.5 h-3.5 text-white" />
              </div>
            )}
            <div>
              <p className="text-sm font-semibold text-gray-900">{personName}</p>
              <p className="text-xs text-gray-500">{personTitle}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}