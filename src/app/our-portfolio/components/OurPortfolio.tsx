'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

// Define types for the state and other variables.
interface PortfolioItem {
  category: string;
  imageSrc: string;
  altText: string;
}

const OurPortfolio: React.FC = () => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [activeFilter, setActiveFilter] = useState<string>('all'); // Track the active filter
  const maxVisible: number = 9;

  useEffect(() => {
    const items = document.querySelectorAll(".bi-portfolio-item-3");
    const readMoreWrapper = document.getElementById("readMoreWrapper") as HTMLElement;

    // Hide items after maxVisible
    if (items.length > maxVisible) {
      items.forEach((item, index) => {
        if (index >= maxVisible) {
          item.classList.add("hidden");
        }
      });
      readMoreWrapper.style.display = "block";
    }
    
    // Filter items based on the active filter
    filterItems();

  }, [activeFilter]); // Re-run when active filter changes

  const handleReadMore = () => {
    const items = document.querySelectorAll(".bi-portfolio-item-3");
    items.forEach(item => item.classList.remove("hidden"));
    setShowAll(true);
    const readMoreWrapper = document.getElementById("readMoreWrapper") as HTMLElement;
    readMoreWrapper.style.display = "none";
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter); // Set active filter
  };

  const filterItems = () => {
    const items = document.querySelectorAll(".bi-portfolio-item-3");

    // If filter is 'all', show all items
    if (activeFilter === 'all') {
      items.forEach(item => item.classList.remove('hidden'));
    } else {
      // Show items that match the active filter
      items.forEach(item => {
        const category = item.getAttribute('data-category');
        if (category === activeFilter || activeFilter === 'all') {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    }
  };

  // Array of portfolio items data
  const portfolioItems: PortfolioItem[] = [...Array(12).keys()].map((index) => ({
    category: `${(index % 3) + 1}`, // Categories will be '1', '2', or '3'
    imageSrc: `/assets/images/portfolipage/${index + 1}.jpg`,
    altText: `Portfolio ${index + 1}`,
  }));

  return (
    <section id="bi-portfolio-feed" className="bi-portfolio-feed-section inner-page-padding" style={{ paddingTop: '90px' }}>
      <div className="container pt-5">
        <div className="bi-portfolio-feed-top-content d-flex justify-content-between flex-wrap align-items-end">
          <div className="bi-section-title-3 headline pera-content">
            <div className="bi-subtitle text-uppercase wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
              Our Best Portfolio
            </div>
            <h2 className="tx-split-text split-in-right text-center text-white">Our Best Portfolio</h2>
          </div>
          <div className="bi-portfolio-filter-btn ul-li text-center wow fadeInRight" data-wow-delay="300ms" data-wow-duration="1500ms">
            <ul id="filters" className="nav-gallery">
              <li className={`filtr-button ${activeFilter === 'all' ? 'filtr-active' : ''}`} onClick={() => handleFilterChange('all')}>See All</li>
              <li className={`filtr-button ${activeFilter === '1' ? 'filtr-active' : ''}`} onClick={() => handleFilterChange('1')}>Business</li>
              <li className={`filtr-button ${activeFilter === '2' ? 'filtr-active' : ''}`} onClick={() => handleFilterChange('2')}>Development</li>
              <li className={`filtr-button ${activeFilter === '3' ? 'filtr-active' : ''}`} onClick={() => handleFilterChange('3')}>Web Design</li>
            </ul>
          </div>
        </div>

        <div className="bi-portfolio-feed-item-wrapper filtr-container d-flex flex-wrap">
          {/* Render Portfolio Items */}
          {portfolioItems.map((item, index) => (
            <div key={index} className={`bi-portfolio-item-3 filtr-item`} data-category={item.category} data-sort="Busy streets">
              <div className="bi-portfolio-img-text-3">
                <div className="portfolio-img">
                  <Image 
                    className="img"
                    src={item.imageSrc}
                    alt={item.altText}
                    width={500} // Adjust width and height accordingly
                    height={450} // Adjust height
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div id="readMoreWrapper" style={{ display: !showAll ? 'block' : 'none', marginTop: '30px' }} className="bi-btn-4 text-uppercase text-center m-auto">
          <button onClick={handleReadMore} id="readMoreBtn">
            Read More <span className="d-flex justify-content-center align-items-center"><Image src="/assets/img/icon/arrow.svg" alt="Arrow Icon" width={15} height={15} /></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurPortfolio;
