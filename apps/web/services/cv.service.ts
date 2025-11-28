const CV_API_ROUTE = '/api/cv';

export async function downloadCv(): Promise<Blob> {
  const res = await fetch(CV_API_ROUTE, {
    method: 'GET',
  });
  if (!res.ok) throw new Error('Failed to download CV');
  return await res.blob();
}
