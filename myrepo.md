---
repository:
  name: ecommerce
  owner: unknown
  url: ""
generated:
  timestamp: 2025-01-01T21:59:33.468Z
  tool: FlatRepo
statistics:
  totalFiles: 95
  totalLines: 5688
  languages:
    json: 3
    typescript: 37
    markdown: 1
    tsx: 47
    css: 2
  fileTypes:
    .json: 3
    .ts: 37
    .md: 1
    .mjs: 2
    .prisma: 1
    .tsx: 47
    .css: 2
    .toml: 1
    .sql: 1
---

===  tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```
=== EOF: tsconfig.json

===  tailwind.config.ts
```typescript
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
```
=== EOF: tailwind.config.ts

===  README.md
```markdown
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
```
=== EOF: README.md

===  postcss.config.mjs
```
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;
```
=== EOF: postcss.config.mjs

===  package.json
```json
{
  "name": "ecommerce",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "seed": "ts-node src/seed/seed-database.ts"
  },
  "dependencies": {
    "@prisma/client": "^6.1.0",
    "bcryptjs": "^2.4.3",
    "clsx": "^2.1.1",
    "flatrepo": "^1.0.6",
    "next": "15.1.3",
    "next-auth": "^5.0.0-beta.3",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-hook-form": "^7.48.2",
    "react-icons": "^5.4.0",
    "swiper": "^11.1.15",
    "zod": "^3.22.4",
    "zustand": "^5.0.2"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@types/bcryptjs": "^2.4.6",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "autoprefixer": "^10.0.1",
    "eslint": "^9",
    "eslint-config-next": "15.1.3",
    "postcss": "^8",
    "prisma": "^6.1.0",
    "tailwindcss": "^3.4.1",
    "ts-node": "^10.9.2",
    "typescript": "^5"
  }
}
```
=== EOF: package.json

===  next.config.ts
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```
=== EOF: next.config.ts

===  eslint.config.mjs
```
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
```
=== EOF: eslint.config.mjs

===  src\middleware-old.ts
```typescript
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
```
=== EOF: src\middleware-old.ts

===  src\auth.config.ts
```typescript
import NextAuth, { type NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcryptjs from 'bcryptjs';
import { z } from 'zod';

import prisma from './lib/prisma';



export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/auth/login',
    newUser: '/auth/new-account',
  },

  callbacks: {

    authorized({ auth, request: { nextUrl } }) {
      console.log({ auth });
      // const isLoggedIn = !!auth?.user;

      // const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      // if (isOnDashboard) {
      //   if (isLoggedIn) return true;
      //   return false; // Redirect unauthenticated users to login page
      // } else if (isLoggedIn) {
      //   return Response.redirect(new URL('/dashboard', nextUrl));
      // }
      return true;
    },

    jwt({ token, user }) {
      if ( user ) {
        token.data = user;
      }

      return token;
    },

    session({ session, token, user }) {
      session.user = token.data as any;
      return session;
    },



  },



  providers: [

    Credentials({
      async authorize(credentials) {

        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);


          if ( !parsedCredentials.success ) return null;

          const { email, password } = parsedCredentials.data;


          // Buscar el correo
          const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
          if ( !user ) return null;

          // Comparar las contraseñas
          if( !bcryptjs.compareSync( password, user.password ) ) return null;


          // Regresar el usuario sin el password
          const { password: _, ...rest } = user;

          return rest;
      },
    }),


  ]
}



export const {  signIn, signOut, auth, handlers } = NextAuth( authConfig );
```
=== EOF: src\auth.config.ts

===  prisma\schema.prisma
```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum Size {
  XS
  S
  M
  L
  XL
  XXL
  XXXL
}

enum Gender {
  men
  women
  kid
  unisex
}

enum Role {
  admin
  user
}

model Category {
  id      String    @id @default(uuid())
  name    String    @unique
  Product Product[]
}

model Product {
  id          String   @id @default(uuid())
  title       String
  description String
  inStock     Int
  price       Float    @default(0)
  sizes       Size[]   @default([])
  slug        String   @unique
  tags        String[] @default([])
  gender      Gender

  // Relaciones

  category   Category @relation(fields: [categoryId], references: [id])
  categoryId String

  ProductImage ProductImage[]
  OrderItem    OrderItem[]

  @@index([gender])
}

model ProductImage {
  id  Int    @id @default(autoincrement())
  url String

  product   Product @relation(fields: [productId], references: [id])
  productId String
}

model User {
  id            String    @id @default(uuid())
  name          String
  email         String    @unique
  emailVerified DateTime?
  password      String
  role          Role      @default(user)
  image         String?

  address UserAddress?

  // Relaciones
  Order Order[]
}

model Country {
  id   String @id
  name String

  UserAddress  UserAddress[]
  OrderAddress OrderAddress[]
}

model UserAddress {
  id         String  @id @default(uuid())
  firstName  String
  lastName   String
  address    String
  address2   String?
  postalCode String
  phone      String
  city       String

  // Relaciones
  country   Country @relation(fields: [countryId], references: [id])
  countryId String

  user   User   @relation(fields: [userId], references: [id])
  userId String @unique
}

// Order de compras
model Order {
  id           String    @id @default(uuid())
  subTotal     Float
  tax          Float
  total        Float
  itemsInOrder Int
  isPaid       Boolean   @default(false)
  paidAt       DateTime?

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  // Relaciones
  user   User   @relation(fields: [userId], references: [id])
  userId String

  OrderItem    OrderItem[]
  OrderAddress OrderAddress?
}

model OrderItem {
  id       String @id @default(uuid())
  quantity Int
  price    Float
  size     Size

  // Relaciones
  order   Order  @relation(fields: [orderId], references: [id])
  orderId String

  product   Product @relation(fields: [productId], references: [id])
  productId String
}

model OrderAddress {
  id         String  @id @default(uuid())
  firstName  String
  lastName   String
  address    String
  address2   String?
  postalCode String
  city       String
  phone      String

  // Relaciones
  country   Country @relation(fields: [countryId], references: [id])
  countryId String

  Order   Order  @relation(fields: [orderId], references: [id])
  orderId String @unique
}
```
=== EOF: prisma\schema.prisma

===  src\utils\sleep.ts
```typescript



export const sleep = (seconds: number = 1) => {

  return new Promise( resolve => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000 );
  })


}
```
=== EOF: src\utils\sleep.ts

===  src\utils\index.ts
```typescript


export * from './currencyFormat';
export * from './generatePaginationNumbers';
export * from './sleep';
```
=== EOF: src\utils\index.ts

===  src\utils\generatePaginationNumbers.ts
```typescript

// [1,2,3,4,5,..., 7]
// [1,2,3,...,48, 49, 50]
export const generatePaginationNumbers = ( currentPage: number, totalPages: number) => {

  // Si el numero total de páginas es 7 o menos
  // vamos a mostrar todas las páginas sin puntos suspensivos
  if ( totalPages <= 7 ) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);  // [1,2,3,4,5,6,7];
  }

  // Si la página actual está entre las primeras 3 páginas
  // mostrar las primeras 3, puntos suspensivos, y las ultimas 2
  if ( currentPage <= 3 ) {
    return [1,2,3,'...', totalPages -1 , totalPages]; //[1,2,3, '...', 49,50];
  }

  // Si la página actual estra entre las últimas 3 páginas
  // mostrar las primeras 2, puntos suspensivos, las últimas 3 páginas
  if ( currentPage >= totalPages - 2 ) {
    return [1,2, '...', totalPages -2, totalPages -1, totalPages];
  }

  // Si la página actual está en otro lugar medio
  // mostrar la primera página, puntos suspensivos, la pagina actual y vecinos
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages
  ];


}
```
=== EOF: src\utils\generatePaginationNumbers.ts

===  src\utils\currencyFormat.ts
```typescript
export const currencyFormat = (value: number) => {

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
  
};
```
=== EOF: src\utils\currencyFormat.ts

===  src\store\index.ts
```typescript



export * from './address/address-store';
export * from './cart/cart-store';
export * from './ui/ui-store';
```
=== EOF: src\store\index.ts

===  src\seed\tsconfig.json
```json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig to read more about this file */

    /* Projects */
    // "incremental": true,                              /* Save .tsbuildinfo files to allow for incremental compilation of projects. */
    // "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */
    // "tsBuildInfoFile": "./.tsbuildinfo",              /* Specify the path to .tsbuildinfo incremental compilation file. */
    // "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects. */
    // "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */
    // "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */

    /* Language and Environment */
    "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    // "lib": [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */
    // "jsx": "preserve",                                /* Specify what JSX code is generated. */
    // "experimentalDecorators": true,                   /* Enable experimental support for legacy experimental decorators. */
    // "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */
    // "jsxFactory": "",                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h'. */
    // "jsxFragmentFactory": "",                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'. */
    // "jsxImportSource": "",                            /* Specify module specifier used to import the JSX factory functions when using 'jsx: react-jsx*'. */
    // "reactNamespace": "",                             /* Specify the object invoked for 'createElement'. This only applies when targeting 'react' JSX emit. */
    // "noLib": true,                                    /* Disable including any library files, including the default lib.d.ts. */
    // "useDefineForClassFields": true,                  /* Emit ECMAScript-standard-compliant class fields. */
    // "moduleDetection": "auto",                        /* Control what method is used to detect module-format JS files. */

    /* Modules */
    "module": "commonjs",                                /* Specify what module code is generated. */
    // "rootDir": "./",                                  /* Specify the root folder within your source files. */
    // "moduleResolution": "node10",                     /* Specify how TypeScript looks up a file from a given module specifier. */
    // "baseUrl": "./",                                  /* Specify the base directory to resolve non-relative module names. */
    // "paths": {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */
    // "rootDirs": [],                                   /* Allow multiple folders to be treated as one when resolving modules. */
    // "typeRoots": [],                                  /* Specify multiple folders that act like './node_modules/@types'. */
    // "types": [],                                      /* Specify type package names to be included without being referenced in a source file. */
    // "allowUmdGlobalAccess": true,                     /* Allow accessing UMD globals from modules. */
    // "moduleSuffixes": [],                             /* List of file name suffixes to search when resolving a module. */
    // "allowImportingTsExtensions": true,               /* Allow imports to include TypeScript file extensions. Requires '--moduleResolution bundler' and either '--noEmit' or '--emitDeclarationOnly' to be set. */
    // "resolvePackageJsonExports": true,                /* Use the package.json 'exports' field when resolving package imports. */
    // "resolvePackageJsonImports": true,                /* Use the package.json 'imports' field when resolving imports. */
    // "customConditions": [],                           /* Conditions to set in addition to the resolver-specific defaults when resolving imports. */
    // "resolveJsonModule": true,                        /* Enable importing .json files. */
    // "allowArbitraryExtensions": true,                 /* Enable importing files with any extension, provided a declaration file is present. */
    // "noResolve": true,                                /* Disallow 'import's, 'require's or '<reference>'s from expanding the number of files TypeScript should add to a project. */

    /* JavaScript Support */
    // "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. */
    // "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */
    // "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from 'node_modules'. Only applicable with 'allowJs'. */

    /* Emit */
    // "declaration": true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */
    // "declarationMap": true,                           /* Create sourcemaps for d.ts files. */
    // "emitDeclarationOnly": true,                      /* Only output d.ts files and not JavaScript files. */
    // "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
    // "inlineSourceMap": true,                          /* Include sourcemap files inside the emitted JavaScript. */
    // "outFile": "./",                                  /* Specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, also designates a file that bundles all .d.ts output. */
    // "outDir": "./",                                   /* Specify an output folder for all emitted files. */
    // "removeComments": true,                           /* Disable emitting comments. */
    // "noEmit": true,                                   /* Disable emitting files from a compilation. */
    // "importHelpers": true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */
    // "importsNotUsedAsValues": "remove",               /* Specify emit/checking behavior for imports that are only used for types. */
    // "downlevelIteration": true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */
    // "sourceRoot": "",                                 /* Specify the root path for debuggers to find the reference source code. */
    // "mapRoot": "",                                    /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSources": true,                            /* Include source code in the sourcemaps inside the emitted JavaScript. */
    // "emitBOM": true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */
    // "newLine": "crlf",                                /* Set the newline character for emitting files. */
    // "stripInternal": true,                            /* Disable emitting declarations that have '@internal' in their JSDoc comments. */
    // "noEmitHelpers": true,                            /* Disable generating custom helper functions like '__extends' in compiled output. */
    // "noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */
    // "preserveConstEnums": true,                       /* Disable erasing 'const enum' declarations in generated code. */
    // "declarationDir": "./",                           /* Specify the output directory for generated declaration files. */
    // "preserveValueImports": true,                     /* Preserve unused imported values in the JavaScript output that would otherwise be removed. */

    /* Interop Constraints */
    // "isolatedModules": true,                          /* Ensure that each file can be safely transpiled without relying on other imports. */
    // "verbatimModuleSyntax": true,                     /* Do not transform or elide any imports or exports not marked as type-only, ensuring they are written in the output file's format based on the 'module' setting. */
    // "allowSyntheticDefaultImports": true,             /* Allow 'import x from y' when a module doesn't have a default export. */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    // "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */

    /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,                         /* When type checking, take into account 'null' and 'undefined'. */
    // "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
    // "strictBindCallApply": true,                      /* Check that the arguments for 'bind', 'call', and 'apply' methods match the original function. */
    // "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */
    // "noImplicitThis": true,                           /* Enable error reporting when 'this' is given the type 'any'. */
    // "useUnknownInCatchVariables": true,               /* Default catch clause variables as 'unknown' instead of 'any'. */
    // "alwaysStrict": true,                             /* Ensure 'use strict' is always emitted. */
    // "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */
    // "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read. */
    // "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */
    // "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
    // "noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements. */
    // "noUncheckedIndexedAccess": true,                 /* Add 'undefined' to a type when accessed using an index. */
    // "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */
    // "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type. */
    // "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */
    // "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */

    /* Completeness */
    // "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  }
}
```
=== EOF: src\seed\tsconfig.json

