// Below is a **single summary file** that gathers everything we discussed about **`ViewChild`, `ViewChildren`, `Renderer2`, `static:true` vs `static:false`, and lifecycle usage** with clear examples.

// You can keep it as **Angular-notes.ts** or as study notes.

// ---

// # Angular ViewChild & Renderer2 — Summary

// ## 1. What is `@ViewChild`

// `@ViewChild` allows a component to **get access to an element or child component inside its template**.

// Basic syntax:

// ```ts
// @ViewChild(selector, options) property!: Type;
// ```

// Example:

// ```ts
// @ViewChild('myInput') input!: ElementRef;
// ```

// HTML:

// ```html
// <input #myInput type="text">
// <button (click)="focus()">Focus</button>
// ```

// TS:

// ```ts
// focus(){
//  this.input.nativeElement.focus();
// }
// ```

// Result: the input gets focus.

// ---

// # 2. `static:true` vs `static:false`

// Angular needs to know **when to resolve ViewChild**.

// ### static:true

// Angular resolves the element **before change detection**.

// You can use it in:

// ```
// ngOnInit()
// ```

// Example:

// ```ts
// @ViewChild('myInput',{static:true}) input!:ElementRef;

// ngOnInit(){
//  console.log(this.input);
// }
// ```

// ---

// ### static:false (default)

// Angular resolves the element **after the view is initialized**.

// You must use:

// ```
// ngAfterViewInit()
// ```

// Example:

// ```ts
// @ViewChild('myInput',{static:false}) input!:ElementRef;

// ngAfterViewInit(){
//  console.log(this.input);
// }
// ```

// ---

// # 3. Angular Lifecycle Order

// ```
// constructor
// ngOnInit
// ngAfterContentInit
// ngAfterViewInit
// ```

// Availability:

// | option       | available in    |
// | ------------ | --------------- |
// | static:true  | ngOnInit        |
// | static:false | ngAfterViewInit |

// ---

// # 4. What happens if lifecycle is wrong?

// Example:

// ```ts
// @ViewChild('myInput',{static:false}) input!:ElementRef;

// ngOnInit(){
//  console.log(this.input);
// }
// ```

// Result:

// ```
// undefined
// ```

// Because Angular hasn't built the view yet.

// Correct version:

// ```ts
// ngAfterViewInit(){
//  console.log(this.input);
// }
// ```

// ---

// # 5. When to use `static:false`

// When the element is inside:

// ```
// *ngIf
// *ngFor
// ```

// Example:

// HTML:

// ```html
// <input *ngIf="showInput" #myInput>
// ```

// TS:

// ```ts
// @ViewChild('myInput',{static:false}) input!:ElementRef;
// ```

// ---

// # 6. Accessing Child Components

// `ViewChild` can also access a **child component**.

// Child component:

// ```ts
// @Component({
//  selector:'app-child',
//  template:`<p>Child component</p>`
// })
// export class ChildComponent{

//  sayHello(){
//   console.log("Hello from child");
//  }

// }
// ```

// Parent HTML:

// ```html
// <app-child></app-child>
// <button (click)="callChild()">Call Child</button>
// ```

// Parent TS:

// ```ts
// @ViewChild(ChildComponent) child!:ChildComponent;

// callChild(){
//  this.child.sayHello();
// }
// ```

// ---

// # 7. `@ViewChildren`

// Used to get **multiple elements**.

// Example:

// HTML:

// ```html
// <ul>
//  <li #item>Angular</li>
//  <li #item>React</li>
//  <li #item>Vue</li>
// </ul>
// ```

// TS:

// ```ts
// @ViewChildren('item') items!:QueryList<ElementRef>;

// printItems(){
//  this.items.forEach(item=>{
//   console.log(item.nativeElement.textContent);
//  });
// }
// ```

// Output:

// ```
// Angular
// React
// Vue
// ```

// ---

// # 8. `Renderer2`

// `Renderer2` is Angular's **safe way to manipulate the DOM**.

// Instead of:

// ```ts
// this.input.nativeElement.style.color="red";
// ```

// Angular prefers:

// ```ts
// this.renderer.setStyle(this.input.nativeElement,"color","red");
// ```

// Reason:

// * works with server-side rendering
// * works in different environments
// * safer DOM manipulation

// ---

// # 9. Renderer2 Example

// HTML:

// ```html
// <p #text>Hello Angular</p>
// <button (click)="changeColor()">Change Color</button>
// ```

// TS:

// ```ts
// @ViewChild('text') text!:ElementRef;

// constructor(private renderer:Renderer2){}

// changeColor(){
//  this.renderer.setStyle(
//   this.text.nativeElement,
//   'color',
//   'red'
//  );
// }
// ```

// ---

// # 10. Creating Elements with Renderer2

// HTML:

// ```html
// <div #container></div>
// <button (click)="addElement()">Add</button>
// ```

// TS:

// ```ts
// @ViewChild('container') container!:ElementRef;

// constructor(private renderer:Renderer2){}

// addElement(){

//  const div=this.renderer.createElement('div');
//  const text=this.renderer.createText('New Element');

//  this.renderer.appendChild(div,text);
//  this.renderer.appendChild(this.container.nativeElement,div);

// }
// ```

// ---

// # 11. Renderer2 Useful Methods

// | method        | use             |
// | ------------- | --------------- |
// | setStyle      | change CSS      |
// | removeStyle   | remove CSS      |
// | addClass      | add class       |
// | removeClass   | remove class    |
// | setProperty   | change property |
// | createElement | create element  |
// | appendChild   | add element     |
// | listen        | event listener  |

// Example:

// ```ts
// this.renderer.listen(
//  element,
//  'click',
//  ()=>console.log("clicked")
// );
// ```

// ---

// # 12. Quick Comparison

// | feature      | purpose                       |
// | ------------ | ----------------------------- |
// | ViewChild    | get one element/component     |
// | ViewChildren | get multiple elements         |
// | ElementRef   | direct DOM access             |
// | Renderer2    | Angular safe DOM manipulation |

// ---

// # Final Simple Rule

// Use:

// ```
// ViewChild
// ```

// to **access template elements**.

// Use:

// ```
// Renderer2
// ```

// to **safely manipulate the DOM**.

// Use:

// ```
// static:true
// ```

// if the element is always in the template.

// Use:

// ```
// static:false
// ```

// if the element may appear dynamically (`*ngIf`).

// ---

// If you want, I can also make a **visual diagram cheat sheet of Angular lifecycle + ViewChild timing** that makes this topic **10× easier to remember**.
