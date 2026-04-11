const llmsText = `# Konstantin Orlov

## Summary
Konstantin Orlov is a corporate travel operations leader focused on business trips, travel policy, cost control, VIP travel support, complex itineraries, and travel process optimization.

## About
- Based in Russia
- Works in corporate travel since 2014
- Leads the function of organizing business travel
- Specializes in end-to-end corporate trip coordination
- Handles executive and VIP travel requests across Russia and internationally
- Improves service quality through incident analysis, mentoring, and process standardization

## Expertise
- Corporate travel management
- Travel policy
- Travel cost control
- VIP and executive travel support
- Complex itineraries and non-standard travel requests
- Team mentoring and quality improvement
- Travel process optimization
- Travel process automation
- GDS Amadeus

## Business Use Cases
- Building a stable travel function for a growing company
- Reviewing in-house vs outsourced travel operations
- Supporting urgent itinerary changes and travel disruptions
- Improving approval flow, transparency, and operating standards
- Strengthening VIP travel support and executive service quality

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
