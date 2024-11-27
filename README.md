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


# useEffect()
useEffect are use to handle the side effect of the component. useEffect also use fro fetching APIs data. useEffect always work after render the component. useEffect comes from react library. use Effect takes tow arguments 
      1. Callback function
      2. Array Dependencies
    Syntax:
    useEffect(()=>{
      <!-- This is callback function -->
    },[/*Dependencies*/])
It's work three types. 
  1. When in the useEffect will not pass square bracket then then when in the component any state will change then again useEffec will execute. 
  2. If use empty square bracket then Only once useEffect will execute during the whole component render. When states value will change then useEffec will not execute everytime. when first time execute.
  3. useEffect also again execute when I paas any dependencies in the square bracket. according to dependency paas. when dependency satte will change then useEffect will execute again. 
  4. When I use return keyword in the useEffect callback function body then return means before execute first delete previous state value then initiate new state value. 

# useState:
useState are use to create local variable inside functional component. useState always use inside the component. Can't be use Outside of the component. useState should not be work inside the condition if-else statement and for loop or any loop and also should not be use in the function. e.g. function sum(const[a,setA]=useState()). It will give error.
  Syntax:
  const[value,setValue]=useState();

  # There are 2 type of the routing 
  - Client side Routing
  - Server side Routing

  # Performace increase using this concept
    - Chunking
    - Code spliting 
    - Dynamic bundling
    - lazy loading
    - on demand loading
    - Dynamic importing