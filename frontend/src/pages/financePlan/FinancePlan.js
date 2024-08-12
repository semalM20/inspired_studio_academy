import React, { useState } from 'react';
import { toast } from 'react-toastify';
import SummaryApi from '../../common';

const FinancePlan = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        query: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Send form data to backend
        const response = await fetch(SummaryApi.postFinancePlanQueries.url, {
            method: SummaryApi.postFinancePlanQueries.method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            toast.success('Query sent successfully');
            // Reset form fields
            setFormData({
                name: '',
                email: '',
                phone: '',
                query: ''
            });
        } else {
            toast.error('Failed to send query');
        }
    };

    return (
        <section id="financePlan">
            <div className="mx-auto container p-4">
                <div className="bg-white p-5 w-full max-w-sm mx-auto">
                    <div className="mx-auto text-center">
                        <p>Finance Plan Query Form</p>
                    </div>
                    <form onSubmit={handleSubmit} className="pt-6 flex flex-col gap-2">
                        <div className="grid">
                            <label>Name</label>
                            <div className="bg-slate-100 p-2">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full h-full outline-none bg-transparent"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label>Email</label>
                            <div className="bg-slate-100 p-2">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full h-full outline-none bg-transparent"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label>Phone Number</label>
                            <div className="bg-slate-100 p-2">
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full h-full outline-none bg-transparent"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label>Query</label>
                            <div className="bg-slate-100 p-2">
                                <textarea
                                    name="query"
                                    value={formData.query}
                                    onChange={handleChange}
                                    className="w-full h-full outline-none bg-transparent"
                                    required
                                ></textarea>
                            </div>
                        </div>
                        <button type="submit" className="bg-red-600 hover:bg-red-700 text-white w-full px-6 py-2 max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default FinancePlan;
