import React from 'react'
import Link from 'next/link'

import { Gutter } from '../components/Gutter'

const Home: React.FC = () => {
  return (
    <Gutter>
      <h1>Payload Auth Example</h1>
      <p>
        {'This is a '}
        <Link href="https://payloadcms.com" target="_blank" rel="noopener noreferrer">
          Payload
        </Link>
        {' + '}
        <Link href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          Next.js
        </Link>
        {' app using the '}
        <Link href="https://nextjs.org/docs/pages" target="_blank" rel="noopener noreferrer">
          Pages Router
        </Link>
        {" made explicitly for Payload's "}
        <Link
          href="https://github.com/payloadcms/payload/tree/master/examples/auth/cms"
          target="_blank"
          rel="noopener noreferrer"
        >
          Auth Example
        </Link>
        {". This example demonstrates how to implement Payload's "}
        <Link
          href="https://payloadcms.com/docs/authentication/overview"
          target="_blank"
          rel="noopener noreferrer"
        >
          Authentication
        </Link>
        {' strategies in both the REST and GraphQL APIs.'}
      </p>
      <p>
        {'Visit the '}
        <Link href="/login">Login</Link>
        {' page to start the authentication flow. Once logged in, you will be redirected to the '}
        <Link href="/account">Account</Link>
        {` page which is restricted to users only. To toggle APIs, simply toggle the "api" prop between "rest" and "gql" in "_app.tsx".`}
      </p>
    </Gutter>
  )
}

export default Home
