"use client"

import React, { Children, ReactNode } from 'react';
import { Label } from '@/components/ui/label';
import { cn } from "@/lib/utils"

interface InputFieldProps {
  fieldName: string;
  fieldValue: string
  placeHolder?: string;
  children?: ReactNode; 
  className?: string;
}


export function CheckboxInput({ 
  fieldName, 
  fieldValue,
  placeHolder, 
  children,
  className = '' 
}: InputFieldProps) {
  return (
    <>
    <div className="items-center flex space-x-1">
      
      <input type="checkbox" name={fieldName} className={`border-[2px] rounded-[3px] scale-125  bg-white font-bold border-blue-dark  ${className}` } value={fieldValue}/>
      <Label 
        htmlFor={fieldValue}
        className="text-xl text-blue leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {fieldValue}  
      </Label>
    </div>
        
    </>
  );
};


