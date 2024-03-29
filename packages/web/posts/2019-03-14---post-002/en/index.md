---
title: "How to Fetch Dribbble Shots Using React Hooks"
slug: "Fetch Dribbble Shots Using React Hooks"
date: "2019-03-14"
category: "blog"
intro: "When I was designing my portfolio site, I wanted to import all the work I had published on Dribbble, so that I could have everything in one place.
|
I could have manually added the designs on the website, but I wanted to have an automated solution.
|
So that’s exactly what you’ll learn in this article. 
|
How I used the Dribbble V2 API, Axios and React Hooks to import all my work from Dribbble into my portfolio static site made with Gatsby.js."
snippet: "How I imported my designs published on Dribbble into my Gatsby.js portfolio static site by using the Dribbble V2 API, Axios and React Hooks."
tags:
    - gatsby.js
    - react hooks
    - dribbble
posted: true
locale: "en"
twinPost: "Importar Diseños de Dribbble con React Hooks"
---

import Image from "components/Image/Image";

## Registering a New Dribbble App

Before you can start making requests from the Dribbble V2 API, you need to
register your app.

For that, you will need to follow these steps —I’m assuming you already have a
Dribbble account.

1. Open up your Dribbble **account settings** page
2. Click on **Applications**
3. Under **Developers**, click on _Register a new application_

Now you should be able to add your own information, similar to how I did it in
this example:

<Image
  src="2019-03-14---post-002/en/register_app_with_dribbble.png"
  caption="Dribbble screen in which you can register your new app."
  expand
/>

#### The most important parts here are:

- The **Callback URL**. Is your sites’ URL which you should type including the
  `https://` part, otherwise you’ll get an error.
- The **Client ID** and **Client Secret**. You’ll need them to be able to make a
  POST request, in order to get an access token.

### Getting a Dribbble Access Code

The next thing you’ll need is a `CLIENT_ID`. To get yours, open a new tab in
your browser and enter the following URL:

```js
https://dribbble.com/oauth/authorize?client_id=CLIENT_ID
```

- `CLIENT_ID` is the _id_ from the previous step.

For the app I’m using in this tutorial it’s:

```js
https://dribbble.com/oauth/authorize?client_id=e9e05f3...
```

Click on _Authorize_ to authorize your new app.

<Image
  src="2019-03-14---post-002/en/authorize_app_with_dribbble.png"
  caption="Dribbble screen in which you can authorize your app."
  expand
/>

Once you’ve authorized it, you will be redirected to a page with an URL similar
to this one:

```js
http://callback_url?code=5asdas892aas8dh8as9d9ashd
```

The `callback_url` is the URL you’ve entered in your Dribbble admin panel. The
important part here is to copy the long code `5asdas892aas8dh8as9d9ashd`, which
you’ll need for the next step.

