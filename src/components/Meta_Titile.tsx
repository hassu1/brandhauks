// components/Meta_Title.tsx
import Head from 'next/head';
import React from 'react';

type MetaTitleProps = {
  title?: string;
  description?: string;
  children: React.ReactNode;
};

export default function Meta_Title({ title, description, children }: MetaTitleProps) {
  return (
    <>
      <Head>
        <title>{title || 'My Default Title'}</title>
        <meta name="description" content={description || 'Default description'} />
      </Head>
      <main>{children}</main>
    </>
  );
}
