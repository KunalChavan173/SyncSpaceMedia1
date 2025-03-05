import { useState } from 'react';
import { FadeUp } from "./ui/Motion";
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How does the process work?",
    answer: "We begin with content research and provide you with a detailed plan for approval. Once approved, we move to production—either assisting you in filming clips and B-rolls or using your existing footage. The videos are then edited, revised until you're satisfied, and posted across all your accounts."
  },
  {
    question: "What platforms do you specialize in?",
    answer: "We create content for Instagram, TikTok, YouTube, YouTube Shorts, LinkedIn, and other major social media platforms. Our team is adaptable and can tailor content to specific platform requirements."
  },
  {
    question: "Do you offer custom content strategies?",
    answer: "Absolutely! We provide comprehensive content strategy consulting. Our team analyzes your brand, target audience, and goals to develop a tailored content approach that maximizes engagement and growth."
  },
  {
    question: "What's your revision process?",
    answer: "We offer unlimited revisions until you're 100% satisfied. Our collaborative approach ensures we capture your vision precisely. We typically provide initial drafts within 48 hours and work closely with you to refine the content."
  },
  {
    question: "How do you price your services?",
    answer: "Our pricing is project-based and depends on content complexity, length, and specific requirements. We offer transparent, competitive rates with packages tailored to different business needs. Contact us for a custom quote."
  },
  {
    question: "Can you help with personal branding?",
    answer: "Yes! We specialize in personal branding content. Our team creates strategic content that enhances your online presence, builds credibility, and helps you stand out in your industry."
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="relative py-32 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1E40AF]/5 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <FadeUp>
              <span className="text-[1.25rem] text-white/60 mb-4 block tracking-wide">
                FAQs
              </span>
            </FadeUp>
            
            <FadeUp delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
                Got Questions? We've Got{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#2563EB]">
                  Answers
                </span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
                Find quick answers to common queries about our content creation services.
              </p>
            </FadeUp>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FadeUp key={index} delay={0.1 * (index + 3)}>
                <div 
                  className="bg-[#1A1A1A]/40 backdrop-blur-sm rounded-2xl border border-white/5 
                    overflow-hidden transition-all duration-300 ease-out"
                >
                  <button 
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center p-6 text-left 
                      transition-colors duration-300"
                  >
                    <span className="text-xl font-medium text-white">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-6 h-6 transform transition-transform duration-300 
                        ${openIndex === index ? 'rotate-180 text-[#3B82F6]' : 'text-white/60'}`} 
                    />
                  </button>
                  
                  <div 
                    className={`
                      overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)]
                      ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                    `}
                  >
                    <div className="px-6 pb-6 text-white/70 text-base">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 