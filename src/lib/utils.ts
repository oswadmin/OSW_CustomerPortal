import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { customAlphabet } from 'nanoid'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}


export function generateVerificationToken(): string {
	const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	const nanoid = customAlphabet(alphabet, 32); // Generate a 32 character token
	return nanoid();
}


