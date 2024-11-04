// src/Components/LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng); // Change the language
  };

  return (
    <div className="flex space-x-4">
      <button 
        onClick={() => handleLanguageChange('en')} 
        className="bg-blue-500 text-white px-4 py-2 rounded">
        English
      </button>
      <button 
        onClick={() => handleLanguageChange('hi')} 
        className="bg-green-500 text-white px-4 py-2 rounded">
        हिंदी
      </button>
    </div>
  );
};

export default LanguageSwitcher;
