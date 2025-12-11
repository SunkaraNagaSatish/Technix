
// import img here 
import service_img_1 from "@assets/img/services/services-1.jpg";
import service_img_2 from "@assets/img/services/services-2.jpg";
import service_img_3 from "@assets/img/services/services-3.jpg";
import service_img_4 from "@assets/img/services/services-4.jpg";

const service_data = [
    {
        id: 1,
        alphabet: "W",
        title: <>Web & Mobile <br /> Development</>,
        img: service_img_1,
        description: <>Full-stack development services for web and mobile applications with modern frameworks</>,
        detail_title: "Web & Mobile Application Development",
        detail_description: <>
            <p>We build robust, scalable, and high-performance web and mobile applications tailored to your business needs. Our full-stack development team leverages modern frameworks and best practices to deliver seamless user experiences across all devices. From simple websites to complex enterprise-grade applications, we ensure your digital presence is powerful and effective.</p>
            <p>Our development process is agile and iterative, ensuring that we adapt to your changing requirements and deliver value at every stage. We focus on writing clean, maintainable code and implementing rigorous testing to guarantee the reliability and security of your applications. Whether you need a native iOS app, an Android app, or a cross-platform solution using React Native or Flutter, we have the expertise to bring your vision to life.</p>
            <p>We also specialize in Progressive Web Apps (PWAs) that offer a native app-like experience on the web, providing offline capabilities and fast load times. Our e-commerce solutions are designed to drive sales and improve customer engagement, with secure payment gateway integrations and intuitive product management systems.</p>
        </>,
        detail_features: [
            <>Custom Web Application Development (React, Next.js, Node.js)</>,
            <>Mobile App Development (iOS, Android, React Native, Flutter)</>,
            <>Progressive Web Apps (PWA)</>,
            <>E-commerce Solutions</>,
            <>API Development & Integration</>,
            <>Legacy Application Modernization</>
        ]
    },
    {
        id: 2,
        alphabet: "C",
        title: <>Cloud & DevOps <br /> Solutions</>,
        img: service_img_2,
        description: <>Scalable cloud infrastructure, CI/CD pipelines, and DevOps implementation </>,
        detail_title: "Cloud & DevOps Solutions",
        detail_description: <>
            <p>Accelerate your software delivery and optimize your infrastructure with our Cloud and DevOps solutions. We help businesses migrate to the cloud, automate workflows, and implement CI/CD pipelines for faster and more reliable deployments. Our expertise covers major cloud platforms like AWS, Azure, and Google Cloud, ensuring your applications are secure, scalable, and cost-efficient.</p>
            <p>We adopt a "Cloud First" approach to help you leverage the full potential of cloud computing. From designing cloud-native architectures to managing hybrid cloud environments, we provide end-to-end support. Our DevOps practices bridge the gap between development and operations, fostering collaboration and continuous improvement. We implement Infrastructure as Code (IaC) using tools like Terraform and CloudFormation to automate infrastructure provisioning and management.</p>
            <p>Security is at the core of our cloud solutions. We implement robust security measures, including identity and access management, data encryption, and compliance monitoring, to protect your sensitive data and ensure regulatory compliance.</p>
        </>,
        detail_features: [
            <>Cloud Migration & Strategy (AWS, Azure, GCP)</>,
            <>CI/CD Pipeline Implementation</>,
            <>Infrastructure as Code (Terraform, CloudFormation)</>,
            <>Containerization & Orchestration (Docker, Kubernetes)</>,
            <>Cloud Security & Compliance</>,
            <>Serverless Architecture</>
        ]
    },
    {
        id: 3,
        alphabet: "Q",
        title: <>QA Testing & <br /> Automation</>,
        img: service_img_3,
        description: <>Comprehensive testing services including manual, automated, and performance testing</>,
        detail_title: "QA Testing & Automation",
        detail_description: <>
            <p>Ensure the highest quality for your software products with our comprehensive QA testing and automation services. We employ rigorous testing methodologies to identify and fix bugs early in the development cycle. Our team specializes in both manual and automated testing to guarantee your applications are reliable, secure, and perform flawlessly under any conditions.</p>
            <p>We offer a full spectrum of testing services, including functional testing, regression testing, performance testing, and security testing. Our test automation frameworks, built using industry-standard tools like Selenium and Cypress, help reduce testing time and increase test coverage. We integrate testing into your CI/CD pipeline to enable continuous testing and faster feedback loops.</p>
            <p>Our performance testing services ensure that your applications can handle high traffic loads and deliver a smooth user experience. We simulate real-world scenarios to identify bottlenecks and optimize system performance. With our QA services, you can release software with confidence and minimize the risk of post-production issues.</p>
        </>,
        detail_features: [
            <>Manual & Automated Testing</>,
            <>Performance & Load Testing</>,
            <>Security & Penetration Testing</>,
            <>Mobile App Testing</>,
            <>API Testing</>,
            <>Test Automation Framework Development (Selenium, Cypress)</>
        ]
    },
    {
        id: 4,
        alphabet: "U",
        title: <>UI/UX Design & <br /> Modernization</>,
        img: service_img_4,
        description: <>User-centric design solutions and interface modernization </>,
        detail_title: "UI/UX Design & Modernization",
        detail_description: <>
            <p>Create engaging and intuitive digital experiences with our UI/UX design services. We focus on understanding your users to design interfaces that are not only visually stunning but also easy to use. Whether you need a new product design or want to modernize an existing application, our design team delivers solutions that enhance user satisfaction and drive business results.</p>
            <p>Our design process begins with in-depth user research to understand the needs, behaviors, and pain points of your target audience. We create user personas, user journeys, and wireframes to visualize the structure and flow of the application. Our visual designers then bring the interface to life with modern aesthetics, consistent branding, and interactive elements.</p>
            <p>We also specialize in legacy application modernization, transforming outdated interfaces into modern, responsive, and user-friendly experiences. We ensure accessibility compliance (WCAG) so that your digital products are usable by everyone, regardless of their abilities.</p>
        </>,
        detail_features: [
            <>User Research & Persona Development</>,
            <>Wireframing & Prototyping</>,
            <>Visual Design & Branding</>,
            <>Interaction Design</>,
            <>Usability Testing</>,
            <>Accessibility Compliance (WCAG)</>
        ]
    },
    {
        id: 5,
        alphabet: "E",
        title: <>Enterprise <br /> Solutions</>,
        img: service_img_2,
        description: <>Custom enterprise software solutions tailored to your business</>,
        detail_title: "Custom Enterprise Solutions",
        detail_description: <>
            <p>Empower your organization with custom enterprise software solutions designed to streamline operations and boost productivity. We understand the unique challenges of large-scale businesses and build tailored software that integrates seamlessly with your existing systems. From ERP and CRM systems to workflow automation tools, we deliver scalable solutions that grow with your business.</p>
            <p>We work closely with your stakeholders to analyze your business processes and identify areas for improvement. Our team designs and develops custom software solutions that address your specific requirements and provide a competitive edge. We have extensive experience in integrating disparate systems, ensuring data consistency and smooth information flow across your organization.</p>
            <p>Our enterprise solutions are built on robust and scalable architectures, capable of handling large volumes of data and users. We provide comprehensive support and maintenance services to ensure your mission-critical applications remain operational and up-to-date.</p>
        </>,
        detail_features: [
            <>Custom ERP & CRM Development</>,
            <>Business Process Automation</>,
            <>Enterprise Application Integration</>,
            <>Data Analytics & Business Intelligence</>,
            <>Supply Chain Management Systems</>,
            <>HR & Payroll Management Solutions</>
        ]
    },
    {
        id: 6,
        alphabet: "S",
        title: <>Software Product <br /> Engineering</>,
        img: service_img_3,
        description: <>End-to-end product development from concept to deployment with agile methodologies</>,
        detail_title: "Software Product Engineering",
        detail_description: <>
            <p>Turn your innovative ideas into market-ready products with our end-to-end software product engineering services. We handle the entire product lifecycle, from conceptualization and design to development, testing, and deployment. Using agile methodologies, we ensure rapid iteration and delivery, helping you launch high-quality products faster and stay ahead of the competition.</p>
            <p>We act as your strategic partner, providing technical expertise and industry insights to help you make informed decisions. Our team works collaboratively with you to define the product roadmap, prioritize features, and develop a Minimum Viable Product (MVP) to validate your concept. We then scale the product based on user feedback and market demand.</p>
            <p>Our product engineering services cover a wide range of domains, including SaaS, fintech, healthcare, and e-commerce. We leverage the latest technologies and frameworks to build future-proof products that deliver exceptional value to your users.</p>
        </>,
        detail_features: [
            <>Product Strategy & Roadmap</>,
            <>MVP Development</>,
            <>Full-Cycle Product Development</>,
            <>SaaS Product Engineering</>,
            <>Product Modernization & Re-engineering</>,
            <>Maintenance & Support</>
        ]
    },
    {
        id: 7,
        alphabet: "P",
        title: <>End-To-End IT <br /> Project Delivery</>,
        img: service_img_1,
        description: <>Turn ideas into working digital solutions without unnecessary delays or confusion</>,
        link: "/end-to-end-it-project-delivery",
        detail_title: "End-To-End IT Project Delivery",
        detail_description: <>
            <p>Purnavi IT Solutions approaches project delivery with a direct, execution-first mindset. When a business hands over an idea, the objective is simple: turn it into a working digital solution without unnecessary delays, confusion, or back-and-forth. The team takes responsibility for every step, whether it's building a web application, developing a mobile product, or engineering a full software platform from scratch.</p>
            <p>The development process is supported by strong UI and UX practices, modern cloud and DevOps implementations, and a quality assurance approach that relies on both manual scrutiny and automation to keep the output clean, reliable, and ready for scale. Each project is handled with a structure that keeps clients in control while allowing the team to focus on actual delivery rather than corporate theatrics.</p>
            <p>The goal isn't to chase trends or overload businesses with jargon; it's to make sure the final product works, performs, and aligns with what the client needs today and what they may expect tomorrow. With clear communication, transparent updates, and an emphasis on measurable results, the company ensures that projects don't just get completed — they get completed properly, with long-term value embedded into every build.</p>
        </>,
        detail_features: [
            <>Execution-First Mindset</>,
            <>Full-Cycle Development (Web, Mobile, Platform)</>,
            <>Strong UI/UX Practices</>,
            <>Modern Cloud & DevOps Implementation</>,
            <>Manual & Automated QA</>,
            <>Transparent Communication & Updates</>
        ]
    },
    {
        id: 8,
        alphabet: "H",
        title: <>Workforce Hiring <br /> Under Our Payroll</>,
        img: service_img_4,
        description: <>Skilled professionals directly under our payroll for ready-to-work talent</>,
        link: "/workforce-hiring",
        detail_title: "Workforce Hiring Under Our Payroll",
        detail_description: <>
            <p>Many companies struggle with slow recruitment cycles, inconsistent talent quality, and the overhead that comes with maintaining a growing technical workforce. Purnavi IT Solutions addresses this by providing skilled professionals directly under its payroll, allowing businesses to onboard ready-to-work talent without being dragged into a lengthy hiring process.</p>
            <p>The people offered through this model are screened, trained, and prepared for real project environments, covering critical roles across development, quality engineering, design, cloud and data operations, project oversight, and ongoing technical support. Instead of dealing with administrative complexities, businesses get access to a reliable pool of professionals who can join ongoing work immediately and adapt to internal processes without friction.</p>
            <p>This setup gives companies the freedom to scale their teams based on actual demand, avoid unnecessary overhead, and maintain accountability without compromising on talent quality. It's a straightforward way to strengthen a team, stabilize delivery timelines, and keep operations running smoothly, backed by a partner that takes responsibility for both performance and consistency.</p>
        </>,
        detail_features: [
            <>Ready-to-Work Talent</>,
            <>Screened & Trained Professionals</>,
            <>Roles: Dev, QA, Design, Cloud, Data, PM</>,
            <>Immediate Onboarding</>,
            <>Scalable Teams</>,
            <>Reduced Administrative Overhead</>
        ]
    },
    {
        id: 9,
        alphabet: "C",
        title: <>Client-Centric <br /> Project Outsourcing</>,
        img: service_img_2,
        description: <>Dedicated teams and managed IT services with complete ownership and agile execution</>,
        link: "/client-centric-project-outsourcing",
        detail_title: "Client-Centric Project Outsourcing",
        detail_description: <>
            <p>In today's fast-paced digital landscape, businesses need more than just a vendor; they need a partner who understands their vision and takes ownership of their success. Our Client-Centric Project Outsourcing model is designed to bridge the gap between your internal goals and external execution. We provide dedicated teams that integrate seamlessly with your operations, ensuring that culture, communication, and quality are never compromised.</p>
            <p>We move beyond the traditional transactional outsourcing model by adopting a results-oriented approach. Whether you need to scale your development capacity, modernize legacy systems, or build a new product from the ground up, our teams work with an agile mindset to deliver incremental value. We handle the heavy lifting of project management, technical architecture, and quality assurance, allowing you to focus on your core business strategy while maintaining full visibility and control over the project's progress.</p>
            <p>Transparency and accountability are at the heart of our service. We believe in open communication, regular updates, and a shared commitment to your milestones. By aligning our incentives with your success, we ensure that every deliverable meets your standards and drives tangible business outcomes. With Purnavi IT Solutions, you get the flexibility of outsourcing with the reliability and dedication of an in-house team.</p>
        </>,
        detail_features: [
            <>Dedicated Development Teams</>,
            <>Managed IT Services</>,
            <>Agile Execution & Delivery</>,
            <>Complete Project Ownership</>,
            <>Scalable Support Models</>,
            <>Transparent Reporting & Metrics</>
        ]
    },
    {
        id: 10,
        alphabet: "A",
        title: "About Us",
        img: service_img_1,
        description: <>A No-nonsense, Execution-first technology partner.</>,
        link: "/about-us",
        detail_title: "About Us",
        detail_description: <>
            <p>We are a no-nonsense, execution-first technology partner committed to turning your ambitious ideas into working digital solutions—without the corporate delays or unnecessary jargon. We exist to simplify the complex journey of software development, ensuring your product is built right, delivered fast, and prepared to scale.</p>
            <h4 className="mb-20">🎯 Our Philosophy: Results Over Rhetoric</h4>
            <p>At Purnavi IT Solutions, the objective is simple: deliver working software and measurable results.</p>
            <p><strong>Execution-First Mindset:</strong> We focus on getting the job done. We take end-to-end responsibility for project success, ensuring projects are completed properly and aligned with your long-term value.</p>
            <p><strong>Full-Stack Responsibility:</strong> We handle the entire lifecycle—from design and development to cloud deployment and quality assurance. You hand us the idea; we deliver the finished, scalable product.</p>
            <p><strong>Agile & Iterative:</strong> We use an agile development process that is transparent, adaptive, and designed to deliver value at every stage, cutting through delays and confusion.</p>
            <h4 className="mb-20">🛠️ What We Do: End-to-End Technical Mastery</h4>
            <p>We leverage modern, high-demand frameworks and robust process discipline to guarantee high performance and stability.</p>
            <p><strong>Modern Development:</strong> Robust, scalable applications (Web, Mobile, PWA, E-commerce) using React, Next.js, Node.js, Flutter, React Native.</p>
            <p><strong>Cloud & DevOps:</strong> Accelerate delivery with automation, CI/CD, and "Cloud First" strategies using AWS, Azure, GCP, Docker, Kubernetes, Terraform.</p>
            <p><strong>Quality Assurance:</strong> Guarantee reliability through comprehensive, integrated testing using Selenium, Cypress, Performance & Security Testing.</p>
            <p><strong>UI/UX Design:</strong> Design intuitive interfaces that drive business results, not just visual appeal, with User Research, Prototyping, WCAG Accessibility.</p>
            <p><strong>Enterprise Solutions:</strong> Custom ERP/CRM, Supply Chain, and process automation software with robust, scalable architectures for mission-critical systems.</p>
            <h4 className="mb-20">👥 Strategic Advantage: Talent Without the Headache</h4>
            <p>We tackle the painful challenges of recruitment head-on, giving you immediate access to top-tier technical capacity.</p>
            <p><strong>Workforce Hiring Under Our Payroll:</strong> Tired of slow recruitment cycles and inconsistent talent quality? We offer a straightforward solution: We provide skilled professionals directly under our payroll. These are screened, trained, and project-ready experts (in development, QA, design, and DevOps) who can integrate with your team instantly.</p>
            <p>This model allows you to scale immediately based on demand, not HR lead times, avoid administrative overhead and recruitment complexities, and maintain accountability with a partner responsible for performance and consistency.</p>
            <p>We are Purnavi IT Solutions. We don't chase trends. We build what works.</p>
        </>,
        detail_features: [
            <>Execution-First Mindset</>,
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
        title: "Why Choose Us?",
        img: service_img_2,
        description: <>Offering a fully integrated, modern, and accountable approach.</>,
        link: "/why-choose-us",
        detail_title: "Why Choose Purnavi IT Solutions?",
        detail_description: <>
            <p>We're not just a vendor; we're your execution-first technology partner. We eliminate the typical bottlenecks of software development—from slow talent acquisition to technical debt—by offering a fully integrated, modern, and accountable approach.</p>
            <h4 className="mb-20">1. Speed, Quality, and Accountability</h4>
            <p>We guarantee a reliable outcome by combining modern technology with rigorous processes.</p>
            <p><strong>Execution-First Delivery:</strong> We operate with a direct, "turn-it-into-a-working-solution" mindset. We take full responsibility for the entire project lifecycle, ensuring the final product works, performs, and aligns with your business goals—without the unnecessary delays or corporate theatrics.</p>
            <p><strong>Modern Architecture (Built to Scale):</strong> We adopt a "Cloud First" approach and build with future-proof technologies like React, Flutter, AWS, and Kubernetes. Our solutions are inherently scalable, secure, and cost-efficient from day one.</p>
            <p><strong>DevOps & CI/CD Integration:</strong> Quality and speed are non-negotiable. We implement CI/CD Pipelines and Infrastructure as Code (IaC) (using Terraform/CloudFormation) to automate workflows and ensure faster, more reliable deployments and continuous improvement.</p>
            <p><strong>Guaranteed Quality Assurance:</strong> We integrate rigorous testing—from functional and Performance & Load Testing to Security & Penetration Testing—into the CI/CD process. Our use of tools like Selenium and Cypress ensures your product is flawless and ready for high traffic.</p>
            <h4 className="mb-20">2. Your Talent Problem Solved</h4>
            <p>The biggest challenge in tech is finding great people. We solve that by simplifying talent acquisition with our unique staffing model.</p>
            <p><strong>Ready-to-Work Professionals:</strong> We provide skilled developers, QA engineers, designers, and cloud experts directly under our payroll.</p>
            <p><strong>Zero Recruitment Overhead:</strong> Say goodbye to slow recruitment cycles and inconsistent talent. You gain access to a reliable, pre-vetted pool of professionals who can join your team and adapt to your process immediately.</p>
            <p><strong>Flexibility and Scale:</strong> Our model gives you the freedom to scale your technical teams based on actual demand, maintaining accountability and consistent quality without administrative drag.</p>
            <h4 className="mb-20">3. Comprehensive, End-to-End Expertise</h4>
            <p>We don't do partial solutions. We cover the entire digital stack, allowing us to manage your project holistically.</p>
            <p><strong>Full Spectrum of Services:</strong> From creating engaging UI/UX Designs (including WCAG Accessibility Compliance) and Custom Web/Mobile Apps to developing complex Custom ERP & CRM Systems and Legacy Application Modernization.</p>
            <p><strong>Product Engineering Partner:</strong> We treat your idea like our own product, handling the full Software Product Engineering lifecycle—from defining the Product Roadmap and MVP Development to ongoing maintenance and support.</p>
        </>,
        detail_features: [
            <>Execution-First Delivery</>,
            <>Modern Architecture (Cloud First)</>,
            <>DevOps & CI/CD Integration</>,
            <>Guaranteed Quality Assurance</>,
            <>Ready-to-Work Professionals</>,
            <>Zero Recruitment Overhead</>,
            <>Comprehensive End-to-End Expertise</>
        ]
    },
    {
        id: 12,
        alphabet: "W",
        title: "What We Do",
        img: service_img_3,
        description: <>Delivering comprehensive IT solutions from development to deployment.</>,
        link: "/what-we-do",
        detail_title: "What We Do - Our Core Services",
        detail_description: <>
            <p>At Purnavi IT Solutions, we deliver end-to-end technology solutions that transform ideas into scalable, high-performance digital products. Our approach is straightforward: we take ownership of the entire development lifecycle, ensuring that every project is executed with precision, efficiency, and a commitment to measurable results.</p>
            <h4 className="mb-20">💻 Full-Stack Development Services</h4>
            <p>We build modern web and mobile applications using cutting-edge frameworks like React, Next.js, Node.js, Flutter, and React Native. Whether you need a responsive website, a native mobile app, or a cross-platform solution, our full-stack development team creates robust, scalable applications tailored to your business needs.</p>
            <p><strong>Web Development:</strong> Custom web applications, Progressive Web Apps (PWAs), and e-commerce platforms designed for performance and user engagement.</p>
            <p><strong>Mobile Development:</strong> Native iOS and Android apps, as well as cross-platform solutions that deliver seamless experiences across all devices.</p>
            <h4 className="mb-20">☁️ Cloud & DevOps Excellence</h4>
            <p>We accelerate your software delivery through modern cloud infrastructure and DevOps practices. Our team implements CI/CD pipelines, Infrastructure as Code (IaC) using Terraform and CloudFormation, and containerization with Docker and Kubernetes. We work with major cloud platforms including AWS, Azure, and Google Cloud to ensure your applications are secure, scalable, and cost-efficient.</p>
            <p><strong>Cloud Migration:</strong> Seamless transition to cloud environments with minimal downtime and optimized performance.</p>
            <p><strong>DevOps Implementation:</strong> Automated workflows, continuous integration, and deployment pipelines that reduce time-to-market.</p>
            <h4 className="mb-20">🧪 Quality Assurance & Testing</h4>
            <p>We ensure the highest quality standards through comprehensive testing services. Our QA team employs both manual and automated testing methodologies, including functional testing, performance testing, security testing, and penetration testing. Using industry-standard tools like Selenium and Cypress, we integrate testing into the CI/CD pipeline for continuous quality assurance.</p>
            <p><strong>Test Automation:</strong> Reduce testing time and increase coverage with robust automation frameworks.</p>
            <p><strong>Performance Testing:</strong> Ensure your applications can handle high traffic loads and deliver smooth user experiences.</p>
            <h4 className="mb-20">🎨 UI/UX Design & Modernization</h4>
            <p>We create intuitive, visually stunning interfaces that enhance user satisfaction and drive business results. Our design process includes user research, wireframing, prototyping, and visual design, ensuring that every interface is user-centric and accessible. We also specialize in legacy application modernization, transforming outdated systems into modern, responsive experiences.</p>
            <p><strong>User Research:</strong> Deep dive into user needs and behaviors to inform design decisions.</p>
            <p><strong>Accessibility:</strong> WCAG-compliant designs that ensure usability for all users.</p>
            <h4 className="mb-20">🏢 Enterprise & Product Engineering</h4>
            <p>We develop custom enterprise solutions including ERP and CRM systems, business process automation tools, and data analytics platforms. Our product engineering services cover the entire product lifecycle, from concept and MVP development to full-scale deployment and ongoing maintenance. We handle complex integrations, legacy system modernization, and scalable architecture design for mission-critical applications.</p>
            <p><strong>Custom Solutions:</strong> Tailored software that addresses your unique business challenges.</p>
            <p><strong>Product Development:</strong> From idea to market-ready product, we manage every stage with agile methodologies.</p>
            <h4 className="mb-20">🤝 Strategic Delivery Models</h4>
            <p>Beyond traditional development services, we offer flexible engagement models that address your specific needs:</p>
            <p><strong>End-to-End IT Project Delivery:</strong> Complete ownership of projects from requirement gathering to deployment, with transparent communication and measurable results.</p>
            <p><strong>Workforce Hiring Under Our Payroll:</strong> Access skilled, pre-vetted professionals (developers, QA engineers, designers, DevOps specialists) directly under our payroll for immediate team scaling.</p>
            <p><strong>Client-Centric Project Outsourcing:</strong> Dedicated teams that integrate seamlessly with your operations, providing the flexibility of outsourcing with the reliability of an in-house team.</p>
            <p>At Purnavi IT Solutions, we don't just build software—we build partnerships. We combine technical excellence with business acumen to deliver solutions that work, perform, and drive long-term value for your organization.</p>
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
