
## Configuration

### Set up a MongoDB database

Set up a MongoDB database locally 

### Set up environment variables

Copy the `env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local .env.local
```

Set each variable on `.env.local`:

- `MONGODB_URI` - Your MongoDB connection string.

### Run Next.js in development mode

```bash
npm install
npm run dev

# or

yarn install
yarn dev
```

Your app should be up and running on [http://localhost:3000](http://localhost:3000)! 

