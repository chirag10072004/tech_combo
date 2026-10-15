import React, { useState } from "react";
import { FaTimes, FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import { FiUpload, FiBriefcase, FiUser, FiMail, FiPhone, FiLink, FiMessageSquare, FiLoader } from "react-icons/fi";

const CareerForm = ({ job, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    portfolio: "",
    message: "",
  });

  const [resumeName, setResumeName] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSharingResume, setIsSharingResume] = useState(false);
  const [resumeShared, setResumeShared] = useState(false);

  const WHATSAPP_NUMBER = '918010605376'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const maxLimit = 2.5 * 1024 * 1024; // 2.5 MB
      if (file.size > maxLimit) {
        alert("File size is too large. Please upload a resume smaller than 2.5 MB.");
        e.target.value = null;
        setResumeName("");
        setResumeFile(null);
        return;
      }
      setResumeName(file.name);
      setResumeFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build professional WhatsApp message
    const messageParts = [
      `━━━━━━━━━━━━━━━━━━━━━`,
      `*TECH COMBO — Job Application*`,
      `━━━━━━━━━━━━━━━━━━━━━`,
      ``,
      `*Position Applied:* ${job}`,
      ``,
      `*Full Name:* ${formData.fullName}`,
      `*Email:* ${formData.email}`,
      `*Phone:* ${formData.phone}`,
      `*Experience:* ${formData.experience}`,
      formData.portfolio ? `*Portfolio/LinkedIn:* ${formData.portfolio}` : '',
      resumeName ? `*Resume:* ${resumeName}` : '',
      ``,
      `───────────────────`,
      `*Cover Message:*`,
      ``,
      formData.message,
      ``,
      `───────────────────`,
      `_Sent via techcombo.in careers page_`,
    ].filter(Boolean).join('\n')

    const encodedMessage = encodeURIComponent(messageParts)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`

    window.open(whatsappUrl, '_blank')

    setIsSuccess(true);
    setIsSubmitting(false);
  };

  const handleShareResume = async () => {
    if (!resumeFile) return;

    setIsSharingResume(true);

    try {
      // Use Web Share API to share the file natively (works on mobile & desktop)
      if (navigator.share && navigator.canShare) {
        const shareData = {
          files: [resumeFile],
          title: `Resume - ${formData.fullName}`,
          text: `Resume for ${job} position — ${formData.fullName}`,
        };

        if (navigator.canShare(shareData)) {
          await navigator.share(shareData);
          setResumeShared(true);
        } else {
          downloadAndPrompt();
        }
      } else {
        downloadAndPrompt();
      }
    } catch (err) {
      if (err.name !== 'AbortError') {
        downloadAndPrompt();
      }
    } finally {
      setIsSharingResume(false);
    }
  };

  const downloadAndPrompt = () => {
    const url = URL.createObjectURL(resumeFile);
    const a = document.createElement('a');
    a.href = url;
    a.download = resumeName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setResumeShared(true);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex justify-center items-center z-50 px-5 transition-all duration-300">
      <div className="bg-white rounded-3xl w-full max-w-2xl p-8 relative shadow-2xl text-slate-800 transform transition-all duration-300 max-h-[90vh] overflow-y-auto">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-xl text-slate-400 hover:text-red-500 hover:rotate-90 transition-all duration-200 cursor-pointer"
        >
          <FaTimes />
        </button>

        {!isSuccess ? (
          <>
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
                Apply for <span className="text-green-600">{job}</span>
              </h2>
              <p className="text-slate-500 mt-1.5 text-sm font-medium">
                Fill out the application form below and our team will get in touch with you shortly.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                      <FiUser className="text-lg" />
                    </div>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full border border-slate-200 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-green-600 focus:ring-2 focus:ring-blue-100 text-slate-900 placeholder-slate-400 bg-white transition text-sm font-normal"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                      <FiMail className="text-lg" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="johndoe@example.com"
                      className="w-full border border-slate-200 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-green-600 focus:ring-2 focus:ring-blue-100 text-slate-900 placeholder-slate-400 bg-white transition text-sm font-normal"
                    />
                  </div>
                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-4">

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                      <FiPhone className="text-lg" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full border border-slate-200 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-green-600 focus:ring-2 focus:ring-blue-100 text-slate-900 placeholder-slate-400 bg-white transition text-sm font-normal"
                    />
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                    Experience Level *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                      <FiBriefcase className="text-lg" />
                    </div>
                    <select
                      name="experience"
                      required
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full border border-slate-200 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-green-600 focus:ring-2 focus:ring-blue-100 text-slate-900 bg-white transition text-sm font-normal appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select your experience</option>
                      <option value="Entry Level (0-1 year)">Entry Level (0-1 year)</option>
                      <option value="Mid Level (1-3 years)">Mid Level (1-3 years)</option>
                      <option value="Senior Level (3-5 years)">Senior Level (3-5 years)</option>
                      <option value="Lead / Manager (5+ years)">Lead / Manager (5+ years)</option>
                    </select>
                  </div>
                </div>

              </div>

              {/* Portfolio / LinkedIn URL */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                  Portfolio or LinkedIn Profile (Optional)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <FiLink className="text-lg" />
                  </div>
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    placeholder="https://linkedin.com/in/username"
                    className="w-full border border-slate-200 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-green-600 focus:ring-2 focus:ring-blue-100 text-slate-900 placeholder-slate-400 bg-white transition text-sm font-normal"
                  />
                </div>
              </div>

              {/* Cover Letter / Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                  Cover Message *
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-4 text-slate-400 pointer-events-none">
                    <FiMessageSquare className="text-lg" />
                  </div>
                  <textarea
                    name="message"
                    required
                    rows="3"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us why you are a great fit for this role..."
                    className="w-full border border-slate-200 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-green-600 focus:ring-2 focus:ring-blue-100 text-slate-900 placeholder-slate-400 bg-white transition text-sm font-normal resize-none"
                  />
                </div>
              </div>

              {/* Custom Resume Upload */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                  Upload Resume *
                </label>
                <div className="relative border-2 border-dashed border-slate-200 rounded-xl p-4 text-center hover:border-blue-500 hover:bg-blue-50/20 transition-all duration-200 group cursor-pointer">
                  <input
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex flex-col items-center justify-center space-y-1">
                    <div className="w-10 h-10 rounded-full bg-slate-50 text-slate-500 group-hover:bg-blue-50 group-hover:text-green-600 flex items-center justify-center transition">
                      <FiUpload className="text-lg" />
                    </div>
                    <p className="text-xs font-semibold text-slate-700">
                      {resumeName ? (
                        <span className="text-green-600">{resumeName}</span>
                      ) : (
                        <>
                          <span className="text-green-600">Click to upload</span> or drag and drop
                        </>
                      )}
                    </p>
                    <p className="text-[10px] text-slate-400">PDF, DOC, DOCX up to 2.5MB</p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#25D366] hover:bg-[#1da851] disabled:bg-slate-400 text-white py-3.5 rounded-xl font-bold transition duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-green-600/25 mt-4"
              >
                {isSubmitting ? (
                  <>
                    <FiLoader className="animate-spin text-lg" />
                    Opening WhatsApp...
                  </>
                ) : (
                  <>
                    <FaWhatsapp className="text-lg" />
                    Submit via WhatsApp
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          /* Success Screen with Resume Share Step */
          <div className="py-6 flex flex-col items-center justify-center text-center space-y-5 animate-fadeIn">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 text-5xl shadow-inner shadow-green-100">
              <FaCheckCircle className="animate-scaleUp" />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900">Application Details Sent!</h3>
              <p className="text-slate-500 mt-2 max-w-md mx-auto text-sm">
                Your application details for <strong className="text-slate-800">{job}</strong> have been sent via WhatsApp.
              </p>
            </div>

            {/* Step 2: Share Resume */}
            {resumeFile && !resumeShared && (
              <div className="w-full max-w-sm bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-3">
                <p className="text-sm font-semibold text-amber-800">
                  📎 Step 2: Share your resume
                </p>
                <p className="text-xs text-amber-700">
                  Please share your resume <strong>({resumeName})</strong> in the same WhatsApp chat to complete your application.
                </p>
                <button
                  onClick={handleShareResume}
                  disabled={isSharingResume}
                  className="w-full bg-[#25D366] hover:bg-[#1da851] text-white py-3 rounded-xl font-bold transition duration-200 flex items-center justify-center gap-2 cursor-pointer text-sm disabled:opacity-70"
                >
                  {isSharingResume ? (
                    <>
                      <FiLoader className="animate-spin" />
                      Sharing...
                    </>
                  ) : (
                    <>
                      <FaWhatsapp className="text-lg" />
                      Share Resume on WhatsApp
                    </>
                  )}
                </button>
              </div>
            )}

            {/* Resume shared confirmation */}
            {resumeShared && (
              <div className="w-full max-w-sm bg-green-50 border border-green-200 rounded-2xl p-4">
                <p className="text-sm font-semibold text-green-700 flex items-center justify-center gap-2">
                  <FaCheckCircle /> Resume shared successfully!
                </p>
                <p className="text-xs text-green-600 mt-1">
                  Please send it in the WhatsApp chat if not already done.
                </p>
              </div>
            )}

            {/* No resume uploaded */}
            {!resumeFile && (
              <div className="w-full max-w-sm bg-slate-50 border border-slate-200 rounded-2xl p-4">
                <p className="text-xs text-slate-500">
                  You can also share your resume directly in the WhatsApp chat.
                </p>
              </div>
            )}

            <button
              onClick={onClose}
              className="px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition duration-200 cursor-pointer"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default CareerForm;