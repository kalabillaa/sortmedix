import React from 'react';
import { useTranslation } from 'react-i18next';

const Information = () => {
  const { t } = useTranslation();

  return (
    <section className='bg-blue-50 py-8 mt-4'>
      <h2 className='text-4xl font-bold text-center text-blue-900 mb-8'>
        {t('healthInformation.title')}
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-4'>
        <InfoCard 
          title={t('healthInformation.commonDiseases.title')} 
          content={
            <ul className='custom-list'>
              {t('healthInformation.commonDiseases.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          }
        />
        <InfoCard 
          title={t('healthInformation.healthyDos.title')} 
          content={
            <ul className='custom-list'>
              {t('healthInformation.healthyDos.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          }
        />
        <InfoCard 
          title={t('healthInformation.healthyDonts.title')} 
          content={
            <ul className='custom-list'>
              {t('healthInformation.healthyDonts.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          }
        />
        <InfoCard 
          title={t('healthInformation.mentalHealth.title')} 
          content={
            <ul className='custom-list'>
              {t('healthInformation.mentalHealth.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          }
        />
      </div>
    </section>
  );
};

const InfoCard = ({ title, content }) => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 hover:bg-blue-50 transition duration-300 ease-in-out'>
      <h3 className='text-xl font-semibold mb-4 text-blue-700'>{title}</h3>
      <div className='text-gray-800'>{content}</div>
    </div>
  );
};

export default Information;
