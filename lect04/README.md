# Lecture 4: Services & Routing

This project demonstrates **Angular Services** for data sharing and **Angular Router** for navigation in a Single Page Application (SPA).

## 📌 Key Concepts

- **Services & Dependency Injection**:
  - Creating a service (`ng g s Services/StaticProducts`)
  - Using `@Injectable({ providedIn: 'root' })`
  - Injecting services into components (`constructor(private _staticProducts: StaticProducts)`)

- **Angular Routing**:
  - Configuring routes in `app.routes.ts`
  - Navigation using `routerLink` directive and `Router.navigate()`
  - **Route Parameters**: Accessing dynamic segments (e.g., `details/:id`) using `ActivatedRoute`
  - **Child Routes**: Nested routing (e.g., `AboutUs/Vision`, `AboutUs/Values`)
  - **Redirects**: Redirecting default paths (`redirectTo`)
  - **Wildcard Routes**: Handling 404 Not Found (`**`)
  - Programmatic navigation (`router.navigateByUrl`, `router.navigate`)

## 🛠️ Components

- **Home**: Landing page.
- **Products**: Lists products fetched from `StaticProducts` service.
- **Details**: Displays product details based on route parameter ID.
- **AboutUs**: Parent component with child routes (`Vision`, `Values`).
- **NotFound**: Fallback for invalid URLs.

## 🚀 Running the App

Run `ng serve` and navigate to `http://localhost:4200/`.
Try navigating to `/Products`, `/Details/100`, or `/AboutUs/Vision`.













