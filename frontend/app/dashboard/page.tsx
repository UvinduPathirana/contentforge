// pages/features.js
import Head from 'next/head';

const Header = () => (
  <header className="bg-zinc-900 border-b border-neutral-800">
    {/* Subscription Bar */}
    <div className="px-6 py-5 flex justify-center items-center gap-2.5">
      <p className="text-neutral-400 text-lg">
        Subscribe to our Newsletter For New &amp; latest Blogs and Resources
      </p>
      <div className="w-6 h-6 relative overflow-hidden">
        <div
          className="w-4 h-4 absolute bg-yellow-400"
          style={{ left: '3.75px', top: '3.75px' }}
        />
      </div>
    </div>
    {/* Navigation */}
    <nav className="px-40 py-6 flex justify-between items-center relative">
      {/* Logo */}
      <div className="w-44 h-12">
        {/* Simplified logo placeholder */}
        <div className="flex space-x-2">
          <div className="w-4 h-4 bg-yellow-400" />
          <div className="w-4 h-4 bg-white" />
          <div className="w-4 h-4 bg-white" />
        </div>
      </div>
      <button className="px-5 py-3.5 bg-yellow-400 rounded-[10px] text-neutral-900 text-lg font-medium">
        Contact Us
      </button>
      <div className="flex gap-10">
        <a
          href="#"
          className="px-6 py-3.5 bg-zinc-900 rounded-[10px] outline outline-1 outline-zinc-800 text-white text-lg font-medium"
        >
          Home
        </a>
        <a href="#" className="text-zinc-500 text-lg font-normal">
          News
        </a>
        <a href="#" className="text-zinc-500 text-lg font-normal">
          Podcasts
        </a>
        <a href="#" className="text-zinc-500 text-lg font-normal">
          Resources
        </a>
      </div>
    </nav>
  </header>
);

