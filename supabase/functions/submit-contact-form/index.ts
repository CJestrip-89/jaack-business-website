import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  inquiry_type: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Received contact form submission:", formData);

    const airtableToken = Deno.env.get("AIRTABLE_API_TOKEN");
    const baseId = "appOnvNjARAzczdGd";
    const tableName = "Contacts";

    if (!airtableToken) {
      throw new Error("Airtable API token not configured");
    }

    // Send data to Airtable
    const airtableResponse = await fetch(
      `https://api.airtable.com/v0/${baseId}/${tableName}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${airtableToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            First_Name: formData.firstName,
            Last_Name: formData.lastName,
            Email: formData.email,
            Phone_Number: formData.phone || "",
            Company_Organization: formData.company || "",
            Inquiry_Type: formData.inquiry_type,
            Message: formData.message,
          },
        }),
      }
    );

    if (!airtableResponse.ok) {
      const errorText = await airtableResponse.text();
      console.error("Airtable API error:", errorText);
      throw new Error(`Airtable API error: ${airtableResponse.status}`);
    }

    const airtableData = await airtableResponse.json();
    console.log("Successfully saved to Airtable:", airtableData);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Contact form submitted successfully",
        recordId: airtableData.id 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in submit-contact-form function:", error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
