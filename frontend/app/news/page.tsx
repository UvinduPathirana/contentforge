// pages/index.js
import Head from 'next/head';

const Header = () => (
  <header className="bg-neutral-900 border-b border-neutral-800">
    {/* Top subscribe bar */}
    <div className="px-6 py-5 flex justify-center items-center gap-2.5">
      <p className="text-neutral-400 text-lg">
        Subscribe to our Newsletter For New & latest Blogs and Resources
      </p>
      <div className="w-6 h-6 relative overflow-hidden">
        <div
          className="w-4 h-4 absolute bg-yellow-400"
          style={{ left: '3.75px', top: '3.75px' }}
        />
      </div>
    </div>
    {/* Navigation bar */}
    <div className="px-40 py-6 bg-zinc-900 flex justify-between items-center relative">
      <div className="w-44 h-12">
        {/* Example logo – replace with your actual logo */}
        <div className="flex space-x-1">
          <div className="w-4 h-4 bg-yellow-400" />
          <div className="w-4 h-4 bg-yellow-400" />
          <div className="w-4 h-4 bg-yellow-400" />
        </div>
      </div>
      <button className="px-5 py-3.5 bg-yellow-400 rounded-[10px] text-neutral-900 text-lg font-medium">
        Contact Us
      </button>
      <nav className="absolute left-1/2 transform -translate-x-1/2 flex gap-10">
        <a className="text-zinc-500 text-lg" href="#">
          Home
        </a>
        <a
          className="px-6 py-3.5 bg-neutral-900 rounded-[10px] outline outline-1 outline-zinc-800 text-white text-lg font-medium"
          href="#"
        >
          News
        </a>
        <a className="text-zinc-500 text-lg" href="#">
          Podcasts
        </a>
        <a className="text-zinc-500 text-lg" href="#">
          Resources
        </a>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section className="px-40 py-20">
    <h1 className="text-7xl font-medium text-white font-['Kumbh_Sans'] leading-[104px]">
      Today's Headlines: Stay
    </h1>
    <div className="flex items-center gap-20 mt-4">
      <h2 className="text-7xl font-medium text-white font-['Kumbh_Sans'] leading-[104px]">
        Informed
      </h2>
      <p className="text-neutral-400 text-lg font-normal font-['Inter']">
        Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories. Discover the world through our news coverage.
      </p>
    </div>
  </section>
);

const FeaturedArticle = () => (
  <section className="px-40 py-20 border-t border-neutral-800 flex items-center gap-20">
    <img
      className="w-[515px] h-96 rounded-xl"
      src="https://placehold.co/515x427"
      alt="Featured Article"
    />
    <div className="flex-1 flex flex-col gap-12">
      <div className="flex flex-col gap-7">
        <h2 className="text-3xl font-semibold text-white font-['Inter'] leading-[48px]">
          Global Climate Summit Addresses Urgent Climate Action
        </h2>
        <p className="text-xl text-neutral-400 font-normal font-['Inter']">
          World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.
        </p>
      </div>
      <div className="flex gap-12">
        <div className="flex flex-col gap-1">
          <span className="text-lg text-neutral-400">Category</span>
          <span className="text-lg text-white">Environment</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-lg text-neutral-400">Publication Date</span>
          <span className="text-lg text-white">October 10, 2023</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-lg text-neutral-400">Author</span>
          <span className="text-lg text-white">Jane Smith</span>
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div className="flex gap-2.5">
          <div className="px-4 py-2 bg-zinc-900 rounded-full outline outline-1 outline-neutral-800 flex items-center gap-1">
            <div className="w-6 h-6 relative overflow-hidden">
              <div
                className="w-4 h-3.5 absolute outline outline-[1.5px] outline-offset-[-0.75px] outline-stone-500"
                style={{ left: '3.5px', top: '4.5px' }}
              />
            </div>
            <span className="text-lg text-neutral-400 font-normal font-['Kumbh_Sans']">
              14k
            </span>
          </div>
          <div className="px-4 py-2 bg-zinc-900 rounded-full outline outline-1 outline-neutral-800 flex items-center gap-1">
            <div className="w-6 h-6 relative overflow-hidden">
              <div
                className="w-4 h-4 absolute outline outline-[1.5px] outline-offset-[-0.75px] outline-stone-500"
                style={{ left: '3.59px', top: '3.74px' }}
              />
            </div>
            <span className="text-lg text-neutral-400 font-normal font-['Kumbh_Sans']">
              204
            </span>
          </div>
        </div>
        <button className="px-6 py-4 bg-neutral-900 rounded-xl outline outline-1 outline-neutral-800 text-lg text-neutral-400">
          Read More
        </button>
      </div>
    </div>
  </section>
);

