// pages/index.js
export default function Home() {
  // Logo component
  const Logo = () => (
    <div className="w-44 h-12 relative">
      <div className="w-2.5 h-4 left-[164.63px] top-[16.36px] absolute bg-white" />
      <div className="w-3 h-3 left-[151.90px] top-[21.29px] absolute bg-white" />
      <div className="w-3 h-3 left-[139.47px] top-[21.29px] absolute bg-white" />
      <div className="w-3 h-4 left-[128.29px] top-[16.36px] absolute bg-white" />
      <div className="w-3 h-3 left-[116.06px] top-[21.29px] absolute bg-white" />
      <div className="w-2 h-3 left-[108.59px] top-[21.33px] absolute bg-white" />
      <div className="w-2.5 h-3 left-[95.74px] top-[21.66px] absolute bg-white" />
      <div className="w-2 h-4 left-[86.38px] top-[18.14px] absolute bg-white" />
      <div className="w-2.5 h-3 left-[74.17px] top-[21.66px] absolute bg-white" />
      <div className="w-2.5 h-4 left-[62.73px] top-[16.36px] absolute bg-white" />
      <div className="w-4 h-4 left-[33.33px] top-[33.33px] absolute bg-yellow-400" />
      <div className="w-4 h-4 left-[16.67px] top-[33.33px] absolute bg-yellow-400" />
      <div className="w-4 h-4 left-0 top-[33.33px] absolute bg-yellow-400" />
      <div className="w-4 h-4 left-0 top-[16.67px] absolute bg-yellow-400" />
      <div className="w-4 h-4 left-0 top-0 absolute bg-yellow-400" />
      <div className="w-4 h-4 left-[16.67px] top-0 absolute bg-yellow-400" />
      <div className="w-4 h-4 left-[33.33px] top-0 absolute bg-yellow-400" />
      <div className="w-4 h-4 left-[33.33px] top-[16.67px] absolute bg-yellow-400" />
    </div>
  );

  // Navigation component
  const Nav = () => (
    <nav className="absolute left-[766.50px] top-[38px] rounded-xl flex justify-start items-center gap-10">
      <div className="text-zinc-500 text-lg font-normal font-['Inter'] leading-relaxed">Home</div>
      <div className="text-zinc-500 text-lg font-normal font-['Inter'] leading-relaxed">News</div>
      <div className="text-zinc-500 text-lg font-normal font-['Inter'] leading-relaxed">Podcasts</div>
      <div className="text-zinc-500 text-lg font-normal font-['Inter'] leading-relaxed">Resources</div>
    </nav>
  );

  // Contact button component
  const ContactButton = () => (
    <div className="px-5 py-3.5 bg-yellow-400 rounded-[10px] flex justify-start items-center gap-2.5 overflow-hidden cursor-pointer">
      <span className="text-neutral-900 text-lg font-medium font-['Inter'] leading-relaxed">Contact Us</span>
    </div>
  );

  // Header component composing Logo, ContactButton, and Nav
  const Header = () => (
    <header className="w-[1920px] px-40 py-6 absolute top-0 left-0 bg-zinc-900 flex justify-between items-center">
      <Logo />
      <ContactButton />
      <Nav />
    </header>
  );

  // BlogSection component with the additional section content
  const BlogSection = () => (
    <section className="w-[1920px] inline-flex justify-start items-start">
      <div className="flex-1 inline-flex flex-col justify-start items-end">
        <div className="self-stretch pl-40 pr-20 py-20 border-t border-b border-neutral-800 flex flex-col justify-start items-start gap-3.5">
          <div className="self-stretch justify-start text-white text-xl font-medium font-['Inter'] leading-loose">
            Introduction
          </div>
          <div className="self-stretch justify-start text-neutral-400 text-lg font-normal font-['Inter'] leading-relaxed">
            Artificial Intelligence (AI) has emerged as a transformative force in the healthcare industry, reshaping patient care, diagnostics, and research. In this blog post, we explore the profound impact of AI in healthcare, from revolutionizing diagnostic accuracy to enhancing patient outcomes.
          </div>
        </div>
        <div className="self-stretch pl-40 pr-20 py-20 relative border-b border-neutral-800 flex flex-col justify-start items-start gap-7 overflow-hidden">
          <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <div className="self-stretch justify-start text-white text-3xl font-medium font-['Inter'] leading-10">
              Artificial Intelligence (AI)
            </div>
            <div className="self-stretch justify-start text-neutral-400 text-lg font-normal font-['Inter'] leading-relaxed">
              Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.
            </div>
            <div className="self-stretch justify-start text-neutral-400 text-lg font-normal font-['Inter'] leading-relaxed">
              Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
            <div className="self-stretch justify-start text-white text-3xl font-medium font-['Inter'] leading-10">
              Predictive Analytics and Disease Prevention
            </div>
            <div className="self-stretch justify-start text-neutral-400 text-lg font-normal font-['Inter'] leading-relaxed">
              One of the most prominent applications of AI in healthcare is in diagnostic imaging. AI algorithms have demonstrated remarkable proficiency in interpreting medical images such as X-rays, MRIs, and CT scans. They can identify anomalies and deviations that might be overlooked by the human eye. This is particularly valuable in early disease detection. For instance, AI can aid radiologists in detecting minute irregularities in mammograms or identifying critical findings in chest X-rays, potentially indicative of life-threatening conditions.
            </div>
          </div>
          <div className="w-[1238px] h-52 px-2.5 pt-20 pb-7 left-0 top-[526px] absolute bg-gradient-to-b from-neutral-900/0 to-neutral-900 flex flex-col justify-center items-center gap-2.5">
            <div className="px-6 py-3.5 bg-neutral-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-800 inline-flex justify-start items-center gap-2.5">
              <div className="justify-start text-neutral-400 text-lg font-normal font-['Inter'] leading-relaxed">Read Full Blog</div>
              <div className="w-6 h-6 relative overflow-hidden">
                <div className="w-3.5 h-4 left-[4.50px] top-[3.75px] absolute bg-neutral-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[682px] self-stretch border-l border-b border-neutral-800 inline-flex flex-col justify-start items-start">
        <div className="self-stretch pl-20 pr-40 py-12 border-t border-neutral-800 inline-flex justify-start items-center gap-3.5">
          <div className="px-6 py-2.5 bg-neutral-900 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-neutral-800 flex justify-center items-center gap-1">
            <div className="w-8 h-8 relative overflow-hidden">
              <div className="w-7 h-6 left-[3.19px] top-[4.25px] absolute bg-orange-600" />
            </div>
            <div className="justify-start text-neutral-400 text-lg font-normal font-['Kumbh_Sans'] leading-relaxed">24.5k</div>
          </div>
          <div className="px-6 py-2.5 bg-neutral-900 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-neutral-800 flex justify-center items-center gap-1">
            <div className="w-8 h-8 relative overflow-hidden">
              <div className="w-7 h-5 left-[2.83px] top-[7.08px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-neutral-400" />
            </div>
            <div className="justify-start text-neutral-400 text-lg font-normal font-['Kumbh_Sans'] leading-relaxed">50k</div>
          </div>
          <div className="px-6 py-2.5 bg-neutral-900 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-neutral-800 flex justify-center items-center gap-1">
            <div className="w-8 h-8 relative overflow-hidden">
              <div className="w-6 h-6 left-[5.08px] top-[5.30px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-stone-500" />
            </div>
            <div className="justify-start text-neutral-400 text-lg font-normal font-['Kumbh_Sans'] leading-relaxed">206</div>
          </div>
        </div>
        <div className="self-stretch pl-20 pr-40 py-20 border-t border-neutral-800 flex flex-col justify-start items-start gap-12">
          <div className="self-stretch flex flex-col justify-start items-start gap-7">
            <div className="self-stretch inline-flex justify-start items-start gap-5">
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-2.5">
                <div className="self-stretch justify-start text-neutral-400 text-lg font-normal font-['Inter'] leading-relaxed">
                  Publication Date
                </div>
                <div className="self-stretch justify-start text-white text-lg font-medium font-['Inter'] leading-relaxed">
                  October 15, 2023
                </div>
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-2.5">
                <div className="self-stretch justify-start text-neutral-400 text-lg font-normal font-['Inter'] leading-relaxed">
                  Category
                </div>
                <div className="self-stretch justify-start text-white text-lg font-medium font-['Inter'] leading-relaxed">
                  Healthcare
                </div>
              </div>
            </div>
            <div className="self-stretch inline-flex justify-start items-start gap-5">
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-2.5">
                <div className="self-stretch justify-start text-neutral-400 text-lg font-normal font-['Inter'] leading-relaxed">
                  Reading Time
                </div>
                <div className="self-stretch justify-start text-white text-lg font-medium font-['Inter'] leading-relaxed">
                  10 Min
                </div>
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-2.5">
                <div className="self-stretch justify-start text-neutral-400 text-lg font-normal font-['Inter'] leading-relaxed">
                  Author Name
                </div>
                <div className="self-stretch justify-start text-white text-lg font-medium font-['Inter'] leading-relaxed">
                  Dr. Emily Walker
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="self-stretch justify-start text-neutral-400 text-lg font-normal font-['Inter'] leading-relaxed">
              Table of Contents
            </div>
            <div className="self-stretch p-5 bg-zinc-900 rounded-xl flex flex-col justify-start items-start gap-5">
              <div className="self-stretch justify-start text-white text-lg font-normal font-['Inter'] leading-relaxed">
                Introduction
              </div>
              <div className="self-stretch justify-start text-white text-lg font-normal font-['Inter'] leading-relaxed">
                AI in Diagnostic Imaging
              </div>
              <div className="self-stretch justify-start text-white text-lg font-normal font-['Inter'] leading-relaxed">
                Predictive Analytics and Disease Prevention
              </div>
              <div className="self-stretch justify-start text-white text-lg font-normal font-['Inter'] leading-relaxed">
                Personalized Treatment Plans
              </div>
              <div className="self-stretch justify-start text-white text-lg font-normal font-['Inter'] leading-relaxed">
                Drug Discovery and Research
              </div>
              <div className="self-stretch justify-start text-white text-lg font-normal font-['Inter'] leading-relaxed">
                AI in Telemedicine
              </div>
              <div className="self-stretch justify-start text-white text-lg font-normal font-['Inter'] leading-relaxed">
                Ethical Considerations
              </div>
              <div className="self-stretch justify-start text-white text-lg font-normal font-['Inter'] leading-relaxed">
                The Future of AI in Healthcare
              </div>
              <div className="self-stretch justify-start text-white text-lg font-normal font-['Inter'] leading-relaxed">
                Conclusion
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // SimilarNewsSection component with the new section
  const SimilarNewsSection = () => (
    <section className="self-stretch px-40 py-20 border-t border-neutral-800 inline-flex flex-col justify-start items-start gap-14">
      <div className="self-stretch inline-flex justify-start items-center gap-20">
        <div className="flex-1 justify-start text-stone-300 text-3xl font-medium font-['Kumbh_Sans'] leading-9">
          Similar News
        </div>
        <div className="px-6 py-4 bg-neutral-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-800 flex justify-start items-center gap-2.5">
          <div className="justify-start text-neutral-400 text-lg font-normal font-['Inter'] leading-relaxed">
            View All News
          </div>
          <div className="w-6 h-6 relative overflow-hidden">
            <div className="w-4 h-4 left-[3.75px] top-[3.75px] absolute bg-yellow-400" />
          </div>
        </div>
      </div>
      <div className="self-stretch inline-flex justify-start items-start gap-7">
        {/* News Item 1 */}
        <div className="flex-1 inline-flex flex-col justify-center items-start gap-5">
          <img className="self-stretch h-56 rounded-xl" src="https://placehold.co/512x222" alt="News 1" />
          <div className="self-stretch flex flex-col justify-start items-start gap-5">
            <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
              <div className="self-stretch justify-start text-white text-xl font-semibold font-['Inter'] leading-loose">
                A Decisive Victory for Progressive Policies
              </div>
              <div className="self-stretch justify-start text-neutral-400 text-xl font-normal font-['Inter'] leading-loose">
                Politics
              </div>
            </div>
            <div className="self-stretch inline-flex justify-start items-center gap-12">
              <div className="flex justify-start items-start gap-2.5">
                <div className="px-4 py-2 bg-zinc-900 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-neutral-800 flex justify-center items-center gap-1">
                  <div className="w-6 h-6 relative overflow-hidden">
                    <div className="w-4 h-3.5 left-[3.50px] top-[4.50px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-stone-500" />
                  </div>
                  <div className="justify-start text-neutral-400 text-lg font-normal font-['Kumbh_Sans'] leading-relaxed">
                    2.2k
                  </div>
                </div>
                <div className="px-4 py-2 bg-zinc-900 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-neutral-800 flex justify-center items-center gap-1">
                  <div className="w-6 h-6 relative overflow-hidden">
                    <div className="w-4 h-4 left-[3.59px] top-[3.74px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-stone-500" />
                  </div>
                  <div className="justify-start text-neutral-400 text-lg font-normal font-['Kumbh_Sans'] leading-relaxed">
                    60
                  </div>
                </div>
              </div>
              <div className="flex-1 px-6 py-4 bg-neutral-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-800 flex justify-center items-center gap-2.5">
                <div className="justify-start text-neutral-400 text-lg font-normal font-['Inter'] leading-relaxed">
                  Read More
                </div>
                <div className="w-6 h-6 relative overflow-hidden">
                  <div className="w-4 h-4 left-[3.75px] top-[3.75px] absolute bg-yellow-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* News Item 2 */}
        <div className="flex-1 inline-flex flex-col justify-center items-start gap-5">
          <img className="self-stretch h-56 rounded-xl" src="https://placehold.co/512x222" alt="News 2" />
          <div className="self-stretch flex flex-col justify-start items-start gap-5">
            <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
              <div className="self-stretch justify-start text-white text-xl font-semibold font-['Inter'] leading-loose">
                Tech Giants Unveil Cutting-Edge AI Innovations
              </div>
              <div className="self-stretch justify-start text-neutral-400 text-xl font-normal font-['Inter'] leading-loose">
                Technology
              </div>
            </div>
            <div className="self-stretch inline-flex justify-start items-center gap-12">
              <div className="flex justify-start items-start gap-2.5">
                <div className="px-4 py-2 bg-zinc-900 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-neutral-800 flex justify-center items-center gap-1">
                  <div className="w-6 h-6 relative overflow-hidden">
                    <div className="w-4 h-3.5 left-[3.50px] top-[4.50px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-stone-500" />
                  </div>
                  <div className="justify-start text-neutral-400 text-lg font-normal font-['Kumbh_Sans'] leading-relaxed">
                    6k
                  </div>
                </div>
                <div className="px-4 py-2 bg-zinc-900 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-neutral-800 flex justify-center items-center gap-1">
                  <div className="w-6 h-6 relative overflow-hidden">
                    <div className="w-4 h-4 left-[3.59px] top-[3.74px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-stone-500" />
                  </div>
                  <div className="justify-start text-neutral-400 text-lg font-normal font-['Kumbh_Sans'] leading-relaxed">
                    92
                  </div>
                </div>
              </div>
              <div className="flex-1 px-6 py-4 bg-neutral-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-800 flex justify-center items-center gap-2.5">
                <div className="justify-start text-neutral-400 text-lg font-normal font-['Inter'] leading-relaxed">
                  Read More
                </div>
                <div className="w-6 h-6 relative overflow-hidden">
                  <div className="w-4 h-4 left-[3.75px] top-[3.75px] absolute bg-yellow-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* News Item 3 */}
        <div className="flex-1 inline-flex flex-col justify-center items-start gap-5">
          <img className="self-stretch h-56 rounded-xl" src="https://placehold.co/512x222" alt="News 3" />
          <div className="self-stretch flex flex-col justify-start items-start gap-5">
            <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
              <div className="self-stretch justify-start text-white text-xl font-semibold font-['Inter'] leading-loose">
                COVID-19 Variants
              </div>
              <div className="self-stretch justify-start text-neutral-400 text-xl font-normal font-['Inter'] leading-loose">
                Health
              </div>
            </div>
            <div className="self-stretch inline-flex justify-start items-center gap-12">
              <div className="flex justify-start items-start gap-2.5">
                <div className="px-4 py-2 bg-zinc-900 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-neutral-800 flex justify-center items-center gap-1">
                  <div className="w-6 h-6 relative overflow-hidden">
                    <div className="w-4 h-3.5 left-[3.50px] top-[4.50px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-stone-500" />
                  </div>
                  <div className="justify-start text-neutral-400 text-lg font-normal font-['Kumbh_Sans'] leading-relaxed">
                    10k
                  </div>
                </div>
                <div className="px-4 py-2 bg-zinc-900 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-neutral-800 flex justify-center items-center gap-1">
                  <div className="w-6 h-6 relative overflow-hidden">
                    <div className="w-4 h-4 left-[3.59px] top-[3.74px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-stone-500" />
                  </div>
                  <div className="justify-start text-neutral-400 text-lg font-normal font-['Kumbh_Sans'] leading-relaxed">
                    124
                  </div>
                </div>
              </div>
              <div className="flex-1 px-6 py-4 bg-neutral-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-800 flex justify-center items-center gap-2.5">
                <div className="justify-start text-neutral-400 text-lg font-normal font-['Inter'] leading-relaxed">
                  Read More
                </div>
                <div className="w-6 h-6 relative overflow-hidden">
                  <div className="w-4 h-4 left-[3.75px] top-[3.75px] absolute bg-yellow-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

 // TechRevolutionSection component with the new content
 const TechRevolutionSection = () => (
  <section className="self-stretch px-40 py-20 border-t border-neutral-800 flex flex-col justify-start items-start gap-10">
    <div className="flex flex-col gap-4">
      <h2 className="text-4xl font-bold text-white">Learn, Connect, and Innovate</h2>
      <h3 className="text-3xl font-medium text-yellow-400">Be Part of the Future Tech Revolution</h3>
      <p className="text-neutral-400 text-lg">
        Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="flex flex-col gap-2">
        <h4 className="text-xl font-semibold text-white">Resource Access</h4>
        <p className="text-neutral-400 text-lg">
          Visitors can access a wide range of resources, including ebooks, whitepapers, reports.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-xl font-semibold text-white">Community Forum</h4>
        <p className="text-neutral-400 text-lg">
          Join our active community forum to discuss industry trends, share insights, and collaborate with peers.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-xl font-semibold text-white">Tech Events</h4>
        <p className="text-neutral-400 text-lg">
          Stay updated on upcoming tech events, webinars, and conferences to enhance your knowledge.
        </p>
      </div>
    </div>
  </section>
);

// Final return rendering all sections together
return (
  <div className="relative">
    <Header />
    <div className="w-[1920px] h-[598px] absolute left-0 top-[103px] bg-gradient-to-b from-neutral-900/0 via-neutral-900/90 to-neutral-900" />
    <BlogSection />
    <SimilarNewsSection />
    <TechRevolutionSection />
  </div>
);
}
