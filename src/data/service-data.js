
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
]
export default service_data
