# Strapi Gatsby Blog

Created this app to learn how Strapi and Gatsby work.

Firstly, tried to create the app with `yarn create strapi-starter gatsby-blog gatsby-blog` based on [this article](https://strapi.io/blog/build-a-static-blog-with-gatsby-and-strapi), but didn't work well so that created an app for each Strapi / Gatsby.

Gatsby starter for creating a blog with Strapi.


## Prerequisites

The installation requires the following software to be already installed on your computer:

- Node.js: only LTS versions are supported (v14 and v16). Other versions of Node.js may not be compatible with the latest release of Strapi. The 14.x version is most recommended by Strapi.
- npm (v6 only) or yarn to run the CLI installation scripts.
- Python when using a SQLite database


## Getting started


### Backend - Strapi

#### Create app with CLI

1. Run `yarn create strapi-app backend --quickstart` to create backend

2. If it's successful, `http://localhost:1337/admin/auth/register-admin` will automatically open then register your account

#### Create contents

3. Go to `Content-Type Builder` and click `Create new collection type` to create `Article` collection

4. Add 2 `Text` fields for title and content, then add `Media` field for image

5. Click `Save`

6. Go to `Content Manager` and click `Create new entry`

7. Input `Article` data and click `Save` then click `Publish`

8. Go to `Settings` > `USERS & PERMISSIONS PLUGIN` then click `Roles`

9. Click `Public` and `Article`, then check `find` and `findOne`

10. Click `Save`

#### Create API tokens

11. Go to `Settings` > `GLOBAL SETTINGS` then click `API Tokens`

12. Click `Create new API Token` and choose `Full access`

13. Click `Save` and copy token, then paste it in `.env.development` file at frontend

14. Access to `http://localhost:1337/api/articles` to check your API data

#### Add GraphQL

15. Run `yarn add @strapi/plugin-graphql` at `/backend`

16. After installation, you can play around with GraphQL at `http://localhost:1337/graphql`

##### If you stop running backend, you can restart with `yarn develop`


### Frontend - Gatsby

#### Create app with CLI

1. Run `gatsby new frontend` to create backend

2. Run `yarn add gatsby-source-strapi` at `/frontend`

3. Run `gatsby develop`, then `http://localhost:8000` will automatically open

#### Use GraphQL to get backend data

4. Create a `.env.development` file and add API token

```
STRAPI_TOKEN=your-api-token
STRAPI_API_URL=http://localhost:1337
```

5. Go to `gatsby-config.js` and add this setting inside `plugins`

``` 
{
    resolve: "gatsby-source-strapi",
    options: {
        apiURL: process.env.STRAPI_API_URL || "http://localhost:1337",
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: ['article'],
        singleTypes: [],
    }
}
```

6. You may need to re-run `gatsby develop` after 4 and 5

##### If you stop running backend, you can restart with `gatsby develop`
