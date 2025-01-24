import { PageSection } from "@/components/PageSection";
import PageFooter from "@/components/PageFooter";
import { ButtonStandard } from "@/components/ButtonStandard";

export default function EstimatePage() {
  return (
    <>
      <main>

        {/*****************************************************************/}
        {/* THANK YOU SECTION */}
        {/*****************************************************************/}
        <PageSection title="Thank you!" className="bg-white -mt-20" >

        <div className="flex flex-1 justify-center text-center text-xl desktop:text-4xl mb-4">Your request has been submitted</div>
        <div className="flex flex-1 justify-center text-center desktop:text-xl text-blue_dark px-6 desktop:mx-72 mb-4">A sales associate will review your request and contact you within 24 hrs.</div>

        <div className="flex flex-1 justify-center">
            <ButtonStandard strURL="/" className="m-4 bg-gradient-to-b from-orange_light to-orange hover:bg-orange w-full desktop:w-96 h-[50px] text-2xl">
              Back to Home
            </ButtonStandard>
        </div>
        </PageSection>
      </main>

      <PageFooter showTop={false}/>
    </>
  );
}


