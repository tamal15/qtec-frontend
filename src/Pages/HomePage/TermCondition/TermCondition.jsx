import ScrollToTop from "../../ScrollToTop/ScrollToTop";

const TermCondition = () => {
    return (
       <div>
        <ScrollToTop/>
         <div className="p-6 max-w-4xl mx-auto mt-16 mb-10">
            <div className="mb-6 text-center">
                <h1 className="text-3xl font-bold">Terms & Conditions</h1>
            </div>
            <div className="space-y-4">
                <p>Welcome to our classified ads platform. By using our website, you agree to comply with the following terms and conditions.</p>
                <hr/>

                <h2 className="text-xl font-semibold">1. User Responsibilities</h2>
                <p>Users must provide accurate information and ensure that all listings comply with our guidelines. Any false or misleading content will be removed.</p>

                <h2 className="text-xl font-semibold">2. Prohibited Activities</h2>
                <p>Users are not allowed to post illegal, fraudulent, or misleading ads. Content that violates any local laws will be taken down.</p>

                <h2 className="text-xl font-semibold">3. Account Security</h2>
                <p>You are responsible for maintaining the security of your account. Do not share login credentials with others.</p>

                <h2 className="text-xl font-semibold">4. Payment and Transactions</h2>
                <p>All transactions should be conducted securely. We are not responsible for disputes between buyers and sellers.</p>

                <h2 className="text-xl font-semibold">5. Termination of Service</h2>
                <p>We reserve the right to terminate accounts that violate these terms without prior notice.</p>

                <h2 className="text-xl font-semibold">6. Changes to Terms</h2>
                <p>We may update these terms from time to time. Continued use of our platform means acceptance of the new terms.</p>
            </div>
        </div>
       </div>
    );
};

export default TermCondition;