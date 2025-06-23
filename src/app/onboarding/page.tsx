'use client';

import React, { useState } from 'react';
import Logo from '@/assets/logo.svg';
import Footer from '@/components/layout/Footer';
import StepOne from '@/components/features/onboarding/Stepone';
import StepTwo from '@/components/features/onboarding/StepTwo';
import Success from '@/components/features/onboarding/success';
import { ParagraphText } from '@/components/ui/paragraphText';
import Image from 'next/image';
// import { HeaderText } from '@/components/ui/headerText';
import type { z } from 'zod';
import type {
  step1Schema,
  step2Schema,
} from '@/utils/validations/onboardingValidation';

type OnboardingState = 'step1' | 'step2' | 'success';

const steps = ['step1', 'step2', 'success'];
const stepNumber = {
  step1: '01',
  step2: '02',
  success: '03',
};

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState<OnboardingState>('step1');
  const [error, setError] = useState<string | null>(null);

  // You can add logic here to fetch onboarding status, etc.

  const handleStep1Complete = async (data: z.infer<typeof step1Schema>) => {
    // Save user name, etc.
    setCurrentStep('step2');
    console.warn(data);
    setError(null);
  };

  const handleStep2Complete = async (data: z.infer<typeof step2Schema>) => {
    // Save org info, etc.
    setCurrentStep('success');
    setError(null);
    console.warn(data);
  };

  const handlePrevious = () => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1] as OnboardingState);
    }
  };

  const handleComplete = () => {
    // Redirect to dashboard or home
    window.location.href = '/';
  };

  return (
    <div className='flex min-h-screen  flex-col p-10 bg-[var(--color-bg-side)] font-geist'>
      <div className='mb-8 flex justify-between'>
        <Image src={Logo} alt='Logo' />
        <div className='flex gap-2 z-10'>
          {steps.map((step) => (
            <span
              key={step}
              className='inline-block rounded-full'
              style={{
                width: 8,
                height: 8,
                backgroundColor: currentStep === step ? '#999999' : '#DBDBDB',
              }}
            />
          ))}
        </div>
      </div>
      <div className='flex-grow flex items-center justify-center'>
        {currentStep === 'success' && (
          <div className='w-[70%] flex items-center bg-[#F0F0F0] justify-center overflow-hidden border border-[var(--color-border-light)] rounded-4xl  relative'>
            <Success onComplete={handleComplete} onBack={handlePrevious} />
          </div>
        )}
        {currentStep !== 'success' && (
          <div className='w-[70%] flex items-center bg-[#F0F0F0] justify-center overflow-hidden border border-[var(--color-border-light)] rounded-4xl  relative'>
            <div className='max-w-1/2 p-10 bg-white'>
              <div className='mb-6'>
                <ParagraphText
                  variant='secondary'
                  className='text-sm font-medium'
                >
                  {stepNumber[currentStep]} / 03
                </ParagraphText>

                {error && <p className='text-red-500 mt-2'>{error}</p>}
              </div>
              {currentStep === 'step1' && (
                <StepOne onNext={handleStep1Complete} />
              )}
              {currentStep === 'step2' && (
                <StepTwo
                  onNext={handleStep2Complete}
                  onPrevious={handlePrevious}
                />
              )}
            </div>
            <div className='min-w-1/2 '></div>
          </div>
        )}
      </div>
      <div className='mt-auto'>
        <Footer onboarding={true} />
      </div>
    </div>
  );
}
