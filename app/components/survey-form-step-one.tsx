import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { FormData } from '../types/survey';

interface StepOneProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

// Feature and reminder type options
const features = [
  "Exercise logs",
  "Sleep tracker",
  "Symptom diaries",
  "Pregnancy and postpartum support",
  "Menstrual cycle and fertility tracking",
  "Personal health records management",
  "Support groups or community forums",
  "Medication reminders and prescription refills",
  "24/7 access to on-demand healthcare services",
  "Educational content on women&apos;s health topics",
  "Fitness and nutrition plans tailored to women&apos;s health",
  "Virtual consultations with women&apos;s health specialists"
];

const reminderTypes = [
  "Push Notifications",
  "Habit reminder",
  "Alarms"
];

const StepOne: React.FC<StepOneProps> = ({ formData, setFormData }) => {
  return (
    <div className="space-y-6">
      {/* Features selection */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">1. Which features would be most valuable to you in a women&apos;s health app?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature) => (
            <div key={feature} className="flex items-center space-x-2">
              <Checkbox
                id={`feature-${feature}`}
                checked={formData.valuableFeatures.includes(feature)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setFormData(prev => ({
                      ...prev,
                      valuableFeatures: [...prev.valuableFeatures, feature]
                    }));
                  } else {
                    setFormData(prev => ({
                      ...prev,
                      valuableFeatures: prev.valuableFeatures.filter(f => f !== feature)
                    }));
                  }
                }}
              />
              <Label htmlFor={`feature-${feature}`}>{feature}</Label>
            </div>
          ))}
        </div>
      </div>

      {/* App interaction frequency */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">2. How often would you prefer to interact with the app?</h3>
        <RadioGroup
          value={formData.appInteraction}
          onValueChange={(value) => setFormData(prev => ({ ...prev, appInteraction: value }))}
        >
          {['Daily', 'Weekly', 'Monthly', 'As needed'].map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <RadioGroupItem value={option} id={`interaction-${option}`} />
              <Label htmlFor={`interaction-${option}`}>{option}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Reminder type selection */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">3. What type of reminders or notifications would you find useful?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reminderTypes.map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox
                id={`reminder-${type}`}
                checked={formData.reminderTypes.includes(type)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setFormData(prev => ({
                      ...prev,
                      reminderTypes: [...prev.reminderTypes, type]
                    }));
                  } else {
                    setFormData(prev => ({
                      ...prev,
                      reminderTypes: prev.reminderTypes.filter(t => t !== type)
                    }));
                  }
                }}
              />
              <Label htmlFor={`reminder-${type}`}>{type}</Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepOne;
