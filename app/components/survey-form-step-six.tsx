import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { FormData } from '../types/survey';

interface StepSixProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const StepSix: React.FC<StepSixProps> = ({ formData, setFormData }) => {
  return (
    <div className="space-y-8">
      {/* Customization Section */}
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">18. Would you like to personalize your experience based on your health goals?</h3>
          <RadioGroup
            value={formData.personalizeExperience.toString()}
            onValueChange={(value) => setFormData(prev => ({
              ...prev,
              personalizeExperience: value === 'true'
            }))}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="true" id="personalize-yes" />
              <Label htmlFor="personalize-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="false" id="personalize-no" />
              <Label htmlFor="personalize-no">No</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">19. How important is it to you to receive personalized health insights and recommendations?</h3>
          <RadioGroup
            value={formData.personalizedInsights}
            onValueChange={(value) => setFormData(prev => ({
              ...prev,
              personalizedInsights: value
            }))}
          >
            {[
              'Extremely important',
              'Very important',
              'Moderately important',
              'Slightly important',
              'Not important'
            ].map((level) => (
              <div key={level} className="flex items-center space-x-2">
                <RadioGroupItem value={level} id={`insights-${level}`} />
                <Label htmlFor={`insights-${level}`}>{level}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>

      {/* Final Thoughts Section */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-purple-800">Final Thoughts</h2>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">20. What motivates you to use a health app?</h3>
          <Textarea
            value={formData.motivation}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              motivation: e.target.value
            }))}
            placeholder="Please share what motivates you to use health apps..."
            className="h-32"
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">21. What is one feature or service you wish a women's health app would offer that you haven't seen elsewhere?</h3>
          <Textarea
            value={formData.desiredFeature}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              desiredFeature: e.target.value
            }))}
            placeholder="Please describe your desired feature or service..."
            className="h-32"
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">22. Any other comments or suggestions for the app?</h3>
          <Textarea
            value={formData.additionalComments}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              additionalComments: e.target.value
            }))}
            placeholder="Please share any additional thoughts, suggestions, or concerns..."
            className="h-32"
          />
        </div>
      </div>

      {/* Completion Message */}
      <div className="rounded-lg bg-purple-50 p-6 text-center">
        <p className="text-purple-800">
          Thank you for taking the time to complete this survey. Your feedback is invaluable in helping us create a better healthcare experience for women.
        </p>
        <p className="mb-2">
          Don&apos;t worry, we won&apos;t share your information with anyone else.
        </p>
        <p>
          If you&apos;re comfortable, we&apos;d love to hear more about your experience.
        </p>
      </div>
    </div>
  );
};

export default StepSix;
