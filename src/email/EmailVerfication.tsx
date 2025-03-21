import { Body, Container, Head, Heading, Html, Preview, Section, Tailwind } from "@react-email/components"

type EmailVerificationProps = {
  verificationLink: string
}



EmailVerification.PreviewProps = {
  verificationLink: '',
} satisfies EmailVerificationProps



export default function EmailVerification({ verificationLink }: EmailVerificationProps) {


  return (
    <Html>
      <Preview>Validate Email</Preview>

      <Tailwind >
        <Head></Head>
        <Body className="font-sans bg-white">
          <Container>
            <Section className="mt-10 text-center">
              <Heading className="text-2xl font-bold">
                Please verify your email address
              </Heading>
              <div className="text-base mt-4">
                Thank you for requesting an estimate from Orange Soft Wash.
              </div>
              <div className="text-base mt-2">
                To activate your request, please verify your email address by clicking the link below:
              </div>
              <Section className="mt-6">
                <a href={verificationLink} className="bg-orange-500 text-white py-2 px-6 rounded-md text-lg font-semibold no-underline">
                  Verify Email
                </a>
                {verificationLink}
              </Section>
              <div className="text-sm mt-6 text-gray-500">
                If you did not request an estimate, you can ignore this email.
              </div>
            </Section>
          </Container>

        </Body>

      </Tailwind>
    </Html>
  )
}


