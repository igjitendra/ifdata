# Frequently Asked Questions (FAQ)

Answers to common questions about **InvoiceFine** for Mobile and Desktop.

---

## General Questions

### What is InvoiceFine?
InvoiceFine is a modern business management, billing, and accounting application designed for small enterprises, retailers, wholesalers, and service contractors. It handles GST/non-GST billing, inventory tracking, customer khata (ledgers), supplier accounts, and business reporting.

### Who can use InvoiceFine?
InvoiceFine is tailored for:
- Retail shops, supermarkets, and kirana stores
- Electronics, hardware, and mobile repair centers
- Apparel boutiques and shoe stores
- Independent consultants, freelancers, and technicians
- Wholesalers and distributors

### Does InvoiceFine work offline?
**Yes.** InvoiceFine is 100% offline-first. Your catalog, invoices, customer records, and ledger balances are stored directly on your device. You do not need an active internet connection to create bills, print receipts, or track inventory.

---

## Billing & Invoicing

### Does InvoiceFine support Indian GST compliance?
Yes. InvoiceFine supports:
- B2B and B2C invoices
- Automatic CGST, SGST, and IGST tax determination based on customer location
- Standard tax slabs (0%, 5%, 12%, 18%, 28%)
- HSN codes for goods and SAC codes for services
- Reverse charge mechanism indicators

### Can I create Non-GST bills or simple Cash Memos?
Yes. If you operate an unregistered business, a composition scheme store, or simply want to issue non-tax cash slips, you can turn off tax calculations with one tap.

### Can I issue Estimates or Quotations?
Yes. You can generate formal sales estimates and quotations. When your customer approves the quote, you can convert it directly into a confirmed tax invoice without re-entering line items.

### Can I customize the invoice design?
Yes. InvoiceFine includes 5 built-in professional invoice templates: *Classic*, *Modern*, *Compact*, *Professional*, and *Premium*. You can also add your business logo, signature, bank account details, and payment QR codes.

---

## Inventory & Stock Control

### How does stock tracking work?
When you add products to your catalog, you set their initial stock quantity. Every time you create a confirmed sales invoice with that product, the available stock decreases automatically. You can also log stock additions when receiving supplier shipments.

### What is the Item Stock Ledger?
On InvoiceFine Desktop, clicking on any inventory item opens a comprehensive Stock Ledger modal. This shows every transaction affecting that product: opening balance, supplier restocks, sales deductions, unit rates, and the real-time balance.

### Can I use barcode scanners?
Yes. On Android mobile devices, you can scan product barcodes directly using your phone’s camera. On Linux desktop, you can plug in any standard USB or wireless handheld barcode scanner.

---

## Customers & Khata (Ledger)

### How does customer balance tracking work?
When an invoice is issued with an unpaid balance, that amount is automatically added to the customer's outstanding khata. When the customer makes a payment, you record the amount (Cash, UPI, Cheque, Bank Transfer), and InvoiceFine automatically updates their balance and allocates the payment across their oldest unpaid bills.

### Can I send payment reminders?
Yes. You can schedule payment follow-up reminders and share friendly payment notices along with invoice summaries via WhatsApp or SMS.

---

## Printing & Hardware

### Which printers are supported?
InvoiceFine supports:
1. **Thermal Receipt Printers (58mm / 2-inch and 80mm / 3-inch)**:
   - Bluetooth thermal printers on Android
   - USB thermal receipt printers on Linux Desktop
   - Network / Wi-Fi thermal printers
2. **Standard Laser & Inkjet Printers**:
   - Standard A4 / Letter printing via system print spooler or PDF export

---

## Installation & Platforms

### What platforms are currently supported?
- **Android**: Compatible with smartphones and tablets running Android 8.0 or higher.
- **Linux Desktop**: Compatible with 64-bit Ubuntu, Debian, Linux Mint, Fedora, RHEL, openSUSE, and related distributions.

### How do I install InvoiceFine on Linux?
For Ubuntu / Debian / Linux Mint:
```bash
sudo apt install ./InvoiceFine_1.2.0_amd64.deb
```
For Fedora / RHEL:
```bash
sudo dnf install ./InvoiceFine-1.2.0-1.x86_64.rpm
```
*(Full step-by-step instructions are available in [DESKTOP-APP.md](DESKTOP-APP.md)).*

### How do I update to a newer version?
Simply download the latest package and install it over your existing installation. Your data, settings, and invoice records will be preserved automatically.

---

## Pricing & Support

### Is InvoiceFine free?
Yes. InvoiceFine offers a full-featured Free Tier suitable for everyday billing and basic inventory tracking. For power users with high daily billing volumes and advanced requirements, an optional Pro subscription is available.

### How do I contact customer support?
For technical support, feedback, or business inquiries, email:
📧 **[procsctools@gmail.com](mailto:procsctools@gmail.com)**
