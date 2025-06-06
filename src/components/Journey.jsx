import { FaChartLine, FaBookOpen, FaSeedling, FaGlobeAfrica, FaLeaf, FaLaptopCode, FaDatabase } from 'react-icons/fa';
import { GiTrade } from 'react-icons/gi';

const Journey = () => {
  const journeyItems = [
    {
      icon: <FaLaptopCode className="journey-icon-svg" />,
      title: "Software Engineering",
      description: (
        <>
          <p>Currently studying at Moringa School (Feb 2025 - Present) with skills in:</p>
          <ul>
            <li>Frontend: HTML, CSS, JavaScript, React</li>
            <li>Backend: Python, SQL</li>
            <li>Git version control and Agile workflows</li>
            <li>Building responsive, interactive web applications</li>
            <li>API integration and component-based architecture</li>
          </ul>
        </>
      )
    },
    {
      icon: <GiTrade className="journey-icon-svg" />,
      title: "Financial Markets Trader & Analyst",
      description: (
        <>
          <p>Self-employed since March 2020 (5+ years experience):</p>
          <ul>
            <li>Developed profitable 'No Trade Zone' strategy with disciplined risk management</li>
            <li>Specialized in technical and fundamental analysis</li>
            <li>Created ethical trading checklists and market education tools</li>
          </ul>
        </>
      )
    },
    {
      icon: <FaLeaf className="journey-icon-svg" />,
      title: "Agricultural Entrepreneur",
      description: (
        <>
          <p>Founded Mycobalance Fungi (Aug 2023 - Present):</p>
          <ul>
            <li>Mushroom cultivation using research-driven techniques</li>
            <li>Designed and built outdoor grow tent for optimized production</li>
            <li>Lettuce farming venture in Kajiado (R&D stage)</li>
            <li>Focus on sustainable and organic farming practices</li>
          </ul>
        </>
      )
    },
    {
  icon: <FaGlobeAfrica className="journey-icon-svg" />,
  title: "Research & Field Leadership",
  description: (
    <>
      <h4>Cross-Border Project Lead</h4>
      <p className="role-meta">Africa Economic Consultants | Dec 2021 | Uganda/Kenya Border</p>
      <ul>
        <li>Led implementation of digital cargo tracking system (RECDTS) during COVID</li>
        <li>Reduced transmission risks through contactless protocols</li>
        <li>Optimized border clearance times for regional trade</li>
      </ul>

      <h4>Field Research Supervisor</h4>
      <p className="role-meta">Africa Economic Consultants | May-Jun 2021 | Nairobi</p>
      <ul>
        <li>Promoted to lead 15-member data collection team</li>
        <li>Improved data accuracy through quality control systems</li>
      </ul>
    </>
  )
}
  ];
  
  return (
    <section id="journey" className="journey">
      <div className="container">
        <h2>My Professional Journey</h2>
        <div className="journey-items">
          {journeyItems.map((item, index) => (
            <div key={index} className="journey-card">
              <div className="journey-icon-container">
                {item.icon}
              </div>
              <div className="journey-content">
                <h3>{item.title}</h3>
                <div>{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;