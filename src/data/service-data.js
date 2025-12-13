
import Link from 'next/link';
import service_staffing_img from "@assets/img/services/service-staffing.png";
import service_dev_img from "@assets/img/services/service-development.png";
import service_hr_img from "@assets/img/services/service-hr.png";
import service_img_1 from "@assets/img/services/services-1.jpg";
import service_img_2 from "@assets/img/services/services-2.jpg";
import service_img_3 from "@assets/img/services/services-3.jpg";
import service_img_4 from "@assets/img/services/services-4.jpg";

const service_data = [
    // PRIMARY SERVICES
    {
        id: 1,
        alphabet: "P",
        title: "Permanent IT Staffing",
        img: service_staffing_img,
        description: <>End-to-end recruitment for permanent IT positions across all technology domains.</>,
        detail_title: "Permanent IT Staffing & Recruitment",
        detail_description: <>
            <p className="mb-20"><strong>End-to-end recruitment for permanent IT positions across all technology domains</strong></p>
            <p className="mb-30">We handle the complete permanent hiring process—from sourcing and screening to final placement and onboarding. Our rigorous multi-stage evaluation ensures you get candidates who are not just technically qualified, but also the right cultural fit for your organization.</p>

            <h4 className="mb-20">What We Deliver</h4>

            <div className="mb-30">
                <h5 className="mb-10">Comprehensive Talent Sourcing</h5>
                <p>We source candidates from multiple channels including job portals, our internal database, referrals, and social networks—giving you access to both active job seekers and passive candidates.</p>
            </div>

            <div className="mb-30">
                <h5 className="mb-10">Multi-Stage Screening</h5>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>Technical assessment through coding challenges and scenario-based questions</li>
                    <li>Behavioral evaluation to assess problem-solving and communication skills</li>
                    <li>Cultural fit analysis to ensure alignment with your team dynamics</li>
                    <li>Background verification and reference checks</li>
                </ul>
            </div>

            <div className="mb-30">
                <h5 className="mb-10">Interview Coordination</h5>
                <p>We manage the entire interview process—scheduling, logistics, feedback collection, and follow-ups—saving your team valuable time.</p>
            </div>

            <div className="mb-30">
                <h5 className="mb-10">Offer Management & Onboarding</h5>
                <p>Support with salary negotiations, offer letter processing, and onboarding documentation to ensure a smooth transition.</p>
            </div>

            <h4 className="mb-20 mt-40">Technology Roles We Recruit For</h4>

            <div className="row mb-30">
                <div className="col-md-6 mb-20">
                    <h5 className="mb-10">Software Development</h5>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>Full-Stack Developers (MERN, MEAN, Django, .NET, Spring Boot)</li>
                        <li>Frontend Developers (React, Angular, Vue.js, Next.js)</li>
                        <li>Backend Developers (Node.js, Python, Java, .NET, Go)</li>
                        <li>Mobile Developers (iOS, Android, React Native, Flutter)</li>
                        <li>API Developers & Integration Specialists</li>
                        <li>Embedded Systems & IoT Developers</li>
                    </ul>
                </div>
                <div className="col-md-6 mb-20">
                    <h5 className="mb-10">Quality Assurance</h5>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>Manual QA Engineers</li>
                        <li>Automation Test Engineers (Selenium, Cypress, Appium)</li>
                        <li>Performance Testing Engineers</li>
                        <li>Security Testing Specialists</li>
                    </ul>
                </div>
                <div className="col-md-6 mb-20">
                    <h5 className="mb-10">Cloud & DevOps</h5>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>DevOps Engineers (AWS, Azure, GCP)</li>
                        <li>Cloud Architects and Engineers</li>
                        <li>Site Reliability Engineers (SRE)</li>
                        <li>Infrastructure Engineers</li>
                    </ul>
                </div>
                <div className="col-md-6 mb-20">
                    <h5 className="mb-10">Data & Analytics</h5>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>Data Engineers</li>
                        <li>Data Analysts</li>
                        <li>Business Intelligence Developers</li>
                        <li>Big Data Engineers</li>
                    </ul>
                </div>
                <div className="col-md-6 mb-20">
                    <h5 className="mb-10">Design & Product</h5>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>UI/UX Designers</li>
                        <li>Product Designers</li>
                        <li>User Researchers</li>
                        <li>Visual Designers</li>
                    </ul>
                </div>
                <div className="col-md-6 mb-20">
                    <h5 className="mb-10">Leadership & Management</h5>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>Technical Architects</li>
                        <li>Solution Architects</li>
                        <li>Engineering Managers</li>
                        <li>Project Managers</li>
                        <li>Scrum Masters</li>
                        <li>Technical Leads</li>
                    </ul>
                </div>
            </div>

            <h4 className="mb-20 mt-40">Our Process</h4>
            <div className="mb-30">
                <div className="row">
                    <div className="col-12 mb-15">
                        <p><strong>➔ Requirement Discussion:</strong> Detailed job description, required skills, experience level, team culture, budget, and timeline</p>
                    </div>
                    <div className="col-12 mb-15">
                        <p><strong>➔ Sourcing & Screening:</strong> Candidate sourcing, technical screening, behavioral interviews, and background verification initiation</p>
                    </div>
                    <div className="col-12 mb-15">
                        <p><strong>➔ Shortlisting:</strong> Present 3-5 shortlisted candidates with detailed profiles, assessment scores, and interview summaries</p>
                    </div>
                    <div className="col-12 mb-15">
                        <p><strong>➔ Client Interviews:</strong> Interview coordination, feedback collection, and second-round facilitation</p>
                    </div>
                    <div className="col-12 mb-15">
                        <p><strong>➔ Offer & Onboarding:</strong> Salary negotiation, offer processing, background verification completion, joining formalities</p>
                    </div>
                </div>
            </div>
        </>,
        cta: "Start Hiring Today",
        detail_features: [
            <>Comprehensive Talent Sourcing</>,
            <>Multi-Stage Technical Screening</>,
            <>Behavioral & Cultural Fit Analysis</>,
            <>Interview Coordination</>,
            <>Offer Management & Onboarding</>,
            <>90-Day Replacement Guarantee</>
        ]
    },
    {
        id: 2,
        alphabet: "C",
        title: "Contract Staffing",
        img: service_dev_img,
        description: <>Deploy skilled IT professionals immediately without permanent hiring overhead.</>,
        detail_title: "Contract Staffing Solutions",
        detail_description: <>
            <p className="mb-20"><strong>Deploy skilled IT professionals immediately without permanent hiring overhead</strong></p>
            <p className="mb-30">Get the talent you need without the administrative burden. Our contract staffing model provides you with skilled IT professionals who remain on our payroll while working on your projects—either at your location or remotely.</p>

            <h4 className="mb-20">Engagement Models</h4>

            <div className="mb-30">
                <h5 className="mb-10">Short-Term Contract Staffing (3-6 months)</h5>
                <p className="mb-10">Perfect for:</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>Urgent project requirements</li>
                    <li>Temporary workload spikes</li>
                    <li>Covering employee leaves or transitions</li>
                    <li>Specialized skills needed for specific project phases</li>
                </ul>
            </div>

            <div className="mb-30">
                <h5 className="mb-10">Long-Term Contract Staffing (6+ months)</h5>
                <p className="mb-10">Ideal for:</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>Ongoing development and maintenance work</li>
                    <li>Building extended development teams</li>
                    <li>Long-term project commitments with flexibility</li>
                    <li>Scaling teams without permanent hiring</li>
                </ul>
            </div>

            <div className="mb-30">
                <h5 className="mb-10">Contract-to-Hire</h5>
                <p className="mb-10">Best for:</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>Evaluating candidates before permanent commitment</li>
                    <li>Risk-free hiring with trial period</li>
                    <li>Assessing technical skills and cultural fit in real work environment</li>
                    <li>Smooth transition to your payroll after 3-6 months</li>
                </ul>
            </div>

            <h4 className="mb-20 mt-40">What We Handle (So You Don't Have To)</h4>

            <div className="row mb-30">
                <div className="col-md-6 mb-20">
                    <h5 className="mb-10">Complete Payroll Management</h5>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>Monthly salary processing and disbursement</li>
                        <li>Salary slip generation and distribution</li>
                        <li>Tax deductions (TDS) and compliance</li>
                    </ul>
                </div>
                <div className="col-md-6 mb-20">
                    <h5 className="mb-10">Statutory Compliance</h5>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>PF (Provident Fund) contributions and compliance</li>
                        <li>ESI (Employee State Insurance) management</li>
                        <li>Professional Tax processing</li>
                        <li>Labour law adherence</li>
                    </ul>
                </div>
                <div className="col-md-6 mb-20">
                    <h5 className="mb-10">HR Administration</h5>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>Employment contracts and documentation</li>
                        <li>Leave and attendance tracking</li>
                        <li>Performance monitoring support (if required)</li>
                        <li>Exit formalities if engagement ends</li>
                    </ul>
                </div>
                <div className="col-md-6 mb-20">
                    <h5 className="mb-10">Quality Assurance</h5>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>Immediate replacement if performance issues arise</li>
                        <li>Regular check-ins to ensure satisfaction and Performance</li>
                        <li>Conflict resolution support</li>
                    </ul>
                </div>
            </div>

            <h4 className="mb-20 mt-40">Technology Professionals Available</h4>
            <p className="mb-20">All roles mentioned in Permanent Staffing section, plus:</p>
            <ul className="mb-30" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Technical Support Engineers</li>
                <li>Database Administrators</li>
                <li>Systems Administrators</li>
                <li>Network Engineers</li>
                <li>Cybersecurity Specialists</li>
            </ul>

            <h4 className="mb-20 mt-40">Our Process</h4>
            <div className="mb-30">
                <div className="row">
                    <div className="col-12 mb-15">
                        <p><strong>➔ Requirement Briefing:</strong> Skills needed, experience level, duration, work location (onsite/remote), start date</p>
                    </div>
                    <div className="col-12 mb-15">
                        <p><strong>➔ Resource Matching:</strong> Match from existing pre-vetted talent pool, or source and screen if specialized skill</p>
                    </div>
                    <div className="col-12 mb-15">
                        <p><strong>➔ Candidate Presentation:</strong> Share profiles with detailed technical assessments and availability</p>
                    </div>
                    <div className="col-12 mb-15">
                        <p><strong>➔ Interview & Selection:</strong> You conduct final interview; we handle all logistics</p>
                    </div>
                    <div className="col-12 mb-15">
                        <p><strong>➔ Deployment:</strong> Contract paperwork, payroll setup, resource onboarding, and deployment</p>
                    </div>
                </div>
            </div>

            <h4 className="mb-20 mt-40">Key Benefits</h4>
            <ul className="mb-30" style={{ listStyleType: 'none', paddingLeft: '0' }}>
                <li className="mb-10">✅ Deployment within 3-7 days from existing pool</li>
                <li className="mb-10">✅ Zero long-term commitment—scale up or down freely</li>
                <li className="mb-10">✅ Complete HR and compliance management</li>
                <li className="mb-10">✅ Immediate replacement guarantee</li>
                <li className="mb-10">✅ No infrastructure or administrative setup needed</li>
            </ul>
        </>,
        cta: "Deploy Talent Now",
        detail_features: [
            <>Short-Term & Long-Term Contracts</>,
            <>Contract-to-Hire Options</>,
            <>Complete Payroll Management</>,
            <>Full Statutory Compliance</>,
            <>Immediate Replacement Guarantee</>,
            <>Rapid 3-7 Day Deployment</>
        ]
    },
    {
        id: 3,
        alphabet: "H",
        title: "HR, Payroll & Compliance",
        img: service_hr_img,
        description: <>Complete workforce administration for your IT teams.</>,
        detail_title: "HR, Payroll & Compliance Management",
        detail_description: <>
            <p className="mb-20"><strong>Complete workforce administration for your IT teams</strong></p>
            <p className="mb-30">Focus on your core business while we handle the entire HR-payroll-compliance function for your IT workforce. We ensure 100% statutory compliance and eliminate administrative burden.</p>

            <h4 className="mb-20">Services Included</h4>

            <div className="mb-30">
                <h5 className="mb-10">Payroll Processing</h5>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>Salary calculation based on attendance, leaves, and other variables</li>
                    <li>Monthly salary disbursement to employee bank accounts</li>
                    <li>Professional salary slip generation</li>
                    <li>Annual tax statements (Form 16)</li>
                    <li>Full & Final settlement for exiting employees</li>
                </ul>
            </div>

            <div className="mb-30">
                <h5 className="mb-10">Statutory Compliance</h5>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>PF registration and monthly contributions</li>
                    <li>ESI registration and compliance management</li>
                    <li>Professional Tax registration and payment</li>
                    <li>Shops & Establishment Act compliance</li>
                    <li>Payment of Wages Act adherence</li>
                    <li>Bonus Act and Gratuity Act compliance</li>
                    <li>Labour law compliance and audit support</li>
                </ul>
            </div>

            <div className="mb-30">
                <h5 className="mb-10">HR Administration</h5>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>Offer letter and employment contract preparation</li>
                    <li>Employee onboarding documentation and orientation</li>
                    <li>Leave and attendance management system</li>
                    <li>Background verification coordination</li>
                    <li>Employee grievance handling</li>
                    <li>Exit interview and documentation</li>
                    <li>Relieving letters and experience certificates</li>
                </ul>
            </div>

            <div className="mb-30">
                <h5 className="mb-10">Compliance Reporting</h5>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>Monthly compliance reports</li>
                    <li>Audit-ready documentation</li>
                    <li>Government filing and submission support</li>
                    <li>Compliance calendar and deadline tracking</li>
                </ul>
            </div>

            <h4 className="mb-20 mt-40">Who This Is For</h4>
            <ul className="mb-30" style={{ listStyleType: 'none', paddingLeft: '0' }}>
                <li className="mb-10">Companies with existing IT teams wanting to outsource HR functions</li>
                <li className="mb-10">Businesses expanding teams and needing scalable HR infrastructure</li>
                <li className="mb-10">Organizations wanting to ensure 100% labour law compliance</li>
                <li className="mb-10">Companies looking to reduce HR administrative costs</li>
            </ul>

            <h4 className="mb-20 mt-40">Key Benefits</h4>
            <ul className="mb-30" style={{ listStyleType: 'none', paddingLeft: '0' }}>
                <li className="mb-10">Eliminate HR administrative overhead</li>
                <li className="mb-10">Ensure 100% compliance with law</li>
                <li className="mb-10">Reduce risk of statutory penalties and legal issues</li>
                <li className="mb-10">Access to HR expertise without hiring full-time HR team</li>
                <li className="mb-10">Scalable solution that grows with your team</li>
                <li className="mb-10">Single point of contact for all HR matters</li>
            </ul>
        </>,
        cta: "Simplify Your HR Operations",
        detail_features: [
            <>End-to-End Payroll Processing</>,
            <>100% Statutory Compliance</>,
            <>Complete HR Administration</>,
            <>Labour Law Audit Support</>,
            <>Compliance Reporting</>,
            <>Scalable HR Infrastructure</>
        ]
    },
    // SECONDARY SERVICE
    {
        id: 4,
        alphabet: "D",
        title: "Project-Based Development",
        img: service_dev_img,
        description: <>End-to-end software development using our skilled talent network.</>,
        detail_title: "Project-Based Development Services",
        detail_description: <>
            <p className="mb-20"><strong>End-to-end software development using our skilled talent network</strong></p>
            <p className="mb-30">For clients who prefer complete project outsourcing, we undertake end-to-end development using our vetted network of IT professionals. We handle everything from requirements gathering to deployment and support.</p>

            <h4 className="mb-20">What We Build</h4>

            <div className="row mb-30">
                <div className="col-md-6 mb-25">
                    <h5 className="mb-10">Web Applications</h5>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>Custom web applications using React, Next.js, Node.js</li>
                        <li>Progressive Web Apps (PWAs) for offline-capable experiences</li>
                        <li>Single Page Applications (SPAs)</li>
                        <li>RESTful and GraphQL API development</li>
                        <li>Third-party API integrations</li>
                        <li>Legacy application modernization</li>
                        <li>Responsive, scalable, and secure web solutions</li>
                    </ul>
                </div>
                <div className="col-md-6 mb-25">
                    <h5 className="mb-10">Mobile Applications</h5>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>Native iOS apps (Swift, Objective-C)</li>
                        <li>Native Android apps (Kotlin, Java)</li>
                        <li>Cross-platform solutions (React Native, Flutter)</li>
                        <li>Mobile app UI/UX design</li>
                        <li>App Store and Play Store deployment</li>
                        <li>Mobile backend development</li>
                        <li>Push notifications and real-time features</li>
                    </ul>
                </div>
                <div className="col-md-6 mb-25">
                    <h5 className="mb-10">E-commerce Solutions</h5>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>Custom e-commerce platforms</li>
                        <li>Payment gateway integrations</li>
                        <li>Inventory management systems</li>
                        <li>Shopping cart and checkout flows</li>
                        <li>Product catalog management</li>
                        <li>Order tracking and fulfillment</li>
                    </ul>
                </div>
                <div className="col-md-6 mb-25">
                    <h5 className="mb-10">Cloud Solutions</h5>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>Cloud migration (AWS, Azure, Google Cloud)</li>
                        <li>Cloud-native application development</li>
                        <li>Serverless architecture implementation</li>
                        <li>Microservices architecture</li>
                        <li>Auto-scaling and load balancing</li>
                        <li>Cloud cost optimization</li>
                    </ul>
                </div>
            </div>

            <h4 className="mb-20 mt-40">Our Development Approach</h4>

            <div className="row mb-30">
                <div className="col-md-4 mb-20">
                    <h5 className="mb-10">Agile Methodology</h5>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>2-week sprint cycles</li>
                        <li>Regular sprint demos and feedback sessions</li>
                        <li>Flexible to changing requirements</li>
                        <li>Continuous integration and deployment</li>
                    </ul>
                </div>
                <div className="col-md-4 mb-20">
                    <h5 className="mb-10">Quality Assurance</h5>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>QA testing integrated in every sprint</li>
                        <li>Automated testing where applicable</li>
                        <li>Performance and security testing</li>
                        <li>User acceptance testing support</li>
                    </ul>
                </div>
                <div className="col-md-4 mb-20">
                    <h5 className="mb-10">Transparent Communication</h5>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>Dedicated project manager assigned</li>
                        <li>Daily/weekly progress updates</li>
                        <li>Sprint review and retrospective meetings</li>
                        <li>Clear documentation throughout</li>
                    </ul>
                </div>
            </div>

            <h4 className="mb-20 mt-40">Technology Stack We Use</h4>
            <div className="mb-30">
                <p className="mb-10"><strong>Frontend:</strong> React.js, Next.js, Angular, Vue.js, HTML5, CSS3, Tailwind CSS</p>
                <p className="mb-10"><strong>Backend:</strong> Node.js, Python (Django, Flask), Java (Spring Boot), .NET Core, PHP (Laravel)</p>
                <p className="mb-10"><strong>Mobile:</strong> React Native, Flutter, iOS (Swift), Android (Kotlin)</p>
                <p className="mb-10"><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB, Redis, Firebase</p>
                <p className="mb-10"><strong>Cloud:</strong> AWS, Azure, Google Cloud Platform</p>
                <p className="mb-10"><strong>DevOps:</strong> Docker, Kubernetes, Jenkins, GitLab CI/CD, Terraform</p>
            </div>
        </>,
        cta: "Discuss Your Project",
        detail_features: [
            <>Web & Mobile App Development</>,
            <>E-commerce Platforms</>,
            <>Cloud Migration & Solutions</>,
            <>Agile Development Process</>,
            <>Full QA & Testing</>,
            <>Dedicated Project Management</>
        ]
    },
    // INFORMATIONAL SECTIONS
    {
        id: 10,
        alphabet: "A",
        title: "Who We Are",
        img: service_img_1,
        description: <>A No-nonsense, Execution-first technology partner.</>,
        link: "/about-us",
        detail_title: "Who We Are",
        detail_description: <>
            <p>Purnavi IT Solutions Pvt. Ltd. is a dedicated and forward thinking IT staffing, recruitment, and technology services company committed to helping organizations build high-performing teams and achieve sustainable digital growth. With a strong foundation in talent acquisition and a steadily expanding portfolio in custom technology development, we serve as a strategic partner to businesses seeking reliable, skilled, and future ready IT capabilities.</p>
            <p>Our primary focus is to empower organizations by connecting them with exceptional IT professionals who bring technical expertise, industry experience, and the ability to deliver real business impact. Over the years, we have developed a robust hiring ecosystem backed by proven recruitment methodologies, a wide talent network, domain specific hiring specialists, and a process driven engagement model that ensures companies receive the right talent at the right time.</p>
            <p>In addition to staffing and recruitment, Purnavi IT Solutions has strengthened its service offerings to include selective end-to-end technology development projects. For clients who require complete ownership from planning and architecture to development, deployment, and ongoing support. We provide a dedicated project execution team capable of handling assignments of varying scale and complexity. This dual capability staffing plus development enables us to support clients with flexible engagement models based on their business needs.</p>

            <h4 className="mb-20">Our Core Areas of Expertise</h4>

            <div className="mb-30">
                <h5 className="mb-10">1. Permanent IT Staffing</h5>
                <p>We help organizations build strong inhouse teams by identifying, evaluating, and onboarding fulltime professionals who fit both the technical requirements and company culture. Our structured hiring framework ensures:</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>Deep screening for technical and softskill competencies</li>
                    <li>Role-based shortlisting to reduce client workload</li>
                    <li>Faster hiring cycles powered by our extensive talent network</li>
                    <li>High retention through quality driven candidate selection</li>
                </ul>
            </div>

            <div className="mb-30">
                <h5 className="mb-10">2. Contract & Contract to Hire Staffing</h5>
                <p>To meet dynamic project needs, we offer flexible staffing solutions that allow businesses to scale their workforce without longterm commitments. With contract and contract to hire models, clients benefit from:</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>Rapid deployment of skilled IT professionals</li>
                    <li>Cost-effective workforce scalability</li>
                    <li>Trial periods before fulltime absorption</li>
                    <li>Reduced hiring risks and faster project delivery</li>
                </ul>
            </div>

            <div className="mb-30">
                <h5 className="mb-10">3. Workforce & HR Management</h5>
                <p>Beyond recruitment, we provide comprehensive workforce management services covering payroll, compliance, and HR administration. Our solutions ensure that clients remain fully compliant while reducing operational burden. This includes:</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>Complete payroll processing</li>
                    <li>PF, ESI, PT, and statutory compliance</li>
                    <li>Attendance & leave management</li>
                    <li>End-to-end onboarding and exit formalities</li>
                    <li>HR documentation, reporting, and audit support</li>
                </ul>
            </div>

            <div className="mb-30">
                <h5 className="mb-10">4. Custom IT Development Services</h5>
                <p>For organizations that prefer to outsource entire projects rather than hire and manage teams inhouse, Purnavi IT Solutions delivers complete development services. We engage with clients to understand their vision, convert ideas into technical roadmaps, and execute projects with a focus on quality, transparency, and timely delivery. Our capabilities include:</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>Web and mobile application development</li>
                    <li>Custom enterprise software solutions</li>
                    <li>UI/UX design and implementation</li>
                    <li>QA & testing services</li>
                    <li>Maintenance, enhancements, and long-term product support</li>
                </ul>
                <p className="mt-10">Our project execution approach is rooted in collaboration, clear communication, and accountability ensuring that clients receive solutions aligned with their goals, timelines, and business standards.</p>
            </div>

            <h4 className="mb-20">Our Commitment</h4>
            <p>Whether your requirement is to hire skilled IT professionals or outsource an end-to-end technology project, Purnavi IT Solutions Pvt. Ltd. delivers excellence through:</p>
            <ul className="mb-20" style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
                <li>Quality driven recruitment</li>
                <li>Transparent processes and timelines</li>
                <li>Strong domain expertise</li>
                <li>A reliable and accountable delivery model</li>
                <li>Talent and technology solutions tailored to your business needs</li>
            </ul>
            <p>We take pride in partnering with organizations across industries to support their transformation journey with the right people, the right technology, and the right solutions.</p>
        </>,
        detail_features: [
            <>Execution First Mindset</>,
            <>Full-Stack Responsibility</>,
            <>Agile & Iterative Process</>,
            <>Modern Development Frameworks</>,
            <>Cloud & DevOps Expertise</>,
            <>Comprehensive QA Testing</>,
            <>Strategic Talent Solutions</>
        ]
    },
    {
        id: 11,
        alphabet: "W",
        title: "What We Do",
        img: service_img_2,
        description: <>Offering a fully integrated, modern, and accountable approach.</>,
        link: "/service-details/11",
        detail_title: "What We Do",
        detail_description: <>
            <p className="mb-40">We provide comprehensive IT staffing and development services that define our excellence and commitment to your business growth:</p>

            {/* Service 1 */}
            <h4 className="mb-20">1. Permanent IT Staffing & Recruitment</h4>
            <div className="mb-40">
                <p>End-to-end recruitment for permanent IT positions across all technology domains. We handle the complete permanent hiring process—from sourcing and screening to final placement and onboarding.</p>
                <div className="mb-20">
                    <p className="mb-10"><strong>What We Deliver:</strong></p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>Comprehensive talent sourcing from multiple channels</li>
                        <li>Multi-stage screening (technical, behavioral, cultural fit)</li>
                        <li>Interview coordination and logistics management</li>
                        <li>Offer management & onboarding support</li>
                    </ul>
                </div>

                <div className="tp-service-details-cta">
                    <Link href="/service-details/1" className="tp-btn">
                        Learn More About Permanent Staffing <i className="fa-regular fa-arrow-right-long ml-10"></i>
                    </Link>
                </div>
            </div>

            {/* Service 2 */}
            <h4 className="mb-20">2. Contract Staffing Solutions</h4>
            <div className="mb-40">
                <p>Deploy skilled IT professionals immediately without permanent hiring overhead. Our contract staffing model provides skilled IT professionals on our payroll while working on your projects.</p>

                <div className="mb-20">
                    <p className="mb-10"><strong>Engagement Models:</strong></p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>Short-Term Contract Staffing (3-6 months)</li>
                        <li>Long-Term Contract Staffing (6+ months)</li>
                        <li>Contract-to-Hire with smooth transition</li>
                    </ul>
                </div>

                <div className="tp-service-details-cta">
                    <Link href="/service-details/2" className="tp-btn">
                        Learn More About Contract Staffing <i className="fa-regular fa-arrow-right-long ml-10"></i>
                    </Link>
                </div>
            </div>

            {/* Service 3 */}
            <h4 className="mb-20">3. HR, Payroll & Compliance Management</h4>
            <div className="mb-40">
                <p>Complete workforce administration for your IT teams. Focus on your core business while we handle the entire HR-payroll-compliance function. We ensure 100% statutory compliance and eliminate administrative burden.</p>

                <div className="mb-20">
                    <p><strong>Services Included:</strong></p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>Payroll Processing: Salary calculation, disbursement, Form 16, F&F</li>
                        <li>Statutory Compliance: PF, ESI, PT, Labour law audits</li>
                        <li>HR Administration: Onboarding, leave management, exit documentation</li>
                        <li>Compliance Reporting: Monthly reports, audit documentation</li>
                    </ul>
                </div>

                <div className="tp-service-details-cta">
                    <Link href="/service-details/3" className="tp-btn">
                        Learn More About HR Services <i className="fa-regular fa-arrow-right-long ml-10"></i>
                    </Link>
                </div>
            </div>

            {/* Service 4 */}
            <h4 className="mb-20">4. Project-Based Development Services</h4>
            <div className="mb-40">
                <p>End-to-end software development using our skilled talent network. We undertake complete project outsourcing—from requirements gathering to deployment and support.</p>

                <div className="mb-20">
                    <p><strong>What We Build:</strong></p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>Web Applications (React, Next.js, Node.js)</li>
                        <li>Mobile Applications (iOS, Android, React Native, Flutter)</li>
                        <li>E-commerce Solutions</li>
                        <li>Cloud Solutions (AWS, Azure, GCP)</li>
                    </ul>
                </div>

                <div className="tp-service-details-cta">
                    <Link href="/service-details/4" className="tp-btn">
                        Learn More About Development Services <i className="fa-regular fa-arrow-right-long ml-10"></i>
                    </Link>
                </div>
            </div>
        </>,
        detail_features: [
            <>Permanent IT Staffing</>,
            <>Contract Staffing Solutions</>,
            <>HR, Payroll & Compliance</>,
            <>Project-Based Development</>,
            <>Vetted Talent Network</>,
            <>Full Project Ownership</>
        ]
    },
    {
        id: 12,
        alphabet: "W",
        title: "Why Choose Us",
        img: service_img_3,
        description: <>Delivering comprehensive IT solutions from development to deployment.</>,
        link: "/service-details/12",
        detail_title: "Why Choose Purnavi IT Solutions",
        detail_description: <>
            <h4 className="mb-20">Our Core Strength: IT Staffing Excellence</h4>
            <p>At the heart of our organization lies a deep and proven expertise in IT staffing. This is not just a service we provide, but a capability we have refined through years of industry experience, extensive market understanding, and a strong commitment to helping companies build exceptional technology teams.</p>
            <p>One of our greatest advantages is our access to a large and consistently updated pool of pre vetted talent. Every professional we present to our clients has been thoroughly evaluated through multi level screening, technical assessments, project portfolio review, and role based interviews. This ensures that businesses receive candidates who are not only technically capable, but also aligned with the expectations of modern IT environments.</p>
            <p>Our ability to deploy skilled professionals quickly is another key strength. Whether the requirement is for permanent hiring, contract staffing, or urgent project based support, our teams work with precision to deliver suitable talent within tight timelines. This fast turnaround is especially valuable for organizations operating in competitive markets where project delays can impact business outcomes.</p>

            <h5 className="mb-10">Comprehensive Workforce Management</h5>
            <p>In addition to staffing, we take complete responsibility for all human resource processes associated with contract employees. Companies do not need to invest time or effort in payroll processing, compliance management, provident fund, employee state insurance, professional tax, or any statutory requirements. We manage all of this seamlessly, allowing clients to focus entirely on running their business while we handle every aspect of workforce administration.</p>

            <h5 className="mb-10">Flexible Hiring Models</h5>
            <p>We also offer flexible hiring models that accommodate the evolving needs of modern organizations. Whether a company prefers full time employees, short term contract professionals, contract to hire options, or an entire team staffed for a specific project, we provide staffing structures that allow effortless scalability without any long term commitments.</p>

            <h5 className="mb-10">Quality & Cost Efficiency</h5>
            <p>Quality is central to our approach. For permanent staffing, we provide a ninety day replacement assurance to protect our clients from hiring mismatches. For contract staffing, any performance concerns are addressed immediately with quick replacement options. This ensures that productivity remains uninterrupted and organizational goals continue to move forward without compromise.</p>
            <p>Our solutions also help companies save significantly on recruitment costs while still gaining access to highly skilled professionals. By combining our recruitment expertise with operational efficiency, we deliver a staffing experience that is cost conscious, dependable, and consistently aligned with client expectations.</p>

            <h4 className="mb-20 mt-30">Our Growing Capability: Development Services</h4>
            <p>In addition to staffing, our organization is steadily expanding its presence in the development services space. This includes handling complete end to end project execution for clients who prefer a fully managed development model.</p>
            <p>We take ownership from the very beginning, starting with idea evaluation and requirement understanding, and continue through architecture planning, design, development, deployment, and post launch support. Dedicated project managers oversee every stage, ensuring smooth communication and complete clarity throughout the engagement.</p>
            <p>All development work is carried out by skilled professionals from our verified talent network. These are experts with proven experience across diverse industries, modern technologies, and real world project scenarios. Clients receive the advantage of working with a team that is both technically strong and well aligned with current market standards.</p>
            <p>We consistently work with modern and trending technology stacks that support performance, scalability, and long term reliability. Our approach follows agile delivery principles, with sprint based development, transparent progress reporting, and regular demonstrations to help clients stay updated at every stage.</p>
            <p>Quality is built into our process. Quality assurance and testing are integrated throughout the development lifecycle rather than being treated as a final step. This ensures fewer errors, smoother releases, and a more stable final product that is ready for real world use.</p>

            <h4 className="mb-20 mt-30">Technology Skills We Staff For</h4>
            <p>The professionals we provide are experienced across a wide range of modern technologies. These skills also represent the core stacks we utilize in our development projects.</p>

            <div className="row mb-30">
                <div className="col-md-6 mb-20">
                    <h5 className="mb-10">Web Development</h5>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>React JS</li>
                        <li>Angular</li>
                        <li>Vue JS</li>
                        <li>Next JS</li>
                        <li>Node JS</li>
                        <li>Python</li>
                        <li>Java</li>
                        <li>Dot Net Core</li>
                        <li>PHP</li>
                    </ul>
                </div>
                <div className="col-md-6 mb-20">
                    <h5 className="mb-10">Mobile Application Development</h5>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>iOS using Swift</li>
                        <li>Android using Kotlin and Java</li>
                        <li>React Native</li>
                        <li>Flutter</li>
                        <li>Xamarin</li>
                    </ul>
                </div>
                <div className="col-md-6 mb-20">
                    <h5 className="mb-10">Cloud and DevOps</h5>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>Amazon Web Services</li>
                        <li>Microsoft Azure</li>
                        <li>Google Cloud Platform</li>
                        <li>Docker</li>
                        <li>Kubernetes</li>
                        <li>Jenkins</li>
                        <li>Terraform</li>
                        <li>CI/CD pipelines</li>
                    </ul>
                </div>
                <div className="col-md-6 mb-20">
                    <h5 className="mb-10">Data Engineering and Analytics</h5>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>Structured Query Language (SQL)</li>
                        <li>NoSQL</li>
                        <li>Big Data frameworks</li>
                        <li>ETL pipelines</li>
                        <li>Data warehousing</li>
                        <li>Power BI</li>
                        <li>Tableau</li>
                    </ul>
                </div>
                <div className="col-md-6 mb-20">
                    <h5 className="mb-10">QA and Testing</h5>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>Manual testing</li>
                        <li>Selenium automation</li>
                        <li>Appium</li>
                        <li>Cypress</li>
                        <li>API testing</li>
                        <li>Performance testing and optimization</li>
                    </ul>
                </div>
                <div className="col-md-6 mb-20">
                    <h5 className="mb-10">UI and UX Design</h5>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>Figma</li>
                        <li>Adobe XD</li>
                        <li>Sketch</li>
                        <li>User research</li>
                        <li>Prototyping</li>
                        <li>Wireframing</li>
                    </ul>
                </div>
            </div>

            <h4 className="mb-20 mt-30">Non IT Staffing Capabilities</h4>
            <p>Along with strong IT staffing capabilities, we also support businesses with a wide range of non IT hiring requirements across multiple industries. Our non IT staffing solutions cover roles that are essential for smooth business operations and organizational growth.</p>
            <p>We cater to various sectors such as finance, administration, human resources, operations, sales, marketing, logistics, customer service, and manufacturing. Our team sources candidates through domain specific recruiters to ensure that every professional is well suited for the responsibilities of the role.</p>

            <h5 className="mb-10">Common Non-IT Positions We Staff:</h5>
            <div className="row">
                <div className="col-md-6">
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>Administrative executives</li>
                        <li>Office managers</li>
                        <li>Customer support executives</li>
                        <li>Sales and marketing professionals</li>
                        <li>Business development executives</li>
                        <li>Human resource executives</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>Finance and accounting roles</li>
                        <li>Back office staff</li>
                        <li>Operations coordinators</li>
                        <li>Store and warehouse employees</li>
                        <li>Procurement and supply chain staff</li>
                        <li>Supervisors and junior management roles</li>
                    </ul>
                </div>
            </div>

            <p className="mt-20">Our non IT staffing services follow the same quality driven approach as our IT hiring solutions, ensuring reliable, qualified, and committed professionals who contribute effectively to organizational success.</p>
        </>,
        detail_features: [
            <>Full-Stack Web & Mobile Development</>,
            <>Cloud Migration & DevOps Automation</>,
            <>Comprehensive QA & Test Automation</>,
            <>UI/UX Design & Accessibility</>,
            <>Custom Enterprise Solutions</>,
            <>Product Engineering & MVP Development</>,
            <>Flexible Delivery & Staffing Models</>
        ]
    }
]
export default service_data
