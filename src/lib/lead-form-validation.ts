export type CountryPhoneRule = {
  dialingCode: string;
  minDigits: number;
  maxDigits: number;
};

export function isValidPhoneForCountry(value: string, country: CountryPhoneRule) {
  const digits = value.replace(/\D/g, "");

  if (!digits) {
    return false;
  }

  if (country.dialingCode && digits.startsWith(country.dialingCode)) {
    const localDigits = digits.slice(country.dialingCode.length);
    return localDigits.length >= country.minDigits && localDigits.length <= country.maxDigits;
  }

  return digits.length >= country.minDigits && digits.length <= country.maxDigits;
}
