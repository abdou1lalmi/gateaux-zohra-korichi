type ContactFormData = {
  name: string;
  phone: string;
  eventType: string;
  date?: string;
  pieces?: string;
  message?: string;
};

export async function sendContactEmail(_data: ContactFormData): Promise<void> {
  const emailProviderKey = process.env.EMAIL_PROVIDER_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!emailProviderKey || !contactEmail) {
    console.log("Contact form received; email provider credentials are not configured.");
    return;
  }

  // Integrate the selected provider here. Credentials remain server-side only.
  console.log("Contact form received; email delivery provider is configured.");
}