===  src\seed\seed.ts
```typescript
import bcryptjs from 'bcryptjs';


interface SeedProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ValidSizes[];
  slug: string;
  tags: string[];
  title: string;
  type: ValidTypes;
  gender: 'men' | 'women' | 'kid' | 'unisex';
}

interface SeedUser {
  email: string;
  password: string;
  name: string;
  role: 'admin'|'user'
}



type ValidSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
type ValidTypes = 'shirts' | 'pants' | 'hoodies' | 'hats';

interface SeedData {
  users: SeedUser[];
  categories: string[];
  products: SeedProduct[];
}




export const initialData: SeedData = {

  users: [
    {
      email: 'fernando@google.com',
      name: 'Fernando Herrera',
      password: bcryptjs.hashSync('123456'),
      role: 'admin'
    },
    {
      email: 'melissa@google.com',
      name: 'Melissa Flores',
      password: bcryptjs.hashSync('123456'),
      role: 'user'
    },


  ],


  categories: [
    'Shirts', 'Pants', 'Hoodies', 'Hats'
  ],
  products: [
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: [
        '1740176-00-A_0_2000.jpg',
        '1740176-00-A_1.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'XS', 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: 'men'
    },
    {
      description: "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
      images: [
        '1740507-00-A_0_2000.jpg',
        '1740507-00-A_1.jpg',
      ],
      inStock: 5,
      price: 200,
      sizes: [ 'XS', 'S', 'M', 'XL', 'XXL' ],
      slug: "men_quilted_shirt_jacket",
      type: 'shirts',
      tags: [ 'jacket' ],
      title: "Men's Quilted Shirt Jacket",
      gender: 'men'
    },

    {
      description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
      images: [
        '1740250-00-A_0_2000.jpg',
        '1740250-00-A_1.jpg'
      ],
      inStock: 10,
      price: 130,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "men_raven_lightweight_zip_up_bomber_jacket",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men's Raven Lightweight Zip Up Bomber Jacket",
      gender: 'men'
    },

    {
      description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Long Sleeve Tee features a subtle, water-based T logo on the left chest and our Tesla wordmark below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
      images: [
        '1740280-00-A_0_2000.jpg',
        '1740280-00-A_1.jpg',
      ],
      inStock: 50,
      price: 45,
      sizes: [ 'XS', 'S', 'M', 'L' ],
      slug: "men_turbine_long_sleeve_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men's Turbine Long Sleeve Tee",
      gender: 'men'
    },
    {
      description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
      images: [
        '1741416-00-A_0_2000.jpg',
        '1741416-00-A_1.jpg',
      ],
      inStock: 50,
      price: 40,
      sizes: [ 'M', 'L', 'XL', 'XXL' ],
      slug: "men_turbine_short_sleeve_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men's Turbine Short Sleeve Tee",
      gender: 'men'
    },
    {
      description: "Designed for comfort, the Cybertruck Owl Tee is made from 100% cotton and features our signature Cybertruck icon on the back.",
      images: [
        '7654393-00-A_2_2000.jpg',
        '7654393-00-A_3.jpg',
      ],
      inStock: 0,
      price: 35,
      sizes: [ 'M', 'L', 'XL', 'XXL' ],
      slug: "men_cybertruck_owl_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men's Cybertruck Owl Tee",
      gender: 'men'
    },
    {
      description: "Inspired by our fully integrated home solar and storage system, the Tesla Solar Roof Tee advocates for clean, sustainable energy wherever you go. Designed for fit, comfort and style, the tee features an aerial view of our seamless Solar Roof design on the front with our signature T logo above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
      images: [
        '1703767-00-A_0_2000.jpg',
        '1703767-00-A_1.jpg',
      ],
      inStock: 15,
      price: 35,
      sizes: [ 'S', 'M', 'L', 'XL' ],
      slug: "men_solar_roof_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men's Solar Roof Tee",
      gender: 'men'
    },
    {
      description: "Inspired by the world’s most unlimited resource, the Let the Sun Shine Tee highlights our fully integrated home solar and storage system. Designed for fit, comfort and style, the tee features a sunset graphic along with our Tesla wordmark on the front and our signature T logo printed above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
      images: [
        '1700280-00-A_0_2000.jpg',
        '1700280-00-A_1.jpg',
      ],
      inStock: 17,
      price: 35,
      sizes: [ 'XS', 'S', 'XL', 'XXL' ],
      slug: "men_let_the_sun_shine_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men's Let the Sun Shine Tee",
      gender: 'men'
    },
    {
      description: "Designed for fit, comfort and style, the Men's 3D Large Wordmark Tee is made from 100% Peruvian cotton with a 3D silicone-printed Tesla wordmark printed across the chest.",
      images: [
        '8764734-00-A_0_2000.jpg',
        '8764734-00-A_1.jpg',
      ],
      inStock: 12,
      price: 35,
      sizes: [ 'XS', 'S', 'M' ],
      slug: "men_3d_large_wordmark_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men's 3D Large Wordmark Tee",
      gender: 'men'
    },
    {
      description: "Designed for fit, comfort and style, the Tesla T Logo Tee is made from 100% Peruvian cotton and features a silicone-printed T Logo on the left chest.",
      images: [
        '7652426-00-A_0_2000.jpg',
        '7652426-00-A_1.jpg',
      ],
      inStock: 5,
      price: 35,
      sizes: [ 'XS', 'S' ],
      slug: "men_3d_t_logo_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men's 3D T Logo Tee",
      gender: 'men'
    },
    {
      description: "Designed for comfort and style in any size, the Tesla Small Wordmark Tee is made from 100% Peruvian cotton and features a 3D silicone-printed wordmark on the left chest.",
      images: [
        '8528839-00-A_0_2000.jpg',
        '8528839-00-A_2.jpg',
      ],
      inStock: 2,
      price: 35,
      sizes: [ 'XS', 'S', 'M' ],
      slug: "men_3d_small_wordmark_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men’s 3D Small Wordmark Tee",
      gender: 'men'
    },
    {
      description: "Designed to celebrate Tesla's incredible performance mode, the Plaid Mode Tee features great fit, comfort and style. Made from 100% cotton, it's the next best thing to riding shotgun at the Nürburgring.",
      images: [
        '1549268-00-A_0_2000.jpg',
        '1549268-00-A_2.jpg',
      ],
      inStock: 82,
      price: 35,
      sizes: [ 'XS', 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "men_plaid_mode_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men's Plaid Mode Tee",
      gender: 'men'
    },
    {
      description: "Inspired by our popular home battery, the Tesla Powerwall Tee is made from 100% cotton and features the phrase 'Pure Energy' under our signature logo in the back. Designed for fit, comfort and style, the exclusive tee promotes sustainable energy in any environment.",
      images: [
        '9877034-00-A_0_2000.jpg',
        '9877034-00-A_2.jpg',
      ],
      inStock: 24,
      price: 35,
      sizes: [ 'XL', 'XXL' ],
      slug: "men_powerwall_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men's Powerwall Tee",
      gender: 'men'
    },
    {
      description: "Inspired by Tesla Battery Day and featuring the unveiled tabless battery cell, Battery Day Tee celebrates the future of energy storage and cell manufacturing. Designed for fit, comfort and style, Battery Day Tee is made from 100% cotton with a stylized cell printed across the chest. Made in Peru.",
      images: [
        '1633802-00-A_0_2000.jpg',
        '1633802-00-A_2.jpg',
      ],
      inStock: 5,
      price: 30,
      sizes: [ 'XS', 'S', 'XXL' ],
      slug: "men_battery_day_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men's Battery Day Tee",
      gender: 'men'
    },
    {
      description: "Designed for exceptional comfort and inspired by the Cybertruck unveil event, the Cybertruck Bulletproof Tee is made from 100% cotton and features our signature Cybertruck icon on the back.",
      images: [
        '7654399-00-A_0_2000.jpg',
        '7654399-00-A_1.jpg',
      ],
      inStock: 150,
      price: 30,
      sizes: [ 'M', 'L' ],
      slug: "men_cybertruck_bulletproof_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men’s Cybertruck Bulletproof Tee",
      gender: 'men'
    },
    {
      description: "Inspired by the Model Y order confirmation graphic, the limited edition Haha Yes Tee is designed for comfort and style. Made from 100% Peruvian cotton and featuring the Tesla wordmark across the chest, the exclusive tee will commemorate your order for years to come.",
      images: [
        '7652410-00-A_0.jpg',
        '7652410-00-A_1_2000.jpg',
      ],
      inStock: 10,
      price: 35,
      sizes: [ 'XS', 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "men_haha_yes_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men's Haha Yes Tee",
      gender: 'men'
    },
    {
      description: "Designed for fit, comfort and style, the limited edition S3XY Tee is made from 100% cotton with a 3D silicone-printed “S3XY” logo across the chest. Made in Peru. Available in black.",
      images: [
        '8764600-00-A_0_2000.jpg',
        '8764600-00-A_2.jpg',
      ],
      inStock: 34,
      price: 35,
      sizes: [ 'XS', 'S', 'M', 'L' ],
      slug: "men_s3xy_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men's S3XY Tee",
      gender: 'men'
    },
    {
      description: "Designed for fit, comfort and style, the Men's 3D Wordmark Long Sleeve Tee is made from 100% cotton and features an understated wordmark logo on the left chest.",
      images: [
        '8764813-00-A_0_2000.jpg',
        '8764813-00-A_1.jpg',
      ],
      inStock: 15,
      price: 40,
      sizes: [ 'XL', 'XXL' ],
      slug: "men_3d_wordmark_long_sleeve_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men's 3D Wordmark Long Sleeve Tee",
      gender: 'men'
    },
    {
      description: "Designed for fit, comfort and style, the Men's 3D T Logo Long Sleeve Tee is made from 100% cotton and features an understated T logo on the left chest.",
      images: [
        '8529198-00-A_0_2000.jpg',
        '8529198-00-A_1.jpg',
      ],
      inStock: 12,
      price: 40,
      sizes: [ 'XS', 'XXL' ],
      slug: "men_3d_t_logo_long_sleeve_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men's 3D T Logo Long Sleeve Tee",
      gender: 'men'
    },
    {
      description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Hoodie has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve with a french terry interior for versatility in any season. Made from 70% bamboo and 30% cotton.",
      images: [
        '1740245-00-A_0_2000.jpg',
        '1740245-00-A_1.jpg',
      ],
      inStock: 10,
      price: 115,
      sizes: [ 'XS', 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "men_raven_lightweight_hoodie",
      type: 'hoodies',
      tags: [ 'hoodie' ],
      title: "Men's Raven Lightweight Hoodie",
      gender: 'men'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Chill Pullover Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The unisex hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
      images: [
        '1740051-00-A_0_2000.jpg',
        '1740051-00-A_1.jpg',
      ],
      inStock: 10,
      price: 130,
      sizes: [ 'XS', 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "chill_pullover_hoodie",
      type: 'hoodies',
      tags: [ 'hoodie' ],
      title: "Chill Pullover Hoodie",
      gender: 'unisex'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men's Chill Full Zip Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
      images: [
        '1741111-00-A_0_2000.jpg',
        '1741111-00-A_1.jpg',
      ],
      inStock: 100,
      price: 85,
      sizes: [ 'XS', 'L', 'XL', 'XXL' ],
      slug: "men_chill_full_zip_hoodie",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men's Chill Full Zip Hoodie",
      gender: 'men'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.",
      images: [
        '1740140-00-A_0_2000.jpg',
        '1740140-00-A_1.jpg',
      ],
      inStock: 7,
      price: 85,
      sizes: [ 'XS', 'S', 'M' ],
      slug: "men_chill_quarter_zip_pullover_-_gray",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men's Chill Quarter Zip Pullover - Gray",
      gender: 'men'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.",
      images: [
        '1740145-00-A_2_2000.jpg',
        '1740145-00-A_1.jpg',
      ],
      inStock: 15,
      price: 85,
      sizes: [ 'XS', 'S', 'M', 'L' ],
      slug: "men_chill_quarter_zip_pullover_-_white",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men's Chill Quarter Zip Pullover - White",
      gender: 'men'
    },
    {
      description: "The Unisex 3D Large Wordmark Pullover Hoodie features soft fleece and an adjustable, jersey-lined hood for comfort and coverage. Designed in a unisex style, the pullover hoodie includes a tone-on-tone 3D silicone-printed wordmark across the chest.",
      images: [
        '8529107-00-A_0_2000.jpg',
        '8529107-00-A_1.jpg',
      ],
      inStock: 15,
      price: 70,
      sizes: [ 'XS', 'S', 'XL', 'XXL' ],
      slug: "3d_large_wordmark_pullover_hoodie",
      type: 'hoodies',
      tags: [ 'hoodie' ],
      title: "3D Large Wordmark Pullover Hoodie",
      gender: 'unisex'
    },
    {
      description: "As with the iconic Tesla logo, the Cybertruck Graffiti Hoodie is a classic in the making. Unisex style featuring soft fleece and an adjustable, jersey-lined hood for comfortable coverage.",
      images: [
        '7654420-00-A_0_2000.jpg',
        '7654420-00-A_1_2000.jpg',
      ],
      inStock: 13,
      price: 60,
      sizes: [ 'XS', 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "cybertruck_graffiti_hoodie",
      type: 'hoodies',
      tags: [ 'hoodie' ],
      title: "Cybertruck Graffiti Hoodie",
      gender: 'unisex'
    },
    {
      description: "The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.",
      images: [
        '1657932-00-A_0_2000.jpg',
        '1657932-00-A_1.jpg',
      ],
      inStock: 11,
      price: 30,
      sizes: [ 'XS', 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "relaxed_t_logo_hat",
      type: 'hats',
      tags: [ 'hats' ],
      title: "Relaxed T Logo Hat",
      gender: 'unisex'
    },
    {
      description: "The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.",
      images: [
        '1740417-00-A_0_2000.jpg',
        '1740417-00-A_1.jpg',
      ],
      inStock: 13,
      price: 35,
      sizes: [ 'XS', 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "thermal_cuffed_beanie",
      type: 'hats',
      tags: [ 'hats' ],
      title: "Thermal Cuffed Beanie",
      gender: 'unisex'
    },
    {
      description: "The Women's Cropped Puffer Jacket features a uniquely cropped silhouette for the perfect, modern style while on the go during the cozy season ahead. The puffer features subtle silicone injected Tesla logos below the back collar and on the right sleeve, custom matte metal zipper pulls and a soft, fleece lined collar. Made from 87% nylon and 13% polyurethane.",
      images: [
        '1740535-00-A_0_2000.jpg',
        '1740535-00-A_1.jpg',
      ],
      inStock: 85,
      price: 225,
      sizes: [ 'XS', 'S', 'M' ],
      slug: "women_cropped_puffer_jacket",
      type: 'hoodies',
      tags: [ 'hoodie' ],
      title: "Women's Cropped Puffer Jacket",
      gender: 'women'
    },
    {
      description: "Introducing the Tesla Chill Collection. The Women's Chill Half Zip Cropped Hoodie has a premium, soft fleece exterior and cropped silhouette for comfort in everyday lifestyle. The hoodie features an elastic hem that gathers at the waist, subtle thermoplastic polyurethane Tesla logos along the hood and on the sleeve, a double layer single seam hood and a custom ring zipper pull. Made from 60% cotton and 40% recycled polyester.",
      images: [
        '1740226-00-A_0_2000.jpg',
        '1740226-00-A_1.jpg',
      ],
      inStock: 10,
      price: 130,
      sizes: [ 'XS', 'S', 'M', 'XXL' ],
      slug: "women_chill_half_zip_cropped_hoodie",
      type: 'hoodies',
      tags: [ 'hoodie' ],
      title: "Women's Chill Half Zip Cropped Hoodie",
      gender: 'women'
    },
    {
      description: "Introducing the Tesla Raven Collection. The Women's Raven Slouchy Crew Sweatshirt has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The slouchy crew features a subtle thermoplastic polyurethane Tesla wordmark on the left sleeve and a french terry interior for a cozy look and feel in every season. Pair it with your Raven Joggers or favorite on the go fit. Made from 70% bamboo and 30% cotton.",
      images: [
        '1740260-00-A_0_2000.jpg',
        '1740260-00-A_1.jpg',
      ],
      inStock: 9,
      price: 110,
      sizes: [ 'XS', 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "women_raven_slouchy_crew_sweatshirt",
      type: 'hoodies',
      tags: [ 'hoodie' ],
      title: "Women's Raven Slouchy Crew Sweatshirt",
      gender: 'women'
    },
    {
      description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Long Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50%",
      images: [
        '1740290-00-A_0_2000.jpg',
        '1740290-00-A_1.jpg',
      ],
      inStock: 10,
      price: 45,
      sizes: [ 'XS', 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "women_turbine_cropped_long_sleeve_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Women's Turbine Cropped Long Sleeve Tee",
      gender: 'women'
    },
    {
      description: "ntroducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50% polyester.",
      images: [
        '1741441-00-A_0_2000.jpg',
        '1741441-00-A_1.jpg',
      ],
      inStock: 0,
      price: 40,
      sizes: [ 'XS', 'S' ],
      slug: "women_turbine_cropped_short_sleeve_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Women's Turbine Cropped Short Sleeve Tee",
      gender: 'women'
    },
    {
      description: "Designed for style and comfort, the ultrasoft Women's T Logo Short Sleeve Scoop Neck Tee features a tonal 3D silicone-printed T logo on the left chest. Made of 50% Peruvian cotton and 50% Peruvian viscose.",
      images: [
        '8765090-00-A_0_2000.jpg',
        '8765090-00-A_1.jpg',
      ],
      inStock: 30,
      price: 35,
      sizes: [ 'XS', 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "women_t_logo_short_sleeve_scoop_neck_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Women's T Logo Short Sleeve Scoop Neck Tee",
      gender: 'women'
    },
    {
      description: "Designed for style and comfort, the ultrasoft Women's T Logo Long Sleeve Scoop Neck Tee features a tonal 3D silicone-printed T logo on the left chest. Made of 50% Peruvian cotton and 50% Peruvian viscose.",
      images: [
        '8765100-00-A_0_2000.jpg',
        '8765100-00-A_1.jpg',
      ],
      inStock: 16,
      price: 40,
      sizes: [ 'XS', 'S', 'L', 'XL', 'XXL' ],
      slug: "women_t_logo_long_sleeve_scoop_neck_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Women's T Logo Long Sleeve Scoop Neck Tee",
      gender: 'women'
    },
    {
      description: "Designed for style and comfort, the Women's Small Wordmark Short Sleeve V-Neck Tee features a tonal 3D silicone-printed wordmark on the left chest. Made of 100% Peruvian cotton.",
      images: [
        '8765120-00-A_0_2000.jpg',
        '8765120-00-A_1.jpg',
      ],
      inStock: 18,
      price: 35,
      sizes: [ 'XS', 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "women_small_wordmark_short_sleeve_v-neck_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Women's Small Wordmark Short Sleeve V-Neck Tee",
      gender: 'women'
    },
    {
      description: "Designed for style and comfort, the Women's Large Wordmark Short Sleeve Crew Neck Tee features a tonal 3D silicone-printed wordmark across the chest. Made of 100% Peruvian pima cotton.",
      images: [
        '8765115-00-A_0_2000.jpg',
        '8765115-00-A_1.jpg',
      ],
      inStock: 5,
      price: 35,
      sizes: [ 'XL', 'XXL' ],
      slug: "women_large_wordmark_short_sleeve_crew_neck_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Women's Large Wordmark Short Sleeve Crew Neck Tee",
      gender: 'women'
    },
    {
      description: "Designed to celebrate Tesla's incredible performance mode, the Plaid Mode Tee features great fit, comfort and style. Made from 100% cotton, it's the next best thing to riding shotgun at the Nürburgring.",
      images: [
        '1549275-00-A_0_2000.jpg',
        '1549275-00-A_1.jpg',
      ],
      inStock: 16,
      price: 35,
      sizes: [ 'S', 'M' ],
      slug: "women_plaid_mode_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Women's Plaid Mode Tee",
      gender: 'women'
    },
    {
      description: "Inspired by our popular home battery, the Tesla Powerwall Tee is made from 100% cotton and features the phrase 'Pure Energy' under our signature logo in the back. Designed for fit, comfort and style, the exclusive tee promotes sustainable energy in any",
      images: [
        '9877040-00-A_0_2000.jpg',
        '9877040-00-A_1.jpg',
      ],
      inStock: 10,
      price: 130,
      sizes: [ 'XS', 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "women_powerwall_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Women’s Powerwall Tee",
      gender: 'women'
    },
    {
      description: "Fully customized and uniquely styled, the Women's Corp Jacket features a silicone-printed 'T' logo on the left chest and prominent Tesla wordmark across the back.",
      images: [
        '5645680-00-A_0_2000.jpg',
        '5645680-00-A_3.jpg',
      ],
      inStock: 3,
      price: 90,
      sizes: [ 'M', 'L', 'XL', 'XXL' ],
      slug: "women_corp_jacket",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Women's Corp Jacket",
      gender: 'women'
    },
    {
      description: "Introducing the Tesla Raven Collection. The Women's Raven Joggers have a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The joggers feature a subtle thermoplastic polyurethane Tesla wordmark and T logo and a french terry interior for a cozy look and feel in every season. Pair them with your Raven Slouchy Crew Sweatshirt, Raven Lightweight Zip Up Jacket or other favorite on the go fit. Made from 70% bamboo and 30% cotton.",
      images: [
        '1740270-00-A_0_2000.jpg',
        '1740270-00-A_1.jpg',
      ],
      inStock: 162,
      price: 100,
      sizes: [ 'XS', 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "women_raven_joggers",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Women's Raven Joggers",
      gender: 'women'
    },
    {
      description: "Designed for fit, comfort and style, the Kids Cybertruck Graffiti Long Sleeve Tee features a water-based Cybertruck graffiti wordmark across the chest, a Tesla wordmark down the left arm and our signature T logo on the back collar. Made from 50% cotton and 50% polyester.",
      images: [
        '1742694-00-A_1_2000.jpg',
        '1742694-00-A_3.jpg',
      ],
      inStock: 10,
      price: 30,
      sizes: [ 'XS', 'S', 'M' ],
      slug: "kids_cybertruck_long_sleeve_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Kids Cybertruck Long Sleeve Tee",
      gender: 'kid'
    },
    {
      description: "The Kids Scribble T Logo Tee is made from 100% Peruvian cotton and features a Tesla T sketched logo for every young artist to wear.",
      images: [
        '8529312-00-A_0_2000.jpg',
        '8529312-00-A_1.jpg',
      ],
      inStock: 0,
      price: 25,
      sizes: [ 'XS', 'S', 'M' ],
      slug: "kids_scribble_t_logo_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Kids Scribble T Logo Tee",
      gender: 'kid'
    },
    {
      description: "The Kids Cybertruck Tee features the iconic Cybertruck graffiti wordmark and is made from 100% Peruvian cotton for maximum comfort.",
      images: [
        '8529342-00-A_0_2000.jpg',
        '8529342-00-A_1.jpg',
      ],
      inStock: 10,
      price: 25,
      sizes: [ 'XS', 'S', 'M' ],
      slug: "kids_cybertruck_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Kids Cybertruck Tee",
      gender: 'kid'
    },
    {
      description: "The refreshed Kids Racing Stripe Tee is made from 100% Peruvian cotton, featuring a newly enhanced racing stripe with a brushed Tesla wordmark that's perfect for any speed racer.",
      images: [
        '8529354-00-A_0_2000.jpg',
        '8529354-00-A_1.jpg',
      ],
      inStock: 10,
      price: 30,
      sizes: [ 'XS', 'S', 'M' ],
      slug: "kids_racing_stripe_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Kids Racing Stripe Tee",
      gender: 'kid'
    },
    {
      description: "Designed for fit, comfort and style, the Tesla T Logo Tee is made from 100% Peruvian cotton and features a silicone-printed T Logo on the left chest.",
      images: [
        '7652465-00-A_0_2000.jpg',
        '7652465-00-A_1.jpg',
      ],
      inStock: 10,
      price: 30,
      sizes: [ 'XS', 'S', 'M' ],
      slug: "kids_3d_t_logo_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Kids 3D T Logo Tee",
      gender: 'kid'
    },
    {
      description: "The checkered tee is made from long grain, GMO free Peruvian cotton. Peru is the only country in the world where cotton is picked by hand on a large scale. The 4,500-year-old tradition prevents damage to the fiber during the picking process and removes the need to use chemicals to open the cotton plants before harvest. This environmentally friendly process results in cotton that is soft, strong, and lustrous – and the tee will get even softer with every wash.",
      images: [
        '100042307_0_2000.jpg',
        '100042307_alt_2000.jpg',
      ],
      inStock: 10,
      price: 30,
      sizes: [ 'XS', 'S', 'M' ],
      slug: "kids_checkered_tee",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Kids Checkered Tee",
      gender: 'kid'
    },
    {
      description: "For the future space traveler with discerning taste, a soft, cotton onesie with snap closure bottom. Clear labeling provided in case of contact with a new spacefaring civilization. 100% Cotton. Made in Peru",
      images: [
        '1473809-00-A_1_2000.jpg',
        '1473809-00-A_alt.jpg',
      ],
      inStock: 16,
      price: 25,
      sizes: [ 'XS', 'S' ],
      slug: "made_on_earth_by_humans_onesie",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Made on Earth by Humans Onesie",
      gender: 'kid'
    },
    {
      description: "The Kids Scribble T Logo Onesie is made from 100% Peruvian cotton and features a Tesla T sketched logo for every little artist to wear.",
      images: [
        '8529387-00-A_0_2000.jpg',
        '8529387-00-A_1.jpg',
      ],
      inStock: 0,
      price: 30,
      sizes: [ 'XS', 'S' ],
      slug: "scribble_t_logo_onesie",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Scribble T Logo Onesie",
      gender: 'kid'
    },
    {
      description: "Show your commitment to sustainable energy with this cheeky onesie for your young one. Note: Does not prevent emissions. 100% Cotton. Made in Peru.",
      images: [
        '1473834-00-A_2_2000.jpg',
        '1473829-00-A_2_2000.jpg',
      ],
      inStock: 10,
      price: 30,
      sizes: [ 'XS', 'S' ],
      slug: "zero_emissions_(almost)_onesie",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Zero Emissions (Almost) Onesie",
      gender: 'kid'
    },
    {
      description: "Wear your Kids Cyberquad Bomber Jacket during your adventures on Cyberquad for Kids. The bomber jacket features a graffiti-style illustration of our Cyberquad silhouette and wordmark. With three zippered pockets and our signature T logo and Tesla wordmark printed along the sleeves, Kids Cyberquad Bomber Jacket is perfect for wherever the trail takes you. Made from 60% cotton and 40% polyester.",
      images: [
        '1742702-00-A_0_2000.jpg',
        '1742702-00-A_1.jpg',
      ],
      inStock: 10,
      price: 65,
      sizes: [ 'XS', 'S', 'M' ],
      slug: "kids_cyberquad_bomber_jacket",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Kids Cyberquad Bomber Jacket",
      gender: 'kid'
    },
    {
      description: "Cruise the playground in style with the Kids Corp Jacket. Modeled after the original Tesla Corp Jacket, the Kids Corp Jacket features the same understated style and high-quality materials but at a pint-sized scale.",
      images: [
        '1506211-00-A_0_2000.jpg',
        '1506211-00-A_1_2000.jpg',
      ],
      inStock: 10,
      price: 30,
      sizes: [ 'XS', 'S', 'M' ],
      slug: "kids_corp_jacket",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Kids Corp Jacket",
      gender: 'kid'
    },
  ]
};
```
=== EOF: src\seed\seed.ts

