import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would send this to your backend
      console.log('Subscribed with:', email);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset the submitted state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="py-16 bg-beige-light">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-brown-dark">
          GET ON THE LIST
        </h2>
        <p className="text-brown-light mb-8">
          What's inside? New arrivals, exclusive sales, inspiration and much more!
        </p>
        
        <form 
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row max-w-md mx-auto gap-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your e-mail"
            className="flex-grow px-4 py-2 border border-brown-light focus:outline-none focus:ring-2 focus:ring-pink-primary"
            required
          />
          <button
            type="submit"
            className={`px-6 py-2 flex items-center justify-center transition duration-300 ${
              isSubmitted
                ? 'bg-green-500 text-white'
                : 'bg-brown-dark hover:bg-brown-light text-white'
            }`}
            disabled={isSubmitted}
          >
            {isSubmitted ? (
              'Thank you!'
            ) : (
              <>
                Sign up
                <ArrowRight size={16} className="ml-2" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;