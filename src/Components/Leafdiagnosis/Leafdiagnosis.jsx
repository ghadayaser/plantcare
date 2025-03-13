import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from '../../assets/images/logo.png';


export default function LeafDiagnosis() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setError(""); // Clear error when file is selected
    }
  };

  const handleCameraCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = document.createElement("video");
      video.srcObject = stream;
      video.play();

      const canvas = document.createElement("canvas");
      document.body.appendChild(video);

      setTimeout(() => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        setSelectedImage(canvas.toDataURL("image/png"));
        setError("");
        stream.getTracks().forEach((track) => track.stop()); // Stop camera
        document.body.removeChild(video); // Remove video element
      }, 2000);
    } catch (error) {
      console.error("Camera access denied:", error);
    }
  };

  const handleAnalyze = () => {
    if (!selectedImage) {
      setError("⚠️ Please upload or capture a plant image before analyzing.");
      return;
    }
    setError("");
    alert("🌿 AI is analyzing the plant health... Please wait.");
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setError("");
  };

  return (
    <div className="bg-[#050F02] text-[#e5d5c5] font-oswald min-h-screen py-16 px-6 md:px-20 lg:px-32">
      {/* Hero Section */}
      <section className="text-center mb-20 relative mt-10">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-[#8c826d] mb-6 tracking-wide flex justify-center items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={logo} alt="Leaf Icon" className="w-12 h-12" />
          Leaf Diagnosis
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Upload or capture a photo of your plant, and our AI will analyze its health!
        </motion.p>
      </section>

      {/* Upload Section */}
      <section className="text-center max-w-3xl mx-auto p-8 rounded-xl shadow-lg bg-gradient-to-b from-[#253221] via-[#40502f] to-[#050F02]">
        <h2 className="text-3xl text-[#8c826d] mb-6 tracking-wide">Upload or Capture Plant Photo</h2>

        {/* Custom Upload Button */}
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <label className="cursor-pointer bg-[#8c826d] text-[#121212] font-bold py-2 px-4 rounded-lg shadow-md hover:bg-[#bab09b] transition inline-block">
             Choose File
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>

          {/* Capture from Camera */}
          <button
            onClick={handleCameraCapture}
            className="px-4 py-2 bg-[#8c826d] text-[#121212] font-bold rounded-lg shadow-md hover:bg-[#bab09b] transition"
          >
            Open Camera
          </button>
        </div>

        {/* Display Selected Image */}
        {selectedImage && (
          <div className="mt-10 relative flex justify-center">
            <motion.img
              src={selectedImage}
              alt="Selected Plant"
              className="w-full max-w-lg mx-auto rounded-lg shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
            <button
              onClick={handleRemoveImage}
              className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm hover:bg-red-500 transition shadow-lg"
            >
              ✕ Remove
            </button>
          </div>
        )}

        {/* Error Message */}
        {error && <p className="text-red-500 mt-4">{error}</p>}

        {/* Analyze Button (Now Moved Below the Image) */}
        <div className="mt-6">
          <motion.button
            onClick={handleAnalyze}
            className="px-6 py-3 bg-[#8c826d] text-[#121212] font-bold rounded-lg shadow-md hover:bg-[#bab09b] transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🔍 Analyze Plant Health
          </motion.button>
        </div>
      </section>
    </div>
  );
}
