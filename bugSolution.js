```javascript
import { getSession } from 'next-auth/react';

export default function MyComponent({ session }) {
  console.log(session);
  return (
    <div>Hello</div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}
```