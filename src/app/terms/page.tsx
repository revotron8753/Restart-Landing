import type { Metadata } from "next";
import Link from "next/link";
import { LegalContact, LegalPage } from "@/components/LegalPage";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Terms & Conditions | Restart Matrimony",
  description: "The rules for using Restart Matrimony: who can join, how to behave, and what we are responsible for.",
};

export default function Terms() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="These are the rules for using Restart Matrimony: who can join, how members are expected to behave, and what we are and are not responsible for."
    >
      <h2>1. Agreeing to these terms</h2>
      <p>
        Restart Matrimony is operated by {company.legalName} (“we”, “us”). By creating an account or using the app or
        this website, you agree to these terms, our <Link href="/privacy">Privacy Policy</Link> and our{" "}
        <Link href="/refund-policy">Refund Policy</Link>. If you do not agree, please do not use the service.
      </p>

      <h2>2. Who can join</h2>
      <ul>
        <li>
          You must be at least 18 and of legal age to marry under the law that applies to you. In India that is 18 for
          women and 21 for men.
        </li>
        <li>
          Restart Matrimony is for people seeking marriage. It is not a dating or casual relationship service.
        </li>
        <li>
          You must state your marital status truthfully, including whether a divorce or separation is complete or
          still in progress.
        </li>
        <li>You must not be barred from using the service by any law, court order or an earlier ban by us.</li>
      </ul>

      <h2>3. Your account</h2>
      <ul>
        <li>One person, one account. Keep your login details private.</li>
        <li>The information and photos on your profile must be accurate, current and your own.</li>
        <li>You are responsible for activity on your account. Tell us at once if you think someone else has used it.</li>
      </ul>

      <h2>4. Creating a profile for a family member</h2>
      <p>
        Parents, siblings and cousins may create and manage a profile for a relative. If you do, you confirm that the
        person knows about the profile, has agreed to it, and meets the requirements in section 2. The person the
        profile is about must complete verification themselves, and may take over or delete the profile at any time.
      </p>

      <h2>5. Verification</h2>
      <p>
        A profile is shown as verified after face, ID and address checks. You agree to submit genuine documents that
        belong to the person on the profile. Verification confirms identity. It does not confirm a member&apos;s
        character, marital history, income, health or intentions.
      </p>

      <h2>6. Matchmaker AI and matches</h2>
      <p>
        Matchmaker AI builds your profile from your answers and suggests other profiles. Suggestions are generated
        automatically and may not always be accurate. We do not guarantee that you will receive matches, that a match
        will respond, or that any match will lead to marriage.
      </p>

      <h2>7. How members must behave</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Give false information, impersonate anyone, or use photos of another person.</li>
        <li>Harass, threaten, abuse or discriminate against another member.</li>
        <li>Ask any member for money, gifts, loans or dowry, or promote a business or investment.</li>
        <li>Send sexually explicit, hateful or unlawful content.</li>
        <li>
          Record, screenshot or share another member&apos;s profile, photos, messages or calls without their consent.
        </li>
        <li>Copy or scrape data from the service, or use bots or automated tools.</li>
        <li>Use the service for anything other than finding a partner for marriage.</li>
      </ul>
      <p>
        You can block or report any member from their profile or chat. We review reports and may act on them without
        notice to the member reported.
      </p>

      <h2>8. Your safety</h2>
      <p>
        We verify identity, but we do not run background, criminal or financial checks, and we are not a party to
        anything you arrange with another member. Please take your own care:
      </p>
      <ul>
        <li>Keep conversations inside the app until you are comfortable.</li>
        <li>Never send money or share bank, card or UPI details with a match.</li>
        <li>Meet for the first time in a public place, and tell family or a friend where you are going.</li>
        <li>Involve your family and make your own enquiries before deciding to marry.</li>
      </ul>

      <h2>9. Premium, payments and refunds</h2>
      <p>
        Restart Matrimony Free has no charge. Restart Matrimony Premium is a paid subscription that renews
        automatically until you cancel in account settings. Prices are shown in the app and include applicable taxes
        unless stated otherwise. Cancellations and refunds are covered by our{" "}
        <Link href="/refund-policy">Refund Policy</Link>.
      </p>

      <h2>10. Your content</h2>
      <p>
        You keep ownership of the photos, text and voice notes you add. You give us permission to store, display and
        process them in order to run the service, including showing your profile to other members. This permission
        ends when you delete the content or your account, except where we must keep a copy by law.
      </p>

      <h2>11. Our content</h2>
      <p>
        The Restart Matrimony name, logo, app, website and everything in them other than member content belong to us
        or our licensors. You may use them only to use the service as intended.
      </p>

      <h2>12. Suspension and closing accounts</h2>
      <p>
        You can delete your account at any time from account settings. We may suspend or remove an account that breaks
        these terms, fails verification, or puts other members at risk. Where the law allows, we will tell you why.
      </p>

      <h2>13. What we are not responsible for</h2>
      <p>
        We provide a platform for members to find and talk to each other. We do not vouch for any member or for the
        accuracy of what members say about themselves. The service is provided as it is, and we do not promise that it
        will be uninterrupted or free of errors.
      </p>
      <p>
        To the extent the law allows, we are not liable for indirect or consequential losses, or for the conduct of
        any member on or off the service. Our total liability to you is limited to the amount you paid us in the 12
        months before the claim. Nothing in these terms removes rights that the law does not allow to be removed.
      </p>

      <h2>14. Governing law and disputes</h2>
      <p>
        These terms are governed by the laws of India. If something goes wrong, please contact our Grievance Officer
        first. Disputes that cannot be resolved that way are subject to the courts at {company.courts}.
      </p>

      <h2>15. Changes to these terms</h2>
      <p>
        We may update these terms. We will post the new version here with a new date, and tell you in the app before
        any significant change takes effect. Continuing to use the service after that means you accept the new terms.
      </p>

      <h2>16. Contact us</h2>
      <LegalContact />
    </LegalPage>
  );
}
