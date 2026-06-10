import HeroSection from "@/components/About/heroSection";
import "./privacy-policy.css";
export default function PrivacyPolicyPage() {
  return (
    <main>
      {/* Hero section already aapka common hero hoga */}
      <HeroSection
        clasName="privacy-policy-hero"
        text="Privacy Policy"
        mainText="Privacy Policy"
        pageLink="/privacy-policy"
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10">
            <span className="mb-3 inline-flex rounded-full bg-[#BA0C2F]/10 px-4 py-2 text-sm font-semibold text-[#BA0C2F]">
              Privacy Policy
            </span>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Privacy Policy
            </h1>

            <p className="mt-4 text-base leading-8 text-gray-600">
              Jubilee General Insurance Company Limited is committed to
              protecting the privacy and security of your personal information.
              This Privacy Policy explains how we collect, use, store, share,
              and protect information obtained through our website, mobile
              applications, online forms, and other digital services.
            </p>
          </div>

          <div className="space-y-9 text-sm leading-7 text-gray-600">
            <PolicyBlock title="Information We Collect">
              <p>
                We may collect personal information that you voluntarily
                provide, including your name, CNIC, contact details, policy or
                customer information, claim-related information, and any other
                information submitted through our website, mobile applications,
                or online forms.
              </p>

              <p>
                Where healthcare and wellness services are accessed through
                health ecosystem partners, certain information may be shared
                with or received from these partners as necessary to facilitate
                requested services.
              </p>
            </PolicyBlock>

            <PolicyBlock title="How We Use Your Information">
              <p>Your information may be used to:</p>

              <ul className="mt-4 space-y-2">
                <li>Provide and manage our products and services.</li>
                <li>
                  Process inquiries, quotations, applications, policies, and
                  claims.
                </li>
                <li>
                  Facilitate healthcare, wellness, appointment booking, and
                  consultation services where applicable.
                </li>
                <li>Communicate with you regarding our services.</li>
                <li>Verify identity and prevent fraud.</li>
                <li>Improve customer experience and service quality.</li>
                <li>Meet legal, regulatory, and contractual requirements.</li>
              </ul>
            </PolicyBlock>

            <PolicyBlock title="Information Sharing">
              <p>
                We do not sell your personal information. Your information may
                be shared with authorized service providers, business partners,
                regulators, government authorities, healthcare providers, or
                other parties where required for service delivery, appointment
                scheduling, consultation facilitation, claims administration,
                customer support, legal compliance, fraud prevention, or
                protection of our legitimate business interests.
              </p>
            </PolicyBlock>

            <PolicyBlock title="Cookies and Similar Technologies">
              <p>
                We may use cookies, software development kits, analytics tools,
                and similar technologies to improve functionality, security,
                performance, and user experience. Users may manage cookie
                preferences through browser or device settings where applicable.
              </p>
            </PolicyBlock>

            <PolicyBlock title="Third Party Services Disclaimer">
              <p>
                Certain products and services may be delivered through
                independent third-party partners and service providers. Jubilee
                General Insurance Company Limited does not control and is not
                responsible for the quality, availability, accuracy,
                suitability, professional conduct, or outcomes of services
                provided by third-party partners.
              </p>
            </PolicyBlock>

            <PolicyBlock title="Healthcare Services Disclaimer">
              <p>
                Certain healthcare and wellness services accessible through our
                digital platforms are provided by health ecosystem partners and
                their network of healthcare providers and service partners.
                Jubilee General Insurance Company Limited acts solely as a
                facilitator of access to such services and does not provide
                medical advice, consultations, diagnosis, pharmacy services,
                healthcare treatment, or other healthcare-related services.
              </p>
            </PolicyBlock>

            <PolicyBlock title="Information Security">
              <p>
                We maintain appropriate administrative, technical, and
                organizational safeguards to protect personal information
                against unauthorized access, disclosure, alteration, misuse, or
                loss.
              </p>
            </PolicyBlock>

            <PolicyBlock title="Data Retention">
              <p>
                Personal information is retained only for as long as necessary
                to fulfill business, legal, regulatory, contractual, and
                operational requirements. The retention period may vary
                depending on the nature of the information and applicable
                requirements.
              </p>
            </PolicyBlock>

            <PolicyBlock title="Data Deletion">
              <p>
                You may request deletion of your personal information by
                contacting us through the details provided below. Such requests
                will be processed subject to applicable legal, regulatory,
                contractual, and record retention requirements.
              </p>
            </PolicyBlock>

            <PolicyBlock title="Third-Party Links and Services">
              <p>
                Our website, mobile applications, or online forms may contain
                links to third-party platforms, websites, or services. We are
                not responsible for their content, security, service delivery
                standards, or privacy practices.
              </p>
            </PolicyBlock>

            <PolicyBlock title="Consent">
              <p>
                By accessing, registering for, purchasing, or using our products
                and services, you acknowledge and consent to the collection,
                use, processing, storage, and sharing of your information in
                accordance with this Privacy Policy.
              </p>
            </PolicyBlock>

            <PolicyBlock title="Your Rights">
              <p>
                You may request access to, correction, updating, or deletion of
                your personal information by contacting us through the details
                provided below.
              </p>
            </PolicyBlock>

            <PolicyBlock title="Changes to this Privacy Policy">
              <p>
                This Privacy Policy may be updated from time to time. Any
                changes will be published through our official channels and will
                become effective upon publication.
              </p>
            </PolicyBlock>

            <PolicyBlock title="Contact Us">
              <div className="rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-100">
                <p className="font-semibold text-[#BA0C2F]">
                  Jubilee General Insurance Company Limited
                </p>

                <div className="mt-4 space-y-1 text-gray-600">
                  <p>Email: info@jubileegeneral.com.pk</p>
                  <p>Phone: 111-654-111, 32416022-26</p>
                  <p>Website: jubileegeneral.com.pk</p>
                </div>
              </div>
            </PolicyBlock>
          </div>
        </div>
      </section>
    </main>
  );
}

function PolicyBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-3 text-xl font-bold text-gray-900">{title}</h2>

      <div className="policy-content space-y-4">{children}</div>
    </section>
  );
}
