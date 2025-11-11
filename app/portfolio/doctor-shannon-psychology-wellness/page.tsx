import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Doctor Shannon - Modern Psychology & Wellness Platform | Portfolio | Smartwebrowse India Private Limited',
  description: 'Comprehensive psychology and wellness platform offering personalized therapy for anxiety, depression and stress with mindfulness-based and neuroscience-informed approaches, including optional ketamine-assisted therapy.',
  keywords: 'psychology, wellness, therapy, mindfulness, neuroscience, ketamine therapy, mental health, anxiety, depression',
  openGraph: {
    title: 'Doctor Shannon - Modern Psychology & Wellness Platform | Portfolio | Smartwebrowse India Private Limited',
    description: 'Comprehensive psychology and wellness platform offering personalized therapy for anxiety, depression and stress with mindfulness-based and neuroscience-informed approaches, including optional ketamine-assisted therapy.',
    url: 'https://www.smartwebrowse.com/portfolio/doctor-shannon-psychology-wellness',
    siteName: 'Smartwebrowse India Private Limited',
    type: 'website',
  },
  alternates: {
  },
};

export default function DoctorShannonPortfolio() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container-custom py-16">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Portfolio
          </Link>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="mb-6">
              <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                Healthcare
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Doctor Shannon - Modern Psychology & Wellness Platform
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Developed a comprehensive psychology and wellness platform offering personalized therapy for anxiety, 
              depression and stress with mindfulness-based and neuroscience-informed approaches, including optional 
              ketamine-assisted therapy for deeper breakthroughs.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.doctor-shannon.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <i className="fas fa-external-link-alt mr-2"></i>
                View Live Website
              </a>
              <a href="/get-a-quote" className="btn-outline">
                <i className="fas fa-envelope mr-2"></i>
                Discuss Similar Project
              </a>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/Doctor-Shannon.png"
              alt="Doctor Shannon Psychology & Wellness Platform"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Project Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Challenge</h3>
              <p className="text-gray-600">
                Create a comprehensive psychology and wellness platform that combines modern psychology with ancient wisdom, 
                offering personalized therapy for anxiety, depression, and stress while providing workplace wellness 
                solutions and innovative ketamine-assisted therapy options.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Solution</h3>
              <p className="text-gray-600">
                Built a modern psychology platform led by Dr. Shannon Albarelli, Psy.D, offering mindfulness-based and 
                neuroscience-informed approaches with optional ketamine-assisted therapy, workplace wellness consulting, 
                and comprehensive mental health support for individuals and organizations.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-heart text-primary-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Personalized Therapy</h3>
              <p className="text-gray-600">
                Individual and couples therapy for anxiety, depression, and stress with personalized treatment plans 
                designed to help clients achieve calm, focus, and well-being.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-brain text-primary-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Mindfulness & Neuroscience</h3>
              <p className="text-gray-600">
                Mindfulness-based and neuroscience-informed approaches that blend modern psychology with ancient wisdom 
                for effective mental health treatment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-pills text-primary-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Ketamine-Assisted Therapy</h3>
              <p className="text-gray-600">
                Optional ketamine-assisted psychotherapy (KAP) for deeper breakthroughs in treatment-resistant 
                depression, anxiety, and trauma.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-building text-primary-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Workplace Wellness</h3>
              <p className="text-gray-600">
                Corporate and nonprofit consulting to help teams tackle stress, become more productive, and thrive 
                through mindfulness-based workplace wellness programs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-video text-primary-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Meditation Videos</h3>
              <p className="text-gray-600">
                Guided meditation sessions and mindfulness videos to support ongoing mental wellness and stress 
                management for clients and organizations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-microphone text-primary-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Speaking Engagements</h3>
              <p className="text-gray-600">
                Keynote speaking on modern psychology, mental health awareness, and workplace wellness to educate 
                and inspire audiences on mental health topics.
              </p>
            </div>
          </div>
        </section>

        {/* Services Offered */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Services Offered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Individual & Couples Therapy</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">Anxiety and depression treatment</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">Stress management and coping strategies</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">Life transitions and personal growth</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">Relationship counseling and support</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Organizational Services</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">Workplace wellness consulting</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">Team stress management programs</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">Leadership development and coaching</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">Mental health awareness training</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-2xl">
              <blockquote className="text-lg text-gray-700 mb-4">
                "Doctor Shannon is authentic, sharp and engaging. Our team was not only impressed but inspired by her 
                to use the stress management techniques that she so eloquently shared with us."
              </blockquote>
              <cite className="text-sm font-medium text-gray-600">
                — Chris Nowinski, CEO, Concussion Legacy Foundation
              </cite>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <blockquote className="text-lg text-gray-700 mb-4">
                "Doctor Shannon provided our team with valuable strategies to help manage everyday stress and 
                successfully navigate through our current COVID world. Her guided meditations were welcome respites 
                from our busy days."
              </blockquote>
              <cite className="text-sm font-medium text-gray-600">
                — Amy Pastor, Senior Associate, MODLO
              </cite>
            </div>
          </div>
        </section>

        {/* Technologies Used */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Approach & Methodology</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Modern Psychology', 'Mindfulness', 'Neuroscience', 'Ketamine Therapy'].map((tech, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <span className="text-sm font-medium text-gray-700">{tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Results & Impact */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Results & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Achievements</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">Personalized therapy for anxiety, depression and stress</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">Mindfulness-based and neuroscience-informed approach</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">Optional ketamine-assisted therapy for deeper breakthroughs</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span className="text-gray-700">Comprehensive workplace wellness solutions</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Credentials</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-cog text-primary-500 mr-3"></i>
                  <span className="text-gray-700">Clinical Psychologist (Psy.D)</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-cog text-primary-500 mr-3"></i>
                  <span className="text-gray-700">Certified Mindfulness and Meditation Instructor</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-cog text-primary-500 mr-3"></i>
                  <span className="text-gray-700">Ketamine-Assisted Psychotherapy (KAP) Specialist</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-cog text-primary-500 mr-3"></i>
                  <span className="text-gray-700">Public Speaker and Corporate Consultant</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Build Your Healthcare Platform?</h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how we can help you create a similar psychology and wellness platform for your healthcare or mental health practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/get-a-quote" className="btn-primary">
                <i className="fas fa-envelope mr-2"></i>
                Start Your Project
              </a>
              <a href="/portfolio" className="btn-outline">
                <i className="fas fa-arrow-left mr-2"></i>
                View More Projects
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
