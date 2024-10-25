import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { FormData } from '../types/survey';

interface StepThreeProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const StepThree: React.FC<StepThreeProps> = ({ formData, setFormData }) => {
  const healthTracking = [
    "Health Data",
    "Weight",
    "Sleep",
    "Nutrition",
    "Exercise",
    "Mood",
    "Stress levels",
    "Menstrual cycle",
    "Fertility",
    "Pregnancy",
    "Menopause symptoms",
    "Chronic condition management"
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">7. What health aspects would you like to track?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {healthTracking.map((aspect) => (
            <div key={aspect} className="flex items-center space-x-2">
              <Checkbox
                id={`tracking-${aspect}`}
                checked={formData.healthTracking.includes(aspect)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setFormData(prev => ({
                      ...prev,
                      healthTracking: [...prev.healthTracking, aspect]
                    }));
                  } else {
                    setFormData(prev => ({
                      ...prev,
                      healthTracking: prev.healthTracking.filter(a => a !== aspect)
                    }));
                  }
                }}
              />
              <Label htmlFor={`tracking-${aspect}`}>{aspect}</Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">8. How important are privacy features to you?</h3>
        <RadioGroup
          value={formData.privacyFeatures}
          onValueChange={(value) => setFormData(prev => ({ ...prev, privacyFeatures: value }))}
        >
          {['Extremely important', 'Very important', 'Moderately important', 'Slightly important', 'Not important'].map((level) => (
            <div key={level} className="flex items-center space-x-2">
              <RadioGroupItem value={level} id={`privacy-${level}`} />
              <Label htmlFor={`privacy-${level}`}>{level}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">9. How comfortable are you with storing your health data in the app?</h3>
        <RadioGroup
          value={formData.dataStorageComfort}
          onValueChange={(value) => setFormData(prev => ({ ...prev, dataStorageComfort: value }))}
        >
          {['Very comfortable', 'Somewhat comfortable', 'Neutral', 'Somewhat uncomfortable', 'Very uncomfortable'].map((level) => (
            <div key={level} className="flex items-center space-x-2">
              <RadioGroupItem value={level} id={`comfort-${level}`} />
              <Label htmlFor={`comfort-${level}`}>{level}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default StepThree;
