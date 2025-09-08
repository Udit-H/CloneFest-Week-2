# CloneFest-Week-2

CloneFest 2025 — Revamping the PHP Image Gallery
Title
Revamping the Classic PHP Image Gallery into a Modern, Extensible Media Platform

Background
A simple PHP image gallery repository (monolithic, limited UX, outdated front-end, minimal plugin architecture) has been serving small sites for years. It stores images, displays lightboxes, and has basic albums — but it lacks modern features like responsive design, accessibility, plugin/theme systems, CDN-friendly storage, metadata-first search, and integration with modern AI and vector search tooling.
This challenge asks you to take that legacy PHP image gallery and rebuild it as a modern, robust, extensible image/media platform while keeping its core spirit: small, opinionated, easy to run, and surprisingly flexible.
The project should result in a working, deployed instance and a reproducible codebase with clear documentation, tests, and a strategy for future extensions.

Goal
Re-engineer the PHP image gallery into a modern web application that:
Is easy to install and maintain.
Is responsive and accessible
Supports modern upload/processing pipelines (responsive sizes, thumbnails, lazy loading).
Is extensible (plugins/modules, themes) so features such as AI generation, custom palettes, and vector search can be added as modules or built-in features.



Required Features (Core)
These are must-have features for the main submission.
1. Easy to Install & Maintain
2. Responsive & Accessible UI
3. Universal Upload & Display
Support common image formats (JPEG, PNG, WEBP, AVIF) and handle fallbacks.
Batch upload and drag-and-drop uploader with progress.
Automatic generation of thumbnails and responsive sizes.
EXIF/IPTC extraction and display.
4. Content Management
Albums, collections, and simple page-type "galleries".
Title, caption, alt text, license/rights metadata for each image.
Per-image privacy settings (public / unlisted / private link).
5. User & Rights Management
At least three roles: Admin, Editor, Visitor.
Permissions model: upload, edit, delete, publish, moderate comments.
6. Basic Search & Filters
Keyword search that works on title, caption, tags, and metadata.
Filters by album, date range, camera metadata, and license.

Gallery Features and Modules (Recommended)
These features improve usability and are expected for grading the core functionality.
Lightbox with keyboard controls, captions, and next/prev.
Lazy Loading and progressive image loading.
Batch Image Operations: delete, move to album, bulk metadata edits.
Image Editor for simple crop/rotate/resize (client-side or server-side).
Downloads with optional watermarks or signed URLs.
Comments & Likes (basic social interaction) with spam controls (MAPTCHA or math CAPTCHA).
Tags & Categories as modular systems for discoverability.
RSS / Sitemap generation for galleries.
Caching & CDN Integration (s3/MinIO + CDN or signed URLs) to reduce load.
Analytics: view counts, basic per-image metrics.



Bonus Round — 3 Explicit Categories (implement any / all for bonus points)
For the bonus round of CloneFest, you must provide clear, implemented (or pluggable) solutions in the following three categories. Each category is scored separately — including architecture, UX, and robustness. These Categories will be given a greater weightage in comparison to any other bonus feature that teams might add.
Bonus Category A — Native AI Image Generation (In-app generation)
What to build
A UI for generating images from text prompts (and optionally image-based inpainting/variation) integrated within the gallery so generated images can be saved directly to albums.
A backend integration to at least one image generation provider (self-hosted open-source model like Stable Diffusion via a container or an external API provider). The implementation must be modular (provider interface) so the generator can be swapped.
Feature set
Prompt input, seed control, size selection, sampling steps, and batch count.
Display of generation job status and logs; ability to abort a job.
Safety filtering: basic NSFW detection or checkbox/consent handling.
Store generation metadata (prompt, seed, model, provider, safety tags) as image metadata.
Generated images must receive a gallery image_id and be searchable like other images.
Nice-to-have
Inpainting / mask-based edits via a simple draw/mask UI.
Re-roll / variations UI.
Credits/quota for users and rate-limiting.
Scoring considerations
Integration stability, metadata completeness, a safe default, and the ability to swap providers.



Bonus Category B — Custom Color Palette (Full theming control)
What to build
A theme/palette editor that allows users to define color values for every logical set of UI elements (e.g., primary button, secondary button, link, background, header, card background, lightbox overlay, captions, badges, borders, and highlights).


Feature set
A live preview UI where selections update the site preview (CSS variables or a generated stylesheet under the hood).
Ability to save palettes as named presets and apply them per-site or per-user.
A simple accessibility contrast checker that warns if a chosen foreground/background pair fails WCAG AA.
Export/import palette JSON files to allow sharing.
Nice-to-have
Per-album theme overrides (e.g., album "Portraits" uses a different color set).
Per-user palette preferences that persist across sessions.
Fine-grained control: hover/active/focus states for interactive elements.
Scoring considerations
Completeness of the palette mapping (did you let users edit every major element?), UX for editing, live preview fidelity, and accessibility enforcement.