const IntroSection = () => (
  <section className="w-full inline-flex flex-col justify-start items-start">
    {/* Top half: Main introduction and stats */}
    <div className="self-stretch pr-40 inline-flex justify-start items-center">
      <div className="flex-1 pt-36 inline-flex flex-col justify-start items-start gap-24">
        <div className="self-stretch pl-40 pr-12 flex flex-col justify-start items-start gap-7">
          <div className="text-stone-500 text-3xl font-medium font-Kumbh_Sans leading-9">
            Your Journey to Tomorrow Begins Here
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-5">
            <div className="self-stretch text-white text-7xl font-medium font-Kumbh_Sans leading-[84px]">
              Explore the Frontiers of Artificial Intelligence
            </div>
            <div className="self-stretch text-zinc-500 text-lg font-normal font-Inter leading-relaxed">
              Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.
            </div>
          </div>
        </div>
        <div className="self-stretch pl-40 border-t border-neutral-800 inline-flex justify-start items-start gap-12">
          <div className="flex-1 py-12 inline-flex flex-col justify-start items-start gap-2.5">
            <div className="self-stretch flex">
              <span className="text-white text-4xl font-semibold font-Inter leading-[60px]">300</span>
              <span className="text-yellow-400 text-4xl font-semibold font-Inter leading-[60px]">+</span>
            </div>
            <div className="self-stretch text-neutral-400 text-lg font-normal font-Inter leading-relaxed">
              Resources available
            </div>
          </div>
          <div className="w-48 self-stretch origin-top-left rotate-90 outline outline-1 outline-offset-[-0.50px] outline-neutral-800" />
          <div className="flex-1 py-12 inline-flex flex-col justify-start items-start gap-2.5">
            <div className="self-stretch flex">
              <span className="text-white text-4xl font-semibold font-Inter leading-[60px]">12k</span>
              <span className="text-yellow-400 text-4xl font-semibold font-Inter leading-[60px]">+</span>
            </div>
            <div className="self-stretch text-neutral-400 text-lg font-normal font-Inter leading-relaxed">
              Total Downloads
            </div>
          </div>
          <div className="w-48 self-stretch origin-top-left rotate-90 outline outline-1 outline-offset-[-0.50px] outline-neutral-800" />
          <div className="flex-1 py-12 inline-flex flex-col justify-start items-start gap-2.5">
            <div className="self-stretch flex">
              <span className="text-white text-4xl font-semibold font-Inter leading-[60px]">10k</span>
              <span className="text-yellow-400 text-4xl font-semibold font-Inter leading-[60px]">+</span>
            </div>
            <div className="self-stretch text-neutral-400 text-lg font-normal font-Inter leading-relaxed">
              Active Users
            </div>
          </div>
        </div>
      </div>
      {/* Right half: Image collage and call-to-action */}
      <div className="w-[653px] self-stretch pl-20 pt-36 pb-20 relative border-l border-neutral-800 inline-flex flex-col justify-end items-start gap-7 overflow-hidden">
        <div
          className="w-[894px] h-[606.15px] absolute"
          style={{
            left: '143.11px',
            top: '-234.41px',
            transformOrigin: 'top left',
            transform: 'rotate(35.39deg)',
          }}
        />
        <div className="p-2.5 bg-zinc-900 rounded-full outline outline-1 outline-offset-[-1px] outline-neutral-800 inline-flex justify-start items-center">
          <img className="w-14 h-14 rounded-[42px] border-2 border-stone-500" src="https://placehold.co/60x60" alt="User 1" />
          <img className="w-14 h-14 rounded-[42px] border-2 border-stone-500" src="https://placehold.co/60x60" alt="User 2" />
          <img className="w-14 h-14 rounded-[42px] border-2 border-stone-500" src="https://placehold.co/60x60" alt="User 3" />
          <img className="w-14 h-14 rounded-[42px] border-2 border-stone-500" src="https://placehold.co/60x60" alt="User 4" />
        </div>
        <div className="flex flex-col gap-3.5">
          <div className="text-white text-2xl font-medium font-Inter leading-9">
            Explore 1000+ resources
          </div>
          <div className="text-zinc-500 text-lg font-normal font-Inter leading-relaxed">
            Over 1,000 articles on emerging tech trends and breakthroughs.
          </div>
        </div>
        <button className="px-6 py-4 bg-neutral-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-800 inline-flex items-center gap-2.5">
          <div className="text-neutral-400 text-lg font-normal font-Inter leading-relaxed">Explore Resources</div>
          <div className="w-6 h-6 relative overflow-hidden">
            <div
              className="w-4 h-4 absolute bg-yellow-400"
              style={{ left: '3.75px', top: '3.75px' }}
            />
          </div>
        </button>
      </div>
    </div>
    {/* Second row: Additional stats */}
    <div className="self-stretch px-40 border-t border-neutral-800 inline-flex justify-start items-center gap-20">
      <div className="flex-1 py-12 rounded-xl inline-flex flex-col gap-7">
        <div className="flex flex-col gap-7">
          <div className="w-2 h-4 bg-yellow-400" />
          <div className="w-2 h-4 bg-yellow-400" />
          <div className="w-0 h-4 origin-top-left -rotate-90 bg-yellow-400" />
          <div className="w-0 h-4 origin-top-left -rotate-90 bg-yellow-400" />
          <div className="inline-flex items-center gap-5">
            <div className="flex-1 inline-flex flex-col gap-1">
              <div className="text-white text-xl font-medium font-Inter leading-loose">
                Latest News Updates
              </div>
              <div className="text-zinc-500 text-lg font-normal font-Inter leading-relaxed">
                Stay Current
              </div>
            </div>
            <div className="p-3.5 bg-yellow-400 rounded-full flex items-center gap-2.5">
              <div className="w-6 h-6 relative overflow-hidden">
                <div
                  className="w-4 h-4 absolute bg-neutral-900"
                  style={{ left: '3.75px', top: '3.75px' }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-neutral-400 text-xl font-normal font-Kumbh_Sans leading-loose">
          Over 1,000 articles published monthly
        </div>
      </div>
      <div className="w-72 self-stretch origin-top-left rotate-90 outline outline-1 outline-offset-[-0.50px] outline-neutral-800" />
      <div className="flex-1 py-12 rounded-xl inline-flex flex-col gap-7">
        <div className="flex flex-col gap-7">
          <div className="w-12 h-12 relative overflow-hidden">
            <div className="w-5 h-5 absolute bg-yellow-400" style={{ left: '25px', top: '25px' }} />
            <div className="w-5 h-5 absolute bg-yellow-400" style={{ left: '5px', top: '5px' }} />
            <div className="w-5 h-5 absolute bg-neutral-700" style={{ left: '25px', top: '5px' }} />
            <div className="w-5 h-5 absolute bg-neutral-700" style={{ left: '5px', top: '25px' }} />
          </div>
          <div className="inline-flex items-center gap-5">
            <div className="flex-1 inline-flex flex-col gap-1">
              <div className="text-white text-xl font-medium font-Inter leading-loose">
                Expert Contributors
              </div>
              <div className="text-zinc-500 text-lg font-normal font-Inter leading-relaxed">
                Trusted Insights
              </div>
            </div>
            <div className="p-3.5 bg-yellow-400 rounded-full flex items-center gap-2.5">
              <div className="w-6 h-6 relative overflow-hidden">
                <div
                  className="w-4 h-4 absolute bg-neutral-900"
                  style={{ left: '3.75px', top: '3.75px' }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-zinc-500 text-xl font-normal font-Kumbh_Sans leading-loose">
          50+ renowned AI experts on our team
        </div>
      </div>
      <div className="w-72 self-stretch origin-top-left rotate-90 outline outline-1 outline-offset-[-0.50px] outline-neutral-800" />
      <div className="flex-1 py-12 rounded-xl inline-flex flex-col gap-7">
        <div className="flex flex-col gap-7">
          <div className="w-12 h-12 relative overflow-hidden">
            <div className="w-10 h-5 absolute bg-yellow-400" style={{ left: '5px', top: '5px' }} />
            <div className="w-10 h-5 absolute bg-neutral-700" style={{ left: '5px', top: '25px' }} />
          </div>
          <div className="inline-flex items-center gap-5">
            <div className="flex-1 inline-flex flex-col gap-1">
              <div className="text-white text-xl font-medium font-Inter leading-loose">
                Global Readership
              </div>
              <div className="text-zinc-500 text-lg font-normal font-Inter leading-relaxed">
                Worldwide Impact
              </div>
            </div>
            <div className="p-3.5 bg-yellow-400 rounded-full flex items-center gap-2.5">
              <div className="w-6 h-6 relative overflow-hidden">
                <div
                  className="w-4 h-4 absolute bg-neutral-900"
                  style={{ left: '3.75px', top: '3.75px' }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-zinc-500 text-xl font-normal font-Kumbh_Sans leading-loose">
          2 million monthly readers
        </div>
      </div>
    </div>
  </section>
);
const FeaturesSection = () => (

  <section className="px-40 py-28 border-t border-b border-neutral-800 bg-zinc-900">

    <div className="flex flex-col gap-4">

      <div className="px-2.5 py-1.5 bg-zinc-800 rounded inline-flex">

        <span className="text-white text-xl font-medium">Unlock the Power of</span>

      </div>

      <h2 className="text-6xl font-medium text-white font-Kumbh_Sans leading-[75.40px]">

        FutureTech Features

      </h2>

    </div>

    <div className="mt-10 flex items-center gap-20">

      {/* Left Column: Intro */}

      <div className="flex flex-col gap-12">

        <div className="w-20 h-20 relative overflow-hidden">

          {/* Simplified icon */}

          <div

            className="w-4 h-7 absolute bg-neutral-700"

            style={{ left: '54px', top: '26px' }}

          />

          <div

            className="w-4 h-7 absolute bg-neutral-700"

            style={{ left: '8px', top: '26px' }}

          />

          <div

            className="w-7 h-4 absolute bg-yellow-400"

            style={{ left: '26px', top: '54px' }}

          />

          <div

            className="w-7 h-4 absolute bg-yellow-400"

            style={{ left: '26px', top: '8px' }}

          />

        </div>

        <div className="flex flex-col gap-4">

          <h3 className="text-4xl font-semibold text-white font-Kumbh_Sans leading-[60px]">

            Future Technology Blog

          </h3>

          <p className="text-lg text-neutral-400">

            Stay informed with our blog section dedicated to future technology.

          </p>

        </div>

      </div>

      {/* Right Column: Cards */}

      <div className="flex-1 pl-20 py-20 border-l border-neutral-800 flex flex-col gap-7">

        <div className="flex gap-7">

          <div className="flex-1 p-10 bg-zinc-900 rounded-xl outline outline-1 outline-neutral-800 flex flex-col gap-5">

            <h4 className="text-2xl font-medium text-white">Quantity</h4>

            <p className="text-lg text-neutral-400">

              Over 1,000 articles on emerging tech trends and breakthroughs.

            </p>

          </div>

          <div className="flex-1 p-10 bg-zinc-900 rounded-xl outline outline-1 outline-neutral-800 flex flex-col gap-5">

            <h4 className="text-2xl font-medium text-white">Variety</h4>

            <p className="text-lg text-neutral-400">

              Articles cover fields like AI, robotics, biotechnology, and more.

            </p>

          </div>

        </div>

        <div className="flex gap-7">

          <div className="flex-1 p-10 bg-zinc-900 rounded-xl outline outline-1 outline-neutral-800 flex flex-col gap-5">

            <h4 className="text-2xl font-medium text-white">Frequency</h4>

            <p className="text-lg text-neutral-400">

              Fresh content added daily to keep you up to date.

            </p>

          </div>

          <div className="flex-1 p-10 bg-zinc-900 rounded-xl outline outline-1 outline-neutral-800 flex flex-col gap-5">

            <h4 className="text-2xl font-medium text-white">Authoritative</h4>

            <p className="text-lg text-neutral-400">

              Written by our team of tech experts and industry professionals.

            </p>

          </div>

        </div>

      </div>

    </div>

  </section>

);



const ResourcesSection = () => (

  <section className="px-40 py-28 border-t border-neutral-800 bg-zinc-900 flex flex-col gap-8">

    <div className="flex justify-between items-center">

      <div className="flex flex-col gap-4">

        <div className="px-2.5 py-1.5 bg-zinc-800 rounded inline-flex">

          <span className="text-white text-xl font-medium">

            Your Gateway to In-Depth Information

          </span>

        </div>

        <h2 className="text-6xl font-medium text-white font-Kumbh_Sans leading-[75.40px]">

          Unlock Valuable Knowledge with FutureTech's Resources

        </h2>

      </div>

      <button className="px-6 py-4 bg-neutral-900 rounded-xl outline outline-1 outline-neutral-800 flex items-center gap-2.5">

        <span className="text-lg text-neutral-400">View All Resources</span>

        <div className="w-6 h-6 relative overflow-hidden">

          <div

            className="w-4 h-4 absolute bg-yellow-400"

            style={{ left: '3.75px', top: '3.75px' }}

          />

        </div>

      </button>

    </div>

    <div className="flex items-center gap-20">

      {/* Left Column: Ebooks */}

      <div className="flex flex-col gap-14">

        <div className="flex flex-col gap-12">

          <div className="w-20 h-20 relative overflow-hidden">

            <div

              className="w-8 h-12 absolute bg-yellow-400"

              style={{ left: '38px', top: '20px' }}

            />

            <div

              className="w-8 h-12 absolute bg-neutral-700"

              style={{

                left: '42px',

                top: '60px',

                transform: 'rotate(180deg)',

                transformOrigin: 'top left',

              }}

            />

          </div>

          <div className="flex flex-col gap-4">

            <h3 className="text-4xl font-semibold text-white font-Kumbh_Sans leading-[60px]">

              Ebooks

            </h3>

            <p className="text-xl text-neutral-400">

              Explore our collection of ebooks covering a wide spectrum of future technology topics.

            </p>

          </div>

        </div>

        <button className="px-6 py-4 bg-zinc-900 rounded-lg outline outline-1 outline-neutral-800 inline-flex items-center gap-2.5">

          <span className="text-lg text-neutral-400">Download Ebooks Now</span>

          <div className="w-6 h-6 relative overflow-hidden">

            <div

              className="w-4 h-4 absolute bg-yellow-400"

              style={{ left: '3.75px', top: '3.75px' }}

            />

          </div>

        </button>

        <div className="p-7 bg-zinc-900 rounded-xl outline outline-1 outline-neutral-800 inline-flex items-center gap-12">

          <div className="flex flex-col gap-1">

            <span className="text-lg text-neutral-400">Downloaded By</span>

            <span className="text-2xl font-semibold text-white">10k+ Users</span>

          </div>

          <div className="flex gap-2">

            <img

              className="w-12 h-12 rounded-full border-2 border-stone-500"

              src="https://placehold.co/50x50"

              alt="User"

            />

            <img

              className="w-12 h-12 rounded-full border-2 border-stone-500"

              src="https://placehold.co/50x50"

              alt="User"

            />

            <img

              className="w-12 h-12 rounded-full border-2 border-stone-500"

              src="https://placehold.co/50x50"

              alt="User"

            />

            <img

              className="w-12 h-12 rounded-full border-2 border-stone-500"

              src="https://placehold.co/50x50"

              alt="User"

            />

          </div>

        </div>

      </div>

      {/* Right Column: Topics & Stats */}

      <div className="flex-1 pl-20 py-20 border-l border-neutral-800 flex flex-col gap-7 items-end">

        <div className="flex justify-start items-center gap-5">

          <div className="w-60 text-2xl font-semibold text-white">

            Variety of Topics

          </div>

          <p className="flex-1 text-lg text-neutral-400">

            Topics include AI in education, renewable energy, healthcare, space exploration, and biotechnology.

          </p>

        </div>

        <img

          className="h-80 rounded-xl"

          src="https://placehold.co/917x332"

          alt="Topics"

        />

        <div className="flex justify-start items-center gap-5">

          <div className="p-7 bg-zinc-900 rounded-xl outline outline-1 outline-neutral-800 flex flex-col gap-1">

            <span className="text-lg text-neutral-400">Total Ebooks</span>

            <span className="text-xl font-semibold text-white">Over 100 ebooks</span>

          </div>

          <div className="flex-1 p-7 bg-zinc-900 rounded-xl outline outline-1 outline-neutral-800 flex items-center gap-5">

            <div className="flex flex-col gap-1">

              <span className="text-lg text-neutral-400">Download Formats</span>

              <span className="text-xl font-semibold text-white">

                PDF format for access.

              </span>

            </div>

            <button className="px-6 py-4 bg-zinc-900 rounded-[10px] outline outline-1 outline-neutral-800 flex items-center gap-2.5">

              <span className="text-lg text-neutral-400">Preview</span>

              <div className="w-6 h-6 relative overflow-hidden">

                <div

                  className="w-5 h-3.5 absolute"

                  style={{

                    left: '2px',

                    top: '5px',

                    outline: '1.5px solid',

                    outlineColor: 'yellow',

                    outlineOffset: '-0.75px',

                  }}

                />

              </div>

            </button>

          </div>

        </div>

        <div className="p-7 bg-zinc-900 rounded-xl outline outline-1 outline-neutral-800 flex flex-col gap-1">

          <span className="text-lg text-neutral-400">Average Author Expertise</span>

          <span className="text-xl font-medium text-white">

            Ebooks are authored by renowned experts with an average of 15 years of experience

          </span>

        </div>

      </div>

    </div>

  </section>

);



const BlogsSection = () => (

  <section className="px-40 py-28 border-t border-neutral-800 bg-zinc-900">

    <div className="flex justify-between items-center">

      <div className="flex flex-col gap-4">

        <div className="px-2.5 py-1.5 bg-zinc-800 rounded inline-flex">

          <span className="text-white text-xl font-medium">A Knowledge Treasure Trove</span>

        </div>

        <h2 className="text-6xl font-medium text-white font-Kumbh_Sans leading-[75.40px]">

          Explore FutureTech's In-Depth Blog Posts

        </h2>

      </div>

      <button className="px-6 py-4 bg-neutral-900 rounded-xl outline outline-1 outline-neutral-800 flex items-center gap-2.5">

        <span className="text-lg text-neutral-400">View All Blogs</span>

        <div className="w-6 h-6 relative overflow-hidden">

          <div

            className="w-4 h-4 absolute bg-yellow-400"

            style={{ left: '3.75px', top: '3.75px' }}

          />

        </div>

      </button>

    </div>

    <div className="mt-12 flex gap-5">

      {[

        "All",

        "Quantum Computing",

        "AI Ethics",

        "Space Exploration",

        "Biotechnology",

        "Renewable Energy",

      ].map((tab, i) => (

        <button

          key={i}

          className={`flex-1 px-6 py-7 rounded-lg outline outline-1 outline-neutral-800 flex justify-center items-center ${

            i === 0 ? "bg-zinc-900 text-white font-medium" : "text-neutral-400 font-normal"

          }`}

        >

          {tab}

        </button>

      ))}

    </div>

    <div className="mt-20 space-y-12">

      {/* Example Blog Post */}

      <article className="flex gap-12 border-b border-neutral-800 pb-20">

        <div className="w-96 flex items-center gap-4">

          <img

            className="w-20 h-20 rounded-full"

            src="https://placehold.co/80x80"

            alt="John Techson"

          />

          <div className="flex flex-col gap-0.5">

            <h3 className="text-xl font-semibold text-white">John Techson</h3>

            <p className="text-lg text-neutral-400">Quantum Computing</p>

          </div>

        </div>

        <div className="flex-1 flex gap-12">

          <div className="flex-1 flex flex-col gap-7">

            <time className="text-xl font-semibold text-neutral-400">October 15, 2023</time>

            <div className="flex flex-col gap-2.5">

              <h2 className="text-2xl font-semibold text-white">

                The Quantum Leap in Computing

              </h2>

              <p className="text-lg font-normal text-neutral-400">

                Explore the revolution in quantum computing, its applications, and its potential impact on various industries.

              </p>

            </div>

            <div className="flex gap-2.5">

              <div className="px-4 py-2 bg-zinc-900 rounded-full outline outline-1 outline-neutral-800 flex items-center gap-1">

                <span className="text-lg text-neutral-400 font-normal">24.5k</span>

              </div>

              <div className="px-4 py-2 bg-zinc-900 rounded-full outline outline-1 outline-neutral-800 flex items-center gap-1">

                <span className="text-lg text-neutral-400 font-normal">50</span>

              </div>

              <div className="px-4 py-2 bg-zinc-900 rounded-full outline outline-1 outline-neutral-800 flex items-center gap-1">

                <span className="text-lg text-neutral-400 font-normal">20</span>

              </div>

            </div>

          </div>

          <button className="px-6 py-4 bg-neutral-900 rounded-xl outline outline-1 outline-neutral-800 flex items-center gap-2.5">

            <span className="text-lg text-neutral-400">View Blog</span>

            <div className="w-6 h-6 relative overflow-hidden">

              <div

                className="w-4 h-4 absolute bg-yellow-400"

                style={{ left: '3.75px', top: '3.75px' }}

              />

            </div>

          </button>

        </div>

      </article>

      {/* Additional blog posts could be mapped similarly */}

    </div>

  </section>

);



const TestimonialsSection = () => (

  <section className="px-40 py-28 border-t border-b border-neutral-800 bg-zinc-900">

    <div className="flex justify-between items-center">

      <div className="flex flex-col gap-4">

        <div className="px-2.5 py-1.5 bg-zinc-800 rounded inline-flex">

          <span className="text-white text-xl font-medium">What Our Readers Say</span>

        </div>

        <h2 className="text-6xl font-medium text-white font-Kumbh_Sans leading-[75.40px]">

          Real Words from Real Readers

        </h2>

      </div>

      <button className="px-6 py-4 bg-neutral-900 rounded-xl outline outline-1 outline-neutral-800 flex items-center gap-2.5">

        <span className="text-lg text-neutral-400">View All Testimonials</span>

        <div className="w-6 h-6 relative overflow-hidden">

          <div

            className="w-4 h-4 absolute bg-yellow-400"

            style={{ left: '3.75px', top: '3.75px' }}

          />

        </div>

      </button>

    </div>

    <div className="mt-20 flex space-x-12">

      {/* Example Testimonial */}

      <div className="flex-1 py-20 flex flex-col items-center gap-10 border-b border-neutral-800">

        <div className="flex items-center gap-3">

          <img

            className="w-14 h-14 rounded-full"

            src="https://placehold.co/60x60"

            alt="Sarah Thompson"

          />

          <div className="flex flex-col gap-0.5">

            <h3 className="text-xl font-medium text-white">Sarah Thompson</h3>

            <p className="text-lg text-stone-500">San Francisco, USA</p>

          </div>

        </div>

        <div className="px-7 pt-12 pb-7 bg-zinc-900 rounded-xl outline outline-1 outline-neutral-800">

          <p className="text-center text-lg text-white">

            The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable.

          </p>

        </div>

      </div>

      {/* More testimonial cards can be added similarly */}

    </div>

  </section>

);



const CTASection = () => (

  <section className="px-40 py-28 bg-zinc-900 border-t border-b border-neutral-800 flex flex-col gap-24">

    <div className="flex items-center gap-20">

      <div className="flex space-x-4">

        {Array(8)

          .fill(0)

          .map((_, i) => (

            <div key={i} className="w-12 h-12 bg-yellow-400" />

          ))}

      </div>

      <div className="flex-1 flex flex-col gap-7">

        <div className="flex flex-col gap-4">

          <div className="px-2.5 py-1.5 bg-zinc-800 rounded inline-flex">

            <span className="text-white text-xl font-medium">Learn, Connect, and Innovate</span>

          </div>

          <h2 className="text-6xl font-medium text-white font-Kumbh_Sans leading-[75.40px]">

            Be Part of the Future Tech Revolution

          </h2>

        </div>

        <p className="text-lg text-zinc-500">

          Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers.

        </p>

      </div>

    </div>

    <div className="p-5 bg-neutral-900 rounded-xl outline outline-1 outline-neutral-800 flex gap-5">

      {[

        {

          title: 'Resource Access',

          description:

            'Visitors can access a wide range of resources, including ebooks, whitepapers, reports.',

        },

        {

          title: 'Community Forum',

          description:

            'Join our active community forum to discuss industry trends, share insights, and collaborate with peers.',

        },

        {

          title: 'Tech Events',

          description:

            'Stay updated on upcoming tech events, webinars, and conferences to enhance your knowledge.',

        },

      ].map((item, i) => (

        <div key={i} className="flex-1 p-10 bg-zinc-900 rounded-xl outline outline-1 outline-neutral-800 flex flex-col gap-5">

          <div className="flex items-center gap-5">

            <h3 className="flex-1 text-xl font-semibold text-white">{item.title}</h3>

            <div className="p-3.5 bg-yellow-400 rounded-full">

              <div className="w-6 h-6 relative overflow-hidden">

                <div

                  className="w-4 h-4 absolute bg-neutral-900"

                  style={{ left: '3.75px', top: '3.75px' }}

                />

              </div>

            </div>

          </div>

          <p className="text-lg text-neutral-400">{item.description}</p>

        </div>

      ))}

    </div>

  </section>

);

export default function FeaturesPage() {
  return (
    <>
      <Head>
        <title>FutureTech Features &amp; Resources</title>
      </Head>
      <div className="bg-neutral-900">
        <Header />
        <IntroSection />
        <main>
          <FeaturesSection />
          <ResourcesSection />
          <BlogsSection />
          <TestimonialsSection />
          <CTASection />
        </main>
      </div>
    </>
  );
}
