import React, { useEffect } from 'react';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="terms-container">
            <div className="terms-glow"></div>
            <div className="terms-content">
                <header className="terms-header">
                    <h1>Terms & Conditions</h1>
                    <p className="terms-tagline">Please read these terms carefully before using our platform.</p>
                    <p className="last-updated">Last Updated: 31/08/2025</p>
                </header>

                <section className="terms-section">
                    <p>
                        These Terms and Conditions govern your use of the <strong>Gravity Coding</strong> platform and are applicable for most activities on the Site. By signing on the platform and creating an account you confirm that you are the age of majority and competent / of entering into a contract in your country. If you are not of age, then we request you to take assistance from a parent or guardian to create an account and help you enroll and pay for courses that are relevant for you.
                    </p>
                </section>

                <section className="terms-section">
                    <h2>1. ACCOUNT CREATION AND USE</h2>
                    <p>You shall use the Account to enroll for Services that may be provided on the specific terms and conditions as may be applicable. You agree and undertake to provide true, correct, accurate and complete information, including your:</p>
                    <ul className="terms-list">
                        <li>Name</li>
                        <li>Email</li>
                        <li>Phone number</li>
                    </ul>
                    <p>In addition, from time to time, based on the Services availed by you, we may request for additional information such as your address, financial information, and educational qualifications.</p>
                    
                    <div className="terms-sub-block">
                        <h3>Account Security</h3>
                        <ul className="terms-list dot-list">
                            <li>Please do not share your Account details, personal information with others.</li>
                            <li>Any harm or loss suffered on account of an unauthorized disclosure or access of your Account shall be borne by you.</li>
                            <li>You cannot transfer your account to any other person, and a third party may not access your account without our permission.</li>
                            <li>We may terminate, suspend or cancel your account if we are made aware of any such authorized access or use.</li>
                        </ul>
                        <p className="contact-prompt">
                            Please let us know as soon as possible if you believe that someone else is using your Account by contacting our support team at <a href="mailto:contact@gravitycoding.com">contact@gravitycoding.com</a>.
                        </p>
                        <p>You can at any time decide to terminate your account by contacting us at <a href="mailto:contact@gravitycoding.com">contact@gravitycoding.com</a>.</p>
                    </div>
                </section>

                <section className="terms-section">
                    <h2>2. USER CONDUCT AND BEHAVIOR</h2>
                    <p>You agree to participate in any Services with sincerity, diligence and not indulgence in any unethical, corrupt or illegal practice. This includes behavior that amounts to cheating, collusion or any coordination action conducted with the intention to subvert these Terms or any conditions that may be applicable.</p>
                    <p>You agree not to post, transmit or cause to be posted or transmitted any content, message or post that amounts to solicitation of a service or a business, or provided with the intent or activities commonly referred to as "phishing", "pharming" or "whaling", or any message or post intended to obtain personal information, including passwords, financial information, card details or confidential information of a person.</p>
                    
                    <h3>Prohibited Activities</h3>
                    <ul className="terms-list dot-list">
                        <li>Harassment of other users, instructors, or SKILLSVARZ GRAVITY CODING PVT LTD personnel.</li>
                        <li>Defame or bring disrepute to any person.</li>
                        <li>Access, tamper with, or use non-public areas of the Platform.</li>
                        <li>Disable, interfere with, or try to circumvent any security features.</li>
                        <li>Copy, modify, reverse engineer, or attempt to discover any source code.</li>
                        <li>Downloading or any other means of illegally acquiring the content.</li>
                    </ul>
                </section>

                <section className="terms-section">
                    <h2>3. COURSE AND CONTENT</h2>
                    <p>By creating an Account you shall receive access to videos, text, and other materials (Content). These Services may be made available for free or on the payment of charges displayed on the Platform.</p>
                    <div className="terms-sub-block">
                        <h3>License Terms</h3>
                        <p>You are granted a limited, non-exclusive, non-transferable license to access and view content solely for your personal, non-commercial, educational purposes.</p>
                        <p><strong>This does not give you any right to resell, distribute, or upload the course to any other platform.</strong></p>
                    </div>
                </section>

                <section className="terms-section">
                    <h2>4. PAYMENTS, CREDITS, AND REFUNDS</h2>
                    <p>The prices of the Courses and other Services are informed on the Platform and may vary based on location, promotions, and taxes.</p>
                    
                    <h3>Refunds</h3>
                    <p>We provide a <strong>100% refund</strong> for Courses within 7 days of the start of a batch.</p>
                    <div className="refund-rules">
                        <h4>Recorded Courses:</h4>
                        <ul className="terms-list">
                            <li><strong>100% Refund:</strong> If you consumed only the first 2 lectures.</li>
                            <li><strong>Prorated Refund:</strong> Based on the number of lectures watched (e.g., watching 10/100 lectures results in a 90% refund).</li>
                        </ul>
                        <p>Refunds are processed within 10 to 20 working days.</p>
                    </div>
                    <p className="contact-prompt">To claim a refund, email <a href="mailto:contact@gravitycoding.com">contact@gravitycoding.com</a> with the subject "ONLINE COURSE REFUND | REGISTERED EMAIL ID".</p>
                </section>

                <section className="terms-section">
                    <h2>5. OUR ROLE</h2>
                    <p>SKILLSVARZ GRAVITY CODING PVT LTD provides access to online training software and content. We are not a University or accredited institution. We do not guarantee jobs or remunerative opportunities, though we provide rewards and acknowledgements at our discretion.</p>
                </section>

                <section className="terms-section">
                    <h2>6. LEGAL DISCLAIMERS</h2>
                    <div className="disclaimer-text">
                        <p><strong>Disclaimer of Warranties:</strong> THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. WE DISCLAIM ALL WARRANTIES OF ANY KIND, EXPRESSED OR IMPLIED.</p>
                        <p><strong>Limitation of Liability:</strong> COMPANY SHALL NOT BE LIABLE FOR ANY DIRECT OR INDIRECT DAMAGES. TOTAL CUMULATIVE DAMAGES SHALL NOT EXCEED INR 1000.</p>
                    </div>
                </section>

                <footer className="terms-page-footer">
                    <h2>Need Help?</h2>
                    <p>For any questions regarding these Terms, contact us:</p>
                    <div className="contact-info">
                        <p><strong>Email:</strong> <a href="mailto:contact@gravitycoding.com">contact@gravitycoding.com</a></p>
                        <p><strong>Grievance Officer:</strong> Mr. Ritesh Kumar Das</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default TermsAndConditions;