===  src\seed\seed-database.ts
```typescript
import prisma from '../lib/prisma';
import { initialData } from './seed';
import { countries } from './seed-countries';



async function main() {

  // 1. Borrar registros previos
  // await Promise.all( [

  await prisma.orderAddress.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();


  await prisma.userAddress.deleteMany();
  await prisma.user.deleteMany();
  await prisma.country.deleteMany();

  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  // ]);
  
  const { categories, products, users } = initialData;


  await prisma.user.createMany({
    data: users
  });

  await prisma.country.createMany({
    data: countries
  });



  //  Categorias
  // {
  //   name: 'Shirt'
  // }
  const categoriesData = categories.map( (name) => ({ name }));
  
  await prisma.category.createMany({
    data: categoriesData
  });

  
  const categoriesDB = await prisma.category.findMany();
  
  const categoriesMap = categoriesDB.reduce( (map, category) => {
    map[ category.name.toLowerCase()] = category.id;
    return map;
  }, {} as Record<string, string>); //<string=shirt, string=categoryID>
  
  

  // Productos

  products.forEach( async(product) => {

    const { type, images, ...rest } = product;

    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoriesMap[type]
      }
    })


    // Images
    const imagesData = images.map( image => ({
      url: image,
      productId: dbProduct.id
    }));

    await prisma.productImage.createMany({
      data: imagesData
    });

  });





  console.log( 'Seed ejecutado correctamente' );
}









( () => {

  if ( process.env.NODE_ENV === 'production' ) return;


  main();
} )();
```
=== EOF: src\seed\seed-database.ts

