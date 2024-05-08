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
        { name: "Company H", description: "Company H offers a powerful customer relationship management (CRM) software. Our platform helps businesses build and maintain strong customer relationships, streamline sales processes, and drive revenue growth." },
        { name: "Company I", description: "Company I specializes in cybersecurity solutions for businesses. Our platform protects your organization from cyber threats, secures sensitive data, and ensures compliance with industry regulations." },
        { name: "Company J", description: "Company J is a leading provider of digital marketing services. Our platform helps businesses attract, engage, and retain customers through targeted advertising, content creation, and social media marketing." },
        { name: "Company K", description: "Company K offers a comprehensive suite of financial management tools. Our platform helps businesses track expenses, manage budgets, and optimize cash flow to achieve financial success." },
        { name: "Company L", description: "Company L specializes in AI-powered chatbot solutions for businesses. Our platform enables organizations to provide instant support, automate customer interactions, and improve customer satisfaction." },
        { name: "Company M", description: "Company M provides a cloud-based collaboration platform for teams. Our platform enables real-time communication, file sharing, task management, and project tracking to enhance productivity and teamwork." },
        { name: "Company N", description: "Company N offers a scalable and secure cloud infrastructure for businesses. Our platform provides reliable storage, computing power, and networking capabilities to support your organization's growth and innovation." },
        { name: "Company O", description: "Company O is a leading provider of cloud-based project management software. Our platform enables teams to collaborate effectively, track progress, and deliver projects on time and within budget." },
        { name: "Company P", description: "Company P specializes in AI-powered customer support solutions. Our platform uses advanced natural language processing and machine learning algorithms to provide personalized and efficient customer service." },
        { name: "Company Q", description: "Company Q offers a comprehensive suite of marketing automation tools. Our platform helps businesses streamline their marketing efforts, increase customer engagement, and drive revenue growth." },
        { name: "Company R", description: "Company R provides cutting-edge solutions for data analytics and business intelligence. Our platform helps businesses make data-driven decisions and optimize their operations." },
        { name: "Company S", description: "Company S is a leading provider of digital marketing services. Our platform helps businesses attract, engage, and retain customers through targeted advertising, content creation, and social media marketing." },
        { name: "Company T", description: "Company T specializes in AI-powered chatbot solutions for businesses. Our platform enables organizations to provide instant support, automate customer interactions, and improve customer satisfaction." },
        { name: "Company U", description: "Company U offers a comprehensive suite of financial management tools. Our platform helps businesses track expenses, manage budgets, and optimize cash flow to achieve financial success." },
        { name: "Company V", description: "Company V is revolutionizing the e-commerce industry with our advanced inventory management system. Our platform helps businesses optimize their supply chain, reduce costs, and improve customer satisfaction." },
        { name: "Company W", description: "Company W provides a comprehensive HR management solution for businesses of all sizes. Our platform simplifies employee onboarding, payroll processing, performance management, and more." },
        { name: "Company X", description: "Company X offers a powerful customer relationship management (CRM) software. Our platform helps businesses build and maintain strong customer relationships, streamline sales processes, and drive revenue growth." },
        { name: "Company Y", description: "Company Y specializes in cybersecurity solutions for businesses. Our platform protects your organization from cyber threats, secures sensitive data, and ensures compliance with industry regulations." },
        { name: "Company Z", description: "Company Z is a leading provider of cloud-based project management software. Our platform enables teams to collaborate effectively, track progress, and deliver projects on time and within budget." }
    ];

  return (
    <div className="container flex flex-wrap">
      {companies.map((company, index) => (
        <Card key={index} name={company.name} description={company.description} />
      ))}
    </div>
  );
}