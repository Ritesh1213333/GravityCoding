import React, { useEffect } from 'react';
import './PricingRefundPolicy.css';

const PricingRefundPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="policy-container">
            <div className="policy-glow"></div>
            <div className="policy-content">
                <header className="policy-header">
                    <h1>Pricing & Refund Policy</h1>
                    <p className="policy-tagline">Transparent pricing and fair refund policies for your learning journey.</p>
                    <p className="last-updated">Last Updated: 31/08/2025</p>
                </header>

                <section className="policy-section">
                    <p>
                        Thank you for choosing <strong>Gravity Coding</strong>. We are dedicated to delivering exceptional learning experiences through online and offline training programs. This document explains our policies regarding pricing, payments, and refunds. By purchasing from Gravity Coding (operated by Skillsvarz Gravity Coding Pvt Ltd), you agree to this policy, along with our Privacy Policy, Terms of Use, and any course-specific terms.
                    </p>
                </section>

                <section className="policy-section">
                    <h2>Pricing Policy</h2>
                    <div className="policy-grid">
                        <div className="policy-card">
                            <h3>Customized Pricing</h3>
                            <p>Our course fees are determined by content depth, teaching mode (live or recorded), faculty involvement, and learning duration. Our pricing typically ranges between <strong>INR 1.00 and INR 15,000.00</strong>.</p>
                        </div>
                        <div className="policy-card">
                            <h3>Duration-Based Offerings</h3>
                            <p>Our services, such as bootcamps, recorded courses, and mentorship programs, are offered for fixed periods, ranging from 15 days to 24 months. Course duration is clearly listed at the time of enrollment.</p>
                        </div>
                    </div>
                    <div className="policy-info-block">
                        <h3>Pricing Accuracy</h3>
                        <p>While we work to ensure the accuracy of pricing across all platforms, mistakes may occasionally occur. If an error in price is discovered after purchase, your order may be canceled, and you will be notified. We do not offer price matching or retroactive discounts.</p>
                    </div>
                </section>

                <section className="policy-section">
                    <h2>Refund Policy</h2>
                    <p>We understand that enrolling in a course is a serious decision. That's why we offer a time-limited refund policy under the following conditions:</p>
                    
                    <div className="refund-sections">
                        <div className="refund-block">
                            <h3>Refunds – Live (Instructor-Led) Courses</h3>
                            <p>You may request a refund for a live class within <strong>7 calendar days</strong> of the batch start date, provided that:</p>
                            <ul className="policy-list">
                                <li>The request is submitted by email to <a href="mailto:contact@gravitycoding.com">contact@gravitycoding.com</a></li>
                                <li>The subject line is: "Live Class Refund Request | [Your Registered Email]"</li>
                                <li>The request includes a valid reason for internal improvement tracking.</li>
                                <li>You have not accessed or completed more than 10% of the live sessions.</li>
                            </ul>
                            <p className="highlight-note">❗ No refunds will be accepted after 7 days from the start of the batch or if 10% or more of the course has been completed.</p>
                        </div>

                        <div className="refund-block">
                            <h3>Refunds – Recorded Courses</h3>
                            <p>If you've purchased a recorded/self-paced course, you may request a refund within <strong>5 calendar days</strong> of purchase, subject to the following:</p>
                            <ul className="policy-list">
                                <li>Email your request to <a href="mailto:contact@gravitycoding.com">contact@gravitycoding.com</a></li>
                                <li>The subject line is: "Recorded Course Refund | [Your Registered Email]"</li>
                                <li>You must not have accessed or watched more than 4 lectures.</li>
                            </ul>
                            <p className="highlight-note">Refund requests after 5 days of purchase will not be accepted.</p>
                        </div>
                    </div>

                    <div className="policy-sub-grid">
                        <div className="policy-sub-item">
                            <h3>Batch Transfers</h3>
                            <p>For live courses, if you're unable to continue in your current batch, you may request to transfer to the next batch of the same course within 10 days of start. (Limit: One transfer per enrollment).</p>
                        </div>
                        <div className="policy-sub-item">
                            <h3>Duplicate Payments</h3>
                            <p>Duplicate payments will be refunded via the original payment method within 15 business days upon verification.</p>
                        </div>
                    </div>
                </section>

                <footer className="policy-page-footer">
                    <h2>Need Help?</h2>
                    <p>For refund or pricing concerns, reach out to us:</p>
                    <div className="contact-grid">
                        <div className="contact-item">
                            <strong>Email:</strong>
                            <a href="mailto:contact@gravitycoding.com">contact@gravitycoding.com</a>
                        </div>
                        <div className="contact-item">
                            <strong>Day & Time:</strong>
                            <span>Monday–Friday, 11:00 AM – 10:00 PM IST</span>
                        </div>
                    </div>
                    <p className="disclaimer">Skillsvarz Gravity Coding Pvt Ltd reserves the right to modify this policy at any time, with or without notice.</p>
                </footer>
            </div>
        </div>
    );
};

export default PricingRefundPolicy;
