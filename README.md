# Delete untagged images action

Action to delete untagged images from ghcr.io

## Inputs

### `owner`

**Required** The string "user" or "orgs/ORG_NAME"

### `package`

**Required** The package name

### `token`

**Required** PAT with delete:packages and write:packages scopes

## Example usage

```
uses: jcansdale/delete-untagged-images@master
with:
  owner: user
  package: PACKAGE_NAME
  token: PAT with delete:packages and write:packages scopes
```
