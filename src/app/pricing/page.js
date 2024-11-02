// components/PricingCard.js
import { Card, Button } from "antd";
import {
  TrophyOutlined,
  StarOutlined,
  CrownOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { LampDemo } from "@/components/custom/lamp";

const PricingCard = ({ title, description, price, features, icon }) => {
  return (
    <>
      <Card
        className="w-full md:w-1/3 h-[500px] bg-gray-900 rounded-2xl shadow-lg flex flex-col justify-between"
        bordered={false}
      >
        <div className="flex flex-col items-center text-white mb-6">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 mb-4">
            {icon}
          </div>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-gray-400 mt-2">{description}</p>
        </div>
        <div className="text-center">
          <div className="text-5xl font-bold text-white mb-2">
            ${price}
            {/* <sup className="text-lg">/mo</sup> */}
          </div>
          <br />
          {/* <p className="text-gray-400 mb-6">per month, billed annually</p> */}
        </div>
        <ul className="space-y-2 text-gray-300 mb-8 px-4 text-left">
          {features.map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul>
        <Button
          type="primary"
          className="w-full bg-blue-500 hover:bg-blue-600 border-none text-white"
          href={`wa.me/+923314411708?text=Hi%20Naukhaiz,%20I%20would%20like%20to%20buy%20your%20${title}%20Package.`}
          target="_blank"
        >
          Get Package
        </Button>
      </Card>
    </>
  );
};

const PricingSection = () => {
  const plans = [
    {
      title: "Bronze",
      description:
        "Perfect for solopreneurs and small businesses looking to establish an online presence.",
      price: 75,
      features: [
        "5 professionally edited reels",
        "Basic color grading and transitions",
        "2 rounds of revisions",
        "Social media optimization for each reel",
      ],
      icon: <TrophyOutlined className="text-white text-2xl" />,
    },
    {
      title: "Silver",
      description:
        "Ideal for creators and growing brands aiming for increased engagement.",
      price: 200,
      features: [
        "15 high-quality edited reels",
        "Advanced color grading and transitions",
        "3 rounds of revisions",
        "Social media optimization and hashtags",
      ],
      icon: <StarOutlined className="text-white text-2xl" />,
    },
    {
      title: "Gold",
      description:
        "Comprehensive solution for teams and brands looking to maximize their reach.",
      price: 300,
      features: [
        "25 top-tier edited reels",
        "Premium color grading and effects",
        "4 rounds of revisions",
        "Priority support and quick turnaround",
      ],
      icon: <CrownOutlined className="text-white text-2xl" />,
    },
  ];

  return (
    <section className="py-20 px-4 md:py-20 bg-gradient-to-r from-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <CheckCircleOutlined className="text-6xl text-blue-500 mt-12 mb-4" />
        <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Select the plan that suits your needs. Whether you're just starting
          out or scaling up, we have a package for you. Our plans offer
          flexibility and value to help you grow with the right tools and
          support.
        </p>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              description={plan.description}
              price={plan.price}
              features={plan.features}
              icon={plan.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
