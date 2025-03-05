import { FormComponent } from "./_components/FormComponent"
import PageFooter from "@/components/PageFooter"

export default function EstimatePage() {
	return (
		<>
			<main>
				{/*****************************************************************/}
				{/* ESTIMATE SECTION */}
				{/*****************************************************************/}
				{/* <PageSection title="Estimate Request" className="bg-gradient-to-b from-white via-30% via-orange to-orange -mt-20" > */}

				<FormComponent />
			</main>

			<PageFooter showTop={false} />
		</>
	)
}
