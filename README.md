# NowTV React Interview

![NowTV](./logo.png)

## Commands

## Getting Started

All the required dependencies were installed using npm:

```
You can then start the app with:

```
npm start
```

And run the tests with:

```
npm test
```

## SIGN IN INSTRUCTIONS:

* Email is test@themill.com
* Password is test1234
* Using Wrong credentials will automatically fail.
* Certain components in the view are determined by the UID.

## Stacks/Library used:

* React
* Redux, Redux-thunk, Redux-immutable-state-invariant
* Styled Components
* Enzyme


## IMPROVEMENTS THAT COULD BE MADE:
 
1. Implementing Redux reselect
2. I used a stateless functional components that is directly connected to the store for simplicity. On a larger project a better approach will be to use Stateful container components that will connect directly to Redux and pass down data to presentational components via props.
4. Implement FlowTypes/Typescript in place of PropTypes.
5. Install Yarn in place of npm to conveniently do this.

## Summary 

* I didn't cater for:
1. Accessibility
2. Mobile first
3. BEM

* I also didn't pay much attention to:
1. Responsiveness: Should be responsive across multiple devices but i didn't perform any test for this.
2. Naming convention: I didn't bother much with implementing a Block-Element-Modifier approach.

## Thanks.

* By Dare Longe