===  src\seed\seed-countries.ts
```typescript
interface SeedCountry {
  name: string;
  id: string;
}

export const countries: SeedCountry[] = [
  { name: "Afghanistan", id: "AF" },
  { name: "Aland Islands", id: "AX" },
  { name: "Albania", id: "AL" },
  { name: "Algeria", id: "DZ" },
  { name: "American Samoa", id: "AS" },
  { name: "Andorra", id: "AD" },
  { name: "Angola", id: "AO" },
  { name: "Anguilla", id: "AI" },
  { name: "Antarctica", id: "AQ" },
  { name: "Antigua and Barbuda", id: "AG" },
  { name: "Argentina", id: "AR" },
  { name: "Armenia", id: "AM" },
  { name: "Aruba", id: "AW" },
  { name: "Australia", id: "AU" },
  { name: "Austria", id: "AT" },
  { name: "Azerbaijan", id: "AZ" },
  { name: "Bahamas", id: "BS" },
  { name: "Bahrain", id: "BH" },
  { name: "Bangladesh", id: "BD" },
  { name: "Barbados", id: "BB" },
  { name: "Belarus", id: "BY" },
  { name: "Belgium", id: "BE" },
  { name: "Belize", id: "BZ" },
  { name: "Benin", id: "BJ" },
  { name: "Bermuda", id: "BM" },
  { name: "Bhutan", id: "BT" },
  { name: "Bolivia", id: "BO" },
  { name: "Bosnia and Herzegovina", id: "BA" },
  { name: "Botswana", id: "BW" },
  { name: "Bouvet Island", id: "BV" },
  { name: "Brazil", id: "BR" },
  { name: "British Indian Ocean Territory", id: "IO" },
  { name: "Brunei Darussalam", id: "BN" },
  { name: "Bulgaria", id: "BG" },
  { name: "Burkina Faso", id: "BF" },
  { name: "Burundi", id: "BI" },
  { name: "Cambodia", id: "KH" },
  { name: "Cameroon", id: "CM" },
  { name: "Canada", id: "CA" },
  { name: "Cape Verde", id: "CV" },
  { name: "Cayman Islands", id: "KY" },
  { name: "Central African Republic", id: "CF" },
  { name: "Chad", id: "TD" },
  { name: "Chile", id: "CL" },
  { name: "China", id: "CN" },
  { name: "Christmas Island", id: "CX" },
  { name: "Cocos (Keeling) Islands", id: "CC" },
  { name: "Colombia", id: "CO" },
  { name: "Comoros", id: "KM" },
  { name: "Congo", id: "CG" },
  { name: "Congo, The Democratic Republic of the", id: "CD" },
  { name: "Cook Islands", id: "CK" },
  { name: "Costa Rica", id: "CR" },
  { name: "Cote D'Ivoire", id: "CI" },
  { name: "Croatia", id: "HR" },
  { name: "Cuba", id: "CU" },
  { name: "Cyprus", id: "CY" },
  { name: "Czech Republic", id: "CZ" },
  { name: "Denmark", id: "DK" },
  { name: "Djibouti", id: "DJ" },
  { name: "Dominica", id: "DM" },
  { name: "Dominican Republic", id: "DO" },
  { name: "Ecuador", id: "EC" },
  { name: "Egypt", id: "EG" },
  { name: "El Salvador", id: "SV" },
  { name: "Equatorial Guinea", id: "GQ" },
  { name: "Eritrea", id: "ER" },
  { name: "Estonia", id: "EE" },
  { name: "Ethiopia", id: "ET" },
  { name: "Falkland Islands (Malvinas)", id: "FK" },
  { name: "Faroe Islands", id: "FO" },
  { name: "Fiji", id: "FJ" },
  { name: "Finland", id: "FI" },
  { name: "France", id: "FR" },
  { name: "French Guiana", id: "GF" },
  { name: "French Polynesia", id: "PF" },
  { name: "French Southern Territories", id: "TF" },
  { name: "Gabon", id: "GA" },
  { name: "Gambia", id: "GM" },
  { name: "Georgia", id: "GE" },
  { name: "Germany", id: "DE" },
  { name: "Ghana", id: "GH" },
  { name: "Gibraltar", id: "GI" },
  { name: "Greece", id: "GR" },
  { name: "Greenland", id: "GL" },
  { name: "Grenada", id: "GD" },
  { name: "Guadeloupe", id: "GP" },
  { name: "Guam", id: "GU" },
  { name: "Guatemala", id: "GT" },
  { name: "Guernsey", id: "GG" },
  { name: "Guinea", id: "GN" },
  { name: "Guinea-Bissau", id: "GW" },
  { name: "Guyana", id: "GY" },
  { name: "Haiti", id: "HT" },
  { name: "Heard Island and Mcdonald Islands", id: "HM" },
  { name: "Holy See (Vatican City State)", id: "VA" },
  { name: "Honduras", id: "HN" },
  { name: "Hong Kong", id: "HK" },
  { name: "Hungary", id: "HU" },
  { name: "Iceland", id: "IS" },
  { name: "India", id: "IN" },
  { name: "Indonesia", id: "ID" },
  { name: "Iran, Islamic Republic Of", id: "IR" },
  { name: "Iraq", id: "IQ" },
  { name: "Ireland", id: "IE" },
  { name: "Isle of Man", id: "IM" },
  { name: "Israel", id: "IL" },
  { name: "Italy", id: "IT" },
  { name: "Jamaica", id: "JM" },
  { name: "Japan", id: "JP" },
  { name: "Jersey", id: "JE" },
  { name: "Jordan", id: "JO" },
  { name: "Kazakhstan", id: "KZ" },
  { name: "Kenya", id: "KE" },
  { name: "Kiribati", id: "KI" },
  { name: "Korea, Democratic People'S Republic of", id: "KP" },
  { name: "Korea, Republic of", id: "KR" },
  { name: "Kuwait", id: "KW" },
  { name: "Kyrgyzstan", id: "KG" },
  { name: "Lao People'S Democratic Republic", id: "LA" },
  { name: "Latvia", id: "LV" },
  { name: "Lebanon", id: "LB" },
  { name: "Lesotho", id: "LS" },
  { name: "Liberia", id: "LR" },
  { name: "Libyan Arab Jamahiriya", id: "LY" },
  { name: "Liechtenstein", id: "LI" },
  { name: "Lithuania", id: "LT" },
  { name: "Luxembourg", id: "LU" },
  { name: "Macao", id: "MO" },
  { name: "Macedonia, The Former Yugoslav Republic of", id: "MK" },
  { name: "Madagascar", id: "MG" },
  { name: "Malawi", id: "MW" },
  { name: "Malaysia", id: "MY" },
  { name: "Maldives", id: "MV" },
  { name: "Mali", id: "ML" },
  { name: "Malta", id: "MT" },
  { name: "Marshall Islands", id: "MH" },
  { name: "Martinique", id: "MQ" },
  { name: "Mauritania", id: "MR" },
  { name: "Mauritius", id: "MU" },
  { name: "Mayotte", id: "YT" },
  { name: "Mexico", id: "MX" },
  { name: "Micronesia, Federated States of", id: "FM" },
  { name: "Moldova, Republic of", id: "MD" },
  { name: "Monaco", id: "MC" },
  { name: "Mongolia", id: "MN" },
  { name: "Montserrat", id: "MS" },
  { name: "Morocco", id: "MA" },
  { name: "Mozambique", id: "MZ" },
  { name: "Myanmar", id: "MM" },
  { name: "Namibia", id: "NA" },
  { name: "Nauru", id: "NR" },
  { name: "Nepal", id: "NP" },
  { name: "Netherlands", id: "NL" },
  { name: "Netherlands Antilles", id: "AN" },
  { name: "New Caledonia", id: "NC" },
  { name: "New Zealand", id: "NZ" },
  { name: "Nicaragua", id: "NI" },
  { name: "Niger", id: "NE" },
  { name: "Nigeria", id: "NG" },
  { name: "Niue", id: "NU" },
  { name: "Norfolk Island", id: "NF" },
  { name: "Northern Mariana Islands", id: "MP" },
  { name: "Norway", id: "NO" },
  { name: "Oman", id: "OM" },
  { name: "Pakistan", id: "PK" },
  { name: "Palau", id: "PW" },
  { name: "Palestinian Territory, Occupied", id: "PS" },
  { name: "Panama", id: "PA" },
  { name: "Papua New Guinea", id: "PG" },
  { name: "Paraguay", id: "PY" },
  { name: "Peru", id: "PE" },
  { name: "Philippines", id: "PH" },
  { name: "Pitcairn", id: "PN" },
  { name: "Poland", id: "PL" },
  { name: "Portugal", id: "PT" },
  { name: "Puerto Rico", id: "PR" },
  { name: "Qatar", id: "QA" },
  { name: "Reunion", id: "RE" },
  { name: "Romania", id: "RO" },
  { name: "Russian Federation", id: "RU" },
  { name: "RWANDA", id: "RW" },
  { name: "Saint Helena", id: "SH" },
  { name: "Saint Kitts and Nevis", id: "KN" },
  { name: "Saint Lucia", id: "LC" },
  { name: "Saint Pierre and Miquelon", id: "PM" },
  { name: "Saint Vincent and the Grenadines", id: "VC" },
  { name: "Samoa", id: "WS" },
  { name: "San Marino", id: "SM" },
  { name: "Sao Tome and Principe", id: "ST" },
  { name: "Saudi Arabia", id: "SA" },
  { name: "Senegal", id: "SN" },
  { name: "Serbia and Montenegro", id: "CS" },
  { name: "Seychelles", id: "SC" },
  { name: "Sierra Leone", id: "SL" },
  { name: "Singapore", id: "SG" },
  { name: "Slovakia", id: "SK" },
  { name: "Slovenia", id: "SI" },
  { name: "Solomon Islands", id: "SB" },
  { name: "Somalia", id: "SO" },
  { name: "South Africa", id: "ZA" },
  { name: "South Georgia and the South Sandwich Islands", id: "GS" },
  { name: "Spain", id: "ES" },
  { name: "Sri Lanka", id: "LK" },
  { name: "Sudan", id: "SD" },
  { name: "Suriname", id: "SR" },
  { name: "Svalbard and Jan Mayen", id: "SJ" },
  { name: "Swaziland", id: "SZ" },
  { name: "Sweden", id: "SE" },
  { name: "Switzerland", id: "CH" },
  { name: "Syrian Arab Republic", id: "SY" },
  { name: "Taiwan, Province of China", id: "TW" },
  { name: "Tajikistan", id: "TJ" },
  { name: "Tanzania, United Republic of", id: "TZ" },
  { name: "Thailand", id: "TH" },
  { name: "Timor-Leste", id: "TL" },
  { name: "Togo", id: "TG" },
  { name: "Tokelau", id: "TK" },
  { name: "Tonga", id: "TO" },
  { name: "Trinidad and Tobago", id: "TT" },
  { name: "Tunisia", id: "TN" },
  { name: "Turkey", id: "TR" },
  { name: "Turkmenistan", id: "TM" },
  { name: "Turks and Caicos Islands", id: "TC" },
  { name: "Tuvalu", id: "TV" },
  { name: "Uganda", id: "UG" },
  { name: "Ukraine", id: "UA" },
  { name: "United Arab Emirates", id: "AE" },
  { name: "United Kingdom", id: "GB" },
  { name: "United States", id: "US" },
  { name: "United States Minor Outlying Islands", id: "UM" },
  { name: "Uruguay", id: "UY" },
  { name: "Uzbekistan", id: "UZ" },
  { name: "Vanuatu", id: "VU" },
  { name: "Venezuela", id: "VE" },
  { name: "Viet Nam", id: "VN" },
  { name: "Virgin Islands, British", id: "VG" },
  { name: "Virgin Islands, U.S.", id: "VI" },
  { name: "Wallis and Futuna", id: "WF" },
  { name: "Western Sahara", id: "EH" },
  { name: "Yemen", id: "YE" },
  { name: "Zambia", id: "ZM" },
  { name: "Zimbabwe", id: "ZW" },
];
```
=== EOF: src\seed\seed-countries.ts

===  src\lib\prisma.ts
```typescript
import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined
}

const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
```
=== EOF: src\lib\prisma.ts

===  src\interfaces\product.interface.ts
```typescript
export interface Product {
  id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: Size[];
  slug: string;
  tags: string[];
  title: string;
  //todo: type: Type;
  gender: Category;
}

export interface CartProduct {
  id: string;
  slug: string;
  title: string;
  price: number;
  quantity: number;
  size: Size;
  image: string;
}



export type Category = 'men'|'women'|'kid'|'unisex';
export type Size = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
export type Type = 'shirts'|'pants'|'hoodies'|'hats';
```
=== EOF: src\interfaces\product.interface.ts

===  src\interfaces\index.ts
```typescript



export * from './address.interface';
export * from './country.interface';
export * from './product.interface';
```
=== EOF: src\interfaces\index.ts

===  src\interfaces\country.interface.ts
```typescript



export interface Country {
  id: string;
  name: string;
}
```
=== EOF: src\interfaces\country.interface.ts

===  src\interfaces\address.interface.ts
```typescript
export interface Address {
  firstName: string;
  lastName: string;
  address: string;
  address2?: string;
  postalCode: string;
  city: string;
  country: string;
  phone: string;
}
```
=== EOF: src\interfaces\address.interface.ts

===  src\config\fonts.ts
```typescript
import { Inter, Montserrat_Alternates } from 'next/font/google';




export const inter = Inter({ subsets: ['latin'] });


export const titleFont = Montserrat_Alternates({ 
  subsets: ['latin'],
  weight: ['500', '700'],
});
```
=== EOF: src\config\fonts.ts

===  src\app\layout.tsx
```tsx
import type { Metadata } from "next";
import { inter } from "@/config/fonts";

import "./globals.css";
import { Provider } from "@/components";

export const metadata: Metadata = {
  title: {
    template: "%s - Teslo | Shop",
    default: "Home - Teslo | Shop",
  },
  description: "Una tienda virtual de productos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
```
=== EOF: src\app\layout.tsx

===  src\app\globals.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary: #274494;
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;
}
/* 
@media (prefers-color-scheme: dark) {
  :root {
    --foreground-rgb: 255, 255, 255;
    --background-start-rgb: 0, 0, 0;
    --background-end-rgb: 0, 0, 0;
  }
} */ 

body {
  color: rgb(var(--foreground-rgb));
  background: linear-gradient(
      to bottom,
      transparent,
      rgb(var(--background-start-rgb))
      )
      rgb(var(--background-end-rgb))
}



@keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
} 

@-webkit-keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}

.fade-in {
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}


.btn-primary {
  @apply bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded transition-all;
}

.btn-secondary {
  @apply bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded transition-all;
}

.btn-disabled {
  @apply bg-gray-600 text-white py-2 px-4 rounded transition-all;
}
```
=== EOF: src\app\globals.css

===  src\components\index.ts
```typescript




export * from './products/product-grid/ProductGrid';
export * from './products/product-grid/ProductGridItem';


export * from './provider/Provider';


export * from './product/slideshow/ProductSlideshow';
export * from './product/slideshow/ProductMobileSlideshow';

export * from './product/quantity-selector/QuantitySelector';
export * from './product/size-selector/SizeSelector';
export * from './product/stock-label/StockLabel';

export * from './ui/footer/Footer';
export * from './ui/not-found/PageNotFound';
export * from './ui/pagination/Pagination'
export * from './ui/sidebar/Sidebar';
export * from './ui/title/Title';
export * from './ui/top-menu/TopMenu';
```
=== EOF: src\components\index.ts

===  src\actions\index.ts
```typescript

export * from './address/delete-user-address';
export * from './address/get-user-address';
export * from './address/set-user-address';




export * from './auth/login';
export * from './auth/logout';
export * from './auth/register';

export * from './country/get-countries';

export * from './order/place-order';
export * from './order/get-order-by-id';
export * from './order/get-orders-by-user';


export * from './product/get-product-by-slug';
export * from './product/get-stock-by-slug';
export * from './product/product-pagination';
```
=== EOF: src\actions\index.ts

===  prisma\migrations\migration_lock.toml
```
# Please do not edit this file manually
# It should be added in your version-control system (e.g., Git)
provider = "postgresql"
```
=== EOF: prisma\migrations\migration_lock.toml

===  src\store\ui\ui-store.ts
```typescript
import { create } from 'zustand';

interface State {
  isSideMenuOpen: boolean;

  openSideMenu: () => void;
  closeSideMenu: () => void;

}


export const useUIStore = create<State>()((set) => ({
  isSideMenuOpen: false,

  openSideMenu: () => set({ isSideMenuOpen: true }),
  closeSideMenu: () => set({ isSideMenuOpen: false }),
}));
```
=== EOF: src\store\ui\ui-store.ts

===  src\store\cart\cart-store.ts
```typescript
import type { CartProduct } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  cart: CartProduct[];

  getTotalItems: () => number;
  getSummaryInformation: () => {
    subTotal: number;
    tax: number;
    total: number;
    itemsInCart: number;
  };

  addProductTocart: (product: CartProduct) => void;
  updateProductQuantity: (product: CartProduct, quantity: number) => void;
  removeProduct: (product: CartProduct) => void;

  clearCart: () => void;
}

export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],

      // Methods
      getTotalItems: () => {
        const { cart } = get();
        return cart.reduce((total, item) => total + item.quantity, 0);
      },

      getSummaryInformation: () => {
        const { cart } = get();

        const subTotal = cart.reduce(
          (subTotal, product) => product.quantity * product.price + subTotal,
          0
        );
        const tax = subTotal * 0.15;
        const total = subTotal + tax;
        const itemsInCart = cart.reduce(
          (total, item) => total + item.quantity,
          0
        );

        return {
          subTotal,
          tax,
          total,
          itemsInCart,
        };
      },

      addProductTocart: (product: CartProduct) => {
        const { cart } = get();

        // 1. Revisar si el producto existe en el carrito con la talla seleccionada
        const productInCart = cart.some(
          (item) => item.id === product.id && item.size === product.size
        );

        if (!productInCart) {
          set({ cart: [...cart, product] });
          return;
        }

        // 2. Se que el producto existe por talla... tengo que incrementar
        const updatedCartProducts = cart.map((item) => {
          if (item.id === product.id && item.size === product.size) {
            return { ...item, quantity: item.quantity + product.quantity };
          }

          return item;
        });

        set({ cart: updatedCartProducts });
      },

      updateProductQuantity: (product: CartProduct, quantity: number) => {
        const { cart } = get();

        const updatedCartProducts = cart.map((item) => {
          if (item.id === product.id && item.size === product.size) {
            return { ...item, quantity: quantity };
          }
          return item;
        });

        set({ cart: updatedCartProducts });
      },

      removeProduct: (product: CartProduct) => {
        const { cart } = get();
        const updatedCartProducts = cart.filter(
          (item) => item.id !== product.id || item.size !== product.size
        );

        set({ cart: updatedCartProducts });
      },

      clearCart: () => {
        set({ cart: [] });
      },
    }),

    {
      name: "shopping-cart",
    }
  )
);
```
=== EOF: src\store\cart\cart-store.ts

===  src\store\address\address-store.ts
```typescript
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  address: {
    firstName: string;
    lastName: string;
    address: string;
    address2?: string;
    postalCode: string;
    city: string;
    country: string;
    phone: string;
  };

  // Methods
  setAddress: (address: State["address"]) => void;
}

export const useAddressStore = create<State>()(
  persist(
    (set, get) => ({
      address: {
        firstName: "",
        lastName: "",
        address: "",
        address2: "",
        postalCode: "",
        city: "",
        country: "",
        phone: "",
      },

      setAddress: (address) => {
        set({ address });
      },
    }),
    {
      name: "address-storage",
    }
  )
);
```
=== EOF: src\store\address\address-store.ts

===  src\app\auth\layout.tsx
```tsx
import { auth } from '@/auth.config';
import { redirect } from 'next/navigation';


export default async function ShopLayout( { children }: {
  children: React.ReactNode;
} ) {


  const session = await auth();


  if ( session?.user ) {
    redirect('/');
  }
  


  return (

    <main className="flex justify-center">
      <div className="w-full sm:w-[350px] px-10">

        { children }

      </div>
    </main>
  );
}
```
=== EOF: src\app\auth\layout.tsx

===  src\app\auth\layaout.tsx
```tsx

export default function ShopLayout({ children }: { children: React.ReactNode; }) {
   return (
      <main>
         {children}
      </main>
   );
}
```
=== EOF: src\app\auth\layaout.tsx

===  src\app\(shop)\page.tsx
```tsx
export const revalidate = 60; // 60 segundos


import { redirect } from 'next/navigation';

import { getPaginatedProductsWithImages } from '@/actions';
import { Pagination, ProductGrid, Title } from '@/components';



interface Props {
  searchParams: {
    page?: string; 
  }
}


