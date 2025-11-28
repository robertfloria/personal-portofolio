import { NextResponse } from 'next/server';
import { apiClient } from '@/lib/http-client';
import { SendEmailDto } from '@portfolio/shared-types';
import { devConsole } from '@portfolio/shared-utils/src/dev-console';

const SEND_EMAIL_API_ROUTE = '/email/send';

export async function POST(req: Request) {
  try {
    const data: SendEmailDto = await req.json();
    const response = await apiClient.post<SendEmailDto, any>(SEND_EMAIL_API_ROUTE, data);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    devConsole.error('[Contact API Error]', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
