# Angular Demo Lectures — Lecture 01

A hands-on Angular demo project built during ITI front-end training. It demonstrates core Angular concepts using a **Module-based** (non-standalone) Angular 21 application styled with Bootstrap 5.

---

## 📚 Topics Covered

- Setting up an Angular project with Angular CLI (module-based)
- Creating and organizing **Components** (`header`, `footer`, `home`)
- Defining **Models** using TypeScript `class` and `interface`
  - `Student` class — `id`, `name`, `age`, `grade`
  - `IStore` interface — `name`, `imgUrl`, `branches[]`
- Angular **Template Syntax**
  - Interpolation `{{ }}`
  - Property binding `[src]`
  - `@for` control flow block
- Styling with **Bootstrap 5** (cards, tables, badges, list groups)
- Angular **Routing** setup (`AppRoutingModule`)
- Angular **Signals** (`signal()`) for reactive state

---

## 🗂️ Project Structure

```
src/
├── app/
│   ├── Components/
│   │   ├── header/
│   │   ├── footer/
│   │   └── home/          ← displays Store card + Students table
│   ├── Models/
│   │   ├── student.ts     ← Student class
│   │   └── istore.ts      ← IStore interface
│   ├── app-module.ts
│   ├── app-routing-module.ts
│   └── app.ts
├── index.html
├── main.ts
└── styles.css
```

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

Open your browser at `http://localhost:4200/`. To use a different port:

```bash
ng serve --port 4201
```

---

## 🛠️ Useful Angular CLI Commands

| Task | Command |
|------|---------|
| Create a new component | `ng g c ComponentName` |
| Create a class (model) | `ng g class models/ClassName` |
| Create an interface | `ng g i models/InterfaceName` |
| Build for production | `ng build` |
| Run unit tests | `ng test` |

---

## 📦 Key Dependencies

| Package | Purpose |
|---------|---------|
| `@angular/core` ^21.2.0 | Angular framework |
| `bootstrap` ^5.3.8 | UI styling |
| `@angular/router` ^21.2.0 | Client-side routing |
| `rxjs` ~7.8.0 | Reactive programming |
| `vitest` ^4.0.8 | Unit testing |
| `prettier` ^3.8.1 | Code formatting |

---

## 🔗 Resources

- [Angular Documentation](https://angular.dev)
- [Angular CLI Reference](https://angular.dev/tools/cli)
- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.3)
- [ngx-bootstrap](https://valor-software.com/ngx-bootstrap)
- [Angular Material](https://material.angular.io)
