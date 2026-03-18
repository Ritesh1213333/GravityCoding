import React, { useEffect } from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="privacy-container">
            <div className="privacy-glow"></div>
            <div className="privacy-content">
                <header className="privacy-header">
                    <h1>Privacy Policy</h1>
                    <p className="privacy-tagline">Your privacy is important to us. Learn how we protect your information.</p>
                    <p className="effective-date">Effective Date: 31/08/2025</p>
                </header>

                <section className="privacy-section">
                    <p>
                        At <strong>Gravity Coding</strong>, accessible from <a href="https://gravitycoding.com">https://gravitycoding.com</a>, 
                        we are committed to protecting your personal information and your right to privacy. This Privacy Policy outlines 
                        the types of personal data we collect, how we use and protect it, and your rights under various data protection laws, 
                        including the General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA/CPRA).
                    </p>
                </section>

                <section className="privacy-section">
                    <h2>Who We Are</h2>
                    <div className="info-grid">
                        <div className="info-item">
                            <span className="info-label">Website:</span>
                            <span className="info-value">Gravity Coding</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Business Name:</span>
                            <span className="info-value">SKILLSVARZ GRAVITY CODING PVT LTD</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Address:</span>
                            <span className="info-value">
                                315/33, Poonam Babu Ke, Piche, Shanichara Bazar, Rahatgarh, Sagar, Madhya Pradesh, India, 470119
                            </span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Contact Email:</span>
                            <span className="info-value">
                                <a href="mailto:contact@gravitycoding.com">contact@gravitycoding.com</a>
                            </span>
                        </div>
                    </div>
                </section>

                <section className="privacy-section">
                    <h2>What Information We Collect</h2>
                    <p>We collect the following personal information:</p>
                    <ul className="data-list">
                        <li><strong>Identity Data:</strong> Name, Email Address, Phone Number</li>
                        <li><strong>Contact Data:</strong> Address</li>
                        <li><strong>Technical Data:</strong> IP address, usage data (via Google Analytics)</li>
                        <li><strong>Financial Data:</strong> Transaction information (via bank transfers, merchant QR, Razorpay)</li>
                        <li><strong>Other Data:</strong> Submitted through forms (Google Forms, WPForms)</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2>How We Collect Information</h2>
                    <p>We collect personal data when:</p>
                    <ul className="data-list">
                        <li>You register for our services</li>
                        <li>You fill out a contact form or submit an inquiry</li>
                        <li>You participate in surveys or feedback forms</li>
                        <li>You make payments through our supported methods</li>
                        <li>You access our website (via Google Analytics)</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2>Why We Use Your Data</h2>
                    <p>We use your personal data to:</p>
                    <ul className="data-list">
                        <li>Provide and improve our services</li>
                        <li>Communicate with you about updates and offers</li>
                        <li>Respond to your queries or support requests</li>
                        <li>Comply with legal and regulatory obligations</li>
                        <li>Analyze website usage (via Google Analytics, with IP anonymization enabled)</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2>Legal Basis for Processing (GDPR)</h2>
                    <p>We process your data under the following lawful bases:</p>
                    <ul className="data-list">
                        <li><strong>Consent:</strong> You permit us to process your data (e.g., forms, subscriptions)</li>
                        <li><strong>Contract:</strong> Data processing is necessary for a contract with you</li>
                        <li><strong>Legal Obligation:</strong> To comply with applicable laws</li>
                        <li><strong>Legitimate Interests:</strong> For operating and improving our website and services</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2>Your Rights Under GDPR & CPRA</h2>
                    <p>You have the right to:</p>
                    <ul className="data-list">
                        <li><strong>Access:</strong> Request a copy of your data</li>
                        <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                        <li><strong>Erasure:</strong> Request deletion of your data</li>
                        <li><strong>Restrict Processing:</strong> Ask us to limit data processing</li>
                        <li><strong>Data Portability:</strong> Receive your data in a structured format</li>
                        <li><strong>Object:</strong> Object for certain types of processing</li>
                        <li><strong>Opt-out of Sale (CPRA):</strong> We do not sell your data</li>
                    </ul>
                    <p className="contact-prompt">To exercise your rights, contact us at <a href="mailto:contact@gravitycoding.com">contact@gravitycoding.com</a>.</p>
                </section>

                <section className="privacy-section">
                    <h2>California Privacy Rights (CCPA/CPRA)</h2>
                    <p>If you are a California resident, you have the right to:</p>
                    <ul className="data-list">
                        <li>Know what personal data we collect and how we use it</li>
                        <li>Request access to and deletion of your data</li>
                        <li>Opt out of the sale or sharing of personal information (we do not sell personal data)</li>
                        <li>Designate an authorized agent to submit requests on your behalf</li>
                    </ul>
                    <p className="contact-prompt">Requests may be submitted by emailing us at <a href="mailto:contact@gravitycoding.com">contact@gravitycoding.com</a>.</p>
                </section>

                <section className="privacy-section">
                    <h2>Children's Privacy</h2>
                    <p>We do not knowingly collect data from children under the age of 13 (or 16 in some jurisdictions). If you believe we have collected data from a minor, contact us immediately.</p>
                </section>

                <section className="privacy-section">
                    <h2>Use of Third-Party Services</h2>
                    <p>We use third-party services that may collect personal information:</p>
                    <ul className="data-list">
                        <li><strong>Google Analytics:</strong> for site traffic analysis (IP anonymization enabled)</li>
                        <li><strong>Razorpay:</strong> for payment processing</li>
                        <li><strong>Mailchimp:</strong> for email communication</li>
                        <li><strong>Google Forms / WPForms:</strong> for data collection</li>
                    </ul>
                    <p>These services operate in accordance with their respective privacy policies.</p>
                </section>

                <section className="privacy-section">
                    <h2>Data Retention</h2>
                    <p>We retain personal data only as long as necessary for the purposes described in this policy and to comply with legal obligations.</p>
                </section>

                <section className="privacy-section">
                    <h2>Data Security</h2>
                    <p>We use appropriate security measures to protect your data from unauthorized access, alteration, disclosure, or destruction.</p>
                </section>

                <section className="privacy-section">
                    <h2>International Data Transfers</h2>
                    <p>As we are based in India and allow international visitors, your data may be processed outside your country of residence. We take appropriate safeguards to ensure data protection during such transfers.</p>
                </section>

                <section className="privacy-section">
                    <h2>Changes to This Privacy Policy</h2>
                    <p>We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated effective date.</p>
                </section>

                <section className="privacy-section">
                    <h2>Contact Us</h2>
                    <p>For any questions or requests related to this Privacy Policy or your personal data, contact us at:</p>
                    <div className="contact-info">
                        <p><strong>Email:</strong> <a href="mailto:contact@gravitycoding.com">contact@gravitycoding.com</a></p>
                        <p><strong>Company:</strong> SKILLSVARZ GRAVITY CODING PVT LTD</p>
                    </div>
                </section>

                <footer className="privacy-page-footer">
                    <h2>Consent</h2>
                    <p>By using our website, submitting forms, or registering for services, you consent to this Privacy Policy.</p>
                </footer>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
