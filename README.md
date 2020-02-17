# cloudformation-training

## Commands:
### 1.1. Create Stack
```
aws cloudformation create-stack --stack-name cfn-training-bucket-nirdosh \
		--template-body file://01_bucket.yaml \
		--profile $AWS_PROFILE \
		--region $AWS_REGION
```

### 1.2. Create Stack with parameters
```
aws cloudformation create-stack --stack-name cfn-training-bucket-nirdosh \
		--template-body file://03_bucket_with_parameters.yaml \
    --parameters ParameterKey=BucketName,ParameterValue=nirdosh-bucket \
		--profile $AWS_PROFILE \
		--region $AWS_REGION
```

### 2. Update Stack
```
aws cloudformation update-stack --stack-name cfn-training-bucket-nirdosh \
		--template-body file://01_bucket.yaml \
		--profile $AWS_PROFILE \
		--region $AWS_REGION
```

### 3. Delete Stack
```
aws cloudformation delete-stack --stack-name cfn-training-bucket-nirdosh
```
