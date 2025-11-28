/**
 * downloadCv service
 *
 * Descarcă fișierul CV (PDF) de la endpoint-ul API.
 * - Face un request GET către /api/cv.
 * - Returnează un Blob cu conținutul fișierului.
 * - Aruncă eroare dacă descărcarea eșuează.
 *
 * @returns Promise<Blob> - fișierul CV ca blob
 *
 * @example
 * const cvBlob = await downloadCv();
 */
const CV_API_ROUTE = '/api/cv';

export async function downloadCv(): Promise<Blob> {
  const res = await fetch(CV_API_ROUTE, {
    method: 'GET',
  });
  if (!res.ok) throw new Error('Failed to download CV');
  return await res.blob();
}