export default async function Home({ searchParams }: Props) {

  const page = searchParams.page ? parseInt( searchParams.page ) : 1;

  const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({ page });


  if ( products.length === 0 ) {
    redirect('/');
  }


  return (
    <>
      <Title
        title="Tienda"
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid 
        products={ products }
      />


      <Pagination totalPages={ totalPages } />
      
    </>
  );
}
```
=== EOF: src\app\(shop)\page.tsx

===  src\app\(shop)\layout.tsx
```tsx
import { Footer, Sidebar, TopMenu } from '@/components';

export default function ShopLayout( { children }: {
  children: React.ReactNode;
} ) {
  return (
    <main className="min-h-screen">

      <TopMenu />
      <Sidebar />

      <div className="px-0 sm:px-10">
        { children }

      </div>

      <Footer />
    </main>
  );
}
```
=== EOF: src\app\(shop)\layout.tsx

===  src\components\provider\Provider.tsx
```tsx
'use client';

import { SessionProvider } from 'next-auth/react';


interface Props {
  children: React.ReactNode;
}


export const Provider = ({ children }: Props) => {


  return (
    <SessionProvider>
      { children }
    </SessionProvider>
  )
}
```
=== EOF: src\components\provider\Provider.tsx

===  src\actions\product\product-pagination.ts
```typescript
"use server";

import prisma from "@/lib/prisma";
import { Gender } from "@prisma/client";

interface PaginationOptions {
  page?: number;
  take?: number;
  gender?: Gender;
}

export const getPaginatedProductsWithImages = async ({
  page = 1,
  take = 12,
  gender,
}: PaginationOptions) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  try {
    // 1. Obtener los productos
    const products = await prisma.product.findMany({
      take: take,
      skip: (page - 1) * take,
      include: {
        ProductImage: {
          take: 2,
          select: {
            url: true,
          },
        },
      },
      //! Por género
      where: {
        gender: gender,
      },
    });

    // 2. Obtener el total de páginas
    // todo:
    const totalCount = await prisma.product.count({
      where: {
        gender: gender,
      },
    });
    
    const totalPages = Math.ceil(totalCount / take);

    return {
      currentPage: page,
      totalPages: totalPages,
      products: products.map((product) => ({
        ...product,
        images: product.ProductImage.map((image) => image.url),
      })),
    };
  } catch (error) {
    throw new Error("No se pudo cargar los productos");
  }
};
```
=== EOF: src\actions\product\product-pagination.ts

===  src\actions\product\get-stock-by-slug.ts
```typescript
'use server';

import prisma from '@/lib/prisma';
// import { sleep } from '@/utils';


export const getStockBySlug = async( slug: string ): Promise<number> => {

  try {

    // await sleep(3);


    const stock = await prisma.product.findFirst({
      where: { slug },
      select: { inStock: true }
    });

    return stock?.inStock ?? 0;

  } catch (error) {
    return 0;
  }


}
```
=== EOF: src\actions\product\get-stock-by-slug.ts

===  src\actions\product\get-product-by-slug.ts
```typescript
'use server';

import prisma from '@/lib/prisma';


export const getProductBySlug = async( slug: string ) => {


  try {

    const product = await prisma.product.findFirst({
      include: {
        ProductImage: {
          select: {
            url: true
          }
        }
      },
      where: {
        slug: slug,
      }
    })


    if ( !product ) return null;

    return {
      ...product,
      images: product.ProductImage.map( image => image.url )
    };

    
  } catch (error) {
    console.log(error);
    throw new Error('Error al obtener producto por slug');
  }



}
```
=== EOF: src\actions\product\get-product-by-slug.ts

===  src\actions\order\place-order.ts
```typescript
"use server";
import prisma from "@/lib/prisma";

import { auth } from "@/auth.config";
import type { Address, Size } from "@/interfaces";

interface ProductToOrder {
  productId: string;
  quantity: number;
  size: Size;
}

export const placeOrder = async (
  productIds: ProductToOrder[],
  address: Address
) => {
  const session = await auth();
  const userId = session?.user.id;

  // Verificar sesión de usuario
  if (!userId) {
    return {
      ok: false,
      message: "No hay sesión de usuario",
    };
  }

  // Obtener la información de los productos
  // Nota: recuerden que podemos llevar 2+ productos con el mismo ID
  const products = await prisma.product.findMany({
    where: {
      id: {
        in: productIds.map((p) => p.productId),
      },
    },
  });

  // Calcular los montos // Encabezado
  const itemsInOrder = productIds.reduce((count, p) => count + p.quantity, 0);

  // Los totales de tax, subtotal, y total
  const { subTotal, tax, total } = productIds.reduce(
    (totals, item) => {
      const productQuantity = item.quantity;
      const product = products.find((product) => product.id === item.productId);

      if (!product) throw new Error(`${item.productId} no existe - 500`);

      const subTotal = product.price * productQuantity;

      totals.subTotal += subTotal;
      totals.tax += subTotal * 0.15;
      totals.total += subTotal * 1.15;

      return totals;
    },
    { subTotal: 0, tax: 0, total: 0 }
  );

  // Crear la transacción de base de datos
  try {

    const prismaTx = await prisma.$transaction(async (tx) => {
      // 1. Actualizar el stock de los productos
      const updatedProductsPromises = products.map((product) => {
        //  Acumular los valores
        const productQuantity = productIds
          .filter((p) => p.productId === product.id)
          .reduce((acc, item) => item.quantity + acc, 0);

        if (productQuantity === 0) {
          throw new Error(`${product.id} no tiene cantidad definida`);
        }

        return tx.product.update({
          where: { id: product.id },
          data: {
            // inStock: product.inStock - productQuantity // no hacer
            inStock: {
              decrement: productQuantity,
            },
          },
        });
      });

      const updatedProducts = await Promise.all(updatedProductsPromises);

      // Verificar valores negativos en las existencia = no hay stock
      updatedProducts.forEach((product) => {
        if (product.inStock < 0) {
          throw new Error(`${product.title} no tiene inventario suficiente`);
        }
      });

      // 2. Crear la orden - Encabezado - Detalles
      const order = await tx.order.create({
        data: {
          userId: userId,
          itemsInOrder: itemsInOrder,
          subTotal: subTotal,
          tax: tax,
          total: total,

          OrderItem: {
            createMany: {
              data: productIds.map((p) => ({
                quantity: p.quantity,
                size: p.size,
                productId: p.productId,
                price:
                  products.find((product) => product.id === p.productId)
                    ?.price ?? 0,
              })),
            },
          },
        },
      });

      // Validar, si el price es cero, entonces, lanzar un error

      // 3. Crear la direccion de la orden
      // Address
      const { country, ...restAddress } = address;
      const orderAddress = await tx.orderAddress.create({
        data: {
          ...restAddress,
          countryId: country,
          orderId: order.id,
        },
      });

      return {
        updatedProducts: updatedProducts,
        order: order,
        orderAddress: orderAddress,
      };
    });


    return {
      ok: true,
      order: prismaTx.order,
      prismaTx: prismaTx,
    }


  } catch (error: any) {
    return {
      ok: false,
      message: error?.message,
    };
  }
};
```
=== EOF: src\actions\order\place-order.ts

===  src\actions\order\get-orders-by-user.ts
```typescript
'use server';

import { auth } from '@/auth.config';
import prisma from '@/lib/prisma';



export const getOrdersByUser = async() => {

  const session = await auth();

  if ( !session?.user ) {
    return {
      ok: false,
      message: 'Debe de estar autenticado'
    }
  }

  const orders = await prisma.order.findMany({
    where: {
      userId: session.user.id
    },
    include: {
      OrderAddress: {
        select: {
          firstName: true,
          lastName: true
        }
      }
    }
  })

  return {
    ok: true,
    orders: orders,
  }


}
```
=== EOF: src\actions\order\get-orders-by-user.ts

===  src\actions\order\get-order-by-id.ts
```typescript
'use server';

import { auth } from '@/auth.config';
import prisma from '@/lib/prisma';



export const getOrderById = async( id: string ) => {

  const session = await auth();

  if ( !session?.user ) {
    return {
      ok: false,
      message: 'Debe de estar autenticado'
    }
  }


  try {
    
    const order = await prisma.order.findUnique({
      where: { id },
      include: {
        OrderAddress: true,
        OrderItem: {
          select: {
            price: true,
            quantity: true,
            size: true,

            product: {
              select: {
                title: true,
                slug: true,

                ProductImage: {
                  select: {
                    url: true
                  },
                  take: 1
                }
              }
            }
          }
        }
      }
    });

    if( !order ) throw `${ id } no existe`;

    if ( session.user.role === 'user' ) {
      if ( session.user.id !== order.userId ) {
        throw `${ id } no es de ese usuario`
      }
    }



    return {
      ok: true,
      order: order,
    }


  } catch (error) {

    console.log(error);

    return {
      ok: false,
      message: 'Orden no existe'
    }


  }




}
```
=== EOF: src\actions\order\get-order-by-id.ts

===  src\actions\country\get-countries.ts
```typescript
'use server';

import prisma from '@/lib/prisma';


export const getCountries = async() => {

  try {
    
    const countries = await prisma.country.findMany({
      orderBy: {
        name: 'asc'
      }
    });

    return countries;


  } catch (error) {
    console.log(error);
    return [];
  }


}
```
=== EOF: src\actions\country\get-countries.ts

===  src\actions\auth\register.ts
```typescript
'use server';

import prisma from '@/lib/prisma';
import bcryptjs from 'bcryptjs'


export const registerUser = async( name: string, email: string, password: string ) => {


  try {
    
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email.toLowerCase(),
        password: bcryptjs.hashSync( password ),
      },
      select: {
        id: true,
        name: true,
        email: true,
      }
    })

    return {
      ok: true,
      user: user,
      message: 'Usuario creado'
    }

  } catch (error) {
    console.log(error);

    return {
      ok: false,
      message: 'No se pudo crear el usuario'
    }
  }

  

}
```
=== EOF: src\actions\auth\register.ts

===  src\actions\auth\logout.ts
```typescript
'use server';

import { signOut } from '@/auth.config';


export const logout = async() => {

  await signOut();


}
```
=== EOF: src\actions\auth\logout.ts

===  src\actions\auth\login.ts
```typescript
'use server';


import { signIn } from '@/auth.config';
import { sleep } from '@/utils';
 
// ...
 
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {

    // await sleep(2);
    
    await signIn('credentials', {
      ...Object.fromEntries(formData),
      redirect: false,
    });

    return 'Success';


  } catch (error) {
    console.log(error);

    return 'CredentialsSignin'


  }
}


export const login = async(email:string, password: string) => {

  try {

    await signIn('credentials',{ email, password })

    return {ok: true};
    
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: 'No se pudo iniciar sesión'
    }
    
  }


}

```
=== EOF: src\actions\auth\login.ts

===  src\actions\address\set-user-address.ts
```typescript
"use server";

import type { Address } from "@/interfaces";
import prisma from "@/lib/prisma";

export const setUserAddress = async (address: Address, userId: string) => {
  try {

    const newAddress = await createOrReplaceAddress( address, userId );

    return {
      ok: true,
      address: newAddress,
    }

  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "No se pudo grabar la dirección",
    };
  }
};

const createOrReplaceAddress = async (address: Address, userId: string) => {
  try {

    console.log({ userId });

    const storedAddress = await prisma.userAddress.findUnique({
      where: { userId },
    });

    const addressToSave = {
      userId: userId,
      address: address.address,
      address2: address.address2,
      countryId: address.country,
      city: address.city,
      firstName: address.firstName,
      lastName: address.lastName,
      phone: address.phone,
      postalCode: address.postalCode,
    };

    if (!storedAddress) {
      const newAddress = await prisma.userAddress.create({
        data: addressToSave,
      });

      return newAddress;
    }

    const updatedAddress = await prisma.userAddress.update({
      where: { userId },
      data: addressToSave
    })

    return updatedAddress;



  } catch (error) {
    console.log(error);
    throw new Error("No se pudo grabar la dirección");
  }
};
```
=== EOF: src\actions\address\set-user-address.ts

===  src\actions\address\get-user-address.ts
```typescript
'use server';

import prisma from '@/lib/prisma';



export const getUserAddress = async( userId: string ) => {
  try {

    const address = await prisma.userAddress.findUnique({
      where: { userId }
    });

    if ( !address ) return null;

    const {  countryId, address2, ...rest } = address;

    return {
      ...rest,
      country: countryId,
      address2: address2 ? address2 : '',
    };


  } catch (error) {
    console.log(error);
    return null;
  }
}




```
=== EOF: src\actions\address\get-user-address.ts

===  src\actions\address\delete-user-address.ts
```typescript
'use server';

import prisma from '@/lib/prisma';



export const deleteUserAddress = async( userId: string ) => {

  try {

    const deleted = await prisma.userAddress.delete({
      where: { userId }
    });

    return { ok: true };
    
  } catch (error) {
    console.log(error);
  
    return {
      ok: false,
      message: 'No se pudo eliminar la direccion'
    }


}
}
```
=== EOF: src\actions\address\delete-user-address.ts

===  prisma\migrations\20250101215422_dev\migration.sql
```
-- CreateEnum
CREATE TYPE "Size" AS ENUM ('XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('men', 'women', 'kid', 'unisex');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'user');

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "inStock" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "sizes" "Size"[] DEFAULT ARRAY[]::"Size"[],
    "slug" TEXT NOT NULL,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "gender" "Gender" NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductImage" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "ProductImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'user',
    "image" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserAddress" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "address2" TEXT,
    "postalCode" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserAddress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "subTotal" DOUBLE PRECISION NOT NULL,
    "tax" DOUBLE PRECISION NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "itemsInOrder" INTEGER NOT NULL,
    "isPaid" BOOLEAN NOT NULL DEFAULT false,
    "paidAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "size" "Size" NOT NULL,
    "orderId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderAddress" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "address2" TEXT,
    "postalCode" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,

    CONSTRAINT "OrderAddress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");

-- CreateIndex
CREATE INDEX "Product_gender_idx" ON "Product"("gender");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserAddress_userId_key" ON "UserAddress"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "OrderAddress_orderId_key" ON "OrderAddress"("orderId");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAddress" ADD CONSTRAINT "UserAddress_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAddress" ADD CONSTRAINT "UserAddress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderAddress" ADD CONSTRAINT "OrderAddress_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderAddress" ADD CONSTRAINT "OrderAddress_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
```
=== EOF: prisma\migrations\20250101215422_dev\migration.sql

===  src\app\auth\login\page.tsx
```tsx

import { titleFont } from '@/config/fonts';
import { LoginForm } from './ui/LoginForm';

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-52">

      <h1 className={ `${ titleFont.className } text-4xl mb-5` }>Ingresar</h1>

      <LoginForm />
    </div>
  );
}
```
=== EOF: src\app\auth\login\page.tsx

===  src\app\auth\new-account\page.tsx
```tsx
import { titleFont } from '@/config/fonts';
import { RegisterForm } from './ui/RegisterForm';

export default function NewAccountPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-52">

      <h1 className={ `${ titleFont.className } text-4xl mb-5` }>Nueva cuenta</h1>

      <RegisterForm />
    </div>
  );
}
```
=== EOF: src\app\auth\new-account\page.tsx

===  src\app\(shop)\profile\page.tsx
```tsx
import { auth } from "@/auth.config";
import { Title } from "@/components";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    // redirect('/auth/login?returnTo=/perfil');
    redirect("/");
  }

  return (
    <div>
      <Title title="Perfil" />

      <pre>{JSON.stringify(session.user, null, 2)}</pre>

      <h3 className="text-3xl mb-10">{ session.user.role  }</h3>
    </div>
  );
}
```
=== EOF: src\app\(shop)\profile\page.tsx

===  src\app\(shop)\products\page.tsx
```tsx

export default function ProductsPage() {
  return (
    <div>
      <h1>Products Page</h1>
    </div>
  );
}
```
=== EOF: src\app\(shop)\products\page.tsx

===  src\app\(shop)\product\not-found.tsx
```tsx
import { PageNotFound } from '@/components';


export default function NotFoundPageBySlug() {


  return (
    <PageNotFound />
  );
}
```
=== EOF: src\app\(shop)\product\not-found.tsx

===  src\app\(shop)\orders\page.tsx
```tsx
export const revalidate = 0;

