import { FaChartLine, FaBookOpen, FaSeedling, FaGlobeAfrica, FaLeaf } from 'react-icons/fa';
import { GiTrade } from 'react-icons/gi';

const Journey = () => {
  const journeyItems = [
    {
      icon: <GiTrade className="journey-icon-svg" />,
      title: "Financial Markets",
      description: "Active trader since 2020 using the 'No Trade Zone' strategy - a risk-conscious, fundamentals-based breakout approach."
    },
    {
      icon: <FaGlobeAfrica className="journey-icon-svg" />,
      title: "Research & Field Work",
      description: "Led cross-border initiatives like the RECDTS project at the Kenya-Uganda border to digitize and streamline cargo movement during COVID-19."
    },
    {
      icon: <FaLeaf className="journey-icon-svg" />,
      title: "Mushroom & Organic Farming",
      description: "Designed and built an outdoor grow tent for mushroom cultivation. Currently exploring organic lettuce farming in Kajiado."
    }
  ];
  
  return (
    <section id="journey" className="journey">
      <div className="container">
        <h2>My Journey</h2>
        <div className="journey-items">
          {journeyItems.map((item, index) => (
            <div key={index} className="journey-card">
              <div className="journey-icon-container">
                {item.icon}
              </div>
              <div className="journey-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;