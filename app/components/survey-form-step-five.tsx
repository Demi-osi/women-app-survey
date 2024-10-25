import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { FormData } from '../types/survey';

interface StepFiveProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const StepFive: React.FC<StepFiveProps> = ({ formData, setFormData }) => {
  const educationalContent = [
    "Articles",
    "Videos",
    "Interactive Webinars",
    "Podcasts",
    "Infographics and visual guides"
  ];

  const beneficialContent = [
    "Articles on reproductive health",
    "Videos or webinars on mental health",
    "Nutrition and fitness guides tailored to different life stages",
    "Information on managing chronic conditions",
    "General wellness tips and preventive care",
    "Podcasts or interviews with women's health experts"
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">14. How do you prefer to consume educational content?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {educationalContent.map((content) => (
            <div key={content} className="flex items-center space-x-2">
              <Checkbox
                id={`education-${content}`}
                checked={formData.educationalContentPreference.includes(content)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setFormData((prev: FormData) => ({
                      ...prev,
                      educationalContentPreference: [...prev.educationalContentPreference, content]
                    }));
                  } else {
                    setFormData((prev: FormData) => ({
                      ...prev,
                      educationalContentPreference: prev.educationalContentPreference.filter((c) => c !== content)
                    }));
                  }
                }}
              />
              <Label htmlFor={`education-${content}`}>{content}</Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">15. What types of educational content would you find beneficial?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {beneficialContent.map((content) => (
            <div key={content} className="flex items-center space-x-2">
              <Checkbox
                id={`beneficial-${content}`}
                checked={formData.beneficialContent.includes(content)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setFormData((prev: FormData) => ({
                      ...prev,
                      beneficialContent: [...prev.beneficialContent, content]
                    }));
                  } else {
                    setFormData((prev: FormData) => ({
                      ...prev,
                      beneficialContent: prev.beneficialContent.filter((c) => c !== content)
                    }));
                  }
                }}
              />
              <Label htmlFor={`beneficial-${content}`}>{content}</Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">16. How important is access to expert advice within the app?</h3>
        <RadioGroup
          value={formData.expertAdviceImportance}
          onValueChange={(value) => setFormData((prev: FormData) => ({
            ...prev,
            expertAdviceImportance: value
          }))}
        >
          {['Extremely important', 'Very important', 'Moderately important', 'Slightly important', 'Not important'].map((level) => (
            <div key={level} className="flex items-center space-x-2">
              <RadioGroupItem value={level} id={`importance-${level}`} />
              <Label htmlFor={`importance-${level}`}>{level}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">17. Would you like to see community support features?</h3>
        <RadioGroup
          value={formData.communitySupport.toString()}
          onValueChange={(value) => setFormData((prev: FormData) => ({...prev, communitySupport: value === 'true'}))}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="true" id="community-yes" />
            <Label htmlFor="community-yes">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="false" id="community-no" />
            <Label htmlFor="community-no">No</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default StepFive;