// https://tailwindcomponents.com/component/hoverable-table
import { getOrdersByUser } from "@/actions";
import { Title } from "@/components";

import Link from "next/link";
import { redirect } from "next/navigation";
import { IoCardOutline } from "react-icons/io5";

export default async function OrdersPage() {
  const { ok, orders = [] } = await getOrdersByUser();

  if (!ok) {
    redirect("/auth/login");
  }

  return (
    <>
      <Title title="Orders" />

      <div className="mb-10">
        <table className="min-w-full">
          <thead className="bg-gray-200 border-b">
            <tr>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                #ID
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Nombre completo
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Estado
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Opciones
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {order.id.split("-").at(-1)}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {order.OrderAddress?.firstName} {order.OrderAddress?.lastName}
                </td>
                <td className="flex items-center text-sm  text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {order.isPaid ? (
                    <>
                      <IoCardOutline className="text-green-800" />
                      <span className="mx-2 text-green-800">Pagada</span>
                    </>
                  ) : (
                    <>
                      <IoCardOutline className="text-red-800" />
                      <span className="mx-2 text-red-800">No Pagada</span>
                    </>
                  )}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 ">
                  <Link href={`/orders/${ order.id }`} className="hover:underline">
                    Ver orden
                  </Link>
                </td>
              </tr>
            ))}

            
          </tbody>
        </table>
      </div>
    </>
  );
}
```
=== EOF: src\app\(shop)\orders\page.tsx

===  src\app\(shop)\empty\page.tsx
```tsx
import Link from 'next/link';
import { IoCartOutline } from 'react-icons/io5';

export default function EmptyPage() {
  return (
    <div className="flex justify-center items-center h-[800px]">

      <IoCartOutline size={ 80 } className="mx-5" />

      <div className="flex flex-col items-center">
        <h1 className="text-xl font-semibold">
          Tu carrito está vacío
        </h1>

        <Link 
          href='/'
          className="text-blue-500 mt-2 text-4xl"
        >
          Regresar
        </Link>

      </div>

      
    </div>
  );
}
```
=== EOF: src\app\(shop)\empty\page.tsx

===  src\app\(shop)\gender\not-found.tsx
```tsx
import { PageNotFound } from '@/components';


export default function GenderNotFoundPage() {


  return (
    <PageNotFound />
  );
}
```
=== EOF: src\app\(shop)\gender\not-found.tsx

===  src\app\(shop)\gender\error.tsx
```tsx
'use client';


import { PageNotFound } from '@/components';


export default function GenderErrorPage() {


  return (
    <PageNotFound />
  );
}
```
=== EOF: src\app\(shop)\gender\error.tsx

===  src\app\(shop)\category\not-found.tsx
```tsx
import { PageNotFound } from '@/components';


export default function NotFoundCategoryPage() {


  return (
    <PageNotFound />
  );
}
```
=== EOF: src\app\(shop)\category\not-found.tsx

===  src\app\(shop)\cart\page.tsx
```tsx
import Link from 'next/link';



import { Title } from '@/components';
import { ProductsInCart } from './ui/ProductsInCart';
import { OrderSummary } from './ui/OrderSummary';




export default function CartPage() {


  // redirect('/empty');



  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">

      <div className="flex flex-col w-[1000px]">

        <Title title='Carrito' />


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* Carrito */ }
          <div className="flex flex-col mt-5">
            <span className="text-xl">Agregar más items</span>
            <Link href="/" className="underline mb-5">
              Continúa comprando
            </Link>
         


          {/* Items */ }
            <ProductsInCart />
         
           </div>




          {/* Checkout - Resumen de orden */ }
          <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
            <h2 className="text-2xl mb-2">Resumen de orden</h2>

            <OrderSummary />

            <div className="mt-5 mb-2 w-full">
              <Link 
                className="flex btn-primary justify-center"
                href="/checkout/address">
                Checkout
              </Link>
            </div>


          </div>



        </div>



      </div>


    </div>
  );
}
```
=== EOF: src\app\(shop)\cart\page.tsx

===  src\app\(shop)\checkout\page.tsx
```tsx
import Link from 'next/link';

import { Title } from '@/components';
import { initialData } from '@/seed/seed';
import Image from 'next/image';


const productsInCart = [
  initialData.products[ 0 ],
  initialData.products[ 1 ],
  initialData.products[ 2 ],
];


export default function CheckoutPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">

      <div className="flex flex-col w-[1000px]">

        <Title title='Verificar orden' />


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* Carrito */ }
          <div className="flex flex-col mt-5">
            <span className="text-xl">Ajustar elementos</span>
            <Link href="/cart" className="underline mb-5">
              Editar carrito
            </Link>



            {/* Items */ }
            {
              productsInCart.map( product => (

                <div key={ product.slug } className="flex mb-5">
                  <Image
                    src={ `/products/${ product.images[ 0 ] }` }
                    width={ 100 }
                    height={ 100 }
                    style={ {
                      width: '100px',
                      height: '100px'
                    } }
                    alt={ product.title }
                    className="mr-5 rounded"
                  />

                  <div>
                    <p>{ product.title }</p>
                    <p>${ product.price } x 3</p>
                    <p className="font-bold">Subtotal: ${ product.price * 3 }</p>
                  </div>

                </div>


              ) )
            }
          </div>




          {/* Checkout - Resumen de orden */ }
          <div className="bg-white rounded-xl shadow-xl p-7">

            <h2 className="text-2xl mb-2">Dirección de entrega</h2>
            <div className="mb-10">
              <p className="text-xl">Fernando Herrera</p>
              <p>Av. Siempre viva 123</p>
              <p>Col. Centro</p>
              <p>Alcaldía Cuauhtémoc</p>
              <p>Ciudad de México</p>
              <p>CP 123123</p>
              <p>123.123.123</p>
            </div>

            {/* Divider */ }
            <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />


            <h2 className="text-2xl mb-2">Resumen de orden</h2>

            <div className="grid grid-cols-2">

              <span>No. Productos</span>
              <span className="text-right">3 artículos</span>

              <span>Subtotal</span>
              <span className="text-right">$ 100</span>

              <span>Impuestos (15%)</span>
              <span className="text-right">$ 100</span>

              <span className="mt-5 text-2xl">Total:</span>
              <span className="mt-5 text-2xl text-right">$ 100</span>


            </div>

            <div className="mt-5 mb-2 w-full">

              <p className="mb-5">
                {/* Disclaimer */ }
                <span className="text-xs">
                  Al hacer clic en Colocar orden, aceptas nuestros <a href="#" className="underline">términos y condiciones</a> y <a href="#" className="underline">política de privacidad</a>
                </span>
              </p>


              <Link
                className="flex btn-primary justify-center"
                href="/orders/123">
                Colocar orden
              </Link>
            </div>


          </div>



        </div>



      </div>


    </div>
  );
}
```
=== EOF: src\app\(shop)\checkout\page.tsx

===  src\app\(shop)\checkout\layout.tsx
```tsx
import { auth } from '@/auth.config';
import { redirect } from 'next/navigation';

export default async function CheckoutLayout({children}: {
 children: React.ReactNode;
}) {

  const session = await auth();

  if (!session?.user) {
    // redirect('/auth/login?returnTo=/perfil');
    redirect("/auth/login?redirectTo=/checkout/address");
  }

  
  return (
    <>
    { children }
    </>
  );
}
```
=== EOF: src\app\(shop)\checkout\layout.tsx

===  src\app\(shop)\admin\page.tsx
```tsx

export default function AdminPage() {
  return (
    <div>
      <h1>Admin Page</h1>
    </div>
  );
}
```
=== EOF: src\app\(shop)\admin\page.tsx

===  src\components\ui\top-menu\TopMenu.tsx
```tsx
"use client";
import { useEffect, useState } from 'react';

import Link from "next/link";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";

import { titleFont } from "@/config/fonts";
import { useCartStore, useUIStore } from "@/store";

export const TopMenu = () => {

  const openSideMenu = useUIStore((state) => state.openSideMenu);
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());
  
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [])
  


  return (
    <nav className="flex px-5 justify-between items-center w-full">
      {/* Logo */}
      <div>
        <Link href="/">
          <span className={`${titleFont.className } antialiased font-bold`}>
            Teslo
          </span>
          <span> | Shop</span>
        </Link>
      </div>

      {/* Center Menu */}
      <div className="hidden sm:block">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/gender/men"
        >
          Hombres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/gender/women"
        >
          Mujeres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/gender/kid"
        >
          Niños
        </Link>
      </div>

      {/* Search, Cart, Menu */}
      <div className="flex items-center">
        <Link href="/search" className="mx-2">
          <IoSearchOutline className="w-5 h-5" />
        </Link>

        <Link href={
          ( (totalItemsInCart === 0 ) && loaded )
            ? '/empty'
            : "/cart"
        } className="mx-2">
          <div className="relative">
            {  ( loaded && totalItemsInCart > 0) && (
              <span className="fade-in absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white">
                {totalItemsInCart}
              </span>
            )}
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <button
          onClick={openSideMenu}
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Menú
        </button>
      </div>
    </nav>
  );
};
```
=== EOF: src\components\ui\top-menu\TopMenu.tsx

===  src\components\ui\title\Title.tsx
```tsx
import { titleFont } from '@/config/fonts';

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}



export const Title = ({ title, subtitle, className }: Props) => {
  return (
    <div className={ `mt-3 ${ className }` }>
      <h1 className={ `${ titleFont.className } antialiased text-4xl font-semibold my-7` }>
        { title }
      </h1>

      {
        subtitle && (
          <h3 className="text-xl mb-5">{ subtitle }</h3>
        )
      }

    </div>
  )
}
```
=== EOF: src\components\ui\title\Title.tsx

===  src\components\ui\not-found\PageNotFound.tsx
```tsx
import Image from 'next/image';
import Link from 'next/link';
import { titleFont } from '@/config/fonts';

export const PageNotFound = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">

      <div className="text-center px-5 mx-5">
        <h2 className={ `${ titleFont.className } antialiased text-9xl` }>404</h2>
        <p className="font-semibold text-xl">Whoops! Lo sentimos mucho.</p>
        <p className="font-light">
          <span>Puedes regresar al </span>
          <Link
            href='/'
            className="font-normal hover:underline transition-all"
          >
            inicio
          </Link>
        </p>
      </div>



      <div className="px-5 mx-5">
        <Image
          src="/imgs/starman_750x750.png"
          alt="Starman"
          className="p-5 sm:p-0"
          width={ 550 }
          height={ 550 }
        />

      </div>


    </div>
  );
};
```
=== EOF: src\components\ui\not-found\PageNotFound.tsx

===  src\components\ui\pagination\Pagination.tsx
```tsx
'use client';


import { generatePaginationNumbers } from '@/utils';
import Link from 'next/link';
import clsx from 'clsx';
import { redirect, usePathname, useSearchParams } from 'next/navigation';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';


interface Props {
  totalPages: number;
}


export const Pagination = ({ totalPages }: Props) => {

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pageString = searchParams.get('page') ?? 1;
  const currentPage = isNaN( +pageString ) ? 1 : +pageString;

  if (currentPage < 1 || isNaN(+pageString) ) {
    redirect( pathname );
  }
 


  const allPages = generatePaginationNumbers(currentPage, totalPages);


  const createPageUrl = ( pageNumber: number | string ) => {

    const params = new URLSearchParams( searchParams );

    if ( pageNumber === '...' ) {
      return `${ pathname }?${ params.toString() }`
    }

    if ( +pageNumber <= 0 ) {
      return `${ pathname }`; //   href="/kid";
    }

    if ( +pageNumber > totalPages ) { // Next > 
      return `${pathname}?${ params.toString() }`;
    }

    params.set('page', pageNumber.toString());
    return `${  pathname }?${ params.toString() }`;

  }



  return (
    <div className="flex text-center justify-center mt-10 mb-32">

      <nav aria-label="Page navigation example">

        <ul className="flex list-style-none">
          <li className="page-item">
            <Link
              className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href={ createPageUrl( currentPage - 1 ) }
            >
              <IoChevronBackOutline size={30} />
            </Link>
          </li>

          {
            allPages.map( (page, index) => (

              <li key={ page } className="page-item">
                <Link
                  className={
                    clsx(
                      "page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none",
                      {
                        'bg-blue-600 shadow-sm text-white hover:text-white hover:bg-blue-700': page === currentPage
                      }
                    )
                  }
                  href={ createPageUrl( page ) }
                >
                  { page }
                </Link>
              </li>

            ))

          }


          

          <li className="page-item">
            <Link
              className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href={ createPageUrl( currentPage + 1 ) }
            >
              <IoChevronForwardOutline size={30} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
```
=== EOF: src\components\ui\pagination\Pagination.tsx

===  src\components\ui\sidebar\Sidebar.tsx
```tsx
"use client";

import Link from "next/link";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";

import { useUIStore } from "@/store";
import { logout } from "@/actions";

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);

  const { data: session } = useSession();
  const isAuthenticated = !!session?.user;
  const isAdmin = session?.user.role === "admin";

  return (
    <div>
      {/* Background black */}
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
      )}

      {/* Blur */}
      {isSideMenuOpen && (
        <div
          onClick={closeMenu}
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
        />
      )}

      {/* Sidemenu */}
      <nav
        className={clsx(
          "fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
          {
            "translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => closeMenu()}
        />

        {/* Input */}
        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Menú */}

        {isAuthenticated && (
          <>
            <Link
              href="/profile"
              onClick={() => closeMenu()}
              className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoPersonOutline size={30} />
              <span className="ml-3 text-xl">Perfil</span>
            </Link>

            <Link
              href="/orders"
              onClick={() => closeMenu()}
              className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoTicketOutline size={30} />
              <span className="ml-3 text-xl">Ordenes</span>
            </Link>
          </>
        )}

        {isAuthenticated && (
          <button
            className="flex w-full items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            onClick={() => logout()}
          >
            <IoLogOutOutline size={30} />
            <span className="ml-3 text-xl">Salir</span>
          </button>
        )}

        {!isAuthenticated && (
          <Link
            href="/auth/login"
            className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            onClick={() => closeMenu()}
          >
            <IoLogInOutline size={30} />
            <span className="ml-3 text-xl">Ingresar</span>
          </Link>
        )}

        {isAdmin && (
          <>
            {/* Line Separator */}
            <div className="w-full h-px bg-gray-200 my-10" />

            <Link
              href="/"
              className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoShirtOutline size={30} />
              <span className="ml-3 text-xl">Productos</span>
            </Link>

            <Link
              href="/"
              className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoTicketOutline size={30} />
              <span className="ml-3 text-xl">Ordenes</span>
            </Link>

            <Link
              href="/"
              className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoPeopleOutline size={30} />
              <span className="ml-3 text-xl">Usuarios</span>
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};
```
=== EOF: src\components\ui\sidebar\Sidebar.tsx

===  src\components\ui\footer\Footer.tsx
```tsx
import { titleFont } from '@/config/fonts';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className="flex w-full justify-center text-xs mb-10">

      <Link
        href='/'
      >
        <span className={`${ titleFont.className } antialiased font-bold `}>Teslo </span>
        <span>| shop </span>
        <span>© { new Date().getFullYear() }</span>
      </Link>

      <Link
        href='/'
        className="mx-3"
      >
        Privacidad & Legal
      </Link>

      <Link
        href='/'
        className="mx-3"
      >
        Ubicaciones
      </Link>


    </div>
  )
}
```
=== EOF: src\components\ui\footer\Footer.tsx

===  src\components\products\product-grid\ProductGridItem.tsx
```tsx
'use client';


import Image from 'next/image';
import Link from 'next/link';

import { Product } from '@/interfaces';
import { useState } from 'react';

interface Props {
  product: Product;
}


export const ProductGridItem = ( { product }: Props ) => {

  const [ displayImage, setDisplayImage ] = useState( product.images[ 0 ] );


  return (
    <div className="rounded-md overflow-hidden fade-in">
      <Link href={ `/product/${ product.slug }` }>
        <Image
          src={ `/products/${ displayImage }` }
          alt={ product.title }
          className="w-full object-cover rounded"
          width={ 500 }
          height={ 500 }
          onMouseEnter={ () => setDisplayImage( product.images[1] )  }
          onMouseLeave={ () => setDisplayImage( product.images[0] ) }
        />
      </Link>

      <div className="p-4 flex flex-col">
        <Link
          className="hover:text-blue-600"
          href={ `/product/${ product.slug }` }>
          { product.title }
        </Link>
        <span className="font-bold">${ product.price }</span>
      </div>

    </div>
  );
};
```
=== EOF: src\components\products\product-grid\ProductGridItem.tsx

===  src\components\products\product-grid\ProductGrid.tsx
```tsx
import { Product } from '@/interfaces';
import { ProductGridItem } from './ProductGridItem';

interface Props {
  products: Product[];
}


export const ProductGrid = ( { products }: Props ) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
      {
        products.map( product => (
          <ProductGridItem
            key={ product.slug }
            product={ product }
          />
        ) )
      }

    </div>
  );
};
```
=== EOF: src\components\products\product-grid\ProductGrid.tsx

===  src\components\product\stock-label\StockLabel.tsx
```tsx
"use client";

