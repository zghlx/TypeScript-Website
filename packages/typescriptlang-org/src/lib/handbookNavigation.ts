export interface NavItem {
  title: string
  id: string
  directory: string
  index: string
  items: { id: string; title: string; href?: string }[]
  chronological?: true
  summary: string
}
// IDs come from the filename

// prettier-ignore
export const handbookNavigation: NavItem[] = [
  {
    title: "Get Started",
    summary: "Quick introductions based on your background or preference.",
    id: "get-started",
    directory: "handbook",
    index: "typescript-from-scratch",
    items: [
      { id: "typescript-from-scratch", title: "TS for the New Programmer" },
      { id: "typescript-in-5-minutes", title: "TS for JS Programmers" },
      { id: "typescript-in-5-minutes-oop", title: "TS for OOP Programmers " },
      { id: "typescript-in-5-minutes-func",  title: "TS for Functional Programmers" },
      { id: "typescript-tooling-in-5-minutes", title: "Tooling in 5 minutes" },
    ],
  },
  {
    title: "Handbook",
    summary: "A good first read for your daily TS work.",
    id: "handbook",
    directory: "handbook",
    chronological: true,
    index: "/",
    items: [
      { id: "intro", title: "What is the Handbook?" },
      { id: "basic-types", title: "Basic Types" },
      { id: "interfaces", title: "Interfaces" },
      { id: "functions", title: "Functions" },
      { id: "literal-types", title: "Literal Types" },
      { id: "unions-and-intersections", title: "Unions and Intersections" },
      { id: "classes", title: "Classes" },
      { id: "enums", title: "Enums" },
      { id: "generics", title: "Generics" },
    ],
  },
  {
    title: "Handbook Reference",
    summary: "Deep dive reference materials.",

    id: "handbook-reference",
    directory: "handbook",
    index: "the-handbook",
    items: [
      { id: "advanced-types", title: "Advanced Types" },
      { id: "declaration-merging", title: "Declaration Merging" },
      { id: "decorators", title: "Decorators" },
      { id: "utility-types", title: "Global Utility Types" },
      { id: "iterators-and-generators", title: "Iterators and Generators" },
      { id: "jsx", title: "JSX" },
      { id: "mixins", title: "Mixins" },
      { id: "modules", title: "Modules" },
      { id: "module-resolution", title: "Module Resolution" },
      { id: "namespaces", title: "Namespaces" },
      { id: "namespaces-and-modules", title: "Namespaces and Modules" },
      { id: "symbols", title: "Symbols" },
      { id: "triple-slash-directives", title: "Triple-Slash Directives" },
      { id: "type-compatibility", title: "Type Compatibility" },
      { id: "type-inference", title: "Type Inference" },
      { id: "dom-manipulation", title: "TypeScript & the DOM" },
      { id: "variable-declarations", title: "Variable Declarations" },
    ],
  },
  {
    title: "Tutorials",
    id: "tutorials",
    directory: "handbook",
    index: "typescript-in-5-minutes",
    summary: "Using TypeScript in several environments.",
    items: [
      { id: "asp-net-core", title: "ASP.NET Core" },
      { id: "gulp", title: "Gulp" },
      { id: "migrating-from-javascript", title: "Migrating from JavaScript" },
      { id: "babel-with-typescript", title: "Using Babel with TypeScript" },
    ],
  },
  {
    title: "What's New",
    id: "whats-new",
    directory: "handbook/release-notes",
    index: "overview",
    summary:
      "Find out how TypeScript has evolved and what's new in the releases.",
    items: [
      { id: "overview", title: "Overview" },
      { id: "typescript-3-9", title: "TypeScript 3.9" },
      { id: "typescript-3-8", title: "TypeScript 3.8" },
      { id: "typescript-3-7", title: "TypeScript 3.7" },
      { id: "typescript-3-6", title: "TypeScript 3.6" },
      { id: "typescript-3-5", title: "TypeScript 3.5" },
      { id: "typescript-3-4", title: "TypeScript 3.4" },
      { id: "typescript-3-3", title: "TypeScript 3.3" },
      { id: "typescript-3-2", title: "TypeScript 3.2" },
      { id: "typescript-3-1", title: "TypeScript 3.1" },
      { id: "typescript-3-0", title: "TypeScript 3.0" },
      { id: "typescript-2-9", title: "TypeScript 2.9" },
      { id: "typescript-2-8", title: "TypeScript 2.8" },
      { id: "typescript-2-7", title: "TypeScript 2.7" },
      { id: "typescript-2-6", title: "TypeScript 2.6" },
      { id: "typescript-2-5", title: "TypeScript 2.5" },
      { id: "typescript-2-4", title: "TypeScript 2.4" },
      { id: "typescript-2-3", title: "TypeScript 2.3" },
      { id: "typescript-2-2", title: "TypeScript 2.2" },
      { id: "typescript-2-1", title: "TypeScript 2.1" },
      { id: "typescript-2-0", title: "TypeScript 2.0" },
      { id: "typescript-1-8", title: "TypeScript 1.8" },
      { id: "typescript-1-7", title: "TypeScript 1.7" },
      { id: "typescript-1-6", title: "TypeScript 1.6" },
      { id: "typescript-1-5", title: "TypeScript 1.5" },
      { id: "typescript-1-4", title: "TypeScript 1.4" },
      { id: "typescript-1-3", title: "TypeScript 1.3" },
      { id: "typescript-1-1", title: "TypeScript 1.1" },
    ],
  },
  {
    title: "Declaration Files",
    id: "declaration-files",
    summary:
      "Learn how to write declaration files to describe existing JavaScript. Important for DefinitelyTyped contributions.",
    directory: "handbook/declaration-files",
    index: "introduction",
    chronological: true,
    items: [
      { id: "introduction", title: "Introduction" },
      { id: "by-example", title: "By Example" },
      { id: "do-s-and-don-ts", title: "Do's and Don'ts" },
      { id: "deep-dive", title: "Deep Dive" },
      { id: "library-structures", title: "Library Structures" },
      { id: "templates", title: "Templates" },
      {
        id: "global-plugin-d-ts",
        title: "Template: Global Module",
        href: "/docs/handbook/declaration-files/templates/global-plugin-d-ts.html",
      },
      {
        id: "global-modifying-module-d-ts",
        title: "Template: Global Extends",
        href: "/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html",
      },
      {
        id: "module-d-ts",
        title: "Template: Module",
        href: "/docs/handbook/declaration-files/templates/module-d-ts.html",
      },
      {
        id: "module-plugin-d-ts",
        title: "Template: Plugin",
        href: "/docs/handbook/declaration-files/templates/module-plugin-d-ts.html",
      },
      {
        id: "module-class-d-ts",
        title: "Template: Class",
        href: "/docs/handbook/declaration-files/templates/module-class-d-ts.html",
      },
      {
        id: "module-function-d-ts",
        title: "Template: Function",
        href: "/docs/handbook/declaration-files/templates/module-function-d-ts.html",
      },
      { id: "publishing", title: "Publishing" },
      { id: "consumption", title: "Consumption" },
    ],
  },
  {
    title: "JavaScript",
    id: "javascript",
    summary: "How to use TypeScript-powered JavaScript tooling.",
    directory: "handbook",
    index: "introduction",
    chronological: true,
    items: [
      {
        title: "JS Projects Utilizing TS",
        id: "intro-to-js-ts",
      },
      {
        title: "How TS Type Checks JS",
        id: "type-checking-javascript-files",
      },
      { id: "jsdoc-supported-types", title: "JSDoc Reference" },
      { id: "dts-from-js", title: "DTS files from JS files", href: "/docs/handbook/declaration-files/dts-from-js.html"  },
    ],
  },
  {
    title: "Project Configuration",
    id: "project-config",
    summary: "Compiler configuration reference.",
    directory: "handbook",
    index: "compiler-options",
    items: [
      {
        id: "tsconfig-references",
        href: "/tsconfig",
        title: "TSConfig Reference",
      },
      { id: "tsconfig-json", title: "The tsconfig.json" },
      { id: "compiler-options", title: "CLI Options" },
      { id: "project-references", title: "Project References" },
      {
        id: "compiler-options-in-msbuild",
        title: "Compiler Options in MSBuild",
      },
      {
        id: "integrating-with-build-tools",
        title: "Integrating with Build Tools",
      },
      { id: "configuring-watch", title: "Configuring Watch Mode" },
      { id: "nightly-builds", title: "Nightly Builds" },
    ],
  },
]

export function getNextPageID(currentID: string) {
  // prettier-ignore
  const section = handbookNavigation.find((nav) => nav.items.find((i) => i.id === currentID))
  if (!section) return undefined
  if (!section.chronological) return undefined

  const currentIndex = section.items.findIndex(i => i.id === currentID)
  const next = section.items[currentIndex + 1]
  if (next) {
    return {
      // prettier-ignore
      path: `/docs/${section.directory}/${next.href || next.id}.html`,
      ...section.items[currentIndex + 1],
    }
  }
}

export function getPreviousPageID(currentID: string) {
  const section = handbookNavigation.find(nav =>
    nav.items.find(i => i.id === currentID)
  )

  if (!section) return undefined
  if (!section.chronological) return undefined

  const currentIndex = section.items.findIndex(i => i.id === currentID)
  const prev = section.items[currentIndex - 1]

  if (prev) {
    return {
      // prettier-ignore
      path: `/docs/${section.directory}/${prev.href || prev.id}.html`,
      ...section.items[currentIndex - 1],
    }
  }
}
