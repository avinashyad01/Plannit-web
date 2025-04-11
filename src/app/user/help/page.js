"use client";
import React from "react";
import { ChevronRight } from "lucide-react";
import Navbar from "@/app/components/user/navbar/navbar";
import Footer from "@/app/components/user/footer/footer";

const TermsAndConditions = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-b from-[#FFFFFF] to-[#FFEFD2] p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header with Navigation and Profile */}
          <div className="flex justify-between items-center lg:mb-8 md:mb-6 mb-2">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm">
              <a href="#" className="text-[#484848] hover:text-gray-900 font-normal">
                Home
              </a>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-[#121416] font-bold lg:text-lg md:text-lg text-sm">
                Terms and Conditions
              </span>
              <ChevronRight className="w-4 h-4 text-customblacks font-bold" />
            </div>
          </div>
          {/* Main Content */}
          <div className="lg:space-y-6 md:space-y-4 space-y-2">
            <h1 className="lg:text-2xl md:text-2xl text-lg font-bold md:mb-6 mb-2 lg:mb-6">
              Terms and Conditions
            </h1>
            <div className="lg:space-y-4 md:space-y-4 space-y-2">
              <p className="text-[#00000099] lg:text-[18px] md:text-[18px] text-[12px]">
                Your use of our website is governed by the following terms and
                conditions ("Terms of Use"), as well as the CARDONE CAPITAL
                Privacy Policy and other operating rules, minimal qualifications
                and cautions posted throughout the website or presented to you
                individually during the course of your use of the website
                (collectively, the "Terms"). The Terms govern your use of the
                website and CARDONE CAPITAL reserves the right to amend or
                replace the Terms any time without notice. You are advised to
                review the Terms for any changes when you use the website even
                if you have not received a notification of changes as you are
                bound by them even if you have not reviewed them. Your viewing
                and use of the website after such change constitutes your
                acceptance of the Terms and any changes to such terms. If at any
                time you do not want to be bound by the Terms you should logout,
                exit and cease using the website immediately.
              </p>
              <section className="space-y-4">
                <h2 className="lg:text-2xl md:text-2xl text-lg font-semibold text-[#000000]">
                  Intended Use of Website
                </h2>
                <p className="text-[#00000099] lg:text-[18px] md:text-[18px] text-[12px]">
                  CARDONE CAPITAL is not a broker-dealer or placement agent. At
                  no time does CARDONE CAPITAL offer, broker, advise, purchase,
                  sell or otherwise transact in securities regulated by the SEC
                  or federal or state law. CARDONE CAPITAL does not accept, hold
                  or transfer cash or securities. CARDONE CAPITAL does not
                  guarantee that a Company seeking investment will achieve any
                  level of success or that any proposed offering will qualify
                  under applicable federal and state securities laws.
                </p>
                <p className="text-[#00000099] lg:text-[18px] md:text-[18px] text-[12px]">
                  CARDONE CAPITAL is not a personal financial advisor. CARDONE
                  CAPITAL, whether through the website or otherwise, does not
                  provide personal financial advice, loans or credit, banking,
                  consumer credit ratings, credit decisions, financial products,
                  brokerage accounts, insurance, tax advice, legal advice, or
                  financial or legal advice of any kind.
                </p>
              </section>
              <section className="space-y-4">
                <h2 className="lg:text-2xl md:text-2xl text-lg font-semibold">
                  Registered Account Obligations
                </h2>
                <p className="text-[#00000099] lg:text-[18px] md:text-[18px] text-[12px]">
                  The owner/registered user of an account is the only person
                  that may use the account and it may not be transferred to
                  anyone else.
                </p>
                <p className="text-[#00000099] lg:text-[18px] md:text-[18px] text-[12px]">
                  You are responsible for maintaining the confidentiality of
                  your username and password and to periodically change your
                  password to maintain security. If you have concerns that your
                  username or password may have been compromised and suspect
                  that unauthorized access to your account or the website has
                  occurred, you must immediately contact CARDONE CAPITAL
                  investor support through a secure method (which may not be
                  through our website account).
                </p>
              </section>
              <section className="space-y-4">
                <h2 className="lg:text-2xl md:text-2xl text-lg font-semibold">User Registration</h2>
                <p className="text-[#00000099] lg:text-[18px] md:text-[18px] text-[12px]">
                  If you are accepting the Terms on behalf of an organization or
                  entity, rather than in an individual capacity, you represent
                  and warrant that you are authorized to accept the Terms and
                  that organization or entity shall be bound by these Terms. (In
                  such case, the references to "you" and "your" in these Terms,
                  except for in this sentence, refer to that organization or
                  entity).
                </p>
                <p className="text-[#00000099] lg:text-[18px] md:text-[18px] text-[12px]">
                  Only real persons at or above the age of 18 may register for
                  an account and use the website. Registering for an account on
                  the website creates no commitment or obligation; any
                  registration or intent you make on a investment or deal very
                  preliminary. Any information you provide to the website must
                  be truthful, accurate and complete in all material respects.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default TermsAndConditions;
