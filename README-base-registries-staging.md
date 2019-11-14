sam package \
    --profile vbr-staging \
    --template-file ./cloudformation/template.yaml \
    --output-template-file ./cloudformation/packaged.yaml \
    --s3-bucket basisregisters-staging-portal

sam deploy \
    --profile vbr-staging \
    --template-file ./cloudformation/packaged.yaml \
    --stack-name "dev-portal" \
    --s3-bucket basisregisters-staging-portal \
    --capabilities CAPABILITY_NAMED_IAM \
    --parameter-overrides \
    DevPortalSiteS3BucketName="basisregisters-staging-dev-portal-static-assets" \
    ArtifactsS3BucketName="basisregisters-staging-dev-portal-artifacts" \
    CognitoDomainNameOrPrefix="auth.staging-basisregisters.vlaanderen" \
    CognitoDomainAcmCertArn="arn:aws:acm:us-east-1:830031229216:certificate/85eab68b-7099-4c5a-afa5-a20eee27f0d6" \
    StaticAssetRebuildToken="2019-10-15T10:44" \
    StaticAssetRebuildMode="overwrite-content" \
    CustomDomainName="portal.staging-basisregisters.vlaanderen" \
    CustomDomainName2="portal.basisregisters.dev-vlaanderen.be" \
    CustomDomainNameAcmCertArn="arn:aws:acm:us-east-1:830031229216:certificate/929c7ed2-26b9-4128-8d37-c4c17714e69d" \
    UseRoute53Nameservers="false"

aws cloudformation \
    --profile vbr-staging \
    describe-stacks \
    --query "Stacks[?StackName=='dev-portal'][Outputs[?OutputKey=='WebsiteURL']][][].OutputValue"