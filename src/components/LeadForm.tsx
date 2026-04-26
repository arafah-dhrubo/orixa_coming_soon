import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';

const LeadForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "880XXXXXXXXXX";
    const message = `Hi ORIXA,\n\nEmail: ${email}\nNote: ${note}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Notify me form" className="flex flex-col items-center gap-3 w-full max-w-[320px] my-4">
      <label htmlFor="email" className="sr-only">Email address</label>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="Your email address"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        icon={
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        }
      />
      
      <label htmlFor="note" className="sr-only">Note (optional)</label>
      <Input
        id="note"
        name="note"
        type="text"
        placeholder="Add a note (optional)"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        icon={
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        }
      />

      <Button
        type="submit"
        isSubmitted={isSubmitted}
        disabled={isSubmitted || !email}
        className="mt-1"
      >
        <span className="flex items-center justify-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
          <span>{isSubmitted ? 'SUBMITTED!' : 'GET EARLY ACCESS'}</span>
        </span>
      </Button>
    </form>
  );
};

export default LeadForm;
