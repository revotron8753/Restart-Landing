import type { Metadata } from "next";
import Link from "next/link";
import { LegalContact, LegalPage } from "@/components/LegalPage";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Privacy Policy | Restart Matrimony",
  description: "What Restart Matrimony collects, why, who can see it, and the choices you have.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Looking for a partner again means sharing personal things. This policy explains what we collect, why we collect it, who can see it, and the choices you have."
    >
      <h2>1. Who we are</h2>
      <p>
        Restart Matrimony is operated by {company.legalName} (“we”, “us”). This policy covers the Restart Matrimony
        mobile app and this website. By using them you agree to this policy and to our{" "}
        <Link href="/terms">Terms &amp; Conditions</Link>.
      </p>

      <h2>2. Information we collect</h2>
      <ul>
        <li>
          <strong>Account details:</strong> name, mobile number, email address, date of birth, gender and city.
        </li>
        <li>
          <strong>Profile details:</strong> photos, marital status, children, family type, religion and caste, dosham
          or manglik status, languages, star sign and nakshatra, education, work, and drinking and smoking habits.
        </li>
        <li>
          <strong>Verification (KYC) data:</strong> a guided face scan, a government photo ID such as Aadhaar or a
          driving licence, and proof of address.
        </li>
        <li>
          <strong>Matchmaker AI conversations:</strong> the text and voice notes you send while describing yourself and
          the partner you hope for.
        </li>
        <li>
          <strong>Activity and communication:</strong> swipes, chat requests, favourites, messages and voice notes, and
          records of voice and video calls made in the app, such as time and duration.
        </li>
        <li>
          <strong>Payment details:</strong> your plan, amount, date and transaction reference. Payments are handled by
          our payment partners or by the App Store or Google Play. We do not receive your full card number or UPI PIN.
        </li>
        <li>
          <strong>Device and usage data:</strong> device type, operating system, app version, language, IP address and
          crash logs.
        </li>
      </ul>

      <h2>3. Sensitive information is optional</h2>
      <p>
        Questions about why a previous marriage ended, children, health, religion and caste are sensitive. Each of them
        includes a “Prefer not to say” option, and you decide how much appears on your profile. You can change or
        remove these answers at any time from your profile settings.
      </p>

      <h2>4. Profiles created by family members</h2>
      <p>
        Parents, siblings and cousins can create a profile for someone else. If you do this, you confirm that the
        person knows about the profile and has agreed to their details being shared. The person the profile is about is
        verified through KYC, and they can ask us to correct or delete the profile at any time.
      </p>

      <h2>5. How we use your information</h2>
      <ul>
        <li>To create and show your profile, and to suggest matches that fit what you described.</li>
        <li>To verify identity and keep fake or duplicate profiles off the platform.</li>
        <li>To run chat, voice notes, voice calls and video calls inside the app.</li>
        <li>To process subscriptions and handle refunds.</li>
        <li>To respond to support requests, complaints and reports about other members.</li>
        <li>To detect fraud and abuse, fix problems and improve the service.</li>
        <li>To meet our legal obligations.</li>
      </ul>

      <h2>6. Matchmaker AI</h2>
      <p>
        Matchmaker AI uses your answers to build your profile and to select the profiles it shows you. These
        suggestions are generated automatically. They are a starting point and not a recommendation or a guarantee
        about any person. You can edit what the AI has written on your profile.
      </p>

      <h2>7. What other members can see</h2>
      <ul>
        <li>Other members can see your profile, your photos and whether you are verified.</li>
        <li>Your ID documents, face scan and proof of address are never shown to other members.</li>
        <li>
          Your phone number and email address are not shown on your profile. Messages and calls happen inside the app.
        </li>
        <li>Anything you choose to tell another member in a chat or call is shared with that member.</li>
      </ul>

      <h2>8. Who we share information with</h2>
      <ul>
        <li>
          <strong>Service providers</strong> who work for us under contract, for identity verification, payments, cloud
          hosting, messaging, calling and customer support.
        </li>
        <li>
          <strong>Authorities</strong>, when the law, a court order or a lawful government request requires it, or to
          protect someone&apos;s safety.
        </li>
        <li>
          <strong>A successor business</strong>, if Restart Matrimony is merged or sold. We will tell you before your
          data is transferred.
        </li>
      </ul>
      <p>We do not sell your personal information, and we do not share it with advertisers.</p>

      <h2>9. How long we keep it</h2>
      <p>
        We keep your information while your account is active. When you delete your account, we remove your profile
        from the app and delete or anonymise your data, except for records we must keep by law, such as payment
        records, or need in order to resolve a dispute or prevent fraud. Verification documents are kept only as long
        as needed for verification and for our legal obligations.
      </p>

      <h2>10. Security</h2>
      <p>
        We use technical and organisational safeguards, including encryption in transit and restricted staff access,
        to protect your information. No system is completely secure. If a breach affects your data, we will notify you
        and the relevant authority as the law requires.
      </p>

      <h2>11. Your rights and choices</h2>
      <ul>
        <li>See, correct or update your information from your profile and account settings.</li>
        <li>Ask for a copy or a summary of the personal data we hold about you.</li>
        <li>Withdraw consent, hide your profile, or delete your account.</li>
        <li>Nominate someone to exercise these rights on your behalf if you are unable to.</li>
        <li>Raise a complaint with our Grievance Officer, and with the Data Protection Board of India.</li>
      </ul>
      <p>To make a request, write to {company.supportEmail} from your registered email address.</p>

      <h2>12. Age</h2>
      <p>
        Restart Matrimony is only for adults who are of legal age to marry. We do not knowingly collect information
        from anyone under 18, and we delete such accounts when we find them.
      </p>

      <h2>13. Changes to this policy</h2>
      <p>
        We may update this policy as the service changes. We will post the new version here with a new date, and tell
        you in the app before any significant change takes effect.
      </p>

      <h2>14. Contact us</h2>
      <LegalContact />
    </LegalPage>
  );
}
