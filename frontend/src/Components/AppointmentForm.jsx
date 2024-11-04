import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const AppointmentForm = () => {
    const { t, i18n } = useTranslation();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [Aadhar, setAadhar] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [appointmentDate, setAppointmentDate] = useState("");
    const [department, setDepartment] = useState("Pediatrics");
    const [doctorFirstName, setDoctorFirstName] = useState("");
    const [doctorLastName, setDoctorLastName] = useState("");
    const [address, setAddress] = useState("");
    const [hasVisited, setHasVisited] = useState(false);

    const departmentsArray = [
        "Pediatrics",
        "Orthopedics",
        "Cardiology",
        "Neurology",
        "Oncology",
        "Radiology",
        "Physical Therapy",
        "Dermatology",
        "ENT",
        "Heart"
    ];

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const fetchDoctors = async () => {
            const { data } = await axios.get(
                "http://localhost:4000/api/v1/user/doctors",
                { withCredentials: true }
            );
            setDoctors(data.doctors);
        };
        fetchDoctors();
    }, []);

    const handleAppointment = async (e) => {
        e.preventDefault();
        try {
            const hasVisitedBool = Boolean(hasVisited);
            const { data } = await axios.post(
                "http://localhost:4000/api/v1/appointment/post",
                {
                    firstName,
                    lastName,
                    email,
                    phone,
                    Aadhar,
                    dob,
                    gender,
                    appointment_date: appointmentDate,
                    department,
                    doctor_firstName: doctorFirstName,
                    doctor_lastName: doctorLastName,
                    hasVisited: hasVisitedBool,
                    address,
                },
                {
                    withCredentials: true,
                    headers: { "Content-Type": "application/json" },
                }
            );
            toast.success(data.message);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhone("");
            setAadhar("");
            setDob("");
            setGender("");
            setAppointmentDate("");
            setDepartment("Pediatrics");
            setDoctorFirstName("");
            setDoctorLastName("");
            setHasVisited(false);
            setAddress("");
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    return (
        <>
            <div className="bg-blue-100 text-blue-800 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-extrabold mb-4">{t('title')}</h1>
                    <p className="text-lg">{t('subtitle')}</p>
                </div>
            </div>
            <div className="container mx-auto px-4 py-12 bg-blue-100">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto border border-gray-200">
                    <h2 className="text-3xl font-semibold text-center mb-8">Appointment Form</h2>
                    <form onSubmit={handleAppointment} className="space-y-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <input
                                type="text"
                                placeholder={t('firstName')}
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="text"
                                placeholder={t('lastName')}
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <input
                                type="email"
                                placeholder={t('email')}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="tel"
                                placeholder={t('phone')}
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <input
                                type="number"
                                placeholder={t('aadhar')}
                                value={Aadhar}
                                onChange={(e) => setAadhar(e.target.value)}
                                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />

                            <div className="relative">
                                <label htmlFor="dob" className="absolute top-2 left-3 text-gray-500 text-sm transition-transform duration-300 transform -translate-y-1 scale-75 origin-top-left peer-focus:-translate-y-4 peer-focus:scale-75 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100">
                                    DOB
                                </label>
                                <input
                                    id="dob"
                                    type="date"
                                    value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                                    className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
                                    required
                                />
                            </div>


                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <select
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                <option value="">{t('selectGender')}</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            <div className="relative">
                                <label
                                    htmlFor="appointmentDate"
                                    className="absolute top-3 left-3 text-gray-500 text-sm transition-transform duration-300 transform -translate-y-3 scale-75 origin-top-left peer-focus:-translate-y-4 peer-focus:scale-75 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100"
                                >
                                    Appointment Date
                                </label>
                                <input
                                    id="appointmentDate"
                                    type="date"
                                    value={appointmentDate}
                                    onChange={(e) => setAppointmentDate(e.target.value)}
                                    className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
                                    required
                                />
                            </div>

                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <select
                                value={department}
                                
                                onChange={(e) => {
                                    setDepartment(e.target.value);
                                    setDoctorFirstName("");
                                    setDoctorLastName("");
                                }}
                                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                
                                <option value="">{t('selectDepartment')}</option>
                                {departmentsArray.map((depart, index) => (
                                    <option value={depart} key={index}>
                                        {depart}
                                    </option>
                                ))}
                            </select>
                            <select
                                value={`${doctorFirstName} ${doctorLastName}`}
                                onChange={(e) => {
                                    const [firstName, lastName] = e.target.value.split(" ");
                                    setDoctorFirstName(firstName);
                                    setDoctorLastName(lastName);
                                }}
                                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                disabled={!department}
                            >
                                <option value="">Select Doctor</option>
                                {doctors
                                    .filter((doctor) => doctor.doctorDepartment === department)
                                    .map((doctor, index) => (
                                        <option
                                            value={`${doctor.firstName} ${doctor.lastName}`}
                                            key={index}
                                        >
                                            {doctor.firstName} {doctor.lastName}
                                        </option>
                                    ))}
                            </select>
                        </div>
                        <textarea
                            rows="4"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Address"
                            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <div className="flex items-center space-x-3">
                            <p className="text-lg mb-0">Have you visited before?</p>
                            <input
                                type="checkbox"
                                checked={hasVisited}
                                onChange={(e) => setHasVisited(e.target.checked)}
                                className="w-5 h-5"
                            />
                        </div>
                        <button className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                            Book Appointment
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AppointmentForm;
