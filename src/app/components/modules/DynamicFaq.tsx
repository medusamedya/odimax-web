"use client";

import { useState } from "react";
import { Plus, X, ArrowRight } from "lucide-react";
import Link from "next/link";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export default function DynamicFaq({ faqs }: { faqs: FaqItem[] }) {
  const [openId, setOpenId] = useState<number | null>(faqs[0]?.id || null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-brand-neutral font-sans border-t border-black/[0.03]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
            <h2 className="font-sans mb-4 text-4xl md:text-5xl font-semibold tracking-wide leading-wide inline-block bg-gradient-to-r from-brand-header-text from-60% to-[#595A5B] bg-clip-text text-transparent">
            Sıkça Sorulan Sorular
          </h2>
          <p className="font-sans text-base md:text-lg text-brand-text max-w-3xl mx-auto leading-relaxed mb-4">
            Cevabını bulamadığınız bir konu varsa, ekibimize ulaşın.
          </p>
        </div>

        <div className="border-t border-black/[0.08]">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="border-b border-black/[0.08]">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-6 flex items-center justify-between gap-4 text-left focus:outline-none group"
                >
                  <span className="font-sans text-[16px] md:text-lg font-medium text-brand-header-text group-hover:text-brand-blue transition-colors duration-300">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-300 ${isOpen ? "bg-brand-blue border-brand-blue" : "bg-white border-black/[0.1] group-hover:border-brand-blue"}`}>
                    {isOpen ? <X className="w-4 h-4 text-white" /> : <Plus className="w-4 h-4 text-brand-dark group-hover:text-brand-blue" />}
                  </div>
                </button>
                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0 pb-0"}`}>
                  <div className="overflow-hidden">
                    <p className="font-sans text-brand-text text-base leading-relaxed pr-12">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}