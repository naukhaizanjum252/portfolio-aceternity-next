/**
 * Feature flags and app config.
 * NEW_LAYOUT: when true, the home page renders the new portfolio layout (Phthalo green theme).
 * Set via environment: NEXT_PUBLIC_NEW_LAYOUT=true or false
 */
export const NEW_LAYOUT = process.env.NEXT_PUBLIC_NEW_LAYOUT === "true";
