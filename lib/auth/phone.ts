export function normalizePhoneNumber(value: string) {
  const normalized = value.trim().replace(/[\s()-]/g, "");

  if (!/^\+[1-9]\d{7,14}$/.test(normalized)) {
    return null;
  }

  return normalized;
}

