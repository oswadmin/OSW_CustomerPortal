"use client"
import { servicesConfig } from "@/config"
import { useEffect, useRef, useState } from "react"
import { useFormStatus } from "react-dom"

import { FormAction } from "../_actions/FormAction"

import ReCAPTCHA from "react-google-recaptcha"
import GooglePlacesAutocomplete from "react-google-places-autocomplete"

import { PageSection } from "@/components/PageSection"
import { FormCheckboxComponent } from "./FormCheckboxComponent"
import { ThankYouComponent } from "./ThankYouComponent"
import { Label } from "@radix-ui/react-label"

export function FormComponent() {
	interface ActionResult {
		success: boolean
		message?: string
		error?: string[]
	}
	const [actionResult, setActionResult] = useState<ActionResult>({} as ActionResult)
	console.log(actionResult)

	//const [gMapsApiKey, setgMapsApiKey] = useState('');
	const recaptchaRef = useRef<ReCAPTCHA>(null)
	const [recaptchaKey, setRecaptchaKey] = useState("")
	const [recaptchToken, setRecaptchToken] = useState("")

	const [selectedAddress, setSelectedAddress] = useState("")

	const [isCommercial, setIsCommercial] = useState(false) // Default to Residential (not commercial)

	useEffect(() => {
		const key = process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_SITEKEY
		setRecaptchaKey(key ?? "")

		//const gKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLATFORM_APIKEY;
		// console.log('Server-side gMapsAPIKey:', gKey); // Log the key on the server-side
		// setgMapsApiKey(gKey ?? '');
	}, [])

	//-------------------------------------------------------------------------
	//Handlers
	//-------------------------------------------------------------------------
	const handleRecaptchaChange = (token: string | null) => {
		// Handle recaptcha change
		//console.log('Recaptcha token:', token);
		setRecaptchToken(token ?? "")
	}
	const handleCommercialToggle = () => {
		setIsCommercial(!isCommercial)
	}

	const handleSubmit = (e: React.FormEvent) => {
		console.log("handleSubmit")
		if (!recaptchToken) {
			e.preventDefault()
		}
	}

	const handleScrollToTop = () => {
		const scrollDuration = 500 // Adjust the duration as needed
		const scrollStart = window.scrollY
		const scrollEnd = 0
		const startTime = Date.now()

		const animateScroll = () => {
			const elapsedTime = Date.now() - startTime
			const progress = Math.min(elapsedTime / scrollDuration, 1)
			const scrollPosition = scrollStart + (scrollEnd - scrollStart) * progress
			window.scrollTo(0, scrollPosition)

			if (progress < 1) {
				requestAnimationFrame(animateScroll)
			}
		}

		animateScroll()
	}

	async function handleAction(formData: FormData) {
		console.log("handleAction")
		const result = await FormAction(formData)
		console.log(actionResult)
		setActionResult(result as ActionResult)
		handleScrollToTop()
	}

	return (
		<>
			{actionResult.success ? (
				<>
					<PageSection title="Thank you!" className="bg-white">
						<ThankYouComponent />
					</PageSection>
				</>
			) : (
				<PageSection title="Estimate Request" className="bg-white">
					<form
						className="container flex flex-col justify-center space-y-4 pb-10 pt-10 bg-orange rounded-[16px] shadow-lg border-[1px] border-blue"
						onSubmit={handleSubmit}
						action={handleAction}
					>
						<div className="flex flex-col desktop:flex-row gap-4">
							<label htmlFor="custFirstName" className="hidden">
								First name:
							</label>
							<input
								id="custFirstName"
								name="custFirstName"
								placeholder="First Name*"
								className="form-input flex-1"
								required
							/>
							<label htmlFor="custLastName" className="hidden">
								Last name:
							</label>
							<input
								id="custLastName"
								name="custLastName"
								placeholder="Last Name*"
								className="form-input flex-1"
								required
							/>
						</div>
						<div className="flex flex-col desktop:flex-row sm:f gap-4">
							<label htmlFor="custEmail" className="hidden">
								Email:
							</label>
							<input
								id="custEmail"
								name="custEmail"
								placeholder="Email*"
								type="email"
								className="form-input flex-1"
								required
							/>

							<label htmlFor="custPhone" className="hidden">
								Phone:
							</label>
							<input
								id="custPhone"
								name="custPhone"
								placeholder="Phone*"
								type="tel"
								className="form-input lg:w-1/5 "
								required
							/>
						</div>

						<div className="flex flex-row">
							<label htmlFor="custAddress" className="hidden">
								Address:
							</label>
							<input id="custAddress" name="custAddress" type="hidden" value={selectedAddress} />
							<GooglePlacesAutocomplete
								apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLATFORM_APIKEY}
								selectProps={{
									placeholder: "Property Address*",
									className:
										"flex w-full rounded-[12px] text-blue text-xl border-[1px] border-blue_dark shadow-lg",
									onChange: (selectedOption) => {
										if (selectedOption) {
											setSelectedAddress(selectedOption.label)
										}
									},
									styles: {
										container: (provided) => ({
											...provided,
											width: "100%",
										}),
										control: (provided) => ({
											...provided,
											width: "100%",
											borderWidth: "0px",
											borderColor: "#00008B", // blue_dark
											borderRadius: "12px",
											fontSize: "1.25rem", // text-xl
											color: "blue",
										}),
										input: (provided) => ({
											...provided,
											width: "100%",
										}),
									},
								}}
							/>
						</div>

						<div className="flex-1 flex flex-col space-y-2 justify-start items-start">
							<div className="text-blue text-xl font-bold ">Services Requested?</div>
							<div className="flex flex-wrap gap-x-4 gap-y-4">
								{servicesConfig.OSW_Services.map((obj, index) =>
									obj.activeService && obj.name !== "Commercial" ? (
										<FormCheckboxComponent
											key={`custService${index}`}
											fieldName="custServices"
											fieldValue={obj.name}
										/>
									) : null
								)}
							</div>
						</div>

						{/* 
                -----------------------------------------------------------------
                Description
                ----------------------------------------------------------------- 
                */}
						<div className="flex flex-col">
							<label htmlFor="custDesc" className="hidden">
								Description:
							</label>
							<textarea
								id="custDesc"
								name="custDesc"
								placeholder="Describe what you would like us to do?"
								className="form-input resize-none"
								rows={6}
							/>
						</div>

						{/* 
                -----------------------------------------------------------------
                Commercial
                ----------------------------------------------------------------- 
                */}
						<div className="flex-1 flex flex-row space-x-2 justify-start items-start">
							<div className="items-center flex space-x-2">
								<Label htmlFor="Commercial" className="text-xl text-blue leading-none font-bold ">
									Is this for a commercial property?
								</Label>

								<div className="sr-only">
									<input
										type="checkbox"
										id="Residential"
										name="custContactType"
										checked={!isCommercial}
										value="Residential"
										onChange={handleCommercialToggle}
									/>
								</div>

								<input
									type="checkbox"
									id="Commercial"
									name="custContactType"
									className={`border-[2px] rounded-[3px] scale-125  bg-white font-bold border-blue-dark`}
									checked={isCommercial}
									value="Commercial"
									onChange={handleCommercialToggle}
								/>
							</div>
						</div>

						<div className="flex flex-col desktop:flex-row  justify-start gap-4">
							{/* 
                    ----------------------------------------------------------------
                    How did you find us?
                    ---------------------------------------------------------------- 
                    */}
							<label htmlFor="custReferral" className="hidden">
								Referral:
							</label>
							<select id="custReferral" name="custReferral" className="form-input desktop:w-2/3" required>
								<option value="">How did you find us?*</option>
								<option value="Angie">Angie&apos;s List</option>
								<option value="Business Card">Business Card</option>
								<option value="Facebook">Facebook</option>
								<option value="Google">Google</option>
								<option value="Instagram">Instagram</option>
								<option value="Nextdoor">Nextdoor</option>
								<option value="Flyer">Promotional Flyer</option>
								<option value="Referral">Referral</option>
								<option value="Truck">Saw Your Truck</option>
								<option value="Yard Sign">Yard Sign</option>
							</select>

							{/* 
                    ----------------------------------------------------------------
                    Promo Code
                    ---------------------------------------------------------------- 
                    */}
							<label htmlFor="custPromo" className="hidden">
								Promo:
							</label>
							<input
								id="custPromo"
								name="custPromo"
								placeholder="Promo Code"
								className="form-input w-1/2 desktop:w-1/3 "
							/>
						</div>

						<div className="flex justify-center desktop:justify-end">
							{recaptchaKey ? (
								<>
									<ReCAPTCHA
										ref={recaptchaRef}
										size="normal"
										sitekey={recaptchaKey}
										onChange={handleRecaptchaChange}
									/>
								</>
							) : (
								<p>ReCAPTCHA key not available: {recaptchaKey}</p>
							)}
						</div>
						<div className="flex justify-end">
							<SubmitButton />
						</div>
					</form>
				</PageSection>
			)}
		</>
	)
}

function SubmitButton() {
	const { pending } = useFormStatus()

	return (
		<button
			type="submit"
			className="bg-green-600 text-white `bg-orange  hover:scale-105 rounded-[12px]  border-[1px] border-blue_dark shadow-md w-full desktop:w-1/4 text-2xl font-bold p-2"
			disabled={pending}
		>
			{pending ? "Saving..." : "Submit"}
		</button>
	)
}
