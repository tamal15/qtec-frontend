import { useState, useRef, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import ScrollToTop from '../../ScrollToTop/ScrollToTop';

const AboutWhy = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { t } = useTranslation();

  // Memoizing the data array to prevent unnecessary recalculations
  const data = useMemo(() => [
    {
      titleKey: "oneStopSolutionTitle",
      descriptionKey: "oneStopSolutionDesc",
    },
    {
      titleKey: "trackRecordTitle",
      descriptionKey: "trackRecordDesc",
    },
    {
      titleKey: "globalServiceReachTitle",
      descriptionKey: "globalServiceReachDesc",
    },
    {
      titleKey: "excellenceTitle",
      descriptionKey: "excellenceDesc",
    },
    {
      titleKey: "extensiveNetworkTitle",
      descriptionKey: "extensiveNetworkDesc",
    },
    {
      titleKey: "strategicPartnershipTitle",
      descriptionKey: "strategicPartnershipDesc",
    },
  ], []);  // Empty array means the 'data' array will be memoized and won't change unless explicitly updated.

  const contentRefs = useRef([]);

  // Calculate the height of content for smooth animation
  const [heights, setHeights] = useState([]);
  useEffect(() => {
    const contentHeights = contentRefs.current.map((el) => el?.scrollHeight || 0);
    setHeights(contentHeights);
  }, [data]);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto p-4 mt-20">
      <ScrollToTop/>
      <h2 className="text-3xl font-light mb-4 border-b-2 pb-2 inline-block">
        {t("whyUs")}
      </h2>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div key={index} className="border-b">
            <button
              className="w-full text-left py-3 flex justify-between items-center hover:text-[#007cde]"
              onClick={() => handleToggle(index)}
            >
              <span className="text-lg font-medium">{t(item.titleKey)}</span>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </button>
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              style={{
                maxHeight: activeIndex === index ? `${heights[index]}px` : '0px',
                overflow: 'hidden',
                transition: 'max-height 0.5s ease-in-out',
              }}
              className="text-gray-600"
            >
              <div className="py-2">
                <p>{t(item.descriptionKey)}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">{t("loadingContent")}</p>
      )}
    </div>
  );
};

export default AboutWhy;
