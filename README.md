# Own Balloon Website 

## Technology
Full-stack application built using SvelteKit + SST to deploy resources onto AWS

## Local Development

### SSO Configuration
You must first setup the AWS SSO configurations on your local machine.

```
# ~/.aws/config

[sso-session ownballoon]
sso_start_url = https://ownballoon.awsapps.com/start#/
sso_region = us-west-2

[profile ownballoon-dev]
sso_session = ownballoon
sso_account_id = <account-id>
sso_role_name = AdministratorAccess
region = us-west-2

[profile ownballoon-prod]
sso_session = ownballoon
sso_account_id = <account-id>
sso_role_name = AdministratorAccess
region = us-west-2
```

The account ID can be found when you login to the SSO login portal.

### Getting Temporary Credentials
You can run `npm run sso` to run the script to get credentials.