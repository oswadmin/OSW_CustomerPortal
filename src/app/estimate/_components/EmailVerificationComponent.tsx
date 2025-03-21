
import { ButtonStandard } from "@/components/ButtonStandard";

export function EmailVerificationComponent() {

  return (
    <>
      <div className="flex flex-1 justify-center text-center text-xl desktop:text-4xl mb-4">Your request is pending</div>
      <div className="flex flex-1 justify-center text-center desktop:text-xl text-blue_dark px-6 desktop:mx-60 mb-6">We need to verify your email. Check your email for a verification link to complete the process.</div>

      <div className="flex flex-1 justify-center">
        <ButtonStandard strURL="/" className="m-4 bg-gradient-to-b from-orange_light to-orange hover:bg-orange w-full desktop:w-96 h-[50px] text-2xl">
          Back to Home
        </ButtonStandard>
      </div>
    </>
  )
}

