import ScrollToTop from "../../ScrollToTop/ScrollToTop";

const PrivacyPolicy = () => {
    return (
       <div>
        <ScrollToTop/>
         <div className="p-6 max-w-4xl mx-auto mt-16 mb-10">
            <div className="mb-6 text-center">
                <h1 className="text-3xl font-bold">Privacy Policy</h1>
            </div>
            <div className="space-y-4">
                <p>Information posted on SELLFLIT is publicly available. We collect and store the following personal information:</p>
                <hr/>
                <ul className="list-disc pl-6">
                    <li>Phone number, contact information, and sometimes financial information, depending on the service used.</li>
                    <li>Computer sign-on data, statistics on page views, traffic to and from SELLFLIT, and response to advertisements.</li>
                    <li>Other information, including users IP addresses and standard web log information.</li>
                </ul>

                <h2 className="text-xl font-semibold">How We Use Your Information</h2>
                <ul className="list-disc pl-6">
                    <li>Provide our services</li>
                    <li>Resolve disputes, collect fees, and troubleshoot problems</li>
                    <li>Encourage safe trading and enforce our policies</li>
                    <li>Customize users experience and measure interest in our services</li>
                    <li>Improve our services and inform users about services and updates</li>
                    <li>Communicate marketing and promotional offers</li>
                    <li>Perform other activities as described when collecting information</li>
                </ul>

                <h2 className="text-xl font-semibold">Cookies and Tracking</h2>
                <p>We use cookies and similar tracking technologies to personalize content and ads, provide social media features, and analyze traffic. We share information with our social media, advertising, and analytics partners who may combine it with other data they have collected.</p>

                <h2 className="text-xl font-semibold">Opting Out</h2>
                <p>You may opt out of receiving communications by following the unsubscribe link in emails or contacting us. Clearing your browser cache removes stored data, and personal data can be erased by contacting our support team.</p>

                <h2 className="text-xl font-semibold">Third-Party Services</h2>
                <p>We may use the following third-party service providers to monitor and analyze the use of our service:</p>
                <ul className="list-disc pl-6">
                    <li>AppNexus</li>
                    <li>Facebook</li>
                    <li>Google</li>
                    <li>Open X</li>
                    <li>PubMatic</li>
                    <li>PubNub</li>
                    <li>Sendgrid</li>
                    <li>WebEngage</li>
                </ul>

                <h2 className="text-xl font-semibold">Information Disclosure</h2>
                <p>We do not sell or rent users personal information without explicit consent. We may disclose information to respond to legal requirements, enforce policies, or protect rights, property, or safety.</p>
                <p>SELLFLIT may share your phone number with sellers to facilitate better offers on products of interest. By using our service, you consent to this sharing.</p>

                <h2 className="text-xl font-semibold">Security</h2>
                <p>We implement various security measures, including passwords and physical security, to protect your information.</p>
                <p>All personal electronic details will remain private except for those users choose to disclose. Disclosing others contact information is prohibited.</p>
                <p>Violation of local laws or our terms of use results in forfeiture of privacy rights over personal information.</p>
            </div>
        </div>
       </div>
    );
};

export default PrivacyPolicy;