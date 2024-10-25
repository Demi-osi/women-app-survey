import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { FormData } from '../types/survey';

interface StepFourProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const StepFour: React.FC<StepFourProps> = ({ formData, setFormData }) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">10. How often do you visit healthcare providers?</h3>
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
        <h3 className="text-lg font-semibold">11. What challenges do you face in managing your healthcare?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Scheduling appointments",
            "Remembering medication",
            "Understanding medical information",
            "Tracking symptoms",
            "Communicating with healthcare providers",
            "Managing multiple health conditions",
            "Accessing health records",
            "Affording healthcare costs"
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
        <h3 className="text-lg font-semibold">12. Would you be interested in integrating wearable device data?</h3>
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

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">13. How would you like to manage your reproductive health records?</h3>
        <Textarea
          value={formData.reproductiveHealthRecords}
          onChange={(e) => setFormData(prev => ({ ...prev, reproductiveHealthRecords: e.target.value }))}
          placeholder="Please describe how you'd like to manage your reproductive health records..."
          className="h-32"
        />
      </div>
    </div>
  );
};

export default StepFour;
