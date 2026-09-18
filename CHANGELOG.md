# Changelog

All notable changes and release milestones for **InvoiceFine** are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [1.2.0] — Linux Desktop — 2026-09-17

### Added
- **Item Stock Ledger Modal**: Introduced an interactive stock movement inspector within the inventory screen, displaying opening balances, purchase receipts, invoice sales deductions, unit rates, and running totals.
- **Customer Sales Analytics**: Added a customer-level purchase history breakdown in the item view, allowing users to see who purchased specific goods, on what date, and at what price.
- **Two-Way Stock Movement Sync**: Integrated bidirectional synchronization support between Android mobile backup files and Linux desktop for stock movement logs and scaled quantities.

### Improved
- **Catalog Matching Engine**: Upgraded item matching algorithms in the sales engine to match items across product ID, item ID, SKU, barcode, and normalized names without loss during backup restoration.
- **Customer Balance Reconciliation**: Automated FIFO payment allocation and real-time ledger balance recalculation matching invoice dues and standalone payment receipts.
- **POS Keyboard Workflow**: Streamlined shortcut handling during high-volume counter checkout.

### Fixed
- **Zero-Division Display Bugs**: Fixed an issue where items with zero purchase cost or zero revenue showed `NaN%` or `Infinity%` in margin calculations.
- **Inventory Stock Reversals**: Resolved stock balance discrepancies when deleting or editing confirmed sales invoices.

---

## [1.1.2] — Linux Desktop — 2026-09-17

### Added
- Native packaging for Debian/Ubuntu (`.deb`) and Red Hat/Fedora (`.rpm`) distributions.
- Multi-pane customer management console with transaction ledger tabs.
- Bulk product and customer data migration support via CSV import.

### Improved
- Modernized dark and light mode UI themes.
- Thermal receipt printer formatting for 58mm and 80mm roll widths.

---

## [1.1.1] — Android — 2026-09-15

### Added
- Direct camera barcode scanning for instant item addition on mobile bills.
- ESC/POS wireless Bluetooth thermal printer connectivity.
- Scheduled payment reminders with direct WhatsApp messaging integration.

### Improved
- Tax calculation accuracy for inter-state (IGST) transactions.
- Offline database encryption and local backup export.

---

## [1.0.0] — Android & Mobile Launch — 2026-08-24

### Added
- Initial public release of InvoiceFine on Android.
- Core GST and Non-GST invoice generation.
- 5 built-in PDF invoice templates (*Classic*, *Modern*, *Compact*, *Professional*, *Premium*).
- Customer directory and credit khata management.
- Product catalog with unit pricing and stock quantity tracking.
- Expense tracking and basic monthly turnover reporting.
