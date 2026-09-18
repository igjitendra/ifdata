# InvoiceFine Features Guide

An in-depth, user-facing guide to the features and capabilities of **InvoiceFine**.

---

## 1. Billing & Invoicing

### GST Invoicing
- **Full Compliance**: Compliant with Indian GST standards for B2B and B2C transactions.
- **Automated Tax Calculation**: Select intra-state (CGST + SGST) or inter-state (IGST) split based on buyer and seller state codes.
- **Tax Rates**: Support for standard tax slabs (0%, 5%, 12%, 18%, 28%) and custom rates.
- **HSN & SAC Code Support**: Specify 4, 6, or 8-digit HSN codes for goods and SAC codes for services.
- **Reverse Charge & Discounting**: Apply item-level or bill-level discounts and indicate reverse charge when required.

### Non-GST Invoicing
- **Cash Memos & Retail Slips**: Quick non-tax billing for composition dealers, unregistered small businesses, and quick counter sales.
- **Flexible Bill Numbering**: Customizable prefix, numbering sequence, and financial year notations.

### Estimates & Quotations
- **Sales Quotations**: Create formal estimates/quotations for clients before confirming a deal.
- **One-Click Conversion**: Easily convert accepted estimates directly into confirmed sales invoices without re-typing line items.

### Professional Invoice Templates
Choose from 5 beautifully designed invoice styles:
- **Classic**: Traditional, clean format optimized for standard business documentation.
- **Modern**: Clean, contemporary typography with elegant headers.
- **Compact**: Space-saving layout ideal for single-page billing with multiple line items.
- **Professional**: Formal corporate styling with clear tax breakdown tables.
- **Premium**: High-contrast, brand-forward design with customizable accents.

---

## 2. Customer & Khata Management

### Customer Profiles
- Maintain customer directories with business name, contact person, phone number, email, billing address, shipping address, and GSTIN.
- Automatic State and State Code detection from GSTIN.

### Customer Khata (Ledger)
- **Real-Time Balance Tracking**: Track current outstanding balance for every customer at a glance.
- **Payment History**: Record partial payments, full settlements, payment modes (Cash, UPI, Cheque, Bank Transfer), and reference numbers.
- **Automatic FIFO Allocation**: Allocate incoming lump-sum payments across oldest unpaid invoices automatically.
- **Item Purchase History**: Inspect exactly which items a customer purchased, in what quantity, and at what price over time.

### Payment Reminders
- Schedule payment reminders and follow-ups.
- Send customized payment reminders with outstanding dues directly to customers.

---

## 3. Products, Services & Inventory Control

### Product Catalog
- Organize goods and services with title, short code/alias, barcode/SKU, category, unit (Pcs, Kg, Meter, Box, etc.), purchase price, and selling price.
- Support for separate Goods (inventory tracked) and Services (SAC coded, no physical inventory).

### Stock Management & Live Ledger
- **Automatic Stock Deduction**: Selling items on confirmed invoices automatically decreases available stock.
- **Stock Movements Log**: Complete audit trail recording stock-ins, sales deductions, manual adjustments, and returns.
- **Low Stock Alerts**: Visual status indicators (In Stock, Low Stock, Out of Stock) to avoid running out of fast-moving products.
- **Restock & Adjustments**: Rapid stock addition directly from the item detail view with purchase cost recording.

### Barcode & SKU Support
- Scan barcodes with mobile camera or connect handheld USB barcode scanners on desktop for instant product lookup during checkout.

---

## 4. Expenses & Financial Reporting

### Expense Management
- Record operational expenses (rent, utilities, salaries, maintenance, travel, supplies).
- Categorize expenditures to understand business overheads and cash outflows.

### Sales & Profit Reports
- **Daily & Monthly Sales Summary**: Monitor total turnover, cash collected, and outstanding receivables.
- **Item-Wise Sales Analysis**: Identify your top-selling products, fast-moving items, and most profitable categories.
- **Gross Profit Estimation**: Automatic calculation of gross profit margins based on recorded purchase costs and selling prices.

---

## 5. Printing & Document Delivery

### Dual-Format Printing Architecture
- **Thermal POS Printing**: High-speed, inkless printing formatted for 58mm (2-inch) and 80mm (3-inch) receipt printers.
- **A4 / Letter Printing**: Standard full-sheet PDF printing for formal office and B2B invoices.

### Connectivity Options
- **Bluetooth Thermal Printers**: Wireless connection on Android mobile devices.
- **USB & OTG Printers**: Connect direct USB thermal printers on Linux desktop and USB OTG on supported mobile phones.
- **Wi-Fi & Network Printers**: Send documents directly across the local network.
- **Android System Print**: Utilize Android's native print framework to connect to Google Cloud Print / Mopria-compatible printers.

### Digital Sharing
- **WhatsApp Share**: Send invoices and receipts directly to customer WhatsApp chats.
- **Email & Messaging**: Share standard PDF files via Email, Telegram, and standard system share sheets.

---

## 6. Data Control, Privacy & Offline Usage

### 100% Offline-First
- Create invoices, manage inventory, and track khata without an active internet connection.
- All core records remain stored locally on your device for speed and reliability.

### Backup & Synchronization
- **Encrypted Local Backups**: Export your business database to a secure local file at any time.
- **Cross-Platform Transfer**: Transfer backups between your Android smartphone and Linux desktop to keep records synchronized.
- **Data Import / Export**: Import products and customer lists in bulk via CSV format to migrate from spreadsheets.

---

## 7. Coming Soon (Planned Features)

The following features are currently under active planning or development and are not yet released:

- **E-Way Bill & E-Invoicing Integration**: Direct generation of Government portal compliant IRN and e-Way bills.
- **Cloud Auto-Sync**: Optional encrypted multi-device cloud synchronization.
- **Multi-User Role Permissions**: Staff, billing operator, and manager role-based access controls.
- **macOS & Windows Desktop Editions**: Cross-platform desktop releases.

*(These features will be announced upon official release in [RELEASES.md](RELEASES.md)).*
