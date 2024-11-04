// src/Features.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const Features = () => {
  const { t } = useTranslation();

  return (
    <section className='bg-blue-50 py-12'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center text-blue-800 mb-8'>
          {t('features.title')}
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <FeatureCard 
            title={t('features.cards.chatbot.title')} 
            description={t('features.cards.chatbot.description')}
          />
          <FeatureCard 
            title={t('features.cards.telehealth.title')} 
            description={t('features.cards.telehealth.description')}
          />
          <FeatureCard 
            title={t('features.cards.education.title')} 
            description={t('features.cards.education.description')}
          />
          <FeatureCard 
            title={t('features.cards.offline.title')} 
            description={t('features.cards.offline.description')}
          />
          <FeatureCard 
            title={t('features.cards.emergency.title')} 
            description={t('features.cards.emergency.description')}
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ title, description }) => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 hover:bg-blue-100 transition duration-300 ease-in-out'>
      <h3 className='text-xl font-semibold mb-4 text-blue-800'>{title}</h3>
      <p className='text-gray-700'>{description}</p>
    </div>
  );
};

export default Features;