Bonus Category C — Vector Search & Similarity (Text ↔ Image and Image ↔ Image)
What to build
Implement similarity search so users can find visually or semantically similar images by: (a) typing a query (text-to-image search) or (b) uploading an example image (image-to-image search).
Eg: Each image must have a stable image_id and an associated vector embedding stored in an index.Other methods of implementation to achieve the same with greater efficiency will be preferred. This is just an example.
Example Approach:
A background worker that computes embeddings for new images (CLIP, OpenAI embeddings, or other open-source equivalents). Embeddings must be stored in a vector store (FAISS, Milvus, Weaviate, or hosted vector DB).
An API endpoint: POST /api/search/vector with text or image that returns a ranked list of image_ids and similarity scores.
A UI that shows search results with similarity scores and supports filters (album, tags, date).
Scoring considerations
Accuracy and UX of search results, timely indexing on new uploads, scalability strategy, and integration robustness.



Suggested Tech Stacks (pick what fits your team)
Do not feel constrained to exactly these — but evaluators will favor clean, modern stacks.
If staying in PHP (recommended for direct porting)
Framework: Laravel (8/9/10) or Symfony.
Frontend: Blade + Alpine.js or Inertia + Vue 3 (or React) or Livewire for a tight full-stack experience.
Storage: Local filesystem (dev) + MinIO / S3 for production + CDN.
Background jobs: Laravel Queue with Redis and worker processes.
Alternatives / Microservices
Frontend SPA: Vue 3 (Vite) or React (Vite) with an API backend (Laravel API, FastAPI, or Node.js).
Vector search: FAISS (self-hosted), Milvus, Weaviate, or Pinecone.
AI generation: Host Diffusers/Stable Diffusion on a GPU VM / container or integrate with Replicate/OpenAI/Stable Horde.
Database
PostgreSQL or MySQL for relational needs; Redis for caching and job queues.
Observability & CI
CI: GitHub Actions to run tests, build image, run linters.
Monitoring: Sentry for errors (optional), basic logging and Prometheus metrics (optional).

Data Model (suggested)
A short suggestion of DB tables and important fields.
images:
id (uuid or incremental)
filename, storage_path
title, caption, alt_text
mime_type, width, height, size_bytes
exif json
license, attribution
uploaded_by, uploaded_at
privacy (public/unlisted/private)
vectors (optional reference into vector index)
generation_meta (if AI-generated: prompt, model, provider)
albums / collections
users, roles, permissions
tags and image_tag join
views, likes, comments


For vector search you may also have a separate image_vectors store with image_id and binary vector or a pointer to the vector-store index.

Example API Endpoints (suggestions)
POST /api/images — multi-part upload; returns image_ids.
GET /api/images — list with pagination & filters.
GET /api/images/:id — image metadata + signed URL for download.
POST /api/images/:id/edit — edit metadata.
POST /api/generate — bonus A: generate image from prompt; returns job id -> final mage stored.
POST /api/search/vector — vector search by text or image.
POST /api/palettes — save palette preset; GET /api/palettes list available presets.

Documentation & Reproducibility (must-have for grading)
README.md with clear Start -> Configure -> Run steps and example .env.
docs/ folder explaining architecture, plugin system, vector re-indexing, and how to add providers (AI or vector DB).
A short demo video (2–4 minutes) showing the deployed site and bonus features if implemented.

Judging Criteria (100)
Startability (20)


One-command local start and clear docs. DB migrations, seed data, and environment explained. (30 points)


Core Functionality Demo (30)


Image upload, thumbnails, responsive display, albums, metadata, user & rights model, search, and lightbox. (35 points)


Stability & Reliability (10)


No crashes, graceful error handling, sensible file size handling, and basic logging. (10 points)


Framework Idioms & Code Quality (10)


Idiomatic use of chosen framework (Laravel conventions, PSR-12 for PHP, proper separation of concerns), readable code, unit tests present. (10 points)


Docs & Reproducibility (10)


Clear documentation, reproducible build & deploy steps, and demo assets. (10 points)


Bonus Innovation (0–20)
Implementing any of the three explicit bonus categories increases the score up to an additional +5 each. Judges will evaluate each category for technical completeness, UX, safety & ethics, documentation, and how well it integrates with the core gallery.
Any further innovative implementations that teams come up with will result in a 5 point reward.

Submission Checklist (what to include)
Public repo link (GitHub/GitLab) with clear README.md.
Deployed live URL to a running instance of your gallery.
Notes on which bonus categories you implemented and a walkthrough of how they work.



