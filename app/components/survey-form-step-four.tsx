import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const StepFour = ({ formData, setFormData }) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">10. Would you like to integrate data from wearable devices or other health apps?</h3>
        <RadioGroup
          value={formData.wearableIntegration.toString()}
          onValueChange={(value) => setFormData(prev => ({...prev, wearableIntegration: value === 'true'}))}
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
        <h3 className="text-lg font-semibold">11. Would you use an app that consolidates your reproductive health records?</h3>
        <RadioGroup
          value={formData.reproductiveHealthRecords}
          onValueChange={(value) => setFormData(prev => ({...prev, reproductiveHealthRecords: value}))}
        >
          {['Yes', 'No', 'Maybe, depending on how it works'].map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <RadioGroupItem value={option} id={`records-${option}`} />
              <Label htmlFor={`records-${option}`}>{option}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">12. What privacy features would make you feel more secure using the app?</h3>
        <Textarea
          value={formData.privacyFeatures}
          onChange={(e) => setFormData(prev => ({...prev, privacyFeatures: e.target.value}))}
          placeholder="Please describe your privacy concerns and desired features..."
          className="h-32"
        />
      </div>
    </div>
  );
};

export default StepFour;
