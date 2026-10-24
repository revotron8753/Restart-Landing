import type { Metadata } from "next";
import Link from "next/link";
import { LegalContact, LegalPage } from "@/components/LegalPage";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Age Restriction (18+) | Restart Matrimony",
  description: "Restart Matrimony is for adults aged 18 and over. How we restrict access and protect minors.",
};

export default function AgeRestriction() {
  return (
    <LegalPage
      title="Age Restriction (18+)"
      intro="Restart Matrimony is an adult-only service for people looking for a life partner. You must be at least 18 years old to use it."
    >
      <h2>1. Who can use Restart Matrimony</h2>
      <ul>
        <li>You must be at least 18 years old to create an account, browse profiles or contact anyone.</li>
        <li>
          You must also be of legal age to marry under the law that applies to you. If that age is higher than 18, the
          higher age applies.
        </li>
        <li>The app is rated 18+ on Google Play and the App Store.</li>
      </ul>

      <h2>2. Why we restrict access</h2>
      <p>
        The service is built for marriage-minded adults. Profiles include personal details such as age, family,
        education, work and photos, and members can message each other. This is not suitable for anyone under 18.
      </p>

      <h2>3. How we enforce it</h2>
      <ul>
        <li>We ask for your date of birth when you sign up and do not allow sign-up if you are under 18.</li>
        <li>Profiles are checked, and members may be asked to verify their identity and age.</li>
        <li>Profiles that appear to belong to a minor are removed or suspended until age is confirmed.</li>
        <li>You can report any profile you believe belongs to someone under 18 using the report option in the app.</li>
      </ul>

      <h2>4. Profiles created by family members</h2>
      <p>
        A parent, sibling or other relative may manage a profile for an adult family member, with that person&apos;s
        knowledge. The person the profile is about must be 18 or over. We do not allow profiles for children or
        minors under any circumstances.
      </p>

      <h2>5. If you are under 18</h2>
      <p>
        Please do not download, register for or use Restart Matrimony. If we learn that an account belongs to someone
        under 18, we will delete it along with the data linked to it, except where the law requires us to keep
        certain records.
      </p>

      <h2>6. Parents and guardians</h2>
      <p>
        If you believe your child has created an account, write to {company.supportEmail} with the details and we
        will act on it promptly. You can also read how we handle personal data in our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>7. Reporting concerns</h2>
      <p>
        If you see content that involves or targets a minor, report it in the app or contact us straight away. Where
        required, we report such content to the authorities.
      </p>

      <h2>8. Contact us</h2>
      <LegalContact />
    </LegalPage>
  );
}
