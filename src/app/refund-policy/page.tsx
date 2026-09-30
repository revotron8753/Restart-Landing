import type { Metadata } from "next";
import Link from "next/link";
import { LegalContact, LegalPage } from "@/components/LegalPage";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Refund Policy | Restart Matrimony",
  description: "How cancellations and refunds work for Restart Matrimony Premium.",
};

export default function RefundPolicy() {
  return (
    <LegalPage
      title="Refund Policy"
      intro="Restart Matrimony is free to join. This policy explains how cancellations and refunds work if you upgrade to Premium."
    >
      <h2>1. Plans and billing</h2>
      <p>
        Restart Matrimony Free costs nothing. Restart Matrimony Premium is a paid subscription, billed monthly or
        yearly at the price shown in the app when you subscribe. Premium renews automatically at the end of each
        billing period until you cancel.
      </p>

      <h2>2. Cancelling Premium</h2>
      <ul>
        <li>You can cancel at any time in account settings.</li>
        <li>
          If you subscribed through the App Store or Google Play, cancel from your subscriptions in that store.
        </li>
        <li>
          After you cancel, Premium stays active until the end of the period you have already paid for. You will not be
          charged again.
        </li>
        <li>Deleting the app does not cancel your subscription.</li>
      </ul>

      <h2>3. Purchases through the App Store or Google Play</h2>
      <p>
        Payments made through Apple or Google are processed by them, and refunds for those payments are decided under
        their refund policies. Please request the refund from Apple or Google directly. We cannot issue it for them.
      </p>

      <h2>4. When we give a refund</h2>
      <p>For payments made to us directly, we refund in full when:</p>
      <ul>
        <li>You were charged more than once for the same subscription period.</li>
        <li>You were charged for a renewal after you had already cancelled.</li>
        <li>Your payment was debited but Premium was not activated on your account.</li>
        <li>A fault on our side stopped you from using Premium and we could not fix it after you reported it.</li>
      </ul>

      <h2>5. When we do not give a refund</h2>
      <ul>
        <li>For the unused part of a monthly or yearly period after you cancel.</li>
        <li>Because you did not find a match, or did not use the app during the period.</li>
        <li>
          If your account was suspended or removed for breaking our <Link href="/terms">Terms &amp; Conditions</Link>.
        </li>
        <li>For requests made more than {company.refundRequestDays} days after the charge.</li>
      </ul>
      <p>Nothing in this policy limits any right to a refund that you have under the law.</p>

      <h2>6. How to ask for a refund</h2>
      <p>
        Write to {company.supportEmail} within {company.refundRequestDays} days of the charge, and include:
      </p>
      <ul>
        <li>The mobile number or email address registered on your account.</li>
        <li>The transaction ID or payment reference, and the date and amount of the charge.</li>
        <li>A short description of what went wrong.</li>
      </ul>

      <h2>7. How refunds are paid</h2>
      <p>
        We review each request and reply by email. Approved refunds are sent to the original payment method within{" "}
        {company.refundProcessing}. Your bank or payment provider may take additional time to show the amount in your
        account.
      </p>

      <h2>8. Failed payments</h2>
      <p>
        If a payment fails but money has left your account, it is normally reversed automatically by your bank or
        payment provider. If it has not been returned after their stated timeline, contact us with the transaction
        reference and we will follow up.
      </p>

      <h2>9. Price changes</h2>
      <p>
        If the price of Premium changes, we will tell you before your next renewal. The new price applies only from
        that renewal, and you can cancel before it takes effect.
      </p>

      <h2>10. Contact us</h2>
      <LegalContact />
    </LegalPage>
  );
}
