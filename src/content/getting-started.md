# Getting Started

## Quick Start

The main application runs entirely in Docker. You need Docker (v20.10+) and Docker Compose (v2.0+).

```bash
# Clone the repository
git clone https://github.com/EqualifyEverything/equalify-pdf-converter.git
cd equalify-pdf-converter

# Start all services
make dev

# Verify it's running
curl http://localhost:8080/health

# View API docs (username: dase, password: a11y)
open http://localhost:8080/docs
```

For detailed environment setup, AWS configuration, and development workflows, see the [Environment Setup Guide](https://github.com/EqualifyEverything/equalify-pdf-converter/blob/main/docs/environment-setup.md).

## For Developers

- [**Main Repository README**](https://github.com/EqualifyEverything/equalify-pdf-converter#readme) — Full feature status, architecture overview, and quick start
- [**Environment Setup**](https://github.com/EqualifyEverything/equalify-pdf-converter/blob/main/docs/environment-setup.md) — Local development, AWS profiles, daily workflows
- [**Architecture Reference**](https://github.com/EqualifyEverything/equalify-pdf-converter/blob/main/docs/architecture.md) — System design, data flow, and service layers
- [**CONTRIBUTING.md**](https://github.com/EqualifyEverything/equalify-pdf-converter/blob/main/CONTRIBUTING.md) — How to contribute

## For WordPress Users

The [Equalify Reflow for WordPress](https://github.com/EqualifyEverything/equalify-reflow-wp) plugin connects your WordPress site to the converter API. Processed documents are served through a built-in viewer with table of contents, full-text search, and a link to download the original PDF.

See the [WordPress plugin README](https://github.com/EqualifyEverything/equalify-reflow-wp#readme) for setup instructions using DDEV.

## For Partners

We're looking for institutional partners who want early access and a voice in what gets built next. Partners get:

- **Early access** to new features and pipeline improvements
- **Roadmap commenting** — influence what gets prioritized
- **Direct support** during pilot deployments

You don't need to be an engineer to contribute. We need accessibility experts who can evaluate outputs, institutions willing to test the pipeline on real document collections, and practitioners who understand day-to-day remediation to help prioritize what matters most.

**Contact:** [Blake Bertuccelli-Booth](https://it.uic.edu/profiles/blake-bertuccelli-booth/) — b3b@uic.edu

## Project Repositories

| Repository | Description |
|---|---|
| [equalify-pdf-converter](https://github.com/EqualifyEverything/equalify-pdf-converter) | Main backend — FastAPI pipeline that converts PDFs to semantic markdown |
| [equalify-reflow-wp](https://github.com/EqualifyEverything/equalify-reflow-wp) | WordPress plugin — serves converted documents with built-in viewer |
| [equalify-reflow-feedback](https://github.com/EqualifyEverything/equalify-reflow-feedback) | Feedback service — collects user edits and issue reports with PDF archival |
| [equalify-reflow-docs](https://github.com/EqualifyEverything/equalify-reflow-docs) | This documentation site |
