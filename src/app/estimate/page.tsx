import { PageSection } from "@/components/PageSection";
import { RequestForm } from "./_components/RequestForm";
import PageFooter from "@/components/PageFooter";




export default function EstimatePage() {
  return (
    <>
      <main>

        {/*****************************************************************/}
        {/* ESTIMATE SECTION */}
        {/*****************************************************************/}
        <PageSection title="Estimate Request" className="bg-gradient-to-b from-white via-30% via-orange to-orange -mt-20" >
          
        <RequestForm/>




        </PageSection>
      </main>

      <PageFooter showTop={false}/>
    </>
  );
}


