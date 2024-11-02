"use client"

import { ButtonStandard } from "@/components/ButtonStandard"
import { CheckboxInput } from "./FormFieldCheckbox"
import { submitRequest } from "../_actions/requests"
import { Input } from "@/components/ui/input"
import { servicesConfig } from "@/config"
import { ThankYou } from "./FormThankYou"


  
export function RequestForm() {
    return (
    <>
        <form className="container flex flex-col justify-center space-y-4 pb-20" action={submitRequest}>

        <div className="flex flex-col desktop:flex-row gap-4">
            <input id="custFirstName" name="custFirstName" placeholder="First Name" className="form-input flex-1" required/>
            <input id="custLastName" name="custLastName" placeholder="Last Name" className="form-input flex-1" required/>
        </div>
        
        <div className="flex flex-col desktop:flex-row sm:f gap-4">
            <input id="custEmail" name="custEmail" placeholder="Email" type="email" className="form-input flex-1" required/>
            <input id="custPhone" name="custPhone" placeholder="Phone" className="form-input lg:w-1/5" required/>        
        </div>

        <div className="flex flex-row">
            <input id="custAddress" name="custAddress" placeholder="Property Address" className="form-input flex-1" required/>        
        </div>
        


        <div className="flex-1 flex flex-col space-y-2 justify-start items-start">
        <div className="text-blue text-xl font-bold ">
            Services Requested?
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-4" >
            {
                servicesConfig.OSW_Services.map((obj, index) => (
                    
                    obj.activeService ? (

                    <CheckboxInput key={`custService${index}`} fieldName="custServices" fieldValue={obj.name}/>
                    
                    ) : null
                    
                ))              
            }
        </div>
        
        </div>           

        <div className="flex flex-col">
            <textarea id="custDesc" name="custDesc" placeholder="Describe what you would like us to do?" className="form-input resize-none" rows={6}/>
        </div>
        <div className="flex flex-col desktop:flex-row  justify-start gap-4">
            <select id="custReferral" name="custReferral" className="form-input desktop:w-2/3" >
                <option value="">How did you find us? </option>
                <option value="Google">Google</option>
                <option value="Nextdoor">Nextdoor</option>
                <option value="Promotional">Promotional Flyer</option>
                <option value="Facebook">Facebook</option>
                <option value="Instagram">Instagram</option>
                <option value="Yard Sign">Yard Sign</option>
                <option value="Referral">Referral</option>
                <option value="Business Card">Business Card</option>
            </select>
            <input id="custPromo" name="custPromo" placeholder="Promo Code" className="form-input w-1/2 desktop:w-1/3 " /> 
        </div>


        <div className="flex justify-end">
        <button  type="submit" className="bg-blue text-orange `bg-orange  hover:scale-105 rounded-[12px]  border-2 border-white shadow-md w-full desktop:w-1/4 text-2xl font-bold p-2">
            Submit
        </button>
        </div>
    </form>

    <ThankYou className="hidden"/>

    </>
)}