const NewsItem = ({ author, category, date, title, description, views, comments, shares, imgSrc }) => (
  <article className="px-40 py-20 border-b border-neutral-800 flex gap-12">
    <div className="w-96 flex items-center gap-4">
      <img className="w-20 h-20 rounded-full" src={imgSrc} alt={author} />
      <div className="flex flex-col gap-0.5">
        <h3 className="text-xl font-semibold text-white">{author}</h3>
        <p className="text-lg text-neutral-400">{category}</p>
      </div>
    </div>
    <div className="flex-1 flex gap-12">
      <div className="flex-1 flex flex-col gap-7">
        <time className="text-xl font-semibold text-neutral-400">{date}</time>
        <div className="flex flex-col gap-2.5">
          <h2 className="text-2xl font-semibold text-white">{title}</h2>
          <p className="text-lg font-normal text-neutral-400">{description}</p>
        </div>
        <div className="flex gap-2.5">
          <div className="px-4 py-2 bg-zinc-900 rounded-full outline outline-1 outline-neutral-800 flex items-center gap-1">
            <div className="w-6 h-6 relative overflow-hidden">
              <div
                className="w-5 h-4 absolute bg-orange-600"
                style={{ left: '2.25px', top: '3px' }}
              />
            </div>
            <span className="text-lg text-neutral-400 font-normal font-['Kumbh_Sans']">{views}</span>
          </div>
          <div className="px-4 py-2 bg-zinc-900 rounded-full outline outline-1 outline-neutral-800 flex items-center gap-1">
            <div className="w-6 h-6 relative overflow-hidden">
              <div
                className="w-4 h-4 absolute outline outline-[1.5px] outline-offset-[-0.75px] outline-stone-500"
                style={{ left: '4px', top: '4px' }}
              />
            </div>
            <span className="text-lg text-neutral-400 font-normal font-['Kumbh_Sans']">{comments}</span>
          </div>
          <div className="px-4 py-2 bg-zinc-900 rounded-full outline outline-1 outline-neutral-800 flex items-center gap-1">
            <div className="w-6 h-6 relative overflow-hidden">
              <div
                className="w-4 h-4 absolute outline outline-[1.5px] outline-offset-[-0.75px] outline-stone-500"
                style={{ left: '3.59px', top: '3.74px' }}
              />
            </div>
            <span className="text-lg text-neutral-400 font-normal font-['Kumbh_Sans']">{shares}</span>
          </div>
        </div>
      </div>
      <button className="px-6 py-4 bg-neutral-900 rounded-xl outline outline-1 outline-neutral-800 text-lg text-neutral-400 flex items-center gap-2.5">
        Read More
        <div className="w-6 h-6 relative overflow-hidden">
          <div
            className="w-4 h-4 absolute bg-yellow-400"
            style={{ left: '3.75px', top: '3.75px' }}
          />
        </div>
      </button>
    </div>
  </article>
);

