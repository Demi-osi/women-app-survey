import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import StepOne from './survey-form-step-one';
import StepTwo from './survey-form-step-two';
import StepThree from './survey-form-step-three';
import StepFour from './survey-form-step-four';
import StepFive from './survey-form-step-five';
import StepSix from './survey-form-step-six';
import { FormData } from '../types/survey';

const initialFormData: FormData = {
  valuableFeatures: [],
  appInteraction: '',
  reminderTypes: [],
  primaryDevice: '',
  appUsageFrequency: '',
  appFrustrations: [],
  healthTracking: [],
  healthcareVisits: '',
  healthcareChallenges: [],
  wearableIntegration: false,
  reproductiveHealthRecords: '',
  privacyFeatures: '',
  dataStorageComfort: '',
  educationalContentPreference: [],
  beneficialContent: [],
  expertAdviceImportance: '',
  communitySupport: false,
  personalizeExperience: false,
  personalizedInsights: '',
  motivation: '',
  desiredFeature: '',
  additionalComments: ''
};

const CompleteSurveyForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });

    try {
      const response = await fetch('/api/submit-survey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Thank you for completing the survey! Your response has been recorded.'
        });
        setFormData(initialFormData);
        setCurrentStep(1);
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch {
      setSubmitStatus({
        success: false,
        message: 'There was an error submitting the form. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return <StepOne formData={formData} setFormData={setFormData} />;
      case 2:
        return <StepTwo formData={formData} setFormData={setFormData} />;
      case 3:
        return <StepThree formData={formData} setFormData={setFormData} />;
      case 4:
        return <StepFour formData={formData} setFormData={setFormData} />;
      case 5:
        return <StepFive formData={formData} setFormData={setFormData} />;
      case 6:
        return <StepSix formData={formData} setFormData={setFormData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 p-4 md:p-8">
      <Card className="max-w-3xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-purple-800">
            Women&apos;s Health Application Survey
          </CardTitle>
          <CardDescription>
            Help us create a better healthcare experience
          </CardDescription>
          <Progress 
            value={(currentStep / totalSteps) * 100} 
            className="mt-4"
          />
        </CardHeader>
        <CardContent>
          {submitStatus.message && (
            <Alert className={`mb-6 ${submitStatus.success ? 'bg-green-50' : 'bg-red-50'}`}>
              <AlertDescription>{submitStatus.message}</AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            {renderStep()}
            
            <div className="flex justify-between pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1 || isSubmitting}
              >
                Previous
              </Button>
              {currentStep === totalSteps ? (
                <Button 
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Survey'}
                </Button>
              ) : (
                <Button 
                  type="button"
                  onClick={handleNext}
                  className="bg-purple-600 hover:bg-purple-700"
                  disabled={isSubmitting}
                >
                  Next
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompleteSurveyForm;
