const llmsText = `# Konstantin Orlov

## Summary
Konstantin Orlov is a travel operations leader focused on corporate travel management, VIP travel support, complex itineraries, team development, and travel process optimization.

## About
- Based in Russia
- Works in corporate travel since 2014
- Specializes in end-to-end business trip coordination
- Handles executive and VIP travel requests across Russia and internationally
- Improves service quality through incident analysis, mentoring, and process standardization

## Expertise
- VIP and executive travel support
- Complex itineraries and non-standard travel requests
- Corporate travel operations
- Team mentoring and quality improvement
- Travel process optimization
- GDS Amadeus

## Contact
- Website: https://konstantin-orlov.vercel.app
- Email: mailto:konstantin.orlov1985@icloud.com
- Telegram: https://t.me/Konstantin_Orlov_404
`;

export function GET() {
  return new Response(llmsText, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
