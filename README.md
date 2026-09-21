# nithiwut.com

Personal portfolio for Nithiwut Wilainuch, Senior Software Engineer. A light, warm editorial layout focused on backend engineering and hands-on production work.

## Stack

Next.js App Router, React, strict TypeScript, and Tailwind CSS. All portfolio components render on the server; there are no animation or diagram dependencies.

## Content and sections

Content is centralized in `src/lib/portfolio.ts`:

1. Hero ? professional introduction and compact contact links.
2. Engineering Areas ? six groups of experience and supporting technologies.
3. Engineering Work ? three featured stories and two shorter notes, with relevant workflow diagrams.
4. Professional Experience ? concise employment history.
5. How I Work ? practical engineering principles.
6. Education ? degree and senior project.
7. Contact / Resume ? contact details and the detailed career document.

`EngineeringArea`, `EngineeringWorkItem`, and `ArchitectureDiagram` are reusable components in `src/components`. Diagrams use semantic HTML ordered lists. Shared colors live in `src/app/globals.css`.

Keep claims grounded in the existing career content and supplied resume information. The redesign brief supplies the centralized logging context; it does not imply ownership of the ELK infrastructure. Engineering considerations describe tradeoffs, not unverified implementation details or measured outcomes.

## Resume

The existing PDF is preserved at `public/Nithiwut_Wilainuch_Resume.pdf`. Both download links use the centralized `resume` entry in `src/lib/portfolio.ts`.

## Accessibility

The layout includes semantic landmarks, a keyboard skip link, visible focus outlines, named sections, and reduced-motion scrolling. Diagrams preserve their reading order when stacked on mobile.

---

# Deployment

## Platform

- Next.js static export
- GitHub Actions
- AWS S3 private bucket
- Amazon CloudFront CDN
- CloudFront Origin Access Control (OAC)

## Architecture

```text
GitHub Actions
  -> npm ci
  -> npm run build
  -> out/
  -> aws s3 sync
  -> private S3 bucket
  -> CloudFront distribution with OAC
  -> nithiwut.com
```

The S3 bucket must remain private. Do not enable public S3 website hosting. Keep S3 Block Public Access enabled and serve the site only through CloudFront using Origin Access Control.

## Next.js Static Export

The project uses `output: "export"` in `next.config.ts`. Production builds generate the static site in:

```bash
out/
```

Build locally:

```bash
npm run build
```

## GitHub Actions

Deployment workflow:

```bash
.github/workflows/deploy-s3.yml
```

The workflow runs on pushes to `main` and can also be started manually from GitHub Actions.

Required repository secrets:

```bash
AWS_DEPLOY_ROLE_ARN
AWS_S3_BUCKET
AWS_CLOUDFRONT_DISTRIBUTION_ID
```

The workflow uses GitHub OIDC to assume the AWS deployment role, builds the static export, syncs `out/` to S3, and optionally creates a CloudFront invalidation.

The workflow defaults to `ap-southeast-1` in `.github/workflows/deploy-s3.yml`. Change `AWS_REGION` there if the deployment bucket is in a different region.

## AWS Resource Notes

- S3 bucket: private bucket with Block Public Access enabled.
- CloudFront origin: S3 REST origin, not S3 website endpoint.
- CloudFront access: Origin Access Control attached to the S3 origin.
- CloudFront default root object: `index.html`.
- Domain: attach `nithiwut.com` to CloudFront with an ACM certificate in `us-east-1`.
- Bucket policy: allow `s3:GetObject` only from the CloudFront distribution ARN through OAC.
- GitHub OIDC role trust: restrict role assumption to this repository and the `main` branch.

Example S3 bucket policy shape:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowCloudFrontServicePrincipalReadOnly",
      "Effect": "Allow",
      "Principal": {
        "Service": "cloudfront.amazonaws.com"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*",
      "Condition": {
        "StringEquals": {
          "AWS:SourceArn": "arn:aws:cloudfront::YOUR_AWS_ACCOUNT_ID:distribution/YOUR_DISTRIBUTION_ID"
        }
      }
    }
  ]
}
```

The deployment role should have permission to sync objects to the target S3 bucket and create invalidations for the configured CloudFront distribution.

---

# Local Development

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build production:

```bash
npm run build
```

---

# Environment

```bash
Node.js >= 20
```

---

# Author

Nithiwut Wilainuch

- LinkedIn: https://linkedin.com/in/nithiwut-wilainuch-a90152179
- GitHub: https://github.com/nithiwut1997

---

# License

MIT
