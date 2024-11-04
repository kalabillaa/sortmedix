// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          welcomeTitle: "Welcome to {{appName}}",
          welcomeDescription: "Your healthcare companion, empowering rural communities with AI-driven solutions for symptom assessments, telehealth consultations, and emergency health education — accessible even without the internet.",
          empoweringText: "Empowering Rural Health",
          appointmentButton: "Appointment",
          features: {
            title: "Our Key Features",
            cards: {
              chatbot: {
                title: "AI-Driven Chatbot",
                description: "Provides instant symptom assessment, first-aid guidance, and health education. Available 24/7 in multiple languages with voice support for users with low literacy.",
              },
              telehealth: {
                title: "Telehealth Integration",
                description: "Facilitates remote consultations with healthcare professionals through video calls. Includes appointment scheduling, reminders, and secure commuAadharation for accessible and convenient medical care.",
              },
              education: {
                title: "Health Education",
                description: "Delivers localized health tips and preventive care information tailored to rural needs, promoting better health practices and disease prevention.",
              },
              offline: {
                title: "Offline Functionality",
                description: "Ensures access to critical health resources and emergency guidelines even without internet connectivity, allowing users to obtain necessary information anytime.",
              },
              emergency: {
                title: "Emergency Assistance",
                description: "Provides step-by-step emergency instructions and local healthcare contacts, enabling users to manage urgent situations effectively and access support promptly.",
              },
            },
          },

          healthInformation: {
            title: "Health Information",
            commonDiseases: {
              title: "Common Diseases & Cures",
              items: [
                "Common Cold: Rest, hydration, over-the-counter medications.",
                "Flu: Rest, fluids, antivirals (if prescribed).",
                "Strep Throat: Antibiotics prescribed by a doctor.",
                "Consult a doctor if symptoms persist or worsen."
              ],
            },
            healthyDos: {
              title: "Healthy Life Do’s",
              items: [
                "Balanced Diet: Include fruits, vegetables, and whole grains.",
                "Exercise: Regular physical activity is essential.",
                "Hydration: Drink plenty of water.",
                "Sleep: Ensure proper rest to boost your immune system.",
                "Regular Check-ups: Visit your doctor for routine health assessments."
              ],
            },
            healthyDonts: {
              title: "Healthy Life Don’ts",
              items: [
                "Avoid Junk Food: Limit unhealthy snacks and sugary drinks.",
                "No Smoking: Avoid tobacco products.",
                "Alcohol: Drink in moderation.",
                "Manage Stress: Don’t let stress pile up—practice self-care.",
                "Avoid Sedentary Habits: Keep active to promote well-being."
              ],
            },
            mentalHealth: {
              title: "Mental Health",
              items: [
                "Exercise: Physical activity improves mental well-being.",
                "Sleep & Nutrition: Prioritize sleep and a healthy diet.",
                "Stay Connected: Keep social connections strong.",
                "Seek Help: Reach out if you experience anxiety or depression.",
                "Therapy: Counseling or therapy offers helpful coping strategies."
              ],
            },
          },

          title: "Book an Appointment",
          subtitle: "Schedule your consultation with our specialists",
          firstName: "First Name",
          lastName: "Last Name",
          email: "Email",
          phone: "Phone",
          aadhar: "Aadhar",
          dob: "DOB",
          selectGender: "Select Gender",
          male: "Male",
          female: "Female",
          appointmentDate: "Appointment Date",
          selectDepartment: "Select Department",
          selectDoctor: "Select Doctor",
          address: "Address",
          visitedBefore: "Have you visited before?",
          bookAppointment: "Book Appointment",
          successMessage: "Appointment booked successfully!",
          errorMessage: "Error booking appointment!"


        },
      },
      hi: {
        translation: {
          welcomeTitle: "आपका स्वागत है {{appName}}",
          welcomeDescription: "आपका स्वास्थ्य साथी, ग्रामीण समुदायों को लक्षण आकलन, टेलीहेल्थ परामर्श, और आपातकालीन स्वास्थ्य शिक्षा के लिए एआई-संचालित समाधानों के साथ सशक्त बनाना — यहां तक कि इंटरनेट के बिना भी सुलभ।",
          empoweringText: "ग्रामीण स्वास्थ्य को सशक्त बनाना",
          appointmentButton: "अपॉइंटमेंट",
          features: {
            title: "हमारी प्रमुख विशेषताएँ",
            cards: {
              chatbot: {
                title: "एआई-चालित चैटबॉट",
                description: "तत्काल लक्षण आकलन, प्राथमिक चिकित्सा मार्गदर्शन, और स्वास्थ्य शिक्षा प्रदान करता है। कम साक्षरता वाले उपयोगकर्ताओं के लिए 24/7 कई भाषाओं में आवाज़ समर्थन उपलब्ध है।",
              },
              telehealth: {
                title: "टेलीहेल्थ एकीकरण",
                description: "वीडियो कॉल के माध्यम से स्वास्थ्य पेशेवरों के साथ दूरस्थ परामर्श को सक्षम बनाता है। सुलभ और सुविधाजनक चिकित्सा देखभाल के लिए अपॉइंटमेंट शेड्यूलिंग, रिमाइंडर और सुरक्षित संचार शामिल हैं।",
              },
              education: {
                title: "स्वास्थ्य शिक्षा",
                description: "स्थानीय स्वास्थ्य सुझावों और रोकथाम की देखभाल की जानकारी प्रदान करता है जो ग्रामीण जरूरतों के अनुसार तैयार की गई है, बेहतर स्वास्थ्य प्रथाओं और बीमारी की रोकथाम को बढ़ावा देती है।",
              },
              offline: {
                title: "ऑफलाइन कार्यक्षमता",
                description: "इंटरनेट कनेक्टिविटी के बिना भी महत्वपूर्ण स्वास्थ्य संसाधनों और आपातकालीन दिशानिर्देशों तक पहुंच सुनिश्चित करता है, जिससे उपयोगकर्ता किसी भी समय आवश्यक जानकारी प्राप्त कर सकते हैं।",
              },
              emergency: {
                title: "आपातकालीन सहायता",
                description: "आपात स्थितियों को प्रभावी ढंग से प्रबंधित करने और समर्थन तक शीघ्र पहुंच प्राप्त करने के लिए चरण-दर-चरण आपातकालीन निर्देश और स्थानीय स्वास्थ्य सेवा संपर्क प्रदान करता है।",
              },
            },
          },
          healthInformation: {
            title: "स्वास्थ्य जानकारी",
            commonDiseases: {
              title: "सामान्य रोग और उपचार",
              items: [
                "सामान्य जुकाम: विश्राम, हाइड्रेशन, ओवर-द-काउंटर दवाएँ।",
                "फ्लू: आराम, तरल पदार्थ, एंटीवायरल (यदि निर्धारित हो)।",
                "स्ट्रेप गले का संक्रमण: डॉक्टर द्वारा निर्धारित एंटीबायोटिक्स।",
                "अगर लक्षण बने रहें या बिगड़ें तो डॉक्टर से परामर्श करें।"
              ],
            },
            healthyDos: {
              title: "स्वस्थ जीवन की बातें",
              items: [
                "संतुलित आहार: फलों, सब्जियों और साबुत अनाज को शामिल करें।",
                "व्यायाम: नियमित शारीरिक गतिविधि आवश्यक है।",
                "हाइड्रेशन: पर्याप्त पानी पिएं।",
                "नींद: अपनी प्रतिरक्षा प्रणाली को बढ़ाने के लिए उचित आराम सुनिश्चित करें।",
                "नियमित जांच: नियमित स्वास्थ्य आकलनों के लिए अपने डॉक्टर से मिलें।"
              ],
            },
            healthyDonts: {
              title: "स्वस्थ जीवन की न बातें",
              items: [
                "जंक फूड से बचें: अस्वास्थ्यकर नाश्ते और मीठे पेय को सीमित करें।",
                "धूम्रपान न करें: तंबाकू उत्पादों से बचें।",
                "शराब: संयम में पीएं।",
                "तनाव प्रबंधित करें: तनाव को जमा न होने दें—स्व-देखभाल का अभ्यास करें।",
                "स्थिर आदतों से बचें: भलाई को बढ़ावा देने के लिए सक्रिय रहें।"
              ],
            },
            mentalHealth: {
              title: "मानसिक स्वास्थ्य",
              items: [
                "व्यायाम: शारीरिक गतिविधि मानसिक कल्याण में सुधार करती है।",
                "नींद और पोषण: नींद और एक स्वस्थ आहार को प्राथमिकता दें।",
                "जुड़े रहें: सामाजिक संबंधों को मजबूत रखें।",
                "मदद मांगें: अगर आपको चिंता या अवसाद का अनुभव हो तो संपर्क करें।",
                "थेरेपी: काउंसलिंग या थेरेपी सहायक सामना करने की रणनीतियाँ प्रदान करती है।"
              ],
            },
          },
          title: "अपॉइंटमेंट बुक करें",
          subtitle: "हमारे विशेषज्ञों के साथ अपनी परामर्श निर्धारित करें",
          firstName: "पहला नाम",
          lastName: "अंतिम नाम",
          email: "ईमेल",
          phone: "फोन",
          aadhar: "आधार",
          dob: "जन्म तिथि",
          selectGender: "लिंग चुनें",
          male: "पुरुष",
          female: "महिला",
          appointmentDate: "अपॉइंटमेंट की तारीख",
          selectDepartment: "विभाग चुनें",
          selectDoctor: "डॉक्टर चुनें",
          address: "पता",
          visitedBefore: "क्या आप पहले आए हैं?",
          bookAppointment: "अपॉइंटमेंट बुक करें",
          successMessage: "अपॉइंटमेंट सफलतापूर्वक बुक की गई!",
          errorMessage: "अपॉइंटमेंट बुक करने में त्रुटि!"
        },
      },
    },
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
