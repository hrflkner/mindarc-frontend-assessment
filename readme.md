# Layout Challenge (Task 1)

The design was copied and a live demo is available on firebase here:

## Tab Index and Accordion Task 2

Both are available at the same Firebase site.

## Task 3

`('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana` due to a parsing error. Those double plus causes the second plus to be treated as a unary operator. Since 'a' is not a number, the unary operation return NaN for not a number.

## Framerwork and Packages:

create-react-app with TypeScript

-   styled-components
-   framer-motion
-   firebase
    * hosting
    * automated redeploys w/ Github Actions (Redeploys on 'git push' to remote)
