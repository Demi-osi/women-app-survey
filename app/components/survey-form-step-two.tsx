import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const StepTwo = ({ formData, setFormData }) => {
  const appFrustrations = [
    "Poor user interface",
    "Lack of relevant information",
    "Limited functionality",
    "Privacy concerns",
    "Inconsistent tracking tools",
    "Expensive subscription fees"
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">4. What device do you primarily use for healthcare apps?</h3>
        <RadioGroup
          value={formData.primaryDevice}
          onValueChange={(value) => setFormData(prev => ({...prev, primaryDevice: value}))}
        >
          {['Smartphone', 'Tablet', 'Laptop/Desktop', 'WebApp'].map((device) => (
            <div key={device} className="flex items-center space-x-2">
              <RadioGroupItem value={device} id={`device-${device}`} />
              <Label htmlFor={`device-${device}`}>{device}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">5. How often do you use mobile health apps?</h3>
        <RadioGroup
          value={formData.appUsageFrequency}
          onValueChange={(value) => setFormData(prev => ({...prev, appUsageFrequency: value}))}
        >
          {['Daily', 'Weekly', 'Monthly', 'Rarely', 'Never'].map((frequency) => (
            <div key={frequency} className="flex items-center space-x-2">
              <RadioGroupItem value={frequency} id={`frequency-${frequency}`} />
              <Label htmlFor={`frequency-${frequency}`}>{frequency}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">6. What frustrates you the most about existing health apps?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {appFrustrations.map((frustration) => (
            <div key={frustration} className="flex items-center space-x-2">
              <Checkbox
                id={`frustration-${frustration}`}
                checked={formData.appFrustrations.includes(frustration)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setFormData(prev => ({
                      ...prev,
                      appFrustrations: [...prev.appFrustrations, frustration]
                    }));
                  } else {
                    setFormData(prev => ({
                      ...prev,
                      appFrustrations: prev.appFrustrations.filter(f => f !== frustration)
                    }));
                  }
                }}
              />
              <Label htmlFor={`frustration-${frustration}`}>{frustration}</Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