In order to get the access token, I used Postman —if you need to install it you
can [follow this link](https://www.getpostman.com/downloads/)— so that I can
make a POST request to the following Dribbble URL:

```js
https://dribbble.com/oauth/token?client_id=CLIENT_ID&client_secret=CLIENT_SECRET&code=URL_CODE
```

This will give you the access token you need to be able to make requests to
Dribbbles’s V2 API.

#### The most important parts here are:

- **CLIENT_ID**: is the client id from the Dribbble account page (look at the
  first screenshot in this tutorial).
- **CLIENT_SECRET**: is the client secret from the Dribbble account page (look
  at the first screenshot).
- **URL_CODE**: is the code you get after you visit the URL with the
  `callback_url` of your site.

### Making a POST Request With Postman

In order to be able to make a POST request with Postman, you need to follow
these steps:

1. Open up Postman
2. Make a new `POST` **Request**
3. Use the URL from the previous step with your `CLIENT_ID`, `CLIENT_SECRET` and
   `URL_CODE`

Now you should receive a JSON response similar to this one:

```json
{
  "access_token": "d8ashd98ashd9a8hsd9ah98dsadsh98ahsd9a8sda",
  "token_type": "bearer",
  "scope": "public",
  "created_at": 1231233453
}
```

If it doesn’t work, and instead you receive this response —or any response
containing an error:

```json
{
  "error": "invalid_grant",
  "error_description": "The provided authorization grant is invalid, expired, revoked, does not match the redirection URI used in the authorization request, or was issued to another client."
}
```

You should start over and get a new code.

When I was trying to register mine, I wasn’t able to get the access token and I
kept getting this error. After searching for a solution, I found this
[help page from the Dribbble API docs](https://developer.dribbble.com/v1/oauth/)
in which they explain what you can do in case you get an error response from the
API.

If everything went fine, you should now have your access token which you can use
to send requests to Dribbble’s V2 API 🎉.

## Making Async Requests With React Hooks

In order to be able to send requests to the API, I decided to use React Hooks.
If you don’t want to use hooks, you can
[read this article](https://matthewelsom.com/blog/display-shots-on-webpage-with-dribbble-v2-api.html)
in which you can learn how to send requests to Dribbble’s API using ajax.

Using React Hooks to fetch data from an API is pretty easy. But you should learn
how they work first.

It’s **really** easy to enter an infinite loop of data fetching that will reach
the API’s limit in a second.

You should be particularly careful if your API is a paid service like Firebase
or AWS.

But don’t worry, I’ll explain how you can avoid running into that later on.

In order to get started you will need the following:

- **React v16.8** or newer installed (so that you can use hooks).
- **[Axios](https://github.com/axios/axios)** for making requests to Dribbble’s
  V2 API.
- **The Dribbble access token** you got from the the previous steps in this
  tutorial.

Before you continue, I recommend you to read the guide on
[how to use hooks](https://overreacted.io/a-complete-guide-to-useeffect/) from
Dan Abramov, and
[this article](https://www.robinwieruch.de/react-hooks-fetch-data/) from Robin
Wieruch in which he explains some of the techniques I used in this tutorial,
among others.

Although mine is based on Robin’s article, I did change it quite a bit, so that
I can render placeholder elements, besides spinners as loading indicators, while
the data is being fetched.

But first, let’s start with fetching the shots from Dribbble.

### The Dribbble V2 API Endpoint

In order to fetch your own shots from Dribbble, you will need to access the
following endpoint:

```js
https://api.dribbble.com/v2/user/shots?access_token=ACCESS_TOKEN&page=1&per_page=4
```

**Where:**

- `ACCESS_TOKEN`: is the token you got after following the first steps in this
  article.
- `&page=1`: this part isn’t really necessary, I’m using for pagination, more on
  that later.
- `&per_page=4`: same thing, not necessary, I’m only using it for pagination,
  keep reading or skip it if you don’t need it.

### Fetching Data With Axios

For this tutorial I used axios, which you can install with `npm install axios`.

```jsx{9,10,13}
const [isLoading, setIsLoading] = React.useState(true);
const [isError, setIsError] = React.useState(false);
const [dribbblePage, setDribbblePage] = React.useState(1);
const [dribbblePosts, setDribbblePosts] = React.useState([]);

React.useEffect(() => {
  async function getDribbblePosts() {
    try {
      const dribbbleRes = await axios.get(
        `https://api.dribbble.com/v2/user/shots?access_token=${GATSBY_DRIBBBLE_TOKEN}&page=${dribbblePage}&per_page=${SHOTS_PER_PAGE}`,
      );

      setDribbblePosts([...dribbblePosts, ...dribbbleRes.data]);

      if (isLoading) setIsLoading(false);
    } catch (error) {
      console.warn(error);
      if (isLoading) setIsLoading(false);
      setIsError(true);
    }
  }

  getDribbblePosts();
}, [dribbblePosts, dribbblePage, isLoading, isError]);
```

#### So let’s see what this gets us so far:

- First, I use `async await` to fetch the data, which is stored using the
  `setState` hook in the `dribbblePosts` array.
- The `isLoading` state variable is used to render a loading indicator, spinner
  in most cases, while the data is being fetched. It’s initially set to `true`,
  and then set to `false` once we get a response from `await`.
- The entire request is wrapped inside a `Try...Catch` block to handle any
  errors that might be returned.

You can see I’m also destructuring the previous state in the `dribbblePosts`
array, because `setState()` doesn’t merge the previous state values as it
happens when using classes.

I’m destructuring the previous values plus the new ones so that I can merge the
posts from the previous requests with the new data from the incoming requests.

When a user clicks on the _Load More_ button to fetch more posts, a new network
request is made, which will fetch more shots.

So far, so good.

But if you try to run the code it will enter an infinite loop and the Dribbble
API will give you a `429 Too Many Requests` error.

You’ll also get a memory leak if you navigate to another page from where the
component is rendered before the state is set.

Since the data is being fetched asynchronously using `async await` if you
navigate to a different page before it resolves, React will try to save the data
in a state variable of a component that has been unmounted and it will throw
this error:

```js
index.js:2177 Warning: Can’t perform a React state update on an unmounted component.
This is a no-op, but it indicates a memory leak in your application.
To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
```

So let’s see how to fix these issues.

### Avoid Making Requests on Each Render

Basically, the loop happens because each time `state` is changed in React, it
triggers a new render. Then on each render, a new request will be made, which
changes `state` again, which causes a new render, and so on...

One solution would be to simply add an empty array as a dependency of the
`useEffect()` hook, so that it only runs on the first render. However, in my
case it wouldn’t work, because I’m changing the state again with:

```jsx
if (isLoading) setIsLoading(false);
```

```jsx{9,13,15,18}
const [isLoading, setIsLoading] = React.useState(true);
const [isError, setIsError] = React.useState(false);
const [dribbblePage, setDribbblePage] = React.useState(1);
const [dribbblePosts, setDribbblePosts] = React.useState([]);

React.useEffect(() => {
  async function getDribbblePosts() {
    try {
      const dribbbleRes = await axios.get(
        `https://api.dribbble.com/v2/user/shots?access_token=${GATSBY_DRIBBBLE_TOKEN}&page=${dribbblePage}&per_page=${SHOTS_PER_PAGE}`,
      );

      setDribbblePosts([...dribbblePosts, ...dribbbleRes.data]);

      if (isLoading) setIsLoading(false);
    } catch (error) {
      console.warn(error);
      if (isLoading) setIsLoading(false);
      setIsError(true);
    }
  }

  getDribbblePosts();
}, []);
```

This happens because the first time the component renders, the request will be
made and the response from the API will be stored in the `dribbblePosts` array,
which will trigger a render when state is changed.

Then on the second render, the `dribbblePosts` will have the data stored inside,
but the API call will run again since there’s nothing preventing it from
executing.

Then the response is stored again in state, which triggers a new render.

The same thing will happen once `setIsLoading(false)` is executed. State will
change again, a new render will be triggered, and a new API call will be made.

And you’ve probably noticed that this is the perfect recipe for an infinite
loop, which will give you a `429 Too Many Calls` error.

In my case the solution was pretty simple, I just wrapped `axios.get()` with an
if statement.

```jsx{3,10,15,22,29}
const [isLoading, setIsLoading] = React.useState(true);
const [isError, setIsError] = React.useState(false);
const [postsFetched, setPostsFetched] = React.useState(false);
const [dribbblePage, setDribbblePage] = React.useState(1);
const [dribbblePosts, setDribbblePosts] = React.useState([]);

React.useEffect(() => {
  async function getDribbblePosts() {
    try {
      if (!postsFetched) {
        const dribbbleRes = await axios.get(
          `https://api.dribbble.com/v2/user/shots?access_token=${GATSBY_DRIBBBLE_TOKEN}&page=${dribbblePage}&per_page=${SHOTS_PER_PAGE}`,
        );

        setPostsFetched(true);
      }

      setDribbblePosts([...dribbblePosts, ...dribbbleRes.data]);
      if (isLoading) setIsLoading(false);
    } catch (error) {
      console.warn(error);
      setPostsFetched(true);
      if (isLoading) setIsLoading(false);
      setIsError(true);
    }
  }

  if (!postsFetched) {
    getDribbblePosts();
  }
}, [dribbblePosts, dribbblePage, postsFetched, isLoading, isError]);
```

By using the boolean `postsFetched`, I can limit the number of network requests
made on each render. The first time the component renders, the network request
will be made, then, since I’m changing state, a new render will be triggered by
React.

However, this time around the network request won’t be made since `postsFetched`
is `true`, and it won’t reach the if statement.

When you are making network requests using `useEffect()` hooks, each time the
state is changed, React will render the component. If you don’t check if you
already made a request or if the data is already fetched, it can lead to an
infinite loop of renders and network requests.

### Avoiding Memory Leaks

In order to fix this issue, I used the cleanup function that the React hooks
provide, which is executed when the component is unmounted.

```jsx{8,19,27,35,40}
const [isLoading, setIsLoading] = React.useState(true);
const [isError, setIsError] = React.useState(false);
const [postsFetched, setPostsFetched] = React.useState(false);
const [dribbblePage, setDribbblePage] = React.useState(1);
const [dribbblePosts, setDribbblePosts] = React.useState([]);

React.useEffect(() => {
  let didCancel = false;
  let dribbbleRes = {};

  async function getDribbblePosts() {
    try {
      if (!postsFetched) {
        dribbbleRes = await axios.get(
          `https://api.dribbble.com/v2/user/shots?access_token=${GATSBY_DRIBBBLE_TOKEN}&page=${dribbblePage}&per_page=${SHOTS_PER_PAGE}`,
        );
        setPostsFetched(true);
      }

      if (!didCancel) {
        setDribbblePosts([...dribbblePosts, ...dribbbleRes.data]);

        if (isLoading) setIsLoading(false);
      }
    } catch (error) {
      console.warn(error);
      if (!didCancel) {
        if (isLoading) setIsLoading(false);
        setPostsFetched(true);
        setIsError(true);
      }
    }
  }

  if (!postsFetched && !didCancel) {
    getDribbblePosts();
  }

  return () => {
    didCancel = true;
  };
}, [dribbblePosts, postsFetched, dribbblePage, isLoading, isError]);
```

By using a boolean `didCancel` I can avoid saving data in state if the component
is unmounted. The cleanup function can be used to toggle the boolean from
`false` to `true`. Then the next time it’s executed, it won’t save anything in
state. This way React won’t try to save data in the state of a component that
has been unmounted.

Great, so far we have a `useEffect()` hook that:

- Only fetches data from the Dribbble API once
- Stores the data only while the component is still mounted

With just these optimizations you could already call it a day.

But I wanted to display placeholder elements while the data is being fetched, to
avoid large layout shifts when the posts are rendered on the screen.

## Rendering Placeholder Elements

In order to render the placeholder, besides the loading indicator, I used the
Dribbble API’s pagination features with a certain amount of shots per request.

You probably have seen I was using template literal strings to create the URL:

```jsx
await axios.get(
  `https://api.dribbble.com/v2/user/shots?access_token=${GATSBY_DRIBBBLE_TOKEN}&page=${dribbblePage}&per_page=${SHOTS_PER_PAGE}`,
);
```

The Dribbble V2 API gives you the ability to use pagination with the `&page=X`
and `&per_page=X` query parameters.

### Creating the Placeholder Elements

On the initial load, I wanted to render only 4 or 6 shots. To do that, I’m using
a constant that stores the amount of shots I want to fetch.

```jsx
const SHOTS_PER_PAGE = 4;
```

This was then used in the `axios.get()` URL to fetch 4 shots on each paginated
page and to create the placeholder elements. The placeholders are made by
creating an array that had as many values inside, as the length of the
`SHOTS_PER_PAGE` const.

```jsx
const placeholderArr = Array.from({ length: SHOTS_PER_PAGE }, (v, i) => i);
```

When using `Array.from()` you can specify a second argument which is a `map()`
function, that will run on each of the elements in the array. This way I can
create a pre-filled array which I can use to map over while `isLoading=true`,
and render placeholder elements.

```jsx
{
  isLoading && placeholderArr.map((i) => <DribbblePostPlaceholder key={i} />);
}
```

To create these elements you can use the following code. It’s just a wrapper div
with `position: relative;` and a child element with a `padding-bottom: 75%;`.
The padding-bottom of 75% is used to have the same aspect ratio as the images
fetched from Dribbble.

I’m also using a `background-position` animation to animate the background from
a light gray to a darker one, to simulate a loading indicator.

Note that I’m using Styled Components in this tutorial.

```css
const StyledPlaceholder = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
`;

const placeholderAnimation = keyframes`
0% {
  background-position: 0% 50%;
 }
 50% {
  background-position: 100% 50%;
 }
 100% {
  background-position: 0% 50%;
 }
 `;

const StyledPlaceholderInner = styled.span`
  display: block;
  width: 100%;
  padding-bottom: 75%;
  background: linear-gradient(
    90deg,
    ${theme.colors.gray100},
    ${theme.colors.gray400},
    ${theme.colors.gray100}
  );
  background-size: 200% 200%;
  animation: ${placeholderAnimation} 3s ease infinite;
`;

function DribbblePostPlaceholder() {
  return (
    <StyledPlaceholder>
      <StyledPlaceholderInner />
    </StyledPlaceholder>
  );
}
```

Once `isLoading` is changed to `false`, the placeholder elements are replaced
with the shots from Dribbble.

```jsx
{
  !isLoading &&
    dribbblePosts.map((post) => <DribbblePost key={post.id} post={post} />);
}
```

## Loading More Shots

When I was designing the page where the component is mounted, I only wanted to
show 4 or 6 shots at most.

But I also wanted to have an option to load more shots if any user wanted to see
more of them, without having to redirect them to the Dribbble homepage.

Initially, I thought of fetching several posts, 20 or so, and slicing the array
into 4 to 6 long chunks so that I only rendered a couple of shots at a time. But
I soon realized that it wasn’t a really good idea to download that many images.
This was especially important for the users that are visiting my site on a
mobile connection with limited bandwidth.

So I decided to only load 4 shots initially, and if any user wanted to see more,
they could use the _Load More_ button which would fetch 4 shots more.

Since the Dribbble API has built-in pagination which lets me load a certain
amount of shots per page, it was the perfect solution to my problem.

In order to load more shots, I added a button that, when clicked, would trigger
the `loadMorePosts()` function.

```jsx
<LoadMore onClick={loadMorePosts}>
  {!isLoadingMore && <LoadMoreLabel>Load More...</LoadMoreLabel>}
  {isLoadingMore && <Spinner />}
</LoadMore>
```

Once the button is pressed, the function will add 1 to the `dribbblePage` state
variable and set the `postsFetched` boolean used to control whether the
`axios.get()` method is executed.

```jsx
function loadMorePosts() {
  setDribbblePage(dribbblePage + 1);
  setPostsFetched(false);
  setIsLoadingMore(true);
}
```

In addition, the `isLoadingMore` variable lets me render more placeholder
elements, while the new shots are fetched from the Dribbble API.

By using a different variable and not the original `isLoading` one, I could
avoid changing the shots I already had and rendered, thus adding new
placeholders and shots below the ones I already had.

In order to make this all work, I also needed to merge the previous state with
the new state, since `useState()` overrides all existing values in the state.

```jsx
{
  isLoadingMore &&
    placeholderArr.map((i) => <DribbblePostPlaceholder key={i} />);
}
```

### The Final Version of the Dribbble Posts Component

```jsx
function DribbblePosts() {
  const SHOTS_PER_PAGE = 4;

  const [isLoading, setIsLoading] = React.useState(true);
  const [isLoadingMore, setIsLoadingMore] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [postsFetched, setPostsFetched] = React.useState(false);
  const [dribbblePage, setDribbblePage] = React.useState(1);
  const [dribbblePosts, setDribbblePosts] = React.useState([]);

  const placeholderArr = Array.from({ length: SHOTS_PER_PAGE }, (v, i) => i);

  React.useEffect(() => {
    let didCancel = false;
    let dribbbleRes = {};

    async function getDribbblePosts() {
      try {
        if (!postsFetched) {
          dribbbleRes = await axios.get(
            `https://api.dribbble.com/v2/user/shots?access_token=${GATSBY_DRIBBBLE_TOKEN}&page=${dribbblePage}&per_page=${SHOTS_PER_PAGE}`,
          );
          setPostsFetched(true);
        }

        if (!didCancel) {
          setDribbblePosts([...dribbblePosts, ...dribbbleRes.data]);

          if (isLoading) setIsLoading(false);
          if (isLoadingMore) setIsLoadingMore(false);
        }
      } catch (error) {
        console.warn(error);
        if (!didCancel) {
          if (isLoading) setIsLoading(false);
          if (isLoadingMore) setIsLoadingMore(false);
          setPostsFetched(true);
          setIsError(true);
        }
      }
    }

    if (!postsFetched && !didCancel) {
      getDribbblePosts();
    }

    return () => {
      didCancel = true;
    };
  }, [
    dribbblePosts,
    postsFetched,
    dribbblePage,
    isLoading,
    isError,
    isLoadingMore,
  ]);

  function loadMorePosts() {
    setDribbblePage(dribbblePage + 1);
    setPostsFetched(false);
    setIsLoadingMore(true);
  }

  return (
    <DribbblePostsWrapper>
      {isError && <ErrorMessage>Sorry, something went wrong...</ErrorMessage>}

      {isLoading &&
        placeholderArr.map((i) => <DribbblePostPlaceholder key={i} />)}
      {!isLoading &&
        dribbblePosts.map((post) => <DribbblePost key={post.id} post={post} />)}

      {isLoadingMore &&
        placeholderArr.map((i) => <DribbblePostPlaceholder key={i} />)}
      <LoadMore onClick={loadMorePosts}>
        {!isLoadingMore && <LoadMoreLabel>Load More...</LoadMoreLabel>}
        {isLoadingMore && <Spinner />}
      </LoadMore>
    </DribbblePostsWrapper>
  );
}
```

## (Update) Refactoring to useReducer

So far, the component is working great.

But it could be better.

The main issue I have with it so far, is that I need to use a lot of if
statements that stop rendering when the state changes. Currently, I have more
than 4 different state changes inside the `useEffect` hook.

Also, the hooks’ dependency list is getting pretty long:

```jsx
React.useEffect(() => {
  ...
}, [dribbblePosts, postsFetched, dribbblePage, isLoading, isError, isLoadingMore]);
```

A great solution to this is to use the reducer hook, which lets me combine
several state changes in a single call.

Actually not much code needs to change.

The components render function is practically the same.

I only need to extract the data fetching logic in a separate file —so that I can
have cleaner code.

And I also need to destructure the variables used in the render function from
the custom hook `useDribbbleReducer()`.

```jsx
function DribbblePosts({ locale }) {
  const {
    dribbblePosts,
    shotsPerPage,
    isLoading,
    isLoadingMore,
    isError,
    loadMorePosts,
  } = useDribbbleReducer();

  const placeholderArr = Array.from({ length: shotsPerPage }, (v, i) => i);

  return (
    <DribbblePostsWrapper>
      <DribbblePostH1>Latest Designs</DribbblePostH1>
      <DribbbleSubhead>
        Some of the latest projects I shared on Dribbble.
      </DribbbleSubhead>
      {isError && <ErrorMessage>{DRIBBBLE_STATUS[locale].error}</ErrorMessage>}

      {isLoading &&
        placeholderArr.map((i) => <DribbblePostPlaceholder key={i} />)}
      {!isLoading &&
        dribbblePosts.map((post) => <DribbblePost key={post.id} post={post} />)}

      {isLoadingMore &&
        placeholderArr.map((i) => <DribbblePostPlaceholder key={i} />)}

      <StyledLoadMore onClick={loadMorePosts}>
        {!isLoading && !isLoadingMore && (
          <LoadMoreLabel>Load More...</LoadMoreLabel>
        )}
        {(isLoading || isLoadingMore) && <Spinner />}
      </StyledLoadMore>
    </DribbblePostsWrapper>
  );
}
```

### Creating the Reducer

```jsx{13}
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT": {
      return {
        ...state,
      };
    }
    case "FETCH_SUCCESS": {
      return {
        ...state,
        isLoading: false,
        isLoadingMore: false,
        dribbblePosts: [...state.dribbblePosts, ...action.payload],
      };
    }
    case "FETCH_MORE": {
      return {
        ...state,
        isLoadingMore: true,
        dribbblePage: state.dribbblePage + 1,
      };
    }
    case "FETCH_ERROR": {
      return {
        ...state,
        isLoading: false,
        isLoadingMore: false,
        isError: true,
      };
    }
    default:
      return state;
  }
};
```

The reducer is pretty simple. I can have an initial state with `isLoading`,
`dribbblePosts`, ..., in a single object that is updated when the reducer
dispaches the actions.

In order to still be able to add new shots to the existing ones, I needed to
merge the previous state with the new fetched shots.

Besides that, I also used the axios cancel token (instead of the `didCancel`
variable) so that I can cancel the network request if the component is unmounted
before the async function resolves.

```jsx{15,24,30,43}
export default function useDribbbleReducer() {
  const initialState = {
    dribbblePage: 1,
    shotsPerPage: 4,
    dribbblePosts: [],
    isLoading: true,
    isLoadingMore: false,
    isError: false,
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    let dribbbleRes = {};
    let source = axios.CancelToken.source();

    dispatch({ type: "FETCH_INIT" });

    const fetchData = async () => {
      try {
        dribbbleRes = await axios.get(
          `https://api.dribbble.com/v2/user/shots?access_token=${GATSBY_DRIBBBLE_TOKEN}&page=${state.dribbblePage}&per_page=${state.shotsPerPage}`,
          {
            cancelToken: source.token,
          },
        );

        dispatch({ type: "FETCH_SUCCESS", payload: dribbbleRes.data });
      } catch (error) {
        if (axios.isCancel(error)) {
          console.warn("Cancelled axios request");
        } else {
          console.warn(error);
          dispatch({ type: "FETCH_ERROR" });
        }
      }
    };

    fetchData();

    return () => {
      // Prevent memory leak when moving to another page and cancel axios request
      source.cancel();
    };
  }, [state.dribbblePage, state.shotsPerPage]);

  function loadMorePosts() {
    // Load posts with pagination, shotsPerPage on each page
    dispatch({ type: "FETCH_MORE" });
  }

  return { ...state, loadMorePosts };
}
```

As you can see, the dependency list of the `useEffect` hook is now much cleaner.
It only needs to be aware of the changes made to the `dribbblePage` variable
which is updated when I want to load more shots from the API, using pagination.

The only check I need to keep doing is the `didCancel` one, which is used to
prevent saving data into state if the component unmonunts before the async
function resolves.

## Final Thoughts

So far I’m quite happy with the results. I got all the features I needed by
combining React Hooks with the the pagination feature of Dribbble’s V2 API.

As an improvement, I’m looking into how I can cache the results.

Currently, each time the component mounts, the shots are fetched from Dribbble.
Therefore, each time a user loads the page that has the component, a network
request is made.

By caching the shots fetched from Dribbble, I can avoid making a network request
each time the component is rendered. This way I can help the visitors of my site
to save some of their mobile bandwidth.
