import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6 md:px-20 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">Privacy Policy</h1>
        <p className="mb-4">
          At <strong>Village Voice</strong>, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and services.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">1. Information We Collect</h2>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li><strong>Personal Information:</strong> Name, village name, contact details (if provided voluntarily).</li>
          <li><strong>Usage Data:</strong> IP address, browser type, device information, pages visited, and interaction logs.</li>
          <li><strong>User Contributions:</strong> Suggestions, comments, and feedback you submit on the platform.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>To display user suggestions and feedback publicly for community development.</li>
          <li>To improve our services and user experience.</li>
          <li>To communicate important updates or responses (if you’ve shared contact info).</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">3. Sharing of Information</h2>
        <p className="mb-4">
          We do not sell or share your personal data with third parties. Publicly shared suggestions will only include your name and village name unless specified otherwise.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">4. Data Security</h2>
        <p className="mb-4">
          We implement reasonable security measures to protect your information. However, no digital system is 100% secure, so we cannot guarantee absolute security.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">5. Your Choices</h2>
        <p className="mb-4">
          You may request to edit or delete your contributions at any time by contacting our team. We respect your right to privacy.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">6. Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy periodically. Updates will be posted on this page with the revised date.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">7. Contact Us</h2>
        <p>
          If you have any questions or concerns about our Privacy Policy, please contact us at:<br />
          <span className="font-medium">Email:</span> support@villagevoice.in
        </p>

        <p className="mt-6 text-sm text-gray-500">Last updated: May 2, 2025</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
