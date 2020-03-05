# PR-viever

## Description

List open PRs. Example urls

- https://test.webtest.tre.se/pr-viewer/?repo=tre-se
- https://test.webtest.tre.se/pr-viewer/?repo=tre-se-api

## Build and deploy

0. Update new version in package.json

1. Build and tag a new image

```
./docker.sh {$VERSION}
```

4. Change k8s config
   Update the deploy config with the new version from above

```
   - image: hi3gcontainerregistry.azurecr.io/pr-viewer:{$VERSION}
```

5. Run deploy script

```
./deploy.sh
```
