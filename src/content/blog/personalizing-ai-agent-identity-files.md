---
title: "Personalizing Your AI Agent: SOUL.md, USER.md, IDENTITY.md"
layout: ../../layouts/MainLayout.astro
description: "How to personalize AI agent behavior with dedicated identity and user-context files in OpenClaw projects."
date: "2026-03-15"
link: "https://www.markdownguide.org/basic-syntax/"
author: "Isaac Talb"
tags: ["openclaw", "ai-agent", "identity", "context", "markdown"]
SEO: true
SEOTitle: "Personalizing Your AI Agent with SOUL.md, USER.md, and IDENTITY.md"
SEODescription: "Learn a clean file-based pattern for customizing AI agent personality, user preferences, and role identity in OpenClaw."
SEOImage: "https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg"
draft: false
---

One of the most effective ways to shape agent behavior is to separate context into purpose-specific files.

## SOUL.md

Use this for **core personality and values**:

- Tone and communication style
- Ethical boundaries
- Long-term behavior principles

Think of it as your agent’s character anchor.

## USER.md

Use this for **user preferences**:

- Writing style (short vs detailed)
- Preferred tools and workflows
- Domain-specific defaults

This file keeps output aligned to your personal way of working.

## IDENTITY.md

Use this for **role and mission definition**:

- What the agent is responsible for
- What it is not responsible for
- How success is measured

This helps avoid role drift during complex tasks.

## Recommended pattern

1. Keep each file short and intentional.
2. Avoid duplicate rules across files.
3. Review monthly as your workflow evolves.

Clear context structure leads to more consistent responses and better long-term reliability.
