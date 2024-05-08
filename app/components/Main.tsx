import React from 'react';
import { Card } from './Card';

export function Main() {
    const companies = [
        { name: "Company A", description: "Company A provides cutting-edge solutions for data analytics and business intelligence. Our platform helps businesses make data-driven decisions and optimize their operations." },
        { name: "Company B", description: "Company B offers a comprehensive suite of marketing automation tools. Our platform helps businesses streamline their marketing efforts, increase customer engagement, and drive revenue growth." },
        { name: "Company C", description: "Company C is a leading provider of cloud-based project management software. Our platform enables teams to collaborate effectively, track progress, and deliver projects on time and within budget." },
        { name: "Company D", description: "Company D specializes in AI-powered customer support solutions. Our platform uses advanced natural language processing and machine learning algorithms to provide personalized and efficient customer service." },
        { name: "Company E", description: "Company E offers a scalable and secure cloud infrastructure for businesses. Our platform provides reliable storage, computing power, and networking capabilities to support your organization's growth and innovation." },
        { name: "Company F", description: "Company F is revolutionizing the e-commerce industry with our advanced inventory management system. Our platform helps businesses optimize their supply chain, reduce costs, and improve customer satisfaction." },
        { name: "Company G", description: "Company G provides a comprehensive HR management solution for businesses of all sizes. Our platform simplifies employee onboarding, payroll processing, performance management, and more." },
        { name: "Company H", description: "Company H offers a powerful customer relationship management (CRM) software. Our platform helps businesses build and maintain strong customer relationships, streamline sales processes, and drive revenue growth." }
    ];

  return (
    <div className="container flex flex-wrap p-4">
      {companies.map((company, index) => (
        <Card key={index} name={company.name} description={company.description} />
      ))}
    </div>
  );
}