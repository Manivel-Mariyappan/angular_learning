# Angular Components

## Key Elements of Angular Components

Angular components are essential building blocks in Angular applications. They must include the following elements:

1. **TypeScript Class**
   - Handles user input.
   - Fetches data from a server.

2. **HTML Template**
   - Defines what renders into the DOM.

3. **Selector**
   - Defines how the component is used in HTML.

Example of a component using the `@Component` decorator:
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-photo',
  templateUrl: './profile-photo.component.html',
  styleUrls: ['./profile-photo.component.css']
})
export class ProfilePhotoComponent {
  // Component logic here
}
```

---

## Types of Selectors

1. **Type Selector**
   - Example: `profile-photo`
2. **Attribute Selector**
   - Example: `[dropzone]`, `[type="reset"]`
3. **Class Selector**
   - Example: `.menu-item`

---

## Component Styling

### Ways to Add Styles
1. **styleUrl**
   - Points to a single external stylesheet.
   - Example:
     ```typescript
     styleUrls: ['./styles.css']
     ```

2. **styleUrls**
   - Points to multiple external stylesheets.
   - Example:
     ```typescript
     styleUrls: ['./styles1.css', './styles2.css']
     ```

3. **styles**
   - Defines inline styles directly in the component.
   - Example:
     ```typescript
     styles: [
       `h1 { color: red; }`
     ]
     ```

---

### View Encapsulation

Angular provides encapsulation modes to control whether styles affect other components.

```typescript
enum ViewEncapsulation {
  Emulated: ViewEncapsulation.Emulated;
  None: ViewEncapsulation.None;
  ShadowDom: ViewEncapsulation.ShadowDom;
}
```

#### Encapsulation Modes

1. **Emulated** (Default)
   - Styles only apply to elements defined in the component's template.
   - Styles do not leak out and affect other components.

2. **None**
   - Acts as a global stylesheet, allowing styles to affect all components.

3. **ShadowDom**
   - Implements the Shadow DOM standard.
   - Styles are scoped to the component and do not affect the regular DOM.

---

## DOM and Shadow DOM

### What is Shadow DOM?
Shadow DOM is a hidden DOM tree attached to elements in the regular DOM. It allows for encapsulated styles and markup.

#### Features:
- Shadow DOM elements aren't affected by global CSS.
- CSS in the shadow root won't affect the regular DOM.
- Shadow DOM works by attaching a hidden, separate DOM to an element, known as the **Shadow DOM**, with the host element being the **Shadow Host**.

### Pseudo-Class `:host`
The `:host` pseudo-class is used to apply CSS to the shadow DOM host element.

---

## References
- [Angular Documentation on Components](https://angular.dev/api/core/Component)
- [Angular View Encapsulation](https://www.tektutorialshub.com/angular/angular-view-encapsulation/)

