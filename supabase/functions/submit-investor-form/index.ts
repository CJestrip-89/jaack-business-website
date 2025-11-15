import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface InvestorFormData {
  fullName: string;
  professionalTitle: string;
  email: string;
  phone: string;
  organization: string;
  investmentSize: string;
  investmentFocus: string;
  investmentExperience: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log('Investor form submission received');

  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: InvestorFormData = await req.json();
    console.log('Form data parsed:', { email: formData.email });

    const airtableToken = Deno.env.get('AIRTABLE_API_TOKEN');
    if (!airtableToken) {
      console.error('AIRTABLE_API_TOKEN not found');
      throw new Error('Airtable API token not configured');
    }

    const baseId = 'appOnvNjARAzczdGd';
    const tableId = 'tblIeqG4dQHXduEFx';
    const airtableUrl = `https://api.airtable.com/v0/${baseId}/${tableId}`;

    console.log('Sending to Airtable...');

    const airtableResponse = await fetch(airtableUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${airtableToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          Full_Name: formData.fullName,
          Professional_Title: formData.professionalTitle,
          Email: formData.email,
          Phone_Number: formData.phone,
          Organization: formData.organization,
          Investment_Size: formData.investmentSize,
          Investment_Focus: formData.investmentFocus,
          Investment_Experience: formData.investmentExperience,
        },
      }),
    });

    if (!airtableResponse.ok) {
      const errorText = await airtableResponse.text();
      console.error('Airtable error:', errorText);
      throw new Error(`Airtable API error: ${airtableResponse.status}`);
    }

    const airtableData = await airtableResponse.json();
    console.log('Successfully submitted to Airtable:', airtableData.id);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Investor application submitted successfully',
        recordId: airtableData.id 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Error processing investor form:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to submit investor application';
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: errorMessage
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
};

serve(handler);
