'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PortfolioData {
  projects: Array<{
    title: string;
    category: string;
    technology: string[];
    description: string;
    image: string;
    results: string[];
  }>;
  categories: string[];
}

interface PortfolioContentProps {
  data: PortfolioData;
}

export default function PortfolioContent({ data }: PortfolioContentProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { projects, categories } = data;

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="container-custom py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Portfolio</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover how we've helped businesses across industries transform their operations 
          with innovative technology solutions and digital transformation strategies.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              category === selectedCategory
                ? "bg-primary-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-primary-50 border border-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredProjects.map((project, index) => {
          // Define project slugs mapping by project title
          const projectSlugMap: { [key: string]: string } = {
            "RobustLMS - Complete Learning Platform": '/portfolio/robustlms-learning-platform',
            "Happy Hemp – E-Commerce Platform Development": '/portfolio/happy-hemp-ecommerce',
            "Boxchange - Search & Interim Management": '/portfolio/boxchange-executive-search',
            "Doctor Shannon - Modern Psychology & Wellness Platform": '/portfolio/doctor-shannon-psychology-wellness',
            "GradeNext AI Learning Platform": '/portfolio/gradenext-ai-learning-platform',
            "IDTR Mobile App - XAMARIN-MAUI Platform": '/portfolio/idtr-mobile-app-xamarin-maui',
          };
          
          const projectSlug = projectSlugMap[project.title];
          const ProjectWrapper = projectSlug ? 'a' : 'div';
          const wrapperProps = projectSlug ? { href: projectSlug, className: "block" } : {};
          
          return (
            <ProjectWrapper key={index} {...wrapperProps}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technology.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technology.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        +{project.technology.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="space-y-2">
                    {project.results.slice(0, 2).map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-sm text-gray-600">
                        <i className="fas fa-check-circle text-green-500 mr-2"></i>
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ProjectWrapper>
          );
        })}
      </div>

      {/* Success Metrics */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Success Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">25+</div>
            <p className="text-gray-600">Industries Served</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">12+</div>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <div className="relative overflow-hidden bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-12 shadow-2xl">
          {/* Background pattern with dots */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 rounded-3xl bg-white/20 bg-[radial-gradient(circle,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our expertise and proven track record.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Schedule Free Consultation
              </Link>
              <Link href="/get-a-quote" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
