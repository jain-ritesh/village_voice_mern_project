import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6 md:px-20 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">Terms and Conditions</h1>

        <p className="mb-4">
          These Terms and Conditions ("Terms") govern your use of the <strong>Village Voice</strong> platform. By accessing or using our website, you agree to comply with and be bound by these Terms. If you do not agree, please do not use our services.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">1. Use of the Website</h2>
        <p className="mb-4">
          Village Voice provides a platform for villagers to share suggestions, feedback, and ideas for the betterment of their communities. You may use the website for lawful purposes only.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">2. User Contributions</h2>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>You are responsible for the content you submit (e.g., suggestions, comments).</li>
          <li>Content must not be abusive, offensive, defamatory, or violate any laws.</li>
          <li>We reserve the right to remove content that violates these Terms.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">3. Intellectual Property</h2>
        <p className="mb-4">
          All content on the website, including text, graphics, and logos, is the property of Village Voice or its contributors and protected by copyright laws. You may not reuse or reproduce content without permission.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">4. Privacy</h2>
        <p className="mb-4">
          Your use of our services is also governed by our <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a>. By using the site, you consent to the collection and use of your data as described therein.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">5. Modifications</h2>
        <p className="mb-4">
          We may update or revise these Terms at any time. Continued use of the website after changes constitutes acceptance of the updated Terms.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">6. Limitation of Liability</h2>
        <p className="mb-4">
          Village Voice is not liable for any direct, indirect, or incidental damages resulting from the use or inability to use the website or its services.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">7. Governing Law</h2>
        <p className="mb-4">
          These Terms are governed by and interpreted in accordance with the laws of India. Any disputes arising shall be subject to the jurisdiction of local courts.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">8. Contact Us</h2>
        <p>
          If you have any questions or concerns regarding these Terms, please contact us at:<br />
          <span className="font-medium">Email:</span> support@villagevoice.in
        </p>

        <p className="mt-6 text-sm text-gray-500">Last updated: May 2, 2025</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
