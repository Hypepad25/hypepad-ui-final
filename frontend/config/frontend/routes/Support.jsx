import React from 'react';

export default function Support() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Support & Contact</h1>
      <p className="mb-6">
        If you need help, have questions, or want to partner, reach out to us directly:
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="font-semibold">Telegram:</div>
          <a
            href="https://t.me/hypepad25"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            @hypepad25
          </a>
        </div>
        <div className="flex items-center gap-3">
          <div className="font-semibold">Email:</div>
          <a
            href="mailto:contact@hypepad.app"
            className="underline"
          >
            contact@hypepad.app
          </a>
        </div>
      </div>
      <div className="bg-[#1f2237] p-4 rounded-lg">
        <p className="mb-2">
          For general inquiries or issues, you can also check our <a href="/support" className="underline">FAQ</a> or write to us and we will respond as soon as possible.
        </p>
        <p className="text-sm text-gray-300">
          HYPEPAD is committed to providing secure and responsive support. Please include relevant details (e.g., wallet address, transaction IDs) when contacting for troubleshooting.
        </p>
      </div>
    </div>
  );
}
