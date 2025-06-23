import React from 'react';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { step1Schema } from '@/utils/validations/onboardingValidation';
import { ArrowRight } from 'lucide-react';
import { ParagraphText } from '@/components/ui/paragraphText';
import { HeaderText } from '@/components/ui/headerText';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type FormData = z.infer<typeof step1Schema>;
interface Step1Props {
  onNext: (_data: FormData) => void;
}

const StepOne: React.FC<Step1Props> = ({ onNext }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(step1Schema),
  });

  const onSubmit = (data: FormData) => {
    onNext(data);
  };

  return (
    <div className='space-y-10 h-full min-h-[500px]'>
      <HeaderText variant='h2' className='mb-2 text-left '>
        Let&apos;s get to know you
      </HeaderText>
      <ParagraphText variant='secondary' className='text-sm leading-5  '>
        Drop your first and last name below—just so we know what to call you.
      </ParagraphText>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-2 mt-12'>
        <div className='space-y-4'>
          <div className='group w-full border border-[var(--color-border-light)] rounded-2xl p-3 focus-within:border-[var(--color-text-link)] focus-within:shadow-[0_0_0_4px_#1F90FF40] transition-all'>
            <label
              htmlFor='firstName'
              className='block text-label text-sm font-medium  mb-1 text-[var(--color-input-label)] group-focus-within:text-[var(--color-text-link)]'
            >
              First name
            </label>
            <Input
              id='firstName'
              {...register('firstName')}
              type='text'
              placeholder='Enter your first name'
              variant='plain'
              className='text-[#333333]'
            />
          </div>
          {errors.firstName && (
            <p className='text-red-500 text-xs -mt-1'>
              {errors.firstName.message}
            </p>
          )}

          <div className='group w-full border border-[var(--color-border-light)] rounded-2xl p-3 focus-within:border-[var(--color-text-link)] focus-within:shadow-[0_0_0_4px_#1F90FF40] transition-all'>
            <label
              htmlFor='lastName'
              className='block text-label text-sm font-medium mb-1 text-[var(--color-input-label)] group-focus-within:text-[var(--color-text-link)]'
            >
              Last name
            </label>
            <Input
              id='lastName'
              {...register('lastName')}
              type='text'
              placeholder='Enter your last name'
              variant='plain'
              className='text-[#333333]'
            />
          </div>
          {errors.lastName && (
            <p className='text-red-500 text-xs -mt-1'>
              {errors.lastName.message}
            </p>
          )}
        </div>

        <div className='space-y-8 mt-14'>
          <ParagraphText variant='secondary' className='text-xs text-left'>
            By clicking “Continue”, you acknowledge that you have read and agree
            to Genie’s{' '}
            <span className='text-[var(--color-text-link)]'>Terms</span> and{' '}
            <span className='text-[var(--color-text-link)]'>
              Privacy Policy
            </span>
            .
          </ParagraphText>
          <Button type='submit' className='w-full h-12'>
            Continue <ArrowRight className=' h-4 w-4' />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default StepOne;
