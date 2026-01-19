import { useState, type FormEvent, type ChangeEvent } from 'react';

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

const ContactSection = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const validate = (): boolean => {
        const newErrors: FormErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name as keyof FormErrors]: undefined }));
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setStatus('submitting');

        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        } catch {
            setStatus('error');
        }
    };

    return (
        <section className="w-full bg-white py-16 px-4 md:px-12 flex flex-col md:flex-row h-auto md:min-h-[410px]">
            <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row">

                <div className="w-full md:w-1/3 mb-12 md:mb-0">
                    <h2 className="text-4xl md:text-5xl font-light leading-tight text-gray-900 mb-2">
                        QUESTION?
                    </h2>
                    <h2 className="text-4xl md:text-5xl font-light leading-tight text-gray-500 mb-2">
                        WE ARE HERE
                    </h2>
                    <h2 className="text-4xl md:text-5xl font-light leading-tight text-gray-500">
                        TO HELP!
                    </h2>
                </div>

                <form onSubmit={handleSubmit} noValidate className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">

                    <div className="order-1">
                        <label htmlFor="name" className="block text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full border-b py-2 focus:outline-none transition-colors ${errors.name ? 'border-red-500' : 'border-gray-300 focus:border-black'}`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div className="order-2">
                        <label htmlFor="email" className="block text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full border-b py-2 focus:outline-none transition-colors ${errors.email ? 'border-red-500' : 'border-gray-300 focus:border-black'}`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div className="order-3">
                        <label htmlFor="message" className="block text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">Message</label>
                        <textarea
                            rows={2}
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={`w-full border-b py-2 focus:outline-none transition-colors resize-none ${errors.message ? 'border-red-500' : 'border-gray-300 focus:border-black'}`}
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                    <div className="order-4 flex flex-col justify-end items-start md:items-start">
                        {status === 'success' ? (
                            <div className="text-green-600 font-bold uppercase tracking-widest">Message Sent!</div>
                        ) : (
                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className={`uppercase font-bold tracking-widest text-sm text-blue-600 border border-blue-600 px-12 py-4 hover:bg-blue-600 hover:text-white transition-colors duration-300 rounded-full w-full md:w-auto ${status === 'submitting' ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {status === 'submitting' ? 'Sending...' : 'Send'}
                            </button>
                        )}
                        {status === 'error' && <p className="text-red-500 text-xs mt-2">Failed to send. Please try again.</p>}
                    </div>

                </form>

            </div>
        </section>
    );
};

export default ContactSection;
