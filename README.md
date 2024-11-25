# Namaste React

# Parcel

- Dev Build
- Local Server
- HMR Hot Module Replarement
- File Watching Algorithm - Written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Building - Support Older Browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - Remove unused code
- Different dev and production bundles

# Food Applications Structure

/\*

- Header
  - Logo
  - Nav Item
- Body
  - Search
  - Restaurant Container
    - Restaurant Cards
      - Image
      - Name of Res, Star Rating, Cuisine, Delivery Time
- Footer
  - Copyright
  - Link
  - Address
  - Contact
    \*/

Two type of Export/Import

- Default Export/Import

export default Component
import Component from "./"

export const name="any type of data";
export const name1 = "Any Type of Data"

import {name} from "./";
import {name1} from "./";

# React Hooks

They are normal JS functions
There are two very important React hooks
1 - useState() This is super powerful State variable.[Before use this I have to import useState from React. How I have to import it using named import from React Like as] import {useState} from "react";
// useState Hook is used to create state variables in functional components
// It takes an initial value as an argument and returns an array with two elements:
// 1. The current state value
// 2. A function to update the state value
// useState(initialValue)
// const [data, setData] = useState([]);
2 - useEffect()
