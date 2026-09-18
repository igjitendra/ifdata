# InvoiceFine Download Center

Official download packages for **InvoiceFine** across supported platforms.

---

## 📱 Android App

InvoiceFine for Android offers quick mobile billing, counter point-of-sale functionality, camera barcode scanning, Bluetooth thermal printing, and instant customer ledger management.

| Parameter | Details |
|---|---|
| **Current Version** | `1.1.1` |
| **Release Date** | September 2026 |
| **Minimum OS Version** | Android 8.0 (Oreo) or higher |
| **Target Architecture** | ARM64, ARMv7, x86_64 |
| **Distribution Channel** | Google Play Store |
| **Official Download** | `YOUR_GOOGLE_PLAY_STORE_URL` *(Placeholder — link will be updated upon Play Store publication)* |

### How to Install on Android
1. Open the Google Play Store on your Android smartphone or tablet.
2. Search for **InvoiceFine** by **PRO CSC TOOLS**.
3. Tap **Install** and grant necessary permissions (e.g., Bluetooth for thermal printers, Camera for barcode scanning).
4. Launch the application, set up your business details (GSTIN, Business Name, Address), and start billing immediately.

---

## 💻 Linux Desktop

InvoiceFine Desktop is optimized for desktop computers, laptops, and counter checkout stations running Linux.

### Available Packages (Version 1.2.0)

| Distribution / Format | Package File | Architecture | File Size | Release Date | Download Link |
|---|---|---|---|---|---|
| **Ubuntu / Debian / Linux Mint** (`.deb`) | `InvoiceFine_1.2.0_amd64.deb` | `amd64` (64-bit) | ~34 MB | September 2026 | [Download .deb](downloads/linux/InvoiceFine_1.2.0_amd64.deb) |
| **Fedora / RHEL / openSUSE** (`.rpm`) | `InvoiceFine-1.2.0-1.x86_64.rpm` | `x86_64` (64-bit) | ~34 MB | September 2026 | [Download .rpm](downloads/linux/InvoiceFine-1.2.0-1.x86_64.rpm) |
| **Universal Linux** (`.AppImage`) | `InvoiceFine_1.2.0_amd64.AppImage` | `amd64` (64-bit) | Pending | *Coming Soon* | *Packaging in progress* |

---

### Installation Instructions

#### 1. Debian, Ubuntu, Linux Mint (.deb)

Using APT (Recommended — automatically resolves dependencies):
```bash
sudo apt update
sudo apt install ./downloads/linux/InvoiceFine_1.2.0_amd64.deb
```

Using DPKG:
```bash
sudo dpkg -i downloads/linux/InvoiceFine_1.2.0_amd64.deb
sudo apt-get install -f
```

#### 2. Fedora, Red Hat Enterprise Linux, CentOS Stream (.rpm)

Using DNF:
```bash
sudo dnf install ./downloads/linux/InvoiceFine-1.2.0-1.x86_64.rpm
```

Using RPM directly:
```bash
sudo rpm -ivh downloads/linux/InvoiceFine-1.2.0-1.x86_64.rpm
```

#### 3. openSUSE (.rpm)

Using Zypper:
```bash
sudo zypper install ./downloads/linux/InvoiceFine-1.2.0-1.x86_64.rpm
```

---

## System Requirements

### Linux Desktop
- **Processor**: 64-bit Intel / AMD x86_64 processor.
- **Memory (RAM)**: Minimum 2 GB RAM (4 GB recommended).
- **Disk Space**: 150 MB free disk space for installation and local database storage.
- **Desktop Environment**: GNOME, KDE Plasma, XFCE, Cinnamon, MATE, or any standard Wayland/X11 desktop.
- **Dependencies**: `webkit2gtk-4.1` (standard in modern Ubuntu 20.04+, Debian 11+, Fedora 36+).

### Android Device
- **Operating System**: Android 8.0 (API Level 26) or higher.
- **RAM**: Minimum 2 GB RAM.
- **Storage**: 100 MB free space.
- **Connectivity**: Bluetooth 4.0+ (if using wireless thermal receipt printers).

---

## Verifying Downloaded Files

Verify the integrity of downloaded Linux packages using SHA-256:

```bash
sha256sum downloads/linux/InvoiceFine_1.2.0_amd64.deb
sha256sum downloads/linux/InvoiceFine-1.2.0-1.x86_64.rpm
```

*(SHA-256 checksums are published in [RELEASES.md](RELEASES.md) for each release).*

---

## Previous Versions
Looking for older builds? Visit [RELEASES.md](RELEASES.md) to inspect version history and previous package archives.
