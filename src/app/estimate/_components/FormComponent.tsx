"use client"
import { servicesConfig } from "@/config"
import { useEffect, useRef, useState } from "react"
import { useFormState, useFormStatus } from "react-dom"

import { FormAction } from "../_actions/FormAction"

import ReCAPTCHA from "react-google-recaptcha"
import GooglePlacesAutocomplete from "react-google-places-autocomplete"
import { FormCheckboxComponent } from "./FormCheckboxComponent"

import { ThankYouComponent } from "./ThankYouComponent"
import { PageSection } from "@/components/PageSection"


export function FormComponent() {
    const [isDebugMode, setIsDebugMode] = useState(false);
    
    interface ActionResult {
        success: boolean;
        message?: string;
        error?: string[];
      }
    const [actionResult, setActionResult] = useState<ActionResult>({} as ActionResult);
    console.log(actionResult)

    //const [gMapsApiKey, setgMapsApiKey] = useState('');
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [recaptchaKey, setRecaptchaKey] = useState('');
    const [recaptchToken, setRecaptchToken] = useState('');
    
    const [selectedAddress, setSelectedAddress] = useState('');

   

    useEffect(() => {
        const dMode = process.env.NEXT_PUBLIC_DEBUG_MODE;
        //console.log("dMode:", dMode);
        setIsDebugMode(dMode === 'true');
        

        const key = process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_SITEKEY;
        setRecaptchaKey(key ?? '');

        //const gKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLATFORM_APIKEY;
       // console.log('Server-side gMapsAPIKey:', gKey); // Log the key on the server-side
        // setgMapsApiKey(gKey ?? '');
    }, []);

    const handleRecaptchaChange = (token: string | null) => {
        // Handle recaptcha change
        //console.log('Recaptcha token:', token);
        setRecaptchToken(token ?? '');
    };

    const handleSubmit = (e: React.FormEvent) => {
        console.log('handleSubmit');
        if(!recaptchToken) {
           e.preventDefault();
        }    
    };

    const handleScrollToTop = () => {
        const scrollDuration = 500; // Adjust the duration as needed
        const scrollStart = window.scrollY;
        const scrollEnd = 0;
        const startTime = Date.now();
    
        const animateScroll = () => {
          const elapsedTime = Date.now() - startTime;
          const progress = Math.min(elapsedTime / scrollDuration, 1);
          const scrollPosition = scrollStart + (scrollEnd - scrollStart) * progress;
          window.scrollTo(0, scrollPosition);
    
          if (progress < 1) {
            requestAnimationFrame(animateScroll);
          }
        };
    
        animateScroll();
    };

    async function handleAction(formData: FormData){
        console.log('handleAction');
        const result = await FormAction(formData)
        console.log(actionResult)
        setActionResult(result as ActionResult)
        handleScrollToTop()
    };


    return (
    <>
        {actionResult.success ? (
            <>
                <PageSection title="Thank you!" className="bg-white -mt-20" >
                    <ThankYouComponent/>
                </PageSection>
                
            </>
        ) : ( 
            <PageSection title="Estimate Request" className="bg-white -mt-20" >
                <form className="container flex flex-col justify-center space-y-4 pb-10 pt-10 bg-orange rounded-[16px] border-[3px] border-blue" onSubmit={handleSubmit} action={handleAction}>

                <div className="flex flex-col desktop:flex-row gap-4">
                    <input id="custFirstName" name="custFirstName" placeholder="First Name*" className="form-input flex-1" required/>
                    <input id="custLastName" name="custLastName" placeholder="Last Name*" className="form-input flex-1" required/>
                </div>
                <div className="flex flex-col desktop:flex-row sm:f gap-4">
                    <input id="custEmail" name="custEmail" placeholder="Email*" type="email" className="form-input flex-1" required/>
                    

                    <input id="custPhone" name="custPhone" placeholder="Phone*" type="tel"  className="form-input lg:w-1/5 " required/>        
                </div>

                <div className="flex flex-row">
                    <input id="custAddress" name="custAddress" type="hidden" value={selectedAddress}/> 
                    <GooglePlacesAutocomplete
                        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLATFORM_APIKEY} 
                        
                        selectProps={{
                            placeholder: 'Property Address*',
                            className: "flex w-full rounded-[12px] text-blue text-xl border-[3px] border-blue_dark ",
                            onChange: (selectedOption) => {
                                if (selectedOption) {
                                setSelectedAddress(selectedOption.label);
                                }
                            },
                            styles: {
                                container: (provided) => ({
                                    ...provided,
                                    width: '100%',
                                }),
                                control: (provided) => ({
                                    ...provided,
                                    width: '100%',
                                    borderWidth: '0px',
                                    borderColor: '#00008B', // blue_dark
                                    borderRadius: '12px',
                                    fontSize: '1.25rem', // text-xl
                                    color: 'blue',
                                }),
                                input: (provided) => ({
                                    ...provided,
                                    width: '100%',
                                }),
                            }
                            
                        }}
                    />    
                </div>
                


                <div className="flex-1 flex flex-col space-y-2 justify-start items-start">
                <div className="text-blue text-xl font-bold ">
                    Services Requested?
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-4" >
                    {
                        servicesConfig.OSW_Services.map((obj, index) => (
                            
                            obj.activeService ? (

                            <FormCheckboxComponent key={`custService${index}`} fieldName="custServices" fieldValue={obj.name}/>
                            
                            ) : null
                            
                        ))              
                    }
                </div>
                
                </div>           

                <div className="flex flex-col">
                    <textarea id="custDesc" name="custDesc" placeholder="Describe what you would like us to do?" className="form-input resize-none" rows={6}/>
                </div>
                <div className="flex flex-col desktop:flex-row  justify-start gap-4">
                    <select id="custReferral" name="custReferral" className="form-input desktop:w-2/3" required >
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
                    
                    <input id="custPromo" name="custPromo" placeholder="Promo Code" className="form-input w-1/2 desktop:w-1/3 " /> 
                </div>


                <div className="flex justify-center desktop:justify-end">
                    {recaptchaKey ? (<>
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
    
)}

function SubmitButton(){
    const {pending } = useFormStatus()

    return (
        <button  type="submit" className="bg-blue text-orange `bg-orange  hover:scale-105 rounded-[12px]  border-2 border-white shadow-md w-full desktop:w-1/4 text-2xl font-bold p-2" disabled={pending}>
            {pending ? "Saving..." : "Submit"}
        </button>
    )
}