import React, { useState } from 'react';
import axios from 'axios';

const SymptomChecker = () => {
    const [answers, setAnswers] = useState({
        fever: '',
        cough: '',
        fatigue: '',
        breathing: '',
        additionalSymptoms: '',
    });
    const [showAdditionalSymptoms, setShowAdditionalSymptoms] = useState(false);
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [name]: value,
        }));

        if (name === 'additionalSymptoms' && value === 'Yes') {
            setShowAdditionalSymptoms(true);
        } else if (name === 'additionalSymptoms' && value === 'No') {
            setShowAdditionalSymptoms(false);
            setAnswers((prevAnswers) => ({ ...prevAnswers, additionalSymptoms: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const symptoms = `
            Fever: ${answers.fever}, 
            Cough: ${answers.cough}, 
            Fatigue: ${answers.fatigue}, 
            Breathing Difficulty: ${answers.breathing}, 
            Additional Symptoms: ${answers.additionalSymptoms.trim() || 'None'}
        `;
        try {
            const res = await axios.post('https://api.openai.com/v1/chat/completions', {
                model: 'gpt-3.5-turbo',
                messages: [
                    { 
                        role: 'user', 
                        content: `Act as a Symptom Analyzer and analyze follwing symptoms ${symptoms}. and generate answer in basic hindi to be understood by rural people and shoule not be more than 200 words` 
                    }
                ],
            }, {
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`, // Use your OpenAI API key
                    'Content-Type': 'application/json',
                },
            });
        
            setResponse(res.data.choices[0].message.content);
        } catch (error) {
            console.error("Error fetching data from OpenAI:", error);
            setResponse("क्षमा करें, प्रतिक्रिया प्राप्त करने में कोई समस्या हुई।");
        }
         finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-400 to-blue-500 py-16 px-4">
            <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Symptom Checker</h2>

                {loading ? (
                    <div className="flex justify-center items-center h-48">
                        <p className="text-lg">Loading...</p>
                    </div>
                ) : response ? (
                    <div className="results text-center">
                        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Thank you for your responses!</h3>
                        <p className="text-lg text-gray-700 mb-4">Based on your symptoms, you may be experiencing:</p>
                        <p className="text-lg text-gray-800">{response}</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <p className="text-lg font-semibold mb-2">Do you have a fever?</p>
                            <div className="flex space-x-4">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="fever"
                                        value="Yes"
                                        onChange={handleInputChange}
                                        className="form-radio h-5 w-5 text-blue-500"
                                        required
                                    />
                                    <span className="ml-2">Yes</span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="fever"
                                        value="No"
                                        onChange={handleInputChange}
                                        className="form-radio h-5 w-5 text-blue-500"
                                        required
                                    />
                                    <span className="ml-2">No</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <p className="text-lg font-semibold mb-2">Do you have a cough?</p>
                            <div className="flex space-x-4">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="cough"
                                        value="Yes"
                                        onChange={handleInputChange}
                                        className="form-radio h-5 w-5 text-blue-500"
                                        required
                                    />
                                    <span className="ml-2">Yes</span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="cough"
                                        value="No"
                                        onChange={handleInputChange}
                                        className="form-radio h-5 w-5 text-blue-500"
                                        required
                                    />
                                    <span className="ml-2">No</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <p className="text-lg font-semibold mb-2">Do you feel fatigued?</p>
                            <div className="flex space-x-4">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="fatigue"
                                        value="Yes"
                                        onChange={handleInputChange}
                                        className="form-radio h-5 w-5 text-blue-500"
                                        required
                                    />
                                    <span className="ml-2">Yes</span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="fatigue"
                                        value="No"
                                        onChange={handleInputChange}
                                        className="form-radio h-5 w-5 text-blue-500"
                                        required
                                    />
                                    <span className="ml-2">No</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <p className="text-lg font-semibold mb-2">Do you have difficulty breathing?</p>
                            <div className="flex space-x-4">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="breathing"
                                        value="Yes"
                                        onChange={handleInputChange}
                                        className="form-radio h-5 w-5 text-blue-500"
                                        required
                                    />
                                    <span className="ml-2">Yes</span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="breathing"
                                        value="No"
                                        onChange={handleInputChange}
                                        className="form-radio h-5 w-5 text-blue-500"
                                        required
                                    />
                                    <span className="ml-2">No</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <p className="text-lg font-semibold mb-2">Do you have any additional symptoms?</p>
                            <div className="flex space-x-4">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="additionalSymptoms"
                                        value="Yes"
                                        onChange={handleInputChange}
                                        className="form-radio h-5 w-5 text-blue-500"
                                        required
                                    />
                                    <span className="ml-2">Yes</span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="additionalSymptoms"
                                        value="No"
                                        onChange={handleInputChange}
                                        className="form-radio h-5 w-5 text-blue-500"
                                        required
                                    />
                                    <span className="ml-2">No</span>
                                </label>
                            </div>

                            {showAdditionalSymptoms && (
                                <div className="mt-4">
                                    <textarea
                                        name="additionalSymptomsText"
                                        value={answers.additionalSymptomsText || ''}
                                        onChange={handleInputChange}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="Describe any additional symptoms"
 
                                    />
                                </div>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-gradient-to-l transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default SymptomChecker;