import { getStockBySlug } from "@/actions";
import { titleFont } from "@/config/fonts";
import { useEffect, useState } from "react";

interface Props {
  slug: string;
}

export const StockLabel = ({ slug }: Props) => {
  const [stock, setStock] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getStock();
  }, []);

  const getStock = async () => {
    const inStock = await getStockBySlug(slug);
    setStock(inStock);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <h1
          className={` ${titleFont.className} antialiased font-bold text-lg bg-gray-200 animate-pulse `}
        >
          &nbsp;
        </h1>
      ) : (
        <h1 className={` ${titleFont.className} antialiased font-bold text-lg`}>
          Stock: {stock}
        </h1>
      )}
    </>
  );
};
```
=== EOF: src\components\product\stock-label\StockLabel.tsx

===  src\components\product\size-selector\SizeSelector.tsx
```tsx
import type { Size } from '@/interfaces';
import clsx from 'clsx';


interface Props {
  selectedSize?: Size;
  availableSizes: Size[];  // ['SX', 'M', 'XL', 'XXL']

  onSizeChanged: ( size: Size ) => void;
}



export const SizeSelector = ({ selectedSize, availableSizes, onSizeChanged }: Props) => {

  return (
    <div className="my-5">
      <h3 className="font-bold mb-4">Tallas disponibles</h3>

      <div className="flex">

        {
          availableSizes.map( size => (
            <button 
              key={ size }
              onClick={ () => onSizeChanged(size) }
              className={
                clsx(
                  "mx-2 hover:underline text-lg",
                  {
                    'underline': size === selectedSize
                  }
                )
              }
            >
              { size}
            </button>
          ))

        }


      </div>



    </div>
  )
}
```
=== EOF: src\components\product\size-selector\SizeSelector.tsx

===  src\components\product\quantity-selector\QuantitySelector.tsx
```tsx
'use client';

import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';

interface Props {
  quantity: number;

  onQuantityChanged: ( value: number ) => void; 
}



export const QuantitySelector = ( { quantity, onQuantityChanged }: Props ) => {


  const onValueChanged = ( value: number ) => {
    
    if ( quantity + value < 1 ) return;

    onQuantityChanged( quantity + value );
  };


  return (
    <div className="flex">
      <button onClick={ () => onValueChanged( -1 ) }>
        <IoRemoveCircleOutline size={ 30 } />
      </button>

      <span className="w-20 mx-3 px-5 bg-gray-100 text-center rounded">
        { quantity }
      </span>

      <button onClick={ () => onValueChanged( +1 ) }>
        <IoAddCircleOutline size={ 30 } />
      </button>

    </div>
  );
};
```
=== EOF: src\components\product\quantity-selector\QuantitySelector.tsx

===  src\components\product\slideshow\slideshow.css
```css

.swiper-slide {
  
  /* Center slide text vertically */
  display: flex;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.swiper {
  width: 100%;
  height: 900px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}


.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```
=== EOF: src\components\product\slideshow\slideshow.css

===  src\components\product\slideshow\ProductSlideshow.tsx
```tsx
'use client';

import { useState } from 'react';

import { Swiper as SwiperObject } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './slideshow.css';
import Image from 'next/image';



interface Props {
  images: string[];
  title: string;
  className?: string;
}



export const ProductSlideshow = ( { images, title, className }: Props ) => {

  const [ thumbsSwiper, setThumbsSwiper ] = useState<SwiperObject>();


  return (
    <div className={ className }>

      <Swiper
        style={ {
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        } as React.CSSProperties
        }
        spaceBetween={ 10 }
        navigation={ true }
        autoplay={{
          delay: 2500
        }}
        thumbs={ {
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
        } }
        modules={ [ FreeMode, Navigation, Thumbs, Autoplay ] }
        className="mySwiper2"
      >

        {
          images.map( image => (
            <SwiperSlide key={ image }>
              <Image
                width={ 1024 }
                height={ 800 }
                src={ `/products/${ image }` }
                alt={ title }
                className="rounded-lg object-fill"
              />
            </SwiperSlide>

          ) )
        }
      </Swiper>


      <Swiper
        onSwiper={ setThumbsSwiper }
        spaceBetween={ 10 }
        slidesPerView={ 4 }
        freeMode={ true }
        watchSlidesProgress={ true }
        modules={ [ FreeMode, Navigation, Thumbs ] }
        className="mySwiper"
      >
        {
          images.map( image => (
            <SwiperSlide key={ image }>
              <Image
                width={ 300 }
                height={ 300 }
                src={ `/products/${ image }` }
                alt={ title }
                className="rounded-lg object-fill"
              />
            </SwiperSlide>

          ) )
        }
      </Swiper>

    </div>
  );
};
```
=== EOF: src\components\product\slideshow\ProductSlideshow.tsx

===  src\components\product\slideshow\ProductMobileSlideshow.tsx
```tsx
'use client';

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './slideshow.css';



interface Props {
  images: string[];
  title: string;
  className?: string;
}



export const ProductMobileSlideshow = ( { images, title, className }: Props ) => {


  return (
    <div className={ className }>

      <Swiper
        style={{
          width: '100vw',
          height: '500px'
        }}
        pagination
        autoplay={{
          delay: 2500
        }}
        modules={ [ FreeMode, Autoplay, Pagination ] }
        className="mySwiper2"
      >

        {
          images.map( image => (
            <SwiperSlide key={ image }>
              <Image
                width={ 600 }
                height={ 500 }
                src={ `/products/${ image }` }
                alt={ title }
                className="object-fill"
              />
            </SwiperSlide>

          ) )
        }
      </Swiper>



    </div>
  );
};
```
=== EOF: src\components\product\slideshow\ProductMobileSlideshow.tsx

===  src\app\auth\login\ui\LoginForm.tsx
```tsx
"use client";

import { useEffect } from 'react';
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";

import { authenticate } from "@/actions";
import { IoInformationOutline } from "react-icons/io5";
import clsx from 'clsx';
// import { useRouter } from 'next/navigation';

export const LoginForm = () => {


  // const router = useRouter();
  const [state, dispatch] = useFormState(authenticate, undefined);
  
  console.log(state);

  useEffect(() => {
    if ( state === 'Success' ) {
      // redireccionar
      // router.replace('/');
      window.location.replace('/');
    }

  },[state]);



  return (
    <form action={dispatch} className="flex flex-col">
      <label htmlFor="email">Correo electrónico</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="email"
        name="email"
      />

      <label htmlFor="email">Contraseña</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="password"
        name="password"
      />

      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {state === "CredentialsSignin" && (
          <div className="flex flex-row mb-2">
            <IoInformationOutline className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">
              Credenciales no son correctas
            </p>
          </div>
        )}
      </div>

        <LoginButton />
      {/* <button type="submit" className="btn-primary">
        Ingresar
      </button> */}

      {/* divisor l ine */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/new-account" className="btn-secondary text-center">
        Crear una nueva cuenta
      </Link>
    </form>
  );
};

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button 
      type="submit" 
      className={ clsx({
        "btn-primary": !pending,
        "btn-disabled": pending
      })}
      disabled={ pending }
      >
      Ingresar
    </button>
  );
}
```
=== EOF: src\app\auth\login\ui\LoginForm.tsx

===  src\app\api\auth\[...nextauth]\route.ts
```typescript
import { handlers } from '@/auth.config';




export const { GET, POST } = handlers
```
=== EOF: src\app\api\auth\[...nextauth]\route.ts

===  src\app\auth\new-account\ui\RegisterForm.tsx
```tsx
"use client";

import clsx from 'clsx';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';

import { login, registerUser } from '@/actions';
import { useState } from 'react';


type FormInputs = {
  name: string;
  email: string;
  password: string;  
}



export const RegisterForm = () => {

  const [errorMessage, setErrorMessage] = useState('')
  const { register, handleSubmit, formState: {errors} } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async(data) => {
    setErrorMessage('');
    const { name, email, password } = data;
    
    // Server action
    const resp = await registerUser( name, email, password );

    if ( !resp.ok ) {
      setErrorMessage( resp.message );
      return;
    }

    await login( email.toLowerCase(), password );
    window.location.replace('/');


  }


  return (
    <form onSubmit={ handleSubmit( onSubmit ) }  className="flex flex-col">

      {/* {
        errors.name?.type === 'required' && (
          <span className="text-red-500">* El nombre es obligatorio</span>
        )
      } */}


      <label htmlFor="email">Nombre completo</label>
      <input
        className={
          clsx(
            "px-5 py-2 border bg-gray-200 rounded mb-5",
            {
              'border-red-500': errors.name
            }
          )
        }
        type="text"
        autoFocus
        { ...register('name', { required: true }) }
      />

      <label htmlFor="email">Correo electrónico</label>
      <input
        className={
          clsx(
            "px-5 py-2 border bg-gray-200 rounded mb-5",
            {
              'border-red-500': errors.email
            }
          )
        }
        type="email"
        { ...register('email', { required: true, pattern: /^\S+@\S+$/i }) }
      />

      <label htmlFor="email">Contraseña</label>
      <input
        className={
          clsx(
            "px-5 py-2 border bg-gray-200 rounded mb-5",
            {
              'border-red-500': errors.password
            }
          )
        }
        type="password"
        { ...register('password', { required: true, minLength: 6 }) }
      />

      
        <span className="text-red-500">{ errorMessage } </span>
        
      

      <button className="btn-primary">Crear cuenta</button>

      {/* divisor l ine */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/login" className="btn-secondary text-center">
        Ingresar
      </Link>
    </form>
  );
};
```
=== EOF: src\app\auth\new-account\ui\RegisterForm.tsx

===  src\app\(shop)\product\[slug]\page.tsx
```tsx
export const revalidate = 604800; //7 días
import { Metadata, ResolvingMetadata } from "next";

import { notFound } from "next/navigation";

import { titleFont } from "@/config/fonts";
import {
  ProductMobileSlideshow,
  ProductSlideshow,
  QuantitySelector,
  SizeSelector,
  StockLabel,
} from "@/components";
import { getProductBySlug } from "@/actions";
import { AddToCart } from './ui/AddToCart';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const product = await getProductBySlug(slug);

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: product?.title ?? "Producto no encontrado",
    description: product?.description ?? "",
    openGraph: {
      title: product?.title ?? "Producto no encontrado",
      description: product?.description ?? "",
      // images: [], // https://misitioweb.com/products/image.png
      images: [ `/products/${ product?.images[1] }`],
    },
  };
}

