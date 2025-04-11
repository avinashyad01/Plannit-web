"use client";
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { api } from "@/Environment/Env";

const OTPVerification = ({
  onVerificationSuccess,
  onVerificationError,
  phoneNumber = "9454081130",
  countryCode = "91",
}) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(60);
  const inputRefs = useRef([]);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const handleChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleResendOTP = async () => {
    try {
      const response = await axios.post(`${api}/api/users/resendOTP`, {
        phone: phoneNumber,
        countryCode,
      });
      if (response.data.success) {
        setTimer(60);
        setError("");
      } else {
        throw new Error("Failed to resend OTP");
      }
    } catch (err) {
      setError("Failed to resend OTP. Please try again.");
      onVerificationError?.(err);
    }
  };

  const handleVerify = async () => {
    const otpString = otp.join("");
    if (otpString.length !== 6) {
      setError("Please enter complete OTP");
      return;
    }
    try {
      const response = await axios.post(`${api}/api/users/verifyOTP`, {
        phone: phoneNumber,
        otp: parseInt(otpString, 10),
      });

      if (response.data.success) {
        onVerificationSuccess?.(response.data);
      } else {
        throw new Error(response.data.message || "Invalid OTP");
      }
    } catch (err) {
      setError("Verification failed. Please try again.");
      onVerificationError?.(err);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-4 bg-white/10"
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    >
      <div className="w-full max-w-md p-8 bg-white/20 backdrop-blur-sm rounded-xl shadow-lg border-2 border-gray-300">
        <h2 className="text-2xl font-bold text-center text-[#131842] mb-2">
          OTP Verification
        </h2>
        <p className="text-center text-white text-sm mb-8">
          Enter the verification code we just sent to your number +{countryCode}{" "}
          {phoneNumber}
        </p>
        <div className="flex justify-center gap-2 mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 text-center text-xl border-2 rounded-lg focus:border-blue-500 focus:outline-none"
            />
          ))}
        </div>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <button
          onClick={handleVerify}
          className="w-full bg-[#09264B] text-white py-3 rounded-full hover:bg-[#4b6688] transition-colors mb-4"
        >
          Verify
        </button>

        <div className="text-center">
          <p className="text-white text-sm">
            Didn't receive code?{" "}
            {timer > 0 ? (
              <span className="text-gray-400">Resend in {timer}s</span>
            ) : (
              <button
                onClick={handleResendOTP}
                className="text-blue-500 hover:underline"
              >
                Resend
              </button>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
