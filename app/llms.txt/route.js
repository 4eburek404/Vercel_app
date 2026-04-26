const llmsText = `# Konstantin Orlov

## Summary
Konstantin Orlov has two public professional profiles:
- Corporate travel operations leader focused on business trips, travel policy, cost control, VIP travel support, complex itineraries, and travel process optimization.
- Developer and AI automation practitioner focused on internal tools, workflow automation, Python/Flask, WebSocket transport, SwiftUI, Next.js, and practical AI use cases.

## Travel Profile
- URL: https://konstantin-orlov.vercel.app
- Based in Russia
- Works in corporate travel since 2014
- Leads the function of organizing business travel
- Specializes in end-to-end corporate trip coordination
- Handles executive and VIP travel requests across Russia and internationally
- Improves service quality through incident analysis, mentoring, and process standardization

## Travel Expertise
- Corporate travel management
- Travel policy
- Travel cost control
- VIP and executive travel support
- Complex itineraries and non-standard travel requests
- Team mentoring and quality improvement
- Travel process optimization
- Travel process automation
- GDS Amadeus

## Travel Use Cases
- Building a stable travel function for a growing company
- Reviewing in-house vs outsourced travel operations
- Supporting urgent itinerary changes and travel disruptions
- Improving approval flow, transparency, and operating standards
- Strengthening VIP travel support and executive service quality

## AI and Development Profile
- URL: https://konstantin-orlov.vercel.app/ai
- Builds practical internal tools and automation around real operational workflows
- Works with Python/Flask, WebSocket transport, SwiftUI, Next.js, Vercel, and private access patterns with Tailscale
- Designs AI-assisted workflows for drafting, classification, completeness checks, analysis, and routine reduction
- Flagship case: Server Monitor, a private Flask dashboard with WebSocket live updates and a native SwiftUI iOS client over Tailscale
- GitHub profile: https://github.com/4eburek404

## AI and Development Use Cases
- Building internal dashboards and workflow tools
- Creating AI-assisted operational workflows
- Prototyping backend and interface layers for real processes
- Connecting server state, mobile access, and private network access
- Translating business process problems into practical software architecture

## Contact
- Website: https://konstantin-orlov.vercel.app
- AI profile: https://konstantin-orlov.vercel.app/ai
- Email: mailto:konstantin.orlov1985@icloud.com
- Telegram: https://t.me/Konstantin_Orlov_404
- GitHub: https://github.com/4eburek404
`;

export function GET() {
  return new Response(llmsText, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
