import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
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
        <h3 className="text-lg font-semibold">11. Would you use an app that consolidates your reproductive health records and allows you to share them with healthcare providers?</h3>
        <RadioGroup
          value={formData.reproductiveHealthRecords}
          onValueChange={(value) => setFormData(prev => ({ ...prev, reproductiveHealthRecords: value }))}
        >
          {['Yes', 'No', 'Maybe' ].map((level) => (
            <div key={level} className="flex items-center space-x-2">
              <RadioGroupItem value={level} id={`reproductiveHealth-${level}`} />
              <Label htmlFor={`reproductiveHealth-${level}`}>{level}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">12. What privacy features would make you feel more secure using the app?</h3>
        <Textarea
          value={formData.privacyFeatures}
          onChange={(e) => setFormData(prev => ({ ...prev, privacyFeatures: e.target.value }))}
          placeholder="Please describe what privacy features would make you feel more secure using the app..."
          className="h-32"
        />
      </div> 

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">13. Would you feel comfortable using an app that stores your health data and records, given that it complies with privacy regulations (e.g., HIPAA, POPI Act)?</h3>
        <RadioGroup
          value={formData.dataStorageComfort}
          onValueChange={(value) => setFormData(prev => ({ ...prev, dataStorageComfort: value }))}
        >
          {['Yes', 'No' ].map((level) => (
            <div key={level} className="flex items-center space-x-2">
              <RadioGroupItem value={level} id={`privacy-${level}`} />
              <Label htmlFor={`privacy-${level}`}>{level}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default StepFour;
