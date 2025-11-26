import { NextResponse } from 'next/server';
import { httpClient } from '@/lib/http-client';
import { SendEmailDto } from '@portfolio/shared-types';
import { devConsole } from '@portfolio/shared-utils/src/dev-console';

const SEND_EMAIL_API_ROUTE = '/email/send';

export async function POST(req: Request) {
  // Debug: log environment variables
  console.log('EMAIL_API_SECRET:', process.env.EMAIL_API_SECRET);
  console.log('NEST_API_URL:', process.env.NEST_API_URL);
  try {
    const data: SendEmailDto = await req.json();

    const response = await httpClient.post(SEND_EMAIL_API_ROUTE, data, {
      headers: {
        'x-api-key': process.env.EMAIL_API_SECRET, // ✅ server-only secret
      },
    });

    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    devConsole.error('[Contact API Error]', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
