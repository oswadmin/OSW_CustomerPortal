import { PageSection } from "@/components/PageSection";
import Image from "next/image";
import { ButtonStandard } from "@/components/ButtonStandard";
import { submitRequest } from "./_actions/requests";
import { RequestForm } from "./_components/Form";
import PageFooter from "@/components/PageFooter";


interface Request {
  custFirstName: string;
  custLastName: string;
  custEmail: string;
  custPhone: string;
  custAddress: string;
  custDesc: string;
  custReferral: string;
  custPromo: string;
}

export default function EstimatePage() {
  return (
    <>
      <main>

        {/*****************************************************************/}
        {/* ESTIMATE SECTION */}
        {/*****************************************************************/}
        <PageSection title="Estimate Request" className="bg-gradient-to-b from-white to-orange" >
          
        <RequestForm/>




        </PageSection>
      </main>

      <PageFooter showTop={false}/>
    </>
  );
}


