export async function submitFormspree(
  endpoint: string,
  formData: FormData,
  request: typeof fetch = fetch,
): Promise<boolean> {
  try {
    const response = await request(endpoint, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });
    return response.ok;
  } catch {
    return false;
  }
}
