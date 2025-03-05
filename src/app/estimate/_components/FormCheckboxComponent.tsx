"use client"

import React from "react"
import { Label } from "@/components/ui/label"

interface InputFieldProps {
	fieldName: string
	fieldValue: string
	className?: string
}

export function FormCheckboxComponent({ fieldName, fieldValue, className = "" }: InputFieldProps) {
	return (
		<>
			<div className="items-center flex space-x-1">
				<input
					type="checkbox"
					name={fieldName}
					className={`border-[2px] rounded-[3px] scale-125  bg-white font-bold border-blue-dark  ${className}`}
					value={fieldValue}
				/>
				<Label
					htmlFor={fieldName}
					className="text-xl text-blue leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					{fieldValue}
				</Label>
			</div>
		</>
	)
}
