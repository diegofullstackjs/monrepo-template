# Package/Components



#### To local development environment

You need to download Verdaccio docker image, create a container and start it:

```sh
# download the verdaccio docker image
$ yarn verdaccio

# create a user to access the verdaccio registry
$ npm adduser --registry http://localhost:4873
```

To publish the packages locally, you can run at monorepo root or inside the specific package:
```sh
$ yarn pub:local
```

### Unpublish locally

To unpublish the packages locally, you can run at monorepo root or inside the specific package:
```sh
$ yarn unpub:local
```