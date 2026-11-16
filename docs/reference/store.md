# Store

Last reviewed: 2026-11-16

- Route: `/store/`, linked in the global header and footer.
- Source: `src/pages/store.astro`; catalog and pack links: `src/data/store.ts`.
- Holiday ornaments are featured first with owner-supplied copy and four product-specific Stripe Payment Links: 1 pack $24.95, 2 pack $44.95, 3 pack $59.95, 5 pack $99.95.
- Checkout opens on Stripe. This static site does not collect card details, record orders, or manage inventory. Configure receipts, fulfillment, stock, shipping, tax, and available destinations in the Stripe account. Shipping charges have not been supplied; the page directs customers to check their final total at checkout.
- Clothing: five hoodie designs and four T-shirt designs, all explicitly sold out and display-only with no purchasing or order inquiry controls. `clothingCollections` in `src/data/store.ts` supplies the catalog; `src/components/ClothingCollection.astro` renders each collection. The tenth supplied image is the shared T-shirt front view, not a separate design. Images are under `public/assets/store/`; all clothing images open full size. No sizes, prices, or restock dates have been supplied.
- Mugs and keychains currently offer product-specific email inquiries. Add approved `priceLabel` and HTTPS `checkoutUrl` values to enable their purchase links; configure variants with the provider.
- Owner-supplied ornament images live under `public/assets/store/`: paired view (`holiday-ornaments-paired.jpg`), quote design (`holiday-ornament-quote.jpg`), and rescue design (`holiday-ornament-rescue.png`). The paired view leads the gallery; individual designs link to full-size images. `ornamentImages` in the catalog controls detail images. Add future merchandise assets with accurate `imageAlt`; merchandise images render only when supplied.
- Donation links are separate from merchandise checkout.
- Header switches to mobile navigation at 1120px to accommodate the Store link.
