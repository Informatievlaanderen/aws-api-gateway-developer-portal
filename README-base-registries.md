sam package \
    --profile vbr-production \
    --template-file ./cloudformation/template.yaml \
    --output-template-file ./cloudformation/packaged.yaml \
    --s3-bucket basisregisters-production-portal

sam deploy \
    --profile vbr-production \
    --template-file ./cloudformation/packaged.yaml \
    --stack-name "dev-portal" \
    --s3-bucket basisregisters-production-portal \
    --capabilities CAPABILITY_NAMED_IAM \
    --parameter-overrides \
    DevPortalSiteS3BucketName="basisregisters-production-dev-portal-static-assets" \
    ArtifactsS3BucketName="basisregisters-production-dev-portal-artifacts" \
    CognitoDomainNameOrPrefix="basisregisters-production" \
    StaticAssetRebuildToken="2019-10-17:11" \
    StaticAssetRebuildMode="overwrite-content" \
    CustomDomainName="portal.basisregisters.vlaanderen" \
    CustomDomainName2="portal.basisregisters.vlaanderen.be" \
    CustomDomainNameAcmCertArn="arn:aws:acm:us-east-1:921707234258:certificate/7f0d73ea-a248-4332-952a-c1124f7e34c2" \
    UseRoute53Nameservers="false"

aws cloudformation \
    --profile vbr-production \
    describe-stacks \
    --query "Stacks[?StackName=='dev-portal'][Outputs[?OutputKey=='WebsiteURL']][][].OutputValue"