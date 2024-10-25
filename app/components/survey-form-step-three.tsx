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
    "Mental Health",
    "Weight",
    "Sleep",
    "Nutrition",
    "Exercise",
    "Mood",
    "Menstrual cycle",
    "General wellness and preventive care",
    "Pregnancy",
    "Menopause symptoms",
    "Chronic condition management"
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">7. What specific health concerns or areas of wellness are you most interested in tracking?</h3>
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
        <h3 className="text-lg font-semibold">8. How often do you visit healthcare providers?</h3>
        <RadioGroup
          value={formData.healthcareVisits}
          onValueChange={(value) => setFormData(prev => ({ ...prev, healthcareVisits: value }))}
        >
          {['Weekly', 'Monthly', 'Quarterly', 'Annually', 'Only when necessary'].map((frequency) => (
            <div key={frequency} className="flex items-center space-x-2">
              <RadioGroupItem value={frequency} id={`visits-${frequency}`} />
              <Label htmlFor={`visits-${frequency}`}>{frequency}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">9. What are the biggest challenges you face when accessing healthcare?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Lack of convenient appointment times",
            "Remembering medication",
            "Understanding medical information",
            "Difficulty finding specialized care",
            "Communicating with healthcare providers",
            "Managing multiple health conditions",
            "Lack of personalized care",
            "Financial barriers"
          ].map((challenge) => (
            <div key={challenge} className="flex items-center space-x-2">
              <Checkbox
                id={`challenge-${challenge}`}
                checked={formData.healthcareChallenges.includes(challenge)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setFormData(prev => ({
                      ...prev,
                      healthcareChallenges: [...prev.healthcareChallenges, challenge]
                    }));
                  } else {
                    setFormData(prev => ({
                      ...prev,
                      healthcareChallenges: prev.healthcareChallenges.filter(c => c !== challenge)
                    }));
                  }
                }}
              />
              <Label htmlFor={`challenge-${challenge}`}>{challenge}</Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">10. Would you like to integrate data from wearable devices or other health apps?</h3>
        <RadioGroup
          value={formData.wearableIntegration.toString()}
          onValueChange={(value) => setFormData(prev => ({ ...prev, wearableIntegration: value === 'true' }))}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="true" id="wearable-yes" />
            <Label htmlFor="wearable-yes">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="false" id="wearable-no" />
            <Label htmlFor="wearable-no">No</Label>
          </div>
        </RadioGroup>
      </div>

    </div>
  );
};

export default StepThree;
