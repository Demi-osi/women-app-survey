import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const StepThree = ({ formData, setFormData }) => {
  const healthTracking = [
    "Health Data",
    "Weight",
    "Pregnancy",
    "Exercise logs",
    "Mental Health",
    "Menstrual cycle",
    "Nutrition and fitness",
    "General wellness and preventive care"
  ];

  const healthcareChallenges = [
    "Difficulty finding specialized care",
    "Lack of convenient appointment times",
    "Lack of personalized care",
    "Financial barriers",
    "Lack of trust or comfort with healthcare providers"
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">7. What specific health concerns or areas of wellness are you most interested in tracking?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {healthTracking.map((item) => (
            <div key={item} className="flex items-center space-x-2">
              <Checkbox
                id={`tracking-${item}`}
                checked={formData.healthTracking.includes(item)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setFormData(prev => ({
                      ...prev,
                      healthTracking: [...prev.healthTracking, item]
                    }));
                  } else {
                    setFormData(prev => ({
                      ...prev,
                      healthTracking: prev.healthTracking.filter(t => t !== item)
                    }));
                  }
                }}
              />
              <Label htmlFor={`tracking-${item}`}>{item}</Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">8. How often do you visit a healthcare provider?</h3>
        <RadioGroup
          value={formData.healthcareVisits}
          onValueChange={(value) => setFormData(prev => ({...prev, healthcareVisits: value}))}
        >
          {['Monthly', 'Rarely', 'Annually for routine check-ups', 'Only when needed', 'Never'].map((frequency) => (
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
          {healthcareChallenges.map((challenge) => (
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
    </div>
  );
};

export default StepThree;
