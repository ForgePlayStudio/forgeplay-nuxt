# GitHub Copilot Instructions for ForgePlay Nuxt Codebase

Welcome to the ForgePlay Nuxt codebase! This document provides guidance for GitHub Copilot to generate code that matches the project's conventions, structure, and best practices.

---

## General Guidelines

- **Framework:** Use Nuxt 4 with TypeScript and Vue 3 Composition API.
- **Styling:** Use Tailwind CSS 4, and custom utility classes. Prefer `@apply` for utility classes in CSS.
- **Components:** Place new components in the appropriate `/app/components/` subfolder. Use PascalCase for component names.
- **Props:** Use TypeScript interfaces for props in components.
- **Content:** Game and person data are stored in `/content/games/*.md` and `/content/person/*.yml` respectively.
- **Routing:** Pages are in `/app/pages/` and follow Nuxt file-based routing.
- **Assets:** Store images and static files in or `/public/`.

---

## Vue Component Conventions

- Use `<script lang="ts" setup>` and `<template>`.
- Use `defineProps` and `withDefaults` for props.
- Use `<style scoped>` for component styles.
- Use `NuxtLink` for internal navigation and `NuxtImg` for images.
- Use slots for flexible content insertion.

---

## CSS & Design

- Use variables from `/app/assets/css/main.css` for colors and spacing.
- Prefer `--color-foreground` and `--color-background` for text and background colors.
- Prefer `--color-yellow` and `--color-orange` for accent colors.
- Use `--color-neutral-*` and `--color-brown-*` for secondary background colors.
- Use utility classes and custom classes defined in `/app/assets/css/components.css` and `/app/assets/css/typography.css`.
- For buttons, use the `.btn` class and its variants.
- For cards, use the `.card` class and its variants.

---

## Content & Data

- Game metadata is in Markdown frontmatter in `/content/games/`.
- Person/team metadata is in YAML in `/content/person/`.
- Use Nuxt Content module to query and display content.

---
