# Angular Demo Lectures — Lecture 02

A hands-on Angular demo project built during ITI front-end training. It demonstrates core Angular **directives**, **data binding**, **template syntax**, and **component interaction** using a **standalone** Angular 21 application styled with Bootstrap 5.

---

## 📚 Topics Covered

- **Two-Way Data Binding** with `[(ngModel)]` and `FormsModule`
- **Structural Directives** (legacy & new syntax)
  - `*ngFor` with `trackBy` for performance optimization
  - `*ngIf` with `else` template (`ng-template`)
  - `ng-container` — grouping elements without adding DOM nodes
  - `@for`, `@if`, `@switch` — new Angular control flow blocks
- **Attribute Directives**
  - `[ngClass]` — conditional CSS classes
  - `[ngStyle]` — inline dynamic styles
  - `[class.xxx]` — single class binding
- **Event Binding** — `(click)` for cart interactions
- **Property Binding** — `[src]`, `[value]`, `[ngClass]`, `[ngStyle]`
- **Template Reference Variables** (`#countInput`) for DOM access
- **Category Filtering** via `*ngFor` + `[(ngModel)]` select dropdown
- **Models** using TypeScript interfaces (`Iproduct`, `Icategory`)
- **Total Order Price** accumulation logic

---

## 🗂️ Project Structure

```
src/
├── app/
│   ├── Components/
│   │   ├── header/          ← app header
│   │   ├── footer/          ← app footer
│   │   └── products/        ← product listing with cart & filtering
│   ├── Models/
│   │   ├── iproduct.ts      ← Iproduct interface (id, name, price, quantity, imgUrl, catId)
│   │   └── icategory.ts     ← Icategory interface (id, name)
│   ├── app.config.ts
│   ├── app.routes.ts
│   ├── app.html
│   └── app.ts
├── index.html
├── main.ts
└── styles.css
```

--
---

## 🚀 Getting Started

### Prerequisites

- Node.js & npm installed
- Angular CLI installed globally:

```bash
npm install -g @angular/cli
```

Verify installation:

```bash
ng -v
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
ng serve
```

Open your browser to `http://localhost:4200/`. To open automatically:

```bash
ng serve --open
```

---

## 🛠️ Useful Angular CLI Commands

| Task | Command |
|------|---------|
| Create a new component | `ng g c ComponentName` |
| Create an interface | `ng g i models/InterfaceName` |
| Build for production | `ng build` |
| Run unit tests | `ng test` |

---

## 📦 Key Dependencies

| Package | Purpose |
|---------|---------|
| `@angular/core` ^21.2.0 | Angular framework |
| `@angular/forms` ^21.2.0 | `FormsModule` for `ngModel` |
| `@angular/common` ^21.2.0 | `CommonModule`, structural directives |
| `bootstrap` ^5.3.x | UI styling |
| `rxjs` ~7.8.0 | Reactive programming |
| `vitest` ^4.x | Unit testing |
| `prettier` ^3.x | Code formatting |

---

## 📝 Key Notes

- Use `CommonModule` in component imports when using `*ngFor` / `*ngIf`.
- Use `trackBy` with `*ngFor` to avoid re-rendering unchanged items.
- Cannot place two structural directives on the same element — use `<ng-container>` to wrap.
- `[ngClass]` supports conditional class switching (with an else value), unlike `[class.xxx]`.
- New Angular control flow (`@switch`, `@for`, `@if`) is preferred over legacy `*ngSwitch` / `*ngFor`.

---

## 🔗 Resources

- [Angular Documentation](https://angular.dev)
- [Angular CLI Reference](https://angular.dev/tools/cli)
- [Angular Template Syntax](https://angular.dev/guide/templates)
- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.3)
