// pages/api/submit-survey.ts
//import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import nodemailer, { Transporter } from 'nodemailer';

// Type definitions
interface SurveyFormData {
  valuableFeatures: string[];
  appInteraction: string;
  reminderTypes: string[];
  primaryDevice: string;
  appUsageFrequency: string;
  appFrustrations: string[];
  healthTracking: string[];
  healthcareVisits: string;
  healthcareChallenges: string[];
  wearableIntegration: boolean;
  reproductiveHealthRecords: string;
  privacyFeatures: string;
  dataStorageComfort: string;
  educationalContentPreference: string[];
  beneficialContent: string[];
  expertAdviceImportance: string;
  communitySupport: boolean;
  personalizeExperience: boolean;
  motivation?: string;
  desiredFeature?: string;
  additionalComments?: string;
}

interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
  from: string;
  to: string;
}

interface ApiResponse {
  message: string;
  error?: string;
}

// Environment variables type checking
const getEmailConfig = (): EmailConfig => {
  const config: EmailConfig = {
    host: process.env.SMTP_HOST ?? '',
    port: parseInt(process.env.SMTP_PORT ?? '587', 10),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER ?? '',
      pass: process.env.SMTP_PASS ?? '',
    },
    from: process.env.SMTP_FROM ?? '',
    to: process.env.SMTP_TO ?? '',
  };

  const requiredEnvVars = [
    'SMTP_HOST',
    'SMTP_PORT',
    'SMTP_USER',
    'SMTP_PASS',
    'SMTP_FROM',
    'SMTP_TO',
  ] as const;

  const missingEnvVars = requiredEnvVars.filter(
    (envVar) => !process.env[envVar]
  );

  if (missingEnvVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingEnvVars.join(', ')}`
    );
  }

  return config;
};

const formatEmailContent = (formData: SurveyFormData): string => {
  const formatField = (value: string[] | string | boolean | undefined): string => {
    if (Array.isArray(value)) {
      return value.join(', ') || 'None selected';
    }
    if (typeof value === 'boolean') {
      return value ? 'Yes' : 'No';
    }
    return value || 'Not specified';
  };

  return `
    New Survey Response Received
    
    Form Details:
    
    Features Selected:
    ${formatField(formData.valuableFeatures)}
    
    App Interaction Preference: ${formatField(formData.appInteraction)}
    
    Reminder Types:
    ${formatField(formData.reminderTypes)}
    
    Primary Device: ${formatField(formData.primaryDevice)}
    
    App Usage Frequency: ${formatField(formData.appUsageFrequency)}
    
    Frustrations:
    ${formatField(formData.appFrustrations)}
    
    Health Tracking Interests:
    ${formatField(formData.healthTracking)}
    
    Healthcare Visit Frequency: ${formatField(formData.healthcareVisits)}
    
    Healthcare Challenges:
    ${formatField(formData.healthcareChallenges)}
    
    Additional Information:
    - Wearable Integration: ${formatField(formData.wearableIntegration)}
    - Reproductive Health Records: ${formatField(formData.reproductiveHealthRecords)}
    - Privacy Features: ${formatField(formData.privacyFeatures)}
    - Data Storage Comfort: ${formatField(formData.dataStorageComfort)}
    
    Educational Preferences:
    ${formatField(formData.educationalContentPreference)}
    
    Beneficial Content Types:
    ${formatField(formData.beneficialContent)}
    
    Expert Advice Importance: ${formatField(formData.expertAdviceImportance)}
    Community Support: ${formatField(formData.communitySupport)}
    Personalize Experience: ${formatField(formData.personalizeExperience)}
    
    Open-ended Responses:
    Motivation: ${formatField(formData.motivation)}
    Desired Feature: ${formatField(formData.desiredFeature)}
    Additional Comments: ${formatField(formData.additionalComments)}
  `.trim();
};

async function sendEmail(
  transporter: Transporter,
  emailConfig: EmailConfig,
  formData: SurveyFormData
): Promise<void> {
  await transporter.sendMail({
    from: emailConfig.from,
    to: emailConfig.to,
    subject: "New Women's Health App Survey Response",
    text: formatEmailContent(formData),
  });
}

export async function POST(request: Request) {
  try {
    const formData: SurveyFormData = await request.json(); // Get the form data
    
    // Your existing logic to validate formData and configure nodemailer
    const emailConfig = getEmailConfig();
    const transporter = nodemailer.createTransport({
      host: emailConfig.host,
      port: emailConfig.port,
      secure: emailConfig.secure,
      auth: emailConfig.auth,
    });

    await sendEmail(transporter, emailConfig, formData);

    return NextResponse.json({
      message: 'Survey submitted successfully',
    }, { status: 200 });
  } catch (error) {
    console.error('Survey submission error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    
    return NextResponse.json({
      message: 'Error submitting survey',
      error: errorMessage,
    }, { status: 500 });
  }
}

/*export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
): Promise<void> {
  if (req.method !== 'POST') {
    res.status(405).json({ 
      message: 'Method not allowed',
      error: `Method ${req.method} is not allowed` 
    });
    return;
  }
  console.log('Received POST request:', req.body);
  try {
    const formData = req.body as SurveyFormData;
    
    if (!formData) {
      throw new Error('No form data provided');
    }

    const emailConfig = getEmailConfig();
    const transporter = nodemailer.createTransport({
      host: emailConfig.host,
      port: emailConfig.port,
      secure: emailConfig.secure,
      auth: emailConfig.auth,
    });

    await sendEmail(transporter, emailConfig, formData);

    res.status(200).json({ 
      message: 'Survey submitted successfully' 
    });
  } catch (error) {
    console.error('Survey submission error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    
    res.status(500).json({ 
      message: 'Error submitting survey',
      error: errorMessage
    });
  }
}*/
