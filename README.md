# AngularDemoLectures

A series of Angular demo projects built during ITI front-end training. Each lecture folder is a self-contained Angular application covering different concepts progressively.

## 📌 Status

More lectures will be added as the course progresses. Stay tuned for new content.

---

## 📂 Lectures

| Folder | Topics Covered |
|--------|---------------|
| [`lect01`](./lect01) | Angular CLI setup, Module-based project, Components (`header`, `footer`, `home`), Models (`class` & `interface`), Template syntax (`{{ }}`, `[binding]`, `@for`), Bootstrap 5, Routing setup, Signals |
| [`lect02`](./lect02) | Standalone components, Two-way binding (`[(ngModel)]`), Structural directives (`*ngFor` + `trackBy`, `*ngIf`, `ng-container`), Attribute directives (`[ngClass]`, `[ngStyle]`), New control flow (`@switch`, `@for`, `@if`), Template reference variables, Category filtering, Product cart logic |
| [`lect03`](./lect03) | Component interaction (`@Input`, `@Output`, `EventEmitter`), `ngOnChanges` lifecycle hook, Custom pipes (`SquarePipe`), Custom attribute directives (`HighlightCard`, `ElementRef`, `@HostListener`), Angular Signals (`signal`, `computed`, `effect`), Built-in pipes (`currency`, `date`), Parent–child architecture |
| [`lect04`](./lect04) | Services & Dependency Injection (`@Injectable`), Routing (`Routes`, `routerLink`, `Router.navigate`), Route Parameters (`ActivatedRoute`, `:id`), Child Routes (`children`), Redirects, Wildcard Routes (`**`) |

---

## 🛠️ Tech Stack

- **Angular 21** (Module-based / non-standalone)
- **TypeScript 5.9**
- **Bootstrap 5.3**
- **Angular Router**
- **RxJS**
- **Vitest** (unit testing)
- **Prettier** (code formatting)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Osamaelaz/AngularDemoLectures.git
cd AngularDemoLectures
```

### 2. Open a lecture folder

```bash
cd lect01   # or lect02, lect03, lect04
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
ng serve
```

Open `http://localhost:4200/` in your browser.

---

## 📚 Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- Angular CLI installed globally:

```bash
npm install -g @angular/cli
```

---

## 👤 Author

Maintained by [@Osamaelaz](https://github.com/Osamaelaz).
