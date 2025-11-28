import { NextResponse } from 'next/server';
import { apiClient } from '@/lib/http-client';
import { EmailResponse, SendEmailDto } from '@portfolio/shared-types';
import { devConsole } from '@portfolio/shared-utils/src/dev-console';

const SEND_EMAIL_API_ROUTE = '/email/send';

/**
 * API Route: POST /api/email
 *
 * Primește un payload JSON cu datele emailului (SendEmailDto) și îl trimite către backend.
 * Returnează răspunsul backend-ului ca JSON sau mesaj de eroare la eșec.
 *
 * @param {Request} req - Request-ul HTTP cu payload-ul emailului
 * @returns {NextResponse} - Răspuns JSON cu status 200 sau 500
 */
export async function POST(req: Request) {
  try {
    const data: SendEmailDto = await req.json();
    const response = await apiClient.post<SendEmailDto, EmailResponse>(SEND_EMAIL_API_ROUTE, data);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    devConsole.error('[Contact API Error]', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
