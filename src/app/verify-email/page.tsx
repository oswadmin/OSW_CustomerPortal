

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function VerifyEmailPage() {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const email = searchParams.get('email');
    const [verificationStatus, setVerificationStatus] = useState<'pending' | 'success' | 'error' | null>('pending');
    const router = useRouter();

    useEffect(() => {
        if (token && email) {
            const verifyEmail = async () => {
                // 1. Verify Email in Contacts table and get contact_id
                console.log(token)
                console.log(email)


                const { data: contactData, error: contactError } = await supabase
                    .from('Contacts')
                    .update({ is_verified: true, verification_token: null })
                    .eq('Email', email)
                    .eq('verification_token', token)
                    .is('is_verified', false)
                    .select('contact_id'); // Select contact_id to use for updating Deals

                console.log(contactData)

                if (contactError) {
                    console.error("Email verification failed (Contacts table update):", contactError);
                    setVerificationStatus('error');
                    return; // Exit if contact verification fails
                }

                if (contactData && contactData.length > 0) {
                    const contactId = contactData[0].contact_id;

                    // 2. Update Deals table for the verified contact
                    const { error: dealsError } = await supabase
                        .from('Deals')
                        .update({ deal_status: 'New Request' }) // Or your desired status after verification
                        .eq('contact_id', contactId)
                        .eq('deal_status', 'Pending Verification'); // Only update deals that are in "Pending Verification" status

                    if (dealsError) {
                        console.error("Error updating Deals table:", dealsError);
                        setVerificationStatus('error'); // You might want to have a more specific error status here if needed
                        return; // Exit if deals update fails, though contact is verified. Decide on error handling.
                    }


                    setVerificationStatus('success');
                } else {
                    setVerificationStatus('error'); // Token might be invalid or already used, or no contact updated.
                }
            };

            verifyEmail();
        } else {
            setVerificationStatus('error'); // Missing token or email
        }
    }, [token, email, router]);

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                {verificationStatus === 'pending' && <p>Verifying your email...</p>}
                {verificationStatus === 'success' && (
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Email Verified!</h2>
                        <p>Thank you for verifying your email address.</p>
                        <p>Your estimate request is now being processed.</p>
                        <button onClick={() => router.push('/')} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Go to Homepage
                        </button>
                    </div>
                )}
                {verificationStatus === 'error' && (
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 text-red-500">Verification Failed</h2>
                        <p className="text-red-700">Sorry, we could not verify your email address.</p>
                        <p className="text-gray-600">The verification link may be invalid or already used.</p>
                        <button onClick={() => router.push('/')} className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                            Go to Homepage
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}




