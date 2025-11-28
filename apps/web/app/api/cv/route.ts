import { NextResponse } from 'next/server';
import { apiClient } from '@/lib/http-client';
import { devConsole } from '@portfolio/shared-utils/src/dev-console';

const CV_PDF_API_ROUTE = '/cv/pdf';

export async function GET() {
  try {
    const pdfBuffer = await apiClient.getArrayBuffer<ArrayBuffer>(CV_PDF_API_ROUTE);
    return new NextResponse(Buffer.from(pdfBuffer), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="cv.pdf"',
      },
    });
  } catch (err) {
    devConsole.error('[CV API Error]', err);
    return NextResponse.json({ error: 'Internal error fetching CV' }, { status: 500 });
  }
}