const NewsSection = () => (
  <section className="flex flex-col">
    <div className="px-40 py-28 bg-zinc-900 border-t border-b border-neutral-800 flex items-center gap-64">
      <div className="flex-1 flex flex-col gap-4">
        <div className="px-2.5 py-1.5 bg-zinc-800 rounded inline-flex">
          <span className="text-xl font-medium text-white">Welcome to Our News Hub</span>
        </div>
        <h2 className="text-6xl font-medium text-white font-['Kumbh_Sans'] leading-[75.40px]">
          Discover the World of Headlines
        </h2>
      </div>
      <button className="px-6 py-4 bg-neutral-900 rounded-xl outline outline-1 outline-neutral-800 flex items-center gap-2.5">
        <span className="text-lg font-normal text-neutral-400">View All News</span>
        <div className="w-6 h-6 relative overflow-hidden">
          <div
            className="w-4 h-4 absolute bg-yellow-400"
            style={{ left: '3.75px', top: '3.75px' }}
          />
        </div>
      </button>
    </div>
    <div className="px-40 py-12 border-b border-neutral-800 flex gap-5">
      {["All", "Technology", "Politics", "Health", "Environment", "Sports"].map((tab, index) => (
        <button
          key={index}
          className={`flex-1 px-6 py-7 rounded-lg outline outline-1 outline-neutral-800 flex justify-center items-center ${
            index === 0
              ? 'bg-zinc-900 text-white text-lg font-medium'
              : 'text-neutral-400 text-lg font-normal'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
    <NewsItem
      author="John Techson"
      category="Technology"
      date="October 15, 2023"
      title="Tech Giants Announce New Product Line"
      description="Explore the latest innovations from tech industry leaders, unveiling new products that promise to transform the digital landscape."
      views="24.5k"
      comments="50"
      shares="20"
      imgSrc="https://placehold.co/80x80"
    />
    <NewsItem
      author="Sarah Ethicist"
      category="Technology"
      date="October 11, 2023"
      title="The Future of Autonomous Vehicles"
      description="An in-depth analysis of the rapid advancements in autonomous vehicle technology and their impact on transportation."
      views="32k"
      comments="72"
      shares="18"
      imgSrc="https://placehold.co/80x80"
    />
    <NewsItem
      author="Astronomer X"
      category="Technology"
      date="December 10, 2023"
      title="Tech Startups Secure Record Funding"
      description="An overview of the recent surge in funding for tech startups, shaping the entrepreneurial landscape."
      views="20k"
      comments="31"
      shares="12"
      imgSrc="https://placehold.co/80x80"
    />
  </section>
);

const GridArticles = () => {
  const articles = [
    {
      title: "A Decisive Victory for Progressive Policies",
      category: "Politics",
      views: "2.2k",
      comments: "60",
      imgSrc: "https://placehold.co/512x222",
    },
    {
      title: "Tech Giants Unveil Cutting-Edge AI Innovations",
      category: "Technology",
      views: "6k",
      comments: "92",
      imgSrc: "https://placehold.co/512x222",
    },
    {
      title: "COVID-19 Variants",
      category: "Health",
      views: "10k",
      comments: "124",
      imgSrc: "https://placehold.co/512x222",
    },
  ];

  return (
    <section className="px-40 py-20 border-t border-neutral-800 flex gap-7">
      {articles.map((item, index) => (
        <article key={index} className="flex-1 flex flex-col gap-5">
          <img className="w-full h-56 rounded-xl" src={item.imgSrc} alt={item.title} />
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2.5">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-xl text-neutral-400">{item.category}</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2.5">
                <div className="px-4 py-2 bg-zinc-900 rounded-full outline outline-1 outline-neutral-800 flex items-center gap-1">
                  <div className="w-6 h-6 relative overflow-hidden">
                    <div
                      className="w-4 h-3.5 absolute outline outline-[1.5px] outline-offset-[-0.75px] outline-stone-500"
                      style={{ left: '3.5px', top: '4.5px' }}
                    />
                  </div>
                  <span className="text-lg text-neutral-400 font-normal font-['Kumbh_Sans']">{item.views}</span>
                </div>
                <div className="px-4 py-2 bg-zinc-900 rounded-full outline outline-1 outline-neutral-800 flex items-center gap-1">
                  <div className="w-6 h-6 relative overflow-hidden">
                    <div
                      className="w-4 h-4 absolute outline outline-[1.5px] outline-offset-[-0.75px] outline-stone-500"
                      style={{ left: '3.59px', top: '3.74px' }}
                    />
                  </div>
                  <span className="text-lg text-neutral-400 font-normal font-['Kumbh_Sans']">{item.comments}</span>
                </div>
              </div>
              <button className="px-6 py-4 bg-neutral-900 rounded-xl outline outline-1 outline-neutral-800 text-lg text-neutral-400 flex items-center gap-2.5">
                Read More
                <div className="w-6 h-6 relative overflow-hidden">
                  <div
                    className="w-4 h-4 absolute bg-yellow-400"
                    style={{ left: '3.75px', top: '3.75px' }}
                  />
                </div>
              </button>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

const FeaturedVideos = () => (
  <section className="flex flex-col">
    <div className="px-40 py-28 bg-zinc-900 border-t border-b border-neutral-800 flex items-center gap-64">
      <div className="flex-1 flex flex-col gap-4">
        <div className="px-2.5 py-1.5 bg-zinc-800 rounded inline-flex">
          <span className="text-xl font-medium text-white">Featured Videos</span>
        </div>
        <h2 className="text-6xl font-medium text-white font-['Kumbh_Sans'] leading-[75.40px]">
          Visual Insights for the Modern Viewer
        </h2>
      </div>
      <button className="px-6 py-4 bg-neutral-900 rounded-xl outline outline-1 outline-neutral-800 flex items-center gap-2.5">
        <span className="text-lg font-normal text-neutral-400">View All</span>
        <div className="w-6 h-6 relative overflow-hidden">
          <div
            className="w-4 h-4 absolute bg-yellow-400"
            style={{ left: '3.75px', top: '3.75px' }}
          />
        </div>
      </button>
    </div>
    {/* First row of videos */}
    <div className="px-40 border-b border-neutral-800 flex items-start gap-20">
      <div className="flex-1 py-20 rounded-xl flex flex-col gap-7">
        <div className="h-96 p-7 bg-gradient-to-b from-neutral-900/0 to-neutral-900 rounded-xl flex flex-col justify-end gap-2.5">
          <div className="w-16 h-16 relative overflow-hidden" />
          <span className="text-right text-lg text-zinc-500">2.30 min</span>
        </div>
        <div className="flex flex-col gap-2.5">
          <h3 className="text-2xl font-semibold text-white">
            Mars Exploration: Unveiling Alien Landscapes
          </h3>
          <p className="text-lg font-normal text-neutral-400">
            Embark on a journey through the Red Planet's breathtaking landscapes and uncover the mysteries of Mars.
          </p>
        </div>
      </div>
      <div className="w-[702px] self-stretch rotate-90 border outline outline-1 outline-neutral-800"></div>
      <div className="flex-1 py-20 rounded-xl flex flex-col gap-7">
        <div className="h-96 p-7 bg-gradient-to-b from-neutral-900/0 to-neutral-900 rounded-xl flex flex-col justify-end gap-2.5">
          <div className="w-16 h-16 relative overflow-hidden" />
          <span className="text-right text-lg text-zinc-500">2.30 min</span>
        </div>
        <div className="flex flex-col gap-2.5">
          <h3 className="text-2xl font-semibold text-white">
            Blockchain Explained: A Revolution in Finance
          </h3>
          <p className="text-lg font-normal text-neutral-400">
            Delve into the world of blockchain technology and its transformative impact on the financial industry.
          </p>
        </div>
      </div>
    </div>
    {/* Second row of videos */}
    <div className="px-40 border-b border-neutral-800 flex items-start gap-20">
      <div className="flex-1 py-20 rounded-xl flex flex-col gap-7">
        <div className="h-96 p-7 bg-gradient-to-b from-neutral-900/0 to-neutral-900 rounded-xl flex flex-col justify-end gap-2.5">
          <div className="w-16 h-16 relative overflow-hidden" />
          <span className="text-right text-lg text-zinc-500">2.30 min</span>
        </div>
        <div className="flex flex-col gap-2.5">
          <h3 className="text-2xl font-semibold text-white">
            Breaking the Silence: Mental Health Awareness in the Workplace
          </h3>
          <p className="text-lg font-normal text-neutral-400">
            An exploration of the importance of mental health awareness and the initiatives reshaping workplaces for employee well-being.
          </p>
        </div>
      </div>
      <div className="w-[702px] self-stretch rotate-90 border outline outline-1 outline-neutral-800"></div>
      <div className="flex-1 py-20 rounded-xl flex flex-col gap-7">
        <div className="h-96 p-7 bg-gradient-to-b from-neutral-900/0 to-neutral-900 rounded-xl flex flex-col justify-end gap-2.5">
          <div className="w-16 h-16 relative overflow-hidden" />
          <span className="text-right text-lg text-zinc-500">2.30 min</span>
        </div>
        <div className="flex flex-col gap-2.5">
          <h3 className="text-2xl font-semibold text-white">
            Revolutionizing Investment Strategies
          </h3>
          <p className="text-lg font-normal text-neutral-400">
            An in-depth look at global efforts to conserve biodiversity and safeguard endangered species from extinction.
          </p>
        </div>
      </div>
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
            <span className="text-xl font-medium text-white">
              Learn, Connect, and Innovate
            </span>
          </div>
          <h2 className="text-6xl font-medium text-white font-['Kumbh_Sans'] leading-[75.40px]">
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
        { title: 'Resource Access', description: 'Visitors can access a wide range of resources, including ebooks, whitepapers, reports.' },
        { title: 'Community Forum', description: 'Join our active community forum to discuss industry trends, share insights, and collaborate with peers.' },
        { title: 'Tech Events', description: 'Stay updated on upcoming tech events, webinars, and conferences to enhance your knowledge.' },
      ].map((item, i) => (
        <div key={i} className="flex-1 p-10 bg-zinc-900 rounded-xl outline outline-1 outline-neutral-800 flex flex-col gap-5">
          <div className="flex items-center gap-5">
            <h3 className="flex-1 text-xl font-semibold text-white">{item.title}</h3>
            <div className="p-3.5 bg-yellow-400 rounded-full">
              <div
                className="w-6 h-6 relative overflow-hidden"
                style={{ position: 'relative' }}
              >
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
    <div className="py-10 flex justify-between items-start relative">
      <div className="flex items-center gap-2.5">
        <a className="text-lg text-stone-500" href="#">
          Terms & Conditions
        </a>
        <div className="w-6 h-6 self-stretch rotate-90 border outline outline-1 outline-neutral-800"></div>
        <a className="text-lg text-stone-500" href="#">
          Privacy Policy
        </a>
      </div>
      <p className="text-lg text-stone-500">© 2024 FutureTech. All rights reserved.</p>
      <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-5">
        <div className="w-6 h-6 relative overflow-hidden">
          <div
            className="w-6 h-5 absolute bg-white"
            style={{ top: '2.4px', left: '0.6px' }}
          />
        </div>
        <div className="w-6 h-6 relative overflow-hidden">
          <div
            className="w-3.5 h-3.5 absolute bg-white"
            style={{ top: '5.4px', left: '0px' }}
          />
          <div
            className="w-1.5 h-3 absolute bg-white"
            style={{ top: '5.8px', left: '14.19px' }}
          />
          <div
            className="w-[2.38px] h-3 absolute bg-white"
            style={{ top: '6.47px', left: '21.62px' }}
          />
        </div>
        <div className="w-6 h-6 relative overflow-hidden">
          <div
            className="w-5 h-5 absolute bg-white"
            style={{ top: '1.6px', left: '1.6px' }}
          />
        </div>
      </div>
    </div>
  </section>
);

const NewsPage = () => {
  return (
    <>
      <Head>
        <title>FutureTech News Hub</title>
      </Head>
      <div className="bg-neutral-900">
        <Header />
        <main>
          <Hero />
          <FeaturedArticle />
          <GridArticles />
          <NewsSection />
          <FeaturedVideos />
          <CTASection />
        </main>
      </div>
    </>
  );
};

export default NewsPage;