export default async function ProductBySlugPage({ params }: Props) {
  const { slug } = params;
  const product = await getProductBySlug(slug);
  console.log(product);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* Slideshow */}
      <div className="col-span-1 md:col-span-2 ">
        {/* Mobile Slideshow */}
        <ProductMobileSlideshow
          title={product.title}
          images={product.images}
          className="block md:hidden"
        />

        {/* Desktop Slideshow */}
        <ProductSlideshow
          title={product.title}
          images={product.images}
          className="hidden md:block"
        />
      </div>

      {/* Detalles */}
      <div className="col-span-1 px-5">
        <StockLabel slug={product.slug} />

        <h1 className={` ${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>

        <p className="text-lg mb-5">${product.price}</p>

        <AddToCart product={ product } />

        {/* Descripción */}
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}
```
=== EOF: src\app\(shop)\product\[slug]\page.tsx

===  src\app\(shop)\gender\[gender]\page.tsx
```tsx
export const revalidate = 60; // 60 segundos

import { getPaginatedProductsWithImages } from '@/actions';
import { Pagination, ProductGrid, Title } from '@/components';

import { Gender } from '@prisma/client';
import { redirect } from 'next/navigation';



interface Props {
  params: {
    gender: string;
  },
  searchParams: {
    page?: string; 
  }
}


export default async function GenderByPage({ params, searchParams }: Props) {

  const { gender } = params;

  const page = searchParams.page ? parseInt( searchParams.page ) : 1;

  const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({ 
    page, 
    gender: gender as Gender,
  });


  if ( products.length === 0 ) {
    redirect(`/gender/${ gender }`);
  }
  

  const labels: Record<string, string>  = {
    'men': 'para hombres',
    'women': 'para mujeres',
    'kid': 'para niños',
    'unisex': 'para todos'
  }

  // if ( id === 'kids' ) {
  //   notFound();
  // }


  return (
    <>
      <Title
        title={`Artículos de ${ labels[gender] }`}
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid 
        products={ products }
      />

      <Pagination totalPages={ totalPages }  />
      
    </>
  );
}
```
=== EOF: src\app\(shop)\gender\[gender]\page.tsx

===  src\app\(shop)\orders\[id]\page.tsx
```tsx
import Link from "next/link";

import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import clsx from "clsx";
import { IoCardOutline } from "react-icons/io5";
import { getOrderById } from "@/actions/order/get-order-by-id";
import { redirect } from "next/navigation";
import { currencyFormat } from "@/utils";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

interface Props {
  params: {
    id: string;
  };
}

export default async function OrdersByIdPage({ params }: Props) {
  const { id } = params;

  // Todo: Llamar el server action

  const { ok, order } = await getOrderById(id);

  if (!ok) {
    redirect("/");
  }

  const address = order!.OrderAddress;

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title={`Orden #${id.split("-").at(-1)}`} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <div
              className={clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  "bg-red-500": !order!.isPaid,
                  "bg-green-700": order!.isPaid,
                }
              )}
            >
              <IoCardOutline size={30} />
              {/* <span className="mx-2">Pendiente de pago</span> */}
              <span className="mx-2">
                {order?.isPaid ? "Pagada" : "No pagada"}
              </span>
            </div>

            {/* Items */}
            {order!.OrderItem.map((item) => (
              <div
                key={item.product.slug + "-" + item.size}
                className="flex mb-5"
              >
                <Image
                  src={`/products/${item.product.ProductImage[0].url}`}
                  width={100}
                  height={100}
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                  alt={item.product.title}
                  className="mr-5 rounded"
                />

                <div>
                  <p>{item.product.title}</p>
                  <p>
                    ${item.price} x {item.quantity}
                  </p>
                  <p className="font-bold">
                    Subtotal: {currencyFormat(item.price * item.quantity)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout - Resumen de orden */}
          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2">Dirección de entrega</h2>
            <div className="mb-10">
              <p className="text-xl">
                {address!.firstName} {address!.lastName}
              </p>
              <p>{address!.address}</p>
              <p>{address!.address2}</p>
              <p>{address!.postalCode}</p>
              <p>
                {address!.city}, {address!.countryId}
              </p>
              <p>{address!.phone}</p>
            </div>

            {/* Divider */}
            <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

            <h2 className="text-2xl mb-2">Resumen de orden</h2>

            <div className="grid grid-cols-2">
              <span>No. Productos</span>
              <span className="text-right">
                {order?.itemsInOrder === 1
                  ? "1 artículo"
                  : `${order?.itemsInOrder} artículos`}
              </span>

              <span>Subtotal</span>
              <span className="text-right">
                {currencyFormat(order!.subTotal)}
              </span>

              <span>Impuestos (15%)</span>
              <span className="text-right">{currencyFormat(order!.tax)}</span>

              <span className="mt-5 text-2xl">Total:</span>
              <span className="mt-5 text-2xl text-right">
                {currencyFormat(order!.total)}
              </span>
            </div>

            <div className="mt-5 mb-2 w-full">
              <div
                className={clsx(
                  "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                  {
                    "bg-red-500": !order!.isPaid,
                    "bg-green-700": order!.isPaid,
                  }
                )}
              >
                <IoCardOutline size={30} />
                {/* <span className="mx-2">Pendiente de pago</span> */}
                <span className="mx-2">
                  {order?.isPaid ? "Pagada" : "No pagada"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```
=== EOF: src\app\(shop)\orders\[id]\page.tsx

===  src\app\(shop)\cart\ui\ProductsInCart.tsx
```tsx
'use client';
import { useEffect, useState } from 'react';

import Image from 'next/image';

import { useCartStore } from '@/store';
import { QuantitySelector } from '@/components';
import Link from 'next/link';



export const ProductsInCart = () => {

  const updateProductQuantity = useCartStore( state => state.updateProductQuantity );
  const removeProduct = useCartStore( state => state.removeProduct );

  const [loaded, setLoaded] = useState(false);
  const productsInCart = useCartStore( state => state.cart );


  useEffect(() => {
    setLoaded(true) ;
  });




  if( !loaded ) {
    return <p>Loading...</p>
  }

  return (
    <>
      {productsInCart.map((product) => (
        <div key={ `${ product.slug }-${ product.size }`  } className="flex mb-5">
          <Image
            src={`/products/${product.image }`}
            width={100}
            height={100}
            style={{
              width: "100px",
              height: "100px",
            }}
            alt={product.title}
            className="mr-5 rounded"
          />

          <div>
            <Link 
              className="hover:underline cursor-pointer"
              href={ `/product/${ product.slug } ` }>
              { product.size } - {product.title}
            </Link>
            
            <p>${product.price}</p>
            <QuantitySelector 
              quantity={ product.quantity } 
              onQuantityChanged={ quantity => updateProductQuantity(product, quantity) }
            />

            <button 
              onClick={ () => removeProduct(product) }
              className="underline mt-3">Remover</button>
          </div>
        </div>
      ))}
    </>
  );
};
```
=== EOF: src\app\(shop)\cart\ui\ProductsInCart.tsx

===  src\app\(shop)\cart\ui\OrderSummary.tsx
```tsx
"use client";

import { useCartStore } from "@/store";
import { currencyFormat } from "@/utils";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

export const OrderSummary = () => {

  const router = useRouter();

  const [loaded, setLoaded] = useState(false);
  const { itemsInCart, subTotal, tax, total } = useCartStore((state) =>
    state.getSummaryInformation()
  );

  useEffect(() => {
    setLoaded(true);
  }, []);


  useEffect(() => {

    if ( itemsInCart === 0 && loaded === true )   {
      router.replace('/empty')
    }


  },[ itemsInCart, loaded ])



  if (!loaded) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-2">
      <span>No. Productos</span>
      <span className="text-right">
        {itemsInCart === 1 ? "1 artículo" : `${itemsInCart} artículos`}
      </span>

      <span>Subtotal</span>
      <span className="text-right">{currencyFormat(subTotal)}</span>

      <span>Impuestos (15%)</span>
      <span className="text-right">{currencyFormat(tax)}</span>

      <span className="mt-5 text-2xl">Total:</span>
      <span className="mt-5 text-2xl text-right">{currencyFormat(total)}</span>
    </div>
  );
};
```
=== EOF: src\app\(shop)\cart\ui\OrderSummary.tsx

===  src\app\(shop)\category\[id]\page.tsx
```tsx
import { ProductGrid, Title } from '@/components';
import { Category } from '@/interfaces';
import { initialData } from '@/seed/seed';
import { notFound } from 'next/navigation';

const seedProducts = initialData.products;


interface Props {
  params: {
    id: Category;
  }
}


export default async function CategoryPage({ params }: Props) {

  const { id } = await params;
  const products = seedProducts.filter(product => product.gender === id);

  const labels: Record<Category, string> = {
    'men': 'para hombres',
    'women': 'para mujeres',
    'kid': 'para niños',
    'unisex': 'para todos'
  }

  // if ( id === 'kids' ) {
  //   notFound();
  // }


  return (
    <>
      <Title
        title={`Artículos de ${labels[id]}`}
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid
        products={products}
      />

    </>
  );
}
```
=== EOF: src\app\(shop)\category\[id]\page.tsx

===  src\app\(shop)\checkout\address\page.tsx
```tsx
import { Title } from "@/components";
import { AddressForm } from "./ui/AddressForm";

import { getCountries, getUserAddress } from "@/actions";
import { auth } from '@/auth.config';

export default async function AddressPage() {
  
  const countries = await getCountries();

  const session = await auth();

  if ( !session?.user ) {
    return (
      <h3 className="text-5xl">500 -  No hay sesión de usuario</h3>
    )
  }

  const userAddress = await getUserAddress(session.user.id) ?? undefined;
  


  return (
    <div className="flex flex-col sm:justify-center sm:items-center mb-72 px-10 sm:px-0">
      <div className="w-full  xl:w-[1000px] flex flex-col justify-center text-left">
        <Title title="Dirección" subtitle="Dirección de entrega" />

        <AddressForm countries={countries} userStoredAddress={ userAddress } />
      </div>
    </div>
  );
}
```
=== EOF: src\app\(shop)\checkout\address\page.tsx

===  src\app\(shop)\checkout\(checkout)\page.tsx
```tsx
import Link from "next/link";

import { Title } from "@/components";
import Image from "next/image";
import { ProductsInCart } from "./ui/ProductsInCart";
import { PlaceOrder } from './ui/PlaceOrder';

export default function CheckoutPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Verificar orden" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Ajustar elementos</span>
            <Link href="/cart" className="underline mb-5">
              Editar carrito
            </Link>

            {/* Items */}
            <ProductsInCart />
          </div>

          {/* Checkout - Resumen de orden */}
          <PlaceOrder />
        </div>
      </div>
    </div>
  );
}
```
=== EOF: src\app\(shop)\checkout\(checkout)\page.tsx

===  src\app\(shop)\product\[slug]\ui\AddToCart.tsx
```tsx
"use client";

import { useState } from "react";

import { QuantitySelector, SizeSelector } from "@/components";
import type { CartProduct, Product, Size } from "@/interfaces";
import { useCartStore } from '@/store';

interface Props {
  product: Product;
}

export const AddToCart = ({ product }: Props) => {

  const addProductToCart = useCartStore( state => state.addProductTocart );

  const [size, setSize] = useState<Size | undefined>();
  const [quantity, setQuantity] = useState<number>(1);
  const [posted, setPosted] = useState(false);

  const addToCart = () => {
    setPosted(true);

    if (!size) return;

    const cartProduct: CartProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      quantity: quantity,
      size: size,
      image: product.images[0]
    }

    addProductToCart(cartProduct);
    setPosted(false);
    setQuantity(1);
    setSize(undefined);


  };


  return (
    <>
      {posted && !size && (
        <span className="mt-2 text-red-500 fade-in">
          Debe de seleccionar una talla*
        </span>
      )}

      {/* Selector de Tallas */}
      <SizeSelector
        selectedSize={size}
        availableSizes={product.sizes}
        onSizeChanged={setSize}
      />

      {/* Selector de Cantidad */}
      <QuantitySelector quantity={quantity} onQuantityChanged={setQuantity} />

      {/* Button */}
      <button onClick={addToCart} className="btn-primary my-5">
        Agregar al carrito
      </button>
    </>
  );
};
```
=== EOF: src\app\(shop)\product\[slug]\ui\AddToCart.tsx

===  src\app\(shop)\checkout\address\ui\AddressForm.tsx
```tsx
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';


import type { Address, Country } from '@/interfaces';
import { useAddressStore } from '@/store';
import { deleteUserAddress, setUserAddress } from '@/actions';


type FormInputs = {
  firstName: string;
  lastName: string;
  address: string;
  address2?: string;
  postalCode: string;
  city: string;
  country: string;
  phone: string;
  rememberAddress: boolean;
}


interface Props {
  countries: Country[];
  userStoredAddress?: Partial<Address>;
}


export const AddressForm = ({ countries, userStoredAddress = {} }: Props) => {

  const router = useRouter();
  const { handleSubmit, register, formState: { isValid }, reset } = useForm<FormInputs>({
    defaultValues: {
      ...(userStoredAddress as any),
      rememberAddress: false,
    }
  });

  const { data: session } = useSession({
    required: true,
  })

  const setAddress = useAddressStore( state => state.setAddress );
  const address = useAddressStore( state => state.address );



  useEffect(() => {
    if ( address.firstName ) {
      reset(address)
    }
  },[])
  




  const onSubmit = async( data: FormInputs ) => {
    

    const { rememberAddress, ...restAddress } = data;

    setAddress(restAddress);

    if ( rememberAddress ) {
      await setUserAddress(restAddress, session!.user.id );
    } else {
      await deleteUserAddress(session!.user.id);
    }

    router.push('/checkout');

  }



  return (
    <form onSubmit={ handleSubmit( onSubmit ) }  className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2">
      <div className="flex flex-col mb-2">
        <span>Nombres</span>
        <input type="text" className="p-2 border rounded-md bg-gray-200" { ...register('firstName', { required: true  }) } />
      </div>

      <div className="flex flex-col mb-2">
        <span>Apellidos</span>
        <input type="text" className="p-2 border rounded-md bg-gray-200" { ...register('lastName', { required: true  }) } />
      </div>

      <div className="flex flex-col mb-2">
        <span>Dirección</span>
        <input type="text" className="p-2 border rounded-md bg-gray-200" { ...register('address', { required: true  }) } />
      </div>

      <div className="flex flex-col mb-2">
        <span>Dirección 2 (opcional)</span>
        <input type="text" className="p-2 border rounded-md bg-gray-200" { ...register('address2') } />
      </div>

      <div className="flex flex-col mb-2">
        <span>Código postal</span>
        <input type="text" className="p-2 border rounded-md bg-gray-200" { ...register('postalCode', { required: true  }) } />
      </div>

      <div className="flex flex-col mb-2">
        <span>Ciudad</span>
        <input type="text" className="p-2 border rounded-md bg-gray-200" { ...register('city', { required: true  }) } />
      </div>

      <div className="flex flex-col mb-2">
        <span>País</span>
        <select className="p-2 border rounded-md bg-gray-200" { ...register('country', { required: true  }) }>
          <option value="">[ Seleccione ]</option>
          {
            countries.map( country => (
              <option key={ country.id } value={ country.id }>{ country.name }</option>
            ))
          }
        </select>
      </div>

      <div className="flex flex-col mb-2">
        <span>Teléfono</span>
        <input type="text" className="p-2 border rounded-md bg-gray-200" { ...register('phone', { required: true  }) } />
      </div>

      <div className="flex flex-col mb-2 sm:mt-1">
        
        <div className="inline-flex items-center mb-10 ">
          <label
            className="relative flex cursor-pointer items-center rounded-full p-3"
            htmlFor="checkbox"
          >
            <input
              type="checkbox"
              className="border-gray-500 before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
              id="checkbox"
              { ...register('rememberAddress') }
            />
            <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </label>

          <span>¿Recordar dirección?</span>
        </div>

        <button
          disabled={ !isValid }
          // href="/checkout"
          type="submit"
          // className="btn-primary flex w-full sm:w-1/2 justify-center "
          className={ clsx({
            'btn-primary': isValid,
            'btn-disabled': !isValid,
          })}
        >
          Siguiente
        </button>
      </div>
    </form>
  );
};
```
=== EOF: src\app\(shop)\checkout\address\ui\AddressForm.tsx

===  src\app\(shop)\checkout\(checkout)\ui\ProductsInCart.tsx
```tsx
'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';

import { useCartStore } from '@/store';
import { currencyFormat } from '@/utils';



export const ProductsInCart = () => {



  const [loaded, setLoaded] = useState(false);
  const productsInCart = useCartStore( state => state.cart );


  useEffect(() => {
    setLoaded(true) ;
  });




  if( !loaded ) {
    return <p>Loading...</p>
  }

  return (
    <>
      {productsInCart.map((product) => (
        <div key={ `${ product.slug }-${ product.size }`  } className="flex mb-5">
          <Image
            src={`/products/${product.image }`}
            width={100}
            height={100}
            style={{
              width: "100px",
              height: "100px",
            }}
            alt={product.title}
            className="mr-5 rounded"
          />

          <div>
            <span>
              { product.size } - {product.title} ({ product.quantity })
            </span>
            
            <p className="font-bold">{ currencyFormat(product.price * product.quantity )  }</p>

          </div>
        </div>
      ))}
    </>
  );
};
```
=== EOF: src\app\(shop)\checkout\(checkout)\ui\ProductsInCart.tsx

===  src\app\(shop)\checkout\(checkout)\ui\PlaceOrder.tsx
```tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import clsx from 'clsx';

import { placeOrder } from '@/actions';
import { useAddressStore, useCartStore } from "@/store";
import { currencyFormat } from '@/utils';

export const PlaceOrder = () => {

  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);



  const address = useAddressStore((state) => state.address);

  const { itemsInCart, subTotal, tax, total } = useCartStore((state) =>
    state.getSummaryInformation()
  );
  const cart = useCartStore( state => state.cart );
  const clearCart = useCartStore( state => state.clearCart );

  useEffect(() => {
    setLoaded(true);
  }, []);


  const onPlaceOrder = async() => {
    setIsPlacingOrder(true);
    // await sleep(2);

    const productsToOrder = cart.map( product => ({
      productId: product.id,
      quantity: product.quantity,
      size: product.size,
    }))


    //! Server Action
    const resp = await placeOrder( productsToOrder, address);
    if ( !resp.ok ) {
      setIsPlacingOrder(false);
      setErrorMessage(resp.message);
      return;
    }

    //* Todo salio bien!
    clearCart();
    router.replace('/orders/' + resp.order?.id );


  }




  if (!loaded) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="bg-white rounded-xl shadow-xl p-7">
      <h2 className="text-2xl mb-2">Dirección de entrega</h2>
      <div className="mb-10">
        <p className="text-xl">
          {address.firstName} {address.lastName}
        </p>
        <p>{address.address}</p>
        <p>{address.address2}</p>
        <p>{address.postalCode}</p>
        <p>
          {address.city}, {address.country}
        </p>
        <p>{address.phone}</p>
      </div>

      {/* Divider */}
      <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

      <h2 className="text-2xl mb-2">Resumen de orden</h2>

      <div className="grid grid-cols-2">
        <span>No. Productos</span>
        <span className="text-right">
          {itemsInCart === 1 ? "1 artículo" : `${itemsInCart} artículos`}
        </span>

        <span>Subtotal</span>
        <span className="text-right">{currencyFormat(subTotal)}</span>

        <span>Impuestos (15%)</span>
        <span className="text-right">{currencyFormat(tax)}</span>

        <span className="mt-5 text-2xl">Total:</span>
        <span className="mt-5 text-2xl text-right">
          {currencyFormat(total)}
        </span>
      </div>

      <div className="mt-5 mb-2 w-full">
        <p className="mb-5">
          {/* Disclaimer */}
          <span className="text-xs">
            Al hacer clic en &quot;Colocar orden&quot;, aceptas nuestros{" "}
            <a href="#" className="underline">
              términos y condiciones
            </a>{" "}
            y{" "}
            <a href="#" className="underline">
              política de privacidad
            </a>
          </span>
        </p>


        <p className="text-red-500">{ errorMessage }</p>

        <button
          // href="/orders/123"
          onClick={ onPlaceOrder }
          className={
            clsx({
              'btn-primary': !isPlacingOrder,
              'btn-disabled': isPlacingOrder
            })
          }
        >
          Colocar orden
        </button>
      </div>
    </div>
  );
};
```
=== EOF: src\app\(shop)\checkout\(checkout)\ui\PlaceOrder.tsx

