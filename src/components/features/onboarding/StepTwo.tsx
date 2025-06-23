import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { step2Schema } from '@/utils/validations/onboardingValidation';
import { HeaderText } from '@/components/ui/headerText';
import { ParagraphText } from '@/components/ui/paragraphText';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

type FormData = z.infer<typeof step2Schema>;
interface Step2Props {
  onNext: (_data: FormData) => void;
  onPrevious: () => void;
}

const StepTwo: React.FC<Step2Props> = ({ onNext, onPrevious }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(step2Schema),
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setValue('companyLogo', file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: FormData) => {
    onNext(data);
  };

  return (
    <div className='space-y-6 min-h-[500px] '>
      <HeaderText variant='h2' className=' text-left'>
        Let&apos;s make it official
      </HeaderText>
      <ParagraphText
        variant='secondary'
        className='text-sm leading-5 -mt-2 text-left'
      >
        Upload your logo and fill in your company details—we will set you up
        right away.
      </ParagraphText>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6 mt-12'>
        <div className='flex items-stretch space-x-4 mb-6'>
          <div className='h-16 w-16 rounded-xl bg-[#F0F0F0] flex items-center justify-center overflow-hidden'>
            {previewUrl ? (
              <Image
                src={previewUrl}
                width={64}
                height={64}
                alt='Company logo'
                className='h-full w-full object-cover'
              />
            ) : (
              <div className='text-[var(--color-input-label)] text-xs'></div>
            )}
          </div>
          <div className='space-y-6'>
            <ParagraphText variant='secondary' className='text-sm leading-5'>
              Company Logo
            </ParagraphText>
            <label className='border border-[var(--color-border-light)] font-medium rounded-4xl px-6 py-1.5 text-[#333333] text-sm leading-5 bg-white cursor-pointer hover:bg-gray-50'>
              Upload
              <input
                type='file'
                className='hidden'
                accept='image/png,image/jpeg'
                {...register('companyLogo', {
                  onChange: handleImageUpload,
                })}
              />
            </label>
          </div>
        </div>
        {errors.companyLogo && (
          <p className='text-red-500 text-xs'>{errors.companyLogo.message}</p>
        )}

        <div className='space-y-4'>
          <div className='group w-full border border-[#8080801F] rounded-2xl p-3 focus-within:border-[var(--color-text-link)] focus-within:shadow-[0_0_0_4px_#1F90FF40] transition-all'>
            <label
              htmlFor='companyName'
              className='block text-sm font-medium  mb-1 text-[var(--color-input-label)] group-focus-within:text-[var(--color-text-link)]'
            >
              Company name
            </label>
            <Input
              id='companyName'
              type='text'
              placeholder='Example Company Inc'
              variant='plain'
              className='text-[#333333]'
              {...register('companyName')}
            />
          </div>
          {errors.companyName && (
            <p className='text-red-500 text-xs -mt-1'>
              {errors.companyName.message}
            </p>
          )}

          <div className='group w-full border border-[#8080801F] rounded-2xl p-3 focus-within:border-[var(--color-text-link)] focus-within:shadow-[0_0_0_4px_#1F90FF40] transition-all'>
            <label
              htmlFor='workspaceUrl'
              className='block text-sm font-medium  mb-1 text-[var(--color-input-label)] group-focus-within:text-[var(--color-text-link)]'
            >
              Workspace URL
            </label>
            <div className='flex items-center'>
              <span className='text-[var(--color-text-secondary)] text-sm '>
                app.genie/ai/
              </span>
              <Input
                id='workspaceUrl'
                type='text'
                placeholder='exampleco'
                variant='plain'
                className='flex-1 text-[#333333]'
                {...register('workspaceUrl')}
              />
            </div>
          </div>
          {errors.workspaceUrl && (
            <p className='text-red-500 text-xs -mt-1'>
              {errors.workspaceUrl.message}
            </p>
          )}
        </div>

        <div className='flex space-x-4 mt-8'>
          <Button
            type='button'
            variant='outline'
            onClick={onPrevious}
            className='w-full h-12  flex-1'
          >
            Back
          </Button>
          <Button type='submit' className='w-full h-12  flex-1'>
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
