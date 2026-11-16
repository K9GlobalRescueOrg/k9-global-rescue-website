# Store

Last reviewed: 2026-11-16

- Route: `/store/`, linked in the global header and footer.
- Source: `src/pages/store.astro`; catalog and pack links: `src/data/store.ts`.
- Holiday ornaments are featured first with owner-supplied copy and four product-specific Stripe Payment Links: 1 pack $24.95, 2 pack $44.95, 3 pack $59.95, 5 pack $99.95.
- Checkout opens on Stripe. This static site does not collect card details, record orders, or manage inventory. Configure receipts, fulfillment, stock, shipping, tax, and available destinations in the Stripe account. Shipping charges have not been supplied; the page directs customers to check their final total at checkout.
- Shirts, mugs, and keychains currently offer product-specific email inquiries. Add approved `priceLabel` and HTTPS `checkoutUrl` values to enable their purchase links; configure variants with the provider.
- Product photos have not been supplied. The ornament feature uses a branded logo panel, not a simulated product photograph. Add approved assets under `public/assets/store/`, set each product's `image` path and accurate `imageAlt`; merchandise images render only when supplied.
- Donation links are separate from merchandise checkout.
- Header switches to mobile navigation at 1120px to accommodate the Store link.
